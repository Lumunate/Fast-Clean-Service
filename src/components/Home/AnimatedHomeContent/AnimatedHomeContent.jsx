"use client";
import React, { useEffect, useMemo, useRef, useState } from "react";
import { Typography, Button, Box, IconButton, Link } from "@mui/material";
import { gsap } from "gsap";
import { useTheme } from "../../../contexts/themeContext";
import { HomeHeroContainer } from "../../mui/HomePkgs";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import HomeSocialsBox from "./HomeSocialsBox";

const AnimatedHomeContent = () => {
  const { theme } = useTheme();

  const typographyRef = useRef(null);
  const tlRef = useRef(null);
  const [currentText, setCurrentText] = useState("");

  const lines = useMemo(() => [
    "Your clean card is our calling card!",
    "The number 1 in the field of specialist car cleaning!",
    "We come on location.",
  ], []);

  const handleScroll = () => {
    window.scrollBy({
      top: window.innerHeight,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    const container = typographyRef.current;

    tlRef.current = gsap.timeline({ repeat: -1 });

    lines.forEach((line, index) => {
      tlRef.current
        .to(container, {
          opacity: 0,
          duration: 0.5,
          ease: "power2.inOut",
          onComplete: () => setCurrentText(line),
        })
        .to(container, {
          opacity: 1,
          duration: 0.5,
          ease: "power2.inOut",
        })
        .to({}, { duration: 3 }); // Pause for 2 seconds
    });

    // Start with the first line visible
    setCurrentText(lines[0]);
    gsap.set(container, { opacity: 1 });

    return () => {
      if (tlRef.current) tlRef.current.kill();
    };
  }, [lines]);

  return (
      <HomeHeroContainer
          sx={{
              position: "relative",
              width: "100%",
              height: "100vh",
              backgroundColor: "#000",
              overflow: "hidden",
              zIndex: "8",
          }}
      >
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

      <HomeSocialsBox />
      <Box
        sx={{
          marginTop: "8%",
          marginBottom: "10%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          alignItems: "center",
            "@media (max-width: 1380px)": {
                marginTop: "-5%",
            },
            "@media (max-width: 900px)": {
                marginTop: "8%",
            },
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            // justifyContent: "space-between",
            alignItems: "center",
              "@media (max-width: 600px)": {
                padding: "2rem",
              },
          }}
        >
          <Typography
            variant="h1"
            sx={{
              animation: "fadeIn 1s ease-in-out forwards",
              // marginTop: "-30rem",
              letterSpacing: "8px",
              fontWeight: 700,
              marginBottom: "6rem",
              fontFamily: "Unbounded",
              fontSize: {
                xs: "2rem",
                sm: "3.5rem",
                md: "4rem",
                lg: "4.8rem",
                xl: "4.8rem",
              },
              textAlign: "center",
              color: "white",
            }}
          >
            FAST CLEAN SERVICE
          </Typography>
          <Box ref={typographyRef}>
            <Typography
              sx={{
                letterSpacing: "2px",
                textAlign: "center",
                fontFamily: "Unbounded",
                fontSize: {
                  xs: "1.5rem",
                  sm: "2rem",
                  md: "3rem",
                  lg: "4rem",
                  xl: "4rem",
                },
                color: "white",
                marginBottom: "7rem",
              }}
              variant="h2"
            >
              {currentText}
            </Typography>
          </Box>
        </Box>
        <Box
          sx={{
            display: "flex",
            gap: "2rem",
            flexDirection: { xs: "column", sm: "row" },
            margin: "0 auto",
            marginBottom: "8rem",
          }}
        >
            <Link href="/booking" passHref>
                <Button
                    variant="contained"
                    sx={{
                        padding: "1.5rem 3rem",
                        fontSize: "1.6rem",
                        fontWeight: "bold",
                        backgroundColor: "primary.accentDark",
                        color: "white",
                        fontFamily: "DMSans",
                        "&:hover": {
                            backgroundColor: theme.palette.primary.accent,
                        },
                    }}
                >
                    Book Now
                </Button>
            </Link>
        </Box>

        <IconButton
          onClick={handleScroll}
          sx={{
            animation: "bubbleDown 1s ease-in-out infinite 1s",
            backgroundColor: "transparent",
            color: "white",
            padding: "1rem",
            border: "1px solid white",
            width: "40px",
            height: "40px",
          }}
        >
          <ArrowDownwardIcon sx={{ fontSize: "2rem" }} />
        </IconButton>
      </Box>
    </HomeHeroContainer>
  );
};

export default AnimatedHomeContent;
