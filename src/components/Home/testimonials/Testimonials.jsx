"use client";
import React, { useRef, useState, useEffect, useLayoutEffect } from "react";
import {
    Carousel,
    CarouselBtn,
    CarouselContentContainer,
    CarouselContentItem,
    CarouselControls,
    CarouselDate,
    CarouselDetails,
    CarouselImg,
    CarouselItemInner,
    CarouselName,
    CarouselSignatures,
    CarouselStarsBox,
    HomePkgsBox,
    HomePkgsInBox,
} from "../../mui/HomePkgs";
import { Box } from "@mui/material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft, faChevronRight, faStar } from "@fortawesome/free-solid-svg-icons";

const testimonials = [
    {
        stars: 5,
        name: "Igor Dotsenko",
        details:
            "I ordered exterior washing a few times already. Both times washerman arrived in time and did the work very well and professionally.",
        image: "https://swiperjs.com/demos/images/nature-1.jpg",
        date: "30/01/24",
        socialIcons: [{ icon: "/Trustpilot.png", alt: "Trustpilot" }],
    },
    {
        stars: 5,
        name: "Jane Smith",
        details:
            "They catered to the delicate paint job and i hope to come back in the future",
        image: "https://swiperjs.com/demos/images/nature-2.jpg",
        date: "30/01/24",
        socialIcons: [{ icon: "/Google.png", alt: "Google" }],
    },
    {
        stars: 5,
        name: "Katherina",
        details:
            "Very professional service, prompt response and flexible. We’d definitely recommend.",
        image: "https://swiperjs.com/demos/images/nature-3.jpg",
        date: "30/01/24",
        socialIcons: [{ icon: "/Trustpilot.png", alt: "Trustpilot" }],
    },
    {
        stars: 4,
        name: "Steven",
        details:
            "It took a little time but was a near perfect job. They are passionate about detailing, always friendly but most importantly do an amazing job.",
        image: "https://swiperjs.com/demos/images/nature-3.jpg",
        date: "30/01/24",
        socialIcons: [{ icon: "/Google.png", alt: "Google" }],
    },
    {
        stars: 3,
        name: "Alex Johnson",
        details: "A great experience overall. Exceeded my expectations.",
        image: "https://swiperjs.com/demos/images/nature-3.jpg",
        date: "30/01/24",
        socialIcons: [{ icon: "/Trustpilot.png", alt: "Trustpilot" }],
    },
    {
        stars: 3,
        name: "Alex Johnson",
        details: "A great experience overall. Exceeded my expectations.",
        image: "https://swiperjs.com/demos/images/nature-3.jpg",
        date: "30/01/24",
        socialIcons: [{ icon: "/Google.png", alt: "Google" }],
    },
];

export default function Testimonials() {
    const sliderRef = useRef(null);

    const [activeStep, setActiveStep] = useState(0);
    const [activeHeight, setActiveHeight] = useState("auto");
    const [isLargeScreen, setIsLargeScreen] = useState(false);

    useEffect(() => {
        setIsLargeScreen(window.innerWidth > 1100);

        const handleResize = () => {
            setIsLargeScreen(window.innerWidth > 1100);
        };
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    useLayoutEffect(() => {
        if (sliderRef.current) {
            const children = sliderRef.current.childNodes;
            let height = 0;
            let indexActive = null;

            children.forEach((el, index) => {
                const list = Array.from(el.classList);
                let tempHeight = 0;
                if (list.includes("active")) indexActive = index;

                if (list.includes("active") || index === indexActive + 1) {
                    for (let i = 0; i < el.children.length; i++) {
                        tempHeight += el.children[i].offsetHeight;
                    }
                }
                if (height < tempHeight) height = tempHeight;
            });

            setActiveHeight(`${height + 70}px`);
        }
    }, [activeStep]);

    const handleNext = () => {
        setActiveStep((prev) =>
            prev === testimonials.length - 1 ? 0 : prev + 1
        );
    };
    const handleBack = () => {
        setActiveStep((prev) =>
            prev === 0 ? testimonials.length - 1 : prev - 1
        );
    };

    return (
        <HomePkgsBox
            sx={{
                margin: "0 auto",
                position: "relative",
                backgroundColor: "transparent",
                padding: "2rem",
            }}
        >
            <HomePkgsInBox
                sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    position: "relative",
                    "@media (max-width: 1150px)": {
                        width: "100%",
                    },
                }}
            >
                <Carousel
                    sx={{
                        width: "90%",
                        "@media (max-width: 1200px)": { width: "100%" },
                    }}
                >
                    <CarouselContentContainer
                        ref={sliderRef}
                        sx={{
                            display: "flex",
                            transition: "all 600ms ease-in-out",
                            marginBottom: "3rem",
                            height: activeHeight,
                        }}
                    >
                        {testimonials.map((testimonial, index) => {
                            const isActive = activeStep === index;
                            const isActiveNext =
                                isLargeScreen &&
                                (activeStep + 1) % testimonials.length === index;

                            return (
                                <CarouselContentItem
                                    key={index}
                                    className={isActive || isActiveNext ? "active" : ""}
                                    sx={{
                                        display: "flex",
                                        flexDirection: "column",
                                        transition: "opacity 600ms ease-in-out",
                                        width: isLargeScreen ? "50%" : "100%",
                                        opacity: isActive || isActiveNext ? 1 : 0,
                                        visibility:
                                            isActive || isActiveNext ? "visible" : "hidden",
                                        position:
                                            isActive || isActiveNext ? "relative" : "absolute",
                                        background: "none",
                                        border: "none",
                                        alignSelf: "flex-start",
                                        justifyContent: "stretch",
                                    }}
                                >
                                    <CarouselItemInner
                                        sx={{
                                            padding: "2rem",
                                            borderRadius: "20px",
                                            backgroundColor: (theme) =>
                                                theme.palette.mode === "light"
                                                    ? "rgba(255, 255, 255, 0.8)"
                                                    : "rgba(0, 0, 0, 0.6)",
                                        }}
                                    >
                                        <CarouselStarsBox
                                            sx={{
                                                display: "flex",
                                                alignItems: "center",
                                                paddingBottom: "1rem",
                                                "& svg": {
                                                    fontSize: "1.4rem",
                                                    marginRight: "0.3rem",
                                                    color: "gold",
                                                },
                                            }}
                                        >
                                            {Array.from({ length: 5 }, (_, i) => (
                                                <FontAwesomeIcon
                                                    icon={faStar}
                                                    key={i}
                                                    className={
                                                        i < testimonial.stars ? "colorstar" : ""
                                                    }
                                                />
                                            ))}
                                        </CarouselStarsBox>

                                        <CarouselDetails>
                                            <p>{testimonial.details}</p>
                                        </CarouselDetails>

                                        <CarouselSignatures
                                            sx={{
                                                display: "flex",
                                                justifyContent: "space-between",
                                                alignItems: "center",
                                                marginTop: "1rem",
                                            }}
                                        >
                                            <Box sx={{ display: "flex", alignItems: "center" }}>
                                                <CarouselImg
                                                    src={testimonial.image}
                                                    alt={testimonial.name}
                                                    style={{
                                                        width: "50px",
                                                        height: "50px",
                                                        borderRadius: "50%",
                                                        objectFit: "cover",
                                                    }}
                                                />
                                                <Box sx={{ marginLeft: "1rem" }}>
                                                    <CarouselName>{testimonial.name}</CarouselName>
                                                    <CarouselDate>{testimonial.date}</CarouselDate>
                                                </Box>
                                            </Box>

                                            <Box sx={{ display: "flex", gap: "0.5rem" }}>
                                                {testimonial.socialIcons?.map((iconObj, idx) => (
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
                                    </CarouselItemInner>
                                </CarouselContentItem>
                            );
                        })}
                    </CarouselContentContainer>
                </Carousel>

                <CarouselControls>
                    <CarouselBtn onClick={handleBack} sx={{ left: "-8rem", "@media (max-width: 1700px)": { left: "0rem" }, "@media (max-width: 1200px)": { left: "-6rem" }, "@media (max-width: 600px)": { left: "-2rem" }, }}>
                        <FontAwesomeIcon icon={faChevronLeft} />
                    </CarouselBtn>

                    <CarouselBtn onClick={handleNext} sx={{ right: "-8rem", "@media (max-width: 1700px)": { right: "0rem" }, "@media (max-width: 1200px)": { right: "-6rem" }, "@media (max-width: 600px)": { right: "-2rem" }, }}>
                        <FontAwesomeIcon icon={faChevronRight} />
                    </CarouselBtn>
                </CarouselControls>
            </HomePkgsInBox>
        </HomePkgsBox>
    );
}
