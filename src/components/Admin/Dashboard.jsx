"use client";
import React, {useEffect, useState} from "react";
import { Box, Grid } from "@mui/material";
import StatsCards from "./StatsCards";
import BookingsCard from "./BookingCard";
import { useBookings } from "../../contexts/BookingsContext";
import { useSession } from "next-auth/react";

const Dashboard = ({}) => {
  const { bookings } = useBookings();
    const bookingLength = Array.isArray(bookings) ? bookings.length : 0;
    const { data: session, status } = useSession();

    useEffect(() => {
        console.log("🟡 Session status:", status);
        if (session) {
            console.log("🔐 Session object:", session);
        } else {
            console.log("❌ No session available");
        }
    }, [session, status]);

  return (
    <Box sx={{ padding: "16px" }}>
        <StatsCards bookingLenght={bookingLength} />

      <Box sx={{ marginTop: "30px" }}>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <BookingsCard bookings={bookings} />
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default Dashboard;
