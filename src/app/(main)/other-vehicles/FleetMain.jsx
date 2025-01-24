"use client";
import React from "react";
import { Box, List, ListItem, styled, Typography } from "@mui/material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMotorcycle, faShip, faPlane, faBicycle } from "@fortawesome/free-solid-svg-icons";
import Form from "./Form";
import { Container, GrayBox } from "../../../components/mui/FleetPkgs";
import { HomePkgsInBox } from "../../../components/mui/HomePkgs";
import { DecorativeBackgroundImage } from "../../../components/Decorative/Decorative.style";
import RadialCircle from "../../../components/Decorative/RadialCircle";

export const VehicleSubheading = styled(Typography)(({ theme }) => ({
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
                    fontWeight: "600",
                    marginBottom: "7.4rem",
                    "@media (max-width: 900px)": {
                        fontSize: "4rem",
                        marginBottom: "4rem",
                    },
                    "@media (max-width: 600px)": {
                        fontSize: "2.8rem",
                        marginBottom: "0",
                    },
                }}
            >
              DIVERSE VEHICLES
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
              <VehicleSubheading sx={{}}>
                Specialized AutoCare for Bikes, Boats, Planes, and More!
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
                  Expert Bike Maintenance and Detailing
                </CustomListItem>
                <CustomListItem>
                  <FontAwesomeIcon icon={faShip} />
                  Comprehensive Care for Boats
                </CustomListItem>
                <CustomListItem>
                  <FontAwesomeIcon icon={faPlane} />
                  Precision Cleaning and Maintenance for Aircraft
                </CustomListItem>
                <CustomListItem>
                  <FontAwesomeIcon icon={faBicycle} />
                  Tailored Services for Specialty Vehicles
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
          <DecorativeBackgroundImage top={"55%"} right={"-20%"} width="90rem" height="200rem"/>
          <RadialCircle top={"20rem"} right={"-20rem"} sx={{ width: "10rem !important", height: "10rem !important" }} />
          <RadialCircle top={"25%"} left={"-15rem"} sx={{ width: "20rem !important", height: "30rem !important" }} />
        </HomePkgsInBox>
      </VehicleContainer>
  );
}
