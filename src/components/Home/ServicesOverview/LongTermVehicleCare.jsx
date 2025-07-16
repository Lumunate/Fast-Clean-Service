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
import {useTranslations} from "next-intl";

function getTransitionStyles(index, curIndex, len) {
    const diff = index - curIndex;
    const isSecond = diff === 2;
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
          left: {
            xl: `calc(21% + ${305 * (index - curIndex)}px)`,
            lg: `calc(21% + ${305 * (index - curIndex)}px)`,
            md: `calc(14% + ${275 * (index - curIndex)}px)`,
            sm: `calc(-10% + ${275 * (index - curIndex)}px)`,
          },
          zIndex: index + 10,

          "@media only screen and (max-width: 1050px)": {
            left: `calc(12% + ${275 * (index - curIndex)}px + 60px)`,
            width: "230px",
            height: "123px",
          },
          "@media only screen and (max-width: 1000px)": {
            left: `calc(4% + ${275 * (index - curIndex)}px + 60px)`,
            width: "230px",
            height: "123px",
          },
          "@media only screen and (max-width: 950px)": {
            left: `calc(${275 * (index - curIndex)}px + 60px)`,
            width: "230px",
            height: "123px",
          },
          "@media only screen and (max-width: 900px)": {
            left: `calc(-47% + ${275 * (index - curIndex)}px + 60px)`,
            width: "230px",
            height: "123px",
          },
          "@media only screen and (max-width: 600px)": {
            left: `calc(-38% + ${220 * (index - curIndex)}px + 20px)`,
            width: "157px",
            height: "87px",
          },
          "@media only screen and (max-width: 550px)": {
            left: `calc(-40% + ${220 * (index - curIndex)}px + 20px)`,
            width: "157px",
            height: "87px",
          },
          "@media only screen and (max-width: 530px)": {
            left: `calc(-45% + ${220 * (index - curIndex)}px + 20px)`,
            width: "157px",
            height: "87px",
          },
          "@media only screen and (max-width: 500px)": {
              left: isSecond
                  ? `calc(-60% + ${180 * diff}px)`
                  : `calc(-45% + ${180 * diff}px)`,
            width: "120px",
            height: "60px",
          },
          "@media only screen and (max-width: 430px)": {
              left: isSecond
                  ? `calc(-60% + ${180 * diff}px)`
                  : `calc(-45% + ${180 * diff}px)`,
            width: "120px",
            height: "60px",
          },
          "@media only screen and (max-width: 400px)": {
              left: isSecond
                  ? `calc(-60% + ${180 * diff}px)`
                  : `calc(-45% + ${180 * diff}px)`,
            width: "120px",
            height: "60px",
          },
        }
      : {
          left: {
            xl: `calc(20% + ${305 * (len - 2) - (curIndex - index - 2) * 305}px)`,
            lg: `calc(20% + ${305 * (len - 2) - (curIndex - index - 2) * 305}px)`,
            md: `calc(14% + ${275 * (len - 2) - (curIndex - index - 2) * 275}px)`,
            sm: `calc(-10% + ${
              275 * (len - 2) - (curIndex - index - 2) * 275
            }px)`,
          },
          zIndex: index + 10,

          "@media only screen and (max-width: 1050px)": {
            left: `calc(12% + ${
              275 * (len - 2) - (curIndex - index - 2) * 275
            }px + 60px)`,
            width: "230px",
            height: "123px",
          },

          "@media only screen and (max-width: 1000px)": {
            left: `calc(4% + ${
              275 * (len - 2) - (curIndex - index - 2) * 275
            }px + 60px)`,
            width: "230px",
            height: "123px",
          },

          "@media only screen and (max-width: 950px)": {
            left: `calc(${275 * (len - 2) - (curIndex - index - 2) * 275}px + 50px)`,
            width: "230px",
            height: "123px",
          },
          "@media only screen and (max-width: 900px)": {
            left: `calc(-47% + ${
              275 * (len - 2) - (curIndex - index - 2) * 275
            }px + 60px)`,
            width: "230px",
            height: "123px",
          },
          "@media only screen and (max-width: 600px)": {
            left: `calc(-38% + ${
              220 * (len - 2) - (curIndex - index - 2) * 220
            }px + 20px)`,
            width: "157px",
            height: "87px",
          },
          "@media only screen and (max-width: 550px)": {
            left: `calc(-40% + ${
              220 * (len - 2) - (curIndex - index - 2) * 220
            }px + 20px)`,
            width: "157px",
            height: "87px",
          },
          "@media only screen and (max-width: 530px)": {
            left: `calc(-45% + ${
              220 * (len - 2) - (curIndex - index - 2) * 220
            }px + 20px)`,
            width: "157px",
            height: "87px",
          },
          "@media only screen and (max-width: 500px)": {
            left: `calc(-35% + ${
              180 * (len - 2) - (curIndex - index - 2) * 160
            }px + 20px)`,
            width: "157px",
            height: "87px",
          },
          "@media only screen and (max-width: 430px)": {
            left: `calc(-40% + ${
              180 * (len - 2) - (curIndex - index - 2) * 160
            }px)`,
            width: "157px",
            height: "87px",
          },
          "@media only screen and (max-width: 400px)": {
            left: `calc(-40% + ${
              180 * (len - 2) - (curIndex - index - 2) * 160
            }px)`,
            width: "157px",
            height: "87px",
          },
        };
}

export default function LongTermVehicleCare() {
  const [currentIndex, setCurrentIndex] = useState(0);
    const t = useTranslations('home.other_vehicles_care_section');
    const cardData = [
        {
            imgSrc: "/car1.jpg",
            name: t("categories.0.name"),
            pkgs: [
                t("categories.0.services.0"),
                t("categories.0.services.1"),
                t("categories.0.services.2"),
                t("categories.0.services.3"),
                // t("categories.0.services.4"),
                // t("categories.0.services.5"),
            ],
            description: t("categories.0.description"),
        },
        {
            imgSrc: "/Caravans.png",
            name: t("categories.1.name"),
            pkgs: [
                t("categories.1.services.0"),
                t("categories.1.services.1"),
                t("categories.1.services.2"),
                t("categories.1.services.3"),
            ],
            description: t("categories.1.description"),
        },
        {
            imgSrc: "/bike2.jpg",
            name: t("categories.2.name"),
            pkgs: [
                t("categories.2.services.0"),
                t("categories.2.services.1"),
                t("categories.2.services.2"),
                t("categories.2.services.3"),
            ],
            description: t("categories.2.description"),
        },
        {
            imgSrc: "/truck2.png",
            name: t("categories.3.name"),
            pkgs: [
                t("categories.3.services.0"),
                t("categories.3.services.1"),
                t("categories.3.services.2"),
                t("categories.3.services.3"),
            ],
            description: t("categories.3.description"),
        },
        {
            imgSrc: "/boat.png",
            name: t("categories.4.name"),
            pkgs: [
                t("categories.4.services.0"),
                t("categories.4.services.1"),
                t("categories.4.services.2"),
                t("categories.4.services.3"),
            ],
            description: t("categories.4.description"),
        }
    ];

  useEffect(() => {
    const timer = setTimeout(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % cardData.length);
    }, 100000000);

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
        padding: "0",
        marginBottom: "6rem",
        "@media (max-width: 600px)": {
          padding: "2rem 0",
          marginBottom: "2rem",
        },
      }}
      id="long-term-vehicle-care"
    >
      <HomePkgsInBox
        sx={{
          alignItems: "center",
          zIndex: 10,
          flexDirection: "column",
          marginBottom: "6rem",
          "@media (max-width:1150px)": { width: "100%" },
          "@media (max-width:1258px)": { padding: "2rem", marginBottom: "0" },
        }}
      >
        <FadeIn direction="up" distance={100} duration={1}>
          <ServiceHeading
            sx={{
              marginBottom: "0",
            }}
          >
              {t("title")}
          </ServiceHeading>
        </FadeIn>
        <ServiceDescription sx={{ maxWidth: "620px" }}>
            {t("description")}
        </ServiceDescription>
      </HomePkgsInBox>

      <Box
        sx={{
          alignItems: "center",
          display: "flex",
          justifyContent: "center",
          width: "1200px",
          "@media (max-width:1258px)": { width: "100%", padding: "2rem" },
        }}
      >
        <CardContainer
          className={styles.cardContainer}
          sx={{
            maxWidth: {
              xs: "100%",
              sm: "600px",
              md: "1000px",
              lg: "1200px",
              xl: "1200px",
            },
            "@media only screen and (max-width: 450px)": {
              padding: 0,
            },
          }}
        >
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
                  <CardName
                    sx={{
                      "@media (max-width: 600px)": {
                        marginTop: currentIndex === 2 ? "4rem" : "4rem",
                      },
                    }}
                  >
                    {card.name}
                  </CardName>

                  {card.pkgs.map((pkg) => (
                    <CardDesc key={pkg}>
                      <FontAwesomeIcon
                        icon={faCheckCircle}
                        style={{
                          color: "#90EE90",
                          marginRight: "1rem",
                          marginTop: "0.5rem",
                        }}
                      />
                      <Typography
                        variant={"span"}
                        sx={{
                          textAlign: "left",
                          color: "#FFFFFF",
                          fontSize: "1.6rem",
                          fontWeight: "300",
                          "@media (max-width:1258px)": { fontSize: "1.6rem" },
                           "@media (max-width:992px)": { fontSize: "1.4rem" },
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

                  <ServiceBtn1
                    sx={{
                      opacity: 0,
                      animation: "fadeIn 0.5s ease-in-out forwards",
                      animationDelay: "1s",
                    }}
                    onClick={() => (window.location.href = index === 0 ? "/booking" : "/other-vehicles")}
                  >
                      {t("button.text")}
                  </ServiceBtn1>
                </div>
              </Card>
            ))}
          </Cards>
        </CardContainer>
      </Box>
    </Box>
  );
}
