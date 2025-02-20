import React from "react";
import LocationSelection from "./LocationSelection";
import { Box, Typography } from "@mui/material";
import {
    BookingFormHeading,
    BookingFormSubHeading,
} from "../../mui/BookingFormPackages";
import {useTranslations} from "next-intl";

const Index = () => {
    const t = useTranslations('booking');
    return (
        <Box>
            <BookingFormHeading>
                {t("steps.0.title")}
            </BookingFormHeading>

            <BookingFormSubHeading
                sx={{
                    display: { xs: "none", sm: "block" },
                    marginBottom: "0",
                }}
            >
                {t("steps.1.description.0")}
            </BookingFormSubHeading>
            <BookingFormSubHeading
                sx={{
                    display: { xs: "none", sm: "block" },
                }}
            >
                {t("steps.1.description.1")}
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
                <LocationSelection />
            </Box>
        </Box>
    );
};

export default Index;
