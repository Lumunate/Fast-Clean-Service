"use client";
import Image from "next/image";
import { Box, styled, Typography } from "@mui/material";
import { useTheme } from "../../../src/contexts/themeContext";
import { HomePkgsInBox } from "../../components/mui/HomePkgs";
import FadeIn from "../../components/Animations/FadeIn";

export const FleetCareHeading = styled(Typography)(({ theme }) => ({
  textAlign: "center",
  fontSize: "32px",
  color: theme.palette.mode === "dark" ? "#fff" : "#232E4A",
  fontWeight: "bold",
  marginTop:"60px",
  "@media (max-width: 600px)": {
    marginTop:0,
  },
}));

export const FleetCareDescription = styled(Typography)(({ theme }) => ({
  textAlign: "center",
  fontSize: "18px",
  fontWeight:300,
  color: theme.palette.mode === "dark" ? "#fff" : "#000000",
  //   maxWidth: "780px",
  "@media (max-width: 600px)": {
    fontSize: "1rem ",
  },
}));

export const FleetCareContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "space-around",
  flexWrap: "wrap",
  //   maxWidth: "80%",
  marginBottom: "3rem",
  gap: "9.7rem",
  "@media (max-width: 600px)": {
    gap: "2rem",
  },
}));

export const FleetCareItemContainer = styled(Box)(({ theme }) => ({
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

export const FleetCareItemImageContainer = styled(Box)(({ theme }) => ({
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

export const FleetCareItemImage = styled(Image)(({ theme }) => ({
  filter:
    theme.palette.mode === "dark"
      ? "invert(41%) sepia(100%) saturate(493%) hue-rotate(170deg) brightness(92%) contrast(96%)"
      : "invert(20%) sepia(13%) saturate(227%) hue-rotate(204deg) brightness(93%) contrast(91%)",
}));

export const FleetCareItemHeading = styled(Typography)(({ theme }) => ({
  fontSize: "18px",
  color: theme.palette.mode === "dark" ? "#fff" : "#232E4A",
  fontWeight: 500,
  "@media (max-width: 600px)": {
    fontSize: "1.2rem ",
  },
}));

export const FleetCareItemSubheading = styled(Typography)(({ theme }) => ({
  fontSize: "1.4rem",
  color: theme.palette.mode === "dark" ? "#C2C2C2" : "#535353",
  "@media (max-width: 600px)": {
    fontSize: "1rem ",
  },
}));

export default function FleetCare() {
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
      <Box
        sx={{
          maxWidth: "964px",
          gap: "4rem",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <FadeIn direction="up" distance={100} duration={0.5}>
          <FleetCareHeading>FleetCareS</FleetCareHeading>
        </FadeIn>
        <FleetCareDescription sx={{ fontSize: "20px", fontWeight: 400 }}>
          WagenPark Maintenance – Professional Maintenance for your Fleet
        </FleetCareDescription>
        <FleetCareDescription>
          At Fast Clean Service we offer a complete and worry-free service with
          WagenPark maintenance solution for business fleets. We
          understand that your vehicles have a are the calling card of your
          company, and that is why we ensure that every vehicle is always there
          looks representative. With our mobile service we perform maintenance
          on location, which takes some time and save costs, without having to
          interrupt your business operations.
        </FleetCareDescription>
      </Box>

      <FleetCareHeading sx={{ fontSize: "32px", fontWeight: "400" }}>
      Our Services
      </FleetCareHeading>

      <FleetCareContainer>
        <FleetCareItemContainer>
          <FleetCareItemImageContainer>
            <FleetCareItemImage
              src="/car-service.png"
              alt="car Service"
              width={39}
              height={40}
              sx={{ "@media (max-width: 600px)": { transform: "scale(0.6)" } }}
            />
          </FleetCareItemImageContainer>
          <FleetCareItemHeading variant="h5">
          Exterior maintenance
          </FleetCareItemHeading>
          <FleetCareItemSubheading variant="p">
          Thorough steam cleaning, washing and protection of the paint.
          </FleetCareItemSubheading>
        </FleetCareItemContainer>
        <FleetCareItemContainer>
          <FleetCareItemImageContainer>
            <FleetCareItemImage
              src="/steering-wheel.png"
              alt="steering Wheel"
              width={39}
              height={40}
              sx={{ "@media (max-width: 600px)": { transform: "scale(0.6)" } }}
            />
          </FleetCareItemImageContainer>
          <FleetCareItemHeading variant="h5">
          Interior maintenance
          </FleetCareItemHeading>
          <FleetCareItemSubheading variant="p">
          Deep cleaning with steam, vacuuming, dashboard cleaning and cleaning upholstery
          </FleetCareItemSubheading>
        </FleetCareItemContainer>

        <FleetCareItemContainer>
          <FleetCareItemImageContainer>
            <FleetCareItemImage
              src="/Vector.png"
              alt="Vector"
              width={48}
              height={48}
              sx={{ "@media (max-width: 600px)": { transform: "scale(0.6)" } }}
            />
          </FleetCareItemImageContainer>
          <FleetCareItemHeading variant="h5">
          Protective Coatings
          </FleetCareItemHeading>
          <FleetCareItemSubheading variant="p">
          Long-lasting protection with high-quality waxes coating treatments.
          </FleetCareItemSubheading>
        </FleetCareItemContainer>
      </FleetCareContainer>
      <FleetCareDescription
        sx={{
          fontSize: "18px",
          fontWeight: "300",
          maxWidth:"1102px",
          "@media (max-width: 600px)": {
            fontSize: "14px",
          },
        }}
      >
        We focus on high quality using the latest techniques and environmentally friendly products. Your vehicles stay in top condition for longer, which ensures a sustainable and professional fleet
      </FleetCareDescription>
    </HomePkgsInBox>
  );
}
