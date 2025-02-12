// app/api/webhooks/route.js
import { NextResponse } from 'next/server';
import Stripe from 'stripe';
import paymentsServices from "../../../../services/payments";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

export async function POST(request) {
    const payload = await request.text();
    const sig = request.headers.get('stripe-signature');

    let event;

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

    // Handle the event
    switch (event.type) {
        // One-time payment success
        case 'checkout.session.completed':
            const session = event.data.object;
            console.log('Payment was successful!', session);
            const userEmail = session.metadata.userEmail;
            console.log('User email:', userEmail);

            // await paymentsServices.savePaymentToDatabase(session);
            break;

        // Subscription created
        case 'customer.subscription.created':
            const subscriptionCreated = event.data.object;
            console.log('Subscription created:', subscriptionCreated);

            // Update your database with the new subscription
            await paymentsServices.saveSubscriptionToDatabase(subscriptionCreated);
            break;

        // Subscription payment succeeded
        case 'invoice.payment_succeeded':
            const invoice = event.data.object;
            console.log('Subscription payment succeeded:', invoice);

            // Update your database or send a confirmation email
            await paymentsServices.handleSubscriptionPayment(invoice);
            break;

        // Subscription canceled
        case 'customer.subscription.deleted':
            const subscriptionDeleted = event.data.object;
            console.log('Subscription canceled:', subscriptionDeleted);

            // Update your database to reflect the canceled subscription
            await paymentsServices.cancelSubscriptionInDatabase(subscriptionDeleted);
            break;

        default:
            console.log(`Unhandled event type: ${event.type}`);
    }

    return NextResponse.json({ received: true }, { status: 200 });
}