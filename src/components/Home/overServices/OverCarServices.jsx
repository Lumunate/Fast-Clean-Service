"use client";
import React, { useRef } from "react";
import { Box, Button, Link, Typography } from "@mui/material";
import { CarServicesContainer, ServiceItemBox, ServiceItemContainer, ServiceItemDescription, ServiceItemHeading, ServiceItemIcon, ServiceItemIconContainer } from "./ServiceOverviewPckgs";
import PaintRoll from "../../../../public/ser3.svg";
import PaintRollWhite from "../../../../public/ser3.svg";
import TickBox from "../../../../public/ser1.svg";
import TickBoxWhite from "../../../../public/ser1.svg";
import Shield from "../../../../public/ser2.svg";
import ShieldWhite from "../../../../public/ser2.svg";
import { useTheme } from "../../../contexts/themeContext";
import { useTranslations } from "next-intl";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";

export default function OverCarServices() {
    const t = useTranslations("home.services_section");
    const { theme } = useTheme();
    const servicesOverviewRef = useRef(null);

    /* --- pulled from i18n JSON above --- */
    const servicesData = [
        {
            img: TickBox,
            imgDark: TickBoxWhite,
            title: t("services.0.title"),
            description: t("services.0.description"),
            bullets: [t("services.0.bullets.0"), t("services.0.bullets.1")],
            description2: t("services.0.description2"),
        },
        {
            img: Shield,
            imgDark: ShieldWhite,
            title: t("services.1.title"),
            description: t("services.1.description"),
            bullets: [t("services.1.bullets.0"), t("services.1.bullets.1")],
            description2: t("services.1.description2"),
        },
        {
            img: PaintRoll,
            imgDark: PaintRollWhite,
            title: t("services.2.title"),
            description: t("services.2.description"),
            bullets: [t("services.2.bullets.0"), t("services.2.bullets.1")],
            description2: t("services.2.description2"),
        },
    ];

    const scrollToServices = () => {
        servicesOverviewRef.current?.scrollIntoView({ behavior: "smooth" });
    };

    return (
        <CarServicesContainer ref={servicesOverviewRef}>
            {servicesData.map(
                ({ img, imgDark, title, description, bullets, description2 }, idx) => (
                    <CarServiceItem
                        key={idx}
                        icon={theme.palette.mode === "dark" ? imgDark : img}
                        title={title}
                        description={description}
                        bullets={bullets}
                        description2={description2}
                    />
                )
            )}

            {/* CTA buttons */}
            <Box
                sx={{
                    width: "100%",
                    mt: { xs: "3rem", sm: "2rem" },
                    textAlign: "center",
                }}
            >
                <Box
                    sx={{
                        display: "flex",
                        justifyContent: "center",
                        gap: "2rem",
                        flexWrap: "wrap",
                    }}
                >
                    <Link href="/booking" passHref>
                        <Button
                            variant="contained"
                            sx={{
                                px: "3rem",
                                py: "1.5rem",
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
                            {t("buttons.book_now")}
                        </Button>
                    </Link>

                    <Button
                        variant="contained"
                        onClick={scrollToServices}
                        sx={{
                            px: "3rem",
                            py: "1.5rem",
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
                        {t("buttons.learn_more")}
                    </Button>
                </Box>
            </Box>
        </CarServicesContainer>
    );
}

const CarServiceItem = ({
                            icon,
                            title,
                            description,
                            bullets = [],
                            description2,
                        }) => (
    <ServiceItemContainer sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
        <ServiceItemBox sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
            <ServiceItemIconContainer sx={{ display: "flex", justifyContent: "center" }}>
                <ServiceItemIcon
                    src={icon}
                    alt={title}
                    width={88}
                    height={88}
                    sx={{ "@media (max-width:600px)": { transform: "scale(0.6)" } }}
                />
            </ServiceItemIconContainer>

            <ServiceItemHeading variant="h4" sx={{ textAlign: "center" }}>
                {title}
            </ServiceItemHeading>

            <ServiceItemDescription variant="p" sx={{ textAlign: "center" }}>
                {description}
            </ServiceItemDescription>

            <Box sx={{ display: "flex", flexDirection: "column", alignItems: "flex-start", width: "100%" }}>
                {bullets.length > 0 && (
                    <Box
                        component="ul"
                        sx={{
                            width: "100%",
                            m: "0.5rem 0",
                            listStyle: "none",
                            textAlign: "left",
                            "@media (max-width: 600px)": {
                                marginLeft: "0",
                            },
                        }}
                    >
                        {bullets.map((b, i) => (
                            <Box
                                component="li"
                                key={i}
                                sx={{
                                    fontFamily: "DMSans",
                                    fontSize: "1.25rem",
                                    mb: "0.25rem",
                                    display: "flex",
                                    alignItems: "center", // Align checkmark with text
                                }}
                            >
                                <FontAwesomeIcon
                                    icon={faCheckCircle}
                                    style={{
                                        color: "#90EE90",
                                        marginRight: "1rem",
                                    }}
                                />
                                {b}
                            </Box>
                        ))}
                    </Box>
                )}

                <ServiceItemDescription variant="p" sx={{ textAlign: "left" }}>
                    {description2}
                </ServiceItemDescription>
            </Box>
        </ServiceItemBox>
    </ServiceItemContainer>
);
