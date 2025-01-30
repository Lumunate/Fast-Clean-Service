"use client";
import React, { useEffect, useRef, useState } from "react";
import { useTheme } from "../../contexts/themeContext";
import { HomePkgsBox, HomePkgsInBox } from "../../components/mui/HomePkgs";
import { AutoTabContainer } from "../../components/mui/AutoCarePkgs";
import { Box, Button, Container, Link, ListItem, Stack, Typography } from "@mui/material";
import RadialCircle from "../Decorative/RadialCircle";
import { DecorativeBackgroundImage } from "../Decorative/Decorative.style";
import HeadingLinesAnimation from "../Home/HeadingLinesAnimation/HeadingLinesAnimation";
import { useAutocarePackages } from "../../hooks/useAutocarePackages";
import CheckMark from "../../../public/bookingFormIcons/CheckMark.svg";

import { options as autocarePackageTypes } from "../../app/autocare/data";
import Image from "next/image";

import bg1 from "../../../public/voor5.jpg";
import bg2 from "../../../public/voor9.jpg";
import bg3 from "../../../public/voor7.jpg";
import {
  SubscriptionCardBanner,
  SubscriptionCardContainer,
  SubscriptionCardContent,
  SubscriptionCardHeading,
  SubscriptionContentLabel,
  SubscriptionContentValue,
  UpdatedSubscriptionCardHeader,
} from "../mui/BookingFormPackages";

const BG_IMAGES = [bg1, bg2, bg3];
const COLORS = ["#5dfa48", "#0088ff", "#ffd02b"];

const AutoCare = () => {
  const { theme } = useTheme();
  const headerRef = useRef(null);
  const row2Ref = useRef(null);
  const row3Ref = useRef(null);

  const [selectedColor, setSelectedColor] = useState(null);
  const [selectedPackageType, setSelectedPackageType] = useState(null);
  const [displayedPackages, setDisplayedPackages] = useState(null);
  const [selectedPackage, setSelectedPackage] = useState(null);
  const [additionalOptions, setAdditionalOptions] = useState(null);

  const { packages, loading, error, fetchPackages } = useAutocarePackages();
  useEffect(() => {
    fetchPackages();
  }, [fetchPackages]);

  useEffect(() => {
    if (selectedPackageType && packages) {
      const allPackages = packages.packages[selectedPackageType?.name?.toString()?.toLowerCase()];
      let displayedPackages = allPackages ?? [];
      setDisplayedPackages(displayedPackages);

      console.log(displayedPackages, selectedPackageType, allPackages, packages);

      if (row2Ref.current) {
        row2Ref.current.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [selectedPackageType, packages]);

  useEffect(() => {
    if (selectedPackage && packages) {
      setAdditionalOptions([
        {
          name: "Interior",
          packages: selectedPackage.additionalOptions.interior,
        },
        {
          name: "Exterior",
          packages: selectedPackage.additionalOptions.exterior,
        },
        {
          name: "Detailing",
          packages: selectedPackage.additionalOptions.detailing,
        },
      ]);
      if (row3Ref.current) {
        row3Ref.current.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [selectedPackage, packages]);

  return (
    <Box
      sx={{
        position: "relative",
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
      {theme.palette.mode === "dark" && (
        <Box
          sx={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            zIndex: 0,
          }}
        />
      )}
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          marginBottom: "2rem",
          marginTop: "15rem",
          "@media (max-width: 600px)": { marginTop: "5rem" },
        }}
      >
        <HeadingLinesAnimation text=" Anywhere Auto Care" />
      </Box>

      <DecorativeBackgroundImage top={"50%"} right={"0"} width="90rem" height="65rem" sx={{ zIndex: "1" }} />
      <RadialCircle top={"20rem"} right={"20rem"} sx={{ width: "10rem !important", height: "10rem !important", zIndex: "1" }} />
      <RadialCircle top={"90%"} left={"20rem"} sx={{ width: "10rem !important", height: "10rem !important", zIndex: "1" }} />
      <HomePkgsBox
        ref={headerRef}
        sx={{
          position: "relative",
          padding: "5rem 5rem 5rem",
          "@media (max-width: 600px)": { padding: "0 5rem" },
        }}
      >
        <AutoTabContainer
          sx={{
            display: "flex",
            gap: "16px",
            justifyContent: "center",
            "@media (max-width: 1220px)": {
              flexDirection: "column",
              alignItems: "center",
            },
          }}
        >
          {autocarePackageTypes.map((pkg, index) => (
            <PackageTypeCards
              key={index}
              image={BG_IMAGES[index]}
              color={COLORS[index]}
              packageType={pkg.name}
              id={pkg.id}
              tagline={"aaa"}
              descriptionItems={[
                { label: "Price", value: pkg.price, highlighted: true },
                { label: "Duration", value: pkg.duration, highlighted: false },
              ]}
              onClick={() => {
                setSelectedPackageType(pkg);
                setSelectedColor(COLORS[index]);
              }}
            />
          ))}
        </AutoTabContainer>
      </HomePkgsBox>
      {selectedPackageType && displayedPackages?.length > 0 && (
        <HomePkgsBox
          ref={row2Ref}
          sx={{
            opacity: 0,
            animation: "fadeIn 1s ease-in-out forwards",
            position: "relative",
            padding: "5rem 5rem 5rem",
            "@media (max-width: 600px)": { padding: "0 5rem" },
          }}
        >
          <AutoTabContainer
            sx={{
              display: "flex",
              gap: "16px",
              height: "100%",
              alignItems: "flex-start",
              "@media (max-width: 1220px)": {
                flexDirection: "column",
              },
            }}
          >
            {displayedPackages.map((pkg, index) => (
              <PackageOptionsCards
                key={index}
                color={selectedColor}
                name={pkg.name}
                tagline={pkg.description}
                price={pkg.price}
                descriptionItems={pkg.packages}
                onClick={() => setSelectedPackage(pkg)}
              />
            ))}
          </AutoTabContainer>
        </HomePkgsBox>
      )}
      {additionalOptions && (
        <HomePkgsBox
          ref={row3Ref}
          sx={{
            opacity: 0,
            animation: "fadeIn 1s ease-in-out forwards",
            position: "relative",
            padding: "5rem 5rem 5rem",
            "@media (max-width: 600px)": { padding: "0 5rem" },
          }}
        >
          <AutoTabContainer
            sx={{
              display: "flex",
              gap: "16px",
              height: "100%",
              alignItems: "flex-start",
              "@media (max-width: 1220px)": {
                flexDirection: "column",
              },
            }}
          >
            {additionalOptions.map((pkg, index) => (
              <PackageAddOnsCards
                key={index}
                color={selectedColor}
                name={pkg.name}
                packageName={selectedPackageType.name}
                descriptionItems={pkg.packages}
              />
            ))}
          </AutoTabContainer>
        </HomePkgsBox>
      )}
    </Box>
  );
};

export default AutoCare;

const PackageTypeCards = ({ image, color, packageType, descriptionItems, onClick, selected }) => {
  const { theme } = useTheme();
  const parseNumbersFromString = (str) => {
    return str.replace("From ", "");
  };

  return (
    <SubscriptionCardContainer
      onClick={onClick}
      selected={selected}
      sx={{
        position: "relative",
        width: 392,
        height: 522,
        backgroundColor: theme.palette.mode === "dark" ? "rgba(255,255,255,0.01)" : "rgba(255,255,255,0.5)",
        border: `1px solid ${theme.palette.mode === "dark" ? "rgba(255,255,255,0.12)" : "white"}`,
        backdropFilter: "blur(10.4px)",
      }}
    >
      <SubscriptionCardBanner
        sx={{
          top: "3rem",
          left: "-8rem",
          padding: "0.5rem 9rem",
        }}
        color={color}
      >
        <SubscriptionCardHeading sx={{ fontSize: "1.8rem" }}>{packageType}</SubscriptionCardHeading>
      </SubscriptionCardBanner>

      <Box
        sx={{
          position: "relative",
          width: "100%",
          height: "50%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Box
          sx={{
            position: "absolute",
            backgroundColor: color,
            clipPath: "path('M -2 260 Q 500 50 400 500 L 520 -2 L -2 -2 Z')",
            // clipPath: "path('M -2 165 Q 200 80 250 200 L 220 -2 L -2 -2 Z')",
            top: 0,
            bottom: 0,
            right: 0,
            left: 0,
            opacity: "35%",
            zIndex: 10,
          }}
          className="highlight"
        />
        <Image
          src={image}
          alt="Subscription Package"
          layout="fill"
          style={{
            clipPath: "path('M -2 260 Q 500 50 400 500 L 520 -2 L -2 -2 Z')",
            boxShadow: "0px 4px 30.1px rgba(0, 0, 0, 0.25)",
          }}
        />
        <Typography
          sx={{
            position: "absolute",
            bottom: "10px",
            right: "10px",
            backgroundColor: color,
            borderRadius: "2px",
            padding: "1.5rem",
            zIndex: 20,
            fontFamily: "Unbounded",
            color: "#ffffff",
            fontSize: "2rem",
            fontWeight: "600",
            textAlign: "center",
            width: "40%",
          }}
          className="heading"
        >
          {packageType}
        </Typography>
      </Box>

      <SubscriptionCardContent
        sx={{
          margin: "7.8rem 5rem auto",
        }}
      >
        {descriptionItems &&
          descriptionItems.map((option, index) => (
            <Box key={index} className="content__row">
              <SubscriptionContentLabel sx={{ fontSize: "2.1rem !important" }}>{option.label}</SubscriptionContentLabel>
              <SubscriptionContentValue highlight={option.highlighted} sx={{ fontSize: "2.1rem !important" }} color={color}>
                {parseNumbersFromString(option.value)}
              </SubscriptionContentValue>
            </Box>
          ))}
      </SubscriptionCardContent>
    </SubscriptionCardContainer>
  );
};

const PackageOptionsCards = ({ color, name, tagline, descriptionItems, onClick, selected, price }) => {
  const { theme } = useTheme();
  return (
    <SubscriptionCardContainer
      onClick={onClick}
      selected={selected}
      sx={{
        width: 392,
        height: "100%",
        backgroundColor: theme.palette.mode === "dark" ? "rgba(255,255,255,0.01)" : "white",
        border: `1px solid ${theme.palette.mode === "dark" ? "rgba(255,255,255,0.12)" : "white"}`,
        backdropFilter: "blur(10.4px)",
      }}
    >
      <Stack
        gap={3}
        justifyContent={"space-between"}
        sx={{
          margin: "7.8rem 3rem 2.8rem",
        }}
      >
        <Stack gap={2}>
          <Typography
            sx={{
              fontSize: "36px !important",
              fontWeight: 400,
              lineHeight: "24px",
              textAlign: "left",
            }}
          >
            {name}
          </Typography>
          <Typography
            sx={{
              fontSize: "1.7rem !important",
              fontWeight: 300,
              lineHeight: "17.36px",
              textAlign: "left",
              marginBottom: "1rem",
            }}
          >
            {tagline}
          </Typography>
          <Typography
            sx={{
              fontSize: "3.8rem !important",
              fontWeight: 600,
              lineHeight: "24px",
              textAlign: "left",
              color: color,
            }}
          >
            {price}
          </Typography>

          <Stack>
            {descriptionItems &&
              descriptionItems.map((option, index) => (
                <Box key={index} sx={{ display: "flex", gap: 2, alignItems: "center" }}>
                  <Image src={CheckMark} alt="CheckMark" width="20px" height="20px" />
                  <SubscriptionContentLabel sx={{ fontSize: "1.4rem", lineHeight: "30px", fontWeight: "300" }}>
                    {option}
                  </SubscriptionContentLabel>
                </Box>
              ))}
          </Stack>
        </Stack>

        <Container sx={{ display: "flex", gap: 1, alignItems: "center" }}>
          <Link href="/booking" passHref>
            <Button
              variant="contained"
              sx={{
                padding: "1.5rem 3rem",
                fontSize: "1.4rem",
                fontWeight: "300",
                backgroundColor: "primary.accentDark",
                borderRadius: "50px",
                color: "white",
                fontFamily: "Unbounded",
                "&:hover": {
                  backgroundColor: "primary.accent",
                },
              }}
            >
              Book Now
            </Button>
          </Link>
          <Button
            variant="contained"
            sx={{
              padding: "1.5rem 3rem",
              fontSize: "1.4rem",
              minWidth: "116px",
              fontWeight: "300",
              backgroundColor: "#ECECEC",
              borderRadius: "50px",
              color: "#515151",
              fontFamily: "Unbounded",
              "&:hover": {
                backgroundColor: "primary.secondary",
              },
            }}
          >
            Addons
          </Button>
        </Container>
      </Stack>
    </SubscriptionCardContainer>
  );
};

const PackageAddOnsCards = ({ color, name, packageName, descriptionItems, selected }) => {
  const { theme } = useTheme();
  return (
    <SubscriptionCardContainer
      selected={selected}
      sx={{
        width: 392,
        height: "100%",
        backgroundColor: theme.palette.mode === "dark" ? "rgba(255,255,255,0.01)" : "white",
        border: `1px solid ${theme.palette.mode === "dark" ? "rgba(255,255,255,0.12)" : "white"}`,
        backdropFilter: "blur(10.4px)",
      }}
    >
      <Stack
        gap={3}
        justifyContent={"space-between"}
        sx={{
          margin: "7.8rem 3rem 2.8rem",
        }}
      >
        <Typography
          sx={{
            fontSize: "14px !important",
            fontWeight: 400,
            lineHeight: "17px",
            textAlign: "left",
            color: color,
          }}
        >
          {packageName}
        </Typography>
        <Typography
          sx={{
            fontSize: "3.6rem !important",
            fontWeight: 300,
            lineHeight: "24px",
            textAlign: "left",
            marginBottom: "1rem",
          }}
        >
          {name}
        </Typography>

        <Stack>
          {descriptionItems &&
            descriptionItems.map((option, index) => (
              <Box key={index} sx={{ display: "flex", gap: 2, alignItems: "center", justifyContent: "space-between" }}>
                <Box key={index} sx={{ display: "flex", gap: 2, alignItems: "center" }}>
                  <Image src={CheckMark} alt="CheckMark" width="20px" height="20px" />
                  <SubscriptionContentLabel sx={{ fontSize: "1.4rem", lineHeight: "30px", fontWeight: "300" }}>
                    {option.name}
                  </SubscriptionContentLabel>
                </Box>
                <SubscriptionContentLabel
                  sx={{
                    fontSize: "1.4rem",
                    lineHeight: "30px",
                    fontWeight: "300",
                    color: color,
                    minWidth: "55px",
                    textAlign: "right",
                  }}
                >
                  € {option.additionalCost}
                </SubscriptionContentLabel>
              </Box>
            ))}
        </Stack>
      </Stack>
    </SubscriptionCardContainer>
  );
};
