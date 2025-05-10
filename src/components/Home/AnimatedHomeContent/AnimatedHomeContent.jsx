"use client";
import React, {useEffect, useMemo, useRef, useState} from "react";
import {Typography, Button, Box, IconButton, Link} from "@mui/material";
import {gsap} from "gsap";
import {useTheme} from "../../../contexts/themeContext";
import {HomeHeroContainer} from "../../mui/HomePkgs";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import HomeSocialsBox from "./HomeSocialsBox";
import {useTranslations} from "next-intl";

export default function AnimatedHomeContent() {
    const {theme} = useTheme();
    const t = useTranslations("home.hero_section");

    /* refs & state */
    const mainRef = useRef(null);
    const tl = useRef(null);
    const [mainLine, setMainLine] = useState("");
    const [subLine, setSubLine] = useState("");

    const lines = useMemo(
        () => [
            t("subtitle.0"),
            t("subtitle.1"),
            t("subtitle.2"),
            t("subtitle.3"),
            t("subtitle.4"),
        ],
        [t]
    );

    const subLines = useMemo(
        () => [
            t("subsubtitle.0"),
            t("subsubtitle.1"),
            t("subsubtitle.2"),
            t("subsubtitle.3"),
            t("subsubtitle.4"),
        ],
        [t]
    );

    /* smooth scroll */
    const handleScroll = () =>
        window.scrollBy({top: window.innerHeight, behavior: "smooth"});

    /* headline animation */
    useEffect(() => {
        const container = mainRef.current;
        tl.current = gsap.timeline({repeat: -1});

        lines.forEach((line, i) => {
            tl.current
                .to(container, {
                    opacity: 0,
                    duration: 0.5,
                    ease: "power2.inOut",
                    onComplete: () => {
                        setMainLine(line);
                        setSubLine(subLines[i]);
                    },
                })
                .to(container, {opacity: 1, duration: 0.5, ease: "power2.inOut"})
                .to({}, {duration: 3}); // pause
        });

        /* start with first pair visible */
        setMainLine(lines[0]);
        setSubLine(subLines[0]);
        gsap.set(container, {opacity: 1});

        return () => tl.current && tl.current.kill();
    }, [lines, subLines]);

    /* ─────────────── render ─────────────── */
    return (
        <HomeHeroContainer
            sx={{
                position: "relative",
                width: "100%",
                height: "100vh",
                backgroundColor: "#000",
                overflow: "hidden",
                zIndex: 8,
            }}
        >
            {/* video background */}
            <Box
                component="video"
                src="https://res.cloudinary.com/diiafjy31/video/upload/v1737749000/video_hero_section_website_copy_8C37CC69-DDE3-4F55-AEF7-682AF7A03A3D_zbkp9k.mov"
                autoPlay
                muted
                loop
                playsInline
                sx={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    zIndex: -1,
                }}
            />
            {/* dark overlay */}
            <Box
                sx={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%",
                    backgroundColor: "rgba(0,0,0,0.3)",
                    zIndex: -1,
                }}
            />

            <HomeSocialsBox />

            {/* content */}
            <Box
                sx={{
                    mt: {xs: "8%", md: "-5%", lg: "1%"},
                    mb: "10%",
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                    alignItems: "center",
                }}
            >
                {/* main title & animated lines */}
                <Box
                    sx={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        px: {xs: 2, sm: 0},
                    }}
                >
                    <Typography
                        variant="h1"
                        sx={{
                            letterSpacing: "8px",
                            fontWeight: 700,
                            mb: "6rem",
                            fontFamily: "Unbounded",
                            fontSize: {
                                xs: "2rem",
                                sm: "3.5rem",
                                md: "4rem",
                                lg: "4.8rem",
                            },
                            textAlign: "center",
                            color: "white",
                        }}
                    >
                        {t("title")}
                    </Typography>

                    {/* animated headline */}
                    <Box ref={mainRef}>
                        <Typography
                            variant="h2"
                            sx={{
                                letterSpacing: "2px",
                                textAlign: "center",
                                fontFamily: "Unbounded",
                                fontSize: {
                                    xs: "1.5rem",
                                    sm: "2rem",
                                    md: "3rem",
                                    lg: "4rem",
                                },
                                color: "white",
                            }}
                        >
                            {mainLine}
                        </Typography>

                        <Typography
                            sx={{
                                mt: 1,
                                letterSpacing: "1px",
                                textAlign: "center",
                                fontFamily: "DMSans",
                                fontSize: {xs: "1.2rem", sm: "1.6rem", md: "2rem", lg: "2.4rem"},
                                color: "white",
                            }}
                        >
                            {subLine}
                        </Typography>
                    </Box>
                </Box>

                {/* CTA button */}
                <Box
                    sx={{
                        display: "flex",
                        gap: 2,
                        flexDirection: {xs: "column", sm: "row"},
                        mb: "8rem",
                        mt: {xs: "3rem", xl: "0"}
                    }}
                >
                    <Link href="/booking" passHref>
                        <Button
                            variant="contained"
                            sx={{
                                px: "3rem",
                                py: "1.5rem",
                                fontSize: "1.6rem",
                                fontWeight: "bold",
                                backgroundColor: "primary.accentDark",
                                borderRadius: "50px",
                                color: "white",
                                fontFamily: "DMSans",
                                "&:hover": {backgroundColor: theme.palette.primary.accent},
                            }}
                        >
                            {t("buttons.book_now")}
                        </Button>
                    </Link>
                </Box>

                {/* scroll‑down icon */}
                <IconButton
                    onClick={handleScroll}
                    sx={{
                        animation: "bubbleDown 1s ease-in-out infinite 1s",
                        color: "white",
                        border: "1px solid white",
                        width: 40,
                        height: 40,
                    }}
                >
                    <ArrowDownwardIcon sx={{fontSize: "2rem"}} />
                </IconButton>
            </Box>
        </HomeHeroContainer>
    );
}
