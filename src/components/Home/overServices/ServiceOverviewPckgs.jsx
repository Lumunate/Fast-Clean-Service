"use client";

import Image from "next/image";
import { Box, Paper, styled, Typography } from "@mui/material";

export const CarServicesContainer = styled(Box)(({ theme }) => ({
  margin: "7.8rem auto 14rem",
  display: "flex",
  flexWrap: "wrap",
  justifyContent: "center",
  alignItems: "center",
  gap: "2rem",
  maxWidth: "1454px",

  "@media (max-width: 600px)": {
    margin: "5rem auto 8rem"
  },
}));

export const ServiceItemContainer = styled(Paper)(({ theme }) => ({
  width: "456px",
  minHeight: "325px",
  maxHeight: "330px",
  textAlign: "center",
  borderRadius: "1rem",
  boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.1)",
  marginTop: "8rem",
  backgroundColor: theme.palette.mode === "dark" ? "rgba(255,255,255,0.0001)" : "white",
  border: `1px solid ${theme.palette.mode === "dark" ? "rgba(255,255,255,0.12)" : "white"}`,
  backdropFilter: "blur(10.4px)",
  "@media (max-width: 600px)": {
    // width: "80%",
    minHeight: 0,
    // backdropFilter: 0,
    marginTop: "4rem",
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
  backgroundColor: "transparent",
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
  filter: theme.palette.mode === "dark" ? "brightness(0) invert(1)" : "none",
}));



export const ServiceItemHeading = styled(Typography)(({ theme }) => ({
  fontSize: "18px",
  marginBottom: "1rem",
  color: theme.palette.mode === "dark" ? "#fff" : "#232E4A",
  "@media (max-width: 600px)": {
    fontSize: "1.4rem",
    marginBottom: "0.5rem",
  },
}));

export const ServiceItemDescription = styled(Typography)(({ theme }) => ({
  fontSize: "14px",
  fontWeight: "300",
  color: theme.palette.mode === "dark" ? "#C2C2C2" : "#535353",
  marginBottom:"12px",
  "@media (max-width: 600px)": {
    fontSize: "1.2rem",
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

