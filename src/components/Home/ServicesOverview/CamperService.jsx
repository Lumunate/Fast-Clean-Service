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

export const ServiceBox = styled(Box)(({theme})=>({
  display:'flex', 
  flexDirection:"column",    
  justifyContent:"space-between",
  height:"100%"
}))

export const ServiceItemDesciptionB = styled(ServiceItemSubheading)(({ theme }) => ({
  fontSize:"20px", 
  fontWeight:300 ,
  margin: "2.4rem 0",
  "@media (max-width: 600px)": {
    fontSize: "1rem",
    margin: "1.6rem 0",
  },
}));

export const ServiceItemCTA = styled(ServiceBtn1)(({ theme }) => ({
  fontSize: "1.5rem !important",
  padding: "1.5rem 3rem",
  fontWeight: 500,
  backgroundColor: theme.palette.primary.accentDark,
  color: "white",
  border:"none",
  "&:hover": {
    backgroundColor: theme.palette.primary.accent,
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
          marginBottom: "2rem",
        },
      }}
    >
      <RadialCircle top={"-2rem"} left={"50%"} />
      <CamperServiceBox>
        <FadeIn direction="left" distance={100} duration={1}>
          <ServiceBox>
        <ServiceHeading>FleetCare Pro</ServiceHeading>
            <ServiceItemDesciptionB>
              Elevate your fleet’s appearance with our cutting-edge mobile cleaning service. FleetCare Pro brings
              professional-grade steam cleaning technology directly to your location, ensuring your vehicles are spotless and
              ready for the road - anywhere, anytime.
            </ServiceItemDesciptionB>
            <ServiceItemHighlight sx={{ color:"#A4A4A4" }}>With FleetCare Pro, pristine vehicles are just a booking away.</ServiceItemHighlight>
            <Box>

          <ServiceItemCTA special onClick={() => (window.location.href = "/fleet")}>
            Book Now
          </ServiceItemCTA>
            </Box>
          </ServiceBox>
        </FadeIn>
      </CamperServiceBox>

      {/*<CamperServiceBox sx={{height:"100%"}}>*/}
      {/*  <FadeIn sx={{height:"100%"}} direction="right" distance={100} duration={1}>*/}
      {/*    <ServiceBox>*/}
      {/*      <ServiceHeading>Subscriptions</ServiceHeading>*/}
      {/*      <ServiceItemDesciptionB>*/}
      {/*      Transform your vehicle maintenance routine with our flexible subscription plans. Experience premium care tailored to your schedule and preferences. */}
      {/*      </ServiceItemDesciptionB>*/}
      {/*      <ServiceItemHighlight sx={{ color:"#A4A4A4"}}>Choose your plan and never worry about a dirty car again!</ServiceItemHighlight>*/}

      {/*      <ServiceItemHighlight special>24 months | Yearly | Monthly plans</ServiceItemHighlight>*/}
      {/*      <Box>*/}

      {/*    <ServiceItemCTA  special onClick={() => (window.location.href = "/subscribe")}>*/}
      {/*      Book Now*/}
      {/*    </ServiceItemCTA>*/}
      {/*      </Box>*/}
      {/*    </ServiceBox>*/}
      {/*  </FadeIn>*/}
      {/*</CamperServiceBox>*/}
    </HomeServicesBox>
  );
}
