"use client";
import React from "react";
import { Box, Typography, Button, styled } from "@mui/material";
import { HomeServicesBox, ServiceBtn1 } from "../../mui/HomePkgs";
import { useTheme } from "../../../contexts/themeContext";
import { ServiceHeading, ServiceItemSubheading } from "./ServiceColumnGroup";
import RadialCircle from "../../Decorative/RadialCircle";
import FadeIn from "../../Animations/FadeIn";
import { useTranslations } from "next-intl";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";

export const CamperServiceBox = styled(Box)(({ theme }) => ({
  height:'100%',
  minWidth: "500px",
  flexShrink: 1,
  flexDirection: "column",
  alignItems: "center",
  textAlign: "center",
  width: "40%",
  display: "flex",
  justifyContent: "space-between",
  position: "relative", // Added for Flex positioning of the button
  paddingBottom: "80px", // Space for the button at bottom
  "@media (max-width: 1107px)": {
   height:'auto',
  },
  "@media (max-width: 600px)": {
    minWidth: "100%",
    padding: "2rem",
    paddingBottom: "40px", // Maintain space for button
    height:'auto',
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

export const ServiceItemHighlight = styled(Typography)(({ theme }) => ({
  fontSize: "1.4rem",
  color: theme.palette.mode === "dark" ? "#C2C2C2" : "#535353",
  textAlign: "center",
  marginBottom: "2.5rem",
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start",
  "@media (max-width: 600px)": {
    fontSize: "0.8rem",
    marginBottom: "1.6rem",
  },
}));

export const CheckmarkItem = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "flex-start",
  marginBottom: "0.8rem",
  textAlign: "left",
  width: "100%",
}));

export const ServiceItemCTA = styled(ServiceBtn1)(({ theme }) => ({
  padding: "1.4rem 3.7rem",
  textAlign: "center",
  width: "80%",
  marginTop: "auto", // Push the button to the bottom of the container
  "@media (max-width: 600px)": {
    padding: "1rem 1.7rem",
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
              marginBottom: "4rem",
            },
          }}
      >
        <RadialCircle top={"-2rem"} left={"50%"} />
        <CamperServiceBox id="fleet-care-pro">
          <FadeIn direction="left" distance={100} duration={1}>
            <Box sx={{display:'flex', flexDirection:'column', alignItems:'center',height:'100%', "@media (max-width: 1107px)": {height:'auto'}}}>
            <Box>
              <ServiceHeading>{t("services.0.titlemain")}</ServiceHeading>
              <ServiceHeading sx={{ fontSize: {xs:"1.6rem",sm:"2rem", textTransform: 'uppercase'} }}>{t("services.0.titlesub")}</ServiceHeading>
              <ServiceItemDesciptionB>{t("services.0.description")}</ServiceItemDesciptionB>

              <ServiceItemHighlight>
                {/* Directly listing the highlights from translation */}
                <CheckmarkItem>
                  <FontAwesomeIcon
                      icon={faCheckCircle}
                      style={{
                        color: "#90EE90",
                        marginRight: "1rem",
                        marginTop: "0.3rem",
                      }}
                  />
                  <Typography
                      variant="span"
                      sx={{
                        textAlign: "left",
                        fontSize: "1.4rem",
                        fontWeight: "300",
                        color: theme.palette.mode === "dark" ? "#C2C2C2" : "#535353",
                        "@media (max-width: 600px)": { fontSize: "0.8rem" },
                      }}
                  >
                    {t("services.0.highlight.0")}
                  </Typography>
                </CheckmarkItem>
                <CheckmarkItem>
                  <FontAwesomeIcon
                      icon={faCheckCircle}
                      style={{
                        color: "#90EE90",
                        marginRight: "1rem",
                        marginTop: "0.3rem",
                      }}
                  />
                  <Typography
                      variant="span"
                      sx={{
                        textAlign: "left",
                        fontSize: "1.4rem",
                        fontWeight: "300",
                        color: theme.palette.mode === "dark" ? "#C2C2C2" : "#535353",
                        "@media (max-width: 600px)": { fontSize: "0.8rem" },
                      }}
                  >
                    {t("services.0.highlight.1")}
                  </Typography>
                </CheckmarkItem>
                <CheckmarkItem>
                  <FontAwesomeIcon
                      icon={faCheckCircle}
                      style={{
                        color: "#90EE90",
                        marginRight: "1rem",
                        marginTop: "0.3rem",
                      }}
                  />
                  <Typography
                      variant="span"
                      sx={{
                        textAlign: "left",
                        fontSize: "1.4rem",
                        fontWeight: "300",
                        color: theme.palette.mode === "dark" ? "#C2C2C2" : "#535353",
                        "@media (max-width: 600px)": { fontSize: "0.8rem" },
                      }}
                  >
                    {t("services.0.highlight.2")}
                  </Typography>
                </CheckmarkItem>
                <CheckmarkItem>
                  <FontAwesomeIcon
                      icon={faCheckCircle}
                      style={{
                        color: "#90EE90",
                        marginRight: "1rem",
                        marginTop: "0.3rem",
                      }}
                  />
                  <Typography
                      variant="span"
                      sx={{
                        textAlign: "left",
                        fontSize: "1.4rem",
                        fontWeight: "300",
                        color: theme.palette.mode === "dark" ? "#C2C2C2" : "#535353",
                        "@media (max-width: 600px)": { fontSize: "0.8rem" },
                      }}
                  >
                    {t("services.0.highlight.3")}
                  </Typography>
                </CheckmarkItem>
              </ServiceItemHighlight>
            </Box>
            <ServiceItemCTA special onClick={() => (window.location.href = "/fleet")}>
              {t("services.0.button.text")}
            </ServiceItemCTA>
            </Box>
          </FadeIn>
        </CamperServiceBox>

        <CamperServiceBox id="subscriptions">
          <FadeIn direction="right" distance={100} duration={1}>
             <Box sx={{display:'flex', flexDirection:'column', alignItems:'center', height:'100%', "@media (max-width: 1107px)": {height:'auto'}}}>
            <Box>
              <ServiceHeading>{t("services.1.titlemain")}</ServiceHeading>
              <ServiceHeading sx={{ fontSize: {xs:"1.6rem",sm:"2rem"} }}>{t("services.1.titlesub")}</ServiceHeading>
              <ServiceItemDesciptionB>{t("services.1.description")}</ServiceItemDesciptionB>

              <ServiceItemHighlight>
                {/* Directly listing the highlights from translation */}
                <CheckmarkItem>
                  <FontAwesomeIcon
                      icon={faCheckCircle}
                      style={{
                        color: "#90EE90",
                        marginRight: "1rem",
                        marginTop: "0.3rem",
                      }}
                  />
                  <Typography
                      variant="span"
                      sx={{
                        textAlign: "left",
                        fontSize: "1.4rem",
                        fontWeight: "300",
                        color: theme.palette.mode === "dark" ? "#C2C2C2" : "#535353",
                        "@media (max-width: 600px)": { fontSize: "0.8rem" },
                      }}
                  >
                    {t("services.1.highlight.0")}
                  </Typography>
                </CheckmarkItem>
                <CheckmarkItem>
                  <FontAwesomeIcon
                      icon={faCheckCircle}
                      style={{
                        color: "#90EE90",
                        marginRight: "1rem",
                        marginTop: "0.3rem",
                      }}
                  />
                  <Typography
                      variant="span"
                      sx={{
                        textAlign: "left",
                        fontSize: "1.4rem",
                        fontWeight: "300",
                        color: theme.palette.mode === "dark" ? "#C2C2C2" : "#535353",
                        "@media (max-width: 600px)": { fontSize: "0.8rem" },
                      }}
                  >
                    {t("services.1.highlight.1")}
                  </Typography>
                </CheckmarkItem>
                <CheckmarkItem>
                  <FontAwesomeIcon
                      icon={faCheckCircle}
                      style={{
                        color: "#90EE90",
                        marginRight: "1rem",
                        marginTop: "0.3rem",
                      }}
                  />
                  <Typography
                      variant="span"
                      sx={{
                        textAlign: "left",
                        fontSize: "1.4rem",
                        fontWeight: "300",
                        color: theme.palette.mode === "dark" ? "#C2C2C2" : "#535353",
                        "@media (max-width: 600px)": { fontSize: "0.8rem" },
                      }}
                  >
                    {t("services.1.highlight.2")}
                  </Typography>
                </CheckmarkItem>
                <CheckmarkItem>
                  <FontAwesomeIcon
                      icon={faCheckCircle}
                      style={{
                        color: "#90EE90",
                        marginRight: "1rem",
                        marginTop: "0.3rem",
                      }}
                  />
                  <Typography
                      variant="span"
                      sx={{
                        textAlign: "left",
                        fontSize: "1.4rem",
                        fontWeight: "300",
                        color: theme.palette.mode === "dark" ? "#C2C2C2" : "#535353",
                        "@media (max-width: 600px)": { fontSize: "0.8rem" },
                      }}
                  >
                    {t("services.1.highlight.3")}
                  </Typography>
                </CheckmarkItem>
              </ServiceItemHighlight>
            </Box>
            <ServiceItemCTA special onClick={() => (window.location.href = "/subscribe")}>
              {t("services.1.button.text")}
            </ServiceItemCTA>
            </Box>
          </FadeIn>
        </CamperServiceBox>
      </HomeServicesBox>
  );
}
