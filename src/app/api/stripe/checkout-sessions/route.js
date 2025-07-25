import Stripe from 'stripe';
import Booking from '../../../../models/Booking';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

export async function POST(request) {
    try {
        const { amount, userEmail, userId, paymentMode='payment', productName = 'Custom Product', bookingId } = await request.json();

        let price;
        console.log('paymentpaymentpayment', paymentMode);

        if (paymentMode === 'subscription') {
            // Create product and recurring price for subscription
            const product = await stripe.products.create({
                name: productName,
            });

            price = await stripe.prices.create({
                unit_amount: amount * 100,
                currency: 'eur',
                recurring: { interval: 'month' }, // Change to 'year' if needed
                product: product.id,
            });
        } else {
            // Create one-time price without recurring
            price = await stripe.prices.create({
                currency: 'eur',
                unit_amount: amount * 100,
                product_data: {
                    name: productName,
                },
            });
        }

        // Create the checkout session
        const session = await stripe.checkout.sessions.create({
            success_url: `${process.env.NEXT_PUBLIC_BASE_URL}/en/booking/payment-success`,
            cancel_url: `${process.env.NEXT_PUBLIC_BASE_URL}/booking`,
            payment_method_types: ['card', 'ideal'],
            mode: paymentMode === 'subscription' ? 'subscription' : 'payment',
            line_items: [
                {
                    price: price.id,
                    quantity: 1,
                },
            ],
            client_reference_id: userId,
            customer_email: userEmail,
            metadata: {
                userEmail,
                userId,
                paymentMode,
                bookingId,
            },
        });

        console.log('[Stripe] Created session', session.id, 'for booking', bookingId);

        await Booking.findByIdAndUpdate(bookingId, {
            payment: {
                provider: 'stripe',
                sessionId: session.id,
                status: 'PENDING',
                lastUpdated: new Date(),
            }
        });

        return new Response(JSON.stringify({ url: session.url }), {
            status: 200,
            headers: {
                'Content-Type': 'application/json',
            },
        });
    } catch (error) {
        console.error('Error creating Stripe session:', error);
        return new Response(JSON.stringify({ error: 'Failed to create checkout session' }), {
            status: 500,
            headers: {
                'Content-Type': 'application/json',
            },
        });
    }
}
