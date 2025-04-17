import {
    CarServicesContainer,
    ServiceItemBox,
    ServiceItemContainer,
    ServiceItemDescription,
    ServiceItemHeading,
    ServiceItemIcon,
    ServiceItemIconContainer,
} from "./ServiceOverviewPckgs";

import PaintRoll from "../../../../public/ser3.svg";
import PaintRollWhite from "../../../../public/ser3.svg";
import TickBox from "../../../../public/ser1.svg";
import TickBoxWhite from "../../../../public/ser1.svg";
import Shield from "../../../../public/ser2.svg";
import ShieldWhite from "../../../../public/ser2.svg";

import { useTheme } from "../../../contexts/themeContext";
import { Box, Button, Link } from "@mui/material";
import React, { useRef } from "react";
import { useTranslations } from "next-intl";

export default function OverCarServices() {
    const t = useTranslations("home.services_section");
    const { theme } = useTheme();
    const servicesOverviewRef = useRef(null);

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
                        scrollToServices={scrollToServices}
                    />
                ),
            )}
        </CarServicesContainer>
    );
}
function CarServiceItem({
                            icon,
                            title,
                            description,
                            bullets = [],
                            description2,
                            scrollToServices,
                        }) {
    const { theme } = useTheme(); // ← theme available here
    const t = useTranslations("home.services_section");

    return (
        <ServiceItemContainer>
            <ServiceItemBox>
                <ServiceItemIconContainer>
                    <ServiceItemIcon
                        src={icon}
                        alt={title}
                        width={88}
                        height={88}
                        sx={{ "@media (max-width:600px)": { transform: "scale(0.6)" } }}
                    />
                </ServiceItemIconContainer>

                <ServiceItemHeading variant="h4">{title}</ServiceItemHeading>

                <ServiceItemDescription variant="p">{description}</ServiceItemDescription>

                {/* Optional bullets / second paragraph – uncomment if needed */}
                {/* {bullets.length > 0 && … } */}
                {/* {description2 && … } */}

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
                        {/* BOOK NOW */}
                        <Link href="/booking" passHref>
                            <Button
                                variant="contained"
                                sx={{
                                    px: "3rem",
                                    py: "1.5rem",
                                    fontSize: "1.5rem",
                                    fontWeight: 500,
                                    borderRadius: "50px",
                                    backgroundColor: theme.palette.primary.accentDark,
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

                        {/* LEARN MORE */}
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
            </ServiceItemBox>
        </ServiceItemContainer>
    );
}
