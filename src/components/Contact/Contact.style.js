"use client";
import { Box, styled } from "@mui/material";

export const ContactCardContainer = styled(Box)(({ theme }) => ({
  textAlign: "left",
  padding: "1.5rem",
  marginTop: "0",
  width: "50%",
  borderRadius: "1.5rem",
  backgroundColor: theme.palette.mode === "dark" ? "rgba(255,255,255,0.05)" : "rgba(255, 255, 255, 0.05)",
  border: `1px solid ${theme.palette.mode === "dark" ? "rgba(255,255,255,0.12)" : "#8D8D8D69"}`,
  backdropFilter: "blur(2.4px)",
}));
