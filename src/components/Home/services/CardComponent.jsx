"use client";
import React from "react";
import { Card, CardContent, Typography } from "@mui/material";
import { SvgIcon } from "@mui/material";
import styles from "./CardComponent.module.css";
import { useTheme } from "../../../contexts/themeContext";
import { useMediaQuery } from "@mui/material";

const CardComponent = ({ icon: Icon, title, description, sx }) => {
    const { theme } = useTheme();
    const isBelow900px = useMediaQuery("(max-width: 900px)");

    return (
        <Card
            className={styles.card}
            sx={{
                margin: "0 2rem",
                maxWidth: "70%",
                width: "100%",
                borderRadius: "16px",
                overflow: "hidden",
                display: "flex",
                flexDirection: "column",
                backgroundColor: "transparent",
                ...sx,
            }}
        >
            <div
                className={styles.iconWrapper}
                style={{
                    fontSize: "40px",
                    marginBottom: "0.4rem",
                }}
            >
                <Icon />
            </div>
            <CardContent
                className={styles.cardContent}
                sx={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "flex-start",
                    padding: "0.5rem 0",
                    width: "100%",
                }}
            >
                <Typography
                    sx={{
                        fontWeight: "700",
                        fontSize: "2.2rem",
                        color: theme.palette.mode === "dark" ? "#fff" : "#212121",
                    }}
                    variant="h4"
                    className={styles.title}
                >
                    {title}
                </Typography>
                <Typography
                    sx={{
                        wordSpacing: "1px",
                        fontSize: "1.4rem",
                        color: theme.palette.mode === "dark" ? "#C2C2C2" : "#535353",
                    }}
                    variant="h5"
                    className={styles.description}
                >
                    {description}
                </Typography>
            </CardContent>
        </Card>
    );
};

export default CardComponent;