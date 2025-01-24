import React from "react";
import { HomePkgsInBox, ServicesOverviewWrapper } from "../../mui/HomePkgs";
import OverCarServices from "./OverCarServices";

import HeadingLinesAnimation from "../HeadingLinesAnimation/HeadingLinesAnimation";
import RadialCircle from "../../Decorative/RadialCircle";
import { Box, Typography } from "@mui/material";


export default function OverServiceOverview() {
  return (
    <HomePkgsInBox
      sx={{
        margin: "0 auto",
        "@media (max-width: 1200px)": { width: "100%" }
      }}
    >
      <ServicesOverviewWrapper>
        <HeadingLinesAnimation sx={{ width: "50%", marginBottom: "7rem" }}>OUR SERVICES</HeadingLinesAnimation>
        <Typography
                sx={{
                  textAlign:"center",
                  fontSize: "1.55rem",
                  lineHeight: 1.7,
                  paddingTop:"24px",
                  px:'20px',
                  "@media (max-width: 900px)": {
                    textAlign: "center",
                  },
                  "@media (max-width: 600px)": {
                    fontSize: "12px",
                    textAlign: "center",
                  },
                  "& .line-break": {
                    display: "inline", 
                    "@media (max-width: 960px)": { 
                      display: "none",
          },}
                }}
              >
                At Fast Clean Service we offer a wide range of services to keep your car in top condition to<span className="line-break">
          <br />
        </span> keep. From exterior to interior, we have the expertise and techniques to do each aspect of your vehicle.
              </Typography>

        <Box sx={{ position: "relative" }}>
          <OverCarServices />

          <RadialCircle bottom={"-22rem"} right={"-22rem"} />
          {/* <DecorativeBackgroundImage top="-15rem" right="-30rem" width="92rem" height="119rem" variant="2" /> */}
        </Box>

      </ServicesOverviewWrapper>
    </HomePkgsInBox>
  );
}
