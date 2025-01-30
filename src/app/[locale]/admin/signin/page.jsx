"use client"

import { getSession, signIn } from 'next-auth/react';
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { Box, Container, Typography } from '@mui/material';
import {CustomFormButton, CustomFormTextField} from "../../../../components/mui/FormPkgs";

export default function AdminSignIn() {
    const router = useRouter();

    useEffect(() => {
        const checkAdminSession = async () => {
            const session = await getSession();
            if (session && session.user.isAdmin) {
                router.push('/admin');
            }
        };

        checkAdminSession();
    }, [router]);

    const handleSignIn = (e) => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;

        signIn('credentials', {
            redirect: false,
            email,
            password,
            callbackUrl: '/admin',
        }).then(({ ok }) => {
            if (ok) {
                router.push('/admin');
            } else {
                alert('Invalid credentials or not an admin');
            }
        });
    };

    return (
        <Container maxWidth="sm" sx={{ mt: 4 }}>
            <Box
                component="form"
                onSubmit={handleSignIn}
                sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    gap: 2,
                    padding: 3,
                    boxShadow: "0px 4px 10px rgba(0,0,0,0.2)",
                    borderRadius: "8px",
                    backgroundColor: "primary.main",
                }}
            >
                <Typography variant="h4" sx={{ color: "primary.accent" }}>
                    Sign In
                </Typography>
                <CustomFormTextField
                    label="Email"
                    name="email"
                    type="email"
                    variant="outlined"
                    fullWidth
                    required
                    sx={{ backgroundColor: "white", borderRadius: "8px" }}
                />
                <CustomFormTextField
                    label="Password"
                    name="password"
                    type="password"
                    variant="outlined"
                    fullWidth
                    required
                    sx={{ backgroundColor: "white", borderRadius: "8px" }}
                />
                <CustomFormButton
                    type="submit"
                    fullWidth
                >
                    Sign In
                </CustomFormButton>
            </Box>
        </Container>
    );
}
