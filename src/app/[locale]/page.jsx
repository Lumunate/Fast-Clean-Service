"use client";
import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/Home/footer/Footer";
import { HomeContainer, HomePkgsInBox } from "../../components/mui/HomePkgs";
import Stats from "../../components/Home/stats/Stats";
import AnimatedHomeContent from "../../components/Home/AnimatedHomeContent/AnimatedHomeContent";
import Testimonials from "../../components/Home/testimonials/Testimonials";
import ServicesOverview from "../../components/Home/ServicesOverview/ServicesOverview";
import About from "../../components/Home/about/About";
import Services from "../../components/Home/services/Services";
import Questions from "../../components/Home/faq";
import OverServiceOverview from "../../components/Home/overServices/OverServiceOverview"
import HowDoesItWork from "../../components/Home/howDoesItWork/HowDoesItWork";
import { Box } from "@mui/material";
import CallToActionBox from "../../components/Home/actioncard/CallToActionBox";
import DecorativeSpacer from "../../components/Decorative/Spacer";
import { DecorativeBackgroundImage, FoggyBackgroundImage } from "../../components/Decorative/Decorative.style";
import {useTranslations} from "next-intl";
import React, {Fragment} from "react";
import HeadingLinesAnimation from "../../components/Home/HeadingLinesAnimation/HeadingLinesAnimation";
import BeforeAfterSwiper from "./aboutus/BeforeandAfter";
import ServiceColumnGroup from "../../components/Home/ServicesOverview/ServiceColumnGroup";
import Autocare from "../../components/Home/ServicesOverview/AutoCare";

export default function Home() {
  const t = useTranslations('home');
  return (
      <>
          <Navbar/>
          <HomeContainer
              sx={{
                  position: "relative",
                  overflow: "hidden",
              }}
          >
              <Box
                  sx={{
                      backgroundColor: "primary.main",
                      zIndex: 10,
                      position: "relative",
                  }}
              >
                  <FoggyBackgroundImage top="10%" left="5%" width="600px" height="500px" rotate={-10}/>
                  <FoggyBackgroundImage top="30%" right="10%" width="700px" height="600px" rotate={5}/>
                  <FoggyBackgroundImage top="50%" left="15%" width="800px" height="600px" rotate={-15}/>
                  <FoggyBackgroundImage top="70%" right="5%" width="600px" height="500px" rotate={0}/>
                  <FoggyBackgroundImage top="85%" left="5%" width="800px" height="600px" rotate={5}/>

                  <AnimatedHomeContent/>
                  <About/>
                  <Stats/>

                  <DecorativeSpacer textBox1={t("decorativeText.text1")} textBox2={t("decorativeText.text2")}/>

                  <HowDoesItWork/>
                  <Box sx={{marginTop: { xs: "4rem", lg: "10rem"}}}>
                      <Box sx={{alignItems: "center", justifyContent: "center", display: "flex"}}>
                          <HeadingLinesAnimation>{t("gallery_section.title")}</HeadingLinesAnimation>
                      </Box>
                      <BeforeAfterSwiper />
                  </Box>

                  <Box sx={{marginTop: { xs: "4rem", lg: "10rem"}}}>
                      <Box sx={{alignItems: "center", justifyContent: "center", display: "flex"}}>
                        <HeadingLinesAnimation>{t("auto.title")}</HeadingLinesAnimation>
                      </Box>

                      <Box sx={{ position: "relative" }}>
                          <Autocare />
                      </Box>
                  </Box>

                  <Box sx={{marginTop: { xs: "4rem", lg: "10rem"}}}>
                    <OverServiceOverview/>
                  </Box>

                  <Box sx={{position: "relative"}}>
                      <Testimonials/>

                      <DecorativeBackgroundImage top="0rem" left="-40rem" width="92rem" height="68.2rem" flip={true}/>
                  </Box>

                  <ServicesOverview/>

                  <Box sx={{"@media (max-width: 700px)": {display: "none"}}}>
                      <DecorativeSpacer reversed textBox1={t("decorativeText.text3")} textBox2={t("decorativeText.text4")}/>
                  </Box>

                  <HomePkgsInBox sx={{margin: "0 auto", "@media (max-width: 1150px)": {width: "100%"}}}>
                      <Services/>
                  </HomePkgsInBox>

                  <Box sx={{"@media (max-width: 700px)": {display: "none"}}}>
                      <DecorativeSpacer textBox1={t("decorativeText.text5")}
                                        textBox2={t("decorativeText.text6")}/>
                  </Box>

                  <HomePkgsInBox sx={{margin: "0 auto", zIndex:'3' ,justifyContent: "center", "@media (max-width: 1150px)": {width: "100%"}}}>
                      <Questions/>
                  </HomePkgsInBox>

                  <HomePkgsInBox sx={{margin: "0 auto"}}>
                      {/* <Box
              sx={{
                margin: "0 auto",
              }}
            >
              <HeadingLinesAnimation
                sx={{
                  margin: "0 auto",
                  textAlign: "center",
                }}
              >
                HAPPY CLIENTS
              </HeadingLinesAnimation>
            </Box>

            <Testimonials /> */}
                      <DecorativeBackgroundImage top="-50rem" right="-40rem" width="92rem" height="68.2rem"/>
                      <DecorativeBackgroundImage top="80rem" left="-40rem" width="54rem" height="68rem" flip={true}/>
                  </HomePkgsInBox>

                  <CallToActionBox/>
              </Box>
              <Fragment></Fragment>
          </HomeContainer>

          <Box sx={{zIndex: 10, position: "relative"}}>
              <Footer/>
          </Box>
      </>
  );
}
