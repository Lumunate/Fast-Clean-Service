"use client";
import React from 'react';
import {Box, Grid} from '@mui/material';
import BookingsCard from './BookingCard';
import NotifCard from './NotifCard';

const Dashboard = () => {
    return (
        <Box sx={{ flexGrow: 1, p: 3, padding: "16px", marginTop: {xs: "1rem", sm: "0"} }}>
            <Grid container spacing={3}>
                <Grid item xs={12} md={8}>
                    <BookingsCard />
                </Grid>
                <Grid item xs={12} md={4}>
                    <NotifCard />
                </Grid>
            </Grid>
        </Box>
    );
};

export default Dashboard;
