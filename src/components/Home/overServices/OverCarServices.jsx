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
import {Box, Button, Link, Typography} from "@mui/material";
import React, { useRef } from "react";
import {useTranslations} from "next-intl";
  
  const servicesData = [
    {
      img: TickBox,
      imgDark: TickBoxWhite,
      title: "Steam Cleaning Interior & Exterior",
      description: "Provide a deeply cleaned car with our  environmentally friendly steam cleaning techniques.",
      description2: "Book Now and give your car the fresh start it deserves",
    },
    {
      img: Shield,
      imgDark: ShieldWhite,
      title: "Steam Cleaning Interior & Exterior",
      description: "Protect your car's paint and make it shine again with our professional wax and coating treatments.",
      description2: "Plan Your Detailing and keep your car looking new for longer",
    },
    {
      img: PaintRoll,
      imgDark: PaintRollWhite,
      title: "Polishing and Headlight Restoration",
      description: "Remove scratches and regain the brightness of your headlights for a brighter shine result.",
      description2: "Request a Quote for your polishing job.",
    },
  ];
  
  export default function OverCarServices() {
      const t = useTranslations('home.services_section');
    const { theme } = useTheme();
      const servicesOverviewRef = useRef(null);

      const servicesData = [
          {
              img: TickBox,
              imgDark: TickBoxWhite,
              title: t("services.0.title"),
              description: t("services.0.description"),
              description2: t("services.0.description2"),
          },
          {
              img: Shield,
              imgDark: ShieldWhite,
              title: t("services.1.title"),
              description: t("services.1.description"),
              description2: t("services.1.description2"),
          },
          {
              img: PaintRoll,
              imgDark: PaintRollWhite,
              title: t("services.2.title"),
              description: t("services.2.description"),
              description2: t("services.2.description2"),
          },
      ];


      const scrollToServices = () => {
          servicesOverviewRef.current?.scrollIntoView({ behavior: "smooth" });
      };

    return (
      <CarServicesContainer>
        {servicesData.map(({ img, imgDark, title, description, description2 }, index) => (
          <CarServiceItem
            key={index}
            icon={theme.palette.mode === "dark" ? imgDark : img}
            title={title}
            description={description}
            description2={description2}
          />
        ))}
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
                textAlign: "center",
              }}
          >
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
                      padding: "1.5rem 3rem",
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
                        padding: "1.5rem 3rem",
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
        </Box>
      </CarServicesContainer>
    );
  }
  
  const CarServiceItem = ({ icon, title, description,description2 }) => {
    return (
      <ServiceItemContainer>
        <ServiceItemBox>
          <ServiceItemIconContainer>
            <ServiceItemIcon src={icon} alt={title} width={88} height={88} sx={{ "@media (max-width: 600px)": { transform: "scale(0.6)" }, }} />
          </ServiceItemIconContainer>
  
          <ServiceItemHeading variant={"h4"}>{title}</ServiceItemHeading>
  
          <ServiceItemDescription variant={"p"}>{description}</ServiceItemDescription>
          <ServiceItemDescription variant={"p"}>{description2}</ServiceItemDescription>
        </ServiceItemBox>
      </ServiceItemContainer>
    );
  };