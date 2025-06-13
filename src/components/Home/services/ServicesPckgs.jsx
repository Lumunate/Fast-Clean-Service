"use client";
import { Typography, Box, Divider, styled } from "@mui/material";

export const ServicesDivider = styled(Divider)(({ theme }) => ({
  background: "linear-gradient(to top, transparent 0%, rgba(0,0,0,0.2) 50%, transparent 100%)",
  height: "80px",
  width: "2px",
  margin: "auto 3rem",
  "@media (min-width: 600px) and (max-width: 900px)": {
    margin: "auto 0.5rem",
  },
  "@media (max-width: 600px)":{
     background: "linear-gradient(to right, transparent 0%, rgba(255, 255, 255, 1) 50%, transparent 100%)",
     width: "80px",
      height: "2px",
  }
}));

export const HorizontalServicesDivider = styled(Divider)(({ theme }) => ({
  background: "linear-gradient(to right, transparent 0%, rgba(0,0,0,0.2) 50%, transparent 100%)",
  height: "2px",
  width: "80px",
  margin: "3rem auto",
  "@media (min-width: 600px) and (max-width: 900px)": {
    margin: "0.5rem auto",
  },
}));
