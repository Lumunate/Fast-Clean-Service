'use client';

import { useState } from 'react';
import Button from '@mui/material/Button';
import CircularProgress from '@mui/material/CircularProgress';
import Alert from '@mui/material/Alert';

export default function StripeCheckoutButton() {
    const [amount, setAmount] = useState(1000);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const handleCheckout = async () => {
        setLoading(true);
        setError(null);

        try {
            const response = await fetch('/api/stripe/checkout_sessions', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ amount }),
            });

            const { url } = await response.json();

            window.open(url, '_blank');
        } catch (err) {
            setError('An error occurred while processing your request.');
            console.error(err);
        } finally {
            setLoading(false);
        }
    };

    return (
        <>
            <Button
                onClick={handleCheckout}
                disabled={loading}
                startIcon={loading && <CircularProgress size={20} />}
            >
                {loading ? 'Processing...' : 'Subscribe'}
            </Button>
            {error && (
                <Alert severity="error" sx={{ mt: 2, width: '100%' }}>
                    {error}
                </Alert>
            )}
        </>
    );
}