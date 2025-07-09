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

    const type = event.event.type;
    console.log('[Coinbase] Received event:', type);

    switch (type) {
        case 'charge:created': {
            const data = event.event.data;
            await paymentsServices.saveCoinbaseChargeToDatabase(data);
            break;
        }

        case 'charge:confirmed': {
            await paymentsServices.handleCoinbaseWebhook(event);
            break;
        }

        case 'charge:failed': {
            const data = event.event.data;
            const bookingId = data.metadata?.bookingId;
            if (bookingId) {
                console.log(`[Coinbase] Marking booking ${bookingId} as FAILED`);
                await Booking.findByIdAndUpdate(bookingId, {
                    payment: {
                        provider: 'coinbase',
                        sessionId: data.code,
                        status: 'FAILED',
                        lastUpdated: new Date(),
                    }
                });
            }
            break;
        }

        default:
            console.log(`[Coinbase] Unhandled event type: ${type}`);
    }

    return NextResponse.json({ received: true }, { status: 200 });
}
