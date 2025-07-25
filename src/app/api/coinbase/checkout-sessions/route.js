import { NextResponse } from 'next/server';
import Booking from '../../../../models/Booking';
import paymentsServices from '../../../../services/payments';

export async function POST(request) {
    try {
        const { amount, currency, description, customerEmail, userId, bookingId } = await request.json();

        const payload = {
            name: 'Your Product Name',
            description: description || 'Subscription Payment',
            local_price: {
                amount: amount.toString(),
                currency: currency || 'USD',
            },
            pricing_type: 'fixed_price',
            // redirect_url: 'https://yourdomain.com/success',
            redirect_url: `${process.env.NEXT_PUBLIC_BASE_URL}/en/booking/payment-success`,
            cancel_url: `${process.env.NEXT_PUBLIC_BASE_URL}/en/cancel`,
            metadata: {
                customer_email: customerEmail,
                userId,
                bookingId,
            },
        };

        const COINBASE_API_URL = 'https://api.commerce.coinbase.com/charges';

        // Make the POST request using fetch
        const response = await fetch(COINBASE_API_URL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'X-CC-Api-Key': process.env.COINBASE_API_KEY,
                'X-CC-Version': '2018-03-22', // Verify if this is the latest version
            },
            body: JSON.stringify(payload),
        });

        if (!response.ok) {
            const errorData = await response.json();
            console.error('Error creating payment session:', errorData);
            return NextResponse.json(
                { error: 'Failed to create payment session' },
                { status: response.status }
            );
        }

        const data = await response.json();
        await paymentsServices.saveCoinbaseChargeToDatabase(data);

        return NextResponse.json({ checkoutUrl: data.data.hosted_url });
    } catch (error) {
        console.error('Coinbase checkout error:', error);
        return NextResponse.json(
            { error: 'Failed to create payment session' },
            { status: 500 }
        );
    }
}
