"use client";
import React from "react";
import { Box, List, ListItem, styled, Typography } from "@mui/material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMotorcycle, faShip, faPlane, faBicycle, faCaravan, faTruck } from "@fortawesome/free-solid-svg-icons";
import Form from "./Form";
import { Container, GrayBox } from "../../../components/mui/FleetPkgs";
import { HomePkgsInBox } from "../../../components/mui/HomePkgs";
import { DecorativeBackgroundImage } from "../../../components/Decorative/Decorative.style";
import RadialCircle from "../../../components/Decorative/RadialCircle";
import HeadingLinesAnimation from "../../../components/Home/HeadingLinesAnimation/HeadingLinesAnimation";
import {useTranslations} from "next-intl";

export const VehicleSubheading = styled(Typography)(({ theme }) => ({
  color: theme.palette.mode === "light" ? "#232E4A" : "#fff",
  fontSize: "3.6rem",
  fontWeight: "500",
    marginBottom: "5.3rem",
  "@media (max-width: 992px)": {
    fontSize: "2.8rem",
  },
  "@media (max-width: 600px)": {
    fontSize: "2.4rem",
    marginBottom: "2rem",
  },
}));

export const VehicleContainer = styled(Container)(({ theme }) => ({
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

const SectionHeader = styled(Box)(({ theme }) => ({
    display: "flex",
    alignItems: "center",
    marginTop: "4rem",
    marginBottom: "1rem",
}));

const SectionHeading = styled(Typography)(({ theme }) => ({
    fontSize: "2.4rem",
    fontWeight: 600,
    color: theme.palette.mode === "light" ? "#232E4A" : "#fff",
    "@media (max-width: 600px)": {
        fontSize: "1.8rem",
    },
}));

const SectionText = styled(Typography)(({ theme }) => ({
    fontSize: "1.8rem",
    lineHeight: 1.6,
    marginBottom: "2rem",
    color: theme.palette.mode === "light" ? "#535353" : "#C5C5C5",
    "@media (max-width: 600px)": {
        fontSize: "1.4rem",
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

export default function OtherVehiclesMain() {
    const t = useTranslations('other_vehicles');
  return (
      <VehicleContainer
      >
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
                "@media (max-width: 600px)": {
                    marginTop: "7rem",
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
            <VehicleSubheading
                sx={{
                    fontSize: "5.6rem",
                    marginBottom: "7.4rem",
                    "@media (max-width: 900px)": {
                        fontSize: "4rem",
                        marginBottom: "4rem",
                    },
                    "@media (max-width: 600px)": {
                        marginBottom: "0",
                    },
                }}
            >
              <HeadingLinesAnimation text={t("title")} />
            </VehicleSubheading>
          </Box>

          <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "flex-start",
                zIndex: 10,
                gap: "2rem",
                  "@media (max-width: 992px)": {
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
                    "@media (max-width: 992px)": {
                        marginLeft: "0",
                        marginRight: "0",

                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        justifyContent: "center",
                    },
                    
                }}
            >
              <VehicleSubheading sx={{}}>
                  {t("subtitle")}
              </VehicleSubheading>
              <List
                  sx={{
                    fontSize: "2rem",
                    margin: 0,
                    padding: 0,
                  }}
              >
                <CustomListItem>
                  <FontAwesomeIcon icon={faMotorcycle} />
                    {t("description.0.text")}
                </CustomListItem>
                <CustomListItem>
                  <FontAwesomeIcon icon={faShip} />
                    {t("description.1.text")}
                </CustomListItem>
                <CustomListItem>
                  <FontAwesomeIcon icon={faPlane} />
                    {t("description.2.text")}
                </CustomListItem>
                <CustomListItem>
                  <FontAwesomeIcon icon={faBicycle} />
                    {t("description.3.text")}
                </CustomListItem>
                  <CustomListItem>
                      <FontAwesomeIcon icon={faCaravan} />
                      {t("description.4.text")}
                  </CustomListItem>
                  <CustomListItem>
                      <FontAwesomeIcon icon={faTruck} />
                      {t("description.5.text")}
                  </CustomListItem>
              </List>

                <Box>
                    <SectionHeader>
                        <FontAwesomeIcon icon={faMotorcycle} style={{ marginRight: "1rem", fontSize: "2.4rem", color: "#1C79CC" }} />
                        <SectionHeading component="h3">{t("sections.0.heading")}</SectionHeading>
                    </SectionHeader>
                    <SectionText>{t("sections.0.text")}</SectionText>

                    <SectionHeader>
                        <FontAwesomeIcon icon={faShip} style={{ marginRight: "1rem", fontSize: "2.4rem", color: "#1C79CC" }} />
                        <SectionHeading component="h3">{t("sections.1.heading")}</SectionHeading>
                    </SectionHeader>
                    <SectionText>{t("sections.1.text")}</SectionText>

                    <SectionHeader>
                        <FontAwesomeIcon icon={faCaravan} style={{ marginRight: "1rem", fontSize: "2.4rem", color: "#1C79CC" }} />
                        <SectionHeading component="h3">{t("sections.2.heading")}</SectionHeading>
                    </SectionHeader>
                    <SectionText>{t("sections.2.text")}</SectionText>

                    <SectionHeader>
                        <FontAwesomeIcon icon={faTruck} style={{ marginRight: "1rem", fontSize: "2.4rem", color: "#1C79CC" }} />
                        <SectionHeading component="h3">{t("sections.3.heading")}</SectionHeading>
                    </SectionHeader>
                    <SectionText>{t("sections.3.text")}</SectionText>

                </Box>
            </Box>

            <Box
                sx={{
                  flex: "1",
                  padding: {xs:'1rem',sm:"2rem"},
                  zIndex: 10,
                }}
            >
              <Form />
            </Box>
          </Box>
          <DecorativeBackgroundImage top={"55%"} right={"-20%"} width="90rem" height="200rem"/>
          <RadialCircle top={"20rem"} right={"-20rem"} sx={{ width: "10rem !important", height: "10rem !important" }} />
          <RadialCircle top={"25%"} left={"-15rem"} sx={{ width: "20rem !important", height: "30rem !important" }} />
        </HomePkgsInBox>
      </VehicleContainer>
  );
}
