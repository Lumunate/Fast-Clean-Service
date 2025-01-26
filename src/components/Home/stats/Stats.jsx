"use client";
import React from "react";
import { Box, styled, Typography } from "@mui/material";
// import Star from "../../AnimatedSvgs/Star";
// import Bars from "../../AnimatedSvgs/Bars";
// import Customer from "../../AnimatedSvgs/Customer";
import { useTheme } from "@mui/material";
import Image from "next/image";
import Arrow from "../../../../public/decorative/Arrow_01.svg";
import { HomePkgsInBox } from "../../mui/HomePkgs";

const stats = [
  {
    // icon: Star,
    head: "4.5/5",
    desc: "Stars on Trustpilot",
  },
  {
    // icon: Bars,
    head: "4+",
    desc: "Years of Experience",
  },
  {
    // icon: Customer,
    head: "1500+",
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

  "@media (max-width: 900px)": {
    margin: "0 3rem",
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
                  <StatsCard icon={stat.icon} head={stat.head} desc={stat.desc} />
                  {index !== stats.length - 1 && <StatsCardDivider />}
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
