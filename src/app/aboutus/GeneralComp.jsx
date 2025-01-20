import React from 'react';
import {
    Box,
    Typography,
    Grid,
    Paper,
    Container
} from '@mui/material';

const ValueProposition = () => {
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
        <Container maxWidth="lg">
            <Paper elevation={0} sx={{ p: 4 }}>
                <Box sx={{ flexGrow: 1 }}>
                    {features.map((feature, index) => (
                        <Grid
                            container
                            key={index}
                            spacing={3}
                            sx={{
                                borderTop: index !== 0 ? '1px solid #e0e0e0' : 'none',
                                py: 3
                            }}
                        >
                            <Grid item xs={12} md={4}>
                                <Typography
                                    sx={{
                                        fontWeight: 600,
                                        color: '#232E4A',
                                        fontSize: "2.2rem",
                                    }}
                                >
                                    {feature.title}
                                </Typography>
                            </Grid>
                            <Grid item xs={12} md={8}>
                                <Typography
                                    sx={{
                                        lineHeight: 1.6,
                                        color: '#5A5E69',
                                        fontSize: "1.6rem",
                                }}
                                >
                                    {feature.description}
                                </Typography>
                            </Grid>
                        </Grid>
                    ))}
                </Box>
            </Paper>
        </Container>
    );
};

export default ValueProposition;