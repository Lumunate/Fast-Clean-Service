"use client";
import React, {useEffect, useRef, useState} from "react";
import { Box, styled, Typography } from "@mui/material";
// import Star from "../../AnimatedSvgs/Star";
// import Bars from "../../AnimatedSvgs/Bars";
// import Customer from "../../AnimatedSvgs/Customer";
import { useTheme } from "@mui/material";
import Image from "next/image";
import Arrow from "../../../../public/decorative/Arrow_01.svg";
import { ServicesDivider } from "../services/ServicesPckgs";
import { HomePkgsInBox } from "../../mui/HomePkgs";
import Star from "../../AnimatedSvgs/Star";
import Bars from "../../AnimatedSvgs/Bars";
import Customer from "../../AnimatedSvgs/Customer";
import {useTranslations} from "next-intl";



const StatsSectionContainer = styled(Box)(({ theme }) => ({
  margin: "4rem auto",
  padding: "20.7rem 7rem 2rem",
  width: "100%",
  "@media (max-width: 900px)": {
    padding: "10rem 2rem 2rem",
  },
}));

const StatsBox = styled(Box)(({ theme }) => ({
  position: "relative",
  margin: "0 5.5rem",
  zIndex: 1,
  padding: "3.5rem 0",
  backgroundColor: "#1C79CC",
  borderRadius: "4rem",
  boxShadow: "0 0 7.4px 0 rgba(0, 0, 0, 0.25)",

  "@media (max-width: 1300px)": {
    margin: "0",
  },
}));

const StatsContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  flexWrap: "wrap",
  justifyContent: "space-evenly",
  alignItems: "center",
  margin: "0 auto",

  "@media (min-width: 600px) and (max-width: 1280px)": {
    flexWrap: "nowrap",
    flexDirection: "row",
    justifyContent: "space-around",
    gap: "1rem",
  },
}));

const StatsCardDivider = styled(Box)(({ theme }) => ({
  height: "60px",
  width: "1px",
  margin: "0 3rem",
  backgroundColor: "white",

  "@media (max-width: 600px)": {
    height: "1px",
    width: "12rem",
    marginTop: "1rem",
    marginBottom: "1rem",
  },
}));

const StatsDecorativeNumbers = () => {
  const theme = useTheme();
  const t = useTranslations('home.stats_section');
  return (
    <Box
      sx={{
        position: "absolute",
        top: "-9rem",
        left: "-2%",
      }}
    >
      <Box sx={{ positon: "relative" }}>
        <Typography
          sx={{
            fontSize: "1.6rem",
            fontWeight: 500,
            fontFamily: "Unbounded",
            color: theme.palette.mode === "light" ? "#939393" : "white",
          }}
        >
          {t("title")}
        </Typography>

        <Image src={Arrow} alt="Decorative Arrow" height={60} width={-1} style={{ position: "absolute", right: "-5%" }} />
      </Box>
    </Box>
  );
};

export default function Stats() {
  const t = useTranslations('home.stats_section');

  const stats = [
    {
      icon: Star,
      type: "rating",
      head: "4.8/5",
      desc: t("stats.0.description"),
    },
    {
      icon: Bars,
      type: "ranking",
      head: "7+",
      desc: t("stats.1.description"),
    },
    {
      icon: Customer,
      type: "customer",
      head: "9510+",
      desc: t("stats.2.description"),
    },
  ];

  return (
    <HomePkgsInBox
      sx={{
        margin: "0 auto",
        "@media (min-width: 600px) and (max-width: 1280px)": {
          width: "95%",
        },
      }}
    >
      <StatsSectionContainer>
        <StatsBox>
          <StatsDecorativeNumbers />

          <StatsContainer>
            {stats.map((stat, index) => (
                <React.Fragment key={index}>
                  <StatsCard
                      icon={stat.icon}
                      type={stat.type}
                      head={stat.head}
                      desc={stat.desc}
                  />
                  {index !== stats.length - 1 && (
                      <ServicesDivider sx={{  background: "linear-gradient(to top, transparent 0%, rgba(255,255,255,0.6) 50%, transparent 100%)"}}/>
                  )}
                </React.Fragment>
            ))}
          </StatsContainer>
        </StatsBox>
      </StatsSectionContainer>
    </HomePkgsInBox>
  );
}

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
    padding: "3rem 1rem",
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

function StatsCard({ icon, head, desc, type }) {
  const [count, setCount] = useState(null);
  const [hasAnimated, setHasAnimated] = useState(false);
  const cardRef = useRef(null);

  const parseNumberFromHead = () => {
    if (type === "rating") {
      const [numberPart] = head.split("/");
      return parseFloat(numberPart);
    }
    else if (type === "ranking") {
      return parseFloat(head.replace("+", ""));
    }
    else if (type === "customer") {
      return parseFloat(head.replace("+", ""));
    }
    return 0;
  };

  useEffect(() => {
    const finalValue = parseNumberFromHead();

    let initialValue = 0;
    let animate = true;

    if (type === "ranking") {
      initialValue = 1;
    } else if (type === "customer") {
      initialValue = 8800;
    } else if (type === "rating") {
      initialValue = 3;
    }

    // Intersection Observer
    const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting && !hasAnimated && animate) {
            setHasAnimated(true);

            // Start the count-up
            let current = initialValue;
            const duration = 2000; // 2 seconds
            const stepTime = 100;
            const steps = Math.floor(duration / stepTime);
            const increment = (finalValue - initialValue) / steps;

            const interval = setInterval(() => {
              current += increment;
              if (current >= finalValue) {
                clearInterval(interval);
                setCount(finalValue);
              } else {
                // Round or ceil as you see fit
                setCount(Math.ceil(current));
              }
            }, stepTime);
          }
        },
        { threshold: 0.5 } // 50% in view triggers animation
    );

    if (cardRef.current) observer.observe(cardRef.current);

    return () => {
      if (cardRef.current) observer.unobserve(cardRef.current);
    };
  }, [head, type, hasAnimated]);

  // Format final display of `count`
  // e.g. "4.7/5", "1500+", etc.
  const displayValue = () => {
    if (count === null) {
      // Not yet animated => show the original string or 0
      return head;
    }
    // For rating, put /5
    if (type === "rating") {
      return `${count.toFixed(1)}/5`; // or skip .toFixed(1) if you want an integer
    }
    // For others, add '+' if it had it
    if (type === "ranking" || type === "customer") {
      return `${Math.floor(count)}+`;
    }
    return head; // fallback
  };

  return (
      <StatCardContainer ref={cardRef}>
        {/* Show the animated icon */}
        <StatAnimatedIcon>
          {React.createElement(icon)}
        </StatAnimatedIcon>

        {/* Heading that shows the count-up number */}
        <StatCardHeading variant="h2">
          {displayValue()}
        </StatCardHeading>

        {/* Subheading/description */}
        <StatCardSubheading variant="p">
          {desc}
        </StatCardSubheading>
      </StatCardContainer>
  );
}