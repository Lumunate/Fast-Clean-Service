"use client";
import {HomeWrapper} from "../../../components/mui/HomePkgs";
import MeetTeam from "./MeetTeam";
import BackgroundSection from "./BackgroundSection";
import ValueProposition from "./GeneralComp";
import HowItWork from "../../../components/Home/howitwork/HowItWork";
import CollabSection from "./CollabSection";
import CompServices from "./CompServices";
import ExpandableCards from "./ExpandableCards";
import BeforeAfterSwiper from "./BeforeandAfter";
import { Box, Typography } from "@mui/material";
import Reviews from "../../../components/Reviews/Reviews";
import HeadingLinesAnimation from "../../../components/Home/HeadingLinesAnimation/HeadingLinesAnimation";
import CallToActionBox from "../../../components/Home/actioncard/CallToActionBox";
import DecorativeSpacer from "../../../components/Decorative/Spacer";
import { DecorativeBackgroundImage, FoggyBackgroundImage } from "../../../components/Decorative/Decorative.style";
import {useTranslations} from "next-intl";

export default function AboutUs() {
    const t = useTranslations('about');
  return (
    <Box sx={{marginTop: "15rem", "@media (max-width: 900px)": { marginTop: "8rem", } }}>
        <Box sx={{alignItems: "center", justifyContent: "center", display: "flex", maxWidth:"1130px", margin:"0 auto" }}>
            <HeadingLinesAnimation sx={{fontSize:"56px"}}>{t("title")}</HeadingLinesAnimation>
        </Box>

        <BackgroundSection />

        <Box sx={{marginTop: { xs: "4rem", lg: "10rem"}}}>
            <ValueProposition />
        </Box>

        <Box sx={{marginTop: "11.3rem"}}>
            <Box sx={{alignItems: "center", justifyContent: "center", display: "flex", marginBottom: "5rem", flexDirection: "column", "@media (max-width: 900px)": { marginBottom: "2rem" },}}>
                <HeadingLinesAnimation>{t("detailing_shop.title")}</HeadingLinesAnimation>
                <Box sx={{ padding: "0 5rem", }}>
                    <Typography
                        sx={{
                            fontSize: "1.6rem",
                            fontWeight: 400,
                            textAlign: "center",
                            margin: "2rem 0",
                        }}
                    >
                        {t("detailing_shop.description")}
                    </Typography>
                </Box>
            </Box>
            <ExpandableCards />
        </Box>

      <HomeWrapper sx={{ marginTop: { xs: "4rem", lg: "10rem"} }}>
          <Box sx={{alignItems: "center", justifyContent: "center", display: "flex"}}>
              <HeadingLinesAnimation>{t("founder_section.title")}</HeadingLinesAnimation>
          </Box>
        <MeetTeam />
      </HomeWrapper>

        <Box sx={{marginTop: { xs: "4rem", lg: "10rem"}}}>
            <Box sx={{alignItems: "center", justifyContent: "center", display: "flex"}}>
                <HeadingLinesAnimation>{t("gallery_section.title")}</HeadingLinesAnimation>
            </Box>
            <BeforeAfterSwiper />
        </Box>

        <Box sx={{ "@media (max-width: 700px)": { display: "none"}, }}><DecorativeSpacer textBox1={t("decorativeText.text1")} textBox2={t("decorativeText.text2")} reversed sx={{ display: { xs: "none", sm: "block"} }} /></Box>
        <Box sx={{marginTop: { xs: "4rem", lg: "10rem"}}}>
            <Box sx={{alignItems: "center", justifyContent: "center", display: "flex"}}>
                <HeadingLinesAnimation>{t("testimonials.title")}</HeadingLinesAnimation>
            </Box>
            <Reviews />
        </Box>
        <Box sx={{ "@media (max-width: 700px)": { display: "none"}, }}><DecorativeSpacer textBox1={t("decorativeText.text3")}
                                                                                         textBox2={t("decorativeText.text4")} sx={{ display: { xs: "none", sm: "block"} }} /></Box>

        <Box sx={{marginTop: { xs: "4rem", lg: "2rem"}}}>
            <CallToActionBox hideImage={true} />
        </Box>
        <DecorativeBackgroundImage top="50rem" right="0" width="92rem" height="68.2rem" />
        <DecorativeBackgroundImage bottom="200rem" left="0" width="54rem" height="68rem" flip={true} />
    </Box>
  );
}
