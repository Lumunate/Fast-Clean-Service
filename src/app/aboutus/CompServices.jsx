"use client";
import React from "react";
import { Box, Typography, Grid, useTheme, styled } from "@mui/material";

const Container = styled(Box)(({ theme }) => ({
    maxWidth: "101rem",
    margin: "7.8rem auto 0",
    padding: "0 4rem",
}));

const ServiceCard = styled(Box)(({ theme }) => ({
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    padding: "5rem",
    borderRadius: "10px",
    backgroundColor: theme.palette.mode === "light" ? "#fff" : "#141414",
    boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
    backdropFilter: "blur(14.4px)",
    border: "0.3px solid rgba(0, 0, 0, 0.12)",
    width: "100%",
    height: "100%",
    minWidth: "46.9rem",
    transition: "all 0.3s ease",
    "&:hover": {
        boxShadow: "0 6px 15px rgba(0, 0, 0, 0.15)",
    },
    "@media (max-width: 900px)": {
        minWidth: 0,
    },
}));

const ServiceIcon = styled("img")(({ theme }) => ({
    width: "90px",
    height: "90px",
    marginBottom: "1.5rem",
    filter: theme.palette.mode === "dark" ? "invert(1)" : "none",
}));

const services = [
    {
        icon: "/approved.svg",
        title: "Full Detailing",
        description: "Comprehensive cleaning and restoration",
    },
    {
        icon: "/sheild.svg",
        title: "Paint Sealant",
        description: "Long-lasting paint protection",
    },
    {
        icon: "/roller.svg",
        title: "Glass Coating",
        description: "Advanced hydrophobic treatment",
    },
    {
        icon: "/brush.svg",
        title: "Ceramic Coating",
        description: "Ultimate shine and protection",
    },
];

export default function CompServices() {
    const theme = useTheme();

    return (
        <Container>
            <Grid
                container
                spacing={4}
                sx={{
                    display: "grid",
                    gridTemplateColumns: {
                        xs: "1fr",
                        sm: "1fr 1fr",
                    },
                    gap: "1rem",
                    paddingLeft: "3rem",
                }}
            >
                {services.map((service, index) => (
                    <Box
                        key={index}
                        sx={{
                            width: '100%',
                            display: 'flex',
                            justifyContent: 'center',
                        }}
                    >
                        <ServiceCard>
                            <ServiceIcon src={service.icon} alt={service.title} />
                            <Typography
                                sx={{
                                    fontSize: "1.8rem",
                                    fontWeight: 400,
                                    color: theme.palette.mode === "light" ? "#000" : "#fff",
                                    marginBottom: "1rem",
                                    textAlign: "center",
                                }}
                            >
                                {service.title}
                            </Typography>
                            <Typography
                                sx={{
                                    fontSize: "1.4rem",
                                    fontWeight: 300,
                                    color: theme.palette.mode === "light" ? "#000" : "#fff",
                                    textAlign: "center",
                                }}
                            >
                                {service.description}
                            </Typography>
                        </ServiceCard>
                    </Box>
                ))}
            </Grid>
        </Container>
    );
}
