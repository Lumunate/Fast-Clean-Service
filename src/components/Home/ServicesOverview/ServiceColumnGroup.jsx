"use client";
import Image from "next/image";
import { Box, Paper, styled, Typography } from "@mui/material";
import { useTheme } from "../../../contexts/themeContext";
import { HomePkgsBox, HomePkgsInBox } from "../../mui/HomePkgs";
import FadeIn from "../../Animations/FadeIn";

export const ServiceHeading = styled(Typography)(({ theme }) => ({
  textAlign: "center",
  fontSize: "4rem ",
  color: theme.palette.mode === "dark" ? "#fff" : "#232E4A",
  fontWeight: "bold",
  marginBottom: "0.9rem",
  "@media (max-width: 600px)":  {
    fontSize: "2.8rem ",
    marginBottom: 0,
  },
}));

export const ServiceDescription = styled(Typography)(({ theme }) => ({
  textAlign: "center",
  fontSize: "1.4rem",
  color: theme.palette.mode === "dark" ? "#fff" : "#000000",
  maxWidth: "600px",
  "@media (max-width: 600px)":  {
    fontSize: "1rem ",
  },
}));

export const ServicesContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "space-around",
  flexWrap: "wrap",
  maxWidth: "80%",
  marginBottom: "3rem",
  gap: "9.7rem",
  "@media (max-width: 600px)":  {
    gap: "2rem",
  },
}));

export const ServiceItemContainer = styled(Box)(({ theme }) => ({
  maxWidth: "300px",
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
  "@media (max-width: 600px)":  {
    maxWidth: "100%",
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
  "@media (max-width: 600px)":  {
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
  "@media (max-width: 600px)":  {
    fontSize: "1.2rem ",
  },
}));

export const ServiceItemSubheading = styled(Typography)(({ theme }) => ({
  fontSize: "1.4rem",
  color: theme.palette.mode === "dark" ? "#C2C2C2" : "#535353",
  "@media (max-width: 600px)":  {
    fontSize: "1rem ",
  },
}));

export default function ServiceColumnGroup() {
  const { theme } = useTheme();

  return (
    <HomePkgsInBox sx={{
      flexDirection: "column",
      alignItems: "center",
      marginBottom: "12.3rem",
      "@media (max-width: 600px)":  {
        marginBottom: "3rem",
      },
    }}>
      <FadeIn direction="up" distance={100} duration={0.5}>
        <ServiceHeading>Anywhere Auto-Care</ServiceHeading>
      </FadeIn>
      <ServiceDescription>
        Convenient mobile car cleaning delivered directly to you. Experience professional quality care—wherever you are.
      </ServiceDescription>

      <ServicesContainer>
        <ServiceItemContainer>
          <ServiceItemImageContainer>
            <ServiceItemImage src="/locS.png" alt="On-Site Service" width={48} height={48} sx={{ "@media (max-width: 600px)": { transform: "scale(0.6)" }, }} />
          </ServiceItemImageContainer>
          <ServiceItemHeading variant="h5">On-Site Service</ServiceItemHeading>
          <ServiceItemSubheading variant="p">
            Enjoy our services at our dedicated location, where you can relax while we take care of your vehicle.
          </ServiceItemSubheading>
        </ServiceItemContainer>

        <ServiceItemContainer>
          <ServiceItemImageContainer>
            <ServiceItemImage src="/vanS.png" alt="Mobile Service" width={48} height={48} sx={{ "@media (max-width: 600px)": { transform: "scale(0.6)" }, }} />
          </ServiceItemImageContainer>
          <ServiceItemHeading variant="h5">Mobile Service</ServiceItemHeading>
          <ServiceItemSubheading variant="p">
            Enjoy our services at your location, where you can relax while we take care of your vehicle.
          </ServiceItemSubheading>
        </ServiceItemContainer>
      </ServicesContainer>
    </HomePkgsInBox>
  );
}
