"use client";
import React from "react";
import { Box, Typography, styled } from "@mui/material";

const Background = styled(Box)(({ theme }) => ({
    width: "100vw",
    height: "750px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    position: "relative",
    backgroundImage: "url('/g1.jpg')",
    backgroundSize: "cover",
    backgroundPosition: "center",
    overflow: "hidden",
    marginTop: "7.8rem",
    "@media (max-width: 900px)": { height: "auto" },
}));

const Overlay = styled(Box)(({ theme }) => ({
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    backgroundColor: "rgba(0, 0, 0, 0.4)",
    zIndex: 1,
}));

const BlurBox = styled(Box)(({ theme }) => ({
    zIndex: "3",
    minWidth: "179rem",
    maxHeight: "59.1rem",
    padding: "8rem",
    backdropFilter: "blur(30px)",
    backgroundColor: "rgba(255, 255, 255, 0.01)",
    border: "0.3px solid rgba(255, 255, 255, 0.1)",
    borderRadius: "10px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    "@media (max-width: 900px)": { maxHeight: 0, minWidth: "100%", minHeight: "100vh", padding: "5rem 2rem", justifyContent: "center", },
}));

const IconContainer = styled(Box)(({ theme }) => ({
    display: "flex",
    justifyContent: "space-between",
    width: "78rem",
    height: "16.6rem",
    "@media (max-width: 900px)": { width: "100%", height: "auto", flexDirection: "column", alignItems: "center" },
}));

export default function CollabSection() {
    return (
        <Background>
            <Overlay />
            <BlurBox>
                <Typography
                    variant="h1"
                    sx={{
                        fontSize: "4rem",
                        fontWeight: 600,
                        textAlign: "center",
                        marginBottom: "1rem",
                        color: "white",
                    }}
                >
                    Exclusive Partnership
                </Typography>

                <IconContainer sx={{"@media (max-width: 900px)": { marginTop: "2rem" },}}>
                    <Typography
                        sx={{
                            fontSize: "1.8rem",
                            fontWeight: 400,
                            textAlign: "center",
                            marginBottom: "6.8rem",
                            color: "white",
                        }}
                    >
                        Elevating the Tesla experience through meticulous care and cutting-edge detailing
                    </Typography>
                </IconContainer>

                <IconContainer>
                    <Box
                        component="img"
                        src="/logo.png"
                        alt="Fast Clean Service"
                        sx={{ width: "150px", height: "auto" }}
                    />
                    <Box
                        component="img"
                        src="/cross-roads_svgrepo.com.svg"
                        alt="Tesla Icon"
                        sx={{ width: "150px", height: "auto" }}
                    />
                    <Box
                        component="img"
                        src="/logo-reason_svgrepo.com.svg"
                        alt="Cross Icon"
                        sx={{ width: "150px", height: "auto" }}
                    />
                </IconContainer>

                <IconContainer>
                    <Typography
                        sx={{
                            fontSize: "1.8rem",
                            fontWeight: 400,
                            textAlign: "center",
                            marginTop: "5.3rem",
                            color: "white",
                        }}
                    >
                        The collaboration between Fast Clean Service and Tesla represents a perfect synergy of innovation and precision. Together, we&apos;re setting new standards in automotive care.
                    </Typography>
                </IconContainer>
            </BlurBox>
        </Background>
    );
}
