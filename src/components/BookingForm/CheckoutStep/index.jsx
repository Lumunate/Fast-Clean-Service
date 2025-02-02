import React from "react";
import { Box, Typography } from "@mui/material";
import { BookingFormHeading, BookingFormSubHeading } from "../../mui/BookingFormPackages";
import CheckoutSelection from "./CheckoutStep";

const Index = () => {
  return (
    <Box sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        textAlign: "center",
        justifyContent: "center",
    }}>
      <BookingFormHeading>Checkout</BookingFormHeading>

      <BookingFormSubHeading
        sx={{
          display: { xs: "none", sm: "block" },
        }}
      >
        Please select your preferred checkout method
      </BookingFormSubHeading>

      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",

          "@media (max-width: 600px)": {
            marginTop: "4.1rem",
          },
        }}
      >
        <CheckoutSelection />
      </Box>

      <BookingFormSubHeading
        sx={{
          display: { sm: "block", fontSize: "0.8rem", maxWidth: "550px", color: "#3e3e3e", margin: '2rem auto 0' },
        }}
      >
          *{" "}
          <a href="https://commerce.coinbase.com" target="_blank" rel="noopener noreferrer">
              Coinbase Commerce
          </a>{" "}
          only supports one-time payments. Therefore, our subscription plans can only be purchased via{" "}
          <a href="https://stripe.com" target="_blank" rel="noopener noreferrer">
              Stripe
          </a>.
      </BookingFormSubHeading>
    </Box>
  );
};

export default Index;
