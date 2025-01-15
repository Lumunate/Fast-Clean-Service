"use client";
import React, { useState, useEffect } from "react";
import {
  HomePkgsBox,
  HomePkgsInBox,
  CardContainer,
  Cards,
  Card,
  CardName,
  CardDesc,
  CardBtn,
  ServiceBtn1,
} from "../../mui/HomePkgs";
import { Typography, Box } from "@mui/material";
import { useTheme } from "../../../contexts/themeContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import styles from "../about/About.module.css";
import { ServiceDescription, ServiceHeading } from "./ServiceColumnGroup";
import FadeIn from "../../Animations/FadeIn";

const cardData = [
  {
    imgSrc: "/car1.jpg",
    name: "Cars",
    pkgs: [
      "Car Exterior Cleaning",
      "Interior Steam Cleaning",
      "Paint Polishing & Sealing",
      "High quality glass coating",
      "Paint Sealant and WaxGuard",
    ],
    description:
      "Whether it's a casual ride or a high-performance machine, we’ve got your two-wheelers covered with professional cleaning and care services.",
  },
  {
    imgSrc: "/boat.png",
    name: "All Types of Vehicle",
    pkgs: [
      "We also cater to caravans, campers, boats, and trucks.",
      "The interior cleaning of a camper, caravan, boat, and truck is no problem for us.",
      "Steam cleaning is a very efficient environmentally friendly way to clean your vehicles.",
    ],
    description: "Long-term vehicle maintenance plans to ensure your car remains in peak condition with additional care options.",
  },
  {
    imgSrc: "/bike2.jpg",
    name: "Bikes",
    pkgs: [
      "These are exposed to harsh weather conditions and endure a lot.",
      "Our steam cleaner, reaching a temperature of 180 °C, can clean even the most difficult places.",
    ],
    description:
      "Whether it's a casual ride or a high-performance machine, we’ve got your two-wheelers covered with professional cleaning and care services.",
  },
];

function getTransitionStyles(index, curIndex, len) {
  return index === curIndex
    ? {
        left: 0,
        top: 0,
        transform: "translate(0, 0)",
        borderRadius: 0,
        width: "100%",
        height: "100%",
        boxShadow: "none",
        "& div": {
          display: "block",
          zIndex: 5,
        },
      }
    : index > curIndex
    ? {
        left: `calc(26% + ${285 * (index - curIndex)}px)`,
        zIndex: index + 10,
      }
    : {
        left: `calc(26% + ${265 * (len - 2) - (curIndex - index - 2) * 305}px)`,
        zIndex: index + 10,
      };
}

export default function LongTermVehicleCare() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % cardData.length);
    }, 10000);

    return () => {
      clearTimeout(timer);
    };
  }, [currentIndex]);

  const handleIndexChange = (index) => {
    if (index !== currentIndex) setCurrentIndex(index);
  };

  return (
    <Box
      sx={{
        position: "relative",
        padding: "5rem 0",
        marginBottom: "10rem",
      }}
    >
      <HomePkgsInBox
        sx={{
          alignItems: "center",
          zIndex: 10,
          flexDirection: "column",
          marginBottom: "12rem",
        }}
      >
        <FadeIn direction="up" distance={100} duration={1}>
          <ServiceHeading
            sx={{
              marginBottom: "0",
            }}
          >
            Long-term Vehicle Care
          </ServiceHeading>
        </FadeIn>
        <ServiceDescription sx={{ maxWidth: "740px" }}>
          Ensure your vehicles&apos; longevity with our comprehensive maintenance plans designed to keep your car in optimal
          condition for years to come.
        </ServiceDescription>
      </HomePkgsInBox>

      <Box sx={{ width: "1200px" }}>
        <CardContainer className={styles.cardContainer}>
          <Cards>
            {cardData.map((card, index) => (
              <Card
                key={index}
                sx={{
                  "--url": `url(${card.imgSrc})`,
                  cursor: currentIndex !== index ? "pointer" : "",
                  filter: currentIndex !== index ? "brightness(2)" : "",
                  ...getTransitionStyles(index, currentIndex, cardData.length),
                }}
                onClick={() => handleIndexChange(index)}
              >
                <div>
                  <CardName>{card.name}</CardName>

                  {card.pkgs.map((pkg) => (
                    <CardDesc key={pkg}>
                      <FontAwesomeIcon
                        icon={faCheckCircle}
                        style={{
                          color: "#90EE90",
                          marginRight: "1rem",
                        }}
                      />
                      <Typography
                        variant={"span"}
                        sx={{
                          textAlign: "left",
                          color: "#FFFFFF",
                          fontSize: "1.6rem",
                          fontWeight: "300",
                        }}
                      >
                        {pkg}
                      </Typography>
                    </CardDesc>
                  ))}

                  <CardDesc
                    sx={{
                      margin: "1.4rem 0",
                    }}
                  >
                    {card.description}
                  </CardDesc>

                  <ServiceBtn1 onClick={() => window.location.href = '/other-vehicles'}>Learn More</ServiceBtn1>
                </div>
              </Card>
            ))}
          </Cards>
        </CardContainer>
      </Box>
    </Box>
  );
}
