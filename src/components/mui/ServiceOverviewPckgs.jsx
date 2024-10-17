"use client";

import Image from "next/image";
import { Box, Paper, styled, Typography } from "@mui/material";

export const CarServicesContainer = styled(Box)(({ theme }) => ({
  margin: "7.8rem auto 17.5rem",
  display: "flex",
  flexWrap: "wrap",
  justifyContent: "center",
  alignItems: "center",
  gap: "1rem",
  width: "100%",

  "@media (max-width: 600px)": {
    margin: "5rem auto 8rem"
  },
}));

export const ServiceItemContainer = styled(Paper)(({ theme }) => ({
  width: "350px",
  minHeight: "325px",
  maxHeight: "330px",
  textAlign: "center",
  borderRadius: "1rem",
  boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.1)",

  backgroundColor: theme.palette.mode === "dark" ? "rgba(255,255,255,0.0001)" : "white",
  border: `1px solid ${theme.palette.mode === "dark" ? "rgba(255,255,255,0.12)" : "white"}`,
  backdropFilter: "blur(2.4px)",
  "@media (max-width: 600px)": {
    width: "80%",
    minHeight: 0,
    backdropFilter: 0,
  },
}));

export const ServiceItemBox = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  margin: "3.5rem 1.8rem",
}));

export const ServiceItemIconContainer = styled(Box)(({ theme }) => ({
  width: "10.64rem",
  height: "10.64rem",
  backgroundColor: theme.palette.mode === "dark" ? "transparent" : "#2E75E8",
  borderRadius: "50%",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  marginBottom: "1.7rem",
  "@media (max-width: 600px)": {
    width: "5rem",
    height: "5rem",
  },
}));

export const ServiceItemIcon = styled(Image)(({ theme }) => ({
  filter:
    theme.palette.mode === "dark"
      ? "invert(41%) sepia(100%) saturate(493%) hue-rotate(170deg) brightness(92%) contrast(96%)"
      : "invert(0)",
}));

export const ServiceItemHeading = styled(Typography)(({ theme }) => ({
  fontSize: "1.8rem",
  marginBottom: "1rem",
  color: theme.palette.mode === "dark" ? "#fff" : "#232E4A",
  "@media (max-width: 600px)": {
    fontSize: "1.2rem",
    marginBottom: "0.5rem",
  },
}));

export const ServiceItemDescription = styled(Typography)(({ theme }) => ({
  fontSize: "1.4rem",
  fontWeight: "300",
  color: theme.palette.mode === "dark" ? "#C2C2C2" : "#535353",
  "@media (max-width: 600px)": {
    fontSize: "1rem",
  },
}));

export const ContactCardContainer = styled(Box)(({theme}) => ({
  textAlign: "left !important",
  padding: "1.5rem !important",
  marginTop: "0 !important",
  height: "auto !important",
  width: "350px",
  borderRadius: "1rem",
  boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.1)",
  backgroundColor: theme.palette.mode === "dark" ? "rgba(255,255,255,0.05)" : "white",
  border: `1px solid ${theme.palette.mode === "dark" ? "rgba(255,255,255,0.12)" : "white"}`,
  backdropFilter: "blur(2.4px)",
}));

