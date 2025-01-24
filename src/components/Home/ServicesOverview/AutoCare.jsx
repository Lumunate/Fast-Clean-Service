"use client";
import React, { useState } from "react";
import { Box, List, ListItem, ListItemText, Typography } from "@mui/material";
import {
    HomePkgsBox,
    HomePkgsInBox,
    ServiceSubheading,
    ServicesItem,
    ServicesGrid,
    ServiceContent,
    PkgImgCtr,
    ServiceName,
    ServiceDetails,
    ServiceDetail,
    ServiceCat,
    ServiceBtn1,
    ServiceDetailHeading,
} from "../../mui/HomePkgs";
import {useTheme} from "../../../contexts/themeContext";

export default function Autocare() {
  const { theme } = useTheme();

    return (
      <HomePkgsBox
        sx={{
          width: "100%",
          marginBottom: "8rem",
          "@media (max-width: 600px)": {
            marginBottom: "8rem",
          },
        }}
      >
        <HomePkgsInBox
            sx={{
              flexDirection: "column",
              zIndex: 100,
              "@media (max-width: 1200px)": {
                width: "100%",
              },
            }}
        >
          <ServicesGrid>

            <ServicesItem>
              <PkgImgCtr
                img="/toyotasteering.jpg"
              />
              <ServiceContent className="service__content">
                <Box>
                  <ServiceName sx={{ color: "#7ed56f" }}>Standard</ServiceName>
                  <ServiceCat>Basic</ServiceCat>
                </Box>
                <ServiceDetails>
                  <ServiceDetail>
                    <Box>
                      <div className="innerdeet">
                      From: <span style={{ color: "white", fontSize:"16px", fontWeight:500 }}>€74.95</span>
                      </div>
                    </Box>
                  </ServiceDetail>

                  <ServiceDetail>
                    <Box>
                      <div style={{ fontSize:"16px", fontWeight:300,marginBottom:"-6px"}}  className="innerdeet">
                      Included
                      </div>
                      <List
                sx={{
                  paddingLeft: { sm: 2, xs: 0 },
                  color: "#7ed56f",
                  listStyleType: "disc",
                  fontSize:"16px"
                }}
              >
                <ListItem sx={{ display: "list-item", marginBottom:"-6px", py:"0px", }}>
                  <ListItemText primary="Exterior steam cleaning" />
                </ListItem>
                <ListItem sx={{ display: "list-item", marginBottom:"-6px", py:"0px" }}>
                  <ListItemText primary="Tire blackening" />
                </ListItem>
                <ListItem sx={{ display: "list-item", marginBottom:"-6px", py:"0px" }}>
                  <ListItemText primary="Window cleaning" />
                </ListItem>
              </List>
                    </Box>
                  </ServiceDetail>

                  <ServiceDetail>
                   <Box>
                      <div className="innerdeet">
                      Book Now for a quick and thorough cleaning.
                      </div>
                    </Box>
                  </ServiceDetail>
                </ServiceDetails>
                <Box
                  sx={{
                    display: "flex",
                    marginBottom: "3rem",
                    width: "100%",
                    justifyContent: "space-between",
                    "@media (max-width: 600px)": {
                      marginBottom: "0.5rem",
                    },
                  }}
                >
                  <ServiceBtn1>
                    Learn More
                  </ServiceBtn1>
                  <ServiceBtn1 special={true} onClick={() => window.location.href = "/booking"}>Book Now</ServiceBtn1>
                </Box>
              </ServiceContent>
            </ServicesItem>
            
            <ServicesItem sx={{ marginTop: "-2.5rem",   "@media (max-width: 1400px)": { marginTop: 0 }, }}>
              <PkgImgCtr
                //  img="/bike2.jpg"
                img="/mercedessteering.jpg"
              />
              <ServiceContent className="service__content">
                <Box>
                  <ServiceName sx={{ color: "#2998ff" }}>Deluxe</ServiceName>
                  <ServiceCat>Popular</ServiceCat>
                </Box>
                <ServiceDetails>
                  <ServiceDetail>
                    <Box>
                      <div className="innerdeet">
                      From: <span style={{color: "white", fontSize:"16px", fontWeight:500 }}>€149.95</span>
                      </div>
                    </Box>
                  </ServiceDetail>

                  <ServiceDetail>
                    <Box>
                      <div style={{ fontSize:"16px", fontWeight:300,marginBottom:"-6px"}}  className="innerdeet">
                      Included
                      </div>
                      <List
                sx={{
                  paddingLeft: { sm: 2, xs: 0 },
                  color: "#2899FF",
                  listStyleType: "disc",
                  fontSize:"16px"
                }}
              >
                <ListItem sx={{ display: "list-item", marginBottom:"-6px", py:"0px", }}>
                  <ListItemText primary="Thorough steam cleaning" />
                </ListItem>
                <ListItem sx={{ display: "list-item", marginBottom:"-6px", py:"0px" }}>
                  <ListItemText primary="Interior and exterior polishing" />
                </ListItem>
                <ListItem sx={{ display: "list-item", marginBottom:"-6px", py:"0px" }}>
                  <ListItemText primary="Applying wax" />
                </ListItem>
              </List>
                    </Box>
                  </ServiceDetail>

                  <ServiceDetail>
                    <Box>
                      <div className="innerdeet">
                      Choose Deluxe for a complete treatment of your car.
                      </div>
                    </Box>
                  </ServiceDetail>
                </ServiceDetails>
                <Box
                  sx={{
                    display: "flex",
                    marginBottom: "3rem",
                    width: "100%",
                    justifyContent: "space-between",
                  }}
                >
                  <ServiceBtn1>
                    Learn More
                  </ServiceBtn1>
                  <ServiceBtn1 special={true} onClick={() => window.location.href = "/booking"}>Book Now</ServiceBtn1>
                </Box>
              </ServiceContent>
            </ServicesItem>
            <ServicesItem>
              <PkgImgCtr
                // img="/bike2.jpg"
                img="/ferraristeering.jpg"
              />
              <ServiceContent className="service__content">
                <Box>
                  <ServiceName sx={{ color: "#F4B81C" }}>Premium</ServiceName>
                  <ServiceCat>Bespoke</ServiceCat>
                </Box>
                <ServiceDetails>
                  <ServiceDetail>
                    <Box>
                      <div className="innerdeet">
                      From: <span style={{ color: "white", fontSize:"16px", fontWeight:500 }}>€189.95</span>
                      </div>
                    </Box>
                  </ServiceDetail>

                  <ServiceDetail>
                    <Box>
                      <div style={{ fontSize:"16px", fontWeight:300,marginBottom:"-6px"}}  className="innerdeet">
                      Included
                      </div>
                      <List
                sx={{
                  paddingLeft: { sm: 2, xs: 0 },
                  color: "#F4B81C",
                  listStyleType: "disc",
                  fontSize:"16px"
                }}
              >
                <ListItem sx={{ display: "list-item", marginBottom:"-6px", py:"0px", }}>
                  <ListItemText primary="Complete detail treatment" />
                </ListItem>
                <ListItem sx={{ display: "list-item", marginBottom:"-6px", py:"0px" }}>
                  <ListItemText primary="Including ceramic coating" />
                </ListItem>
                <ListItem sx={{ display: "list-item", marginBottom:"-6px", py:"0px" }}>
                  <ListItemText primary="Headlight polishing" />
                </ListItem>
              </List>
                    </Box>
                  </ServiceDetail>

                  <ServiceDetail>
                    <Box>
                      <div className="innerdeet">
                      Book Now for the ultimate showroom finish.
                      </div>
                    </Box>
                  </ServiceDetail>
                </ServiceDetails>
                <Box
                  sx={{
                    display: "flex",
                    marginBottom: "3rem",
                    width: "100%",
                    justifyContent: "space-between",
                  }}
                >
                  <ServiceBtn1>
                    Learn More
                  </ServiceBtn1>
                  <ServiceBtn1 special={true} onClick={() => window.location.href = "/booking"}>Book Now</ServiceBtn1>
                </Box>
              </ServiceContent>
            </ServicesItem>
          </ServicesGrid>
        </HomePkgsInBox>
      </HomePkgsBox>
    );
}