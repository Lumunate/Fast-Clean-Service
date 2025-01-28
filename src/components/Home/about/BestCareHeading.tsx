"use client";
import React, { useEffect, useRef, ReactNode } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/all";
import { Typography } from "@mui/material";
import { useTheme } from "../../../contexts/themeContext";

gsap.registerPlugin(ScrollTrigger);

interface HeadingLinesAnimationProps {
  text?: string;
  children?: ReactNode;
}

export default function HeadingLinesAnimation({ text, children }: HeadingLinesAnimationProps) {
  const scrollRef = useRef<HTMLDivElement | null>(null);
  const { theme } = useTheme();
  const isDarkTheme = theme.palette.mode === "dark";

  useEffect(() => {
    const element = scrollRef.current;

    if (element) {
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
    }
  }, []);

  return (
    <div
      ref={scrollRef}
      style={{
        display: "inline-block",
        textAlign: "start",
        position: "relative",
        margin: "10px 0",
      }}
    >
      <Typography
        className="heading"
        sx={{
          fontSize: { md: "32px", sm: "20px", xs: "18px" },
          fontWeight: "700",
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
      >
        {text || children}
      </Typography>
    </div>
  );
}
