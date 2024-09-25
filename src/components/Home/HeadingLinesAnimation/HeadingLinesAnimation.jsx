"use client";
import React, {useRef} from "react";
import {gsap} from "gsap";
import {ScrollTrigger} from "gsap/all";
import {Typography} from "@mui/material";
import {useTheme} from "../../../contexts/themeContext";

gsap.registerPlugin(ScrollTrigger);

export default function HeadingLinesAnimation({ text, children }) {
  const scrollRef = useRef();
    const { theme } = useTheme();
    const isDarkTheme = theme.palette.mode === "dark";

  React.useEffect(() => {
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
        ease: "power3.out",
        scrollTrigger: {
          trigger: element,
          start: "bottom bottom", // Trigger when the bottom of the element hits the bottom of the viewport
          once: true, // Run animation only once
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
      <div
        className="above-line"
        style={{
          position: "absolute",
          left: "-70%",
          width: "100%",
          height: "3px",
          background: `linear-gradient(to right, #cfcfcf05, ${theme.palette.primary.accent})`,
          top: "0",
        }}
      ></div>
      <Typography
        className="heading"
        sx={{
          fontSize: { md: "4.8rem", sm: "2rem", xs: '2rem'},
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
      <div
        className="below-line"
        style={{
          position: "absolute",
          right: "-70%",
          width: "100%",
          height: "3px",
          background: `linear-gradient(to left, #cfcfcf30, ${theme.palette.primary.accent})`,
          bottom: "1px",
        }}
      ></div>
    </div>
  );
}
