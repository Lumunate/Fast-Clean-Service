"use client";
import { Box, Typography, useMediaQuery } from "@mui/material";
import LiscencePlate from "./LiscencePlate";
import React from "react";
import { useTheme } from "../../../contexts/themeContext";
import {
    BookingFormHeading,
    BookingFormSubHeading,
    BookingFormTagline,
} from "../../mui/BookingFormPackages";
import {useTranslations} from "next-intl";

const Index = ({ plate, setPlate, error, loading }) => {
    const { theme } = useTheme();
    const t = useTranslations('booking');
    const isSmallScreen = useMediaQuery("(max-width:600px)");

    return (
        <Box>
            <BookingFormHeading>{t("steps.1.title")}</BookingFormHeading>

            <BookingFormSubHeading
                sx={{
                    marginBottom: "0",
                }}
            >
                {t("steps.1.description.0")}
            </BookingFormSubHeading>
            <BookingFormSubHeading>
                {t("steps.1.description.1")}
            </BookingFormSubHeading>

            <Box
                sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    flexDirection: "column",
                    padding: "20px",
                }}
            >
                <Box
                    sx={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                    }}
                >
                    <LiscencePlate />
                </Box>

                {error && (
                    <Typography
                        sx={{
                            color: "red",
                            fontSize: "12px",
                            textAlign: "center",
                            marginTop: "1rem",
                        }}
                    >
                        {error}
                    </Typography>
                )}

                {loading && <Typography>Loading...</Typography>}
            </Box>
        </Box>
    );
};

export default Index;
