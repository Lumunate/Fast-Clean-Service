"use client";
import React, { useState, useEffect } from "react";
import { Box, Button, Typography, Link as MuiLink } from "@mui/material";
import Link from "next/link";
import CircleIcon from "@mui/icons-material/Circle";
import {styled} from "@mui/material/styles";

const bannerStyles = {
    position: "fixed",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)", // center it horizontally & vertically
    width: "50vw",
    height: "50vh",
    backgroundColor: "#f5f5f5",
    padding: "2rem",
    border: "1px solid #ccc",
    borderRadius: "20px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    zIndex: "1300",
};

const backdropStyles = {
    position: "fixed",
    top: 0,
    left: 0,
    width: "100vw",
    height: "100vh",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    backdropFilter: "blur(4px)",
    zIndex: 1200,
};

const rgbCirclesStyles = {
    position: "absolute",
    top: "2rem",
    left: "2rem",
    display: "flex",
    gap: "0.5rem",
};

const circleStyles = (color) => ({
    width: "16px",
    height: "16px",
    borderRadius: "50%",
    backgroundColor: color,
});

export default function CookieConsentPrompt() {
    const [showBanner, setShowBanner] = useState(true);

    useEffect(() => {
        const hasConsented = localStorage.getItem("cookieConsentGiven");
        if (hasConsented === "true") {
            setShowBanner(false);
        } else {
            // Always show at least once on first page
            setShowBanner(true);
        }
    }, []);

    const handleAccept = () => {
        localStorage.setItem("cookieConsentGiven", "true");
        setShowBanner(false);
    };

    const handleDeny = () => {
        // Do not set localStorage or set it to false
        localStorage.setItem("cookieConsentGiven", "false");
        setShowBanner(false);
    };

    if (!showBanner) return null;

    return (
        <>
            <Box sx={backdropStyles} />
        <Box sx={bannerStyles}>
            {/*<Box sx={rgbCirclesStyles}>*/}
            {/*    <Box sx={circleStyles("red")} />*/}
            {/*    <Box sx={circleStyles("green")} />*/}
            {/*    <Box sx={circleStyles("blue")} />*/}
            {/*</Box>*/}

            <Typography variant="h5" sx={{ fontWeight: 700, mb: 3, textAlign: "center", fontSize: "1.5rem" }}>
                We use cookies
            </Typography>
            <Typography
                variant="body1"
                sx={{ mb: 4, textAlign: "center", fontSize: "1.2rem" }}
            >
                This website uses cookies and other tracking technologies to improve your
                browsing experience for the following purposes: to enable basic
                functionality of the website, to provide a better experience on the
                website, to measure your interest in our products and services, and to
                personalize marketing interactions, to deliver ads that are more relevant
                to you. See our{" "}
                <Link href="/terms-and-conditions" passHref legacyBehavior>
                    <MuiLink sx={{ color: "#1976d2", textDecoration: "underline", fontSize: "1.2rem" }}>
                        Terms of Service
                    </MuiLink>
                </Link>{" "}
                and{" "}
                <Link href="/privacy-policy" passHref legacyBehavior>
                    <MuiLink sx={{ color: "#1976d2", textDecoration: "underline", fontSize: "1.2rem" }}>
                        Privacy Policy
                    </MuiLink>
                </Link>{" "}
                for more details.
            </Typography>

            <Box sx={{ display: "flex", gap: 3 }}>
                <Button
                    variant="contained"
                    onClick={handleAccept}
                    sx={{
                        backgroundColor: '#1976d2',
                        color: 'white',
                        borderRadius: '20px',
                        padding: '1rem 2rem',
                        textTransform: 'none',
                        transition: 'background-color 0.3s, transform 0.3s',
                        '&:hover': {
                            backgroundColor: '#125a9a',
                            transform: 'scale(1.05)',
                        },
                    }}
                >
                    Agree
                </Button>
                <Button
                    variant="outlined"
                    onClick={handleDeny}
                    sx={{
                        color: '#4F4F4F',
                        textTransform: 'none',
                        borderRadius: '20px',
                        padding: '1rem 2rem',
                        transition: 'background-color 0.3s, color 0.3s',
                        '&:hover': {
                            backgroundColor: 'rgba(255, 255, 255, 0.2)',
                            borderColor: 'rgba(255, 255, 255, 0.7)'
                        },
                    }}
                >
                    Deny
                </Button>
            </Box>
        </Box>
        </>
    );
}
