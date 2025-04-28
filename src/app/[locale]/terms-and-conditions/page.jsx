"use client";
import React from "react";
import {
    Typography,
    Box,
    Container,
    useTheme,
    useMediaQuery,
} from "@mui/material";
import HeadingLinesAnimation from
        "../../../components/Home/HeadingLinesAnimation/HeadingLinesAnimation";
import { useTranslations } from "next-intl";

export default function TermsPage() {
    const theme = useTheme();
    const isSmall = useMediaQuery(theme.breakpoints.down("md"));
    const t = useTranslations("terms_and_conditions");

    const termsData = {
        title: t("title"),
        content: [
            {
                heading: t("sections.definitions.title"),
                text: [
                    t("sections.definitions.content.0"),
                    t("sections.definitions.content.1"),
                    t("sections.definitions.content.2"),
                ],
            },
            {
                heading: t("sections.articles.0.title"),
                text: [
                    t("sections.articles.0.content.0"),
                ],
            },
            {
                heading: t("sections.articles.1.title"),
                text: [
                    t("sections.articles.1.content.0"),
                    t("sections.articles.1.content.1"),
                    t("sections.articles.1.content.2"),
                ],
            },
            {
                heading: t("sections.articles.2.title"),
                text: [
                    t("sections.articles.2.content.0"),
                    t("sections.articles.2.content.1"),
                    t("sections.articles.2.content.2"),
                    t("sections.articles.2.content.3")
                ],
            },
            {
                heading: t("sections.articles.3.title"),
                text: [
                    t("sections.articles.3.content.0"),
                    t("sections.articles.3.content.1"),
                    t("sections.articles.3.content.2")
                ],
            },
            {
                heading: t("sections.articles.4.title"),
                text: [
                    t("sections.articles.4.content.0"),
                    t("sections.articles.4.content.1"),
                    t("sections.articles.4.content.2"),
                ],
            },
            {
                heading: t("sections.articles.5.title"),
                text: [t("sections.articles.5.content.0"),
                    t("sections.articles.5.content.1")
                ],
            },
            {
                heading: t("sections.articles.6.title"),
                text: [
                    t("sections.articles.6.content.0"),
                ],
            },
            {
                heading: t("sections.articles.7.title"),
                text: [t("sections.articles.7.content.0")],
            },
            {
                heading: t("sections.articles.8.title"),
                text: [
                    t("sections.articles.8.content.0"),
                ],
            },
            {
                heading: t("sections.articles.9.title"),
                text: [
                    t("sections.articles.9.content.0"),
                    t("sections.articles.9.content.1"),
                ],
            },
        ],
    };

    return (
        <Container
            maxWidth="lg"
            sx={{
                mt: isSmall ? 7 : 15,
                mb: 5,
                padding: isSmall ? "3rem" : 0,
            }}
        >
            <Box display="flex" justifyContent="center">
                <HeadingLinesAnimation
                    sx={{ fontSize: isSmall ? "3rem" : "5.6rem", fontWeight: 700 }}
                >
                    {termsData.title}
                </HeadingLinesAnimation>
            </Box>

            {termsData.content.map((section, i) => (
                <Box key={i} sx={{ mb: 3 }}>
                    <Typography
                        variant="h2"
                        sx={{
                            fontSize: isSmall ? "1.4rem" : "1.8rem",
                            fontWeight: 600,
                            mb: 1,
                        }}
                    >
                        {section.heading}
                    </Typography>

                    {section.text.map((p, idx) => (
                        <Typography
                            key={idx}
                            variant="body1"
                            sx={{
                                fontSize: isSmall ? "1rem" : "1.4rem",
                                fontWeight: 300,
                                lineHeight: 1.6,
                                mb: 1,
                            }}
                        >
                            {p}
                        </Typography>
                    ))}
                </Box>
            ))}
        </Container>
    );
}
