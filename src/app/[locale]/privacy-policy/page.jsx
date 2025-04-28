"use client";
import React from "react";
import {
    Container,
    Box,
    Typography,
    List,
    ListItem,
    ListItemText,
    useTheme,
    useMediaQuery,
} from "@mui/material";
import HeadingLinesAnimation from
        "../../../components/Home/HeadingLinesAnimation/HeadingLinesAnimation";
import { useTranslations } from "next-intl";

export default function PrivacyPolicyPage() {
    const t = useTranslations("privacy_policy");
    const theme = useTheme();
    const isSmall = useMediaQuery(theme.breakpoints.down("md"));
    const pStyle = { fontSize: isSmall ? "1.4rem" : "1.6rem" };

    /* helper for bullet lists */
    const renderList = (keys) => (
        <List sx={{ listStyleType: "disc", pl: 4 }}>
            {keys.map((k) => (
                <ListItem key={k} sx={{ display: "list-item" }}>
                    <ListItemText
                        primary={<Typography component="span" sx={pStyle}>{t(k)}</Typography>}
                    />
                </ListItem>
            ))}
        </List>
    );

    return (
        <Container maxWidth="lg" sx={{ py: 4, mt: 12, mb: 5 }}>
            <Box>
                <Box display="flex" justifyContent="center">
                    <HeadingLinesAnimation
                        sx={{ fontSize: isSmall ? "3rem" : "5.6rem", fontWeight: 700 }}
                    >
                        {t("title")}
                    </HeadingLinesAnimation>
                </Box>

                <Box display="flex" justifyContent="center">
                    <Typography component="p" paragraph sx={{ fontWeight: 500, mt: 3, ...pStyle }}>
                        {t("sections.intro.last_updated")}
                    </Typography>
                </Box>

                <Typography component="p" paragraph sx={pStyle}>
                    {t("sections.intro.paragraphs.0")}
                </Typography>
                <Typography component="p" paragraph sx={pStyle}>
                    {t("sections.intro.paragraphs.1")}
                </Typography>

                <Typography component="h2" sx={{ mt: 4, fontSize: isSmall ? "2rem" : "2.8rem", fontWeight: 600 }}>
                    {t("sections.articles.0.title")}
                </Typography>

                <Typography component="h3" sx={{ fontSize: isSmall ? "1.8rem" : "2.4rem", fontWeight: 500 }}>
                    {t("sections.articles.0.content.0")}
                </Typography>
                <Typography component="p" paragraph sx={pStyle}>
                    {t("sections.articles.0.content.1")}
                </Typography>

                <Typography component="h3" sx={{ fontSize: isSmall ? "1.8rem" : "2.4rem", fontWeight: 500 }}>
                    {t("sections.articles.0.content.2")}
                </Typography>

                {renderList(
                    [...Array(10).keys()].map((i) => `sections.articles.0.content.${i + 3}`)
                )}

                <Typography component="h2" sx={{ mt: 4, fontSize: isSmall ? "2rem" : "2.8rem", fontWeight: 600 }}>
                    {t("sections.articles.1.title")}
                </Typography>

                <Typography component="h3" sx={{ fontSize: isSmall ? "1.8rem" : "2.4rem", fontWeight: 500 }}>
                    {t("sections.articles.1.content.0")}
                </Typography>

                <Typography component="h4" sx={{ fontSize: isSmall ? "1.6rem" : "2rem" }}>
                    {t("sections.articles.1.content.1")}
                </Typography>
                <Typography component="p" paragraph sx={pStyle}>
                    {t("sections.articles.1.content.2")}
                </Typography>
                {renderList(
                    [...Array(6).keys()].map((i) => `sections.articles.1.content.${i + 3}`)
                )}

                <Typography component="h4" sx={{ fontSize: isSmall ? "1.6rem" : "2rem", mt: 3 }}>
                    {t("sections.articles.1.content.9")}
                </Typography>
                <Typography component="p" paragraph sx={pStyle}>
                    {t("sections.articles.1.content.10")}
                </Typography>
                {renderList(
                    [...Array(6).keys()].map((i) => `sections.articles.1.content.${i + 11}`)
                )}

                {[2, 3, 4, 5, 6].map((a) => (
                    <Box key={a} sx={{ mt: 4 }}>
                        <Typography
                            component="h2"
                            sx={{ fontSize: isSmall ? "2rem" : "2.8rem", fontWeight: 600 }}
                        >
                            {t(`sections.articles.${a}.title`)}
                        </Typography>

                        <Typography component="p" paragraph sx={pStyle}>
                            {t(`sections.articles.${a}.content.0`)}
                        </Typography>
                    </Box>
                ))}

                <Box sx={{ mt: 4 }}>
                    <Typography
                        component="h2"
                        sx={{ fontSize: isSmall ? "2rem" : "2.8rem", fontWeight: 600 }}
                    >
                        {t("sections.articles.7.title")}
                    </Typography>

                    <Typography component="p" paragraph sx={pStyle}>
                        {t("sections.articles.7.content.0")}
                    </Typography>
                    <Typography component="p" paragraph sx={pStyle}>
                        {t("sections.articles.7.content.1")}
                    </Typography>
                    <Typography component="p" paragraph sx={pStyle}>
                        {t("sections.articles.7.content.2")}
                    </Typography>
                </Box>


            </Box>
        </Container>
    );
}
