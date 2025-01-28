"use client";
import { Typography, Box, Divider, styled } from "@mui/material";

export const ServicesDivider = styled(Divider)(({ theme }) => ({
  background: "linear-gradient(to top, transparent 0%, black 50%, transparent 100%)",
  height: "60px",
  margin: "auto 3rem",
  "@media (min-width: 600px) and (max-width: 900px)": {
    margin: "auto 0.5rem",
  },
}));
