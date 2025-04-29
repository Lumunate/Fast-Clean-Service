"use client";
import React from "react";
import { Box, Grid } from "@mui/material";
import StatsCards from "./StatsCards";
import BookingsCard from "./BookingCard";
import { useBookings } from "../../contexts/BookingsContext";

const Dashboard = ({}) => {
  const { bookings } = useBookings();
    const bookingLength = Array.isArray(bookings) ? bookings.length : 0;

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
