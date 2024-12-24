"use client";
import React, {useLayoutEffect, useRef, useState} from "react";
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
    SectionHeadingCentered,
} from "../../mui/HomePkgs";
import {Box, useMediaQuery} from "@mui/material";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faChevronLeft, faChevronRight, faStar, faQuoteRight} from "@fortawesome/free-solid-svg-icons";
import { useTheme } from "../../../contexts/themeContext";
import HeadingLinesAnimation from "../HeadingLinesAnimation/HeadingLinesAnimation";

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

export default function Testimonials() {
    const sliderRef = useRef(null);
    const [activeStep, setActiveStep] = useState(0);
    const [activeHeight, setActiveHeight] = useState("auto");
    const isBelow900px = useMediaQuery("(max-width: 900px)");

    const transitionStyles = (curIndex, activeNum = 0) => {
        const centerNum = 100 * curIndex;
        const rightNum = curIndex === (activeNum + 1) % testimonials.length ? centerNum * -1 + 100 : centerNum * 0 + 100;
        const leftNum =
            curIndex < activeNum && activeNum !== 1 && activeNum !== 2 && (curIndex === 0 || curIndex === 1)
                ? centerNum * 2 + 100
                : centerNum * -1 - 100;

        const opacity = curIndex === activeNum || curIndex === (activeNum + 1) % testimonials.length ? 1 : 0;

        const styles = {
            left: { opacity: opacity, transform: `translateX(${leftNum}%)` },
            center: {
                opacity: opacity,
                transform: `translateX(${centerNum !== 0 ? "-" : ""}${centerNum}%)`,
            },
            right: { opacity: opacity, transform: `translateX(${rightNum}%)` },
        };

        return styles;
    };

    useLayoutEffect(() => {
        if (sliderRef.current) {
            const children = sliderRef.current.childNodes;
            let height = 0;
            let indexActive = null;

            children.forEach((el, index) => {
                const list = Array.from(el.classList);
                let tempHeight = 0;
                if (list.includes("active")) indexActive = index;
                if (list.includes("active") || index === indexActive + 1)
                    for (let i = 0; i < el.children.length; i++) {
                        tempHeight += el.children[i].offsetHeight;
                    }
                if (height < tempHeight) height = tempHeight;
            });
            setActiveHeight(`${height + 30}px`);
        }
    }, [activeStep]);

    const handleNext = () => {
        setActiveStep((prevActiveStep) => (prevActiveStep === testimonials.length - 1 ? 0 : prevActiveStep + 1));
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => (prevActiveStep === 0 ? testimonials.length - 1 : prevActiveStep - 1));
    };

    const { theme } = useTheme();

    return (
      <HomePkgsBox
        sx={{
          margin: "0 auto",
          position: "relative",
          backgroundColor: "transparent",
        }}
      >
        {theme.palette.mode === "dark" && (
          <Box
            sx={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "90%",
              height: "100%",
              zIndex: 0,
            }}
          />
        )}

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
          <Carousel sx={{ width: "90%", "@media (max-width: 1024px)": {width: "100%",}, }}>
            <CarouselContentContainer
              ref={sliderRef}
              sx={{
                height: activeHeight,
                width: `${testimonials.length * 100}%`,
              }}
            >
              {testimonials.map((testimonial, index) => {
                return (
                  <CarouselContentItem
                    key={index}
                    className={`${activeStep === index ? "active" : ""}`}
                    sx={{
                      width: isBelow900px ? "100%" : `${100 / testimonials.length / 2}%`,
                      ...(activeStep === 0 && index === testimonials.length - 1
                        ? transitionStyles(index, activeStep)["left"]
                        : activeStep === testimonials.length - 1 && index === 0
                        ? transitionStyles(index, activeStep)["right"]
                        : transitionStyles(index, activeStep)[
                            activeStep > index ? "left" : activeStep === index ? "center" : "right"
                          ]),
                      background: "none",
                      border: "none",
                      alignSelf: "flex-start",
                      justifyContent: "stretch",
                      height: isBelow900px ? "200px" : "290px",
                    }}
                  >
                    <CarouselItemInner>
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
                            <FontAwesomeIcon icon={faStar} key={i} className={`${i < testimonial?.stars ? "colorstar" : ""}`} />
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
                        <p>{testimonial.details}</p>
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
                    </CarouselItemInner>
                  </CarouselContentItem>
                );
              })}
            </CarouselContentContainer>
          </Carousel>
          <CarouselControls>
            <CarouselBtn onClick={handleBack} sx={{ left: "-8rem" }}>
              <FontAwesomeIcon icon={faChevronLeft} />
            </CarouselBtn>
            <CarouselBtn onClick={handleNext} sx={{ right: "-8rem" }}>
              <FontAwesomeIcon icon={faChevronRight} />
            </CarouselBtn>
          </CarouselControls>
        </HomePkgsInBox>
      </HomePkgsBox>
    );
}