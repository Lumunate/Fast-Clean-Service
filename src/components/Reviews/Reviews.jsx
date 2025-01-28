"use client";
import React, { useEffect, useState } from "react";
import { Box, useMediaQuery, styled } from "@mui/material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import {
    CarouselDate,
    CarouselDetails,
    CarouselImg,
    CarouselItemInner,
    CarouselName,
    CarouselSignatures,
    CarouselStarsBox,
} from "../mui/HomePkgs";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/autoplay";
import { Autoplay } from "swiper/modules";

const testimonials = [
    {
        stars: 5,
        name: "Igor Dotsenko",
        details:
            "I ordered exterior washing a few times already. Both times washerman arrived in time and did the work very well and professionally.",
        image: "https://swiperjs.com/demos/images/nature-1.jpg",
        date: "30/01/24",
        socialIcons: [
            { icon: "/Trustpilot.png", alt: "Green Star" },
        ]
    },
    {
        stars: 5,
        name: "Jane Smith",
        details: "They catered to the delicate paint job and i hope to come back in the future",
        image: "https://swiperjs.com/demos/images/nature-2.jpg",
        date: "30/01/24",
        socialIcons: [
            { icon: "/Google.png", alt: "Google" },
        ]
    },
    {
        stars: 5,
        name: "Katherina",
        details: "Very professional service, prompt response and flexible. We’d definitely recommend. ",
        image: "https://swiperjs.com/demos/images/nature-3.jpg",
        date: "30/01/24",
        socialIcons: [
            { icon: "/Trustpilot.png", alt: "Green Star" },
        ]
    },
    {
        stars: 4,
        name: "Steven",
        details:
            "It took a little time but was a near perfect job. They are passionate about detailing, always friendly but most importantly do an amazing job.",
        image: "https://swiperjs.com/demos/images/nature-3.jpg",
        date: "30/01/24",
        socialIcons: [
            { icon: "/Google.png", alt: "Google" },
        ]
    },
    {
        stars: 3,
        name: "Alex Johnson",
        details: "A great experience overall. Exceeded my expectations.",
        image: "https://swiperjs.com/demos/images/nature-3.jpg",
        date: "30/01/24",
        socialIcons: [
            { icon: "/Trustpilot.png", alt: "Green Star" },
        ]
    },
    {
        stars: 3,
        name: "Alex Johnson",
        details: "A great experience overall. Exceeded my expectations.",
        image: "https://swiperjs.com/demos/images/nature-3.jpg",
        date: "30/01/24",
        socialIcons: [
            { icon: "/Google.png", alt: "Google" },
        ]
    },
    // Add more testimonials as needed
];

// Styled components (you can keep your existing styles or adjust as needed)
const StyledCarouselItemInner = styled(CarouselItemInner)(({ theme }) => ({
    height: "27rem",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    padding: "3rem",
    borderRadius: "10px",
    backgroundColor: theme.palette.mode === "light" ? "rgba(255,255,255,0.8)" : "#141414CC",
    boxShadow: "0 4px 15px rgba(0, 0, 0, 0.1)",

    margin: "1rem 0",
}));

export default function Reviews() {
    const isBelow900px = useMediaQuery("(max-width: 900px)");

    const [testimonailsPerView, setTestimonailsPerView] = useState(Math.floor(window.innerWidth / 300));
    useEffect(() => {
      if (window.innerWidth < 600) {
        setTestimonailsPerView(1.2);
      } else {
        setTestimonailsPerView(Math.floor(window.innerWidth / 600));
      }
    }, [window.innerWidth]); 

    const renderTestimonial = (testimonial, index) => {
        return (
            <StyledCarouselItemInner key={index}>
                <CarouselStarsBox
                    sx={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                        width: "100%",
                    }}
                >
                    <Box sx={{ display: "flex", alignItems: "center" }}>
                        {Array.from({ length: 5 }, (_, i) => (
                            <FontAwesomeIcon
                                icon={faStar}
                                key={i}
                                className={`${i < testimonial?.stars ? "colorstar" : ""}`}
                            />
                        ))}
                    </Box>

                    <Box
                        component="img"
                        src="/SVG.png"
                        alt="Decorative SVG"
                        sx={{
                            width: "37px",
                            height: "26px",
                        }}
                    />
                </CarouselStarsBox>

                <CarouselDetails>
                    <p>{testimonial.details?.slice(0, 300)}{testimonial.details.length > 300 ? "..." : ""}</p>  
                </CarouselDetails>
                <CarouselSignatures
                    sx={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                        width: "100%",
                    }}
                >
                    <Box sx={{ display: "flex", alignItems: "center" }}>
                        <CarouselImg
                            src={testimonial.image}
                            style={{
                                width: isBelow900px ? "30px" : "50px",
                                height: isBelow900px ? "30px" : "50px",
                            }}
                        />
                        <Box sx={{ marginLeft: "1rem" }}>
                            <CarouselName>{testimonial.name}</CarouselName>
                            <CarouselDate>{testimonial.date}</CarouselDate>
                        </Box>
                    </Box>

                    <Box sx={{ display: "flex", gap: "0.5rem" }}>
                        {testimonial.socialIcons.map((iconObj, idx) => (
                            <Box
                                component="img"
                                key={idx}
                                src={iconObj.icon}
                                alt={iconObj.alt}
                                sx={{
                                    width: "50px",
                                    height: "50px",
                                }}
                            />
                        ))}
                    </Box>
                </CarouselSignatures>
            </StyledCarouselItemInner>
        );
    };

    return (
      <Box sx={{ width: "100%", padding: "2rem 0" }}>
        <Box sx={{ minHeight: "250px" }}>
          <Swiper
            sx={{
              "& .swiper": {
                minHeight: "250px",
                overflow: "unset",
              },
            }}
            modules={[Autoplay]}
            spaceBetween={20}
            slidesPerView={testimonailsPerView}
            loop={true}
            autoplay={{ delay: 0, disableOnInteraction: false, reverseDirection: true }}
            speed={5000}
            
            allowTouchMove={false}
         
          >
            {testimonials.map((testimonial, index) => (
              <SwiperSlide key={index}>{renderTestimonial(testimonial, index)}</SwiperSlide>
            ))}
          </Swiper>
        </Box>
        <Box sx={{ minHeight: "250px" }}>
          <Swiper
          sx={{
            "& .swiper": {
              minHeight: "250px",
              overflow: "unset",
            },
          }}
            modules={[Autoplay]}
            spaceBetween={20}
            slidesPerView={testimonailsPerView}
            loop={true}
            autoplay={{ delay: 0, disableOnInteraction: false }}
            speed={5000}
            allowTouchMove={false}
            
          >
            {testimonials.map((testimonial, index) => (
              <SwiperSlide key={index}>{renderTestimonial(testimonial, index)}</SwiperSlide>
            ))}
          </Swiper>
        </Box>
      </Box>
    );
}