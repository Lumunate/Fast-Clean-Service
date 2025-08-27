"use client";
import React from "react";
import {Box, Typography, useMediaQuery} from "@mui/material";
import Form from "./Form";
import {
    GrayBox,
    ImageWrapper,
    Container,
} from "../../../components/mui/ContactPkgs";
import MapComponent from "../../../components/Contact/MapComponent";
import ContactCard from "../../../components/Contact/ContactCard";
import ContactCard2 from "../../../components/Contact/ContactCard2";
import HeadingLinesAnimation from "../../../components/Home/HeadingLinesAnimation/HeadingLinesAnimation";
import { useTheme } from "../../../contexts/themeContext";
import {useTranslations} from "next-intl";

export default function ContactMain() {
    const { theme } = useTheme();
    const t = useTranslations('contact');
    const isScreenSmall = useMediaQuery('(max-width:1368px)');
    const isVerySmallScreen = useMediaQuery('(max-width:992px)');

    const largeScreenLayout = (
        <Container sx={{ paddingLeft: "9rem", paddingRight: "9rem", "@media (max-width: 600px)": { padding: "2rem" }, }}>
            <GrayBox flex={1}>
                <ImageWrapper>
                    <MapComponent />
                </ImageWrapper>
            </GrayBox>

            <GrayBox flex={1}>
                <Box
                    sx={{
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "space-between",
                        height: "100%",
                        padding: "2rem 0",
                    }}
                >
                    <Box sx={{ marginBottom: "2rem", textAlign: "center" }}>
                        <HeadingLinesAnimation text={t("title")} />
                    </Box>

                    <Box sx={{ marginBottom: "2rem", textAlign: "center", display: "flex", flexDirection: "column", alignItems: "center" }}>
                        <Typography
                            sx={{
                                fontSize: "2.2rem",
                                fontWeight: 400,
                                color: theme.palette.mode === "dark" ? "#fff" : "#232E4A",
                                "@media (max-width: 600px)": {
                                    fontSize: "1.6rem",
                                },
                            }}
                        >  {t("subtitle")}
                        </Typography>
                        <Box sx={{ textAlign: "left" }}>
                        <Typography
                            sx={{
                                marginTop: "1.6rem",
                                fontSize: "1.6rem",
                                fontWeight: 300,
                                color: theme.palette.mode === "dark" ? "#fff" : "#232E4A",
                                "@media (max-width: 600px)": {
                                    fontSize: "1.2rem",
                                },
                            }}
                        >  {t("description")}
                        </Typography>
                        </Box>
                    </Box>

                    <Form />

                    <Box
                        sx={{
                            display: "flex",
                            gap: "2rem",
                            marginTop: "2rem",
                            "@media (max-width: 600px)": { padding: "1rem" },
                        }}
                    >
                        <ContactCard
                            sx={{
                                boxShadow:
                                    theme.palette.mode === "light" ? "0px 4px 7px rgba(0, 0, 0, 0.25)" : "0px 4px 7px rgba(0, 0, 0, 0.5)",
                                transition: "box-shadow 0.3s ease",
                                border: "1px solid #8D8D8D69",
                                borderRadius: "1px",
                            }}
                        />
                        <ContactCard2
                            sx={{
                                boxShadow:
                                    theme.palette.mode === "light" ? "0px 4px 7px rgba(0, 0, 0, 0.25)" : "0px 4px 7px rgba(0, 0, 0, 0.5)",
                                transition: "box-shadow 0.3s ease",
                                border: "1px solid #8D8D8D69",
                                borderRadius: "1px",
                            }}
                        />
                    </Box>
                </Box>
            </GrayBox>
        </Container>
    );

    const smallScreenLayout = (
      <Container
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: "2rem",
          padding: "2rem",
          position: "relative",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Box
          sx={{
            flex: 1,
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            gap: "2rem",
            width: "100%",
          }}
        >
          <GrayBox flex={1}>
            <ImageWrapper>
              <MapComponent />
            </ImageWrapper>
          </GrayBox>

          <GrayBox
            flex={1}
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              padding: "1rem",
              position: "relative",
              width: "100%",
              "@media (min-width: 900px)": {
                alignItems: "center",
              },
            }}
          >
            <Box sx={{ marginBottom: "2rem", textAlign: "center" }}>
              <HeadingLinesAnimation text={t("title")} />
            </Box>

            <Box
              sx={{ marginBottom: "2rem", textAlign: "center", display: "flex", flexDirection: "column", alignItems: "center" }}
            >
              <Typography
                sx={{
                  fontSize: "2.2rem",
                  fontWeight: 400,
                  color: theme.palette.mode === "dark" ? "#fff" : "#232E4A",
                  "@media (max-width: 600px)": {
                    fontSize: "1.6rem",
                  },
                }}
              >
                {" "}
                  {t("subtitle")}
              </Typography>
              <Box sx={{ textAlign: "left" }}>
                <Typography
                  sx={{
                    marginTop: "1.6rem",
                    fontSize: "1.6rem",
                    fontWeight: 300,
                    color: theme.palette.mode === "dark" ? "#fff" : "#232E4A",
                    "@media (max-width: 600px)": {
                      fontSize: "1.2rem",
                    },
                  }}
                >
                  {" "}
                    {t("description")}
                </Typography>
              </Box>
            </Box>

            <Form />
          </GrayBox>
        </Box>

        <Box
          sx={{
            flex: 1,
            display: "flex",
            flexDirection: "row",
            gap: "2rem",
            justifyContent: "center",
            marginTop: "0",
            width: "100%",
            padding: "1rem",
            alignItems: "center",
            height: "100%",
          }}
        >
          <ContactCard
            sx={{
              boxShadow: theme.palette.mode === "light" ? "0px 4px 7px rgba(0, 0, 0, 0.25)" : "0px 4px 7px rgba(0, 0, 0, 0.5)",
              transition: "box-shadow 0.3s ease",
            }}
          />
          <ContactCard2
            sx={{
              boxShadow: theme.palette.mode === "light" ? "0px 4px 7px rgba(0, 0, 0, 0.25)" : "0px 4px 7px rgba(0, 0, 0, 0.5)",
              transition: "box-shadow 0.3s ease",
            }}
          />
        </Box>
      </Container>
    );

    const verySmallScreenLayout = (
      <Container
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: "1.5rem",
          padding: "1rem",
          alignItems: "center",
          justifyContent: "center",
          "@media (max-width: 600px)": {
            paddingRight: "1rem",
            paddingLeft: "1rem",
          },
        }}
      >
        <Box sx={{ marginBottom: "1.5rem", textAlign: "center" }}>
          <HeadingLinesAnimation text={t("title")} />
        </Box>

        <Box sx={{ marginBottom: "2rem", textAlign: "center", display: "flex", flexDirection: "column", alignItems: "center" }}>
          <Typography
            sx={{
              fontSize: "2.2rem",
              fontWeight: 400,
              color: theme.palette.mode === "dark" ? "#fff" : "#232E4A",
              "@media (max-width: 600px)": {
                fontSize: "1.6rem",
              },
            }}
          >
            {t("subtitle")}
          </Typography>
          <Box sx={{ textAlign: "left" }}>
            <Typography
              sx={{
                marginTop: "1.6rem",
                fontSize: "1.6rem",
                fontWeight: 300,
                color: theme.palette.mode === "dark" ? "#fff" : "#232E4A",
                "@media (max-width: 992px)" :{
                  padding:"0 20px"
                },
                "@media (max-width: 600px)": {
                  fontSize: "1.2rem",
                  padding:"0px"
                },
              }}
            >
              {t("description")}
            </Typography>
          </Box>
        </Box>

        <GrayBox
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            padding: "1rem",
            width: "100%",
            alignItems: "center",
          }}
        >
          <Form />
        </GrayBox>

        <GrayBox
          sx={{
            display: "flex",
            justifyContent: "space-between",
            padding: "1rem",
            width: "100%",
          }}
        >
          <ImageWrapper>
            <MapComponent />
          </ImageWrapper>
        </GrayBox>

        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: "1.5rem",
            justifyContent: "center",
            width: "100%",
            alignItems: "center",
            padding: "1rem",
          }}
        >
          <ContactCard
            sx={{
              boxShadow: theme.palette.mode === "light" ? "0px 4px 7px rgba(0, 0, 0, 0.25)" : "0px 4px 7px rgba(0, 0, 0, 0.5)",
              transition: "box-shadow 0.3s ease",
            }}
          />
          <ContactCard2
            sx={{
              boxShadow: theme.palette.mode === "light" ? "0px 4px 7px rgba(0, 0, 0, 0.25)" : "0px 4px 7px rgba(0, 0, 0, 0.5)",
              transition: "box-shadow 0.3s ease",
              height: "44.2rem",
            }}
          />
        </Box>
      </Container>
    );

    if (isVerySmallScreen) {
        return verySmallScreenLayout;
    } else if (isScreenSmall) {
        return smallScreenLayout;
    } else {
        return largeScreenLayout;
    }
}
