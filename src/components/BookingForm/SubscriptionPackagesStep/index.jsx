import { Box } from "@mui/material";
import SubscriptionPackages from "./SubscriptionPackages";
import {BookingFormHeading, BookingFormSubHeading } from "../../mui/BookingFormPackages";
import React from "react";
import {useTranslations} from "next-intl";

const Index = () => {
    const t = useTranslations('booking');
  return (
    <Box>
      <BookingFormHeading>
          {t("steps.4.title")}
      </BookingFormHeading>

        <BookingFormSubHeading
            sx={{
                marginBottom: "0",
            }}
        >
            {t("steps.4.description.0")}
        </BookingFormSubHeading>
        <BookingFormSubHeading>
            {t("steps.4.description.1")}
        </BookingFormSubHeading>

      <Box sx={{ marginBottom: "3rem"}}>
        <SubscriptionPackages />
      </Box>
    </Box>
  );
};

export default Index;
