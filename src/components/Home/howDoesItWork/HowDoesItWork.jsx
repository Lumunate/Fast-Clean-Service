"use client";
import React from "react";
import { Box, Grid, Typography, styled } from "@mui/material";
import SingleWorkHowDoes from "./SingleWorkHowDoes";
import { useTheme } from "../../../contexts/themeContext";
import HeadingLinesAnimation from "../HeadingLinesAnimation/HeadingLinesAnimation";

const works = [
    {
        id: 1,
        icon: "/howdoesitworkicons/Baby Calendar.png",
        title: "Choose your location:",
        description: "We come to you or you bring your car to us.",
    },
    {
        id: 2,
        icon: "/howdoesitworkicons/Baby Calendar.png",
        title: "Choose your service:",
        description: "Select from our extensive range of cleaning and cleaning services detailing services.",
    },
    {
        id: 3,
        icon: "/howdoesitworkicons/Baby Calendar.png",
        title: "Make an appointment:",
        description: "Choose a date and time that suits you",
    },
    {
        id: 4,
        icon: "/howdoesitworkicons/Baby Calendar.png",
        title: "We will do the rest",
        description: "Enjoy your perfectly cleaned car!",
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

export default function HowDoesItWork() {
    const { theme } = useTheme();

    return (
        <SectionContainer sx={{ maxWidth:"1330px", marginTop:"5.25rem",marginBottom:"14rem", marginLeft:"auto", marginRight:"auto"}}>
            <Box sx={{ display: "flex", justifyContent: "center", marginBottom: "2rem" }}>
            <HeadingLinesAnimation
      text="How Does It Work?"
    />
            </Box>

            <Grid
                container
                sx={{
                    width: "100%",
                    margin: "0 auto",
                    paddingTop: "5.8rem",
                    display: "flex",
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
                            width: "100%",
                            display: 'flex',
                            flexDirection: 'column',
                            gap: "2rem",
                        }}
                    >
                        <SingleWorkHowDoes
                            sx={{
                                width: "100%",
                                // borderRadius: "24px",
                                // maxWidth: "29.5rem",
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
                            top: "4rem",
                            left: "calc(20% - 13px)",
                            transform: "translateY(-50%)",
                            backgroundImage: 'url("/Arrow_04.svg")',
                            width: "76px",
                            height: "76px",
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
                            top: "4rem",
                            left: "calc(48% - 22px)",
                            transform: "translateY(-50%)",
                            backgroundImage: 'url("/Arrow_04.svg")',
                            width: "75px",
                            height: "75px",
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
                            top: "4rem",
                            left: "calc(74% - 22px)",
                            transform: "translateY(-50%)",
                            backgroundImage: 'url("/Arrow_04.svg")',
                            width: "75px",
                            height: "75px",
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
