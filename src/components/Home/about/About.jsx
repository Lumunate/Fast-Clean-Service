"use client";
import React, { useRef, useEffect, useState } from "react";
import { Box, Button, Link, List, ListItem, ListItemText, styled, Typography } from "@mui/material";
import Image from "next/image";
import { useTheme } from "../../../contexts/themeContext";
import BestCareHeading from "./BestCareHeading";
import { HomePkgsInBox } from "../../mui/HomePkgs";
import { DecorativeBackgroundImage } from "../../Decorative/Decorative.style";

export default function About() {
  const sectionRef = useRef(null);
  const { theme } = useTheme();
  const [hasAnimated, setHasAnimated] = useState(false);

    const [imageSrc, setImageSrc] = useState("/g1.jpg"); // Default image

    useEffect(() => {
        // Switch the top image source below 768px
        const handleResize = () => {
            if (window.innerWidth < 768) {
                setImageSrc("/owner.png");
            } else {
                setImageSrc("/g1.jpg");
            }
        };

        window.addEventListener("resize", handleResize);
        handleResize(); // Initial check
        return () => window.removeEventListener("resize", handleResize);
    }, []);

  const ListItemsText = styled(ListItemText)(({theme})=>({
    "& .css-1a7tj5u-MuiTypography-root":{
      fontSize:"16px !important",
      fontWeight:300,
      "@media (max-width: 600px)": { fontSize: "10px !important", },
    }
  }))

  useEffect(() => {
    const currentSection = sectionRef.current;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          observer.unobserve(currentSection);
        }
      },
      {
        root: null,
        rootMargin: "0px",
        threshold: 0.1,
      }
    );

    if (currentSection) {
      observer.observe(currentSection);
    }

    return () => {
      if (currentSection) {
        observer.unobserve(currentSection);
      }
    };
  }, [hasAnimated]);

  return (
    <Box
      sx={{
        marginTop: "5rem",
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <Box sx={{ width: "100%" }}>
          <Box
            sx={{
              flex: 1,
              position: "relative",
              left: "0",
              width: "49.5rem",
              height: "35.14rem",
              marginTop:"26px",
              "@media (max-width: 768px)": {
                width: "100%",
                height: "auto",
                paddingLeft: "4rem",
                paddingRight: "4rem",
                display: "flex",
                justifyContent: "center",
              },
            }}
          >
            <Image
                src={imageSrc}
              alt="Small car image"
              width={489}
              height={350}
              style={{
                boxShadow: "0px 4px 7px 0 rgba(0, 0, 0, 0.25)",
                borderRadius: "12px",
                objectFit: "cover",
                width: "100%",
                height: "100%",
                maxHeight: "350px",
                maxWidth: "600px",
                "@media (max-width: 1400px)": {
                  maxHeight: "330px",
                },
              }}
            />
          </Box>

          <HomePkgsInBox
            sx={{
              margin: "0 auto",
              marginTop: "6rem",
              marginBottom: "4rem",
              "@media (max-width: 600px)": {
                marginTop: "3rem",
              },
                "@media (max-width: 1400px)": {
                    marginTop: "0",
                    width: "100%",
                },
            }}
          >
            <Box
              sx={{
                width: "100%",
                margin: "0 auto",
                marginRight: "48%",
                marginLeft: "1rem",
                  "@media (max-width: 1400px)": {
                      marginLeft: "5rem",
                  },
                "@media (max-width: 768px)": {
                  marginRight: "2rem",
                  marginLeft: "2rem",
                },
              }}
            >
              <Box
                sx={{
                  textAlign: "left",
                  "@media (max-width: 768px)": {
                    textAlign: "center",
                  },
                }}
              >
                <BestCareHeading> The Best Care for Your Car{" "}
                    <span className="line-break">
                      <br />
                    </span>
                    Wherever You Want! </BestCareHeading>
              </Box>

              <Typography
                sx={{
                  color: theme.palette.text.secondary,
                  fontSize: "1.55rem",
                  lineHeight: 1.7,
                  "@media (max-width: 768px)": {
                    textAlign: "center",
                  },
                  "@media (max-width: 600px)": {
                    fontSize: "12px",
                    textAlign: "left",
                  },
                }}
              >
                At Fast Clean Service, we provide professional steam cleaning
                and car detailing—on location or at our branch. Using
                eco-friendly techniques, we ensure your car is cleaned and
                protected with exceptional attention to detail.
              </Typography>
              <Typography
                variant="h6"
                sx={{
                  color: theme.palette.text.primary,
                  fontWeight: 500,
                  marginTop: 2,
                  textAlign: "left",
                  fontSize: "1.55rem",
                  "@media (max-width: 768px)": {
                    fontSize: "1.4rem",
                      textAlign: "center",
                  },
                }}
              >
                Why Choose Fast Clean Service?
              </Typography>

                <Box
                    sx={{
                        display: "flex",
                        flexDirection: "row",
                        justifyContent: { xs: "center", md: "space-between" },
                        gap: "1rem",
                        marginTop: "1.5rem",
                        width: "100%",
                        "@media (max-width: 1150px)": {
                            flexDirection: "column",
                            alignItems: "center",
                        },
                        alignItems: { xs: "center", md: "flex-start" },

                    }}
                >
                    <Box
                        sx={{
                            flex: 1,
                            backgroundColor: theme.palette.mode === "dark" ? "rgba(255,255,255,0.09)" : "#fff",
                            borderRadius: "10px",
                            padding: "2rem",
                            border: theme.palette.mode === "dark" ? "0.3px solid #FFFFFF1F" : "0.3px solid #00000030",
                            backdropFilter: "blur(14.4px)",
                            textAlign: "center",
                            boxShadow: "0px 4px 7px 0 rgba(0, 0, 0, 0.08)",
                            position: "relative",
                            maxWidth: "450px",
                            "@media (max-width: 1150px)": {
                                width: "100%",
                            },
                        }}
                    >
                        <Box sx={{ position: "relative", zIndex: 1 }}>
                            <Typography sx={{ fontWeight: 400, mb: 1, fontSize: "1.8rem", color: theme.palette.mode === "dark" ? "#fff" : "#232E4A" }}>
                                Convenience
                            </Typography>
                            <Typography variant="body1" sx={{ fontSize: "1.4em", color: theme.palette.mode === "dark" ? "#C2C2C2" : "#535353", fontWeight: "300" }}>
                                Cleaning on location or at our branch.
                            </Typography>
                        </Box>
                    </Box>

                    <Box
                        sx={{
                            flex: 1,
                            backgroundColor: theme.palette.mode === "dark" ? "rgba(255,255,255,0.09)" : "#fff",
                            borderRadius: "10px",
                            padding: "2rem",
                            border: theme.palette.mode === "dark" ? "0.3px solid #FFFFFF1F" : "0.3px solid #00000030",
                            backdropFilter: "blur(14.4px)",
                            textAlign: "center",
                            boxShadow: "0px 4px 7px 0 rgba(0, 0, 0, 0.08)",
                            position: "relative",
                            maxWidth: "450px",
                            "@media (max-width: 1150px)": {
                                width: "100%",
                            },
                        }}
                    >
                        <Box sx={{ position: "relative", zIndex: 1 }}>
                            <Typography sx={{ fontWeight: 400, mb: 1, fontSize: "1.8rem", color: theme.palette.mode === "dark" ? "#fff" : "#232E4A" }}>
                                Eco Friendly
                            </Typography>
                            <Typography variant="body1" sx={{ fontSize: "1.4em", color: theme.palette.mode === "dark" ? "#C2C2C2" : "#535353", fontWeight: "300" }}>
                                Safe, durable steam cleaning techniques.
                            </Typography>
                        </Box>
                    </Box>

                    <Box
                        sx={{
                            flex: 1,
                            backgroundColor: theme.palette.mode === "dark" ? "rgba(255,255,255,0.09)" : "#fff",
                            borderRadius: "10px",
                            padding: "2rem",
                            border: theme.palette.mode === "dark" ? "0.3px solid #FFFFFF1F" : "0.3px solid #00000030",
                            backdropFilter: "blur(14.4px)",
                            textAlign: "center",
                            boxShadow: "0px 4px 7px 0 rgba(0, 0, 0, 0.08)",
                            position: "relative",
                            maxWidth: "450px",
                            "@media (max-width: 1150px)": {
                                width: "100%",
                            },
                        }}
                    >
                        <Box sx={{ position: "relative", zIndex: 1 }}>
                            <Typography sx={{ fontWeight: 400, mb: 1, fontSize: "1.8rem", color: theme.palette.mode === "dark" ? "#fff" : "#232E4A" }}>
                                Excellence
                            </Typography>
                            <Typography variant="body1" sx={{ fontSize: "1.4em", color: theme.palette.mode === "dark" ? "#C2C2C2" : "#535353", fontWeight: "300" }}>
                                Exceptional results every time.
                            </Typography>
                        </Box>
                    </Box>
                </Box>
                <Box
                    sx={{
                        width: "100%",
                        marginTop: "2rem",
                        "@media (max-width: 600px)": {
                            marginTop: "3rem",
                        },
                        "@media (max-width: 1400px)": {
                            marginTop: "2rem",
                        },
                    }}
                >
                    <Box
                        sx={{
                            width: "100%",
                            margin: "0 auto",
                            textAlign: "center", // Ensure center alignment within the parent box
                        }}
                    >
                        {/* Typography */}
                        <Box
                            sx={{
                                marginBottom: "2rem", // Add spacing between the text and buttons
                            }}
                        >
                            <Typography
                                variant="h6"
                                sx={{
                                    color: theme.palette.text.primary,
                                    fontWeight: 500,
                                    fontSize: "1.55rem",
                                    "@media (max-width: 600px)": {
                                        fontSize: "1.4rem",
                                    },
                                }}
                            >
                                Book online or request a free quote today!
                            </Typography>
                        </Box>

                        {/* Buttons */}
                        <Box
                            sx={{
                                display: "flex",
                                justifyContent: "center",
                                gap: "2rem", // Gap between buttons
                                flexWrap: "wrap", // Wrap buttons on smaller screens
                            }}
                        >
                            <Link href="/booking" passHref>
                                <Button
                                    variant="contained"
                                    sx={{
                                        padding: "1.5rem 3rem",
                                        fontSize: "1.5rem",
                                        fontWeight: 500,
                                        borderRadius: "50px",
                                        backgroundColor: "primary.accentDark",
                                        color: "white",
                                        fontFamily: "DMSans",
                                        "&:hover": {
                                            backgroundColor: theme.palette.primary.accent,
                                        },
                                    }}
                                >
                                    Book Now!
                                </Button>
                            </Link>
                            <Link href="/aboutus" passHref>
                                <Button
                                    variant="contained"
                                    sx={{
                                        padding: "1.5rem 3rem",
                                        fontSize: "1.5rem",
                                        fontWeight: 500,
                                        borderRadius: "50px",
                                        backgroundColor: "#B8B8B8",
                                        color: "white",
                                        fontFamily: "DMSans",
                                        "&:hover": {
                                            backgroundColor: theme.palette.primary.accent,
                                        },
                                    }}
                                >
                                    Learn More
                                </Button>
                            </Link>
                        </Box>
                    </Box>
                </Box>
            </Box>
          </HomePkgsInBox>
        </Box>
        <Box
          sx={{
            position: "absolute",
            left: "54%",
            height: "auto",
            marginTop: "15rem",
              "@media (max-width: 1150px)": {
                  marginTop: "38rem",
              },
            "@media (max-width: 768px)": {
              display: "none",
            },
          }}
        >
          <Image
            src="/owner.png"
            alt="Big car image"
            width={976}
            height={702}
            style={{
              boxShadow: "0px 5px 28px 0 rgba(0, 0, 0, 0.25)",
              zIndex: 1,
              borderRadius: "12px",
              objectFit: "cover",
              width: "97.99rem",
              height: "70.48rem",
            }}
          />
        </Box>
      </Box>
      <DecorativeBackgroundImage
        right={"-32rem"}
        width="90rem"
        height="66rem"
      />
    </Box>
  );
}
