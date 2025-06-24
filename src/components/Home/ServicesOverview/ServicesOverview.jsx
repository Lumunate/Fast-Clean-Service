import React from "react";
import { HomePkgsInBox, ServicesOverviewWrapper } from "../../mui/HomePkgs";
import CarService from "./CarService";
import CamperService from "./CamperService";
import Autocare from "./AutoCare";
import HeadingLinesAnimation from "../HeadingLinesAnimation/HeadingLinesAnimation";
import ServiceColumnGroup from "./ServiceColumnGroup";
import LongTermVehicleCare from "./LongTermVehicleCare";
import RadialCircle from "../../Decorative/RadialCircle";
import { Box } from "@mui/material";
import { DecorativeBackgroundImage } from "../../Decorative/Decorative.style";
import {useTranslations} from "next-intl";

export default function ServicesOverview() {
  const t = useTranslations('home.packages_section');

  return (
    <HomePkgsInBox
      sx={{ 
        margin: "0 auto",
        "@media (max-width: 1200px)": { width: "100%" },
        marginTop:"14rem",
        "@media (max-width: 600px)": { marginTop: "4rem" },
      }}
    >
      <ServicesOverviewWrapper>
        <HeadingLinesAnimation sx={{ width: "50%", marginBottom: "7rem" }}>{t("title")}</HeadingLinesAnimation>

        <Box sx={{ position: "relative" }}>
          <CarService />

          <RadialCircle bottom={"-22rem"} right={"-22rem"} />
          <DecorativeBackgroundImage top="-15rem" right="-30rem" width="92rem" height="119rem" variant="2" />
        </Box>
          <ServiceColumnGroup />

        <CamperService />
      </ServicesOverviewWrapper>

      <Box sx={{ margin: "0 auto" }}>
        <LongTermVehicleCare />
      </Box>
    </HomePkgsInBox>
  );
}
