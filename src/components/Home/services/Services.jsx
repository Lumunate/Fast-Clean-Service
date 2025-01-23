"use client";
import React from "react";
import { Typography, Box, useMediaQuery } from "@mui/material";
import { ServicesDivider } from "./ServicesPckgs";

import HeadingLinesAnimation from "../HeadingLinesAnimation/HeadingLinesAnimation";
import { HomePkgBox } from "../../mui/HomePkgs";
import { useTheme } from "../../../contexts/themeContext";

import CalendarIcon from "../../../../public/decorative/Calendar-Time--Streamline-Tabler.svg";
import ClockIcon from "../../../../public/decorative/Clock-Hour-4--Streamline-Tabler.svg";
import GroupIcon from "../../../../public/decorative/Group 29.svg";
import UserIcon from "../../../../public/decorative/User-Edit--Streamline-Tabler.svg";
import MapIcon from "../../../../public/decorative/Map-Pin--Streamline-Tabler.svg";
import LeafIcon from "../../../../public/decorative/Leaf--Streamline-Tabler.svg";
import Image from "next/image";

export default function Services() {
    const { theme } = useTheme();
    const isSmDown = useMediaQuery("(max-width:900px)");
    const isXsDown = useMediaQuery("(max-width:600px)");

    const services = [
        {
            icon: MapIcon,
            title: "On-Site Service",
            description: "Our experienced professionals come to you with our own material.",
        },
        {
            icon: ClockIcon,
            title: "Time Efficiency",
            description: "Top-quality mobile steam cleaning that saves you time.",
        },
        {
            icon: CalendarIcon,
            title: "Open 7 Days a Week",
            description: "Get in touch with us through various channels.",
        },
        {
            icon: UserIcon,
            title: "Easy Booking",
            description: "Just book the appointment online and leave the rest to us.",
        },
        {
            icon: LeafIcon,
            title: "Eco-Friendly",
            description: "We use 3 liters per car for great results.",
        },
        {
            icon: GroupIcon,
            title: "Interior Care",
            description: "Find answers to frequently asked questions.",
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
                margin: "5rem auto 6rem",
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
                    "@media (max-width: 1280px)": { paddingLeft: 0 },
                }}
            >
                <HeadingLinesAnimation text="WHY CHOOSE US" sx={{ width: "50%" }} />
            </Box>

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
                    border: `1px solid ${
                        theme.palette.mode === "dark"
                            ? "rgba(255,255,255,0.32)"
                            : "rgba(141,141,141,0.4)"
                    }`,
                    "& img": {
                        filter:
                            theme.palette.mode === "dark"
                                ? "brightness(0) saturate(100%) invert(36%) sepia(79%) saturate(4576%) hue-rotate(181deg) brightness(98%) contrast(101%)"
                                : "none",
                    },
                    "@media (max-width: 600px)": {
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
                            marginBottom: rowIndex === rows.length - 1 ? 0 : "6rem",
                            padding: "0 9rem",
                            gap: "3rem",
                            "@media (max-width: 600px)": {
                                flexDirection: "column",
                                padding: 0,
                                alignItems: "center",
                                marginBottom: rowIndex === rows.length -1 ? 0 : "2rem",
                            },
                            "@media (max-width: 1280px)": {
                                padding: "0 3rem",
                                gap: "auto",
                            },
                        }}
                    >
                        {row.map((service, index) => (
                            <React.Fragment key={index}>
                                <Box
                                    sx={{
                                        maxWidth: "288px",
                                        height: "auto",
                                        display: "flex",
                                        flexDirection: "column",
                                        justifyContent: "flex-start",
                                        textAlign: "left",
                                        padding: "1rem",
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
                                            marginBottom: "1.5rem",
                                            "@media (max-width: 600px)": {
                                                transform: "scale(0.6)",
                                            },
                                        }}
                                    />
                                    <Typography
                                        sx={{
                                            fontSize: "2.2rem",
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
                                        orientation="vertical"
                                        variant="middle"
                                        flexItem
                                        sx={{
                                            "@media (max-width: 600px)": {
                                                display: "none",
                                            },
                                        }}
                                    />
                                )}
                            </React.Fragment>
                        ))}
                    </Box>
                ))}
            </Box>
        </HomePkgBox>
    );
}
