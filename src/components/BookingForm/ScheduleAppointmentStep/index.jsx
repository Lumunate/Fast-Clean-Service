import {Box} from "@mui/material";
import React from "react";
import {BookingFormHeading, BookingFormSubHeading } from "../../mui/BookingFormPackages";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import SmallScreenView from "./smallScreenView";
import {useTranslations} from "next-intl";

const Index = () => {
    const t = useTranslations('booking');
  return (
    <Box>
        <BookingFormHeading>{t("steps.7.title")}</BookingFormHeading>

        <BookingFormSubHeading
            sx={{
                marginBottom: "0",
            }}
        >
            {t("steps.7.description.0")}
        </BookingFormSubHeading>
        <BookingFormSubHeading>
            {t("steps.7.description.1")}
        </BookingFormSubHeading>
      <Box>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <SmallScreenView />
        </LocalizationProvider>
      </Box>
    </Box>
  );
};

export default Index;
