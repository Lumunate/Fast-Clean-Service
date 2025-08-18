'use client';
import {
    CarServicesContainer,
    ServiceItemBox,
    ServiceItemContainer,
    ServiceItemDescription,
    ServiceItemHeading,
    ServiceItemIcon,
    ServiceItemIconContainer,
} from "../../mui/ServiceOverviewPckgs";
import { useTheme } from "../../../contexts/themeContext";
import Coating from "../../../../public/servicesicons/Coating.svg";
import paint from "../../../../public/servicesicons/paint.svg";
import carWash from "../../../../public/servicesicons/carWash.svg";
import UnionIcon from "../../../../public/servicesicons/Union.svg";
import { useLocale, useTranslations } from "next-intl";
import { Button } from "@mui/material";
import React from "react";
import { Link } from "../../../i18n/routing";

export default function CarService() {
    const t = useTranslations('home.packages_section');

    const servicesData = [
        {
            img: carWash,
            title: t("packages.0.title"),
            anchor: "anywhere-auto-care",
            description: t("packages.0.description"),
            path:"/autocare"
        },
        {
            img: UnionIcon,
            title: t("packages.1.title"),
            anchor: "fleet-care-pro",
            description: t("packages.1.description"),
             path:"/fleet"
        },
        {
            img: paint,
            anchor: "subscriptions",
            title: t("packages.2.title"),
            description: t("packages.2.description"),
             path:"/subscribe"
        },
        {
            img: Coating,
            title: t("packages.3.title"),
            anchor: "long-term-vehicle-care",
            description: t("packages.3.description"),
             path:"/other-vehicles"
        },
    ];

    return (
        <CarServicesContainer>
            {servicesData.map(({ img, title, description, anchor, path }, index) => (
                <CarServiceItem
                    key={index}
                    anchor={anchor}
                    icon={img}
                    title={title}
                    description={description}
                    path={path}
                    isSecondBox={index === 1} // Pass a prop to identify the second box
                />
            ))}
        </CarServicesContainer>
    );
}

const CarServiceItem = ({ icon, title, description, anchor, isSecondBox, path }) => {
    const t = useTranslations('home.packages_section');
    const locale = useLocale();
    const { theme } = useTheme();
    const handleClick = () => {
        const element = document.getElementById(anchor);
        if (element) {
            element.scrollIntoView({ behavior: "smooth" });
        }
    };

    // Set bottom spacing based on whether it's the second box or not
    const bottomSpacing = isSecondBox ? "0px" : "20px";

    const maxHeight = locale === 'en' ? '330px' : '350px';

    return (
        <ServiceItemContainer sx={{maxHeight}} 
        // onClick={handleClick}
        >
            <ServiceItemBox sx={{
                display: "flex",
                flexDirection: "column",
                height: "100%",
                justifyContent: "flex-start",
                position: "relative",
                paddingBottom: "80px",
            }}>
                <ServiceItemIconContainer>
                    <ServiceItemIcon
                        src={icon}
                        alt={title}
                        width={65}
                        height={65}
                        sx={{ "@media (max-width: 600px)": { transform: "scale(0.6)" } }}
                    />
                </ServiceItemIconContainer>

                <ServiceItemHeading variant={"h4"}>{title}</ServiceItemHeading>

                <ServiceItemDescription variant={"p"}>{description}</ServiceItemDescription>

                <Link
                    href={path}
                    onClick={(e) => e.stopPropagation()}
                    style={{
                        position: "absolute",
                        bottom: bottomSpacing, // Use the dynamic bottom spacing
                        left: 0,
                        right: 0,
                        textAlign: "center",
                        textDecoration: "none",
                    }}
                >
                    <Button
                        variant="contained"
                        sx={{
                            padding: "1rem 3rem",
                            fontSize: "1.5rem",
                            fontWeight: 500,
                            borderRadius: "50px",
                            backgroundColor: theme.palette.mode === "dark" ? "transparent" : "#fff",
                            color: theme.palette.mode === "dark" ? "#fff" : "#000",
                            border: theme.palette.mode === "dark" ? "1px solid #c2c2c2" : "none",
                            fontFamily: "DMSans",
                            "&:hover": {
                                backgroundColor: theme.palette.mode === "dark"
                                    ? "rgba(255,255,255,0.1)"
                                    : theme.palette.primary.accent,
                            },
                            width: "80%",
                        }}

                    >
                        {t("btn")}
                    </Button>
                </Link>
            </ServiceItemBox>
        </ServiceItemContainer>
    );
};