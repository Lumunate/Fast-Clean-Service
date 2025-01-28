import React from 'react';
import {
    Box,
    Typography,
    Grid,
    Card,
    Container
} from '@mui/material';
import { useTheme } from "@mui/material/styles";

const ValueProposition = () => {
    const theme = useTheme();
    const features = [
        {
            title: "Quality as a Priority",
            description: "We prioritize top-notch quality with fully equipped service buses and cutting edge cleaning techniques to perfect every detail."
        },
        {
            title: "Our Values",
            description: "Every car deserves the best, and we deliver excellence for both private and business customers."
        },
        {
            title: "Experts in Detail",
            description: "Our certified team uses advanced techniques in polishing, coating, and steam cleaning for flawless results."
        },
        {
            title: "Our Successes",
            description: "As a certified leader in detailing, we provide professional treatments that extend vehicle life and restore a like-new appearance."
        }
    ];

    return (
        <Container>
            <Card
                elevation={3}
                sx={{
                    maxWidth: "1200px",
                    p: 4,
                    paddingLeft: "5rem",
                    paddingRight: "5rem",
                    borderRadius: "10px",
                    background: theme.palette.mode === "dark" ? "rgba(255, 255, 255, 0)" : "rgba(255, 255, 255, 0.1)",
                    boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
                    border: theme.palette.mode === "dark" ? "0.3px solid rgba(255, 255, 255, 0.12)" : "0.3px solid rgba(0, 0, 0, 0.12)",
                }}
            >
                <Box sx={{ flexGrow: 1 }}>
                    {features.map((feature, index) => (
                        <Grid
                            container
                            key={index}
                            spacing={3}
                            sx={{
                                borderTop: index !== 0 ? '1px solid #e0e0e0' : 'none',
                                padding: "2rem",
                            }}
                        >
                            <Grid item xs={12} md={4}>
                                <Typography
                                    sx={{
                                        fontWeight: 600,
                                        color: theme.palette.mode === "dark" ? "#fff" : '#232E4A',
                                        fontSize: "2.2rem",
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
                                        color: theme.palette.mode === "dark" ? "#D5D5D5" : "#000",
                                        fontSize: "1.6rem",
                                        marginBottom: "1.4rem",
                                        "@media (max-width: 600px)": { fontSize: "1.2rem" },
                                }}
                                >
                                    {feature.description}
                                </Typography>
                            </Grid>
                        </Grid>
                    ))}
                </Box>
            </Card>
        </Container>
    );
};

export default ValueProposition;