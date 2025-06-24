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
import {useLocale, useTranslations} from "next-intl";

export default function Autocare() {
  const t = useTranslations('home.anywhere_autocare_section');
  const { theme } = useTheme();
  const locale = useLocale()
  const cardBottom = locale === "en" ? "-80%": "-90%" ;

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
                  <ServiceName sx={{ color: "#7ed56f" }}>{t("packages.0.name")}</ServiceName>
                  <ServiceCat>{t("packages.0.category")}</ServiceCat>
                </Box>
                <ServiceDetails>
                  <ServiceDetail>
                    <Box>
                      <div className="innerdeet">
                          {t("packages.0.price")}: <span style={{ color: "white", fontSize:"16px", fontWeight:500 }}>€74.95</span>
                      </div>
                    </Box>
                  </ServiceDetail>

                  <ServiceDetail>
                    <Box>
                      <div style={{ fontSize:"16px", fontWeight:300,marginBottom:"-6px"}}  className="innerdeet">
                          {t("packages.0.title")}
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
                  <ListItemText primary={t("packages.0.features.0")} />
                </ListItem>
                <ListItem sx={{ display: "list-item", marginBottom:"-6px", py:"0px" }}>
                  <ListItemText primary={t("packages.0.features.1")} />
                </ListItem>
                <ListItem sx={{ display: "list-item", marginBottom:"-6px", py:"0px" }}>
                  <ListItemText primary={t("packages.0.features.2")} />
                </ListItem>
              </List>
                    </Box>
                  </ServiceDetail>

                  <ServiceDetail sx={{"@media (max-width: 600px)": {
                    marginBottom:"6rem"
  },}}>
                   <Box>
                      <div className="innerdeet">
                          {t("packages.0.description")}
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
                  <ServiceBtn1 onClick={() => window.location.href = "/autocare"}>
                      {t("packages.0.buttons.learn_more")}
                  </ServiceBtn1>
                  <ServiceBtn1 special={true} onClick={() => window.location.href = "/booking"}>{t("packages.0.buttons.book_now")}</ServiceBtn1>
                </Box>
              </ServiceContent>
            </ServicesItem>

            <ServicesItem sx={{ marginTop: "-2.5rem",   "@media (max-width: 1400px)": { marginTop: 0 },  }}>
              <PkgImgCtr
                //  img="/bike2.jpg"
                img="/mercedessteering.jpg"
              />
              <ServiceContent sx={{ "@media (max-width: 600px)": {
    bottom: cardBottom,
  },"@media (max-width: 600px)": {
     bottom: cardBottom,
      "&:hover": {
        bottom: locale === "en"? "0%" : "-7% !important",
      },}}} className="service__content">
                <Box sx={{ "@media (max-width: 600px)": {
                            marginBottom: "3rem",
                        }}}>
                    <ServiceName sx={{ color: "#2998ff" }}>{t("packages.1.name")}</ServiceName>
                    <ServiceCat>{t("packages.1.category")}</ServiceCat>
                </Box>
                <ServiceDetails>
                  <ServiceDetail>
                    <Box>
                      <div className="innerdeet">
                          {t("packages.0.price")}: <span style={{color: "white", fontSize:"16px", fontWeight:500 }}>€149.95</span>
                      </div>
                    </Box>
                  </ServiceDetail>

                  <ServiceDetail>
                    <Box>
                      <div style={{ fontSize:"16px", fontWeight:300,marginBottom:"-6px"}}  className="innerdeet">
                          {t("packages.0.title")}
                      </div>
                      <List
                sx={{
                  paddingLeft: { sm: 2, xs: 0 },
                  color: "#2899FF",
                  listStyleType: "disc",
                  fontSize:"16px",
                    "@media (max-width: 600px)": {
                        fontSize: "12px",
                    },
                }}
              >
                          <ListItem sx={{ display: "list-item", marginBottom: "-6px", py: "0px" }}>
                              <ListItemText primary={t("packages.1.features.0")} />
                          </ListItem>
                          <ListItem sx={{ display: "list-item", marginBottom: "-6px", py: "0px" }}>
                              <ListItemText primary={t("packages.1.features.1")} />
                          </ListItem>
                          <ListItem sx={{ display: "list-item", marginBottom: "-6px", py: "0px" }}>
                              <ListItemText primary={t("packages.1.features.2")} />
                          </ListItem>
              </List>
                    </Box>
                  </ServiceDetail>

                  <ServiceDetail>
                    <Box>
                      <div className="innerdeet">
                          {t("packages.1.description")}
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
                  <ServiceBtn1  onClick={() => window.location.href = "/autocare"}>
                      {t("packages.1.buttons.learn_more")}
                  </ServiceBtn1>
                  <ServiceBtn1 special={true} onClick={() => window.location.href = "/booking"}>{t("packages.1.buttons.book_now")}</ServiceBtn1>
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
                    <ServiceName sx={{ color: "#F4B81C" }}>{t("packages.2.name")}</ServiceName>
                    <ServiceCat>{t("packages.2.category")}</ServiceCat>
                </Box>
                <ServiceDetails>
                  <ServiceDetail>
                    <Box>
                      <div className="innerdeet">
                          {t("packages.0.price")}: <span style={{ color: "white", fontSize:"16px", fontWeight:500 }}>€189.95</span>
                      </div>
                    </Box>
                  </ServiceDetail>

                  <ServiceDetail>
                    <Box>
                      <div style={{ fontSize:"16px", fontWeight:300,marginBottom:"-6px"}}  className="innerdeet">
                          {t("packages.0.title")}
                      </div>
                      <List
                sx={{
                  paddingLeft: { sm: 2, xs: 0 },
                  color: "#F4B81C",
                  listStyleType: "disc",
                  fontSize:"16px"
                }}
              >
                          <ListItem sx={{ display: "list-item", marginBottom: "-6px", py: "0px" }}>
                              <ListItemText primary={t("packages.2.features.0")} />
                          </ListItem>
                          <ListItem sx={{ display: "list-item", marginBottom: "-6px", py: "0px" }}>
                              <ListItemText primary={t("packages.2.features.1")} />
                          </ListItem>
                          <ListItem sx={{ display: "list-item", marginBottom: "-6px", py: "0px" }}>
                              <ListItemText primary={t("packages.2.features.2")} />
                          </ListItem>
              </List>
                    </Box>
                  </ServiceDetail>

                  <ServiceDetail>
                    <Box>
                      <div className="innerdeet">
                          {t("packages.2.description")}
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
                  <ServiceBtn1 onClick={() => window.location.href = "/autocare"}>
                      {t("packages.2.buttons.learn_more")}
                  </ServiceBtn1>
                  <ServiceBtn1 special={true} onClick={() => window.location.href = "/booking"}>{t("packages.2.buttons.book_now")}</ServiceBtn1>
                </Box>
              </ServiceContent>
            </ServicesItem>
          </ServicesGrid>
        </HomePkgsInBox>
      </HomePkgsBox>
    );
}