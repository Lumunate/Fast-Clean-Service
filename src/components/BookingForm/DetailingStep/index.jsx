import {Box} from "@mui/material";
import React from "react";
import DetailingOptions from "./Detailing";
import {BookingFormHeading, BookingFormSubHeading } from "../../mui/BookingFormPackages";
import {useTranslations} from "next-intl";

const Index = () => {
    const t = useTranslations('booking');
  return (
    <Box>
        <BookingFormHeading>{t("steps.6.title")}</BookingFormHeading>

        <BookingFormSubHeading
            sx={{
                marginBottom: "0",
            }}
        >
            {t("steps.6.description.0")}
        </BookingFormSubHeading>
        <BookingFormSubHeading>
            {t("steps.6.description.1")}
        </BookingFormSubHeading>
      <Box>
        <DetailingOptions />
      </Box>
    </Box>
  );
};

export default Index;
