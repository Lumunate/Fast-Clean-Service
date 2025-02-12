"use client";
import {Box, styled} from "@mui/material";

export const GrayBox = styled(Box)(({ theme }) => ({
  padding: theme.spacing(2),
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  overflow: "hidden",
  flex: 1,
}));

export const ImageWrapper = styled(Box)(({ theme }) => ({
  position: "relative",
  width: "100%",
  height: "100%",
  overflow: "hidden",
  clipPath: "polygon(0 0, 100% 0%, 93% 100%, 0% 100%)",
  "@media (max-width: 992px)": {
    clipPath: "none",
    height: "55rem",
    alignItems: "center",
    borderRadius: "10px",
  },
}));

export const Container = styled(Box)(({ theme }) => ({
  display: "flex",
  width: "100%",
  // minHeight: "calc(100vh - 12rem)",
  flexDirection: "row",
  paddingLeft: "7rem",

  "@media (max-width: 1600px)": {
    paddingLeft: 0,
  },
  "@media (max-width: 600px)": {
    paddingTop: "6rem",
  },
}));


export const FormContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  gap: theme.spacing(4),
  width: "100%",
  maxWidth: "500px",
  margin: "0 auto",
  padding: theme.spacing(3),
  boxSizing: "border-box",
}));


