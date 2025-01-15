"use client";
import React, { useRef, useEffect, useState } from "react";
import { Box, Button, Link, List, ListItem, ListItemText, Typography } from "@mui/material";
import Image from "next/image";
import { useTheme } from "../../../contexts/themeContext";
import HeadingLinesAnimation from "../HeadingLinesAnimation/HeadingLinesAnimation";
import { HomePkgsInBox } from "../../mui/HomePkgs";
import { DecorativeBackgroundImage } from "../../Decorative/Decorative.style";

export default function About() {
  const sectionRef = useRef(null);
  const { theme } = useTheme();
  const [hasAnimated, setHasAnimated] = useState(false);

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
              margin: "0",
              "@media (max-width: 900px)": {
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
              src="/g1.jpg"
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
            }}
          >
            <Box
              sx={{
                width: "100%",
                margin: "0 auto",
                marginRight: "45%",
                marginLeft: "5rem",
                "@media (max-width: 900px)": {
                  marginRight: "2rem",
                  marginLeft: "2rem",
                },
              }}
            >
              <Box
                sx={{
                  textAlign: "left",
                  "@media (max-width: 900px)": {
                    textAlign: "center",
                  },
                }}
              >
                <HeadingLinesAnimation />
              </Box>

              <Typography
                sx={{
                  color: theme.palette.text.secondary,
                  fontSize: "1.55rem",
                  lineHeight: 1.7,
                  "@media (max-width: 900px)": {
                    textAlign: "center",
                  },
                  "@media (max-width: 600px)": {
                    fontSize: "1rem",
                    textAlign: "center",
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
                  "@media (max-width: 600px)": {
                    fontSize: "1rem",
                  },
                }}
              >
                Why Choose Fast Clean Service?
              </Typography>

              <List
                sx={{
                  paddingLeft: { sm: 2, xs: 0 },
                  color: theme.palette.text.secondary,
                  listStyleType: "disc",
                }}
              >
                <ListItem sx={{ display: "list-item", py: '0px', }}>
                  <ListItemText primary="Convenience: Cleaning on location or at our branch." />
                </ListItem>
                <ListItem sx={{ display: "list-item", py: '0px' }}>
                  <ListItemText primary="Eco-Friendly: Safe, durable steam cleaning techniques." />
                </ListItem>
                <ListItem sx={{ display: "list-item", py: '0px' }}>
                  <ListItemText primary="Quality Guaranteed: Exceptional results every time." />
                </ListItem>
              </List>
              <Typography
                variant="h6"
                sx={{
                  color: theme.palette.text.primary,
                  fontWeight: 500,
                  marginTop: "1rem",
                  textAlign: "left",
                  fontSize: "1.55rem",
                  "@media (max-width: 600px)": {
                    fontSize: "1rem",
                  },
                }}
              >
                Book online or request a free quote today!
              </Typography>
              <Link href="#" passHref>
                <Button
                    variant="contained"
                    sx={{
                        marginTop:"1rem",
                        padding: "1.5rem 3rem",
                        fontSize: "1.5rem",
                        fontWeight: 500,
                        backgroundColor: "primary.accentDark",
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
          </HomePkgsInBox>
        </Box>
        <Box
          sx={{
            position: "absolute",
            left: "60%",
            height: "auto",
            marginTop: "15rem",
            "@media (max-width: 900px)": {
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
