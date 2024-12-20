"use client";

import { Box, Typography, Button, styled } from "@mui/material";

export const CalendarContainer = styled(Box)(({ theme }) => ({
  "& *": {
    fontFamily: "Unbounded !important",
  },
  "& .MuiPaper-root.MuiPaper-outlined.MuiPaper-rounded": {
    border: "none !important",
  },
  "& .MuiButtonBase-root.MuiButton-root.MuiButton-text.MuiButton-textPrimary.MuiButton-sizeSmall.MuiButton-textSizeSmall.MuiButton-colorPrimary.MuiButton-root.MuiButton-text.MuiButton-textPrimary.MuiButton-sizeSmall.MuiButton-textSizeSmall":
    {
      fontSize: "11px",
      fontWeight: "regular",
      lineHeight: "120%",
      boxShadow: "none",
    },
  "& .MuiTableCell-root.MuiTableCell-body.MuiTableCell-alignCenter.MuiTableCell-sizeSmall": {
    borderBottom: "none",
    paddingTop: "0",
    paddingBottom: "0",
  },
  "& .MuiTableRow-root > th:first-of-type": {
    display: "none !important",
  },
  "& .MuiTableCell-root.MuiTableCell-head.MuiTableCell-stickyHeader.MuiTableCell-alignCenter.MuiTableCell-sizeSmall": {
    padding: "0 1rem !important",
    textAlign: "left",
    fontSize: "1rem",
    color: theme.palette.mode === "dark" ? "#FFFFFF" : "#212121",
    lineHeight: "120%",

    "&:not(:first-of-type)": {
      borderLeft: "none !important",
    },
  },
  "& .MuiTableCell-root .MuiPaper-root": {
    backgroundColor: "transparent",
    borderRadius: "200px",
    border: "2px solid #A4A4A4",
    padding: "0.5rem 1rem",
  },
  "& .selected": {
    backgroundColor: theme.palette.mode === "dark" ? "transparent" : "#1C79CC",
    border: theme.palette.mode === "dark" ? "2px solid #1C79CC" : "none",
    boxShadow: theme.palette.mode === "dark" ? "0 0 10px #1C79CC" : "none",
  },
  "& .MuiTableCell-root  .MuiPaper-root p": {
    fontSize: "1rem",
    lineHeight: "120%",
    color: theme.palette.mode === "dark" ? "#FFFFFF" : "#525252",
    textAlign: "center",
  },
  "& .MuiTypography-root.MuiTypography-body2": {
    textAlign: "center !important",
    margin: "0 auto",
  },
  "& .MuiTableCell-root.MuiTableCell-body": {
    width: "max-content",
  },
  // "& tr:nth-child(-n+9):not(:first-child)": {
  //   // display: "none",
  //   display: currentMode === "week" ? "none" : "",
  // },
  "& .MuiButtonBase-root.MuiToggleButtonGroup-grouped.MuiToggleButtonGroup-groupedHorizontal.MuiToggleButton-root.MuiToggleButton-sizeSmall.MuiToggleButton-primary.MuiToggleButtonGroup-grouped.MuiToggleButtonGroup-groupedHorizontal.MuiToggleButtonGroup-lastButton":
    {
      display: "none",
    },
  "& .MuiButtonBase-root.MuiToggleButtonGroup-grouped.MuiToggleButtonGroup-groupedHorizontal.MuiToggleButton-root.Mui-selected.MuiToggleButton-sizeSmall.MuiToggleButton-primary.MuiToggleButtonGroup-grouped.MuiToggleButtonGroup-groupedHorizontal":
    {
      color: "#1C79CC !important",
      minWidth: "4rem",
    },
}));

export const LoaderContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  height: "400px",
  width: "100%",
  color: "black",
}));


export const ModalContainer = styled(Box)(({ theme }) => ({
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "140px",
  overflowY: "auto",
  backgroundColor: theme.palette.background.paper,
  boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.1)",
  borderRadius: "12px",
  padding: "1rem",
  textAlign: "center",
}));

export const ModalHeading = styled(Typography)(({ theme }) => ({
  fontSize: "0.8rem",
  fontWeight: 300,
  lineHeight: "0.96rem",
  marginBottom: "1.1rem",
  textAlign: "center",
  marginTop: "1rem",
}));

export const TimeSlotBox = styled(Box)(({ theme, selected }) => ({
  width: "100%",
  maxWidth: "7rem",
  marginBottom: "0.8rem",
  padding: "0.5rem",
  backgroundColor: selected ? "#1C79CC" : theme.palette.mode === 'dark' ? 'transparent' : '#fff',
  borderRadius: "20px",
  boxShadow: "none",
  border: selected ? "none" : `0.5px solid ${theme.palette.mode === 'dark' ? '#C5C5C5' : '#A4A4A4'}`,
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  cursor: "pointer",
}));

export const TimeSlotLabel = styled(Typography)(({ theme, selected }) => ({
  fontSize: "0.7rem",
  fontWeight: "400",
  color: selected ? "#FFFFFF" : theme.palette.mode === 'dark' ? '#fff' : "#525252",
}));
