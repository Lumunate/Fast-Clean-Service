"use client";
import React from "react";
import { Box, Grid, Typography, styled } from "@mui/material";
import SingleWorkHowDoes from "./SingleWorkHowDoes";
import { useTheme } from "../../../contexts/themeContext";
import HeadingLinesAnimation from "../HeadingLinesAnimation/HeadingLinesAnimation";

const works = [
    {
        id: 1,
        icon: "/howdoesitworkicons/Map-Pin.png",
        title: "Choose your location:",
        description: "We come to you or you bring your car to us.",
    },
    {
        id: 2,
        icon: "/howdoesitworkicons/Settings-Search.png",
        title: "Choose your service:",
        description:
            "Select from our extensive range of cleaning and cleaning services detailing services.",
    },
    {
        id: 3,
        icon: "/howdoesitworkicons/Report--Streamline-Tabler.png",
        title: "Make an appointment:",
        description: "Choose a date and time that suits you",
    },
    {
        id: 4,
        icon: "/howdoesitworkicons/Checks--Streamline.png",
        title: "We will do the rest",
        description: "Enjoy your perfectly cleaned car!",
    },
];

const SectionContainer = styled(Box)(({ theme }) => ({
    position: "relative",
    padding: "2rem 0",
    width: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    marginTop: "10rem",
    "@media (max-width: 768px)": { marginTop: "8rem", },
}));

const ResponsiveGrid = styled(Grid)(({ theme }) => ({
    width: "90%",
    maxWidth: "1500px",
    margin: "0 auto",
    display: "grid",
    gridTemplateColumns: "repeat(4, 1fr)",
    gap: "2rem",
    "@media (max-width: 1400px)": {
        gridTemplateColumns: "repeat(2, 1fr)",
        gridTemplateRows: "repeat(2, auto)",
    },
    "@media (max-width: 768px)": {
        gridTemplateColumns: "1fr",
        gridTemplateRows: "auto",
    },
}));

export default function HowDoesItWork() {
    const { theme } = useTheme();

    // Swap the 3rd and 4th cards for responsive layouts
    const reorderedWorks = [...works];
    if (typeof window !== "undefined" && window.innerWidth <= 1400 && window.innerWidth >= 768) {
        [reorderedWorks[2], reorderedWorks[3]] = [reorderedWorks[3], reorderedWorks[2]];
    }

    return (
        <SectionContainer sx={{ marginBottom: "10rem"}}>
            <Box sx={{ display: "flex", justifyContent: "center", marginBottom: "2rem" }}>
                <HeadingLinesAnimation text="HOW DOES IT WORK?" />
            </Box>

            <ResponsiveGrid>
                {reorderedWorks.map((work, index) => (
                    <Grid
                        item
                        key={work.id}
                        sx={{
                            display: "flex",
                            flexDirection: "column",
                            gap: "2rem",
                        }}
                    >
                        <SingleWorkHowDoes
                            icon={work.icon}
                            title={work.title}
                            description={work.description}
                        />
                    </Grid>
                ))}
            </ResponsiveGrid>

            <Box
                sx={{
                    position: "absolute",
                    top: "50%",
                    left: "5%",
                    right: "5%",
                    zIndex: -1,
                    display: { xs: "block", lg: "block" },
                }}
            >
                <Box
                    sx={{
                        position: "absolute",
                        left: "calc(24% - 22px)",
                        backgroundImage: 'url("/Arrow_04.svg")',
                        width: "75px",
                        height: "75px",
                        backgroundRepeat: "no-repeat",
                        backgroundSize: "contain",
                        filter: theme.palette.mode === "dark" ? "invert(1)" : "none",
                        "@media (max-width: 1400px)": {
                            top: "-12rem",
                            left: "48%",
                        },
                        "@media (max-width: 768px)": {
                            top: "-25rem",
                            left: "45%",
                            transform: "rotate(90deg)",
                            width: "50px",
                        },
                    }}
                />
                <Box
                    sx={{
                        position: "absolute",
                        left: "calc(49% - 22px)",
                        backgroundImage: 'url("/Arrow_04.svg")',
                        width: "75px",
                        height: "75px",
                        backgroundRepeat: "no-repeat",
                        backgroundSize: "contain",
                        filter: theme.palette.mode === "dark" ? "invert(1)" : "none",
                        "@media (max-width: 1400px)": {
                            top: "4rem",
                            left: "72%",
                            transform: "rotate(90deg)",
                        },
                        "@media (max-width: 768px)": {
                            top: "4rem",
                            left: "45%",
                            transform: "rotate(90deg)",
                            width: "50px",
                        },
                    }}
                />
                <Box
                    sx={{
                        position: "absolute",
                        left: "calc(71% - 22px)",
                        backgroundImage: 'url("/Arrow_04.svg")',
                        width: "75px",
                        height: "75px",
                        backgroundRepeat: "no-repeat",
                        backgroundSize: "contain",
                        filter: theme.palette.mode === "dark" ? "invert(1)" : "none",
                        "@media (max-width: 1400px)": {
                            top: "12rem",
                            left: "48%",
                            transform: "scale(-1, -1)",
                        },
                        "@media (max-width: 768px)": {
                            top: "30rem",
                            left: "45%",
                            transform: "rotate(90deg)",
                            width: "50px",
                        },
                    }}
                />
            </Box>
        </SectionContainer>
    );
}
