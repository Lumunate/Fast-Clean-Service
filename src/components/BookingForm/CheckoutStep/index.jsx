import React from "react";
import { Box, Typography } from "@mui/material";
import { BookingFormHeading, BookingFormSubHeading } from "../../mui/BookingFormPackages";
import CheckoutSelection from "./CheckoutStep";
import Link from "next/link";
import { useTheme } from "../../../contexts/themeContext";

const Index = () => {

  const { theme } = useTheme();

  return (
    <Box>
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
          display: { sm: "block", fontSize: "0.8rem", maxWidth: "530px", color: "#3e3e3e", margin: "2rem auto 0" },
        }}
      >
        *{" "}
        <Link href={"https://www.coinbase.com/"} style={{ color: theme.palette.primary.accentDark }}>
          Coinbase Commerce
        </Link>{" "}
        only supports one-time payments, therefore our subscription plans can only be purchased via <Link href={"https://stripe.com/"} style={{ color: theme.palette.primary.accentDark }}>Stripe</Link>
      </BookingFormSubHeading>
    </Box>
  );
};

export default Index;
