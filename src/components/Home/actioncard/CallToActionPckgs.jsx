"use client";
import { Box, Button, Paper, Typography, styled } from "@mui/material";
import { ServiceBtn1 } from "../../mui/HomePkgs";
import Image from "next/image";

export const CTAContainer = styled(Box)(({ theme }) => ({
  position: "relative",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  marginBottom: "10.2rem",
  padding: "0 2rem",
  marginTop: "12.6rem",
  "@media (max-width: 600px)": {
    marginBottom: "4rem",
    marginTop: "2rem",
  },
}));

export const CTAImage = styled(Image)(({ theme }) => ({
  position: "absolute",
  left: "12.8rem",
  top: "-10.2rem",
  width: "38.8rem",
  height: "4.1rem",
  zIndex: 1,
}));

export const CTAContentBox = styled(Paper)(({ theme }) => ({
  maxWidth: "135.5rem",
  width: "100%",
  backgroundColor: theme.palette.mode === "dark" ? "rgba(255,255,255,0.001)" : "black",
  border: `1px solid ${theme.palette.mode === "dark" ? "rgba(255,255,255,0.32)" : "white"}`,
  borderRadius: "4.2rem",
  padding: "5rem",
  boxShadow: "0px 5px 7.6px rgba(0, 0, 0, 0.22)",
  textAlign: "center",
  position: "relative",
  zIndex: 2,
  "@media (max-width: 600px)": {
    padding: "5rem 1.3rem",
    borderRadius: "1.5rem",
    backgroundColor: theme.palette.mode === "dark" ? "rgba(255,255,255,0.001)" : "rgba(0,0,0,0.9)",

  },
}));

export const CTAHeading = styled(Typography)(({ theme }) => ({
  fontSize: "4rem",
  fontWeight: 500,
  marginBottom: "3rem",
  color: "white",
  "@media (max-width: 600px)": {
    fontSize: "2.4rem",
    marginBottom: "1rem",
  },
}));

export const CTADescription = styled(Typography)(({ theme }) => ({
  fontSize: "16px",
  fontWeight: 400,
  color: "#FFFFFF",
  "@media (max-width: 600px)": {
    fontSize: "1.4rem",
  },
}));

export const CTAInnerBox = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  gap: "2rem",
  flexDirection: { xs: "column", sm: "row" },
  marginTop: "2rem",
}));

export const CTAButton = styled(ServiceBtn1)(({ theme }) => ({
  fontSize: "1.6rem !important",
  padding: "2rem 3.7rem",
  fontWeight: "bold",
  backgroundColor: "#0085FF",
  color: "white",
  "&:hover": {
    backgroundColor: theme.palette.primary.accent,
  },
}));
