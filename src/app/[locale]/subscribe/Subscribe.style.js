"use client";
import { Box, styled } from "@mui/material";

export const SubscriptionsContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  gap: "2.6rem",
  marginTop: "8rem",
  marginBottom: "20rem",

  "@media (max-width: 1300px)": {
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },

  "@media (max-width: 700px)": {
    marginTop: "8rem",
  },
}));


export const StyledCard = styled(Box)(({ theme }) => ({
  width: "393px",
  // height: "1005px",
  display: "flex",
  flexDirection: "column",
  borderRadius: "15px",
  boxShadow: "0px 4px 30.1px rgba(0, 0, 0, 0.25)",
  backgroundColor: theme.palette.mode === "dark" ? "rgba(255,255,255,0.05)" : "#fff",
  border: theme.palette.mode === "dark" ? "1px solid rgba(255, 255, 255, 0.2)" : "none",
  overflow: "hidden",
  position: "relative",
  transition: "all 0.3s ease",

  "@media (max-width: 430px)": {
    width: "300px",
  },
}));

export const StyledImageContainer = styled(Box)(({ highlightColor, theme }) => ({
  width: "100%",
  height: "260px",
  position: "absolute",
  backgroundColor: highlightColor,
  overflow: "hidden",
  clipPath: "path('M -2 265 Q 200 197 393 200 L 393 -2 L -2 -2 Z')",
  boxShadow: theme.palette.mode === "light" ? "0px 10px 30.1px rgba(0, 0, 0, 1)" : "none",
  top: 0,
  opacity: "0.4",
  "@media (max-width: 600px)": {
    top: "-1.5rem",
  },
}));

export const ImageWrapper = styled(Box)(({ theme }) => ({
  position: "relative",
  left: "-3.2rem",
  top: "-2.7rem",
  width: "480px",
  height: "325px",
  "@media (max-width: 600px)": {
    top: "-4.2rem",
  },
}));

export const GradientBox = styled(Box)(({ gradient }) => ({
  position: "absolute",
  top: "18.4rem",
  right: "1.5rem",
  width: "201px",
  height: "5.7rem",
  background: `linear-gradient(to bottom, ${gradient.top}, ${gradient.bottom})`,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  fontWeight: "600",
  fontSize: "2.4rem",
  color: "#fff",
  zIndex: 2,

  "@media (max-width: 430px)": {
    fontSize: "1.6rem",
    width: "16rem",
    height: "4.7rem",
  },
}));

export const StyledPriceContainer = styled(Box)(({ highlightColor }) => ({
  textAlign: "center",
  marginTop: "-1rem",
  "& .price": {
    fontSize: "3.8rem",
    fontWeight: "600",
    color: highlightColor,
  },
  "& .from": {
    fontSize: "1.2rem",
    fontWeight: "400",
    color: "#525252",
  },
  "& .duration": {
    fontSize: "1.6rem",
    fontWeight: "600",
    color: "#525252",
  },
}));

export const StyledOptionsList = styled(Box)(({ theme }) => ({
  marginTop: "2.5rem",

  paddingRight: "1rem",
  paddingLeft: "3rem",

  "& > div": {
    display: "flex",
    alignItems: "center",
    padding: "2px 0",
  },
  "& img": {
    width: "23px",
    height: "23px",
    marginRight: "1rem",
  },
  "& p": {
    fontSize: "1.4rem",
    color: theme.palette.mode === "dark" ? "#C1C1C1" : "#525252",
    fontWeight: "300",
    width: "100%",
    textAlign: "left",
  },
}));
