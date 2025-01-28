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

const stats = [
  {
    icon: Star,
    type: "rating",
    head: "4.7/5",         // We'll parse '4.7' from this for the count
    desc: "Stars on Trustpilot",
  },
  {
    icon: Bars,
    type: "ranking",
    head: "4+",            // We'll parse '4' from this for the count
    desc: "Years of Experience",
  },
  {
    icon: Customer,
    type: "customer",
    head: "1250+",         // We'll parse '1250' from this for the count
    desc: "Happy Customers",
  },
];

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
          Our Numbers
        </Typography>

        <Image src={Arrow} alt="Decorative Arrow" height={60} width={-1} style={{ position: "absolute", right: "-5%" }} />
      </Box>
    </Box>
  );
};

export default function Stats() {
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
                  {/* Divider */}
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

  // Example: parse numeric portion from `head`
  // For "4.7/5", we parse "4.7"
  // For "4+", we parse "4"
  // For "1250+", we parse "1250"
  const parseNumberFromHead = () => {
    // Example 1: rating => "4.7/5"
    if (type === "rating") {
      // Extract '4.7' from "4.7/5"
      const [numberPart] = head.split("/");
      return parseFloat(numberPart);
    }
    // Example 2: ranking => "4+"
    else if (type === "ranking") {
      return parseFloat(head.replace("+", ""));
    }
    // Example 3: customer => "1250+"
    else if (type === "customer") {
      return parseFloat(head.replace("+", ""));
    }
    return 0;
  };

  useEffect(() => {
    const finalValue = parseNumberFromHead();

    // Decide initialValue if needed
    // (From your old code: ranking started from 1, customer started from 1300, etc.)
    let initialValue = 0;
    let animate = true;

    if (type === "ranking") {
      initialValue = 1; // start from 1
    } else if (type === "customer") {
      initialValue = 1000; // old code started at 1300
    } else if (type === "rating") {
      initialValue = 2;
      // rating was basically not incrementing from 0;
      // if you prefer it to animate, set it to 0 or something else
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