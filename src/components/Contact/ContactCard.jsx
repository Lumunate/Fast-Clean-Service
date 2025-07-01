"use client";
import React from "react";
import {
    ServiceItemContainer,
    ServiceItemBox,
    ServiceItemIconContainer,
    ServiceItemIcon,
    ServiceItemHeading,
    ServiceItemDescription,
} from "../mui/ServiceOverviewPckgs";
import { LocationCityOutlined, Mail, Phone, WhatsApp } from "@mui/icons-material";
import { Box } from "@mui/material";
import { ContactCardContainer } from "./Contact.style";
import { useTheme } from "../../contexts/themeContext";
import {useTranslations} from "next-intl";
import Link from "next/link";

export default function ContactCard() {
    const t = useTranslations('contact.contact_details');
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

          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: "1.5rem",
              alignItems: "flex-end",
              width: "100%",
            }}
          >
            {/* Telephone */}
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                width: "100%",
              }}
            >
              <ServiceItemDescription sx={{ width: "auto", textAlign: "left" }}>{t("phone")}</ServiceItemDescription>
              <ServiceItemDescription sx={{ width: "auto", textAlign: "right" }}>
                <a href="tel:+31202440994" style={{ color: "#2E75E8", textDecoration: "none" }}>
                  020 2440994
                </a>
              </ServiceItemDescription>
            </Box>

            {/* Email */}
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                width: "100%",
              }}
            >
              <ServiceItemDescription sx={{ width: "auto", textAlign: "left" }}>{t("email")}</ServiceItemDescription>
              <ServiceItemDescription sx={{ width: "auto", textAlign: "right" }}>
                <a
                  href="mailto:Info@fastcleanservice.nl"
                  style={{
                    color: "#2E75E8",
                    textDecoration: "none",
                  }}
                >
                  Info@fastcleanservice.nl
                </a>
              </ServiceItemDescription>
            </Box>

            {/* Location */}
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                width: "100%",
              }}
            >
              <ServiceItemDescription sx={{ width: "auto", textAlign: "left" }}>{t("address")}</ServiceItemDescription>
             <Link  href="https://www.google.com/maps?q=Oude+Blaauwweg+14+1521+RN+Wormerveer"
              target="_blank"
              rel="noopener noreferrer"
              style={{ textDecoration: "none" }}>
              <ServiceItemDescription sx={{ width: "auto", textAlign: "right", color: "#2E75E8" }}>
                Oude Blaauwweg 14 1521 RN Wormerveer
              </ServiceItemDescription>
             </Link>
            </Box>
          </Box>
        </ServiceItemBox>
      </ContactCardContainer>
    );
}