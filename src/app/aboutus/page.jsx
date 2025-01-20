"use client";
import {HomeWrapper} from "../../components/mui/HomePkgs";
import MeetTeam from "./MeetTeam";
import BackgroundSection from "./BackgroundSection";
import HowItWork from "../../components/Home/howitwork/HowItWork";
import CollabSection from "./CollabSection";
import CompServices from "./CompServices";
import ExpandableCards from "./ExpandableCards";
import { Box, Typography } from "@mui/material";
import Reviews from "../../components/Reviews/Reviews";
import HeadingLinesAnimation from "../../components/Home/HeadingLinesAnimation/HeadingLinesAnimation";
import CallToActionBox from "../../components/Home/actioncard/CallToActionBox";
import DecorativeSpacer from "../../components/Decorative/Spacer";
import { DecorativeBackgroundImage, FoggyBackgroundImage } from "../../components/Decorative/Decorative.style";

export default function AboutUs() {
  return (
    <Box sx={{marginTop: "15rem", "@media (max-width: 900px)": { marginTop: "8rem", }, }}>
        <Box sx={{alignItems: "center", justifyContent: "center", display: "flex"}}>
            <HeadingLinesAnimation>ABOUT</HeadingLinesAnimation>
        </Box>

        <BackgroundSection />

        <Box sx={{marginTop: "11.3rem"}}>
            <Box sx={{alignItems: "center", justifyContent: "center", display: "flex", marginBottom: "5rem", flexDirection: "column", "@media (max-width: 900px)": { marginBottom: "2rem" },}}>
                <HeadingLinesAnimation>DETAILING SHOP</HeadingLinesAnimation>
                <Box sx={{ padding: "0 5rem", }}>
                    <Typography
                        sx={{
                            fontSize: "1.6rem",
                            fontWeight: 400,
                            textAlign: "center",
                            margin: "2rem 0",
                        }}
                    >
                        Experience the ultimate in car care, available at our professional detailing shop
                    </Typography>
                </Box>
            </Box>
            <ExpandableCards />
        </Box>

        <Box sx={{marginTop: { xs: "4rem", lg: "12.1rem"}}}>
            <Box sx={{alignItems: "center", justifyContent: "center", display: "flex"}}>
                <HeadingLinesAnimation>Our Comprehensive Services</HeadingLinesAnimation>
            </Box>
            <CompServices />
        </Box>

      <HomeWrapper sx={{ marginTop: { xs: "4rem", lg: "8rem"} }}>
          <Box sx={{alignItems: "center", justifyContent: "center", display: "flex"}}>
              <HeadingLinesAnimation>MEET THE FOUNDER</HeadingLinesAnimation>
          </Box>
        <MeetTeam />
      </HomeWrapper>

        <Box sx={{ "@media (max-width: 700px)": { display: "none"}, }}><DecorativeSpacer reversed sx={{ display: { xs: "none", sm: "block"} }} /></Box>
        <Box sx={{marginTop: { xs: "4rem", lg: "8rem"}}}>
            <Box sx={{alignItems: "center", justifyContent: "center", display: "flex"}}>
                <HeadingLinesAnimation>TESTIMONIALS</HeadingLinesAnimation>
            </Box>
            <Reviews />
        </Box>
        <Box sx={{ "@media (max-width: 700px)": { display: "none"}, }}><DecorativeSpacer sx={{ display: { xs: "none", sm: "block"} }} /></Box>

        <Box sx={{marginTop: { xs: "4rem", lg: "8rem"}}}>
            <CallToActionBox hideImage={true} />
        </Box>
        <DecorativeBackgroundImage top="50rem" right="0" width="92rem" height="68.2rem" />
        <DecorativeBackgroundImage bottom="200rem" left="0" width="54rem" height="68rem" flip={true} />
    </Box>
  );
}
