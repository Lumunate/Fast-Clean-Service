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
    width: "50%",
    height: "3px",
    transition: "all 0.3s ease",
    background: `linear-gradient(to right, rgba(207, 207, 207, 0.05), ${theme.palette.primary.accent})`,
    "@media (max-width: 600px)": {
        width: "40%",
    },
}));

const AboveLine = styled(Line)(({ theme }) => ({
    left: "-30%",
    top: "0",

    "@media (max-width: 600px)": {
        left: "-10%",
    },
}));

const BelowLine = styled(Line)(({ theme }) => ({
    right: "-30%",
    bottom: "1px",
    background: `linear-gradient(to left, rgba(207, 207, 207, 0.3), ${theme.palette.primary.accent})`,

    "@media (max-width: 600px)": {
        right: "-10%",
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
            toggleActions: "play reverse play reverse",
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
                toggleActions: "play reverse play reverse",
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
                toggleActions: "play reverse play reverse",
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
        margin: "10px 0",
      }}
    >
      <AboveLine className="above-line" />
      <Typography
        className="heading"
        sx={{
          fontSize: { md: "4.8rem", sm: "2.8rem", xs: '2.4rem'},
          fontWeight: "700",
            textAlign: "center",
          fontFamily: "Unbounded !important",
          display: "inline-block",
          margin: "0",
          zIndex: 1,
          position: "relative",
          padding: "12px 0px",
          color: isDarkTheme ? "#fff" : "#232E4A",
          "& .line-break": {
            display: { lg: "inline", md: "none" },
          },
        }}
      >{text || children}
      </Typography>
      <BelowLine className="below-line" />
    </div>
  );
}
