"use client";
import React from "react";
import { Box, IconButton, Divider, Typography, Link as MuiLink } from "@mui/material";
import { Facebook, Instagram, Twitter, YouTube, Email, WhatsApp, Star } from "@mui/icons-material";
import { useTheme } from "../../../contexts/themeContext";
import Image from "next/image";
import Logo from "../../../../public/newlogo.svg";
import {useTranslations} from "next-intl";

export default function Footer() {
    const { theme } = useTheme();
    const t = useTranslations('footer');

    return (
        <footer
            style={{
                backgroundColor: "#000000",
                color: theme.palette.mode === "light" ? "#212121" : "#fff",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                padding: "2rem 0",
                position: "relative",
            }}
        >
            <Box
                sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    padding: "0 12rem",
                    marginBottom: "2rem",
                    "@media (max-width: 1368px)": {
                        padding: "0 6rem",
                    },
                    "@media (max-width: 992px)": {
                        display: "none",
                    },
                }}
            >
                <Box>
                    <Image src={Logo} alt="logo" width={99} height={61} style={{ objectFit: "contain" }} />
                </Box>

                <Box
                    sx={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        position: "absolute",
                        top: "30%",
                        left: "50%",
                        transform: "translate(-50%, -50%)",
                        gap: "9.3rem",
                        "@media (max-width: 1368px)": {
                            gap: "4rem",
                        },
                        "@media (max-width: 900px)": {
                            flexDirection: "column",
                            gap: "2rem",
                        },
                    }}
                >
                    <MuiLink href="/" sx={linkStyles}>{t("links.home")}</MuiLink>
                    <MuiLink href="/aboutus" sx={linkStyles}>{t("links.about")}</MuiLink>
                    <MuiLink href="/contact" sx={linkStyles}>{t("links.contact")}</MuiLink>
                    <MuiLink href="/" sx={linkStyles}>{t("links.services")}</MuiLink>
                </Box>

                <Box sx={{ display: "flex", gap: "1rem" }}>
                    <SocialIcon href="https://facebook.com" Icon={Facebook} />
                    <SocialIcon href="https://instagram.com" Icon={Instagram} />
                    <SocialIcon href="https://wa.me/0202440994" Icon={WhatsApp} />
                    <SocialIcon href="https://www.trustpilot.com/review/www.fastcleanservice.nl" Icon={Star} />
                    <SocialIcon href="mailto:support@fastclean.com" Icon={Email} />
                </Box>
            </Box>

            <Box
                sx={{
                    position: "relative",
                    py: 2,
                    px: { xl: "12rem", lg: "6rem" },
                    "@media (max-width: 992px)": { display: "none" },
                }}
            >
                {/* centered */}
                <Typography align="center" variant="body2" sx={copyrightStyle}>
                    {t("copyright")}
                </Typography>

                {/* absolutely positioned at the right */}
                <Box
                    sx={{
                        position: "absolute",
                        top: "50%",
                        right: "120px",
                        transform: "translateY(-50%)",
                        display: "flex",
                        gap: "1rem",
                        "@media (max-width: 1366px)": { right: "7rem", bottom: "4.5rem" },
                        "@media (max-width: 992px)": { display: "none" },
                    }}
                >
                    {["visa", "mastercard", "apple", "google", "coin"].map((name) => {
                        const needsInvert = name === "visa" || name === "apple";
                        return (
                            <Image
                                key={name}
                                src={`/${name}.svg`}
                                alt={name}
                                width={24}
                                height={24}
                                style={{ filter: needsInvert ? "invert(1)" : "none" }}
                            />
                        );
                    })}
                </Box>
            </Box>

            <Box
                sx={{
                    position: "absolute",
                    bottom: "4rem",
                    left: "11rem",
                    display: "flex",
                    alignItems: "center",
                    gap: "1rem",
                    "@media (max-width: 1366px)": { left: "7rem", bottom: "4.5rem" },
                    "@media (max-width: 992px)": { display: "none" },
                }}
            >
                <MuiLink href="/terms-and-conditions" sx={smallLinkStyles}>{t("terms_privacy.terms")}</MuiLink>
                <Divider orientation="vertical" flexItem sx={{ bgcolor: "#FFF" }} />
                <MuiLink href="/privacy-policy" sx={smallLinkStyles}>{t("terms_privacy.privacy")}</MuiLink>
            </Box>

            <Box sx={{ display: "none", "@media (max-width: 992px)": { display: "flex", flexDirection: "column", alignItems: "center", padding: "1rem"} }}>
                <Box>
                    <Image src={Logo} alt="logo" width={70} height={45} style={{ objectFit: "contain" }} />
                </Box>

                <Box sx={{ display: "flex", gap: "1rem", justifyContent: "center", alignItems: "center", margin: "0 1rem"  }}>
                    <MuiLink href="/terms-and-conditions" sx={smallLinkStyles}>{t("terms_privacy.terms")}</MuiLink>
                    <Divider orientation="vertical" flexItem sx={{ bgcolor: "#FFF" }} />
                    <MuiLink href="/privacy-policy" sx={smallLinkStyles}>{t("terms_privacy.privacy")}</MuiLink>
                </Box>

                <Box sx={{ display: "flex", gap: "1rem", marginBottom: "1.2rem" }}>
                    <SocialIcon href="https://facebook.com" Icon={Facebook} />
                    <SocialIcon href="https://instagram.com" Icon={Instagram} />
                     <SocialIcon href="https://wa.me/0202440994" Icon={WhatsApp} />
                    <SocialIcon href="https://www.trustpilot.com/review/www.fastcleanservice.nl" Icon={Star} />
                    <SocialIcon href="mailto:info@fastcleanservice.nl" Icon={Email} />
                </Box>

                <Box sx={{ display: "flex", gap: "1rem", justifySelf: "end" }}>
                    {["visa", "mastercard", "apple", "google", "coin"].map((name) => {
                        const needsInvert = name === "visa" || name === "apple";
                        return (
                            <Image
                                key={name}
                                src={`/${name}.svg`}
                                alt={name}
                                width={24}
                                height={24}
                                style={{ filter: needsInvert ? "invert(1)" : "none" }}
                            />
                        );
                    })}
                </Box>

                <Typography variant="body2" sx={{ ...copyrightStyle }}>
                    {t("copyright")}
                </Typography>
            </Box>
        </footer>
    );
}

// Helper Components & Styles
const linkStyles = {
    color: "#FFF",
    textDecoration: "none",
    fontSize: "1.5rem",
    fontFamily: "DMSans",
    "&:hover": { color: "primary.accentDark" },
};

const smallLinkStyles = {
    color: "#D2D2D2",
    textDecoration: "none",
    fontSize: "1.2rem",
    "&:hover": { color: "primary.accentDark" },
};

const copyrightStyle = {
    color: "#D2D2D2",
    fontSize: "1.5rem",
    fontWeight: "500",
    fontFamily: "DMSans",
    textAlign: "center",
};

const SocialIcon = ({ href, Icon }) => (
    <IconButton href={href} sx={{ color: "#FFF", "&:hover": { color: "primary.accentDark" } }}>
        <Icon sx={{ fontSize: "1.8rem" }} />
    </IconButton>
);
