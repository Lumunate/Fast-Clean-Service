"use client";
import React, { useState } from "react";
import { Box, Typography } from "@mui/material";
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
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faArrowRight} from "@fortawesome/free-solid-svg-icons";
import {useTheme} from "../../../contexts/themeContext";

export default function Autocare() {
  const { theme } = useTheme();

    return (
      <HomePkgsBox
        sx={{
          width: "100%",
          marginBottom: "18rem",
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
                    <ServiceDetailHeading sx={{color: "#7ed56f" }}>Interior</ServiceDetailHeading>
                    <Box>
                      <div className="innerdeet">
                        Duration: <span style={{ color: "white" }}>± 45mins</span>
                      </div>
                      <div className="innerdeet">
                        Price: <span>€74.95</span>
                      </div>
                    </Box>
                  </ServiceDetail>

                  <ServiceDetail
                  // sx={{ "& .MuiTypography-root": { color: "#ffd500" } }}
                  >
                    <ServiceDetailHeading sx={{color: "#7ed56f" }}>Exterior</ServiceDetailHeading>
                    <Box>
                      <div className="innerdeet">
                        Duration: <span style={{ color: "white" }}>± 45mins</span>
                      </div>
                      <div className="innerdeet">
                        Price: <span>€89.95</span>
                      </div>
                    </Box>
                  </ServiceDetail>

                  <ServiceDetail
                  // sx={{ "& .MuiTypography-root": { color: "#c3ff00" } }}
                  >
                    <ServiceDetailHeading sx={{color: "#7ed56f" }}>Combi</ServiceDetailHeading>
                    <Box>
                      <div className="innerdeet">
                        Duration: <span style={{ color: "white" }}>± 90mins</span>
                      </div>
                      <div className="innerdeet">
                        Price: <span>€139.95</span>
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
                    <ServiceDetailHeading sx={{color: "#2998ff" }}>Interior</ServiceDetailHeading>
                    <Box>
                      <div className="innerdeet">
                        Duration: <span style={{ color: "white" }}>± 60mins</span>
                      </div>
                      <div className="innerdeet">
                        Price: <span>€89.95</span>
                      </div>
                    </Box>
                  </ServiceDetail>

                  <ServiceDetail
                  // sx={{ "& .MuiTypography-root": { color: "#ffd500" } }}
                  >
                    <ServiceDetailHeading sx={{color: "#2998ff" }}>Exterior</ServiceDetailHeading>
                    <Box>
                      <div className="innerdeet">
                        Duration: <span style={{ color: "white" }}>± 90mins</span>
                      </div>
                      <div className="innerdeet">
                        Price: <span>€149.95</span>
                      </div>
                    </Box>
                  </ServiceDetail>

                  <ServiceDetail
                  // sx={{ "& .MuiTypography-root": { color: "#c3ff00" } }}
                  >
                    <ServiceDetailHeading sx={{color: "#2998ff" }}>Combi</ServiceDetailHeading>
                    <Box>
                      <div className="innerdeet">
                        Duration: <span style={{ color: "white" }}>± 1120/150mins</span>
                      </div>
                      <div className="innerdeet">
                        Price: <span>€189.95</span>
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
                  <ServiceName sx={{ color: "#ffb900" }}>Premium</ServiceName>
                  <ServiceCat>Bespoke</ServiceCat>
                </Box>
                <ServiceDetails>
                  <ServiceDetail>
                    <ServiceDetailHeading sx={{color: "#ffb900"  }}>Showroom</ServiceDetailHeading>
                    <Box>
                      <div className="innerdeet">
                        Duration: <span style={{ color: "white" }}>± 180mins</span>
                      </div>
                      <div className="innerdeet">
                        Price: <span>€394.95</span>
                      </div>
                    </Box>
                  </ServiceDetail>

                  <ServiceDetail
                  >
                    <ServiceDetailHeading sx={{color: "#ffb900" }}>Paint Selant </ServiceDetailHeading>
                    <Box>
                      <div className="innerdeet">
                        Duration: <span style={{ color: "white" }}>± 1-2 days</span>
                      </div>
                      <div className="innerdeet">
                        Price:
                        <span>On Request</span>
                      </div>
                    </Box>
                  </ServiceDetail>

                  <ServiceDetail
                  // sx={{ "& .MuiTypography-root": { color: "#c3ff00" } }}
                  >
                    <ServiceDetailHeading sx={{color: "#ffb900" }}>Pro Coating</ServiceDetailHeading>
                    <Box>
                      <div className="innerdeet">
                        Duration: <span style={{ color: "white" }}>± 1-2 days</span>
                      </div>
                      <div className="innerdeet">
                        Price:
                        <span>On Request</span>
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