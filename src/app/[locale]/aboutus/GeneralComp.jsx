import React from 'react';
import {
    Box,
    Typography,
    Grid,
    Card,
    Container,
    Divider
} from '@mui/material';
import { useTheme } from "@mui/material/styles";
import { useTranslations } from "next-intl";

const ValueProposition = () => {
    const t = useTranslations('about');
    const theme = useTheme();
    const features = [
        {
            title: t("qualities.quality_as_priority.title"),
            description: t("qualities.quality_as_priority.description")
        },
        {
            title: t("qualities.our_values.title"),
            description: t("qualities.our_values.description")
        },
        {
            title: t("qualities.experts_in_detail.title"),
            description: t("qualities.experts_in_detail.description")
        },
        {
            title: t("qualities.our_successes.title"),
            description: t("qualities.our_successes.description")
        }
    ];

    return (
        <Container>
            <Card
                elevation={3}
                sx={{
                    maxWidth: "1600px",
                    p: 4,
                    zIndex: "2",
                    paddingLeft: "5rem",
                    paddingRight: "5rem",
                    borderRadius: "10px",
                    backgroundColor: theme.palette.mode === "dark" ? "rgba(255,255,255,0.05)" : "rgba(255, 255, 255, 0.05)",
                    border: `1px solid ${theme.palette.mode === "dark" ? "rgba(255,255,255,0.12)" : "#8D8D8D69"}`,
                    backdropFilter: "blur(2.4px)",
                    boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
                    "@media (max-width: 600px)": {  paddingLeft: "2rem",
                    paddingRight: "2rem",},
                }}
            >
                <Box sx={{ flexGrow: 1, display: "flex", flexDirection: "column" }}>
                    {features.map((feature, index) => (
                        <React.Fragment key={index}>
                            <Grid
                                container
                                spacing={3}
                                alignItems="center" // ✅ Centers content vertically
                                sx={{
                                    padding: {xs:"1rem",sm:"2.5rem 2rem",} // Increased padding for better spacing
                                }}
                            >
                                <Grid item xs={12} md={4}>
                                    <Typography
                                        sx={{
                                            fontWeight: 400,
                                            color: theme.palette.mode === "dark" ? "#fff" : '#232E4A',
                                            fontSize: "2.2rem",
                                            textAlign: { xs: "center", md: "left" },
                                            "@media (max-width: 600px)": { fontSize: "1.6rem" },
                                        }}
                                    >
                                        {feature.title}
                                    </Typography>
                                </Grid>
                                <Grid item xs={12} md={8}>
                                    <Typography
                                        sx={{
                                            lineHeight: 1.6,
                                            color: theme.palette.mode === "dark" ? "#C2C2C2" : "#5A5E69",
                                            fontSize: "1.6rem",
                                            fontWeight: "400",
                                            textAlign: { xs: "center", md: "left" },
                                            "@media (max-width: 600px)": { fontSize: "1.2rem" },
                                        }}
                                    >
                                        {feature.description}
                                    </Typography>
                                </Grid>
                            </Grid>

                            {/* ✅ Adds a uniform Divider between sections, except after the last one */}
                            {index < features.length - 1 && (
                                <Divider sx={{ backgroundColor: theme.palette.mode === "dark" ? "rgba(255,255,255,0.2)" : "#e0e0e0", margin: "0 2rem" }} />
                            )}
                        </React.Fragment>
                    ))}
                </Box>
            </Card>
        </Container>
    );
};

export default ValueProposition;
