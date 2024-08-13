import { Box, Card, styled, Typography } from "@mui/material";
import Image from "next/image";
import Link from "next/link";

export const CardHeading = styled(Typography)(({ theme, special }) => ({
  fontFamily: "JakartaSans",
  fontWeight: "900",
  letterSpacing: "0.1em",
  fontSize: "3rem !important",
  // color: special ? theme.palette.primary.accent : theme.palette.primary.contrastText,
  margin: "2rem 0",
}));

export const CardLink = styled(Link)(({ theme, special }) => ({
  color: theme.palette.primary.accent,
  textDecoration: "underline",
}));

export const CardSpacer = styled(Box)(({ theme }) => ({
  margin: "0.8rem 0",
  // borderBottom: `1px solid ${theme.palette.primary.lightContrast}`,
}));

export const CardImage = styled(Image)(({ theme }) => ({
  color: theme.palette.primary.accent,
  // borderRadius: "50%",
  // backdropFilter: "blur(5px)",
  mixBlendMode: "difference"
}));

export const CustomCard = styled(Card)(({ theme }) => ({
  backgroundColor: "rgba(244,244,244,.6)!important",
  minWidth: 275,
  borderRadius: "10px",
  flex: 1,
  backdropFilter: "blur(5px)",
  animation: "showContent 1s ease-in-out fozrwards",
  boxShadow: "rgba(149, 157, 165, .2) 0px 0px 10px 4px !important",
}));

export const CardSubheading = styled(Typography)(({ theme, special }) => ({
  fontFamily: "JakartaSans",
  fontWeight: "900",
  letterSpacing: "0.1em",
  fontSize: "1.5rem !important",
  color: special ? theme.palette.primary.accent : theme.palette.primary.contrastText,
  margin: "1rem 0",
}));