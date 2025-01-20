"use client";
import React from "react";
import { Box, Typography, styled } from "@mui/material";
import Image from "next/image";

const imageArray = ["/a1.png", "/a2.png", "/a3.png", "/a4.png"];

const SectionContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  padding: "5rem 2rem",
  maxWidth: "100rem",
  gap: "10rem",
  position: "relative",
  "@media (max-width: 900px)": {
    flexDirection: "column",
    gap: "3rem",
  },
}));

const TextContainer = styled(Box)(({ theme }) => ({
  flex: 1,
  padding: "2rem",
  textAlign: "left",
  color: "black",
  "@media (max-width: 900px)": {
    maxWidth: "80%",
  }
}));

const GridContainer = styled(Box)(({ theme }) => ({
  flex: 1,
  display: "grid",
  gridTemplateColumns: "repeat(2, 1fr)",
  gridTemplateRows: "repeat(2, 1fr)",
  gap: "1rem",
  padding: "2rem",
}));

const GridItem1 = styled(Box)(({ theme }) => ({
  width: "20.7rem",
  height: "14.9rem",
  borderRadius: "10px",
  overflow: "hidden",
  position: "relative",
  boxShadow: "0px 4px 15.6px rgba(0, 0, 0, 0.41)",
  "@media (max-width: 600px)": {
    width: "15rem", // Reduced width for smaller screens
    height: "10.8rem", // Proportionally reduced height
  },
}));

const GridItem2 = styled(Box)(({ theme }) => ({
  width: "14.4rem",
  height: "15.7rem",
  borderRadius: "10px",
  overflow: "hidden",
  position: "relative",
  boxShadow: "0px 4px 15.6px rgba(0, 0, 0, 0.41)",
  "@media (max-width: 600px)": {
    width: "9.8rem",
    height: "10.8rem",
  },
}));

const GridItem3 = styled(Box)(({ theme }) => ({
  width: "15.4rem",
  height: "16.1rem",
  borderRadius: "10px",
  overflow: "hidden",
  position: "relative",
  left: "5.3rem",
  boxShadow: "0px 4px 15.6px rgba(0, 0, 0, 0.41)",
  "@media (max-width: 600px)": {
    width: "10.6rem",
    height: "11.1rem",
    left: "4rem",
  },
}));

const GridItem4 = styled(Box)(({ theme }) => ({
  width: "18.1rem",
  height: "13.1rem",
  borderRadius: "10px",
  overflow: "hidden",
  position: "relative",
  boxShadow: "0px 4px 15.6px rgba(0, 0, 0, 0.41)",
  "@media (max-width: 600px)": {
    width: "12.6rem",
    height: "8.8rem",
  },
}));

const MainImage = styled(Image)(({ theme }) => ({
  width: "100%",
  height: "100%",
  objectFit: "cover",
  position: "absolute",
}));


const Description = styled(Typography)(({ theme }) => ({
  fontSize: "1.6rem",
  color: theme.palette.mode === "dark" ? "#fff" : "#050505",
  lineHeight: "3.5rem",
  fontWeight: "400",
  "@media (max-width: 900px)": {
    fontSize: "1.2rem",
  },
}));

export default function BackgroundSection() {
  return (
      <Box sx={{ justifyContent: "center", alignItems: "center", display: "flex" }}>
        <SectionContainer>
          <TextContainer>
            <Description>
              We offer mobile car cleaning at your convenience anytime and anywhere. Our steam cleaning technique ensures a deep, thorough clean, reaching even the toughest spots. Equipped with modern supplies in our vans, we provide efficient, professional service for all types of vehicles.
            </Description>
          </TextContainer>

          <GridContainer>
            <GridItem1>
              <MainImage src={imageArray[0]} alt="Image 1" layout="fill" />
            </GridItem1>
            <GridItem2>
              <MainImage src={imageArray[1]} alt="Image 2" layout="fill" />
            </GridItem2>
            <GridItem3>
              <MainImage src={imageArray[2]} alt="Image 3" layout="fill" />
            </GridItem3>
            <GridItem4>
              <MainImage src={imageArray[3]} alt="Image 4" layout="fill" />
            </GridItem4>
          </GridContainer>
        </SectionContainer>
      </Box>
  );
}
