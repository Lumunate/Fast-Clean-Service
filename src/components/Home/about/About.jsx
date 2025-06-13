"use client";
import React, { useRef, useEffect, useState } from "react";
import {
    Box,
    Button,
    Link,
    List,
    ListItem,
    ListItemText,
    styled,
    Typography,
} from "@mui/material";
import Image from "next/image";
import { useTheme } from "../../../contexts/themeContext";
import ClipBoardPlusIcon from "../../../../public/servicesicons/ClipBoardPlus.svg";
import CarCheckIcon from "../../../../public/servicesicons/CarCheck.svg";
import MapIcon from "../../../../public/servicesicons/Map.svg";
import BestCareHeading from "./BestCareHeading";
import { HomePkgsInBox } from "../../mui/HomePkgs";
import { DecorativeBackgroundImage } from "../../Decorative/Decorative.style";
import { useTranslations } from "next-intl";

export default function About() {
    const sectionRef = useRef(null);
    const { theme } = useTheme();
    const [hasAnimated, setHasAnimated] = useState(false);
    const t = useTranslations("home.about_section");

    const icons = [ MapIcon,ClipBoardPlusIcon , CarCheckIcon ];

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

    const ListItemsText = styled(ListItemText)(({ theme }) => ({
        "& .css-1a7tj5u-MuiTypography-root": {
            fontSize: "16px !important",
            fontWeight: 300,
            "@media (max-width: 600px)": { fontSize: "10px !important" },
        },
    }));

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
                            marginTop: "26px",
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
                                marginLeft: "5rem",
                                marginRight: "52%",
                                "@media (max-width: 1400px)": {
                                    marginLeft: "5rem",
                                    marginRight: "48%",
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
                                <BestCareHeading> {t("title")} </BestCareHeading>
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
                                {t("description")}
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
                                {t("why_choose_us.title")}
                            </Typography>

                            <Box
                                sx={{
                                    display: "flex",
                                    height: "25%",
                                    flexDirection: "row",
                                    justifyContent: { xs: "center", md: "space-between" },
                                    gap: "1rem",
                                    marginTop: "1.5rem",
                                    width: "100%",
                                    "@media (max-width: 1150px)": {
                                        flexDirection: "column",
                                        alignItems: "center",
                                        height: "auto",
                                    },
                                    alignItems: { xs: "center", md: "flex-start" },
                                }}
                            >
                                {[0, 1, 2].map((index) => {
                                    const IconComponent = icons[index];
                                    return (
                                        <Box
                                            key={index}
                                            sx={{
                                                height: "100%",
                                                backgroundColor:
                                                    theme.palette.mode === "dark"
                                                        ? "rgba(255,255,255,0.09)"
                                                        : "#fff",
                                                borderRadius: "10px",
                                                padding: "1.6rem",
                                                flex: "1",
                                                border:
                                                    theme.palette.mode === "dark"
                                                        ? "0.3px solid #FFFFFF1F"
                                                        : "0.3px solid #00000030",
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
                                                <Box
                                                    component="img"
                                                    src={IconComponent.src}
                                                    alt={`icon-${index}`}
                                                    sx={{
                                                        width: 30,
                                                        height: 30,
                                                        mb: 1,
                                                        filter:
                                                            theme.palette.mode === "dark"
                                                                ? "invert(41%) sepia(100%) saturate(493%) hue-rotate(170deg) brightness(92%) contrast(96%)"
                                                                : "invert(55%) sepia(82%) saturate(653%) hue-rotate(176deg) brightness(95%) contrast(101%)",
                                                    }}
                                                />
                                                <Typography
                                                    sx={{
                                                        fontWeight: 400,
                                                        mb: 1,
                                                        fontSize: "1.4rem",
                                                        color:
                                                            theme.palette.mode === "dark"
                                                                ? "#fff"
                                                                : "#232E4A",
                                                        "@media (max-width: 1370px)": {
                                                            fontSize: "1.4rem",
                                                        },
                                                    }}
                                                >
                                                    {t(`why_choose_us.features.${index}.title`)}
                                                </Typography>
                                                {/* <Typography
                                                    variant="body1"
                                                    sx={{
                                                        fontSize: "1.4rem",
                                                        color:
                                                            theme.palette.mode === "dark"
                                                                ? "#C2C2C2"
                                                                : "#535353",
                                                        fontWeight: "300",
                                                        "@media (max-width: 1370px)": {
                                                            fontSize: "1.2rem",
                                                        },
                                                    }}
                                                >
                                                    {t(`why_choose_us.features.${index}.description`)}
                                                </Typography> */}
                                            </Box>
                                        </Box>
                                    );
                                })}
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
                                            {t("cta.text")}
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
                                                    padding: { xs: "1.5rem 2.4rem", sm: "1.5rem 3rem" },
                                                    fontSize: { xs: "1.2rem", sm: "1.5rem" },
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
                                                {t("cta.buttons.book_now")}
                                            </Button>
                                        </Link>
                                        <Link href="/aboutus" passHref>
                                            <Button
                                                variant="contained"
                                                sx={{
                                                    padding: { xs: "1.5rem 2.4rem", sm: "1.5rem 3rem" },
                                                    fontSize: { xs: "1.2rem", sm: "1.5rem" },
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
                                                {t("cta.buttons.learn_more")}
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