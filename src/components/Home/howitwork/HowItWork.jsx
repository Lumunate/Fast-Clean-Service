"use client";
import React from "react";
import { Box, Grid, Typography, styled } from "@mui/material";
import SingleWork from "./SingleWork";
import { useTheme } from "../../../contexts/themeContext";
import HeadingLinesAnimation from "../HeadingLinesAnimation/HeadingLinesAnimation";

const works = [
    {
        id: 1,
        icon: "/howitworkicons/laptop.gif",
        title: "Choose your package",
        description: "Choose from one of our packs. This way we know exactly what we can do for you.",
    },
    {
        id: 2,
        icon: "/howitworkicons/appointment.gif",
        title: "Make an appointment",
        description: "Fill in your details so that our retailers know exactly where they can make the car shine.",
    },
    {
        id: 3,
        icon: "/howitworkicons/mail.gif",
        title: "Confirmation",
        description: "After your reservation has been completed, you will receive a confirmation email.",
    },
    {
        id: 4,
        icon: "/howitworkicons/location.gif",
        title: "Cleaning",
        description: "The detailer is on the way with our great workbus to make your car shine!",
    },
];

// Styled components for responsive layout
const SectionContainer = styled(Box)(({ theme }) => ({
    position: "relative",
    padding: "2rem 0",
    width: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
}));

const StepContainer = styled(Grid)(({ theme }) => ({
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    position: "relative",
    textAlign: "center",
}));

const ResponsiveGrid = styled(Grid)(({ theme }) => ({
    width: "90%",
    margin: "0 auto",
    display: "grid",
    gridTemplateColumns: "repeat(4, 1fr)", // Four columns for large screens
    gap: "2rem", // Proper gap between grid items
    "@media (max-width: 1200px)": {
        gridTemplateColumns: "repeat(3, 1fr)",
    },
    "@media (max-width: 900px)": {
        gridTemplateColumns: "repeat(2, 1fr)",
    },
    "@media (max-width: 600px)": {
        gridTemplateColumns: "1fr", // One column for mobile
    },
}));

export default function HowItWork() {
    const { theme } = useTheme();

    return (
        <SectionContainer>
            <Box sx={{ display: "flex", justifyContent: "center", marginBottom: "2rem" }}>
                <HeadingLinesAnimation>W0RKING</HeadingLinesAnimation>
            </Box>

            <Grid
                container
                sx={{
                    width: "90%",
                    margin: "0 auto",
                    paddingLeft: "15rem",
                    "@media (max-width: 1366px)": {
                        paddingLeft: "0",
                        alignItems: "center",
                    },
                    "@media (max-width: 1200px)": {
                        padding: "2rem",
                        alignItems: "center",
                        justifyContent: "center",
                        gap: "2rem",
                    },
                    "@media (max-width: 900px)": {
                        padding: "2rem",
                        width: "100%",
                    },
                }}
            >
                {works.map((work, index) => (
                    <Grid
                        item
                        key={work.id}
                        xs={12}
                        sm={6}
                        lg={3}
                        sx={{
                            display: 'flex',
                            flexDirection: 'column',
                            gap: "2rem",
                        }}
                    >
                        <SingleWork
                            sx={{
                                width: "100%",
                                borderRadius: "24px",
                                maxWidth: "29.5rem",
                                display: "flex",
                                flexDirection: "column",
                                justifyContent: "space-between",
                                backgroundColor: "transparent",
                                color: theme.palette.mode === "light" ? `#212121` : "#fff",
                                flexGrow: 1,
                                opacity: 0,
                                animation: `slideInLTR 1s ease-in-out ${1.5 - 0.3 * index}s 1 forwards`,
                                "@media (max-width: 1200px)": {
                                    maxWidth: "100%",
                                },
                            }}
                            icon={work.icon}
                            title={work.title}
                            description={work.description}
                        />
                    </Grid>
                ))}
            </Grid>

            <Box
                sx={{
                    position: "absolute",
                    top: "50%",
                    left: "5%",
                    right: "5%",
                    zIndex: -1,
                    display: { xs: "none", lg: "block" },
                }}
            >
                <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                    <Box
                        sx={{
                            position: "absolute",
                            top: "10rem",
                            left: "calc(27% - 13px)",
                            transform: "translateY(-50%)",
                            backgroundImage: 'url("/Arrow_04.svg")',
                            width: "100px",
                            height: "100px",
                            backgroundRepeat: "no-repeat",
                            backgroundSize: "contain",
                            filter: theme.palette.mode === "dark" ? "invert(1)" : "none",
                            "@media (max-width: 1380px)": {
                                left: "calc(23% - 13px)",
                                width: "70px",
                            },
                        }}
                    />
                    <Box
                        sx={{
                            position: "absolute",
                            top: "10rem",
                            left: "calc(50% - 22px)",
                            transform: "translateY(-50%)",
                            backgroundImage: 'url("/Arrow_04.svg")',
                            width: "100px",
                            height: "100px",
                            backgroundRepeat: "no-repeat",
                            backgroundSize: "contain",
                            filter: theme.palette.mode === "dark" ? "invert(1)" : "none",
                            "@media (max-width: 1380px)": {
                                left: "calc(47% - 13px)",
                                width: "70px",
                            },
                        }}
                    />
                    <Box
                        sx={{
                            position: "absolute",
                            top: "10rem",
                            left: "calc(73% - 22px)",
                            transform: "translateY(-50%)",
                            backgroundImage: 'url("/Arrow_04.svg")',
                            width: "100px",
                            height: "100px",
                            backgroundRepeat: "no-repeat",
                            backgroundSize: "contain",
                            filter: theme.palette.mode === "dark" ? "invert(1)" : "none",
                            "@media (max-width: 1380px)": {
                                left: "calc(72% - 13px)",
                                width: "70px",
                            },
                        }}
                    />
                </Box>
            </Box>
        </SectionContainer>
    );
}
