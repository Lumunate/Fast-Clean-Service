"use client";
import React from "react";
import { Box, IconButton, Divider, Typography, Link as MuiLink } from "@mui/material";
import { Facebook, Instagram, Twitter, YouTube, Email } from "@mui/icons-material";
import { useTheme } from "../../../contexts/themeContext";
import Image from "next/image";
import Logo from "../../../../public/logo.png";

const Footer: React.FC = () => {
  const { theme } = useTheme();

  return (
    <footer
      style={{
        backgroundColor: "#000000",
        color: theme.palette.mode === "light" ? "#212121" : "#fff",
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
          "@media (max-width: 1368px)": {
            padding: "0 6rem",
          },
          "@media (max-width: 900px)": {
            display: "none",
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
            justifyContent: "center",
            position: "absolute",
            top: "30%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            gap: "9.3rem",
            "@media (max-width: 1368px)": {
              gap: "4rem",
            },
            "@media (max-width: 900px)": {
              flexDirection: "column",
              gap: "2rem",
            },
          }}
        >
          <MuiLink
            href="/"
            sx={{
              color: "#FFF",
              textDecoration: "none",
              fontSize: "1.5rem",
              fontFamily: "DMSans",
              "&:hover": {
                color: "primary.accentDark",
              },
            }}
          >
            Home
          </MuiLink>
          <MuiLink
            href="/aboutus"
            sx={{
              color: "#FFF",
              textDecoration: "none",
              fontSize: "1.5rem",
              fontFamily: "DMSans",
              "&:hover": {
                color: "primary.accentDark",
              },
            }}
          >
            About
          </MuiLink>
          <MuiLink
            href="/contact"
            sx={{
              color: "#FFF",
              textDecoration: "none",
              fontSize: "1.5rem",
              fontFamily: "DMSans",
              "&:hover": {
                color: "primary.accentDark",
              },
            }}
          >
            Contact
          </MuiLink>
          <MuiLink
            href="/"
            sx={{
              color: "#FFF",
              textDecoration: "none",
              fontSize: "1.5rem",
              fontFamily: "DMSans",
              "&:hover": {
                color: "primary.accentDark",
              },
            }}
          >
            Services
          </MuiLink>
        </Box>

        <Box
          sx={{
            display: "flex",
            gap: "3rem",
            "@media (max-width: 768px)": { gap: "2rem" },
            "@media (max-width: 1366px)": { gap: "1rem" },
          }}
        >
          <IconButton
            href="https://facebook.com"
            sx={{
              color: "#FFF",
              "&:hover": {
                color: "primary.accentDark",
              },
            }}
          >
            <Facebook sx={{ fontSize: "1.8rem" }} />
          </IconButton>
          <IconButton
            href="https://instagram.com"
            sx={{
              color: "#FFF",
              "&:hover": {
                color: "primary.accentDark",
              },
            }}
          >
            <Instagram sx={{ fontSize: "1.8rem" }} />
          </IconButton>
          <IconButton
            href="https://twitter.com"
            sx={{
              color: "#FFF",
              "&:hover": {
                color: "primary.accentDark",
              },
            }}
          >
            <Twitter sx={{ fontSize: "1.8rem" }} />
          </IconButton>
          <IconButton
            href="https://youtube.com"
            sx={{
              color: "#FFF",
              "&:hover": {
                color: "primary.accentDark",
              },
            }}
          >
            <YouTube sx={{ fontSize: "1.8rem" }} />
          </IconButton>
          <IconButton
            href="mailto:support@fastclean.com"
            sx={{
              color: "#FFF",
              "&:hover": {
                color: "primary.accentDark",
              },
            }}
          >
            <Email sx={{ fontSize: "1.8rem" }} />
          </IconButton>
        </Box>
      </Box>

      <Box
        sx={{
          textAlign: "center",
          paddingTop: "1rem",
          paddingBottom: "2rem",
          "@media (max-width: 900px)": {
            display: "none",
          },
        }}
      >
        <Typography
          variant="body2"
          sx={{
            color: theme.palette.mode === "light" ? "#fff" : "#fff",
            fontSize: "1.5rem",
            fontWeight: "500",
            fontFamily: "DMSans",
          }}
        >
          © 2025 Fast Clean Service. All rights reserved.
        </Typography>
      </Box>

      <Box
        sx={{
          display: "none",
          "@media (max-width: 900px)": {
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            padding: "1rem",
          },
        }}
      >
        <Box>
          <Image src={Logo} alt="logo" width={70} height={45} style={{ objectFit: "contain" }} />
        </Box>

        <Box sx={{ display: "flex", gap: "1rem", marginBottom: "1.2rem" }}>
          <IconButton href="https://facebook.com">
            <Facebook sx={{ fontSize: "1.5rem", color: "#FFF" }} />
          </IconButton>
          <IconButton href="https://instagram.com">
            <Instagram sx={{ fontSize: "1.5rem", color: "#FFF" }} />
          </IconButton>
          <IconButton href="https://twitter.com">
            <Twitter sx={{ fontSize: "1.5rem", color: "#FFF" }} />
          </IconButton>
          <IconButton href="https://youtube.com">
            <YouTube sx={{ fontSize: "1.5rem", color: "#FFF" }} />
          </IconButton>
          <IconButton href="mailto:info@fastcleanservice.nl">
            <Email sx={{ fontSize: "1.5rem", color: "#FFF" }} />
          </IconButton>
        </Box>

        <Box
          sx={{
            display: "flex",
            gap: "1rem",
            justifyContent: "center",
            alignItems: "center",
            fontSize: "1.2rem",
            fontFamily: "DMSans",
            color: "#D2D2D2",
            textDecoration: "none",
          }}
        >
          <MuiLink href="/" sx={{ color: "#D2D2D2", textDecoration: "none" }}>
            Home
          </MuiLink>
          <Divider orientation="vertical" flexItem sx={{ bgcolor: "#FFF", textDecoration: "none" }} />
          <MuiLink href="/aboutus" sx={{ color: "#D2D2D2" }}>
            About
          </MuiLink>
          <Divider orientation="vertical" flexItem sx={{ bgcolor: "#FFF", textDecoration: "none" }} />
          <MuiLink href="/contact" sx={{ color: "#D2D2D2" }}>
            Contact Us
          </MuiLink>
          <Divider orientation="vertical" flexItem sx={{ bgcolor: "#FFF", textDecoration: "none" }} />
          <MuiLink href="/" sx={{ color: "#D2D2D2" }}>
            Services
          </MuiLink>
        </Box>

        <Typography
          variant="body2"
          sx={{
            color: theme.palette.mode === "light" ? "#D2D2D2" : "#D2D2D2",
            fontSize: "1.2rem",
            fontWeight: "400",
            fontFamily: "DMSans",
            textAlign: "center",
            marginTop: "1rem",
          }}
        >
          © 2024 Fast Clean Service. All rights reserved.
        </Typography>
      </Box>
    </footer>
  );
};

export default Footer;
