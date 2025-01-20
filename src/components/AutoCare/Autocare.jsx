"use client";
import React, { useEffect, useRef, useState } from "react";
import { useTheme } from "../../contexts/themeContext";
import { HomePkgsBox, HomePkgsInBox } from "../../components/mui/HomePkgs";
import {
    AutoTab,
    AutoTabContainer,
    AutoTabList,
    Card,
    CardButton,
    CardContainer,
    CardDetails,
    CardHeader,
    CardInfo,
} from "../../components/mui/AutoCarePkgs";
import { Box, ListItem, Typography } from "@mui/material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle, faClose } from "@fortawesome/free-solid-svg-icons";
import { cleanPkgs } from "../../lib/data/Autocare";
import {ServiceHeading} from "../Home/ServicesOverview/ServiceColumnGroup";
import RadialCircle from "../Decorative/RadialCircle";
import {DecorativeBackgroundImage} from "../Decorative/Decorative.style";
import FleetCare from "./FleetCare"

const ModdedCard = ({ card, color }) => {
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
                {card?.options?.map((option, index) => {
                    return (
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
                                    display: "flex",
                                    justifyContent: "center",
                                }}
                            />
                            <Box
                                sx={{
                                    width: "100%",
                                    display: "flex",
                                    justifyContent: "space-between",
                                }}
                            >
                                <Typography>{option.name}</Typography>
                                <Typography>{option.price}</Typography>
                            </Box>
                        </ListItem>
                    );
                })}
            </CardDetails>
        </Card>
    );
};

const AutoCare = () => {
    const { theme } = useTheme();
    const [selectedTab, setSelectedTab] = useState("Standard");
    const [subCat, setSubCat] = useState("");
    const [mainCardsVisible, setMainCardsVisible] = useState(false);
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
        const observerCallback = (entries) => {
            entries.forEach((entry) => {
                if (entry.target === containerRef.current) {
                    if (entry.isIntersecting) {
                        setMainCardsVisible(true);
                    } else {
                        setMainCardsVisible(false);
                    }
                } else if (entry.target === addonsContainerRef.current) {
                    if (entry.isIntersecting) {
                        setAddonsVisible(true);
                    } else {
                        setAddonsVisible(false);
                    }
                }
            });
        };

        const observer = new IntersectionObserver(observerCallback, {
            threshold: 0.5,
        });

        if (containerRef.current) {
            observer.observe(containerRef.current);
        }

        if (addonsContainerRef.current) {
            observer.observe(addonsContainerRef.current);
        }

        return () => {
            observer.disconnect();
        };
    }, []);

    const handleTabChange = (tab) => {
        setSelectedTab(tab);
        setSubCat("");
        const height = headerRef.current.clientHeight - 100;
        setTimeout(() => {
            window.scrollBy({
                top: height,
                behavior: "smooth",
            });
        }, 800);
    };

    const handleSubCatChange = (subCat) => {
        setSubCat(subCat);
        if (subSectionRef.current) {
            subSectionRef.current.scrollIntoView({
                behavior: "smooth",
                block: "start",
            });
        }
    };

    return (
        <Box
            sx={{
                position: "relative",
                backgroundColor: "primary.main",
                //backgroundImage:
                //    theme.palette.mode === "light"
                //        ? "url(/bg3.jpg)"
                //        : "url(/bg-dark2.jpg)",
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
                        //background: "linear-gradient(to bottom, #141414 1%,rgba(0,0,0,0.7), #141414 99%)",
                        zIndex: 0,
                    }}
                />
            )}
            {/* <ServiceHeading sx={{ fontSize: "3.5rem",fontWeight:600, marginTop: "15rem" }}>
            FleetCare
            </ServiceHeading> */}
            <FleetCare/>
            <ServiceHeading sx={{ fontSize: "5.6rem", marginTop: "15rem" }}>
                Anywhere Auto Care
            </ServiceHeading>
            <DecorativeBackgroundImage top={"50%"} right={"0"} width="90rem" height="65rem" sx={{ zIndex: "1" }} />
            <RadialCircle top={"20rem"} right={"20rem"} sx={{ width: "10rem !important", height: "10rem !important", zIndex: "1" }} />
            <RadialCircle top={"90%"} left={"20rem"} sx={{ width: "10rem !important", height: "10rem !important", zIndex: "1" }} />
            <HomePkgsBox
                ref={headerRef}
                sx={{
                    position: "relative",
                    padding: "5rem 5rem 5rem",
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
                    <AutoTab
                        className={selectedTab === "Standard" ? "selected" : ""}
                        onClick={() => handleTabChange("Standard")}
                        sx={{
                            flex: "1 1 30%",
                            maxWidth: "calc(33% - 16px)",
                            "@media (max-width: 800px)": {
                                maxWidth: "calc(90% - 16px)",
                            },
                        }}
                    >
                        <div className="tab__side tab__side--front" style={{ position: "relative", height: "40rem" }}>
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
                                    Economy
                                </Typography>
                            </Box>

                            {/* Image or Background */}
                            <div className="tab__picture tab__picture--1" style={{ marginTop: "-60px", marginBottom: "60px" }}></div>

                            {/* Package Type Heading */}
                            <Typography
                                className="heading"
                                sx={{
                                    marginTop: "1rem",
                                    fontSize: "1.5rem",
                                    fontWeight: "bold",
                                    textAlign: "center",
                                }}
                            >
                                <span className="heading--span heading--span-1">Standard</span>
                            </Typography>

                            {/* Price and Duration */}
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
                                    <Typography sx={{ fontWeight: "300" }}>From:</Typography>
                                    <Typography sx={{ fontWeight: "500", color: "#7ed56f" }}>
                                         €74.95
                                    </Typography>
                                </Box>
                                <Box
                                    sx={{
                                        display: "flex",
                                        justifyContent: "space-between",
                                        width: "80%",
                                    }}
                                >
                                    <Typography sx={{ fontWeight: "300" }}>Duration:</Typography>
                                    <Typography sx={{ fontWeight: "300" }}>45 min.</Typography>
                                </Box>
                            </Box>
                        </div>
                        <div className="tab__side tab__side--back tab__side--back-1">
                            <div className="tab__cta">
                                <Typography className="tab__value">Standard</Typography>
                            </div>
                        </div>
                    </AutoTab>
                    <AutoTab
                        className={selectedTab === "Deluxe" ? "selected" : ""}
                        onClick={() => handleTabChange("Deluxe")}
                        sx={{
                            flex: "1 1 30%",
                            maxWidth: "calc(33% - 16px)",
                            "@media (max-width: 800px)": {
                                maxWidth: "calc(90% - 16px)",
                            },
                        }}
                    >
                        {/* Front Side */}
                        <div className="tab__side tab__side--front" style={{ position: "relative" }}>
                            {/* Slanted Banner with Tagline */}
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
                                    Peoples Choice
                                </Typography>
                            </Box>

                            {/* Image or Background */}
                            <div className="tab__picture tab__picture--2" style={{ marginTop: "-60px", marginBottom: "60px" }}></div>

                            {/* Package Type Heading */}
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

                            {/* Price and Duration */}
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
                                    <Typography sx={{ fontWeight: "300" }}>From:</Typography>
                                    <Typography sx={{ fontWeight: "500", color: "#2998ff" }}>
                                         €89.98
                                    </Typography>
                                </Box>
                                <Box
                                    sx={{
                                        display: "flex",
                                        justifyContent: "space-between",
                                        width: "80%",
                                    }}
                                >
                                    <Typography sx={{ fontWeight: "300" }}>Duration:</Typography>
                                    <Typography sx={{ fontWeight: "300" }}>60 min.</Typography>
                                </Box>
                            </Box>
                        </div>
                        <div className="tab__side tab__side--back tab__side--back-2">
                            <div className="tab__cta">
                                <Typography className="tab__value">Deluxe</Typography>
                            </div>
                        </div>
                    </AutoTab>

                    <AutoTab
                        className={selectedTab === "Premium" ? "selected" : ""}
                        onClick={() => handleTabChange("Premium")}
                        sx={{
                            flex: "1 1 30%",
                            maxWidth: "calc(33% - 16px)",
                            "@media (max-width: 800px)": {
                                maxWidth: "calc(90% - 16px)",
                            },
                        }}
                    >
                        {/* Front Side */}
                        <div className="tab__side tab__side--front" style={{ position: "relative" }}>
                            {/* Slanted Banner with Tagline */}
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

                            {/* Image or Background */}
                            <div className="tab__picture tab__picture--3" style={{ marginTop: "-60px", marginBottom: "60px" }}></div>

                            <Typography
                                className="heading"
                                sx={{
                                    marginTop: "1rem",
                                    fontSize: "1.5rem",
                                    fontWeight: "bold",
                                    textAlign: "center",
                                }}
                            >
                                <span className="heading--span heading--span-3">Premium</span>
                            </Typography>

                            {/* Price and Duration */}
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
                                    <Typography sx={{ fontWeight: "300" }}>From:</Typography>
                                    <Typography sx={{ fontWeight: "500", color: "#ff7730" }}>
                                         €180
                                    </Typography>
                                </Box>
                                <Box
                                    sx={{
                                        display: "flex",
                                        justifyContent: "space-between",
                                        width: "80%",
                                    }}
                                >
                                    <Typography sx={{ fontWeight: "300" }}>Duration:</Typography>
                                    <Typography sx={{ fontWeight: "300" }}>180 min.</Typography>
                                </Box>
                            </Box>
                        </div>

                        <div className="tab__side tab__side--back tab__side--back-3">
                            <div className="tab__cta">
                                <Typography className="tab__value">Premium</Typography>
                            </div>
                        </div>
                    </AutoTab>

                </AutoTabContainer>
            </HomePkgsBox>
            <HomePkgsBox sx={{ "@media (max-width: 1200px)": {flexDirection: "column", alignItems: "center",}}}>
                <HomePkgsInBox
                    sx={{ justifyContent: "center", position: "relative", "@media (max-width: 1200px)": {flexDirection: "column", alignItems: "center",}, zIndex:10 }}
                    ref={sectionRef}
                >
                    <CardContainer
                        ref={containerRef}
                        sx={{
                            gap: "2rem",
                            flexWrap: "wrap",
                            opacity: mainCardsVisible ? 1 : 0,
                            transform: mainCardsVisible ? "translateY(0)" : "translateY(100px)",
                            transition: "opacity 0.5s ease-in-out, transform 0.5s ease-in-out",
                        }}
                    >
                        {cleanPkgs[selectedTab]?.types.map((pkg) => {
                            return (
                                <Card key={pkg?.type} color={color}>
                                    <div className="style style--1" />
                                    <CardHeader color={color}>
                                        <Typography className="heading">{pkg?.type}</Typography>
                                    </CardHeader>
                                    <CardInfo color={color} sx={{ flexDirection: "column" }}>
                                        <Typography
                                            sx={{
                                                fontSize: "14px !important",
                                                color: "black",
                                                marginBottom: "0.1rem",
                                                fontWeight:300
                                            }}
                                        >
                                            {pkg.description}
                                        </Typography>
                                        <Typography
                                            className="price"
                                            sx={{ color: color, fontSize: "2rem", display: "inline-flex", alignItems: "center" }}
                                        >
                                            <span style={{ fontSize: "inherit", verticalAlign: "baseline", paddingRight: "1rem" }}>€</span>
                                            {pkg.price.one}
                                        </Typography>
                                    </CardInfo>
                                    <CardDetails>
                                        {pkg?.pros.map((pro, index) => {
                                            return (
                                                <ListItem key={index} sx={{ alignItems: "flex-start", display: "flex" }}>
                                                    <FontAwesomeIcon
                                                        icon={faCheckCircle}
                                                        style={{
                                                            color: color,
                                                            transform: "translateY(2px)",
                                                            marginRight: "1rem",
                                                            marginTop: "0.25rem",
                                                        }}
                                                    />
                                                    {pro}
                                                </ListItem>
                                            );
                                        })}
                                    </CardDetails>
                                    <Box sx={{marginTop: "auto",display:"flex",gap:"8px"}}>
                                    <CardButton
                                        onClick={() => handleSubCatChange(pkg?.type)}
                                        sx={{
                                            backgroundColor: "#1C79CC",
                                            color: "white",
                                            justifyContent: "center",
                                            "&:hover": {
                                                color: "black",
                                                backgroundColor:"#2998ff",
                                            },
                                        }}
                                    >
                                       Book Now
                                    </CardButton>
                                    <CardButton
                                        onClick={() => handleSubCatChange(pkg?.type)}
                                        sx={{
                                            backgroundColor: subCat === pkg.type ? color : "",
                                            color: "black !important",
                                            justifyContent: "center",
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
                            );
                        })}
                    </CardContainer>
                </HomePkgsInBox>
            </HomePkgsBox>
            <HomePkgsBox
                sx={{
                    padding: "15rem 5rem 5rem",
                    flexDirection: "column",
                }}
                ref={subSectionRef}
            >
                <HomePkgsInBox
                    sx={{ justifyContent: "center", alignSelf: "center" }}
                >
                    <CardContainer
                        ref={addonsContainerRef}
                        sx={{
                            gap: "2rem",
                            opacity: subCat && addonsVisible ? 1 : 0,
                            transform: addonsVisible ? "translateY(0)" : "translateY(100px)",
                            transition: "opacity 0.5s ease-in-out, transform 0.5s ease-in-out",
                            flexWrap: "wrap",
                            marginBottom: "10rem",
                            "@media (max-width: 900px)": {
                                flexDirection: "column",
                                alignItems: "center",
                            },
                        }}
                    >
                        <ModdedCard
                            card={{
                                name: selectedTab,
                                type: "Exterior",
                                options:
                                    cleanPkgs[selectedTab]?.types.find(
                                        (item) => item.type === subCat
                                    )?.extras?.exterior || null,
                            }}
                            color={color}
                        />
                        <ModdedCard
                            card={{
                                name: selectedTab,
                                type: "Interior",
                                options:
                                    cleanPkgs[selectedTab]?.types.find(
                                        (item) => item.type === subCat
                                    )?.extras?.interior || null,
                            }}
                            color={color}
                        />
                        <ModdedCard
                            card={{
                                name: selectedTab,
                                type: "Detailing",
                                options:
                                    cleanPkgs[selectedTab]?.types.find(
                                        (item) => item.type === subCat
                                    )?.extras?.detailing || null,
                            }}
                            color={color}
                        />
                    </CardContainer>
                </HomePkgsInBox>
            </HomePkgsBox>
        </Box>
    );
};

export default AutoCare;
