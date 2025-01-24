"use client";
import React from "react";
import { Box, List, ListItem, styled, Typography, Grid } from "@mui/material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTools,
  faCalendarAlt,
  faLeaf,
  faMoneyBillWave,
  faCar,
  faSprayCan,
  faCouch,
} from "@fortawesome/free-solid-svg-icons";
import Form from "./Form";
import { Container, GrayBox } from "../../components/mui/FleetPkgs";
import { useTheme } from "@mui/material/styles";
import Autocare from "../../components/AutoCare/Autocare";
import { HomePkgsInBox } from "../../components/mui/HomePkgs";
import { DecorativeBackgroundImage } from "../../components/Decorative/Decorative.style";
import RadialCircle from "../../components/Decorative/RadialCircle";
import HeadingLinesAnimation from "../../components/Home/HeadingLinesAnimation/HeadingLinesAnimation";

export const FleetSubheading = styled(Typography)(({ theme }) => ({
  color: theme.palette.mode === "light" ? "#232E4A" : "#fff",
  fontSize: "3.6rem",
  fontWeight: "500",
  marginBottom: "5.3rem",
  "@media (max-width: 900px)": {
    fontSize: "2.8rem",
  },
  "@media (max-width: 600px)": {
    fontSize: "2.4rem",
    marginBottom: "2rem",
  },
}));

export const FleetContainer = styled(Container)(({ theme }) => ({
  borderRadius: "10px",
  minHeight: "100vh",
  position: "relative",
  overflow: "hidden",
  "&::after": {
    content: '""',
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    zIndex: 0,
  },
}));

export const CustomListItem = styled(ListItem)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  fontSize: "2rem",
  color: theme.palette.mode === "light" ? "#535353" : "#C5C5C5",
  paddingLeft: 0,
  paddingBottom: "1rem",

  "& svg": {
    color: "#1C79CC",
    fontSize: "2rem",
    marginRight: "1rem",
  },

  "@media (max-width: 900px)": {
    fontSize: "1.6rem",
    "& svg": {
      fontSize: "1.6rem",
    },
  },
  "@media (max-width: 600px)": {
    fontSize: "1.2rem",
  },
}));

export const ServiceTitle = styled(Typography)(({ theme }) => ({
  color: theme.palette.mode === "dark" ? "#fff" : "#232E4A",
  fontSize: "5.6rem",
  fontWeight: "600",
  textAlign: "center",
  marginBottom: "3rem",
  "@media (max-width: 900px)": {
    fontSize: "3rem",
  },
}));

export const ServiceSubtitle = styled(Typography)(({ theme }) => ({
  color: theme.palette.mode === "dark" ? "#fff" : "#232E4A",
  fontSize: "2.4rem",
  textAlign: "center",
  fontWeight: "400",
  marginBottom: "3rem",
  margin: "0 auto 4rem",
  "@media (max-width: 900px)": {
    fontSize: "1.6rem",
  },
}));

export const ServiceCard = styled(Box)(({ theme }) => ({
  textAlign: "center",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  padding: "2rem",
}));

export const ServiceIcon = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "transparent" : "#FCFCFC",
  marginBottom: "1.7rem",
  borderRadius: "50%",
  padding: "2.2rem",
  width: "100px",
  height: "100px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  border: `0.4px solid ${theme.palette.mode === "dark" ? "transparent" : "#c4c4c4"}`,
  "& img": {
    width: theme.palette.mode === "dark" ? "62px" : "42px",
    height: theme.palette.mode === "dark" ? "62px" : "42px",
    objectFit: "contain",
    filter:
      theme.palette.mode === "dark"
        ? "invert(41%) sepia(100%) saturate(493%) hue-rotate(170deg) brightness(92%) contrast(96%)"
        : "invert(20%) sepia(13%) saturate(227%) hue-rotate(204deg) brightness(93%) contrast(91%)",
  },
}));

export default function FleetMain() {
  const theme = useTheme();

  /*
    return (
        <FleetContainer sx={{}}>
            <HomePkgsInBox
                sx={{
                    margin: "0 auto",
                    position: "relative",
                    padding: "15rem 2rem",
                    borderRadius: "10px",
                    flexDirection: "column",
                    maxWidth: "1571px",
                    "@media (max-width: 1150px)": {
                        width: "100%",
                    },
                }}
            >
                <Box
                    sx={{
                        zIndex: 20,
                        textAlign: "center",
                        marginBottom: "3rem",
                    }}
                >
                    <FleetSubheading
                        sx={{
                            fontSize: "5.6rem",
                            fontWeight: "600",
                            marginBottom: "7.4rem",
                            "@media (max-width: 900px)": {
                                fontSize: "4rem",
                                marginBottom: "4rem",
                            },
                            "@media (max-width: 600px)": {
                                fontSize: "2.8rem",
                                marginBottom: "2rem",
                            },
                        }}
                    >
                        FLEETCARE PRO
                    </FleetSubheading>
                </Box>

                <Box
                    sx={{
                        display: "flex",
                        flexDirection: "row",
                        justifyContent: "space-between",
                        alignItems: "flex-start",
                        zIndex: 10,
                        gap: "2rem",
                        "@media (max-width: 600px)": {
                            flexDirection: "column",
                            gap: "5rem",
                            justifyContent: "center",
                            alignItems: "center",
                        },
                    }}
                >
                    <Box
                        sx={{
                            flex: "1",
                            color: theme => (theme.palette.mode === "light" ? "#1C79CC" : "#C5C5C5"),
                            marginTop: "3rem",
                            marginLeft: "2rem",
                            width: "100%",
                            "@media (max-width: 600px)": {
                                marginLeft: "3rem",
                                marginRight: "3rem",
                            },
                        }}
                    >
                        <FleetSubheading sx={{marginBottom: "5.3rem"}}>
                            Fleet Maintenance at Your Location or Employee’s Premises
                        </FleetSubheading>
                        <List
                            sx={{
                                fontSize: "2rem",
                                margin: 0,
                                padding: 0,
                            }}
                        >
                            <CustomListItem>
                                <FontAwesomeIcon icon={faTools} />
                                On-site Service Excellence
                            </CustomListItem>
                            <CustomListItem>
                                <FontAwesomeIcon icon={faCalendarAlt} />
                                Flexible Scheduling
                            </CustomListItem>
                            <CustomListItem>
                                <FontAwesomeIcon icon={faLeaf} />
                                Eco-Friendly & Sustainable
                            </CustomListItem>
                            <CustomListItem>
                                <FontAwesomeIcon icon={faMoneyBillWave} />
                                Great Value for Money
                            </CustomListItem>
                        </List>
                    </Box>

                    <Box
                        sx={{
                            flex: "1",
                            padding: "2rem",
                            zIndex: 10,
                        }}
                    >
                        <Form />
                    </Box>
                </Box>
                <DecorativeBackgroundImage top={"55%"} left={"-20%"} width="90rem" height="200rem" flip />
                <RadialCircle top={"20rem"} right={"20rem"} sx={{ width: "10rem !important", height: "10rem !important" }} />
                <RadialCircle top={"90%"} left={"20rem"} sx={{ width: "10rem !important", height: "10rem !important" }} />
            </HomePkgsInBox>
        </FleetContainer>
    );
    */
  return (
    <Container
      sx={{
        padding: "8rem",
        marginTop: "6rem",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        "@media (max-width: 600px)": { padding: "2rem" },
      }}
    >
      <DecorativeBackgroundImage
        top={"100%"}
        right={"0"}
        width="90rem"
        height="85rem"
        sx={{ zIndex: "1" }}
      />
      <RadialCircle
        top={"20rem"}
        right={"20rem"}
        sx={{
          width: "10rem !important",
          height: "10rem !important",
          zIndex: "1",
        }}
      />
      <Box sx={{ maxWidth: "1110px", mb: 10 }}>
        <Box sx={{ mb: 8 }}>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              marginBottom: "2rem",
            }}
          >
            <HeadingLinesAnimation text="FleetCare" />
          </Box>
          <ServiceSubtitle>
            WagenPark Maintenance - Professional Maintenance for your Fleet
          </ServiceSubtitle>
          <Typography
            sx={{
              textAlign: "center",
              maxWidth: "1110px",
              margin: "0 auto",
              fontWeight: "300",
              color: theme.palette.mode === "dark" ? "#D5D5D5" : "#000",
              fontSize: "1.8rem",
              lineHeight: 1.6,
                "@media (max-width: 600px)": { fontSize: "1.2rem" },
            }}
          >
            At Fast Clean Service we offer a complete and worry-free service
            with WagenPark Maintenance maintenance solution for business fleets.
            We understand that your vehicles have a are the calling card of your
            company, and that is why we ensure that every vehicle is always
            there looks representative. With our mobile service we perform
            maintenance on location, which takes some time and save costs,
            without having to interrupt your business operations.
          </Typography>
        </Box>

        <Box sx={{ mb: 8 }}>
          <Typography
            variant="h3"
            sx={{
              textAlign: "center",
              color: theme.palette.mode === "dark" ? "#fff" : "#232E4A",
              fontSize: "3.2rem",
              mb: 2,
                "@media (max-width: 600px)": { fontSize: "2rem" },
            }}
          >
            Our Services
          </Typography>

          <Grid container spacing={4}>
            <Grid item xs={12} md={4}>
              <ServiceCard>
                <ServiceIcon>
                  <img src="/f1.png" alt="Exterior Maintenance" />
                </ServiceIcon>
                <Typography
                  sx={{
                    color: theme.palette.mode === "dark" ? "#fff" : "#232E4A",
                    mb: 0.6,
                    fontWeight: "400",
                    fontSize: "1.8rem",
                      "@media (max-width: 600px)": { fontSize: "1.6rem" },
                  }}
                >
                  Exterior maintenance
                </Typography>
                <Typography
                  sx={{
                    color: theme.palette.mode === "dark" ? "#D5D5D5" : "#000",
                    fontSize: "1.4rem",
                    fontWeight: "300",
                      "@media (max-width: 600px)": { fontSize: "1.2rem" },
                  }}
                >
                  Thorough stream cleaning, washing and protection of the paint
                </Typography>
              </ServiceCard>
            </Grid>

            <Grid item xs={12} md={4}>
              <ServiceCard>
                <ServiceIcon>
                  <img src="/f2.png" alt="Interior Maintenance" />
                </ServiceIcon>
                <Typography
                  sx={{
                    color: theme.palette.mode === "dark" ? "#fff" : "#232E4A",
                    mb: 0.6,
                    fontWeight: "400",
                    fontSize: "1.8rem",
                      "@media (max-width: 600px)": { fontSize: "1.6rem" },
                  }}
                >
                  Interior maintenance
                </Typography>
                <Typography
                  sx={{
                    color: theme.palette.mode === "dark" ? "#D5D5D5" : "#000",
                    fontSize: "1.4rem",
                    fontWeight: "300",
                      "@media (max-width: 600px)": { fontSize: "1.2rem" },
                  }}
                >
                  Deep cleaning with steam, vacuuming, dashboard cleaning and
                  cleaning upholstery
                </Typography>
              </ServiceCard>
            </Grid>

            <Grid item xs={12} md={4}>
              <ServiceCard>
                <ServiceIcon>
                  <img src="/f3.png" alt="Protective Coatings" />
                </ServiceIcon>
                <Typography
                  sx={{
                    color: theme.palette.mode === "dark" ? "#fff" : "#232E4A",
                    mb: 0.6,
                    fontWeight: "400",
                    fontSize: "1.8rem",
                      "@media (max-width: 600px)": { fontSize: "1.6rem" },
                  }}
                >
                  Protective Coatings
                </Typography>
                <Typography
                  sx={{
                    color: theme.palette.mode === "dark" ? "#D5D5D5" : "#000",
                    fontSize: "1.4rem",
                    fontWeight: "300",
                      "@media (max-width: 600px)": { fontSize: "1.2rem" },
                  }}
                >
                  Long-lasting protection with high-quality waxes coating
                  treatments
                </Typography>
              </ServiceCard>
            </Grid>
          </Grid>
        </Box>

        <Typography
          sx={{
            textAlign: "center",
            color: theme.palette.mode === "dark" ? "#D5D5D5" : "#000",
            fontSize: "1.8rem",
            maxWidth: "1110px",
            margin: "0 auto",
            lineHeight: 1.6,
            fontWeight: "300",
              "@media (max-width: 600px)": { fontSize: "1.2rem" },
          }}
        >
          We focus on high quality using the latest techniques and
          environmentally friendly products. Your vehicles stay in top condition
          for longer, which ensures a sustainable and professional fleet.
        </Typography>
      </Box>
      <Form />
    </Container>
  );
}
