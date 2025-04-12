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
  HomePkgsInBox,
  ServicesOverviewWrapper,
} from "../../mui/HomePkgs";
import { Box, Button, Link, Typography } from "@mui/material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import HeadingLinesAnimation from "../HeadingLinesAnimation/HeadingLinesAnimation";
import { useFeedback } from "../../../hooks/useFeedback";
import { useTheme } from "../../../contexts/themeContext";
import Image from "next/image";
import { useTranslations } from "next-intl";

export default function Testimonials() {
  const { theme } = useTheme();
  const t = useTranslations("home.customer_reviews_section");
  const { feedbacks } = useFeedback();          // already fetches in parent hook

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

  const initialTrustpilot = TESTIMONIALS.filter(r =>
      r.socialIcons?.some(ic => ic.alt === "Trustpilot")
  );
  const initialGoogle = TESTIMONIALS.filter(r =>
      r.socialIcons?.some(ic => ic.alt === "Google")
  );

  const [trustpilotReviews, setTrustpilotReviews] = useState(initialTrustpilot);
  const [googleReviews,    setGoogleReviews]    = useState(initialGoogle);

  useEffect(() => {
    if (!feedbacks?.length) return;

    // Start with fresh copies so we never mutate state directly
    const tp = [...initialTrustpilot];
    const gg = [...initialGoogle];

    feedbacks.forEach((fb, idx) => {
      const fbObj = {
        stars: fb.stars,
        name:  `${fb.name} ${fb.lastName ?? ""}`.trim(),
        details: fb.feedback ?? "",
        image: "https://swiperjs.com/demos/images/nature-2.jpg",
        date: new Date(fb.createdAt).toLocaleDateString("en-US", {
          year: "numeric",
          month: "long",
          day:   "2-digit",
        }),
        socialIcons: [{ icon: "/logo.png", alt: "Fast Clean Service" }],
      };

      if (tp.length <= gg.length) {
        tp.push(fbObj);
      } else {
        gg.push(fbObj);
      }
    });

    setTrustpilotReviews(tp);
    setGoogleReviews(gg);
  }, [feedbacks]);

  function useCarousel(items) {
    const sliderRef = useRef(null);
    const [activeStep,   setActiveStep]   = useState(0);
    const [activeHeight, setActiveHeight] = useState("auto");
    const [isLarge,      setIsLarge]      = useState(false);

    useEffect(() => {
      setIsLarge(window.innerWidth > 1100);
      const onResize = () => setIsLarge(window.innerWidth > 1100);
      window.addEventListener("resize", onResize);
      return () => window.removeEventListener("resize", onResize);
    }, []);

    useLayoutEffect(() => {
      if (!sliderRef.current) return;
      const kids = sliderRef.current.childNodes;
      let tallest = 0;
      let activeIdx = Array.from(kids).findIndex(k => k.classList.contains("active"));

      kids.forEach((el, i) => {
        if (i === activeIdx || i === (activeIdx + 1)) {
          let h = Array.from(el.children).reduce((s, c) => s + c.offsetHeight, 0);
          if (h > tallest) tallest = h;
        }
      });
      setActiveHeight(`${tallest + 70}px`);
    }, [activeStep, items]);

    return {
      sliderRef,
      activeStep,
      activeHeight,
      isLarge,
      next: () => setActiveStep(p => (p === items.length - 1 ? 0 : p + 1)),
      back: () => setActiveStep(p => (p === 0 ? items.length - 1 : p - 1)),
    };
  }

  const tpCarousel = useCarousel(trustpilotReviews);
  const ggCarousel = useCarousel(googleReviews);

  const renderCarousel = (items, car) => (
      <Carousel sx={{ width: "90%", "@media (max-width:1200px)": { width: "100%" } }}>
        <CarouselContentContainer
            ref={car.sliderRef}
            sx={{
              display: "flex",
              transition: "all 600ms ease-in-out",
              marginBottom: "3rem",
              height: car.activeHeight,
            }}
        >
          {items.map((r, i) => {
            const isActive = car.activeStep === i;
            const isNext   = car.isLarge && (car.activeStep + 1) % items.length === i;

            return (
                <CarouselContentItem
                    key={i}
                    className={isActive || isNext ? "active" : ""}
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      width: car.isLarge ? "50%" : "100%",
                      backdropFilter: isActive || isNext ? "blur(0)" : "blur(10px)",
                      visibility:     isActive || isNext ? "visible" : "hidden",
                      position:       isActive || isNext ? "relative" : "absolute",
                      background: "transparent",
                      border: "none",
                    }}
                >
                  <CarouselItemInner
                      sx={{
                        p: "2rem",
                        borderRadius: "20px",
                        backgroundColor:
                            theme.palette.mode === "dark"
                                ? "rgba(255,255,255,0.03)"
                                : "rgba(255,255,255,0.5)",
                        border: `1px solid ${
                            theme.palette.mode === "dark"
                                ? "rgba(255,255,255,0.12)"
                                : "white"
                        }`,
                        backdropFilter: "blur(10.4px)",
                      }}
                  >
                    <CarouselStarsBox
                        sx={{
                          display: "flex",
                          justifyContent: "space-between",
                          alignItems: "center",
                          pb: "1rem",
                          "& svg": { fontSize: "1.4rem", mr: "0.3rem", color: "gold" },
                        }}
                    >
                      <Box>
                        {Array.from({ length: 5 }, (_, k) => (
                            <FontAwesomeIcon
                                key={k}
                                icon={faStar}
                                className={k < r.stars ? "colorstar" : ""}
                            />
                        ))}
                      </Box>
                      <Box component="img" src="/testimonialQou.svg" alt="" sx={{ width: 37, height: 26 }} />
                    </CarouselStarsBox>

                    <CarouselDetails>
                      <p>
                        {r.details.slice(0, 196)}
                        {r.details.length > 196 ? "…" : ""}
                      </p>
                    </CarouselDetails>

                    <CarouselSignatures
                        sx={{ display: "flex", justifyContent: "space-between", mt: "1rem" }}
                    >
                      <Box sx={{ display: "flex", alignItems: "center" }}>
                        <CarouselImg
                            src={r.image}
                            alt={r.name}
                            style={{ width: 50, height: 50, borderRadius: "50%", objectFit: "cover" }}
                        />
                        <Box sx={{ ml: "1rem" }}>
                          <CarouselName>{r.name}</CarouselName>
                          <CarouselDate>{r.date}</CarouselDate>
                        </Box>
                      </Box>

                      <Box sx={{ display: "flex", gap: "0.5rem" }}>
                        {r.socialIcons?.map((ic, idx) => (
                            <Box
                                key={idx}
                                component="img"
                                src={ic.icon}
                                alt={ic.alt}
                                sx={{ width: 50 }}
                            />
                        ))}
                      </Box>
                    </CarouselSignatures>
                  </CarouselItemInner>
                </CarouselContentItem>
            );
          })}
        </CarouselContentContainer>

        {/* Controls */}
        <CarouselControls>
          <CarouselBtn onClick={car.back} sx={{ left: "-8rem", "@media (max-width:1700px)": { left: 0 }, "@media (max-width:600px)": { left: "-2rem" } }}>
            <Image src="/testimonials/testimonial-chevron-right.png" alt="" width={58} height={58} style={{ transform: "rotate(180deg)" }} />
          </CarouselBtn>
          <CarouselBtn onClick={car.next} sx={{ right: "-8rem", "@media (max-width:1700px)": { right: 0 }, "@media (max-width:600px)": { right: "-2rem" } }}>
            <Image src="/testimonials/testimonial-chevron-right.png" alt="" width={58} height={58} />
          </CarouselBtn>
        </CarouselControls>
      </Carousel>
  );

  return (
      <HomePkgsInBox sx={{ m: "0 auto", position: "relative", p: "2rem" }}>
        <ServicesOverviewWrapper>
          <HeadingLinesAnimation sx={{ width: "50%", mb: "7rem" }}>
            {t("title")}
          </HeadingLinesAnimation>
          <Typography sx={{ textAlign: "center", fontSize: "1.55rem", lineHeight: 1.7, pt: "2rem" }}>
            {t("description")}
          </Typography>
          <Typography sx={{ textAlign: "center", fontSize: "1.55rem", fontWeight: 500, lineHeight: 1.7 }}>
            {t("description2")}
          </Typography>
          <Link href="/feedback" passHref>
            <Button
                variant="contained"
                sx={{
                  mt: "1rem",
                  p: "1.5rem 3rem",
                  fontSize: 16,
                  fontWeight: 500,
                  backgroundColor: "primary.accentDark",
                  color: "#fff",
                  borderRadius: "50px",
                  fontFamily: "DMSans",
                  "&:hover": { backgroundColor: "#00BEFF" },
                }}
            >
              {t("button")}
            </Button>
          </Link>
        </ServicesOverviewWrapper>

        <HomePkgsInBox sx={{ mt: "4rem", display: "flex", flexDirection: "column", alignItems: "center" }}>
          <Typography sx={{ mb: 1, fontSize: "3.6rem" }}>Trustpilot Reviews</Typography>
          <Typography sx={{ fontSize: "1.55rem", mb: "2rem", textAlign: "center" }}>
            ⭐ 4.8/5 based on 250+ reviews
          </Typography>
          {renderCarousel(trustpilotReviews, tpCarousel)}
          <Box sx={{ textAlign: "center" }}>
              <Link href="/" passHref>
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
                      View All Trustpilot Reviews
                  </Button>
              </Link>
          </Box>
        </HomePkgsInBox>

        {/* ---------- GOOGLE ---------- */}
        <HomePkgsInBox sx={{ mt: "4rem", display: "flex", flexDirection: "column", alignItems: "center" }}>
          <Typography sx={{ mb: 1, fontSize: "3.6rem" }}>Google Reviews</Typography>
          <Typography sx={{ fontSize: "1.55rem", mb: "2rem", textAlign: "center" }}>
            ⭐ 4.7/5 based on 180+ reviews
          </Typography>
          {renderCarousel(googleReviews, ggCarousel)}
          <Box sx={{ textAlign: "center" }}>
              <Link href="/" passHref>
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
                      View All Google Reviews
                  </Button>
              </Link>
          </Box>
        </HomePkgsInBox>
      </HomePkgsInBox>
  );
}
