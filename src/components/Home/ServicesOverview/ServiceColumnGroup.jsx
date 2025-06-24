"use client";
import Image from "next/image";
import { Box, Paper, styled, Typography } from "@mui/material";
import { useTheme } from "../../../contexts/themeContext";
import { HomePkgsBox, HomePkgsInBox } from "../../mui/HomePkgs";
import {useTranslations} from "next-intl";
import HeadingLinesAnimation from "../HeadingLinesAnimation/HeadingLinesAnimation";

export const ServiceHeading = styled(Typography)(({ theme }) => ({
  fontSize:"40px", 
  fontWeight:500,
  textAlign: "center",
  color: theme.palette.mode === "dark" ? "#fff" : "#232E4A",
  marginBottom: "0.9rem",
  "@media (max-width: 600px)": {
    fontSize: "2.2rem ",
    marginBottom: 0,
  },
}));

export const ServiceDescription = styled(Typography)(({ theme }) => ({
  textAlign: "center",
  fontSize: "1.8rem",
  color: theme.palette.mode === "dark" ? "#fff" : "#000000",
  maxWidth: "780px",
  "@media (max-width: 600px)": {
    fontSize: "1rem ",
  },
}));

export const ServicesContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "row",
  marginBottom: "3rem",
  gap: "9.7rem",
 "@media (max-width: 900px)": {
 gap: "2rem",
},
  "@media (max-width: 600px)": {
    maxWidth: "450px",
    flexDirection: "column",
    gap: "2rem",
  },
}));

export const ServiceItemContainer = styled(Box)(({ theme }) => ({
  maxWidth: "330px",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  textAlign: "center",
  gap: "1.7rem",
  padding: "1.5rem",
  borderRadius: "1rem",
  minHeight: "auto",
  boxShadow: "none",
  backgroundColor: "transparent !important",
  "@media (max-width: 900px)": {
    maxWidth: "auto",
    width: "100%",
    padding: "1rem",
  },
}));

export const ServiceItemImageContainer = styled(Box)(({ theme }) => ({
  width: "8.4rem",
  height: "8.4rem",
  borderRadius: "50%",
  border: `1px solid ${theme.palette.mode === "dark" ? "transparent" : "#c4c4c4"}`,
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  "@media (max-width: 600px)": {
    height: "5rem",
    width: "5rem",
  },
}));

export const ServiceItemImage = styled(Image)(({ theme }) => ({
  filter:
    theme.palette.mode === "dark"
      ? "invert(41%) sepia(100%) saturate(493%) hue-rotate(170deg) brightness(92%) contrast(96%)"
      : "invert(20%) sepia(13%) saturate(227%) hue-rotate(204deg) brightness(93%) contrast(91%)",
}));

export const ServiceItemHeading = styled(Typography)(({ theme }) => ({
  fontSize: "1.6rem",
  color: theme.palette.mode === "dark" ? "#fff" : "#232E4A",
  fontWeight: 500,
  "@media (max-width: 600px)": {
    fontSize: "1.2rem ",
  },
}));

export const ServiceItemSubheading = styled(Typography)(({ theme }) => ({
  fontSize: "1.4rem",
  color: theme.palette.mode === "dark" ? "#C2C2C2" : "#535353",
  "@media (max-width: 600px)": {
    fontSize: "1rem ",
  },
}));

export default function ServiceColumnGroup() {
  const t = useTranslations('home.anywhere_autocare_section');
  const { theme } = useTheme();

  return (
    <HomePkgsInBox
      id="anywhere-auto-care"
      sx={{
        flexDirection: "column",
        alignItems: "center",
        marginBottom: "6.15rem",
        "@media (max-width: 600px)": {
          marginBottom: "0",
        },
      }}
    >
      <HeadingLinesAnimation>{t("title")}</HeadingLinesAnimation>
      <ServiceDescription>
        {t("description")}
      </ServiceDescription>

      <ServicesContainer>
        <ServiceItemContainer>
          <ServiceItemImageContainer>
            <ServiceItemImage
              src="/locS.png"
              alt="On-Site Service"
              width={48}
              height={48}
              sx={{ "@media (max-width: 600px)": { transform: "scale(0.6)" } }}
            />
          </ServiceItemImageContainer>
          <ServiceItemHeading variant="h5">{t("services.0.title")}</ServiceItemHeading>
          <ServiceItemSubheading variant="p">
            {t("services.0.description")}
          </ServiceItemSubheading>
        </ServiceItemContainer>

        <ServiceItemContainer>
          <ServiceItemImageContainer>
            <ServiceItemImage
              src="/vanS.png"
              alt="Mobile Service"
              width={48}
              height={48}
              sx={{ "@media (max-width: 600px)": { transform: "scale(0.6)" } }}
            />
          </ServiceItemImageContainer>
          <ServiceItemHeading variant="h5">{t("services.1.title")}</ServiceItemHeading>
          <ServiceItemSubheading variant="p">
            {t("services.1.description")}
          </ServiceItemSubheading>
        </ServiceItemContainer>
      </ServicesContainer>
    </HomePkgsInBox>
  );
}
