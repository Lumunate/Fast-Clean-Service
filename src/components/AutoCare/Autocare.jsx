"use client";
import React, { useEffect, useRef, useState } from "react";
import { useTheme } from "../../contexts/themeContext";
import { HomePkgsBox, HomePkgsInBox } from "../../components/mui/HomePkgs";
import {
    AutoTab,
    AutoTabContainer,
    Card,
    CardButton,
    CardContainer,
    CardDetails,
    CardHeader,
    CardInfo,
} from "../../components/mui/AutoCarePkgs";
import { Box, ListItem, Typography } from "@mui/material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import RadialCircle from "../Decorative/RadialCircle";
import { DecorativeBackgroundImage } from "../Decorative/Decorative.style";
import HeadingLinesAnimation from "../Home/HeadingLinesAnimation/HeadingLinesAnimation";
import { englishPackages } from "../../lib/enData.js";
import { useAutocarePackages } from "../../hooks/useAutocarePackages";
// import Preloader from "../Preloader";
import Link from "next/link";

import { useLocale, useTranslations } from "next-intl";

import { fontSize, fontWeight } from "@mui/system";

const ModdedCard = ({ card, color }) => {
    const locale = useLocale();
    const { theme } = useTheme();

    return (
        <Card
            color={color}
            sx={{
                width: "100%",
                minWidth: "250px",
                flex: "1 1 30%",
                maxWidth: "calc(33% - 1rem)",
                minHeight: "500px",
                backgroundColor: card?.options ? "" : "#cbcbcb80",
                "@media (max-width: 900px)": {
                    flex: "1 1 45%",
                    maxWidth: "calc(50% - 1rem)",
                },
                "@media (max-width: 600px)": {
                    flex: "1 1 90%",
                    maxWidth: "calc(100% - 1rem)",
                    padding: "2rem",
                },
            }}
        >
            <div className="style style--2" />
            <CardHeader color={color}>
                <Typography
                    className="sub-heading"
                    sx={{ color: color, fontSize: "2rem !important" }}
                >
                    {card?.name}
                </Typography>
                <Typography
                    className="heading"
                    sx={{
                        color: card?.options
                            ? `${theme.palette.primary.contrastText} !important`
                            : "#858585 !important",
                    }}
                >
                    {card?.type}
                </Typography>
            </CardHeader>
            <CardDetails sx={{ height: "100%" }}>
                {card?.options?.map((option, index) => (
                    <ListItem
                        key={index}
                        sx={{
                            "&:not(:last-of-type)": {
                                borderBottom: `1px solid ${theme.palette.primary.lightContrast}`,
                            },
                        }}
                    >
                        <FontAwesomeIcon
                            icon={faCheckCircle}
                            style={{
                                color: color,
                                transform: "translateY(2px)",
                                marginRight: "1rem",
                            }}
                        />
                        <Box
                            sx={{
                                width: "100%",
                                display: "flex",
                                justifyContent: "space-between",
                            }}
                        >
                            <Typography
                                sx={{
                                    fontSize: "1.6rem",
                                    "@media (max-width: 600px)": {
                                        fontSize: "1.2rem !important",
                                    },
                                }}
                            >
                                { locale === "en" ? option?.name?.en : option?.name?.nl}
                            </Typography>
                            {option.additionalCost && (
                                <Typography
                                    sx={{
                                        fontSize: "1.6rem",
                                        "@media (max-width: 600px)": {
                                            fontSize: "1.2rem !important",
                                        },
                                    }}
                                >
                                    €{option.additionalCost}
                                </Typography>
                            )}
                        </Box>
                    </ListItem>
                ))}
            </CardDetails>
        </Card>
    );
};

const AutoCare = () => {
    const { theme } = useTheme();
    const t = useTranslations("anywhere_autocare");

    const locale = useLocale();


    const { packages, loading, error, fetchPackages } = useAutocarePackages();

    const packagesAll = packages?.packages;

    const [selectedTab, setSelectedTab] = useState("Standard");
    const [hasClickedTab, setHasClickedTab] = useState(false);
    const [subCat, setSubCat] = useState("");
    const [mainCardsVisible, setMainCardsVisible] = useState(true);
    const [addonsVisible, setAddonsVisible] = useState(false);

    const headerRef = useRef(null);
    const sectionRef = useRef(null);
    const subSectionRef = useRef(null);
    const containerRef = useRef(null);
    const addonsContainerRef = useRef(null);

    const color =
        selectedTab === "Standard"
            ? "#7ed56f"
            : selectedTab === "Deluxe"
                ? "#2998ff"
                : "#ff7730";

    useEffect(() => {
        fetchPackages();
    }, [fetchPackages]);

    useEffect(() => {
        const observerCallback = (entries) => {
            entries.forEach((entry) => {
                if (entry.target === containerRef.current) {
                    if (entry.isIntersecting) {
                        setMainCardsVisible(true);
                    }
                } else if (entry.target === addonsContainerRef.current) {
                    if (entry.isIntersecting) {
                        setAddonsVisible(true);
                    }
                }
            });
        };

        const observer = new IntersectionObserver(observerCallback, {
            threshold: 0.5,
        });

        if (containerRef.current) observer.observe(containerRef.current);
        if (addonsContainerRef.current)
            observer.observe(addonsContainerRef.current);

        return () => {
            observer.disconnect();
        };
    }, []);

    const handleTabChange = (tab) => {
        setSelectedTab(tab);
        setHasClickedTab(true);
        setSubCat("");

        setMainCardsVisible(true);

        if (headerRef.current) {
            const height = headerRef.current.clientHeight - 80;
            setTimeout(() => {
                window.scrollBy({
                    top: height,
                    behavior: "smooth",
                });
            }, 800);
        }
    };

    const handleSubCatChange = (subCat) => {
        setSubCat(subCat);
        // Force the add-ons row to show
        setAddonsVisible(true);

        if (subSectionRef.current) {
            subSectionRef.current.scrollIntoView({
                behavior: "smooth",
                block: "start",
            });
        }
    };


    const allPackages = packages?.packages?.[selectedTab.toLowerCase()] || [];

    const firstPkg = allPackages[0];
    const fromPrice = firstPkg?.price || "€--";
    const fromDuration = firstPkg?.duration || "-- min";

    return (
        <Box
            sx={{
                position: "relative",
                backgroundPosition: "center",
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
            }}
        >
            {theme.palette.mode === "dark" && (
                <Box
                    sx={{
                        position: "absolute",
                        top: 0,
                        left: 0,
                        width: "100%",
                        height: "100%",
                        zIndex: 0,
                    }}
                />
            )}

      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          marginBottom: "2rem",
          marginTop: "15rem",
          "@media (max-width: 600px)": { marginTop: "5rem" },
        }}
      >
        <HeadingLinesAnimation text={t("title")} />
      </Box>

      <DecorativeBackgroundImage
        top={"50%"}
        right={"0"}
        width="90rem"
        height="65rem"
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
      <RadialCircle
        top={"90%"}
        left={"20rem"}
        sx={{
          width: "10rem !important",
          height: "10rem !important",
          zIndex: "1",
        }}
      />

            {/* ------------------ TABS (STANDARD, DELUXE, PREMIUM) ------------------ */}
            <HomePkgsBox
                ref={headerRef}
                sx={{
                    position: "relative",
                    padding: "5rem 5rem 5rem",
                    "@media (max-width: 600px)": { padding: "0 5rem" },
                }}
            >
                <AutoTabContainer
                    sx={{
                        display: "flex",
                        flexWrap: "wrap",
                        gap: "16px",
                        justifyContent: "center",
                        "@media (max-width: 800px)": {
                            flexDirection: "column",
                            alignItems: "center",
                        },
                    }}
                >
                    {/* ---------- STANDARD ---------- */}
                    <AutoTab
                        className={hasClickedTab && selectedTab === "Standard" ? "selected" : ""}
                        onClick={() => handleTabChange("Standard")}
                        sx={{
                            flex: "1 1 30%",
                            maxWidth: "calc(33% - 16px)",
                            "@media (max-width: 800px)": {
                                maxWidth: "calc(90% - 16px)",
                            },
                        }}
                    >
                        <div
                            className="tab__side tab__side--front"
                            style={{
                                position: "relative",
                                height: "40rem",
                            }}
                        >
                            {/* Slanted Banner */}
                            <Box
                                sx={{
                                    position: "absolute",
                                    top: "8%",
                                    left: "-32%",
                                    width: "120%",
                                    height: "60px",
                                    backgroundColor: "#4EE744",
                                    transform: "rotate(-40deg)",
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    zIndex: 1,
                                }}
                            >
                                <Typography
                                    sx={{
                                        position: "absolute",
                                        color: "white",
                                        fontWeight: 300,
                                        transform: "rotate(-1deg)",
                                        fontSize: "18px",
                                    }}
                                >
                                    {t("economy")}
                                </Typography>
                            </Box>
                            {/* FRONT-SIDE IMAGE */}
                            <div
                                className="tab__picture tab__picture--1"
                                style={{
                                    marginTop: "-60px",
                                    marginBottom: "60px",
                                    backgroundImage: `url("/autocare-card1.png")`,
                                    backgroundSize: "cover",
                                    backgroundPosition: "center",
                                }}
                            >
                                <Box
                                    sx={{
                                        position: "absolute",
                                        top: 0,
                                        left: 0,
                                        right: 0,
                                        bottom: 0,
                                        backgroundColor: "#4EE744",
                                        opacity: 0.4,
                                        pointerEvents: "none",
                                    }}
                                />
                            </div>

              <Typography
                className="heading"
                sx={{
                  marginTop: "1rem",
                  fontSize: "1.5rem",
                  fontWeight: "bold",
                  textAlign: "center",
                }}
              >
                <span className="heading--span heading--span-1">{t("standardHeading")}</span>

              </Typography>

              {/* FROM PRICE + DURATION, directly from the new data */}
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  marginTop: "1rem",
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    width: "80%",
                    marginBottom: "0.5rem",
                  }}
                >
                  <Typography sx={{ fontWeight: "300" }}>{t("from")}:</Typography>
                  <Typography sx={{ fontWeight: "500", color: "#7ed56f" }}>
                    {packagesAll?.standard[0]?.price}
                  </Typography>
                </Box>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    width: "80%",
                  }}
                >
                  <Typography sx={{ fontWeight: "300" }}>{t("duration")}:</Typography>
                  <Typography sx={{ fontWeight: "300" }}>
                    {packages?.packages?.standard[0]?.totalDuration}
                  </Typography>
                </Box>
              </Box>
            </div>

            <div
              style={{ padding: "0px 10px" }}
              className="tab__side tab__side--back tab__side--back-1"
            >
              <div className="tab__cta">

                <Typography  className="tab__value">{t("standardHeading")}</Typography>

                <Box
                  sx={{
                    display: "flex",
                    gap: "8px",
                    justifyContent: "space-between",
                    alignItems: "center",
                    marginTop:"16px"
                  }}
                >
                  <Typography
                    sx={{
                      fontSize: "14px !important",
                      color: "#292929A6",
                      "@media (max-width: 1024px)": {
                        fontSize: "12px !important",
                      },
                    }}
                  >
                    {t("packageNames.0")}
                  </Typography>
                  <Box
                    sx={{ display: "flex", gap: "6px", alignItems: "center" }}
                  >
                    <Typography
                      sx={{
                        fontSize: "12px !important",
                        color: "#292929A6",
                        "@media (max-width: 1024px)": {
                          fontSize: "10px !important",
                        },
                      }}
                    >
                      {t("from")}
                    </Typography>
                    <Typography
                      sx={{
                        fontSize: "20px !important",
                        fontWeight:500,
                        "@media (max-width: 1024px)": {
                          fontSize: "16px !important",
                        },
                      }}
                    >
                      {packagesAll?.standard[0]?.price}
                    </Typography>
                  </Box>
                </Box>
                <Box
                  sx={{
                    display: "flex",
                    gap: "8px",
                    justifyContent: "space-between",
                    alignItems: "center",
                    margin:"10px 0px"
                  }}
                >
                  <Typography
                    sx={{
                      fontSize: "14px !important",
                      color: "#292929A6",
                      "@media (max-width: 1024px)": {
                        fontSize: "12px !important",
                      },
                    }}
                  >
                    {t("packageNames.1")}
                  </Typography>
                  <Box
                    sx={{ display: "flex", gap: "6px", alignItems: "center" }}
                  >
                    <Typography
                      sx={{
                        fontSize: "12px !important",
                        color: "#292929A6",
                        "@media (max-width: 1024px)": {
                          fontSize: "10px !important",
                        },
                      }}
                    >
                     {t("from")}
                    </Typography>
                    <Typography
                      sx={{
                        fontSize: "20px !important",
                         fontWeight:500,
                        "@media (max-width: 1024px)": {
                          fontSize: "16px !important",
                        },
                      }}
                    >
                      {packagesAll?.standard[1]?.price}
                    </Typography>
                  </Box>
                </Box>
                 <Box
                  sx={{
                    display: "flex",
                    gap: "8px",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                >
                  <Typography
                    sx={{
                      fontSize: "14px !important",
                      color: "#292929A6",
                      "@media (max-width: 1024px)": {
                        fontSize: "12px !important",
                      },
                    }}
                  >
                    {t("packageNames.2")}
                  </Typography>
                  <Box
                    sx={{ display: "flex", gap: "6px", alignItems: "center" }}
                  >
                    <Typography
                      sx={{
                        fontSize: "12px !important",
                        color: "#292929A6",
                        "@media (max-width: 1024px)": {
                          fontSize: "10px !important",
                        },
                      }}
                    >
                     {t("from")}
                    </Typography>
                    <Typography
                      sx={{
                        fontSize: "20px !important",
                         fontWeight:500,
                        "@media (max-width: 1024px)": {
                          fontSize: "16px !important",
                        },
                      }}
                    >

                      {packagesAll?.standard[2]?.price}
                    </Typography>
                  </Box>
                </Box>
              </div>
            </div>
          </AutoTab>

          {/* ---------- DELUXE ---------- */}
          <AutoTab
              className={hasClickedTab && selectedTab === "Deluxe" ? "selected" : ""}
            onClick={() => handleTabChange("Deluxe")}
            sx={{
              flex: "1 1 30%",
              maxWidth: "calc(33% - 16px)",
              "@media (max-width: 800px)": {
                maxWidth: "calc(90% - 16px)",
              },
            }}
          >
            <div
              className="tab__side tab__side--front"
              style={{
                position: "relative",
                height: "40rem",
              }}
            >
              <Box
                sx={{
                  position: "absolute",
                  top: "8%",
                  left: "-30%",
                  width: "120%",
                  height: "60px",
                  backgroundColor: "#2998ff",
                  transform: "rotate(-40deg)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  zIndex: 1,
                }}
              >
                <Typography
                  sx={{
                    color: "white",
                    fontWeight: 300,
                    transform: "rotate(-1deg)",
                    fontSize: "1.6rem !important",
                  }}
                >
                  {t("choice")}
                </Typography>
              </Box>
              <div
                className="tab__picture tab__picture--2"
                style={{
                  marginTop: "-60px",
                  marginBottom: "60px",
                  backgroundImage: `url("/autocare-card2.png")`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              >
                <Box
                  sx={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    backgroundColor: "#2998ff",
                    opacity: 0.4,
                    pointerEvents: "none",
                  }}
                />
              </div>
              <Typography
                className="heading"
                sx={{
                  marginTop: "1rem",
                  fontSize: "20px",
                  fontWeight: 600,
                  textAlign: "center",
                }}
              >
                <span className="heading--span heading--span-2">Deluxe</span>
              </Typography>

              {/* fromPrice, fromDuration for Deluxe */}
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  marginTop: "1rem",
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    width: "80%",
                    marginBottom: "0.5rem",
                  }}
                >
                  <Typography sx={{ fontWeight: "300" }}>{t("from")}:</Typography>
                  <Typography sx={{ fontWeight: "500", color: "#2998ff" }}>
                    {packages?.packages?.deluxe[0]?.price}
                  </Typography>
                </Box>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    width: "80%",
                  }}
                >
                  <Typography sx={{ fontWeight: "300" }}>{t("duration")}:</Typography>
                  <Typography sx={{ fontWeight: "300" }}>
                    {packages?.packages?.deluxe[0]?.totalDuration}
                  </Typography>
                </Box>
              </Box>
            </div>
            <div className="tab__side tab__side--back tab__side--back-2">
              <div className="tab__cta">
                <Typography className="tab__value">Deluxe</Typography>
                <Box
                  sx={{
                    display: "flex",
                    gap: "8px",
                    justifyContent: "space-between",
                    alignItems: "center",
                    marginTop:"160x"
                  }}
                >
                  <Typography
                    sx={{
                      fontSize: "14px !important",
                      color: "#292929A6",
                      "@media (max-width: 1024px)": {
                        fontSize: "12px !important",
                      },
                    }}
                  >
                    {t("packageNames.0")}
                  </Typography>
                  <Box
                    sx={{ display: "flex", gap: "6px", alignItems: "center", margin:"10px 0px"}}
                  >
                    <Typography
                      sx={{
                        fontSize: "12px !important",
                        color: "#292929A6",
                        "@media (max-width: 1024px)": {
                          fontSize: "10px !important",
                        },
                      }}
                    >
                     {t("from")}
                    </Typography>
                    <Typography
                      sx={{
                        fontSize: "20px !important",
                         fontWeight:500,
                        "@media (max-width: 1024px)": {
                          fontSize: "16px !important",
                        },
                      }}
                    >
                      {packagesAll?.deluxe[0]?.price}
                    </Typography>
                  </Box>
                </Box>
                <Box
                  sx={{
                    display: "flex",
                    gap: "8px",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                >
                  <Typography
                    sx={{
                      fontSize: "16px !important",
                      color: "#292929A6",
                      "@media (max-width: 1024px)": {
                        fontSize: "12px !important",
                      },
                    }}
                  >
                    {t("packageNames.1")}
                  </Typography>
                  <Box
                    sx={{ display: "flex", gap: "6px", alignItems: "center" }}
                  >
                    <Typography
                      sx={{
                        fontSize: "12px !important",
                        color: "#292929A6",
                        "@media (max-width: 1024px)": {
                          fontSize: "10px !important",
                        },
                      }}
                    >
                      {t("from")}
                    </Typography>
                    <Typography
                      sx={{
                        fontSize: "20px !important",
                         fontWeight:500,
                        "@media (max-width: 1024px)": {
                          fontSize: "16px !important",
                        },
                      }}
                    >
                      {packagesAll?.deluxe[1]?.price}
                    </Typography>
                  </Box>
                </Box>
                <Box
                  sx={{
                    display: "flex",
                    gap: "8px",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                >
                  <Typography
                    sx={{
                      fontSize: "14px !important",
                      color: "#292929A6",
                      "@media (max-width: 1024px)": {
                        fontSize: "12px !important",
                      },
                    }}
                  >
                    {t("packageNames.2")}
                  </Typography>
                  <Box
                    sx={{ display: "flex", gap: "6px", alignItems: "center" }}
                  >
                    <Typography
                      sx={{
                        fontSize: "12px !important",
                        color: "#292929A6",
                        "@media (max-width: 1024px)": {
                          fontSize: "10px !important",
                        },
                      }}

                    >
                      {t("from")}
                    </Typography>
                    <Typography
                      sx={{
                        fontSize: "20px !important",
                         fontWeight:500,
                        "@media (max-width: 1024px)": {
                          fontSize: "16px !important",
                        },
                      }}
                    >

                      {packagesAll?.deluxe[2]?.price}
                    </Typography>
                  </Box>
                </Box>
              </div>
            </div>
          </AutoTab>

          {/* ---------- PREMIUM ---------- */}
          <AutoTab
              className={hasClickedTab && selectedTab === "Premium" ? "selected" : ""}
            onClick={() => handleTabChange("Premium")}
            sx={{
              flex: "1 1 30%",
              maxWidth: "calc(33% - 16px)",
              "@media (max-width: 800px)": {
                maxWidth: "calc(90% - 16px)",
              },
            }}
          >
            <div
              className="tab__side tab__side--front"
              style={{
                position: "relative",
                height: "40rem",
              }}
            >
              <Box
                sx={{
                  position: "absolute",
                  top: "8%",
                  left: "-32%",
                  width: "120%",
                  height: "60px",
                  backgroundColor: "#EED502",
                  transform: "rotate(-40deg)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  zIndex: 1,
                }}
              >
                <Typography
                  sx={{
                    color: "white",
                    fontWeight: 300,
                    transform: "rotate(-1deg)",
                    fontSize: "18px",
                  }}
                >
                  Bespoke
                </Typography>
              </Box>
              <div
                className="tab__picture tab__picture--3"
                style={{
                  marginTop: "-60px",
                  marginBottom: "60px",
                  backgroundImage: `url("/autocare-card3.png")`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              >
                <Box
                  sx={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    backgroundColor: "#EED502",
                    opacity: 0.4,
                    pointerEvents: "none",
                  }}
                />
              </div>
              <Typography
                className="heading"
                sx={{
                  marginTop: "1rem",
                  fontSize: "1.5rem",
                  fontWeight: "bold",
                  textAlign: "center",
                }}
              >
                <span className="heading--span heading--span-3">{t("premiumHeading")}</span>

              </Typography>

              {/* fromPrice, fromDuration for Premium */}
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  marginTop: "1rem",
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    width: "80%",
                    marginBottom: "0.5rem",
                  }}
                >
                  <Typography sx={{ fontWeight: "300" }}>{t("from")}:</Typography>
                  <Typography sx={{ fontWeight: "500", color: "#ff7730" }}>
                    {packages?.packages?.premium[0]?.price}
                  </Typography>
                </Box>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    width: "80%",
                  }}
                >
                  <Typography sx={{ fontWeight: "300" }}>{t("duration")}:</Typography>
                  <Typography sx={{ fontWeight: "300" }}>
                    {packages?.packages?.premium[0]?.totalDuration}
                  </Typography>
                </Box>
              </Box>
            </div>
            <div className="tab__side tab__side--back tab__side--back-3">
              <div className="tab__cta">

                <Typography className="tab__value">{t("premiumHeading")}</Typography>

                <Box
                  sx={{
                    display: "flex",
                    gap: "8px",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                >
                  <Typography
                    sx={{
                      fontSize: "14px !important",
                      color: "#292929A6",
                      "@media (max-width: 1024px)": {
                        fontSize: "11px !important",
                      },
                    }}
                  >

                    {t("showroom")}

                  </Typography>
                  <Box
                    sx={{ display: "flex", gap: "6px", alignItems: "center" }}
                  >
                    <Typography
                      sx={{
                        fontSize: "12px !important",
                        color: "#292929A6",
                        "@media (max-width: 1024px)": {
                          fontSize: "10px !important",
                        },
                      }}

                    >
                      {t("from")}
                    </Typography>
                    <Typography
                      sx={{
                        fontSize: "20px !important",
                         fontWeight:500,
                        "@media (max-width: 1024px)": {
                          fontSize: "16px !important",
                        },
                      }}
                    >
                      {packagesAll?.premium[0]?.price}
                    </Typography>
                  </Box>
                </Box>
              </div>
            </div>
          </AutoTab>
        </AutoTabContainer>
      </HomePkgsBox>

      {/* ------------------ SECOND ROW: MAIN PACKAGES ------------------ */}
      <HomePkgsBox
        sx={{
          "@media (max-width: 1200px)": {
            flexDirection: "column",
            alignItems: "center",
          },
        }}
      >
        <HomePkgsInBox
          sx={{
            justifyContent: "center",
            position: "relative",
            "@media (max-width: 1200px)": {
              flexDirection: "column",
              alignItems: "center",
            },
            zIndex: 10,
          }}
          ref={sectionRef}
        >
          <CardContainer
            ref={containerRef}
            sx={{
              gap: "2rem",
              flexWrap: "wrap",
              opacity: mainCardsVisible ? 1 : 0,
              transform: mainCardsVisible
                ? "translateY(0)"
                : "translateY(100px)",
              transition:
                "opacity 0.5s ease-in-out, transform 0.5s ease-in-out",
            }}
          >
            {allPackages?.map((pkg, index) => (
              <Card key={pkg?.id || index} color={color}>
                <div className="style style--1" />
                <CardHeader color={color}>
                  <Typography className="heading">{pkg?.name}</Typography>
                </CardHeader>
                <CardInfo color={color} sx={{ flexDirection: "column" }}>
                  <Typography
                    sx={{
                      fontSize: "14px !important",
                      color: theme.palette.mode === "dark" ? "white" : "",
                      marginBottom: "0.1rem",
                      fontWeight: 300,
                    }}
                  >
                    {pkg?.description[locale]}
                  </Typography>

                  <Typography
                    className="price"
                    sx={{
                      color: color,
                      fontSize: "2rem",
                      display: "inline-flex",
                      alignItems: "center",
                    }}
                  >
                    <span
                      style={{
                        fontSize: "inherit",
                        verticalAlign: "baseline",
                        paddingRight: "1rem",
                      }}
                    >
                      €
                    </span>
                    {pkg?.price?.replace("€", "")}
                  </Typography>
                </CardInfo>

                {/* The bullet points for the package */}
                <CardDetails>
                  {(pkg?.packages || []).map((point, idx) => (
                    <ListItem
                      key={idx}
                      sx={{
                        alignItems: "flex-start",
                        display: "flex",
                      }}
                    >

                      <FontAwesomeIcon
                        icon={faCheckCircle}
                        style={{
                          color: color,
                          transform: "translateY(2px)",
                          marginRight: "1rem",
                          marginTop: "0.25rem",
                        }}
                      />
                      {point[locale]}
                    </ListItem>
                  ))}
                </CardDetails>

                <Box
                  sx={{
                    marginTop: "auto",
                    display: "flex",
                    gap: "8px",
                  }}
                >
                  {/* <Link href="/booking"> */}
                  <CardButton
                    onClick={() => (window.location.href = "/booking")}
                    sx={{
                      backgroundColor: "#1C79CC",
                      color: "white",
                      justifyContent: "center",
                      "&:hover": {
                        color: "black",
                        backgroundColor: "#2998ff",
                      },
                    }}
                  >
                    {t("button")}
                  </CardButton>
                  {/* </Link>  */}
                  <CardButton
                    onClick={() => handleSubCatChange(pkg?.name)}

                    sx={{
                      backgroundColor: subCat === pkg?.name ? color : "",
                      color: "black !important",
                      justifyContent: "center",

                      cursor: "pointer",
                      pointerEvents: "pointer",
                      "&:hover": {
                        backgroundColor: `${color} !important`,

                        color: "primary.main !important",
                      },
                    }}
                  >
                    Add Ons
                  </CardButton>
                </Box>
              </Card>
            ))}
          </CardContainer>
        </HomePkgsInBox>
      </HomePkgsBox>

            {/* ------------------ THIRD ROW: ADD-ONS (EXTERIOR, INTERIOR, DETAILING) ------------------ */}
            <HomePkgsBox
                sx={{
                    padding: "15rem 5rem 5rem",
                    flexDirection: "column",
                    "@media (max-width: 600px)": {
                        padding: "2rem",
                    },
                }}
                ref={subSectionRef}
            >
                <HomePkgsInBox
                    sx={{
                        justifyContent: "center",
                        alignSelf: "center",
                        "@media (max-width: 600px)": { flexDirection: "column" },
                    }}
                >
                    <CardContainer
                        ref={addonsContainerRef}
                        sx={{
                            gap: "2rem",
                            opacity: subCat && addonsVisible ? 1 : 0,
                            transform: addonsVisible ? "translateY(0)" : "translateY(100px)",
                            transition:
                                "opacity 0.5s ease-in-out, transform 0.5s ease-in-out",
                            flexWrap: "wrap",
                            marginBottom: "10rem",
                            "@media (max-width: 900px)": {
                                flexDirection: "column",
                                alignItems: "center",
                            },
                        }}
                    >
                        {(() => {
                            const chosenPackage = allPackages.find((p) => p.name === subCat);
                            if (!chosenPackage) return null;

              const { additionalOptions } = chosenPackage;
              if (!additionalOptions) return null;

              return (
                <>
                  <ModdedCard
                    card={{
                      name: selectedTab,

                      type: t("packageNames.0"),

                      options: additionalOptions.exterior || [],
                    }}
                    color={color}
                  />
                  <ModdedCard
                    card={{
                      name: selectedTab,

                      type: t("packageNames.1"),

                      options: additionalOptions.interior || [],
                    }}
                    color={color}
                  />
                  <ModdedCard
                    card={{
                      name: selectedTab,

                      type: t("detailing"),

                      options: additionalOptions.detailing || [],
                    }}
                    color={color}
                  />
                </>
              );
            })()}
          </CardContainer>
        </HomePkgsInBox>
      </HomePkgsBox>
    </Box>
  );
};

export default AutoCare;