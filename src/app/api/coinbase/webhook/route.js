import { NextResponse } from 'next/server';
import crypto from 'crypto';

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

    if (event.event.type === 'charge:confirmed') {
        const metadata = event.event.data.metadata;
        const chargeCode = event.event.data.code;

        // ✅ Mark user as paid / activate subscription
        // e.g., update user in DB by metadata.customer_email

        console.log('Payment confirmed for:', metadata.customer_email);
        const bookingId = metadata.bookingId;
        if (bookingId) {
            console.log(`[Coinbase] Marking booking ${bookingId} as PAID`);
            await Booking.findByIdAndUpdate(bookingId, {
                'payment.status': 'PAID',
                'payment.provider': 'coinbase',
                'payment.sessionId': event.data.code,
                'payment.lastUpdated': new Date(),
            });
        }
    }

    return NextResponse.json({ received: true });
}
