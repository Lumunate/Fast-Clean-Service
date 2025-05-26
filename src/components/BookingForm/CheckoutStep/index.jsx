import React from "react";
import { Box, Typography } from "@mui/material";
import { BookingFormHeading, BookingFormSubHeading } from "../../mui/BookingFormPackages";
import CheckoutSelection from "./CheckoutStep";
import {useTranslations} from "next-intl";
import Link from "next/link";
import { useTheme } from "../../../contexts/themeContext";

const Index = () => {
    const t = useTranslations('booking');

  const { theme } = useTheme();

  return (
    <Box sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        textAlign: "center",
        justifyContent: "center",
    }}>
        <BookingFormHeading>
            {t("steps.10.title")}
        </BookingFormHeading>

        <BookingFormSubHeading
            sx={{
                display: { xs: "none", sm: "block" },
            }}
        >
            {t("steps.10.description.0")}
        </BookingFormSubHeading>

      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",

          "@media (max-width: 600px)": {
            width:'100%',
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
          <a href="https://commerce.coinbase.com" target="_blank" rel="noopener noreferrer">
              Coinbase Commerce
          </a>{" "}
          {t("steps.10.description.1")}{" "}
          <a href="https://stripe.com" target="_blank" rel="noopener noreferrer">
              Stripe
          </a>.
      </BookingFormSubHeading>
    </Box>
  );
};

export default Index;
