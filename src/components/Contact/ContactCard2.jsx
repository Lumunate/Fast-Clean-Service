"use client";
import React from "react";
import { LockClock } from "@mui/icons-material";
import {
  ServiceItemBox,
  ServiceItemIconContainer,
  ServiceItemIcon,
  ServiceItemHeading,
  ServiceItemDescription,
} from "../mui/ServiceOverviewPckgs";
import { Box } from "@mui/material";
import { ContactCardContainer } from "./Contact.style";
import { useTheme } from "../../contexts/themeContext";

export default function ContactCard2() {
    const { theme } = useTheme();
  return (
    <ContactCardContainer>
      <ServiceItemBox
        sx={{
          alignItems: "flex-start !important",
        }}
      >
        <Box
          sx={{
              display: "flex",
              justifyContent: "center",
              paddingBottom: "1.5rem",
              width: "100%",
          }}
        >
          <ServiceItemHeading
            sx={{
                fontSize: "2.4rem !important",
                marginTop: "1.25rem",
                fontWeight: "400",
                color: theme.palette.mode === "dark" ? "#fff" : "#232E4A",
            }}
          >
            WORKING HOURS
          </ServiceItemHeading>
        </Box>

        <ServiceItemDescription sx={{ fontWeight: "400", fontSize: "1.4rem", color: theme.palette.mode === "dark" ? "#C2C2C2" : "#606060"}}>
            We provide the cleaning service for your vehicle at your home, your business or other desired location!
        </ServiceItemDescription>

        <ServiceItemDescription
          sx={{
            fontSize: "1.4rem !important",
            fontWeight: "400",
            paddingTop: "1rem",
              color: "#606060",
          }}
        >
          Monday to Sunday
        </ServiceItemDescription>

        <ServiceItemDescription sx={{ paddingTop: "0.5rem", color: "#58CDFA", fontWeight: "400", fontSize: "1.4rem", }}>
          08.00 – 17.30
        </ServiceItemDescription>
      </ServiceItemBox>
    </ContactCardContainer>
  );
}
