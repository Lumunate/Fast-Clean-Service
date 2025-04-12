"use client";
import React from "react";
import Image from "next/image";
import { Box, Typography, Button, useMediaQuery, styled } from "@mui/material";
import { HomePkgsBox, HomePkgsInBox, HomeServicesBox, ServiceBtn1, ServicesBtn } from "../../mui/HomePkgs";
import { useTheme } from "../../../contexts/themeContext";
import styles from "./CamperService.module.css";
import { ServiceDescription, ServiceHeading, ServiceItemContainer, ServiceItemSubheading } from "./ServiceColumnGroup";
import RadialCircle from "../../Decorative/RadialCircle";
import FadeIn from "../../Animations/FadeIn";
import {useTranslations} from "next-intl";

export const CamperServiceBox = styled(Box)(({ theme }) => ({
  minWidth: "500px",
  flexShrink: 1,
  flexDirection: "column",
  alignItems: "center",
  textAlign: "center",
  width: "40%",
  display: "flex",
  justifyContent: "space-between",
  "@media (max-width: 600px)": {
    minWidth: "100%",
    padding: "2rem",
  },
}));

export const ServiceItemDesciptionB = styled(ServiceItemSubheading)(({ theme }) => ({
  margin: "2.4rem 0",
  fontSize: "2rem",
  "@media (max-width: 600px)": {
    fontSize: "1rem",
    margin: "1.6rem 0",
  },
}));

export const ServiceItemCTA = styled(ServiceBtn1)(({ theme }) => ({
  padding: "1.4rem 3.7rem",
  "@media (max-width: 600px)": {
    padding: "1rem 1.7rem",
  },
}));

export const ServiceItemHighlight = styled(Typography)(({ theme, special = false }) => ({
  fontSize: "1.4rem",
  color: special
      ? theme.palette.mode === "dark"
          ? "#01BEFF"
          : "#005F7F"
      : theme.palette.mode === "dark"
          ? "#C2C2C2"
          : "#535353",
  textAlign: "center",
  marginBottom: "2.5rem",
  "@media (max-width: 600px)": {
    fontSize: "0.8rem",
    marginBottom: "1.6rem",
  },
}));

export default function CamperService() {
  const t = useTranslations("home.fleetcare_subscriptions_section");
  const { theme } = useTheme();

  return (
    <HomeServicesBox
      sx={{
        position: "relative",
        flexWrap: "wrap",
        marginBottom: "10rem",
        gap: "10.7rem",
        "@media (max-width: 600px)": {
          gap: "4rem",
          flexDirection: "column",
          alignItems: "center",
        },
      }}
    >
      <RadialCircle top={"-2rem"} left={"50%"} />
      <CamperServiceBox id="fleet-care-pro">
        <FadeIn direction="left" distance={100} duration={1}>
          <Box>
            <ServiceHeading>{t("services.0.titlemain")}</ServiceHeading>
            <ServiceHeading sx={{ fontSize: "2rem" }}>{t("services.0.titlesub")}</ServiceHeading>
            <ServiceItemDesciptionB>{t("services.0.description")}</ServiceItemDesciptionB>
            <ServiceItemHighlight><span dangerouslySetInnerHTML={{ __html: t("services.0.highlight") }} /></ServiceItemHighlight>
          </Box>
          <ServiceItemCTA special onClick={() => (window.location.href = "/fleet")}>
            {t("services.0.button.text")}
          </ServiceItemCTA>
        </FadeIn>
      </CamperServiceBox>

      <CamperServiceBox id="subscriptions">
        <FadeIn direction="right" distance={100} duration={1}>
          <Box>
            <ServiceHeading>{t("services.1.titlemain")}</ServiceHeading>
            <ServiceHeading sx={{ fontSize: "2rem" }}>{t("services.1.titlesub")}</ServiceHeading>
            <ServiceItemDesciptionB>{t("services.1.description")}</ServiceItemDesciptionB>
            <ServiceItemHighlight><span dangerouslySetInnerHTML={{ __html: t("services.1.highlight") }} />
            </ServiceItemHighlight>

            {/*<ServiceItemHighlight special>{t("services.1.special_highlight")}</ServiceItemHighlight>*/}
          </Box>
          <ServiceItemCTA sx={{ marginTop: "2rem" }} special onClick={() => (window.location.href = "/subscribe")}>
            {t("services.0.button.text")}
          </ServiceItemCTA>
        </FadeIn>
      </CamperServiceBox>
    </HomeServicesBox>
  );
}