"use client";
import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/navigation";

// Import required Swiper modules
import { Autoplay, Navigation } from "swiper/modules";

// Import CSS module
import styles from "./PastClientSlider.module.css";
import { Typography } from "@mui/material";
import Image from "next/image";

const logos: string[] = [
  "/logo1.png",
  "/logo2.jpg",
  "/logo4.png",
  "/logo5.png",
  "/logo5.png",
  "/logo1.png",
  // Add more logos as needed
];

const PastClientSlider: React.FC = () => {
  return (
    <>
      <div className={styles.services}>
        <Typography
          variant="h2"
          sx={{
            fontSize: "5rem !important",
            alignItems: "center",
            textAlign: "center",
            fontWeight: "bold",
            margin: "50px ", // Space above and below the title
          }}
        >
          Worked with
        </Typography>
      </div>
      <Swiper
        loop={true}
        autoplay={{ delay: 2000 }} // Adjust the delay as needed
        slidesPerView={4} // Number of logos visible at once
        spaceBetween={30} // Spacing between logos
        modules={[Autoplay, Navigation]}
        className={styles.mySwiper}
      >
        {logos.map((logo, index) => (
          <SwiperSlide key={index} className={styles.swiperSlide}>
            <Image
              width={500}
              height={500}
              src={logo}
              alt={`Company Logo ${index + 1}`}
              className={styles.logo}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default PastClientSlider;
