"use client";
import React from 'react';
import {Box, Typography} from '@mui/material';

const NotificationsPage = () => {
    return (
        <Box
            sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                height: '100vh',
            }}
        >
            <Typography
                variant="h1"
                sx={{
                    fontSize: '5rem',
                    fontWeight: 'bold',
                    color: '#555',
                }}
            >
                Coming Soon!
            </Typography>
        </Box>
    );
};

export default NotificationsPage;
