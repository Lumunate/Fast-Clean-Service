import { Box } from "@mui/material";
import {BookingFormHeading, BookingFormSubHeading, BookingFormTagline} from "../../mui/BookingFormPackages";
import Summary from "./Summary";
import React from "react";
import CouponApplier from "./ApplyCouponCode";
import {useTranslations} from "next-intl";

const Index = () => {
    const t = useTranslations('booking');
  return (
    <Box>
        <BookingFormHeading>{t("steps.8.title")}</BookingFormHeading>

        <BookingFormSubHeading
            sx={{
                marginBottom: "0",
            }}
        >
            {t("steps.8.description.0")}
        </BookingFormSubHeading>
        <BookingFormSubHeading>
            {t("steps.8.description.1")}
        </BookingFormSubHeading>
      <Box>
        <Summary />

        <CouponApplier /> 
      </Box>
    </Box>
  );
};

export default Index;
