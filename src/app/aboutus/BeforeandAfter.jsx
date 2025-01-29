"use client";

import React, { useState, useEffect, useRef } from "react";
import { Box, styled } from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

// Importing images manually
import ar1 from "../../../public/about/swipperImg/ar1.png";
import ar2 from "../../../public/about/swipperImg/ar2.png";
import ar3 from "../../../public/about/swipperImg/ar3.png";
import ar4 from "../../../public/about/swipperImg/ar4.png";
import ar5 from "../../../public/about/swipperImg/ar5.png";
import ar6 from "../../../public/about/swipperImg/ar6.png";
import ar7 from "../../../public/about/swipperImg/ar7.png";
import ar8 from "../../../public/about/swipperImg/ar8.png";
import ar9 from "../../../public/about/swipperImg/ar9.png";
import ar10 from "../../../public/about/swipperImg/ar10.png";
import ar11 from "../../../public/about/swipperImg/ar11.png";

import arb1 from "../../../public/about/swipperImg/arb1.png";
import arb2 from "../../../public/about/swipperImg/arb2.png";
import arb3 from "../../../public/about/swipperImg/arb3.png";
import arb4 from "../../../public/about/swipperImg/arb4.png";
import arb5 from "../../../public/about/swipperImg/arb5.png";
import arb6 from "../../../public/about/swipperImg/arb6.png";
import arb7 from "../../../public/about/swipperImg/arb7.png";
import arb8 from "../../../public/about/swipperImg/arb8.png";
import arb9 from "../../../public/about/swipperImg/arb9.png";
import arb10 from "../../../public/about/swipperImg/arb10.png";
import arb11 from "../../../public/about/swipperImg/arb11.png";

const beforeAfterImages = [
    [ar1, ar2, ar3, ar4, ar5, ar6, ar7, ar8, ar9, ar10, ar11],
    [arb1, arb2, arb3, arb4, arb5, arb6, arb7, arb8, arb9, arb10, arb11],
];

const StyledImageBox = styled(Box)`
    width: 100%;
    height: 100%;
    border-radius: 40px;
    object-fit: cover;
`;

const SwiperContainer = styled(Box)`
    width: 100%;
    padding: 2rem 0;

    /* Adjust margin-top based on screen size */
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
    const [boxSize, setBoxSize] = useState(300); // Default size
    const [spaceBetween, setSpaceBetween] = useState(30);
    const [gapBetweenSwipers, setGapBetweenSwipers] = useState(30);
    const swiperRef = useRef(null);

    useEffect(() => {
        const updateBoxSize = () => {
            if (!swiperRef.current) return;

            const swiperWidth = swiperRef.current.clientWidth;
            let slidesPerView = 2; // Default for mobile
            let newSpaceBetween = 30;
            let newGapBetweenSwipers = 30;

            if (swiperWidth < 600) {
                slidesPerView = 2;
                newSpaceBetween = 15;
                newGapBetweenSwipers = 15;
            } else if (swiperWidth >= 1400) {
                slidesPerView = 3.5;
            } else if (swiperWidth >= 1200) {
                slidesPerView = 3;
            } else if (swiperWidth >= 900) {
                slidesPerView = 2.5;
            } else if (swiperWidth >= 600) {
                slidesPerView = 2;
            }

            // Calculate the box size dynamically based on available width in the Swiper
            const newBoxSize = swiperWidth / slidesPerView - newSpaceBetween;
            setBoxSize(newBoxSize);
            setSpaceBetween(newSpaceBetween);
            setGapBetweenSwipers(newGapBetweenSwipers);
        };

        updateBoxSize(); // Set initial size
        window.addEventListener("resize", updateBoxSize);
        return () => window.removeEventListener("resize", updateBoxSize);
    }, []);

    return (
        <SwiperContainer ref={swiperRef}>
            {/* Before Images */}
            <Swiper
                spaceBetween={spaceBetween}
                slidesPerView={2} // Default for mobile
                breakpoints={{
                    600: { slidesPerView: 2 }, // Small screens
                    900: { slidesPerView: 2.5 }, // Tablets
                    1200: { slidesPerView: 3 }, // Desktops
                    1400: { slidesPerView: 3.5 }, // Large screens
                }}
                loop={false}
                allowTouchMove={true}
            >
                {beforeAfterImages[0].map((src, index) => (
                    <SwiperSlide key={index}>
                        <Box sx={{
                            width: `${boxSize}px`,
                            height: `${boxSize}px`,
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                        }}>
                            <StyledImageBox component="img" src={src.src} alt={`Before ${index + 1}`} />
                        </Box>
                    </SwiperSlide>
                ))}
            </Swiper>

            <Box sx={{ height: `${gapBetweenSwipers}px` }} />

            {/* After Images */}
            <Swiper
                spaceBetween={spaceBetween}
                slidesPerView={2} // Default for mobile
                breakpoints={{
                    600: { slidesPerView: 2 }, // Small screens
                    900: { slidesPerView: 2.5 }, // Tablets
                    1200: { slidesPerView: 3 }, // Desktops
                    1400: { slidesPerView: 3.5 }, // Large screens
                }}
                loop={false}
                allowTouchMove={true}
            >
                {beforeAfterImages[1].map((src, index) => (
                    <SwiperSlide key={index}>
                        <Box sx={{
                            width: `${boxSize}px`,
                            height: `${boxSize}px`,
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                        }}>
                            <StyledImageBox component="img" src={src.src} alt={`After ${index + 1}`} />
                        </Box>
                    </SwiperSlide>
                ))}
            </Swiper>
        </SwiperContainer>
    );
};

export default BeforeAfterSwiper;
