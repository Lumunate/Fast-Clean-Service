import React from "react";
import PackageSelection from "./PackageSelection";
import { Box } from "@mui/material";
import {
    BookingFormHeading,
    BookingFormSubHeading, BookingFormTagline,
} from "../../mui/BookingFormPackages";
import {useTranslations} from "next-intl";

const Index = () => {
    const t = useTranslations('booking');
    return (
        <Box>
            <BookingFormHeading>
                {t("steps.3.title")}
            </BookingFormHeading>

            <BookingFormSubHeading
                sx={{
                    marginBottom: "0",
                }}
            >
                {t("steps.3.description.0")}
            </BookingFormSubHeading>
            <BookingFormSubHeading>
                {t("steps.3.description.1")}
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
                <PackageSelection />
            </Box>
        </Box>
    );
};

export default Index;
