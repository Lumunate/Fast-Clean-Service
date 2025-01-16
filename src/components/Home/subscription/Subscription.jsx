"use client";
import Image from "next/image";
import { Box, styled, Typography } from "@mui/material";
import { useTheme } from "../../../contexts/themeContext";
import { HomePkgsInBox } from "../../mui/HomePkgs";
import FadeIn from "../../Animations/FadeIn";

export const SubscriptionHeading = styled(Typography)(({ theme }) => ({
  textAlign: "center",
  fontSize: "4rem ",
  color: theme.palette.mode === "dark" ? "#fff" : "#232E4A",
  fontWeight: "bold",
  marginBottom: "0.9rem",
  "@media (max-width: 600px)": {
    fontSize: "2.2rem ",
    marginBottom: 0,
  },
}));

export const SubscriptionDescription = styled(Typography)(({ theme }) => ({
  textAlign: "center",
  fontSize: "1.4rem",
  color: theme.palette.mode === "dark" ? "#fff" : "#000000",
  maxWidth: "780px",
  "@media (max-width: 600px)": {
    fontSize: "1rem ",
  },
}));

export const SubscriptionContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "space-around",
  flexWrap: "wrap",
  maxWidth: "80%",
  marginBottom: "3rem",
  gap: "9.7rem",
  "@media (max-width: 600px)": {
    gap: "2rem",
  },
}));

export const SubscriptionItemContainer = styled(Box)(({ theme }) => ({
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
  "@media (max-width: 600px)": {
    maxWidth: "100%",
    padding: "1rem",
  },
}));

export const SubscriptionItemImageContainer = styled(Box)(({ theme }) => ({
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

export const SubscriptionItemImage = styled(Image)(({ theme }) => ({
  filter:
    theme.palette.mode === "dark"
      ? "invert(41%) sepia(100%) saturate(493%) hue-rotate(170deg) brightness(92%) contrast(96%)"
      : "invert(20%) sepia(13%) saturate(227%) hue-rotate(204deg) brightness(93%) contrast(91%)",
}));

export const SubscriptionItemHeading = styled(Typography)(({ theme }) => ({
  fontSize: "1.6rem",
  color: theme.palette.mode === "dark" ? "#fff" : "#232E4A",
  fontWeight: 500,
  "@media (max-width: 600px)": {
    fontSize: "1.2rem ",
  },
}));

export const SubscriptionItemSubheading = styled(Typography)(({ theme }) => ({
  fontSize: "1.4rem",
  color: theme.palette.mode === "dark" ? "#C2C2C2" : "#535353",
  "@media (max-width: 600px)": {
    fontSize: "1rem ",
  },
}));

export default function Subscription() {
  const { theme } = useTheme();

  return (
    <HomePkgsInBox
      sx={{
        flexDirection: "column",
        alignItems: "center",
        marginBottom: "12.3rem",
        marginTop: "14rem",
        marginLeft: "auto",
        marginRight: "auto",
        "@media (max-width: 600px)": {
          marginBottom: "0",
          marginTop: "4rem",
        },
      }}
    >
      <FadeIn direction="up" distance={100} duration={0.5}>
        <SubscriptionHeading>SUBSCRIPTIONS</SubscriptionHeading>
      </FadeIn>
      <SubscriptionDescription sx={{ fontSize: "20px", fontWeight: 400 }}>
        Subscription Plans – Worry-Free Maintenance for your Vehicle
      </SubscriptionDescription>
      <SubscriptionDescription>
        With our Fast Clean Service Subscription Plans we offer a flexible and
        economical way to always keep your vehicle in top condition. Choose from
        several options tailored to your needs and driving style, with regular
        maintenance and exclusive benefits
      </SubscriptionDescription>
      <SubscriptionHeading sx={{ fontSize: "32px", fontWeight: "400" }}>
        What do we offer:
      </SubscriptionHeading>

      <SubscriptionContainer>
        <SubscriptionItemContainer>
          <SubscriptionItemImageContainer>
            <SubscriptionItemImage
              src="/subscription/icon1.png"
              alt="On-Site Service"
              width={39}
              height={40}
              sx={{ "@media (max-width: 600px)": { transform: "scale(0.6)" } }}
            />
          </SubscriptionItemImageContainer>
          <SubscriptionItemHeading variant="h5">On-Site Service</SubscriptionItemHeading>
          <SubscriptionItemSubheading variant="p">
            Enjoy our services at our dedicated location, where you can relax
            while we take care of your vehicle.
          </SubscriptionItemSubheading>
        </SubscriptionItemContainer>

        <SubscriptionItemContainer>
          <SubscriptionItemImageContainer>
            <SubscriptionItemImage
              src="/subscription/flexible-access.png"
              alt="Mobile Service"
              width={48}
              height={48}
              sx={{ "@media (max-width: 600px)": { transform: "scale(0.6)" } }}
            />
          </SubscriptionItemImageContainer>
          <SubscriptionItemHeading variant="h5">Mobile Service</SubscriptionItemHeading>
          <SubscriptionItemSubheading variant="p">
            Enjoy our services at our dedicated location, where you can relax
            while we take care of your vehicle.
          </SubscriptionItemSubheading>
        </SubscriptionItemContainer>
      </SubscriptionContainer>
      <SubscriptionDescription
        sx={{
          fontSize: "18px",
          fontWeight: "300",
          paddingLeft:"20px",
          paddingRight:"20px",
          "@media (max-width: 600px)": {
            fontSize: "1.2rem ",
          },
        }}
      >
        Choose one of our subscription options and enjoy convenience and
        quality, without a hassle!
      </SubscriptionDescription>
    </HomePkgsInBox>
  );
}
