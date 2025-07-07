import { NextResponse } from 'next/server';
import crypto from 'crypto';
import paymentsServices from '../../../../services/payments';

export async function POST(req) {
    const rawBody = await req.text();
    const signature = req.headers.get('x-cc-webhook-signature') || '';
    const secret = process.env.COINBASE_WEBHOOK_SECRET;

    const hmac = crypto.createHmac('sha256', secret);
    hmac.update(rawBody, 'utf8');
    const expectedSignature = hmac.digest('hex');

    if (signature !== expectedSignature) {
        return NextResponse.json({ error: 'Invalid signature' }, { status: 400 });
    }

    const event = JSON.parse(rawBody);

    // Delegate to your service (which will update both Payments collection and Booking.payment)
    await paymentsServices.handleCoinbaseWebhook(event);

    return NextResponse.json({ received: true });
}
