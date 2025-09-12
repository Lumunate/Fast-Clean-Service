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
                src="https://res.cloudinary.com/dzfer756j/video/upload/0223_3_y2ikho.mp4"
                autoPlay
                muted
                // loop
                playsInline
                onLoadedMetadata={(e) => (e.currentTarget.currentTime = 10)}
                onTimeUpdate={(e) => {
                    const video = e.currentTarget;
                        // When near end, reset to 10s
                        if (video.duration - video.currentTime < 0.1) {
                            video.currentTime = 10;
                            video.play();
                         }
                     }}
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
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: {
                        xs: "flex-start",
                        lg: "center", // vertically center only on large screens
                    },
                    pt: {
                        xs: "8%", // top padding for small screens
                        lg: 0,    // remove top padding on large
                    },
                    pb: {
                        xs: "10%", // bottom padding for small
                        lg: 0,
                    },
                    mt: {
                        xs: 0,
                        lg: "-10rem",
                    }
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
                            mb: "5rem",
                            fontFamily: "Unbounded",
                            fontSize: "2rem",
                            "@media (min-width:600px)": { fontSize: "3.5rem" },
                            "@media (min-width:900px)": { fontSize: "4rem" },
                            "@media (min-width:1200px)": { fontSize: "4rem" },
                            "@media (min-width:1536px)": { fontSize: "4.8rem" },
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
                                fontSize: "1.5rem",
                                "@media (min-width:600px)": { fontSize: "2rem" },
                                "@media (min-width:900px)": { fontSize: "3rem" },
                                "@media (min-width:1200px)": { fontSize: "3.6rem" },
                                "@media (min-width:1536px)": { fontSize: "4.5rem" },
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
                                fontSize: "1.2rem",
                                "@media (min-width:600px)": { fontSize: "1.6rem" },
                                "@media (min-width:900px)": { fontSize: "2rem" },
                                "@media (min-width:1200px)": { fontSize: "2.4rem" },
                                "@media (min-width:1536px)": { fontSize: "3rem" },
                                color: "white",
                                mb: "5rem",

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
                        mb: "5rem",
                        mt: {xs: "3rem", xl: "0"}
                    }}
                >
                    <Link href="/booking" passHref>
                        <Button
                            variant="contained"
                            sx={{
                                px: "3rem",
                                py: "1.5rem",
                                fontSize: "2rem",
                                "@media (min-width:600px)": { fontSize: "2.2rem" },
                                "@media (min-width:900px)": { fontSize: "2.4rem" },
                                "@media (min-width:1200px)": { fontSize: "2.6rem" },
                                "@media (min-width:1536px)": { fontSize: "2.6rem" },
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
