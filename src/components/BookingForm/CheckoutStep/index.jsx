import React from "react";
import { Box, Typography } from "@mui/material";
import { BookingFormHeading, BookingFormSubHeading } from "../../mui/BookingFormPackages";
import CheckoutSelection from "./CheckoutStep";

const Index = () => {
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
          display: { sm: "block", fontSize: "0.8rem", maxWidth: "550px", color: "#3e3e3e", margin: '2rem auto 0' },
        }}
      >
        *Please note that the liability of Cryptoverse Solutions GbR and its shareholders is limited in accordance with our
        General Terms and Conditions. Further information can be found in our General Terms and Conditions.
      </BookingFormSubHeading>
    </Box>
  );
};

export default Index;
