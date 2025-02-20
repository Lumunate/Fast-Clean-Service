"use client";
import React from 'react';
import {
    Container,
    Box,
    Typography,
    Link,
    List,
    ListItem,
    ListItemText,
    useTheme,
    useMediaQuery
} from '@mui/material';
import HeadingLinesAnimation from "../../../components/Home/HeadingLinesAnimation/HeadingLinesAnimation";
import { useTranslations } from "next-intl";

export default function PrivacyPolicyPage() {
    const t = useTranslations("privacy_policy");
    const theme = useTheme();
    const isSmallScreen = useMediaQuery(theme.breakpoints.down('md'));

    return (
        <Container maxWidth="lg" sx={{ py: 4, mt: 12, mb: 5 }}>
            <Box>
                {/* Main Heading with animated lines */}
                <Box display="flex" justifyContent="center" alignItems="center">
                    <HeadingLinesAnimation
                        sx={{
                            fontSize: isSmallScreen ? "3rem" : "5.6rem",
                            fontWeight: 700
                        }}
                    >
                        {t("title")}
                    </HeadingLinesAnimation>
                </Box>

                {/* “Last updated” text */}
                <Box display="flex" justifyContent="center" alignItems="center">
                    <Typography
                        component="p"
                        paragraph
                        sx={{
                            fontWeight: "500",
                            mt: 3,
                            fontSize: isSmallScreen ? "1.3rem" : "1.6rem"
                        }}
                    >
                        {t("sections.intro.last_updated")}
                    </Typography>
                </Box>

                {/* Intro paragraphs */}
                <Typography
                    component="p"
                    paragraph
                    sx={{ fontSize: isSmallScreen ? "1.4rem" : "1.6rem" }}
                >
                    {t("sections.intro.paragraphs.0")}
                </Typography>

                <Typography
                    component="p"
                    paragraph
                    sx={{ fontSize: isSmallScreen ? "1.4rem" : "1.6rem" }}
                >
                    {t("sections.intro.paragraphs.1")}
                </Typography>

                {/* H2 (with fontWeight: 600) - Article 0 */}
                <Typography
                    component="h2"
                    gutterBottom
                    sx={{
                        fontSize: isSmallScreen ? "2rem" : "2.8rem",
                        mt: 4,
                        fontWeight: 600
                    }}
                >
                    {t("sections.articles.0.title")}
                </Typography>

                {/* H3 (with fontWeight: 500) - Interpretation */}
                <Typography
                    component="h3"
                    gutterBottom
                    sx={{
                        fontSize: isSmallScreen ? "1.8rem" : "2.4rem",
                        fontWeight: 500
                    }}
                >
                    {t("sections.articles.0.content.0")}
                </Typography>
                <Typography
                    component="p"
                    paragraph
                    sx={{ fontSize: isSmallScreen ? "1.4rem" : "1.6rem" }}
                >
                    {t("sections.articles.0.content.1")}
                </Typography>

                {/* H3 (with fontWeight: 500) - Definitions */}
                <Typography
                    component="h3"
                    gutterBottom
                    sx={{
                        fontSize: isSmallScreen ? "1.8rem" : "2.4rem",
                        fontWeight: 500
                    }}
                >
                    {t("sections.articles.0.content.2")}
                </Typography>
                <Typography
                    component="p"
                    paragraph
                    sx={{ fontSize: isSmallScreen ? "1.4rem" : "1.6rem" }}
                >
                    {t("sections.articles.0.content.3")}
                </Typography>

                {/* The bullet list for the definitions */}
                <List sx={{ listStyleType: 'disc', pl: 4 }}>
                    {/* We have 12 bullet items, from .4 to .15 */}
                    {[...Array(12).keys()].map((i) => (
                        <ListItem key={i} sx={{ display: 'list-item' }}>
                            <ListItemText
                                primary={
                                    <Typography
                                        component="span"
                                        sx={{ fontSize: isSmallScreen ? "1.4rem" : "1.6rem" }}
                                    >
                                        {t(`sections.articles.0.content.${i + 4}`)}
                                    </Typography>
                                }
                            />
                        </ListItem>
                    ))}
                </List>

                {/* H2 (with fontWeight: 600) - Article 1 */}
                <Typography
                    component="h2"
                    gutterBottom
                    sx={{
                        fontSize: isSmallScreen ? "2rem" : "2.8rem",
                        mt: 4,
                        fontWeight: 600
                    }}
                >
                    {t("sections.articles.1.title")}
                </Typography>

                {/* H3 (with fontWeight: 500) - "Types of Data Collected" is .content[0] */}
                <Typography
                    component="h3"
                    gutterBottom
                    sx={{
                        fontSize: isSmallScreen ? "1.8rem" : "2.4rem",
                        fontWeight: 500
                    }}
                >
                    {t("sections.articles.1.content.0")}
                </Typography>

                {/* H4 - "Personal Data" is .content[1] */}
                <Typography
                    component="h4"
                    gutterBottom
                    sx={{ fontSize: isSmallScreen ? "1.6rem" : "2rem" }}
                >
                    {t("sections.articles.1.content.1")}
                </Typography>
                <Typography
                    component="p"
                    paragraph
                    sx={{ fontSize: isSmallScreen ? "1.4rem" : "1.6rem" }}
                >
                    {t("sections.articles.1.content.2")}
                </Typography>

                {/* Bullet list of Personal Data items: .content[3] -> .content[7] */}
                <List sx={{ listStyleType: 'disc', pl: 4 }}>
                    {[3,4,5,6,7].map((i) => (
                        <ListItem key={i} sx={{ display: 'list-item' }}>
                            <ListItemText
                                primary={
                                    <Typography
                                        component="span"
                                        sx={{ fontSize: isSmallScreen ? "1.4rem" : "1.6rem" }}
                                    >
                                        {t(`sections.articles.1.content.${i}`)}
                                    </Typography>
                                }
                            />
                        </ListItem>
                    ))}
                </List>

                {/* H4 - "Usage Data" is .content[8] */}
                <Typography
                    component="h4"
                    gutterBottom
                    sx={{ fontSize: isSmallScreen ? "1.6rem" : "2rem", mt: 2 }}
                >
                    {t("sections.articles.1.content.8")}
                </Typography>
                <Typography
                    component="p"
                    paragraph
                    sx={{ fontSize: isSmallScreen ? "1.4rem" : "1.6rem" }}
                >
                    {t("sections.articles.1.content.9")}
                </Typography>
                <Typography
                    component="p"
                    paragraph
                    sx={{ fontSize: isSmallScreen ? "1.4rem" : "1.6rem" }}
                >
                    {t("sections.articles.1.content.10")}
                </Typography>
                <Typography
                    component="p"
                    paragraph
                    sx={{ fontSize: isSmallScreen ? "1.4rem" : "1.6rem" }}
                >
                    {t("sections.articles.1.content.11")}
                </Typography>
                <Typography
                    component="p"
                    paragraph
                    sx={{ fontSize: isSmallScreen ? "1.4rem" : "1.6rem" }}
                >
                    {t("sections.articles.1.content.12")}
                </Typography>

                {/* H4 - "Tracking Technologies and Cookies" is .content[13] */}
                <Typography
                    component="h4"
                    gutterBottom
                    sx={{ fontSize: isSmallScreen ? "1.6rem" : "2rem" }}
                >
                    {t("sections.articles.1.content.13")}
                </Typography>
                <Typography
                    component="p"
                    paragraph
                    sx={{ fontSize: isSmallScreen ? "1.4rem" : "1.6rem" }}
                >
                    {t("sections.articles.1.content.14")}
                </Typography>

                {/* Another bullet list with 2 items: .content[15] and .content[16] */}
                <List sx={{ listStyleType: 'disc', pl: 4 }}>
                    {[15,16].map((i) => (
                        <ListItem key={i} sx={{ display: 'list-item' }}>
                            <ListItemText
                                primary={
                                    <Typography
                                        component="span"
                                        sx={{ fontSize: isSmallScreen ? "1.4rem" : "1.6rem" }}
                                    >
                                        {t(`sections.articles.1.content.${i}`)}
                                    </Typography>
                                }
                            />
                        </ListItem>
                    ))}
                </List>

                <Typography
                    component="p"
                    paragraph
                    sx={{ fontSize: isSmallScreen ? "1.4rem" : "1.6rem" }}
                >
                    {t("sections.articles.1.content.17")}
                </Typography>

                <Typography
                    component="p"
                    paragraph
                    sx={{ fontSize: isSmallScreen ? "1.4rem" : "1.6rem" }}
                >
                    {t("sections.articles.1.content.18")}
                </Typography>

                {/* Cookies detail bullet sections: from .content[19] all the way to .content[35] */}
                {/* "• Necessary / Essential Cookies" -> .content[19] to .content[23] */}
                <Typography
                    component="p"
                    paragraph
                    sx={{ fontSize: isSmallScreen ? "1.4rem" : "1.6rem" }}
                >
                    {t("sections.articles.1.content.19")}
                </Typography>

                <Typography
                    component="p"
                    sx={{ fontSize: isSmallScreen ? "1.2rem" : "1.4rem", mb: 2 }}
                >
                    <strong>{t("sections.articles.1.content.20")}</strong>
                </Typography>
                <Typography
                    component="p"
                    sx={{ fontSize: isSmallScreen ? "1.2rem" : "1.4rem", mb: 2 }}
                >
                    {t("sections.articles.1.content.21")}
                </Typography>
                <Typography
                    component="p"
                    sx={{ fontSize: isSmallScreen ? "1.2rem" : "1.4rem", mb: 2 }}
                >
                    {t("sections.articles.1.content.22")}
                </Typography>
                <Typography
                    component="p"
                    sx={{ fontSize: isSmallScreen ? "1.2rem" : "1.4rem", mb: 2 }}
                >
                    {t("sections.articles.1.content.23")}
                </Typography>

                {/* "• Cookies Policy / Notice Acceptance Cookies" -> .content[24] to .content[26] */}
                <Typography
                    component="p"
                    paragraph
                    sx={{ fontSize: isSmallScreen ? "1.4rem" : "1.6rem", mt: 2 }}
                >
                    {t("sections.articles.1.content.24")}
                </Typography>
                <Typography
                    component="p"
                    sx={{ fontSize: isSmallScreen ? "1.2rem" : "1.4rem", mb: 2 }}
                >
                    <strong>{t("sections.articles.1.content.25")}</strong>
                </Typography>
                <Typography
                    component="p"
                    sx={{ fontSize: isSmallScreen ? "1.2rem" : "1.4rem", mb: 2 }}
                >
                    {t("sections.articles.1.content.26")}
                </Typography>

                {/* "• Functionality Cookies" -> .content[27] to .content[29] */}
                <Typography
                    component="p"
                    paragraph
                    sx={{ fontSize: isSmallScreen ? "1.4rem" : "1.6rem", mt: 2 }}
                >
                    {t("sections.articles.1.content.27")}
                </Typography>
                <Typography
                    component="p"
                    sx={{ fontSize: isSmallScreen ? "1.2rem" : "1.4rem", mb: 2 }}
                >
                    <strong>{t("sections.articles.1.content.28")}</strong>
                </Typography>
                <Typography
                    component="p"
                    sx={{ fontSize: isSmallScreen ? "1.2rem" : "1.4rem", mb: 2 }}
                >
                    {t("sections.articles.1.content.29")}
                </Typography>

                <Typography
                    component="p"
                    paragraph
                    sx={{ fontSize: isSmallScreen ? "1.4rem" : "1.6rem", mt: 2 }}
                >
                    {t("sections.articles.1.content.30")}
                </Typography>

                {/* H3 (with fontWeight: 500) - Article 2 */}
                <Typography
                    component="h3"
                    gutterBottom
                    sx={{
                        fontSize: isSmallScreen ? "1.8rem" : "2.4rem",
                        mt: 4,
                        fontWeight: 500
                    }}
                >
                    {t("sections.articles.2.title")}
                </Typography>
                <Typography
                    component="p"
                    paragraph
                    sx={{ fontSize: isSmallScreen ? "1.4rem" : "1.6rem" }}
                >
                    {t("sections.articles.2.content.0")}
                </Typography>

                {/* Bullet list of ways data can be used: .content[1] to .content[9] */}
                <List sx={{ listStyleType: 'disc', pl: 4 }}>
                    {[1,2,3,4,5,6,7,8].map((i) => (
                        <ListItem key={i} sx={{ display: 'list-item' }}>
                            <ListItemText
                                primary={
                                    <Typography
                                        component="span"
                                        sx={{ fontSize: isSmallScreen ? "1.4rem" : "1.6rem" }}
                                    >
                                        {t(`sections.articles.2.content.${i}`)}
                                    </Typography>
                                }
                            />
                        </ListItem>
                    ))}
                </List>

                <Typography
                    component="p"
                    paragraph
                    sx={{ fontSize: isSmallScreen ? "1.4rem" : "1.6rem" }}
                >
                    {t("sections.articles.2.content.9")}
                </Typography>

                {/* Another bullet list for data sharing: .content[10] to .content[15] */}
                <List sx={{ listStyleType: 'disc', pl: 4 }}>
                    {[10,11,12,13,14,15].map((i) => (
                        <ListItem key={i} sx={{ display: 'list-item' }}>
                            <ListItemText
                                primary={
                                    <Typography
                                        component="span"
                                        sx={{ fontSize: isSmallScreen ? "1.4rem" : "1.6rem" }}
                                    >
                                        {t(`sections.articles.2.content.${i}`)}
                                    </Typography>
                                }
                            />
                        </ListItem>
                    ))}
                </List>

                {/* H3 (with fontWeight: 500) - Article 3 */}
                <Typography
                    component="h3"
                    gutterBottom
                    sx={{
                        fontSize: isSmallScreen ? "1.8rem" : "2.4rem",
                        mt: 4,
                        fontWeight: 500
                    }}
                >
                    {t("sections.articles.3.title")}
                </Typography>
                <Typography
                    component="p"
                    paragraph
                    sx={{ fontSize: isSmallScreen ? "1.4rem" : "1.6rem" }}
                >
                    {t("sections.articles.3.content.0")}
                </Typography>
                <Typography
                    component="p"
                    paragraph
                    sx={{ fontSize: isSmallScreen ? "1.4rem" : "1.6rem" }}
                >
                    {t("sections.articles.3.content.1")}
                </Typography>

                {/* H3 (with fontWeight: 500) - Article 4 */}
                <Typography
                    component="h3"
                    gutterBottom
                    sx={{
                        fontSize: isSmallScreen ? "1.8rem" : "2.4rem",
                        mt: 4,
                        fontWeight: 500
                    }}
                >
                    {t("sections.articles.4.title")}
                </Typography>
                <Typography
                    component="p"
                    paragraph
                    sx={{ fontSize: isSmallScreen ? "1.4rem" : "1.6rem" }}
                >
                    {t("sections.articles.4.content.0")}
                </Typography>
                <Typography
                    component="p"
                    paragraph
                    sx={{ fontSize: isSmallScreen ? "1.4rem" : "1.6rem" }}
                >
                    {t("sections.articles.4.content.1")}
                </Typography>
                <Typography
                    component="p"
                    paragraph
                    sx={{ fontSize: isSmallScreen ? "1.4rem" : "1.6rem" }}
                >
                    {t("sections.articles.4.content.2")}
                </Typography>

                {/* H3 (with fontWeight: 500) - Article 5 */}
                <Typography
                    component="h3"
                    gutterBottom
                    sx={{
                        fontSize: isSmallScreen ? "1.8rem" : "2.4rem",
                        fontWeight: 500
                    }}
                >
                    {t("sections.articles.5.title")}
                </Typography>
                <Typography
                    component="p"
                    paragraph
                    sx={{ fontSize: isSmallScreen ? "1.4rem" : "1.6rem" }}
                >
                    {t("sections.articles.5.content.0")}
                </Typography>
                <Typography
                    component="p"
                    paragraph
                    sx={{ fontSize: isSmallScreen ? "1.4rem" : "1.6rem" }}
                >
                    {t("sections.articles.5.content.1")}
                </Typography>
                <Typography
                    component="p"
                    paragraph
                    sx={{ fontSize: isSmallScreen ? "1.4rem" : "1.6rem" }}
                >
                    {t("sections.articles.5.content.2")}
                </Typography>
                <Typography
                    component="p"
                    paragraph
                    sx={{ fontSize: isSmallScreen ? "1.4rem" : "1.6rem" }}
                >
                    {t("sections.articles.5.content.3")}
                </Typography>

                {/* H3 (with fontWeight: 500) - Article 6 */}
                <Typography
                    component="h3"
                    gutterBottom
                    sx={{
                        fontSize: isSmallScreen ? "1.8rem" : "2.4rem",
                        mt: 4,
                        fontWeight: 500
                    }}
                >
                    {t("sections.articles.6.title")}
                </Typography>

                {/* H4 - Business Transactions */}
                <Typography
                    component="h4"
                    gutterBottom
                    sx={{ fontSize: isSmallScreen ? "1.6rem" : "2rem" }}
                >
                    {t("sections.articles.6.content.0")}
                </Typography>
                <Typography
                    component="p"
                    paragraph
                    sx={{ fontSize: isSmallScreen ? "1.4rem" : "1.6rem" }}
                >
                    {t("sections.articles.6.content.1")}
                </Typography>

                {/* H4 - Law enforcement */}
                <Typography
                    component="h4"
                    gutterBottom
                    sx={{ fontSize: isSmallScreen ? "1.6rem" : "2rem" }}
                >
                    {t("sections.articles.6.content.2")}
                </Typography>
                <Typography
                    component="p"
                    paragraph
                    sx={{ fontSize: isSmallScreen ? "1.4rem" : "1.6rem" }}
                >
                    {t("sections.articles.6.content.3")}
                </Typography>

                {/* H4 - Other legal requirements */}
                <Typography
                    component="h4"
                    gutterBottom
                    sx={{ fontSize: isSmallScreen ? "1.6rem" : "2rem" }}
                >
                    {t("sections.articles.6.content.4")}
                </Typography>
                <Typography
                    component="p"
                    paragraph
                    sx={{ fontSize: isSmallScreen ? "1.4rem" : "1.6rem" }}
                >
                    {t("sections.articles.6.content.5")}
                </Typography>

                {/* bullet list for the other legal requirements: .content[6..10] */}
                <List sx={{ listStyleType: 'disc', pl: 4 }}>
                    {[6,7,8,9,10].map((i) => (
                        <ListItem key={i} sx={{ display: 'list-item' }}>
                            <ListItemText
                                primary={
                                    <Typography
                                        component="span"
                                        sx={{ fontSize: isSmallScreen ? "1.4rem" : "1.6rem" }}
                                    >
                                        {t(`sections.articles.6.content.${i}`)}
                                    </Typography>
                                }
                            />
                        </ListItem>
                    ))}
                </List>

                {/* H3 (with fontWeight: 500) - Article 7 */}
                <Typography
                    component="h3"
                    gutterBottom
                    sx={{
                        fontSize: isSmallScreen ? "1.8rem" : "2.4rem",
                        mt: 4,
                        fontWeight: 500
                    }}
                >
                    {t("sections.articles.7.title")}
                </Typography>
                <Typography
                    component="p"
                    paragraph
                    sx={{ fontSize: isSmallScreen ? "1.4rem" : "1.6rem" }}
                >
                    {t("sections.articles.7.content.0")}
                </Typography>

                {/* H2 (with fontWeight: 600) - Article 8 */}
                <Typography
                    component="h2"
                    gutterBottom
                    sx={{
                        fontSize: isSmallScreen ? "2rem" : "2.8rem",
                        fontWeight: 600
                    }}
                >
                    {t("sections.articles.8.title")}
                </Typography>
                <Typography
                    component="p"
                    paragraph
                    sx={{ fontSize: isSmallScreen ? "1.4rem" : "1.6rem" }}
                >
                    {t("sections.articles.8.content.0")}
                </Typography>
                <Typography
                    component="p"
                    paragraph
                    sx={{ fontSize: isSmallScreen ? "1.4rem" : "1.6rem" }}
                >
                    {t("sections.articles.8.content.1")}
                </Typography>

                {/* H2 (with fontWeight: 600) - Article 9 */}
                <Typography
                    component="h2"
                    gutterBottom
                    sx={{
                        fontSize: isSmallScreen ? "2rem" : "2.8rem",
                        fontWeight: 600
                    }}
                >
                    {t("sections.articles.9.title")}
                </Typography>
                <Typography
                    component="p"
                    paragraph
                    sx={{ fontSize: isSmallScreen ? "1.4rem" : "1.6rem" }}
                >
                    {t("sections.articles.9.content.0")}
                </Typography>
                <Typography
                    component="p"
                    paragraph
                    sx={{ fontSize: isSmallScreen ? "1.4rem" : "1.6rem" }}
                >
                    {t("sections.articles.9.content.1")}
                </Typography>

                {/* H2 (with fontWeight: 600) - Article 10 */}
                <Typography
                    component="h2"
                    gutterBottom
                    sx={{
                        fontSize: isSmallScreen ? "2rem" : "2.8rem",
                        fontWeight: 600
                    }}
                >
                    {t("sections.articles.10.title")}
                </Typography>
                <Typography
                    component="p"
                    paragraph
                    sx={{ fontSize: isSmallScreen ? "1.4rem" : "1.6rem" }}
                >
                    {t("sections.articles.10.content.0")}
                </Typography>
                <Typography
                    component="p"
                    paragraph
                    sx={{ fontSize: isSmallScreen ? "1.4rem" : "1.6rem" }}
                >
                    {t("sections.articles.10.content.1")}
                </Typography>

                {/* H2 (with fontWeight: 600) - Article 11 */}
                <Typography
                    component="h2"
                    gutterBottom
                    sx={{
                        fontSize: isSmallScreen ? "2rem" : "2.8rem",
                        fontWeight: 600
                    }}
                >
                    {t("sections.articles.11.title")}
                </Typography>
                <Typography
                    component="p"
                    paragraph
                    sx={{ fontSize: isSmallScreen ? "1.4rem" : "1.6rem" }}
                >
                    {t("sections.articles.11.content.0")}
                </Typography>
                <Typography
                    component="p"
                    paragraph
                    sx={{ fontSize: isSmallScreen ? "1.4rem" : "1.6rem" }}
                >
                    {t("sections.articles.11.content.1")}
                </Typography>
                <Typography
                    component="p"
                    paragraph
                    sx={{ fontSize: isSmallScreen ? "1.4rem" : "1.6rem" }}
                >
                    {t("sections.articles.11.content.2")}
                </Typography>
            </Box>
        </Container>
    );
}
