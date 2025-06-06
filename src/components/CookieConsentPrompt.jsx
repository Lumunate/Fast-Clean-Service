"use client";
import React, {useState, useEffect} from "react";
import {Box, Button, Typography, Link as MuiLink} from "@mui/material";
import Link from "next/link";

/* ───────── styles ───────── */
const bannerStyles = {
    position: "fixed",
    bottom: 0,
    left: "2rem",
    right: "2rem",
    backgroundColor: "#f5f5f5",
    padding: "2rem 2rem 1rem 2rem",
    borderTop: "1px solid #ccc",
    borderRadius: "10px 10px 0 0",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    zIndex: 1300,
};

const backdropStyles = {
    position: "fixed",
    top: 0,
    left: 0,
    width: "100vw",
    height: "100vh",
    backgroundColor: "rgba(0,0,0,0.4)",
    backdropFilter: "blur(4px)",
    zIndex: 1200,
};

/* ───────── component ───────── */
export default function CookieConsentPrompt() {
    const [showBanner, setShowBanner] = useState(true);

    /* show only if not decided before */
    useEffect(() => {
        const stored = localStorage.getItem("cookieConsentGiven");
        setShowBanner(stored !== "true" && stored !== "false");
    }, []);

    const handleAccept = () => {
        localStorage.setItem("cookieConsentGiven", "true");
        setShowBanner(false);
    };

    const handleDeny = () => {
        localStorage.setItem("cookieConsentGiven", "false");
        setShowBanner(false);
    };

    if (!showBanner) return null;

    return (
        <>
            {/* blurred backdrop */}
            <Box sx={backdropStyles} />

            {/* banner */}
            <Box sx={bannerStyles}>
                <Typography
                    variant="h5"
                    sx={{fontWeight: 700, mb: 2, textAlign: "center", fontSize: "1.5rem"}}
                >
                    We value your privacy
                </Typography>

                <Typography
                    variant="body1"
                    sx={{textAlign: "center", fontSize: "1.1rem"}}
                >
                    We use cookies to enhance user experience, analyse website
                    performance, and deliver tailored content. By clicking ‘Accept’, you
                    consent to the use of all cookies.
                </Typography>

                <Typography
                    variant="body1"
                    sx={{mt: 1, textAlign: "center", fontSize: "1.1rem"}}
                >
                    Please read our{" "}
                    <Link href="/terms-and-conditions" passHref legacyBehavior>
                        <MuiLink sx={{color: "#1976d2", textDecoration: "underline"}}>
                            Terms of Service
                        </MuiLink>
                    </Link>{" "}
                    and{" "}
                    <Link href="/privacy-policy" passHref legacyBehavior>
                        <MuiLink sx={{color: "#1976d2", textDecoration: "underline"}}>
                            Privacy Policy
                        </MuiLink>
                    </Link>{" "}
                    for further details.
                </Typography>

                <Box sx={{display: "flex", gap: 3, mt: 2}}>
                    <Button
                        variant="outlined"
                        onClick={handleDeny}
                        sx={{
                            color: "#4F4F4F",
                            textTransform: "none",
                            borderRadius: "20px",
                            padding: "1rem 2rem",
                            transition: "background-color 0.3s, color 0.3s",
                            "&:hover": {
                                backgroundColor: "rgba(255,255,255,0.2)",
                                borderColor: "rgba(255,255,255,0.7)",
                            },
                        }}
                    >
                        Skip for now
                    </Button>

                    <Button
                        variant="contained"
                        onClick={handleAccept}
                        sx={{
                            backgroundColor: "#1976d2",
                            color: "white",
                            borderRadius: "20px",
                            padding: "1rem 2rem",
                            textTransform: "none",
                            transition: "background-color 0.3s, transform 0.3s",
                            "&:hover": {
                                backgroundColor: "#125a9a",
                                transform: "scale(1.05)",
                            },
                        }}
                    >
                        Accept
                    </Button>
                </Box>
            </Box>
        </>
    );
}
