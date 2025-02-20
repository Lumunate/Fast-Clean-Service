"use client";
import React, { useEffect, useState } from "react";
import { Box, Grid, Typography, Container, Button } from "@mui/material";
import { alpha } from "@mui/material/styles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown, faChevronUp } from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";
import Link from "next/link";
import { useTranslations } from "next-intl";
import { useSubscriptionPackages } from "../../../hooks/useSubscriptionPackages";
import { useTheme } from "../../../contexts/themeContext";
import { useSession } from "next-auth/react";
import HeadingLinesAnimation from "../../../components/Home/HeadingLinesAnimation/HeadingLinesAnimation";
import PaymentButton from "../../../components/payment-button/PaymentButton";
import StripeCheckoutButton from "../../../components/payment-button/StripeCheckoutButton";
import { DecorativeBackgroundImage } from "../../../components/Decorative/Decorative.style";
import RadialCircle from "../../../components/Decorative/RadialCircle";
import { ServiceSubtitle, ServiceCard, ServiceIcon } from "../fleet/FleetMain";
import {
    StyledCard,
    StyledImageContainer,
    GradientBox,
    StyledPriceContainer,
    StyledOptionsList,
    ImageWrapper,
    SubscriptionsContainer,
} from "./Subscribe.style";

// Define some colors and gradients for styling
const colors = ["#5DFA48", "#005BAC", "#BA8B1D"];
const gradients = [
    { top: "#5DFA48", bottom: "#38E274" },
    { top: "#40A7FF", bottom: "#1C79CC" },
    { top: "#F2DB01", bottom: "#D6AB01" },
];

const PackageCard = ({ pkg, index, highlightColor }) => {
    const t = useTranslations("subscriptions");

    // Helper to parse the price string
    const parsePrice = (priceString) => {
        const price = parseFloat(priceString.replace(/[^\d.-]/g, ""));
        return isNaN(price) ? 0 : price;
    };

    // State for price calculation and dropdown toggling
    const [price, setPrice] = useState(parsePrice(pkg.price));
    const [durationOpen, setDurationOpen] = useState(false);
    const [selectedDuration, setSelectedDuration] = useState(pkg.durationOptions?.[0]);
    const [frequencyOpen, setFrequencyOpen] = useState(false);
    const [selectedFrequency, setSelectedFrequency] = useState(pkg.cleaningFrequencyOptions?.[0]);
    const [selectedAdditionalOptions, setSelectedAdditionalOptions] = useState([]);
    const [additionalOpen, setAdditionalOpen] = useState(false);
    const { theme } = useTheme();
    const { data: session } = useSession();

    useEffect(() => {
        let newPrice = parsePrice(pkg.price);
        if (selectedDuration) {
            newPrice += selectedDuration.additionalCost;
        }
        if (selectedFrequency) {
            newPrice += selectedFrequency.additionalCost;
        }
        selectedAdditionalOptions.forEach((option) => {
            const addOpt = pkg.additionalOptions.find((item) => item.name === option);
            if (addOpt) newPrice += addOpt.price;
        });
        setPrice(newPrice);
    }, [selectedDuration, selectedFrequency, selectedAdditionalOptions, pkg.price, pkg.additionalOptions]);

    return (
        <StyledCard
            sx={{
                display: "flex",
                flexDirection: "column",
                height: "100%", // Each card fills the height provided by the grid container
                transition: "height 0.3s ease-out",
            }}
        >
            {/* Top image section */}
            <Box sx={{ position: "relative", width: "100%", height: "260px" }}>
                <ImageWrapper>
                    <Image
                        src={`/bookingFormIcons/sub${index + 1}.png`}
                        alt={`${pkg.name} image`}
                        width={480}
                        height={325}
                        objectFit="cover"
                    />
                </ImageWrapper>
                <StyledImageContainer highlightColor={highlightColor} />
            </Box>

            <GradientBox gradient={gradients[index]}>{pkg.name}</GradientBox>

            {/* Inner content area is a flex column with space-between */}
            <Box
                sx={{
                    flexGrow: 1,
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                    padding: "1rem",
                }}
            >
                {/* Price section with fixed minimum height */}
                <StyledPriceContainer
                    highlightColor={highlightColor}
                    sx={{
                        minHeight: "150px",
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        justifyContent: "center",
                    }}
                >
                    <Typography
                        sx={{
                            color: theme.palette.mode === "dark" ? "#C1C1C1" : "#525252",
                            fontSize: "1.2rem",
                            fontWeight: "400",
                        }}
                    >
                        FROM
                    </Typography>
                    <Typography sx={{ fontSize: "3.8rem", fontWeight: "600", color: highlightColor }}>
                        € {price}
                    </Typography>
                    <Typography
                        sx={{
                            color: theme.palette.mode === "dark" ? "#FFFFFF" : "#525252",
                            fontSize: "1.6rem",
                            fontWeight: "600",
                        }}
                    >
                        {pkg.duration}
                    </Typography>
                    {session?.user && (
                        <>
                            <PaymentButton
                                amount={pkg.price}
                                currency={"EUR"}
                                customerEmail={session.user.email}
                                description={pkg.name}
                            />
                            <StripeCheckoutButton />
                        </>
                    )}
                </StyledPriceContainer>

                {/* Options list (features) */}
                <StyledOptionsList>
                    {pkg.packages.map((item) => (
                        <Box key={item} sx={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
                            <Image src="/bookingFormIcons/Checkmark.png" alt="Checkmark" width={20} height={20} />
                            <Typography
                                sx={{
                                    color: theme.palette.mode === "dark" ? "#C1C1C1" : "#525252",
                                }}
                            >
                                {item}
                            </Typography>
                        </Box>
                    ))}
                </StyledOptionsList>

                {/* Dropdown sections */}
                <Box>
                    {pkg.durationOptions && (
                        <Box
                            sx={{
                                borderTop: "1px solid #e0e0e0",
                                marginTop: "2.1rem",
                                paddingTop: "1rem",
                            }}
                        >
                            <Typography
                                onClick={() => setDurationOpen(!durationOpen)}
                                sx={{
                                    fontSize: "1.6rem",
                                    fontWeight: "600",
                                    cursor: "pointer",
                                    textAlign: "center",
                                }}
                            >
                                Duration options{" "}
                                <FontAwesomeIcon icon={durationOpen ? faChevronUp : faChevronDown} style={{ marginLeft: "0.5rem" }} />
                            </Typography>
                            <Box
                                sx={{
                                    maxHeight: durationOpen ? "500px" : "0px",
                                    overflow: "hidden",
                                    transition: "max-height 0.3s ease-out, opacity 0.3s ease-in-out",
                                    opacity: durationOpen ? 1 : 0,
                                }}
                            >
                                {pkg.durationOptions.map((option) => (
                                    <Box
                                        onClick={() => setSelectedDuration(option)}
                                        key={option.duration}
                                        sx={{
                                            display: "flex",
                                            justifyContent: "space-between",
                                            padding: "1rem",
                                            mx: { xs: "24px", md: "61px" },
                                            cursor: "pointer",
                                            backgroundColor:
                                                option.duration === selectedDuration?.duration
                                                    ? alpha(highlightColor, 0.5)
                                                    : theme.palette.mode === "dark"
                                                        ? "rgba(255,255,255,0.0001)"
                                                        : "rgba(255,255,255,0.1)",
                                            backdropFilter: "blur(2.4px)",
                                            borderRadius: "12px",
                                            my: "8px",
                                        }}
                                    >
                                        <Typography
                                            sx={{
                                                color:
                                                    option.duration === selectedDuration?.duration
                                                        ? highlightColor === "#005BAC"
                                                            ? "#C1C1C1"
                                                            : "#585858"
                                                        : theme.palette.mode === "dark"
                                                            ? "#C1C1C1"
                                                            : "#585858",
                                            }}
                                        >
                                            {option.duration}
                                        </Typography>
                                        <Typography
                                            sx={{
                                                color:
                                                    option.duration === selectedDuration?.duration
                                                        ? highlightColor === "#005BAC"
                                                            ? "#C1C1C1"
                                                            : "#585858"
                                                        : theme.palette.mode === "dark"
                                                            ? "#C1C1C1"
                                                            : "#585858",
                                            }}
                                        >
                                            + €{option.additionalCost}
                                        </Typography>
                                    </Box>
                                ))}
                            </Box>
                        </Box>
                    )}

                    {pkg.cleaningFrequencyOptions && (
                        <Box
                            sx={{
                                borderTop: "1px solid #e0e0e0",
                                marginTop: "2.1rem",
                                paddingTop: "1rem",
                            }}
                        >
                            <Typography
                                onClick={() => setFrequencyOpen(!frequencyOpen)}
                                sx={{
                                    fontSize: "1.6rem",
                                    fontWeight: "600",
                                    cursor: "pointer",
                                    textAlign: "center",
                                }}
                            >
                                Cleaning Frequency{" "}
                                <FontAwesomeIcon icon={frequencyOpen ? faChevronUp : faChevronDown} style={{ marginLeft: "0.5rem" }} />
                            </Typography>
                            <Box
                                sx={{
                                    maxHeight: frequencyOpen ? "500px" : "0px",
                                    overflow: "hidden",
                                    transition: "max-height 0.3s ease-out, opacity 0.3s ease-in-out",
                                    opacity: frequencyOpen ? 1 : 0,
                                }}
                            >
                                {pkg.cleaningFrequencyOptions.map((option) => (
                                    <Box
                                        key={option.frequency}
                                        onClick={() => setSelectedFrequency(option)}
                                        sx={{
                                            display: "flex",
                                            justifyContent: "space-between",
                                            padding: "1rem",
                                            mx: { xs: "24px", md: "61px" },
                                            borderRadius: "12px",
                                            my: "8px",
                                            cursor: "pointer",
                                            backgroundColor:
                                                option.frequency === selectedFrequency?.frequency
                                                    ? alpha(highlightColor, 0.5)
                                                    : theme.palette.mode === "dark"
                                                        ? "rgba(255,255,255,0.0001)"
                                                        : "rgba(255,255,255,0.1)",
                                            backdropFilter: "blur(2.4px)",
                                        }}
                                    >
                                        <Typography
                                            sx={{
                                                color:
                                                    option.frequency === selectedFrequency?.frequency
                                                        ? highlightColor === "#005BAC"
                                                            ? "#C1C1C1"
                                                            : "#585858"
                                                        : theme.palette.mode === "dark"
                                                            ? "#C1C1C1"
                                                            : "#585858",
                                            }}
                                        >
                                            {option.frequency}
                                        </Typography>
                                        <Typography
                                            sx={{
                                                color:
                                                    option.frequency === selectedFrequency?.frequency
                                                        ? highlightColor === "#005BAC"
                                                            ? "#C1C1C1"
                                                            : "#585858"
                                                        : theme.palette.mode === "dark"
                                                            ? "#C1C1C1"
                                                            : "#585858",
                                            }}
                                        >
                                            + €{option.additionalCost}
                                        </Typography>
                                    </Box>
                                ))}
                            </Box>
                        </Box>
                    )}

                    {pkg.additionalOptions && pkg.additionalOptions.length > 0 ? (
                        <Box
                            sx={{
                                borderTop: "1px solid #e0e0e0",
                                marginTop: "2.1rem",
                                paddingTop: "1rem",
                                paddingBottom: "3.9rem",
                            }}
                        >
                            <Typography
                                onClick={() => setAdditionalOpen(!additionalOpen)}
                                sx={{
                                    fontSize: "1.6rem",
                                    fontWeight: "600",
                                    cursor: "pointer",
                                    textAlign: "center",
                                }}
                            >
                                Additional Options{" "}
                                <FontAwesomeIcon icon={additionalOpen ? faChevronUp : faChevronDown} style={{ marginLeft: "0.5rem" }} />
                            </Typography>
                            <Box
                                sx={{
                                    maxHeight: additionalOpen ? "500px" : "0px",
                                    overflow: "hidden",
                                    transition: "max-height 0.3s ease-out, opacity 0.3s ease-in-out",
                                    opacity: additionalOpen ? 1 : 0,
                                }}
                            >
                                {pkg.additionalOptions.map((option) => (
                                    <Box
                                        key={option.name}
                                        onClick={() =>
                                            setSelectedAdditionalOptions(
                                                selectedAdditionalOptions.includes(option.name)
                                                    ? selectedAdditionalOptions.filter((item) => item !== option.name)
                                                    : [...selectedAdditionalOptions, option.name]
                                            )
                                        }
                                        sx={{
                                            display: "flex",
                                            justifyContent: "space-between",
                                            padding: "1rem",
                                            mx: { xs: "24px", md: "61px" },
                                            borderRadius: "12px",
                                            my: "8px",
                                            cursor: "pointer",
                                            backgroundColor: selectedAdditionalOptions.includes(option.name)
                                                ? alpha(highlightColor, 0.5)
                                                : theme.palette.mode === "dark"
                                                    ? "rgba(255,255,255,0.0001)"
                                                    : "rgba(255,255,255,0.1)",
                                            backdropFilter: "blur(2.4px)",
                                        }}
                                    >
                                        <Typography
                                            sx={{
                                                color: selectedAdditionalOptions.includes(option.name)
                                                    ? highlightColor === "#005BAC"
                                                        ? "#C1C1C1"
                                                        : "#585858"
                                                    : theme.palette.mode === "dark"
                                                        ? "#C1C1C1"
                                                        : "#585858",
                                            }}
                                        >
                                            {option.name}
                                        </Typography>
                                        <Typography
                                            sx={{
                                                color: selectedAdditionalOptions.includes(option.name)
                                                    ? highlightColor === "#005BAC"
                                                        ? "#C1C1C1"
                                                        : "#585858"
                                                    : theme.palette.mode === "dark"
                                                        ? "#C1C1C1"
                                                        : "#585858",
                                            }}
                                        >
                                            + €{option.price}
                                        </Typography>
                                    </Box>
                                ))}
                            </Box>
                        </Box>
                    ) : (
                        <Box
                            sx={{
                                borderTop: "1px solid #e0e0e0",
                                marginTop: "2.1rem",
                                paddingTop: "1rem",
                                paddingBottom: "3.9rem",
                            }}
                        >
                            <Typography
                                sx={{
                                    fontSize: "1.6rem",
                                    fontWeight: "600",
                                    textAlign: "center",
                                    color: "gray",
                                }}
                            >
                                Additional Options{" "}
                                <FontAwesomeIcon icon={faChevronDown} style={{ marginLeft: "0.5rem" }} />
                            </Typography>
                        </Box>
                    )}
                </Box>
            </Box>
        </StyledCard>
    );
};

const Page = () => {
    const t = useTranslations("subscriptions");
    const { packages, loading, error, fetchPackages } = useSubscriptionPackages();
    const { theme } = useTheme();

    useEffect(() => {
        fetchPackages();
    }, [fetchPackages]);

    if (error) {
        return (
            <Box sx={{ marginTop: "15rem" }}>
                <Box sx={{ display: "flex", justifyContent: "center", marginBottom: "2rem" }}>
                    <HeadingLinesAnimation text={t("title")} />
                </Box>
                <Container
                    sx={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        justifyContent: "center",
                    }}
                >
                    <DecorativeBackgroundImage top={"30%"} right={"0"} width="90rem" height="85rem" sx={{ zIndex: "1" }} />
                    <RadialCircle
                        top={"20rem"}
                        right={"20rem"}
                        sx={{
                            width: "10rem !important",
                            height: "10rem !important",
                            zIndex: "1",
                        }}
                    />
                    <Box sx={{ maxWidth: "1110px", mb: 10 }}>
                        <Box sx={{ mb: 8 }}>
                            <ServiceSubtitle>{t("subtitle")}</ServiceSubtitle>
                            <Typography
                                sx={{
                                    textAlign: "center",
                                    maxWidth: "1110px",
                                    margin: "0 auto",
                                    fontWeight: "300",
                                    color: theme.palette.mode === "dark" ? "#D5D5D5" : "#000",
                                    fontSize: "1.8rem",
                                    lineHeight: 1.6,
                                    "@media (max-width: 600px)": { fontSize: "1.2rem" },
                                }}
                            >
                                {t("description")}
                            </Typography>
                        </Box>

                        <Box sx={{ mb: 8, alignItems: "center", display: "flex", flexDirection: "column" }}>
                            <Typography
                                variant="h3"
                                sx={{
                                    textAlign: "center",
                                    color: theme.palette.mode === "dark" ? "#fff" : "#232E4A",
                                    fontSize: "3.2rem",
                                    mb: 2,
                                    "@media (max-width: 600px)": { fontSize: "2rem" },
                                }}
                            >
                                {t("stitle")}
                            </Typography>

                            <Box sx={{ display: "flex", justifyContent: "center", width: "100%" }}>
                                <Grid container spacing={4} justifyContent="center" alignItems="center">
                                    <Grid item xs={12} sm={6} md={4} display="flex" justifyContent="center">
                                        <ServiceCard>
                                            <ServiceIcon>
                                                <img src="/s1.png" alt="Expert Care" />
                                            </ServiceIcon>
                                            <Typography
                                                sx={{
                                                    color: theme.palette.mode === "dark" ? "#fff" : "#232E4A",
                                                    mb: 0.6,
                                                    fontWeight: "400",
                                                    fontSize: "1.8rem",
                                                    "@media (max-width: 600px)": { fontSize: "1.6rem" },
                                                }}
                                            >
                                                {t("features.0.title")}
                                            </Typography>
                                            <Typography
                                                sx={{
                                                    color: theme.palette.mode === "dark" ? "#D5D5D5" : "#000",
                                                    fontSize: "1.4rem",
                                                    fontWeight: "300",
                                                    "@media (max-width: 600px)": { fontSize: "1.2rem" },
                                                }}
                                            >
                                                {t("features.0.description")}
                                            </Typography>
                                        </ServiceCard>
                                    </Grid>

                                    <Grid item xs={12} sm={6} md={4} display="flex" justifyContent="center">
                                        <ServiceCard>
                                            <ServiceIcon>
                                                <img src="/s2.png" alt="Flexibility" />
                                            </ServiceIcon>
                                            <Typography
                                                sx={{
                                                    color: theme.palette.mode === "dark" ? "#fff" : "#232E4A",
                                                    mb: 0.6,
                                                    fontWeight: "400",
                                                    fontSize: "1.8rem",
                                                    "@media (max-width: 600px)": { fontSize: "1.6rem" },
                                                }}
                                            >
                                                {t("features.1.title")}
                                            </Typography>
                                            <Typography
                                                sx={{
                                                    color: theme.palette.mode === "dark" ? "#D5D5D5" : "#000",
                                                    fontSize: "1.4rem",
                                                    fontWeight: "300",
                                                    "@media (max-width: 600px)": { fontSize: "1.2rem" },
                                                }}
                                            >
                                                {t("features.1.description")}
                                            </Typography>
                                        </ServiceCard>
                                    </Grid>
                                </Grid>
                            </Box>
                            <Typography
                                sx={{
                                    textAlign: "center",
                                    color: theme.palette.mode === "dark" ? "#D5D5D5" : "#000",
                                    fontSize: "1.8rem",
                                    maxWidth: "750px",
                                    margin: "0 auto",
                                    lineHeight: 1.6,
                                    fontWeight: "300",
                                    "@media (max-width: 600px)": { fontSize: "1.2rem" },
                                }}
                            >
                                {t("cta.text")}
                            </Typography>
                        </Box>

                        <Link href="/booking" passHref>
                            <Button
                                variant="contained"
                                sx={{
                                    padding: "1.5rem 3rem",
                                    fontSize: "1.6rem",
                                    fontWeight: "bold",
                                    backgroundColor: "primary.accentDark",
                                    borderRadius: "50px",
                                    color: "white",
                                    fontFamily: "DMSans",
                                    "&:hover": {
                                        backgroundColor: theme.palette.primary.accent,
                                    },
                                }}
                            >
                                {t("cta.button")}
                            </Button>
                        </Link>
                    </Box>
                </Container>
            </Box>
        );
    }

    if (!packages) {
        return null;
    }

    return (
        <Box sx={{ marginTop: "15rem" }}>
            <Box sx={{ display: "flex", justifyContent: "center", marginBottom: "2rem" }}>
                <HeadingLinesAnimation text={t("title")} />
            </Box>
            <Container
                sx={{
                    padding: { xs: "0px 20px", md: "0px 8rem" },
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                }}
            >
                <Box sx={{ maxWidth: "1110px" }}>
                    <Box sx={{ mb: 8 }}>
                        <ServiceSubtitle sx={{ margin: "0 auto 26px" }}>{t("subtitle")}</ServiceSubtitle>
                        <Typography
                            sx={{
                                textAlign: "center",
                                maxWidth: "1110px",
                                margin: "0 auto",
                                fontWeight: "300",
                                color: theme.palette.mode === "dark" ? "#D5D5D5" : "#000",
                                fontSize: "1.8rem",
                                lineHeight: 1.6,
                                "@media (max-width: 600px)": { fontSize: "1.2rem" },
                            }}
                        >
                            {t("description")}
                        </Typography>
                    </Box>

                    <Box sx={{ mb: 4, alignItems: "center", display: "flex", flexDirection: "column" }}>
                        <Typography
                            variant="h3"
                            sx={{
                                textAlign: "center",
                                color: theme.palette.mode === "dark" ? "#fff" : "#232E4A",
                                fontSize: "3.2rem",
                                mb: 2,
                                "@media (max-width: 600px)": { fontSize: "2rem" },
                            }}
                        >
                            {t("stitle")}
                        </Typography>

                        <Typography
                            sx={{
                                textAlign: "center",
                                color: theme.palette.mode === "dark" ? "#D5D5D5" : "#000",
                                fontSize: "1.8rem",
                                maxWidth: "900px",
                                margin: "0 auto",
                                lineHeight: 1.6,
                                fontWeight: "300",
                                "@media (max-width: 600px)": { fontSize: "1.2rem" },
                            }}
                        >
                            {t("cta.text")}
                        </Typography>
                    </Box>
                    <Box sx={{ display: "flex", justifyContent: "center", marginTop: "2rem" }}>
                        <Link href="/booking" passHref>
                            <Button
                                variant="contained"
                                sx={{
                                    padding: "1.5rem 3rem",
                                    fontSize: "1.6rem",
                                    fontWeight: "bold",
                                    backgroundColor: "primary.accentDark",
                                    borderRadius: "50px",
                                    color: "white",
                                    fontFamily: "DMSans",
                                    "&:hover": {
                                        backgroundColor: theme.palette.primary.accent,
                                    },
                                }}
                            >
                                {t("cta.button")}
                            </Button>
                        </Link>
                    </Box>
                </Box>
            </Container>
            <Box sx={{display: "flex", alignItems:"center", justifyContent:"center", margin: "auto"}}>
            <SubscriptionsContainer>
                {packages.map((pkg, index) => (
                    <PackageCard key={index} pkg={pkg} index={index} highlightColor={colors[index % 3]} />
                ))}
            </SubscriptionsContainer>
            </Box>
            <DecorativeBackgroundImage top={"60%"} right={"0"} width="90rem" height="65rem" />
            <RadialCircle top={"20rem"} right={"20rem"} sx={{ width: "10rem !important", height: "10rem !important" }} />
            <RadialCircle top={"90%"} left={"20rem"} sx={{ width: "10rem !important", height: "10rem !important" }} />

        </Box>
    );
};

export default Page;
