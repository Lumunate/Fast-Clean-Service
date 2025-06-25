"use client";
import React, {useMemo} from "react";
import {Box, Grid, Typography, styled, useMediaQuery} from "@mui/material";
import SingleWorkHowDoes from "./SingleWorkHowDoes";
import { useTheme } from "../../../contexts/themeContext";
import HeadingLinesAnimation from "../HeadingLinesAnimation/HeadingLinesAnimation";
import {useTranslations} from "next-intl";


const SectionContainer = styled(Box)(({ theme }) => ({
    maxWidth:"1440px",
    margin:"0 auto",
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
    width: "100%",
    maxWidth: "1500px",
    margin: "0 auto",
    display: "grid",
    height: "auto",
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
    const t = useTranslations('home.how_it_works');
    const { theme } = useTheme();


    const works = [
        {
            id: 1,
            icon: "/howdoesitworkicons/Map-Pin.png",
            title: t("steps.0.title"),
            description: t("steps.0.description"),
        },
        {
            id: 2,
            icon: "/howdoesitworkicons/Settings-Search.png",
            title: t("steps.1.title"),
            description:
                t("steps.1.description"),
        },
        {
            id: 3,
            icon: "/howdoesitworkicons/Report--Streamline-Tabler.png",
            title: t("steps.2.title"),
            description: t("steps.2.description"),
        },
        {
            id: 4,
            icon: "/howdoesitworkicons/Checks--Streamline.png",
            title: t("steps.3.title"),
            description: t("steps.3.description"),
        },
    ];

    const isSwappedRange = useMediaQuery(
        "(min-width:768px) and (max-width:1400px)"
    );

    // only _reorder_ when in that exact breakpoint range
    const reorderedWorks = useMemo(
        () =>
            isSwappedRange
                ? [works[0], works[1], works[3], works[2]]
                : works,
        [works, isSwappedRange]
    );

    return (
        <SectionContainer sx={{ marginBottom: "15rem", "@media (max-width: 1200px)": {
                marginBottom: "10rem",
            },}}>
            <Box sx={{ display: "flex", justifyContent: "center", marginBottom: "2rem" }}>
                <HeadingLinesAnimation text={t("title")} />
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
                            index={work.id}
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
                    left: "0%",
                    right: "5%",
                    zIndex: -1,
                    display: { xs: "block", lg: "block" },
                }}
            >
                <Box
                    sx={{
                        position: "absolute",
                        left: "calc(26% - 22px)",
                        backgroundImage: 'url("/Arrow_04.svg")',
                        width: "75px",
                        height: "75px",
                        backgroundRepeat: "no-repeat",
                        backgroundSize: "contain",
                        filter: theme.palette.mode === "dark" ? "invert(1)" : "none",
                        "@media (max-width: 1400px)": {
                            top: "-12rem",
                            left: "49%",
                        },
                         "@media (max-width: 768px)": {
                            top: "-26rem",
                            left: "45%",
                            transform: "rotate(90deg)",
                            width: "50px",
                         },
                        "@media (max-width: 400px)": {
                            top: "-26rem",
                            left: "40%",
                            transform: "rotate(90deg)",
                            width: "50px",
                        },
                    }}
                />
                <Box
                    sx={{
                        position: "absolute",
                        left: "calc(51% - 22px)",
                        backgroundImage: 'url("/Arrow_04.svg")',
                        width: "75px",
                        height: "75px",
                        backgroundRepeat: "no-repeat",
                        backgroundSize: "contain",
                        filter: theme.palette.mode === "dark" ? "invert(1)" : "none",
                        "@media (max-width: 1400px)": {
                        width: "40px",
                            top: "1rem",
                            left: "72%",
                            transform: "rotate(90deg)",
                        },
                        "@media (max-width: 768px)": {
                            top: "1rem",
                            left: "45%",
                            transform: "rotate(90deg)",
                            width: "50px",
                        },
                        "@media (max-width: 400px)": {
                            top: "1rem",
                            left: "40%",
                            transform: "rotate(90deg)",
                            width: "50px",
                        },
                    }}
                />
                <Box
                    sx={{
                        position: "absolute",
                        left: "calc(78% - 22px)",
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
                            top: "25.5rem",
                            left: "45%",
                            transform: "rotate(90deg)",
                            width: "50px",
                        },
                        "@media (max-width: 400px)": {
                            top: "25.5rem",
                            left: "40%",
                            transform: "rotate(90deg)",
                            width: "50px",
                        },
                    }}
                />
            </Box>
        </SectionContainer>
    );
}
