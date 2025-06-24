"use client";
import React from "react";
import { Typography, Box, useMediaQuery } from "@mui/material";
import { HorizontalServicesDivider, ServicesDivider } from "./ServicesPckgs";

import HeadingLinesAnimation from "../HeadingLinesAnimation/HeadingLinesAnimation";
import { HomePkgBox } from "../../mui/HomePkgs";
import { useTheme } from "../../../contexts/themeContext";

import ThreeDComponent from "./ThreeDComponent";
import CalendarIcon from "../../../../public/decorative/Calendar-Time--Streamline-Tabler.svg";
import ClockIcon from "../../../../public/decorative/Clock-Hour-4--Streamline-Tabler.svg";
import GroupIcon from "../../../../public/decorative/steering.svg";
import UserIcon from "../../../../public/decorative/User-Edit--Streamline-Tabler.svg";
import MapIcon from "../../../../public/decorative/Map-Pin--Streamline-Tabler.svg";
import LeafIcon from "../../../../public/decorative/Leaf--Streamline-Tabler.svg";
import Image from "next/image";
import {useTranslations} from "next-intl";

export default function Services() {
  const { theme } = useTheme();
  const isSmDown = useMediaQuery("(max-width:1050px)");
  const isXsDown = useMediaQuery("(max-width:600px)");
    const t = useTranslations('home.why_choose_us_section');
  {
    /* <Box sx={{ margin: "0 auto", zIndex: 10, width: "100%", maxWidth: "1440px", minWidth: "1200px" }}>
          <ThreeDComponent modelUrl="/models/car_project/CAR_glb.glb" />
        </Box> */
  }
    const services = [
        {
            icon: MapIcon,
            title: t("services.0.title"),
            description: t("services.0.description"),
        },
        {
            icon: ClockIcon,
            title: t("services.1.title"),
            description: t("services.1.description"),
        },
        {
            icon: CalendarIcon,
            title: t("services.2.title"),
            description: t("services.2.description"),
        },
        {
            icon: UserIcon,
            title: t("services.3.title"),
            description: t("services.3.description"),
        },
        {
            icon: LeafIcon,
            title: t("services.4.title"),
            description: t("services.4.description"),
        },
        {
            icon: GroupIcon,
            title: t("services.5.title"),
            description: t("services.5.description"),
        },
    ];


  // Determine cards per row based on screen size
  let cardsPerRow = 3;
  if (isSmDown) {
    cardsPerRow = 2;
  }
  if (isXsDown) {
    cardsPerRow = 1;
  }

  // Split services into rows
  const rows = [];
  for (let i = 0; i < services.length; i += cardsPerRow) {
    rows.push(services.slice(i, i + cardsPerRow));
  }

  return (
    <HomePkgBox
      sx={{
        margin: "5rem auto 16.8rem",
        paddingBottom: "7.5rem",
        width: "100%",

        "@media (max-width: 600px)": {
          margin: "2rem auto 2rem",
        },
      }}
    >
      <Box
        sx={{
            width: "50%",
          margin: "0 auto",
          paddingLeft: "9rem",
          "@media (max-width: 1280px)": { paddingLeft: 0, width: "auto" },
          "@media (max-width: 992px)": { width: "100%", display: "flex", alignItems: "center", justifyContent: "center" },
        }}
      >
        <HeadingLinesAnimation text={t("title")} sx={{ width: "100%" }} />
      </Box>

      {/*<Box sx={{ margin: "0 auto", zIndex: 10, width: "100%", maxWidth: "1440px", minWidth: "1200px" }}>*/}
      {/*  <ThreeDComponent modelUrl="/models/bmw_m5_cs/bmw_m5_cs.glb" />*/}
      {/*</Box>*/}

      <Box
        sx={{
          zIndex: "1",
          padding: "4rem",
          borderRadius: "32px",
          maxWidth: "100%",
          width: "137rem",
          margin: "0 auto",
          textAlign: "left",
          backgroundColor: "rgba(255,255,255,0.05)",
          backdropFilter: "blur(2.4px)",
          border: `1px solid ${theme.palette.mode === "dark" ? "rgba(255,255,255,0.32)" : "rgba(141,141,141,0.4)"}`,
          "& img": {
            filter:
              theme.palette.mode === "dark"
                ? "brightness(0) saturate(100%) invert(36%) sepia(79%) saturate(4576%) hue-rotate(181deg) brightness(98%) contrast(101%)"
                : "none",
          },
          "@media (max-width: 1200px)": {
            padding: "2rem",
          },
          "@media (max-width: 1380px)": {
            maxWidth: "95%",
          },
        }}
      >
        {rows.map((row, rowIndex) => (
          <Box
            key={rowIndex}
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "flex-start",
                marginBottom: rowIndex === 0 ? "6rem" : "0",
              padding: "0 10rem",
              gap: "3rem",
              "@media (max-width: 600px)": {
                flexDirection: "column",
                padding: 0,
                alignItems: "center",
                marginBottom: "2rem",
              },
              "@media (max-width: 1280px)": {
                padding: "0 1rem",
                gap: "1rem",
              },
              "@media (max-width: 1050px)": {
                padding: "0 1rem",
                gap: "1rem",
                  marginBottom: 0,
              },
            }}
          >
            {row.map((service, index) => (
              <React.Fragment key={index}>
                <Box
                  sx={{
                    maxWidth: "270px",
                    height: "auto",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "flex-start",
                    textAlign: "left",
                    padding: "1rem",
                    "@media (max-width: 900px)": {
                      width: "280px",
                    },
                    "@media (max-width: 600px)": {
                      padding: "1.5rem 2rem",
                      textAlign: "center",
                      alignItems: "center",
                    },
                  }}
                >
                  <Image
                    src={service.icon}
                    alt={service.title}
                    width={40}
                    height={40}
                    sx={{
                      "@media (max-width: 600px)": {
                        transform: "scale(0.6)",
                      },
                    }}
                  />
                  <Typography
                    sx={{
                      fontSize: "1.8rem",
                      marginTop: "1.5rem",
                      marginBottom: "0.9rem",
                      fontWeight: 400,
                      "@media (max-width: 600px)": {
                        fontSize: "1.2rem",
                      },
                    }}
                  >
                    {service.title}
                  </Typography>
                  <Typography
                    sx={{
                      fontSize: "1.4rem",
                      fontWeight: 300,
                      "@media (max-width: 600px)": {
                        fontSize: "1rem",
                      },
                    }}
                  >
                    {service.description}
                  </Typography>
                </Box>

                {index < row.length - 1 && (
                  <ServicesDivider
                    flexItem
                    sx={{
                      "@media (max-width: 600px)": {
                        display: "none",
                      },
                    }}
                  />
                )}

                {isXsDown && row !== rows[rows.length - 1] && <HorizontalServicesDivider flexItem />}
              </React.Fragment>
            ))}
          </Box>
        ))}
      </Box>
    </HomePkgBox>
  );
}
