"use client";
import React, { useState } from "react";
import {
    Box,
    Typography,
    styled,
    useTheme,
    useMediaQuery,
} from "@mui/material";

// Styled Components

const Container = styled(Box)(({ theme }) => ({
    display: "flex",
    justifyContent: "center",
    alignItems: "flex-start",
    gap: "2rem",
    maxWidth: "98rem",
    margin: "0 auto",
    padding: "2rem",
    "@media (max-width: 600px)": {
        flexDirection: "column",
        padding: "1rem",
    },
}));

const Card = styled(Box)(
    ({ theme, expanded, expandDirection, isSmallScreen }) => ({
        position: "relative",
        width: isSmallScreen
            ? "100%"
            : expanded
                ? "calc(100% - 1rem)"
                : "calc(50% - 1rem)",
        minHeight: isSmallScreen ? "35rem" : "52rem",
        borderRadius: "10px",
        overflow: "hidden",
        cursor: "pointer",
        transition: "all 0.3s ease",
        display: "flex",
        alignItems: isSmallScreen && !expanded ? "center" : "flex-start",
        justifyContent: isSmallScreen && !expanded ? "center" : "flex-start",
        backgroundImage: "url('/g9.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        marginLeft:
            !isSmallScreen && expanded && expandDirection === "right"
                ? "0"
                : "auto",
        marginRight:
            !isSmallScreen && expanded && expandDirection === "left"
                ? "0"
                : "auto",
        "@media (max-width: 900px)": {
            minHeight: "35rem",
            height: "100%",
            width: "100%",
        },
    })
);

const BackgroundImage = styled(Box)(({ theme }) => ({
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    backgroundImage: "url('/g9.jpg')",
    backgroundSize: "cover",
    backgroundPosition: "center",
    filter: "brightness(0.3)",
    zIndex: 1,
    "@media (max-width: 600px)": {
        filter: "brightness(0.6)",
    },
}));

const Overlay = styled(Box)(({ theme }) => ({
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    backgroundColor: "rgba(0, 0, 0, 0.6)",
    zIndex: 2,
    "@media (max-width: 600px)": {
        backgroundColor: "rgba(0, 0, 0, 0)",
    },
}));

const Content = styled(Box)(
    ({ theme, expanded, isSmallScreen }) => ({
        position: "relative",
        zIndex: 3,
        padding: isSmallScreen ? (expanded ? "3rem" : "0") : "5rem",
        color: "#fff",
        width: "100%",
        transition: "opacity 0.3s ease, padding 0.3s ease",
        display: "flex",
        flexDirection: "column",
        alignItems: isSmallScreen && !expanded ? "center" : "flex-start",
        justifyContent: isSmallScreen && !expanded ? "center" : "flex-start",
        textAlign: isSmallScreen && !expanded ? "left" : "left",
        "@media (max-width: 900px)": {
            padding: isSmallScreen ? (expanded ? "3rem" : "0") : "3rem",
        },
        "@media (max-width: 600px)": {
            padding: isSmallScreen ? (expanded ? "2rem" : "6rem") : "2rem",
        },
    })
);

const Number = styled(Typography)(({ isSmallScreen, expanded }) => ({
    fontSize: isSmallScreen
        ? "3.6rem"
        : "4rem",
    fontWeight: 500,
    "@media (max-width: 900px)": {
        fontSize: "2.8rem",
    },
    "@media (max-width: 600px)": {
        fontSize: "3.6rem",
        alignSelf: "flex-start",
    },
}));

const Heading = styled(Typography)(({ showHeading, isSmallScreen }) => ({
    fontSize: isSmallScreen
        ? "2.4rem"
        : "4rem",
    fontWeight: 500,
    lineHeight: "1.2",
    opacity: isSmallScreen ? 1 : showHeading ? 1 : 0,
    transition: "opacity 0.3s ease, font-size 0.3s ease",
    "@media (max-width: 900px)": {
        fontSize: "2.8rem",
    },
    "@media (max-width: 600px)": {
        fontSize: "2.4rem",
    },
}));

const ExpandedContent = styled(Box)(({ theme }) => ({
    marginTop: "3rem",
    fontWeight: 300,
    lineHeight: 1.5,
    "@media (max-width: 900px)": {
        fontSize: "2rem",
    },
    "@media (max-width: 600px)": {
        fontSize: "1.6rem",
    },
}));

const BulletList = styled("ul")({
    listStyleType: "none",
    paddingLeft: "0",
    marginTop: "2rem",
    "@media (max-width: 900px)": {
        marginTop: "1rem",
    },
});

const BulletItem = styled("li")({
    display: "flex",
    alignItems: "center",
    marginBottom: "1rem",
    fontSize: "2rem",
    "@media (max-width: 900px)": {
        fontSize: "1.4rem",
    },
    "@media (max-width: 600px)": {
        fontSize: "1.2rem",
    },
});

const CheckmarkIcon = styled("img")({
    width: "20px",
    height: "20px",
    marginRight: "1rem",
});

// Card Data
const cardData = [
    {
        id: 1,
        title: "Professional Equipment",
        subpara: "Our detailing shop is equipped with cutting-edge tools:",
        details: [
            "Latest detailing technology",
            "Motorcycle-specific resources",
            "Showroom-quality results",
            "Meticulous attention to detail",
        ],
    },
    {
        id: 2,
        title: "Expert Technicians",
        subpara: "Our certified detailing experts bring unparalleled skill to every job:",
        details: [
            "Certified detailing experts",
            "Unparalleled skill for every job",
            "Modern equipment and technology",
            "Exceptional customer service",
        ],
    },
];

// Main Component
export default function ExpandableCards() {
    const theme = useTheme();
    const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm")); // Typically <600px
    const [activeCard, setActiveCard] = useState(null); // Tracks the currently active card

    // Handlers for large screens (hover)
    const handleCardMouseEnter = (id) => {
        if (!isSmallScreen) {
            setActiveCard(id);
        }
    };

    const handleCardMouseLeave = () => {
        if (!isSmallScreen) {
            setActiveCard(null);
        }
    };

    // Handlers for small screens (click)
    const handleCardClick = (id) => {
        if (isSmallScreen) {
            setActiveCard((prev) => (prev === id ? null : id));
        }
    };

    return (
        <Container>
            {cardData.map((card, index) => {
                // Determine if the current card is expanded
                const isExpanded = activeCard === card.id;

                // Determine if any other card is expanded
                const anyOtherExpanded =
                    activeCard !== null && activeCard !== card.id;

                return (
                    <Card
                        key={card.id}
                        expanded={isExpanded}
                        expandDirection={index === 0 ? "right" : "left"}
                        isSmallScreen={isSmallScreen}
                        onMouseEnter={() => handleCardMouseEnter(card.id)}
                        onMouseLeave={handleCardMouseLeave}
                        onClick={() => handleCardClick(card.id)}
                        style={{ userSelect: "none" }}
                    >
                        <BackgroundImage />
                        <Overlay />
                        <Content expanded={isExpanded} isSmallScreen={isSmallScreen}>
                            <Number isSmallScreen={isSmallScreen} expanded={isExpanded}>
                                0{card.id}
                            </Number>
                            {(!anyOtherExpanded || isExpanded) && (
                                <Heading
                                    showHeading={isExpanded || !anyOtherExpanded}
                                    isSmallScreen={isSmallScreen}
                                >
                                    {card.title}
                                </Heading>
                            )}
                            {isExpanded && (
                                <ExpandedContent>
                                    <Typography
                                        variant="body1"
                                        sx={{
                                            marginBottom: "2rem",
                                            fontSize: "2.2rem",
                                            "@media (max-width: 900px)": {
                                                fontSize: "1.6rem",
                                            },
                                            "@media (max-width: 600px)": {
                                                fontSize: "1.4rem",
                                            },
                                        }}
                                    >
                                        {card.subpara}
                                    </Typography>
                                    <BulletList>
                                        {card.details.map((detail, idx) => (
                                            <BulletItem key={idx}>
                                                <CheckmarkIcon
                                                    src="/Checkmark.png"
                                                    alt="checkmark"
                                                />
                                                {detail}
                                            </BulletItem>
                                        ))}
                                    </BulletList>
                                </ExpandedContent>
                            )}
                        </Content>
                    </Card>
                );
            })}
        </Container>
    );
}

// Exporting styled components for potential reuse or testing
export const StatCardContainer = styled(Box)(({ theme }) => ({
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    textAlign: "center",
    padding: "1rem 1.5rem",
    width: "300px",
    margin: "0 auto",

    "@media (max-width: 600px)": {
        width: "100%",
    },
}));

export const StatCardHeading = styled(Typography)(({ theme }) => ({
    fontWeight: 700,
    fontSize: "3.5rem",
    color: "white",
    marginBottom: "0.5rem",

    "@media (max-width: 900px)": {
        fontSize: "2rem",
    },
}));

export const StatCardSubheading = styled(Typography)(({ theme }) => ({
    fontSize: "1.6rem",
    fontWeight: 500,
    color: "white",

    "@media (max-width: 900px)": {
        fontSize: "1.2rem",
    },
}));

export const StatAnimatedIcon = styled(Box)(({ theme }) => ({
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "50px",
    height: "50px",
    color: "white",
    marginBottom: "1rem",

    "& svg g, & svg path": {
        width: "100%",
        height: "100%",
        fill: "white",
        stroke: "rgb(255,255,255) !important",
    },

    "@media (max-width: 900px)": { transform: "scale(0.6)" },
}));

const StatsCard = ({ icon, head, desc }) => {
    // const getStatIcon = (iconComponent) => {
    //   return <StatAnimatedIcon>{React.createElement(iconComponent)}</StatAnimatedIcon>;
    // };

    return (
        <StatCardContainer>
            {/* {getStatIcon(icon)} */}
            <StatCardHeading variant="h2">{head}</StatCardHeading>
            <StatCardSubheading variant="p">{desc}</StatCardSubheading>
        </StatCardContainer>
    );
};
