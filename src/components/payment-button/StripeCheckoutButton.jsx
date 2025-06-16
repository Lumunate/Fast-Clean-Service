'use client';

import { useState } from 'react';
import Button from '@mui/material/Button';
import CircularProgress from '@mui/material/CircularProgress';
import Alert from '@mui/material/Alert';
import {useSession} from "next-auth/react";

export default function StripeCheckoutButton({ amount, productName }) {
    // const [amount, setAmount] = useState(1000);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const { data: session } = useSession();

    const handleCheckout = async () => {
        setLoading(true);
        setError(null);
        if (!session) {
      setError("You must be logged in to make a payment.");
      setLoading(false);
      return;
    }

        const userEmail = session.user.email;
        const userId = session.user.id;

        try {
            console.log('productName.selectedPackageType', productName)
            const response = await fetch('/api/stripe/checkout-sessions', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    amount,
                    userEmail,
                    userId,
                    paymentMode: productName === 'Anywhere Autocare' ? 'payment' : 'subscription',
                    productName,
                }),
            });

            const { url } = await response.json();

            if (url) {
        window.open(url, "_blank");
      } else {
        throw new Error("No redirect URL received");
      }
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
                {loading ? 'Processing...' : 'Stripe'}
            </Button>
            {error && (
                <Alert severity="error" sx={{ mt: 2, width: '100%' }}>
                    {error}
                </Alert>
            )}
        </>
    );
}