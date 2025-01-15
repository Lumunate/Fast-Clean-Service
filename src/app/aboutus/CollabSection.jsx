"use client";
import React from "react";
import { Box, Typography, styled } from "@mui/material";

// Styled Components

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
    "@media (max-width: 900px)": {
        height: "auto"
    },
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
    zIndex: 3,
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
    "@media (max-width: 900px)": {
        maxHeight: "none",
        minWidth: "calc(100% - 1.8rem)",
        margin: "2.1rem 0.9rem",
        padding: "6rem",
        justifyContent: "center",
    },
}));

const IconContainer = styled(Box)(({ theme }) => ({
    display: "flex",
    justifyContent: "space-between",
    width: "78rem",
    height: "16.6rem",
    "@media (max-width: 900px)": {
        width: "100%",
        height: "auto",
        flexDirection: "column",
        alignItems: "center",
    },
}));

const ResponsiveTypography = styled(Typography)(({ theme }) => ({
    fontSize: "1.8rem",
    fontWeight: 400,
    textAlign: "center",
    marginBottom: "6.8rem",
    color: "white",
    "@media (max-width: 600px)": {
        fontSize: "1.2rem",
        marginBottom: "2rem",
        marginTop: "-1rem",
    },
}));

const ResponsiveHeading = styled(Typography)(({ theme }) => ({
    fontSize: "4rem",
    fontWeight: 600,
    textAlign: "center",
    marginBottom: "1rem",
    color: "white",
    "@media (max-width: 900px)": {
        fontSize: "2.8rem"
    },
    "@media (max-width: 600px)": {
        fontSize: "2.4rem",
        marginBottom: "0.6rem",
    },
}));

const ResponsiveSubText = styled(Typography)(({ theme }) => ({
    fontSize: "1.8rem",
    fontWeight: 400,
    textAlign: "center",
    marginTop: "5.3rem",
    color: "white",
    "@media (max-width: 900px)": {
        fontSize: "1.2rem",
        marginTop: "2rem",
    },
    "@media (max-width: 600px)": {
        display: "none"
    },
}));

export default function CollabSection() {
    return (
        <Background>
            <Overlay />
            <BlurBox>
                <ResponsiveHeading variant="h1">
                    Exclusive Partnership
                </ResponsiveHeading>

                <IconContainer sx={{
                    "@media (max-width: 900px)": {
                        marginTop: "2rem"
                    },
                }}>
                    <ResponsiveTypography>
                        Transforming the cleaning experience through eco-friendly solutions and innovative goat waste applications.
                    </ResponsiveTypography>
                </IconContainer>

                <IconContainer>
                    <Box
                        component="img"
                        src="/logo.png"
                        alt="Fast Clean Service"
                        sx={{ width: "auto", height: "auto", marginBottom: { xs: "2rem", sm: "0" } }}
                    />
                    <Box
                        component="img"
                        src="/cross-roads_svgrepo.com.svg"
                        alt="Eco Partnership Icon"
                        sx={{ width: { xs: "100px", sm: "150px" }, height: "auto", marginBottom: { xs: "2rem", sm: "0" } }}
                    />
                    <Box
                        component="img"
                        src="/logo-reason_svgrepo.com.svg"
                        alt="Cross Icon"
                        sx={{ width: "auto", height: "auto", marginBottom: { xs: "2rem", sm: "0" } }}
                    />
                </IconContainer>

                <IconContainer>
                    <ResponsiveSubText>
                        The collaboration between Fast Clean Service and AtTheCarWashCompany sets new benchmarks in eco-friendly cleaning. Together, we aim to provide sustainable, goat-waste-powered cleaning innovations.
                    </ResponsiveSubText>
                </IconContainer>
            </BlurBox>
        </Background>
    );
}
