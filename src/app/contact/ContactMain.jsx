"use client";
import React from "react";
import { Box, Typography, useMediaQuery } from "@mui/material";
import Form from "./Form";
import {
    GrayBox,
    ImageWrapper,
    Container,
} from "../../components/mui/ContactPkgs";
import MapComponent from "../../components/Contact/MapComponent";
import ContactCard from "../../components/Contact/ContactCard";
import ContactCard2 from "../../components/Contact/ContactCard2";
import HeadingLinesAnimation from "../../components/Home/HeadingLinesAnimation/HeadingLinesAnimation";
import { useTheme } from "../../contexts/themeContext";

export default function ContactMain() {
    const { theme } = useTheme();

    const isScreenSmall = useMediaQuery('(max-width:1368px)');
    const isVerySmallScreen = useMediaQuery('(max-width:600px)');

    const largeScreenLayout = (
        <Container sx={{ paddingLeft: "2rem !important" }}>
            <GrayBox flex={1}>
                <ImageWrapper>
                    <MapComponent />
                </ImageWrapper>
            </GrayBox>

            <GrayBox flex={1}>
                <Box
                    sx={{
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "space-between",
                        height: "100%",
                        padding: "2rem 0",
                    }}
                >
                    <Box sx={{ marginBottom: "2rem", textAlign: "center" ,marginBottom: "2rem", }}>
                        <HeadingLinesAnimation text="CONTACT US" />
                        
                    </Box>
                    <Box sx={{maxWidth:"768px", textAlign:"center"}}>
                        <Typography sx={{ fontSize:"22px", fontWeight:400}}>Always Available for You</Typography>
                        <Typography sx={{ fontSize:"15px", fontWeight:300,textAlign:"left"}}>Do you have a question or would you like to make an appointment? Simply contact us! Fast Clean Service are ready to help you with professional steam cleaning and car detailing, both on location and at our branch.</Typography>


                    </Box>

                    <Form />

                    <Box
                        sx={{
                            display: "flex",
                            gap: "2rem",
                            marginTop: "2rem",
                        }}
                    >
                        <ContactCard
                            sx={{
                                boxShadow:
                                    theme.palette.mode === "light" ? "0px 4px 7px rgba(0, 0, 0, 0.25)" : "0px 4px 7px rgba(0, 0, 0, 0.5)",
                                transition: "box-shadow 0.3s ease",
                            }}
                        />
                        <ContactCard2
                            sx={{
                                boxShadow:
                                    theme.palette.mode === "light" ? "0px 4px 7px rgba(0, 0, 0, 0.25)" : "0px 4px 7px rgba(0, 0, 0, 0.5)",
                                transition: "box-shadow 0.3s ease",
                            }}
                        />
                    </Box>
                </Box>
            </GrayBox>
        </Container>
    );

    const smallScreenLayout = (
        <Container
            sx={{
                display: "flex",
                flexDirection: "column",
                gap: "2rem",
                padding: "2rem",
                position: "relative",
                alignItems: "center",
                justifyContent: "center",
            }}
        >
            <Box
                sx={{
                    flex: 1,
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "space-between",
                    gap: "2rem",
                    width: "100%",
                }}
            >
                <GrayBox flex={1}>
                    <ImageWrapper>
                        <MapComponent />
                    </ImageWrapper>
                </GrayBox>

                <GrayBox
                    flex={1}
                    sx={{
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "space-between",
                        padding: "1rem",
                        position: "relative",
                        width: "100%",
                        "@media (min-width: 900px)": {
                            alignItems: "center",
                        },
                    }}
                >
                    <Box sx={{ marginBottom: "2rem", textAlign: "center" }}>
                        <HeadingLinesAnimation text="CONTACT US" />
                    </Box>

                    <Form />
                </GrayBox>
            </Box>

            <Box
                sx={{
                    flex: 1,
                    display: "flex",
                    flexDirection: "row",
                    gap: "2rem",
                    justifyContent: "center",
                    marginTop: "0",
                    width: "100%",
                    padding: "0",
                    alignItems: "center",
                    height: "100%",
                }}
            >
                <ContactCard
                    sx={{
                        boxShadow: theme.palette.mode === "light" ? "0px 4px 7px rgba(0, 0, 0, 0.25)" : "0px 4px 7px rgba(0, 0, 0, 0.5)",
                        transition: "box-shadow 0.3s ease",
                    }}
                />
                <ContactCard2
                    sx={{
                        boxShadow: theme.palette.mode === "light" ? "0px 4px 7px rgba(0, 0, 0, 0.25)" : "0px 4px 7px rgba(0, 0, 0, 0.5)",
                        transition: "box-shadow 0.3s ease",
                    }}
                />
            </Box>
        </Container>
    );

    const verySmallScreenLayout = (
        <Container
            sx={{
                display: "flex",
                flexDirection: "column",
                gap: "1.5rem",
                padding: "1rem",
                alignItems: "center",
                justifyContent: "center",
                "@media (max-width: 600px)": {
                    paddingRight: "1rem",
                    paddingLeft: "1rem",
                },
            }}
        >

            <Box sx={{ marginBottom: "1.5rem", textAlign: "center" }}>
                <HeadingLinesAnimation text="CONTACT US" />
            </Box>

            <GrayBox
                sx={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                    padding: "1rem",
                    width: "100%",
                    alignItems: "center",
                }}
            >
                <Form />
            </GrayBox>

            <GrayBox
                sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    padding: "1rem",
                    width: "100%",
                }}
            >
                <ImageWrapper>
                    <MapComponent />
                </ImageWrapper>
            </GrayBox>

            <Box
                sx={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "1.5rem",
                    justifyContent: "center",
                    width: "100%",
                    alignItems: "center",
                }}
            >
                <ContactCard
                    sx={{
                        boxShadow: theme.palette.mode === "light" ? "0px 4px 7px rgba(0, 0, 0, 0.25)" : "0px 4px 7px rgba(0, 0, 0, 0.5)",
                        transition: "box-shadow 0.3s ease",
                    }}
                />
                <ContactCard2
                    sx={{
                        boxShadow: theme.palette.mode === "light" ? "0px 4px 7px rgba(0, 0, 0, 0.25)" : "0px 4px 7px rgba(0, 0, 0, 0.5)",
                        transition: "box-shadow 0.3s ease",
                        height: "44.2rem",
                    }}
                />
            </Box>
        </Container>
    );

    if (isVerySmallScreen) {
        return verySmallScreenLayout;
    } else if (isScreenSmall) {
        return smallScreenLayout;
    } else {
        return largeScreenLayout;
    }
}
