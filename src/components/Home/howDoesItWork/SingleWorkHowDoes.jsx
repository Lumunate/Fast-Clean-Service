"use client";
import React, { useEffect, useRef, useState } from "react";
import { Card, CardContent, Typography } from "@mui/material";
import styles from "./HowDoseItWork.module.css";
import Image from "next/image";
import { ServicesDesc } from "../../mui/HomePkgs";
import { useTheme } from "../../../contexts/themeContext";

const SingleWorkHowDoes = ({ icon, title, description, index, sx = {} }) => {
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
        <Card
            sx={{
                ...sx,
                backgroundColor: "transparent",
                boxShadow: "none",
                border: "none",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                textAlign: "center",
                padding: "8px",
                height: "100%",
                animation: `slideInLTR 1s ease-in-out`,
            }}
            ref={cardRef}
            className={`${styles.card} ${isVisible ? styles.visible : ""}`}
        >
            <CardContent sx={{ width: "330px", padding: "0" }}>
                <Image
                    className="iconPic"
                    width={80}
                    height={80}
                    src={icon}
                    alt={title}
                    style={{
                        backgroundColor: "#00C3FF",
                        padding: "20px",
                        borderRadius: "50%",
                    }}
                />

                <Typography
                    sx={{
                        fontSize: "2rem",
                        color: theme.palette.mode === "dark" ? "#fff" : "#232E4A",
                        marginTop: "1rem",
                    }}
                    variant="h6"
                >
                    {index} {/* Display the index */}
                </Typography>

                <ServicesDesc
                    sx={{
                        fontSize: "22px !important",
                        color: theme.palette.primary.contrastText,
                        fontWeight: "400",
                    }}
                    variant="h4"
                    component="div"
                    className={styles.title}
                >
                    {title}
                </ServicesDesc>
                <Typography
                    sx={{
                        fontSize: "14px",
                        paddingLeft: "11px",
                        paddingRight: "11px",
                    }}
                    variant="h5"
                    color="text.secondary"
                >
                    {description}
                </Typography>
            </CardContent>
        </Card>
    );
};

export default SingleWorkHowDoes;
