import {Box} from "@mui/material";
import React from "react";
import AdditionalOptions from "./AdditionalOptions";
import {BookingFormHeading, BookingFormSubHeading } from "../../mui/BookingFormPackages";
import {useTranslations} from "next-intl";

const Index = () => {
    const t = useTranslations('booking');
  return (
    <Box>
        <BookingFormHeading>{t("steps.5.title")}</BookingFormHeading>

        <BookingFormSubHeading
            sx={{
                marginBottom: "0",
            }}
        >
            {t("steps.5.description.0")}
        </BookingFormSubHeading>
        <BookingFormSubHeading>
            {t("steps.5.description.1")}
        </BookingFormSubHeading>
      <Box>
        <AdditionalOptions />
      </Box>
    </Box>
  );
};

export default Index;
