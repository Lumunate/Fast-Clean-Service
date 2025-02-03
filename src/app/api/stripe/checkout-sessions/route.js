// app/api/checkout-sessions/route.js
import Stripe from 'stripe';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

export async function POST(request) {
    const { amount, userEmail, userId, paymentMode } = await request.json();

    const price = await stripe.prices.create({
        currency: 'eur',
        unit_amount: amount,
        product_data: {
            name: 'Custom Payment',
        },
    });

    const session = await stripe.checkout.sessions.create({
        success_url: 'http://localhost:3000/user/checkout-success',
        cancel_url: 'http://localhost:3000/user/subscriptions',
        payment_method_types: ['card', 'ideal'],
        line_items: [
            {
                price: price.id,
                quantity: 1,
            },
        ],
        mode: 'payment',
        client_reference_id: userId,
        customer_email: userEmail,
        metadata: {
            userEmail: userEmail,
            userId: userId,
            paymentMode: paymentMode
        },
    });

    return new Response(JSON.stringify({ url: session.url }), {
        status: 200,
        headers: {
            'Content-Type': 'application/json',
        },
    });
}