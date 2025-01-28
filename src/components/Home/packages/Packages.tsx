"use client";
import React from "react";
import {Box, Typography} from "@mui/material";
// import styles from "./Packages.module.css";
import {HomePkgsInBox, PackagesSection} from "../../mui/HomePkgs";
// import VantaBackground from "../../Vanta/Vanta";
// import VANTA from "vanta/dist/vanta.net.min";
import Slider3D from "./Slider3D";

const Packages: React.FC = () => {
  // const [effect, setEffect] = useState(VANTA.NET);

  return (
    <div style={{ position: "relative" }}>
      {/* <VantaBackground effect={effect}></VantaBackground> */}
      <PackagesSection
        sx={{
          flexDirection: "column",
          alignItems: "center",
          position: "relative",
          zIndex: 1,
        }}
      >
        <HomePkgsInBox sx={{ flexDirection: "column", maxWidth: "100%" }}>
          <Box>
            <Typography
              variant="h2"
              sx={{
                fontSize: "6rem !important",
                alignItems: "center",
                textAlign: "center",
                fontWeight: "bold",
              }}
            >
              Our Packages
            </Typography>
          </Box>

          <Slider3D />
        </HomePkgsInBox>
      </PackagesSection>
    </div>
  );
}

export default Packages;