"use client";
import React, { useEffect, useRef, useState } from "react";
import { Card, CardContent, Typography } from "@mui/material";
import styles from "../howitwork/HowItWork.module.css";
import Image from "next/image";
import { ServicesDesc } from "../../mui/HomePkgs";
import { useTheme } from "../../../contexts/themeContext";

const SingleWork = ({ icon, title, description, sx = {} }) => {
    const [isVisible, setIsVisible] = useState(false);
    const cardRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    observer.disconnect(); // Stop observing after animation starts
                }
            },
            { threshold: 0.1 }
        );

        const __cardRef = cardRef;
        if (cardRef.current) {
            observer.observe(cardRef.current);
        }

        return () => {
            if (__cardRef.current) {
                observer.unobserve(__cardRef.current);
            }
        };
    }, []);

    const { theme } = useTheme();

    return (
        <Card sx={sx} ref={cardRef} className={`${styles.card} ${isVisible ? styles.visible : ""}`}>
            <CardContent className={styles.cardContent}>
                <Image
                    width={50}
                    height={50}
                    src={icon}
                    alt={title}
                    className={styles.icon}
                    style={{ filter: "invert(72%) sepia(100%) saturate(1000%) hue-rotate(170deg) brightness(90%) contrast(100%)", }}
                />

                <ServicesDesc
                    sx={{
                        fontSize: "3.5rem",
                        marginBottom: "0.5rem",
                        marginTop: "0.2rem !important",
                        color: theme.palette.primary.contrastText,
                        fontWeight: "bold",
                    }}
                    variant="h4"
                    component="div"
                    className={styles.title}
                >
                    {title}
                </ServicesDesc>
                <Typography variant="h5" color="text.secondary" sx={{ fontFamily: "BDSansBold" }}>
                    {description}
                </Typography>
            </CardContent>
        </Card>
    );
};

export default SingleWork;