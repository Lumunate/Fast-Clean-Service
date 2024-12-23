"use client";
import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/all";
import { Box, Typography, styled } from "@mui/material";
import { useTheme } from "../../../contexts/themeContext";
import styles from "./HeadingLinesAnimation.module.css";

gsap.registerPlugin(ScrollTrigger);

const Line = styled("div")(({ theme }) => ({
    position: "absolute",
    width: "80%",
    height: "3px",
    transition: "all 0.3s ease",
    background: `linear-gradient(to right, rgba(207, 207, 207, 0.05), ${theme.palette.primary.accent})`,

    [theme.breakpoints.down("sm")]: {
        width: "50%",
    },
}));

const AboveLine = styled(Line)(({ theme }) => ({
    left: "-50%",
    top: "0",

    [theme.breakpoints.down("sm")]: {
        left: "-25%",
    },
}));

const BelowLine = styled(Line)(({ theme }) => ({
    right: "-50%",
    bottom: "1px",
    background: `linear-gradient(to left, rgba(207, 207, 207, 0.3), ${theme.palette.primary.accent})`,

    [theme.breakpoints.down("sm")]: {
        right: "-25%",
    },
}));

export default function HeadingLinesAnimation({ text, children }) {
    const scrollRef = useRef();
    const { theme } = useTheme();
    const isDarkTheme = theme.palette.mode === "dark";

    useEffect(() => {
        const element = scrollRef.current;

        gsap.fromTo(
            element.querySelector(".heading"),
            {
                opacity: 0,
                y: 50,
            },
            {
                opacity: 1,
                y: 0,
                duration: 1,
                delay: 1,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: element,
                    start: "bottom bottom",
                    once: true,
                },
            }
        );

        gsap.fromTo(
            element.querySelector(".above-line"),
            {
                x: "-200%",
            },
            {
                x: "0%",
                duration: 1,
                delay: 1.5, // 1.5-second delay
                ease: "power3.out",
                scrollTrigger: {
                    trigger: element,
                    start: "bottom bottom",
                    once: true,
                },
            }
        );

        gsap.fromTo(
            element.querySelector(".below-line"),
            {
                x: "200%",
            },
            {
                x: "0%",
                duration: 1,
                delay: 1.5, // 1.5-second delay
                ease: "power3.out",
                scrollTrigger: {
                    trigger: element,
                    start: "bottom bottom",
                    once: true,
                },
            }
        );
    }, []);

    return (
        <div
            ref={scrollRef}
            style={{
                display: "inline-block",
                textAlign: "center",
                position: "relative",
                margin: "20px 0",
            }}
        >
            <AboveLine className="above-line" />
            <Typography
                className="heading"
                sx={{
                    fontSize: { md: "4.8rem", sm: "2.8rem", xs: '2.4rem'},
                    fontWeight: "bold",
                    fontFamily: "Unbounded !important",
                    display: "inline-block",
                    margin: "0",
                    zIndex: 1,
                    position: "relative",
                    padding: "12px 0px",
                    color: isDarkTheme ? "#fff" : "#232E4A",
                }}
            >
                {text || children}
            </Typography>
            <BelowLine className="below-line" />
        </div>
    );
}
