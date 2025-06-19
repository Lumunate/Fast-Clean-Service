'use client';

import { Box } from '@mui/material';
import Image from 'next/image';

export default function Preloader() {
    return (
        <Box
            sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: '100%',
                height: '100vh',
            }}
        >
            <Box
                sx={{
                    display: 'inline-block',
                    animation: 'scalePulse 1.5s ease-in-out infinite',
                    '@keyframes scalePulse': {
                        '0%': {
                            transform: 'scale(1)',
                        },
                        '50%': {
                            transform: 'scale(1.05)',
                        },
                        '100%': {
                            transform: 'scale(1)',
                        },
                    },
                }}
            >
                <Image
                    width={300}
                    height={200}
                    src="/updatedLogo.svg"
                    alt="Logo"
                    priority
                    style={{ display: 'block' }}
                />
            </Box>
        </Box>
    );
}
