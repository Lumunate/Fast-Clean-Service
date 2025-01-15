"use client";
import React from "react";
import { Box, IconButton, Typography, Link as MuiLink } from "@mui/material";
import { Facebook, Instagram, Twitter, YouTube, Email } from "@mui/icons-material";
import { useTheme } from "../../../contexts/themeContext";
import Image from "next/image";
import Logo from "../../../../public/logo.png";

export default function Footer() {
    const { theme } = useTheme();

    return (
        <footer
            style={{
                backgroundColor: "#000000",
                color: theme.palette.mode === "light" ? `#212121` : "#fff",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                padding: "2rem 0",
                position: "relative",
            }}
        >
            <Box
                sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    padding: "0 12rem",
                    marginBottom: "2rem",
                    '@media (max-width: 1368px)': {
                        padding: "0 6rem",
                    },
                    '@media (max-width: 768px)': {
                        flexDirection: 'column',
                        alignItems: 'center',
                    },
                }}
            >
                <Box>
                    <Image src={Logo} alt="logo" width={99} height={61} style={{ objectFit: "contain" }} />
                </Box>

                <Box
                    sx={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: 'center', // Center horizontally
                        position: 'absolute',
                        top: '30%',
                        left: '50%',
                        transform: 'translate(-50%, -50%)', // Move to exact center
                        gap: "9.3rem",
                        '@media (max-width: 1368px)': {
                            gap: '6rem',
                        },
                        '@media (max-width: 768px)': {
                            flexDirection: 'column',
                            gap: '2rem',
                        },
                    }}
                >
                    <MuiLink href="/" sx={{ color: "#FFF", textDecoration: "none", fontSize: "1.5rem", fontFamily: "DMSans" }}>
                        Home
                    </MuiLink>
                    <MuiLink href="/aboutus" sx={{ color: "#FFF", textDecoration: "none", fontSize: "1.5rem", fontFamily: "DMSans" }}>
                        About
                    </MuiLink>
                    <MuiLink href="/contact" sx={{ color: "#FFF", textDecoration: "none", fontSize: "1.5rem", fontFamily: "DMSans" }}>
                        Contact Us
                    </MuiLink>
                    <MuiLink href="/" sx={{ color: "#FFF", textDecoration: "none", fontSize: "1.5rem", fontFamily: "DMSans" }}>
                        Services
                    </MuiLink>
                </Box>

                <Box sx={{ display: "flex", gap: "3rem", '@media (max-width: 768px)': { gap: "2rem" } }}>
                    <IconButton href="https://facebook.com" sx={{ color: "#FFF" }}>
                        <Facebook sx={{ fontSize: "1.8rem" }} />
                    </IconButton>
                    <IconButton href="https://instagram.com" sx={{ color: "#FFF" }}>
                        <Instagram sx={{ fontSize: "1.8rem" }} />
                    </IconButton>
                    <IconButton href="https://twitter.com" sx={{ color: "#FFF" }}>
                        <Twitter sx={{ fontSize: "1.8rem" }} />
                    </IconButton>
                    <IconButton href="https://youtube.com" sx={{ color: "#FFF" }}>
                        <YouTube sx={{ fontSize: "1.8rem" }} />
                    </IconButton>
                    <IconButton href="mailto:support@fastclean.com" sx={{ color: "#FFF" }}>
                        <Email sx={{ fontSize: "1.8rem" }} />
                    </IconButton>
                </Box>
            </Box>

            <Box
                sx={{
                    textAlign: "center",
                    paddingTop: "1rem",
                    paddingBottom: "2rem",
                    '@media (max-width: 768px)': {
                        paddingBottom: "1rem",
                    },
                }}
            >
                <Typography variant="body2" sx={{ color: theme.palette.mode === "light" ? "#fff" : "#fff", fontSize: "1.5rem", fontWeight: "500", fontFamily: "DMSans" }}>
                    © 2024 Fast Clean Service. All rights reserved.
                </Typography>
            </Box>
        </footer>
    );
}
