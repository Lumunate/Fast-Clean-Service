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
  ServicesOverviewWrapper,
} from "../../mui/HomePkgs";
import { Box, Button, Link, Typography } from "@mui/material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
  faStar,
} from "@fortawesome/free-solid-svg-icons";
import HeadingLinesAnimation from "../HeadingLinesAnimation/HeadingLinesAnimation";
import { useFeedback } from "../../../hooks/useFeedback";

const TESTIMONIALS = [
  {
    stars: 5,
    name: "Emre",
    details:
      "Betrouwbaar en netjes.\nVandaag langsgeweest om de auto van binnen en buitenkant schoon te laten maken. Ik moet zeggen dat ik zeer tevreden ben met het resultaat!",
    image: "https://swiperjs.com/demos/images/nature-3.jpg",
    date: "December 13, 2024",
    socialIcons: [{ icon: "/Trustpilot.png", alt: "Trustpilot" }],
  },
  {
    stars: 5,
    name: "Richard Da Costa Abreu",
    details:
      "ENORM blij mee, een nette jonge man verscheen aan de deur en na een kort gesprekje van wensen etc is hij aan het werk gegaan. ik had de duurste pakket gekozen de combi de luxe paket buiten en binnen voor €189,95 . een hoop geld maar meer dan waard. hij is ruim 3 uur bezig geweest maar mijn auto is echt spik en span en alle kleine hoekjes en gaatjes, spleetjes tussen alle knopjes, vakjes ect etc zijn onder handen genomen hij was ook best vies moet ik toegeven. mijn auto leek wel nieuw zowel binnen als buiten net als hij de show room uit kwam. het begon later te regenen en je zag dat de regen druppels echt op de auto bleven liggen en er daarna afgleden nu 1 week later nog steeds het geval.  ik ben erg blij hij krijgt van mij een dikke 10. nogmaals bedankt.",
    image: "https://swiperjs.com/demos/images/nature-2.jpg",
    date: "Febuary 01, 2025",
    socialIcons: [{ icon: "/Google.png", alt: "Google" }],
  },

  {
    stars: 5,
    name: "Klant",
    details: "snel en superschoon!",
    image: "https://swiperjs.com/demos/images/nature-1.jpg",
    date: "April 25, 2024",
    socialIcons: [{ icon: "/Trustpilot.png", alt: "Trustpilot" }],
  },
  {
    stars: 5,
    name: "Igor Dotsenko",
    details:
      "I ordered exterior washing a few times already. Both times washerman arrived in time and did the work very well and professionally. Both times I was happy with the result and I will proceed using services provided by the company",
    image: "https://swiperjs.com/demos/images/nature-2.jpg",
    date: "June 06, 2023",
    socialIcons: [{ icon: "/Trustpilot.png", alt: "Trustpilot" }],
  },
  {
    stars: 5,
    name: "Radbout Platvoet",
    details:
      "Ik wilde mijn auto weer netjes hebben na 5 jaar gebruik. Ik heb er geen verstand van dus dan is het moeilijk een bedrijf te selecteren. Fast Clean werd me aangeraden dus dan doe je dat maar. Het was een volledig terechte verwijzing. Gewoon hele fijne mensen, geen haast, secuur en eerlijk.",
    image: "https://swiperjs.com/demos/images/nature-3.jpg",
    date: "November 15, 2024",
    socialIcons: [{ icon: "/Google.png", alt: "Google" }],
  },

  {
    stars: 5,
    name: "AT",
    details:
      "Ze doen wat ze beloven. Prima\nAfspraak snel gemaakt. Geen lange wachttijd.\nKomen op afgesproken tijd. Vriendelijke werkers. \nResultaat is boven verwachting.",
    image: "https://swiperjs.com/demos/images/nature-3.jpg",
    date: "October 29, 2024",
    socialIcons: [{ icon: "/Trustpilot.png", alt: "Trustpilot" }],
  },
  {
    stars: 5,
    name: "Klant",
    details:
      "Top bedrijf\nTop bedrijf, lekker snel en uitstekend schoongemaakt. beveel ze bij iedereen aan!\nIk kom zeker bij ze terug voor me boot en caravan ;-)",
    image: "https://swiperjs.com/demos/images/nature-1.jpg",
    date: "September 24, 2024",
    socialIcons: [{ icon: "/Trustpilot.png", alt: "Trustpilot" }],
  },
  {
    stars: 5,
    name: "Harlememermeer Transport",
    details: "Uitstekende service en het resultaat was super!",
    image: "https://swiperjs.com/demos/images/nature-1.jpg",
    date: "Febuary 01, 2024",
    socialIcons: [{ icon: "/Google.png", alt: "Google" }],
  },

  {
    stars: 5,
    name: "C. R.",
    details:
      "Het was vrij simpel om de online…\nHet was vrij simpel om de online afspraak te maken. De service was inventief en volledig en dacht goed mee over de mogelijkheden. De auto was spik en span en weer als nieuw! En dat terwijl ik er geen vrij voor hoefde te nemen. Voorwaar een fantastische ervaring!",
    image: "https://swiperjs.com/demos/images/nature-2.jpg",
    date: "September 09, 2024",
    socialIcons: [{ icon: "/Trustpilot.png", alt: "Trustpilot" }],
  },
  {
    stars: 5,
    name: "Anthonie Lagerburg",
    details:
      "Top service en super netjes en correct\nAuto super netjes schoongemaakt van binnen en van buiten ziet er uit als nieuw ongebruikt",
    image: "https://swiperjs.com/demos/images/nature-3.jpg",
    date: "September 04, 2024",
    socialIcons: [{ icon: "/Trustpilot.png", alt: "Trustpilot" }],
  },
  {
    stars: 5,
    name: "Igor Dotsenko",
    details:
      "I ordered exterior washing a few times already. Both times washerman arrived in time and did the work very well and professionally. Both times I was happy with the result and I will proceed using services provided by the company",
    image: "https://swiperjs.com/demos/images/nature-2.jpg",
    date: "June 06, 2023",
    socialIcons: [{ icon: "/Google.png", alt: "Google" }],
  },

  {
    stars: 5,
    name: "Nadine",
    details: "Goed werk.\nAuto goed schoon! Had wat vlekken in de bekleding die er uit zijn.",
    image: "https://swiperjs.com/demos/images/nature-1.jpg",
    date: "September 04, 2024",
    socialIcons: [{ icon: "/Trustpilot.png", alt: "Trustpilot" }],
  },
  {
    stars: 5,
    name: "Klant",
    details: "Goede service.\nGoede service, er wordt geurig gewerkt en het eindresultaat is super!",
    image: "https://swiperjs.com/demos/images/nature-2.jpg",
    date: "August 19, 2024",
    socialIcons: [{ icon: "/Trustpilot.png", alt: "Trustpilot" }],
  },
  {
    stars: 5,
    name: "Herman Bijkerk",
    details:
      "Wow. Wat een service! Auto als nieuw, zowel binnen als buiten. Interieur was vreselijk i.v.m. honden. Nu dus als nieuw. En erg vriendelijk!",
    image: "https://swiperjs.com/demos/images/nature-2.jpg",
    date: "April 04, 2023",
    socialIcons: [{ icon: "/Google.png", alt: "Google" }],
  },

  {
    stars: 5,
    name: "Klant",
    details:
      "Top service en vriendelijke medewerker.\nTop service en vriendelijke medewerker. auto zag er weer als nieuw uit. Ik ga hier zeker vaker gebruik van maken. Bedankt!!!",
    image: "https://swiperjs.com/demos/images/nature-2.jpg",
    date: "August 16, 2023",
    socialIcons: [{ icon: "/Trustpilot.png", alt: "Trustpilot" }],
  },
];

export default function Testimonials() {
  const sliderRef = useRef(null);

  const [testimonials, setTestimonials] = useState(TESTIMONIALS);
  const [activeStep, setActiveStep] = useState(0);
  const [activeHeight, setActiveHeight] = useState("auto");
  const [isLargeScreen, setIsLargeScreen] = useState(false);

  const { feedbacks, fetchAll } = useFeedback();

  useEffect(() => {
    const updatedTestimonials = [...TESTIMONIALS];
    feedbacks.slice(0, 5).forEach((feedback, index) => {
      const feedbackObj = {
        stars: feedback.stars,
        name: `${feedback.name} ${feedback.lastname}`,
        details: feedback.feedback ?? '',
        image: '/logo.png',
        date: new Date(feedback.createdAt).toLocaleDateString('en-US', {
          year: 'numeric',
          month: 'long',
          day: '2-digit',
        }),
        socialIcons: feedback.socialIcons,
      };
      updatedTestimonials.splice((index + 1) * 3, 0, feedbackObj);
    });

    setTestimonials(updatedTestimonials);
  }, [feedbacks]);

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
    setActiveStep((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };
  const handleBack = () => {
    setActiveStep((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  return (
    <HomePkgsInBox
      sx={{
        margin: "0 auto",
        position: "relative",
        backgroundColor: "transparent",
        padding: "2rem",
      }}
    >
      <ServicesOverviewWrapper>
        <HeadingLinesAnimation sx={{ width: "50%", marginBottom: "7rem" }}>What Our Customers Say</HeadingLinesAnimation>
        <Typography
          sx={{
            textAlign: "center",
            fontSize: "1.55rem",
            lineHeight: 1.7,
            paddingTop: "2rem",
            "@media (max-width: 900px)": {
              textAlign: "center",
            },
            "@media (max-width: 600px)": {
              fontSize: "12px",
              textAlign: "center",
            },
          }}
        >
          At Fast Clean Service we have already helped many satisfied customers.
        </Typography>
        <Typography
          sx={{
            textAlign: "center",
            fontSize: "1.55rem",
            fontWeight: "500",
            lineHeight: 1.7,
            "@media (max-width: 900px)": {
              textAlign: "center",
            },
            "@media (max-width: 600px)": {
              fontSize: "12px",
              textAlign: "center",
            },
          }}
        >
          Leave Your Review and tell us how we helped you!
        </Typography>
        <Link href="/feedback" passHref>
          <Button
            variant="contained"
            sx={{
              marginTop: "1rem",
              padding: "1.5rem 3rem",
              fontSize: "16px",
              fontWeight: 500,
              backgroundColor: "primary.accentDark",
              color: "white",
              fontFamily: "DMSans",
              "&:hover": {
                backgroundColor: "#00BEFF",
              },
            }}
          >
            Submit a Review
          </Button>
        </Link>
      </ServicesOverviewWrapper>
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
              const isActiveNext = isLargeScreen && (activeStep + 1) % testimonials.length === index;

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
                    visibility: isActive || isActiveNext ? "visible" : "hidden",
                    position: isActive || isActiveNext ? "relative" : "absolute",
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
                        theme.palette.mode === "light" ? "rgba(255, 255, 255, 0.8)" : "rgba(0, 0, 0, 0.6)",
                    }}
                  >
                    <CarouselStarsBox
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        paddingBottom: "1rem",
                        justifyContent: "space-between",
                        "& svg": {
                          fontSize: "1.4rem",
                          marginRight: "0.3rem",
                          color: "gold",
                        },
                      }}
                    >
                      <Box>
                        {Array.from({ length: 5 }, (_, i) => (
                          <FontAwesomeIcon icon={faStar} key={i} className={i < testimonial.stars ? "colorstar" : ""} />
                        ))}
                      </Box>
                      <Box
                        component="img"
                        src="/testimonialQou.svg"
                        alt="asd"
                        sx={{
                          width: "37px",
                          height: "26px",
                        }}
                      />
                    </CarouselStarsBox>

                    <CarouselDetails>
                      <p>
                        {testimonial.details.slice(0, 196)}
                        {testimonial.details.length > 196 ? "..." : ""}
                      </p>
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
          <CarouselBtn
            onClick={handleBack}
            sx={{
              left: "-8rem",
              "@media (max-width: 1700px)": { left: "0rem" },
              "@media (max-width: 1200px)": { left: "-6rem" },
              "@media (max-width: 600px)": { left: "-2rem" },
            }}
          >
            <FontAwesomeIcon icon={faChevronLeft} />
          </CarouselBtn>

          <CarouselBtn
            onClick={handleNext}
            sx={{
              right: "-8rem",
              "@media (max-width: 1700px)": { right: "0rem" },
              "@media (max-width: 1200px)": { right: "-6rem" },
              "@media (max-width: 600px)": { right: "-2rem" },
            }}
          >
            <FontAwesomeIcon icon={faChevronRight} />
          </CarouselBtn>
        </CarouselControls>
      </HomePkgsInBox>
    </HomePkgsInBox>
  );
}
