"use client";
import React, { useState } from "react";
import { Box, Typography, styled } from "@mui/material";

const Container = styled(Box)(({ theme }) => ({
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    gap: "2rem",
    maxWidth: "98rem",
    margin: "0 auto",
    padding: "2rem",
    "@media (max-width: 600px)": {
        flexDirection: "column",
    },
}));

const Card = styled(Box)(({ theme, expanded, expandDirection }) => ({
    position: "relative",
    width: expanded ? "calc(100% - 1rem)" : "calc(50% - 1rem)",
    minHeight: "52rem",
    borderRadius: "10px",
    overflow: "hidden",
    cursor: "pointer",
    transition: "all 0.3s ease",
    display: "flex",
    alignItems: "flex-start",
    justifyContent: "flex-start",
    backgroundImage: "url('/g9.jpg')",
    backgroundSize: "cover",
    backgroundPosition: "center",
    marginLeft: expanded && expandDirection === "right" ? "0" : "auto",
    marginRight: expanded && expandDirection === "left" ? "0" : "auto",
    "@media (max-width: 900px)": {
        minHeight: "35rem",
        height: "100%",
        width: "100%",
    },
}));

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
}));

const Overlay = styled(Box)(({ theme }) => ({
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    backgroundColor: "rgba(0, 0, 0, 0.6)",
    zIndex: 2,
}));

const Content = styled(Box)(({ theme, expanded }) => ({
    position: "relative",
    zIndex: 3,
    padding: "5rem",
    color: "#fff",
    width: "100%",
    transition: "opacity 0.3s ease",
    "@media (max-width: 900px)": {
        padding: "3rem",
    },
}));

const Number = styled(Typography)({
    fontSize: "4rem",
    fontWeight: 500,
    "@media (max-width: 900px)": {
        fontSize: "2.8rem",
    },
    "@media (max-width: 600px)": {
        fontSize: "2.2rem",
    },
});

const Heading = styled(Typography)(({ showHeading }) => ({
    fontSize: "4rem",
    fontWeight: 500,
    lineHeight: "1.2",
    opacity: showHeading ? 1 : 0,
    transition: "opacity 0.3s ease",
    "@media (max-width: 900px)": {
        fontSize: "2.8rem",
    },
    "@media (max-width: 600px)": {
        fontSize: "2.2rem",
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

export default function ExpandableCards() {
    const [expandedCard, setExpandedCard] = useState(null);

    const handleCardClick = (id) => {
        setExpandedCard((prev) => (prev === id ? null : id));
    };

    return (
        <Container>
            {cardData.map((card, index) => (
                <Card
                    key={card.id}
                    expanded={expandedCard === card.id}
                    expandDirection={index === 0 ? "right" : "left"}
                    onClick={() => handleCardClick(card.id)}
                >
                    <BackgroundImage />
                    <Overlay />
                    <Content expanded={expandedCard === card.id}>
                        <Number>0{card.id}</Number>
                        <Heading
                            showHeading={expandedCard === null || expandedCard === card.id}
                        >
                            {card.title}
                        </Heading>
                        {expandedCard === card.id && (
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
                                            <CheckmarkIcon src="/Checkmark.png" alt="checkmark" />
                                            {detail}
                                        </BulletItem>
                                    ))}
                                </BulletList>
                            </ExpandedContent>
                        )}
                    </Content>
                </Card>
            ))}
        </Container>
    );
}
