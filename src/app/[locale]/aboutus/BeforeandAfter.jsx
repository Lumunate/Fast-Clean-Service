"use client";

import React, { useState, useEffect, useRef } from "react";
import {Box, Button, Link, Stack, styled, Typography} from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { useTheme } from "../../../contexts/themeContext";
import ar1 from "../../../../public/about/swipperImg/ar1.png";
import ar2 from "../../../../public/about/swipperImg/ar2.png";
import ar3 from "../../../../public/about/swipperImg/ar3.png";
import ar4 from "../../../../public/about/swipperImg/ar4.png";
import ar5 from "../../../../public/about/swipperImg/ar5.png";
import ar6 from "../../../../public/about/swipperImg/ar6.png";
import ar7 from "../../../../public/about/swipperImg/ar7.png";
import ar8 from "../../../../public/about/swipperImg/ar8.png";
import ar9 from "../../../../public/about/swipperImg/ar9.png";
import ar10 from "../../../../public/about/swipperImg/ar10.png";
import ar11 from "../../../../public/about/swipperImg/ar11.png";

import arb1 from "../../../../public/about/swipperImg/arb1.png";
import arb2 from "../../../../public/about/swipperImg/arb2.png";
import arb3 from "../../../../public/about/swipperImg/arb3.png";
import arb4 from "../../../../public/about/swipperImg/arb4.png";
import arb5 from "../../../../public/about/swipperImg/arb5.png";
import arb6 from "../../../../public/about/swipperImg/arb6.png";
import arb7 from "../../../../public/about/swipperImg/arb7.png";
import arb8 from "../../../../public/about/swipperImg/arb8.png";
import arb9 from "../../../../public/about/swipperImg/arb9.png";
import arb10 from "../../../../public/about/swipperImg/arb10.png";
import arb11 from "../../../../public/about/swipperImg/arb11.png";
import {useTranslations} from "next-intl";
import { Autoplay } from "swiper/modules";

const beforeAfterImages = [
    [ar1, ar7, ar2, ar3, ar10, ar4, ar5, ar6, ar8, ar9, ar11],
    [arb1, arb7, arb2, arb3, arb10, arb4, arb5, arb6, arb8, arb9, arb11],
];

const StyledImageBox = styled(Box)`
    width: 100%;
    height: 100%;
    border-radius: 40px;
    object-fit: cover;
    @media (max-width: 900px) {
        border-radius: 20px;
    }
`;

const SwiperContainer = styled(Box)`
    width: 100%;
    padding: 2rem 0;
 height: auto;
    margin-top: 9rem;

    @media (max-width: 900px) {
        margin-top: 2rem;
    }

    .swiper-slide {
        display: flex;
        justify-content: center;
        align-items: center;
    }
`;

const BeforeAfterSwiper = () => {
    const { theme } = useTheme();
    const t = useTranslations('about.gallery_section');
  const [slidesPerView, setSlidesPerView] = useState(3);
  const [boxSize, setBoxSize] = useState(600); // Default size
  const swiperRef = useRef(null);

  useEffect(() => {
    const updateBoxSize = () => {
      if (!swiperRef.current) return;

    const viewportHeight = window.innerHeight;
    const ninetyVH = window.innerWidth > 900 ? viewportHeight * 0.43 : viewportHeight * 0.35;
      const swiperWidth = swiperRef.current.clientWidth;
      let newSlidesPerView;
      if(swiperWidth < 900) {
        newSlidesPerView = swiperWidth / (ninetyVH + 16);
      } else {
        newSlidesPerView = swiperWidth / (ninetyVH + 16); 
      }

    setBoxSize(ninetyVH);
      setSlidesPerView(newSlidesPerView);
    };

    updateBoxSize(); // Set initial size
    window.addEventListener("resize", updateBoxSize);
    return () => window.removeEventListener("resize", updateBoxSize);
  }, []);

  return (
    <SwiperContainer ref={swiperRef}>
      {/* Before Images */}
      <Swiper
        modules={[Autoplay]}
        loop={true}
        autoplay={{
        delay: 3000,
        disableOnInteraction: false,
        }}
        spaceBetween={32}
        slidesPerView={slidesPerView} // Default for mobile
        allowTouchMove={true}
      >
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11].map((_, index) => (
          <SwiperSlide width={`${boxSize}px`} height={`${boxSize}px`} key={index}>
            <Stack sx={{
            }}>
              <Box
                sx={{
                  width: `${boxSize}px`,
                  height: `${boxSize}px`,
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <StyledImageBox component="img" src={beforeAfterImages[0][index].src} alt={`Before ${index + 1}`} loading="lazy" decoding="async"/>
              </Box>

              <Box sx={{ height: `32px` }} />

              <Box
                sx={{
                  width: `${boxSize}px`,
                  height: `${boxSize}px`,
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <StyledImageBox component="img" src={beforeAfterImages[1][index].src} alt={`After ${index + 1}`} loading="lazy" decoding="async" />
              </Box>
            </Stack>
          </SwiperSlide>
        ))}
      </Swiper>
        <Box
            sx={{
                width: "100%",
                marginTop: "2rem",
                "@media (max-width: 600px)": {
                    marginTop: "3rem",
                    padding: "2rem",
                },
                "@media (max-width: 1400px)": {
                    marginTop: "2rem",
                },
            }}
        >
            <Box
                sx={{
                    width: "100%",
                    margin: "0 auto",
                    textAlign: "center", // Ensure center alignment within the parent box
                }}
            >
                {/* Typography */}
                <Box
                    sx={{
                        marginBottom: "2rem", // Add spacing between the text and buttons
                    }}
                >
                    <Typography
                        variant="h6"
                        sx={{
                            color: theme.palette.text.primary,
                            fontWeight: 500,
                            fontSize: "1.55rem",
                            "@media (max-width: 600px)": {
                                fontSize: "1.4rem",
                            },
                        }}
                    >
                        {t("cta.text")}
                    </Typography>
                </Box>

                {/* Buttons */}
                <Box
                    sx={{
                        display: "flex",
                        justifyContent: "center",
                        gap: "2rem", // Gap between buttons
                        flexWrap: "wrap", // Wrap buttons on smaller screens
                    }}
                >
                    <Link href="/booking" passHref>
                        <Button
                            variant="contained"
                            sx={{
                                padding: "1.5rem 3rem",
                                fontSize: "1.5rem",
                                fontWeight: 500,
                                borderRadius: "50px",
                                backgroundColor: "primary.accentDark",
                                color: "white",
                                fontFamily: "DMSans",
                                "&:hover": {
                                    backgroundColor: theme.palette.primary.accent,
                                },
                            }}
                        >
                            {t("cta.buttons.book_now")}
                        </Button>
                    </Link>
                    <Link href="/aboutus" passHref>
                        <Button
                            variant="contained"
                            sx={{
                                padding: "1.5rem 3rem",
                                fontSize: "1.5rem",
                                fontWeight: 500,
                                borderRadius: "50px",
                                backgroundColor: "#B8B8B8",
                                color: "white",
                                fontFamily: "DMSans",
                                "&:hover": {
                                    backgroundColor: theme.palette.primary.accent,
                                },
                            }}
                        >
                            {t("cta.buttons.learn_more")}
                        </Button>
                    </Link>
                </Box>
            </Box>
        </Box>
    </SwiperContainer>
  );
};

export default BeforeAfterSwiper;
