'use client';

import { useState } from 'react';
import Button from '@mui/material/Button';
import CircularProgress from '@mui/material/CircularProgress';
import Alert from '@mui/material/Alert';

const PaymentButton = ({ amount, currency, description, customerEmail }) => {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const handlePayment = async () => {
        setLoading(true);
        setError(null);
        try {
            const sanitizedAmount = typeof amount === 'string' ? amount.replace(/[^0-9.]/g, '') : amount;
            const response = await fetch('/api/payments/create-payment-session', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    amount: sanitizedAmount,
                    currency,
                    description,
                    customerEmail,
                }),
            });

            const data = await response.json();

            if (response.ok && data.checkoutUrl) {
                window.open(data.checkoutUrl, '_blank');
            } else {
                const errorMessage = data.error || 'Checkout URL not found.';
                setError(errorMessage);
            }
        } catch (err) {
            setError('Failed to initiate payment.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <>
            <Button
                onClick={handlePayment}
                disabled={loading}
                startIcon={loading && <CircularProgress size={20} />}
            >
                {loading ? 'Processing...' : 'Pay Now'}
            </Button>
            {error && (
                <Alert severity="error" sx={{ mt: 2, width: '100%' }}>
                    {error}
                </Alert>
            )}
        </>
    );
};

export default PaymentButton;