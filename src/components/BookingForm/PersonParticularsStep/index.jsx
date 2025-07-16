import {Box} from "@mui/material";
import React from "react";
import BookingParticulars from "./BookingParticulars";
import {BookingFormHeading, BookingFormSubHeading } from "../../mui/BookingFormPackages";
import {useTranslations} from "next-intl";

const Index = () => {
    const t = useTranslations('booking');
  return (
    <Box>
        <BookingFormHeading>{t("steps.9.title")}</BookingFormHeading>

        <BookingFormSubHeading
            sx={{
                marginBottom: "0",
            }}
        >
            {t("steps.9.description.0")}
        </BookingFormSubHeading>
        <BookingFormSubHeading>
            {t("steps.9.description.1")}
        </BookingFormSubHeading>
        <BookingFormSubHeading sx={{ color: 'red', marginTop: "1rem !important" }}>
            {t("steps.8.warning")}
        </BookingFormSubHeading>
      <Box>
        <BookingParticulars />
      </Box>
    </Box>
  );
};

export default Index;
