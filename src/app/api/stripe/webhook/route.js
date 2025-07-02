import { NextResponse } from 'next/server';
import Stripe from 'stripe';
import paymentsServices from "../../../../services/payments";
import Booking from '../../../../models/Booking';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

export async function POST(request) {
    const payload = await request.text();
    const sig = request.headers.get('stripe-signature');

    let event;
    console.log('Stripe webhook called')
    try {
        // Verify the webhook signature
        event = stripe.webhooks.constructEvent(
            payload,
            sig,
            process.env.STRIPE_WEBHOOK_SECRET
        );
    } catch (err) {
        console.error(`Webhook signature verification failed: ${err.message}`);
        return NextResponse.json({ error: 'Invalid signature' }, { status: 400 });
    }

    console.log('event.typeevent.type', event.type);

    // Handle the event
    switch (event.type) {
        // One-time payment success
        case 'checkout.session.completed':
            const session = event.data.object;
            console.log('Payment was successful!', session);
            const userEmail = session.metadata.userEmail;
            console.log('User email:', userEmail);

            await paymentsServices.savePaymentToDatabase(session);
            const _bookingId = session.metadata.bookingId;
            if (_bookingId) {
                console.log(`[Stripe] Marking booking ${_bookingId} as PAID`);
                await Booking.findByIdAndUpdate(_bookingId, {
                    'payment.status': 'PAID',
                    'payment.provider': 'stripe',
                    'payment.sessionId': session.id,
                    'payment.lastUpdated': new Date(),
                });
            }
            break;

        // Subscription created
        case 'customer.subscription.created':
            const subscriptionCreated = event.data.object;
            console.log('Subscription created:', subscriptionCreated);

            // Update your database with the new subscription
            await paymentsServices.saveSubscriptionToDatabase(subscriptionCreated);
            const bookingId = subscriptionCreated.metadata.bookingId;
            if (bookingId) {
                console.log(`[Stripe] Marking booking ${bookingId} as PAID (subscription start)`);
                await Booking.findByIdAndUpdate(bookingId, {
                    'payment.status': 'PAID',
                    'payment.provider': 'stripe',
                    'payment.sessionId': subscription.id,
                    'payment.lastUpdated': new Date(),
                });
            }
            break;

        // Subscription payment succeeded
        case 'invoice.payment_succeeded':
            const invoice = event.data.object;
            console.log('Subscription payment succeeded:', invoice);

            // Update your database or send a confirmation email
            await paymentsServices.handleSubscriptionPayment(invoice);
            const bookingid = invoice.metadata.bookingId;
            if (bookingid) {
                console.log(`[Stripe] Marking booking ${bookingid} as PAID (renewal)`);
                await Booking.findByIdAndUpdate(bookingid, {
                    'payment.status': 'PAID',
                    'payment.lastUpdated': new Date(),
                });
            }
            break;

        // Subscription canceled
        case 'customer.subscription.deleted':
            const subscriptionDeleted = event.data.object;
            console.log('Subscription canceled:', subscriptionDeleted);

            // Update your database to reflect the canceled subscription
            await paymentsServices.cancelSubscriptionInDatabase(subscriptionDeleted);
            const bookingiD = subscriptionDeleted.metadata.bookingId;
            if (bookingiD) {
                console.log(`[Stripe] Marking booking ${bookingiD} as FAILED (subscription canceled)`);
                await Booking.findByIdAndUpdate(bookingiD, {
                    'payment.status': 'FAILED',
                    'payment.lastUpdated': new Date(),
                });
            }
            break;

        default:
            console.log(`Unhandled event type: ${event.type}`);
    }

    return NextResponse.json({ received: true }, { status: 200 });
}