import Image from "next/image";
import styleHome from "../../../app/[locale]/Home.module.css";
import { Box, Button, Typography } from "@mui/material";
import {
  HomePkgsBox,
  HomeBlueBtn,
  HomeBlueBanner,
  HomePkgsInBox,
  HomePkgBox,
  HomeCollageCtr,
  HomeBlueLink,
} from "../../mui/HomePkgs";
import Link from "next/link";

export default function Footer() {
  return (
    <>
      <HomePkgsBox sx={{ flexDirection: "column", padding: 0 }}>
        <HomeBlueBanner
          sx={{
            width: "100%",
            backgroundImage: `url(
    "/fast-cleaning-service-achtergrond.jpg"
  )`,
          }}
        >
          <Box
            sx={{
              backgroundImage: `linear-gradient(
                  #0066bf81,
                  #0066bf81)`,
              padding: "3rem",
              margin: 0,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Typography
              sx={{ fontSize: "4rem !important", fontWeight: "bold" }}
            >
              NEEM CONTACT MET ONS OP{" "}
            </Typography>
            <Typography sx={{ fontSize: "2rem" }}>
              Dé schoonmaakservice voor uw voertuig die bij u op locatie komt.{" "}
            </Typography>
            <Link
              href="/"
              target="_blank"
              rel="noopener noreferrer"
              style={{ width: "100%", marginTop: "2rem" }}
            >
              <HomeBlueBtn sx={{ mb: 0 }}>Contact ons</HomeBlueBtn>
            </Link>
          </Box>
        </HomeBlueBanner>
        <HomePkgsBox
          sx={{
            padding: "1rem",
            justifyContent: "space-around",
            alignItems: "center",
          }}
        >
          <HomeCollageCtr
            sx={{
              height: "150px",
              width: "150px",
              flexBasis: "auto",
              "& img": { objectFit: "contain" },
            }}
          >
            <Image src="/logo.png" alt="img" width={200} height={200} />
          </HomeCollageCtr>
          <Typography>
            {" "}
            Copyright © 2024 Fast Clean Service. Deze website is gebouwd door{" "}
            <Link href="/">
              <HomeBlueLink sx={{ display: "inline" }}>
                Fast Clean Service
              </HomeBlueLink>
            </Link>{" "}
            |{" "}
            <Link href="/">
              <HomeBlueLink sx={{ display: "inline" }}>
                Algemene voorwaarden
              </HomeBlueLink>
            </Link>{" "}
          </Typography>
          <HomeCollageCtr
            sx={{
              height: "150px",
              width: "150px",
              flexBasis: "auto",
              "& img": {
                objectFit: "contain",
                transition: "none",
              },
            }}
          >
            <Image
              src="/trustpilot-logo.png"
              alt="img"
              width={200}
              height={200}
            />
          </HomeCollageCtr>
        </HomePkgsBox>
      </HomePkgsBox>
    </>
  );
}
