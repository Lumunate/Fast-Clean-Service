// pages/payment-success.js
'use client';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';

export default function PaymentSuccess() {
  const [open, setOpen] = useState(true);
  const router = useRouter();

  useEffect(() => {
    // Redirect after 3 seconds
    const timer = setTimeout(() => {
      router.push('/');
    }, 3000);

    return () => clearTimeout(timer);
  }, [router]);

  return (
    <Snackbar open={open} autoHideDuration={3000} onClose={() => setOpen(false)}>
      <MuiAlert elevation={6} variant="filled" severity="success">
        🎉 Congratulations, your payment is successful!
      </MuiAlert>
    </Snackbar>
  );
}
