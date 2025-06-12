"use client";
import React, { useState, useEffect } from "react";
import {
    CarouselContentItem,
    CarouselDetails,
    CarouselDetailsPara,
    CarouselImg,
    CarouselItemInner,
    CarouselName,
    CarouselStarsBox,
    CarouselSignatures,
    CarouselDate,
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

// Swiper imports
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

export default function Testimonials() {
    const { theme } = useTheme();
    const t = useTranslations("home.customer_reviews_section");
    const { feedbacks } = useFeedback();

    // your TESTIMONIALS array, initialTrustpilot & initialGoogle setup
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

    const initialTrustpilot = TESTIMONIALS
        .filter(r => r.stars === 5 && r.socialIcons?.some(ic => ic.alt === "Trustpilot"))
        .slice(0, 5);
    const initialGoogle = TESTIMONIALS
        .filter(r => r.stars === 5 && r.socialIcons?.some(ic => ic.alt === "Google"))
        .slice(0, 5);

    const [trustpilotReviews, setTrustpilotReviews] = useState(initialTrustpilot);
    const [googleReviews, setGoogleReviews] = useState(initialGoogle);

    useEffect(() => {
        if (!feedbacks?.length) return;
        const tp = [...initialTrustpilot];
        const gg = [...initialGoogle];

        feedbacks.forEach(fb => {
            const fbObj = {
                stars: fb.stars,
                name: `${fb.name} ${fb.lastName ?? ""}`.trim(),
                details: fb.feedback ?? "",
                image: "https://swiperjs.com/demos/images/nature-2.jpg",
                date: new Date(fb.createdAt).toLocaleDateString("en-US", {
                    year: "numeric", month: "long", day: "2-digit"
                }),
                socialIcons: [{ icon: "/logo.png", alt: "Fast Clean Service" }],
            };
            if (tp.length <= gg.length) tp.push(fbObj);
            else gg.push(fbObj);
        });

        setTrustpilotReviews(tp.slice(0, 5));
        setGoogleReviews(gg.slice(0, 5));
    }, [feedbacks]);

    const renderSwiper = (items) => (
        <Box sx={{
            maxWidth: "100%",
            mx: "auto",
            position: "relative",
            // padding: "5rem",
            overflow: "visible",
            ".swiper-button-prev": { left: "0px", zIndex: 10, "@media (max-width: 992px)": {display: "none"}, },
            ".swiper-button-next": { right: "0px", zIndex: 10, "@media (max-width: 992px)": {display: "none"}, },
            "@media (max-width: 992px)": {padding: "0rem", maxWidth: "100%"},
            ".swiper-horizontal":{height:"100%", padding:{xs:"0rem", sm:"3rem"}}
        }}
       >
        <Swiper
            modules={[Autoplay, Navigation]}
            loop
            autoplay={{ delay: 3000, disableOnInteraction: false }}
            navigation
            spaceBetween={20}
            breakpoints={{ 0: { slidesPerView: 1 }, 992: { slidesPerView: 2 } }}
            onSwiper={(swiper) => {
                const updateHeights = () => {
                    const visible = swiper.slides.filter(slide =>
                        slide.style.transform.includes("translateX(0%)") ||
                        slide.style.transform.includes("translateX(10%)")
                    );
                    let maxH = 0;
                    visible.forEach(slide => {
                        slide.style.height = "auto";
                        maxH = Math.max(maxH, slide.offsetHeight);
                    });
                    visible.forEach(slide => slide.style.height = `${maxH}px`);
                };
                swiper.on("init slideChange resize", updateHeights);
                updateHeights();
            }}
        >
            {items.map((r, i) => (
                <SwiperSlide key={i}>
                    <CarouselContentItem sx={{ display: "flex", flexDirection: "column", height: "100%" }}>
                        <CarouselItemInner
                            sx={{
                                p: "2rem", borderRadius: "20px",
                                backgroundColor: theme.palette.mode === "dark"
                                    ? "rgba(255,255,255,0.03)" : "rgba(255,255,255,0.5)",
                                border: `1px solid ${
                                    theme.palette.mode === "dark"
                                        ? "rgba(255,255,255,0.12)" : "white"
                                }`,
                                backdropFilter: "blur(10.4px)",
                                height: "100%",
                            }}
                        >
                            <CarouselStarsBox sx={{
                                display: "flex", justifyContent: "space-between", alignItems: "center", pb: "1rem",
                                "& svg": { fontSize: "1.4rem", mr: "0.3rem", color: "gold" }
                            }}>
                                <Box>
                                    {Array.from({ length: 5 }, (_, k) => (
                                        <FontAwesomeIcon
                                            key={k} icon={faStar}
                                            className={k < r.stars ? "colorstar" : ""}
                                        />
                                    ))}
                                </Box>
                                <Box component="img" src="/testimonialQou.svg" alt=""
                                     sx={{ width: 37, height: 26 }} />
                            </CarouselStarsBox>

                            <CarouselDetails>
                                <CarouselDetailsPara>
                                    {r.details.slice(0, 196)}
                                    {r.details.length > 196 ? "…" : ""}
                                </CarouselDetailsPara>
                            </CarouselDetails>

                            <CarouselSignatures sx={{ display: "flex", justifyContent: "space-between", mt: "1rem" }}>
                                <Box sx={{ display: "flex", alignItems: "center" }}>
                                    <CarouselImg src={r.image} alt={r.name} />
                                    <Box sx={{ ml: "1rem" }}>
                                        <CarouselName>{r.name}</CarouselName>
                                        <CarouselDate>{r.date}</CarouselDate>
                                    </Box>
                                </Box>
                                <Box sx={{ display: "flex", gap: "0.5rem" }}>
                                    {r.socialIcons?.map((ic, idx) => (
                                        <Box key={idx} component="img" src={ic.icon} alt={ic.alt} sx={{ width: 50 }} />
                                    ))}
                                </Box>
                            </CarouselSignatures>
                        </CarouselItemInner>
                    </CarouselContentItem>
                </SwiperSlide>
            ))}
        </Swiper>
        </Box>
    );

    return (
        <HomePkgsInBox sx={{ m: "0 auto", position: "relative", p: "2rem", "@media (max-width: 1100px)": {
    width: "100%", 
  }, }}>
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
                            mt: "1rem", p: "1.5rem 3rem", fontSize: 16, fontWeight: 500,
                            backgroundColor: "primary.accentDark", color: "#fff",
                            borderRadius: "50px", fontFamily: "DMSans",
                            "&:hover": { backgroundColor: "#00BEFF" },
                        }}
                    >
                        {t("button")}
                    </Button>
                </Link>
            </ServicesOverviewWrapper>

            {/* Trustpilot */}
            <HomePkgsInBox sx={{ mt: "4rem", display: "flex", flexDirection: "column", alignItems: "center", "@media (max-width: 992px)": {padding: 0}, }}>
                <Typography sx={{ mb: 1, fontSize: "3.6rem", textAlign: "center",
                    "@media (max-width:900px)": { fontSize: "1.8rem" } }}>
                    Trustpilot Reviews
                </Typography>
                <Typography sx={{ fontSize: "1.55rem", mb: "2rem", textAlign: "center" }}>
                    ⭐ 4.8/5 based on 250+ reviews
                </Typography>
                {renderSwiper(trustpilotReviews)}
                <Box sx={{ textAlign: "center" }}>
                    <Link href="https://www.trustpilot.com/review/www.fastcleanservice.nl" passHref>
                        <Button
                            variant="contained"
                            sx={{
                                padding: "1.5rem 3rem", fontSize: "1.2rem", fontWeight: 500,
                                borderRadius: "50px", backgroundColor: "primary.accentDark",
                                color: "#fff", fontFamily: "DMSans",
                                "&:hover": { backgroundColor: theme.palette.primary.accent },
                            }}
                        >
                            {t("trustpilotBtn")}
                        </Button>
                    </Link>
                </Box>
            </HomePkgsInBox>

            {/* Google */}
            <HomePkgsInBox sx={{ mt: "4rem", display: "flex", flexDirection: "column", alignItems: "center", "@media (max-width: 992px)": {padding: 0}, }}>
                <Typography sx={{ mb: 1, fontSize: "3.6rem", textAlign: "center",
                    "@media (max-width:900px)": { fontSize: "1.8rem" } }}>
                    Google Reviews
                </Typography>
                <Typography sx={{ fontSize: "1.55rem", mb: "2rem", textAlign: "center" }}>
                    ⭐ 4.7/5 based on 180+ reviews
                </Typography>
                {renderSwiper(googleReviews)}
                <Box sx={{ textAlign: "center" }}>
                    <Link
                        href="https://www.google.com/search?...
            "
                        passHref
                    >
                        <Button
                            variant="contained"
                            sx={{
                                padding: "1.5rem 3rem", fontSize: "1.2rem", fontWeight: 500,
                                borderRadius: "50px", backgroundColor: "primary.accentDark",
                                color: "#fff", fontFamily: "DMSans",
                                "&:hover": { backgroundColor: theme.palette.primary.accent },
                            }}
                        >
                            {t("googleBtn")}
                        </Button>
                    </Link>
                </Box>
            </HomePkgsInBox>
        </HomePkgsInBox>
    );
}
