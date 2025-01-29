"use client";
import React, {useRef, useState} from "react";
import {
    Carousel,
    CarouselContentContainer,
    CarouselContentItem,
    CarouselControls,
    CarouselDate,
    CarouselDetails,
    CarouselDot,
    CarouselName,
    CarouselSignatures,
} from "../../../components/mui/AboutPkgs";
import {Box} from "@mui/material";

const testimonials = [
  {
    name: "John Doe",
    feedback:
      "This is an amazing product! Highly recommend it to everyone. lorem ipsum dolor sit amet. lorem ipsum dolor sit amet.",
    image: "https://swiperjs.com/demos/images/nature-1.jpg",
    date: "30/01/24",
  },
  {
    name: "Jane Smith",
    feedback: "I loved it. The quality is top-notch and the support is fantastic.",
    image: "https://swiperjs.com/demos/images/nature-2.jpg",
    date: "30/01/24",
  },
  {
    name: "Alex Johnson",
    feedback: "A great experience overall. Exceeded my expectations.",
    image: "https://swiperjs.com/demos/images/nature-3.jpg",
    date: "30/01/24",
  },
  {
    name: "Alex Johnson",
    feedback: "A great experience overall. Exceeded my expectations.",
    image: "https://swiperjs.com/demos/images/nature-3.jpg",
    date: "30/01/24",
  },
  {
    name: "Alex Johnson",
    feedback: "A great experience overall. Exceeded my expectations.",
    image: "https://swiperjs.com/demos/images/nature-3.jpg",
    date: "30/01/24",
  },
  {
    name: "Alex Johnson",
    feedback: "A great experience overall. Exceeded my expectations.",
    image: "https://swiperjs.com/demos/images/nature-3.jpg",
    date: "30/01/24",
  },
];

export default function Testimonials() {
  const sliderRef = useRef(null);
  const [activeStep, setActiveStep] = useState(0);

  const transitionStyles = (activeNum) => {
    const centerNum = 100 * activeNum;
    const rightNum = centerNum * -1 + 100;
    const leftNum = centerNum * -1 - 100;

    const styles = {
      left: { opacity: 0, transform: `translateX(${leftNum}%)` },
      center: {
        opacity: 1,
        transform: `translateX(${centerNum !== 0 ? "-" : ""}${centerNum}%)`,
      },
      right: { opacity: 0, transform: `translateX(${rightNum}%)` },
    };

    return styles;
  };

  return (
    <Box sx={{ position: "relative", width: "100%" }}>
      <Carousel>
        <CarouselContentContainer ref={sliderRef}>
          {testimonials.map((testimonial, index) => {
            return (
              <CarouselContentItem
                key={index}
                className={`${activeStep === index ? "active" : ""}`}
                sx={{
                  ...(activeStep === 0 && index === testimonials.length - 1
                    ? transitionStyles(index)["left"]
                    : activeStep === testimonials.length - 1 && index === 0
                    ? transitionStyles(index)["right"]
                    : transitionStyles(index)[activeStep > index ? "left" : activeStep === index ? "center" : "right"]),
                }}
              >
                <CarouselSignatures>
                  <CarouselDetails>{testimonial.feedback}</CarouselDetails>
                  <CarouselName>{testimonial.name}</CarouselName>
                  <CarouselDate>{testimonial.date}</CarouselDate>
                </CarouselSignatures>
              </CarouselContentItem>
            );
          })}
        </CarouselContentContainer>
      </Carousel>
      <CarouselControls>
        {testimonials.map((_, index) => (
          <CarouselDot
            key={index}
            onClick={() => setActiveStep(index)}
            sx={{ backgroundColor: activeStep === index ? "#00c3ff !important" : "" }}
          />
        ))}
      </CarouselControls>
    </Box>
  );
}
