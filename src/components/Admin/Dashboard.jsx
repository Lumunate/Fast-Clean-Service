"use client";
import React, { useEffect, useState } from "react";
import { Box, Grid } from "@mui/material";
import StatsCards from "./StatsCards";
import BookingsCard from "./BookingCard";
import { useSession } from "next-auth/react";

const Dashboard = () => {
    const [bookingLength, setBookingLength] = useState(0);
    const [bookings, setBookings] = useState([]);
    const { data: session, status } = useSession();

    const fetchBookings = async () => {
        try {
            const response = await fetch('/api/booking');
            const data = await response.json();

            if (Array.isArray(data.data)) {
                setBookings(data.data); // ✅ Set full list
                setBookingLength(data.data.length); // ✅ Set count
            } else {
                console.warn("Unexpected response format from /api/booking");
            }
        } catch (error) {
            console.error("Failed to fetch bookings:", error);
        }
    };

    useEffect(() => {
        fetchBookings();
    }, []);

    return (
        <Box sx={{ padding: "16px" }}>
            <StatsCards bookingLenght={bookingLength} />

            <Box sx={{ marginTop: "30px" }}>
                <Grid container spacing={3}>
                    <Grid item xs={12}>
                        <BookingsCard bookings={bookings} /> {/* ✅ Pass full list */}
                    </Grid>
                </Grid>
            </Box>
        </Box>
    );
};

export default Dashboard;
