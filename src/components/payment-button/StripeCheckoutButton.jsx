'use client';

import { useState } from 'react';
import Button from '@mui/material/Button';
import CircularProgress from '@mui/material/CircularProgress';
import Alert from '@mui/material/Alert';
import {useSession} from "next-auth/react";

export default function StripeCheckoutButton() {
    const [amount, setAmount] = useState(1000);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const { data: session } = useSession();

    const handleCheckout = async () => {
        setLoading(true);
        setError(null);
        const userEmail = session.user.email;
        const userId = session.user.id;

        try {
            const response = await fetch('/api/stripe/checkout-sessions', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ amount, userEmail, userId }),
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