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
import {useTranslations} from "next-intl";

export default function ContactCard2() {
    const t = useTranslations('contact.working_hours');
    const { theme } = useTheme();
  return (
    <ContactCardContainer>
      <ServiceItemBox
        sx={{
          alignItems: "flex-start !important",
          margin: { lg: "2.7rem 0.2rem", md: "2.7rem 0.2rem", sm: "2.7rem 0.2rem", xs: "0.2rem" },
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
              fontSize: "2rem !important",
              marginTop: "1.25rem",
              fontWeight: "400",
              color: theme.palette.mode === "dark" ? "#fff" : "#232E4A",
            }}
          >
              {t("title")}
          </ServiceItemHeading>
        </Box>

        <ServiceItemDescription
          sx={{ fontWeight: "400", fontSize: "1.4rem", color: theme.palette.mode === "dark" ? "#C2C2C2" : "#606060" }}
        >
            {t("description")}
        </ServiceItemDescription>

        <ServiceItemDescription
          sx={{
            fontSize: "1.4rem !important",
            fontWeight: "400",
            paddingTop: "1rem",
            color: "#606060",
          }}
        >
            {t("days")}
        </ServiceItemDescription>

        <ServiceItemDescription sx={{ paddingTop: "0.5rem", color: "#58CDFA", fontWeight: "400", fontSize: "1.4rem" }}>
          08.00 – 17.30
        </ServiceItemDescription>
      </ServiceItemBox>
    </ContactCardContainer>
  );
}
