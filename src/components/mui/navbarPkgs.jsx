"use client";

import { Box, ButtonBase, Paper, styled, Typography } from "@mui/material";
import Image from "next/image";
import Link from "next/link";

export const NavbarContainer = styled(Box)(({ theme }) => ({
  width: "100%",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  padding: "2rem 4rem",
  position: "fixed",
  top: 0,
  zIndex: 100,
  background:
    "linear-gradient(to bottom, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0))",
  transition: "padding 0.4s ease, background 0.3s ease",

  // Media query for screens smaller than 1368px
  "@media (max-width: 1368px)": {
    padding: "1.5rem 3rem",
  },
  "@media (max-width: 768px)": {
    padding: "1rem 2rem", // Adjust for mobile or tablet screens
  },
}));

export const NavLinksContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",

  "@media (max-width: 1368px)": {},
  "@media (max-width: 768px)": {
    flexDirection: "column",
    gap: "2rem",
  },
}));

export const NavBarLinksContainer = styled(NavLinksContainer)(({ theme }) => ({
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  maxWidth: "450px",
  width: "100%",
  zIndex: 10,

  "@media (max-width: 1380px)": {
    maxWidth: "380px",
  },

  "@media (max-width: 1000px)": {
    maxWidth: "300px",
  },
}));

export const NavbarInnerContainer = styled(Box)(({ theme }) => ({
  maxWidth: "1600px",
  width: "100%",
  display: "flex",
  justifyContent: "space-between",
}));

export const LogoContainer = styled(Box)(({ theme }) => ({
  marginLeft: {
    xs: "2rem",
    sm: "3rem",
    md: "3rem",
    lg: "3rem",
    xl: "3rem",
  },
}));

export const LogoImage = styled(Image)(({ theme }) => ({
  objectFit: "contain",
}));

export const NavLinkDropDownContainer = styled(Box)(({ theme }) => ({
  position: "relative",
}));

export const NavbarRightContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  gap: { xs: "1rem", sm: "1rem", md: "1.5rem", xl: "4rem" },
  marginLeft: "4rem",
}));

export const DropDownLink = styled(Typography)(({ theme }) => ({
  fontSize: "1.6rem",
  color: "#D5D5D5",
  cursor: "pointer",
  fontFamily: "DMSans",
  fontWeight: "300",
  alignItems: 'center',

  "&:hover": {
    color: theme.palette.primary.accentDark,

    "& svg": {
      color: `${theme.palette.primary.accentDark} !important`,
    },

    "& img": {
      filter: "brightness(60%) saturate(100%) invert(32%) sepia(100%) saturate(500%) hue-rotate(180deg) brightness(90%) contrast(90%)",
    }
  }
}));

export const NavLinkT = styled(Link)(({ theme }) => ({
  fontFamily: "DMSans",
  fontWeight: "500",
  fontSize: "1.5rem",
  lineHeight: "27.8px",
  color: theme.palette.primary.main,
  textDecoration: "none",
  "&:hover": {
    textDecoration: "underline",
  },

  "@media (max-width: 1368px)": {
    fontSize: "1.3rem", // Reduce font size for smaller screens
  },
  "@media (max-width: 768px)": {
    fontSize: "1.2rem", // Further reduce for mobile
  },
}));

export const NavLinkButton = styled(ButtonBase)(({ theme }) => ({
  boxShadow: "none",
  color: "#FFF",
  textTransform: "none",
  fontFamily: "DMSans",
  fontSize: "1.6rem",
  letterSpacing: "1px",
    "&:hover": {
        color: "#00BEFF",
    },
}));

export const NavLinkD = styled(Link)(({ theme }) => ({
  fontFamily: "DMSans",
  fontWeight: "500",
  fontSize: "1.5rem",
  lineHeight: "27.8px",
  color: theme.palette.primary.main,
  textDecoration: "none",
  "&:hover": {
    textDecoration: "underline",
  },

  "@media (max-width: 1368px)": {
    fontSize: "1.3rem",
  },
  "@media (max-width: 768px)": {
    fontSize: "1.2rem",
  },
}));

export const NavbarCTA = styled(ButtonBase)(({ theme }) => ({
  width: "17.5rem",
  backgroundColor: "#00BEFF",
  height: "5rem",
  padding: "2rem 1rem",
  color: "white",
  borderRadius: "12px",
  fontFamily: "DMSans",
  fontWeight: "500",
  lineHeight: "15px",
  transition: "all 0.3s ease",
  borderRadius: "50px",
  // marginLeft: "21rem",

  "@media (max-width: 1368px)": {
    width: "15rem",
    height: "4.5rem",
    padding: "2rem 1.5rem",
    marginLeft: "15rem",
    width: "15rem",
    fontSize: { xs: "1rem", sm: "1.2rem", md: "1.3rem" },
    padding: {
      xs: "0.4rem 1rem",
      sm: "0.5rem 1.2rem",
      md: "0.6rem 1.2rem",
    },
  },

  "@media (max-width: 768px)": {
    width: "12rem",
    height: "4rem",
    padding: "2.5rem 1.5rem",
    width: "12rem",
  },
}));

export const BlurredPaper = styled(Paper)({
  backdropFilter: "blur(10px)",
  padding: "2rem",
  display: "flex",
  flexDirection: "column",
  gap: "1.5rem",
  width: "180px",
  zIndex: 100,

  "@media (max-width: 1368px)": {
    width: "150px",
    padding: "1.5rem",
  },
  "@media (max-width: 768px)": {
    width: "120px",
    padding: "1rem",
  },
});
