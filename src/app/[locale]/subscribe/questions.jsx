"use client";
import React, { useState } from "react";
import { Box, Collapse, IconButton, List, ListItem, Typography } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import { SectionHeading } from "../../../components/mui/HomePkgs";
import { useTheme } from "../../../contexts/themeContext";
import {useTranslations} from "next-intl";

const Questions = () => {
    const [openIndex, setOpenIndex] = useState([]);
    const { theme } = useTheme();
    const t = useTranslations('subscriptions.faq');

    const questionsData = [
        {
            question: t("questions.0.question"),
            answer: (
                <>
                    <p>{t("questions.0.answer")}</p>
                </>
            ),
        },
        {
            question: t("questions.1.question"),
            answer: (
                <>
                    <p>{t("questions.1.answer")}</p>
                </>
            ),
        },
        {
            question: t("questions.2.question"),
            answer: (
                <>
                    <p>{t("questions.2.answer")}</p>
                </>
            ),
        },
        {
            question: t("questions.3.question"),
            answer: (
                <>
                    <p>{t("questions.3.answer")}</p>
                </>
            ),
        },
        {
            question: t("questions.4.question"),
            answer: (
                <>
                    <p>{t("questions.4.answer")}</p>
                </>
            ),
        },
        {
            question: t("questions.5.question"),
            answer: (
                <>
                    <p>{t("questions.5.answer")}</p>
                </>
            ),
        },
        {
            question: t("questions.6.question"),
            answer: (
                <>
                    <p>{t("questions.6.answer")}</p>
                </>
            ),
        },
        {
            question: t("questions.7.question"),
            answer: (
                <>
                    <p>{t("questions.7.answer")}</p>
                </>
            ),
        },
        {
            question: t("questions.8.question"),
            answer: (
                <>
                    <p>{t("questions.8.answer")}</p>
                </>
            ),
        },
        {
            question: t("questions.9.question"),
            answer: (
                <>
                    <p>{t("questions.9.answer")}</p>
                </>
            ),
        },
    ];

    const handleToggle = (index) => {
        setOpenIndex((prevOpenIndex) => {
            if (prevOpenIndex.includes(index)) {
                return prevOpenIndex.filter((item) => item !== index);
            } else {
                return [...prevOpenIndex, index];
            }
        });
    };

    return (
        <Box sx={{ marginBottom: "3rem" }}>
            <SectionHeading
                variant="h1"
                gutterBottom
                sx={{
                    textAlign: "center",
                    fontSize: {xs:"2.2rem !important", sm:"2.8rem !important", md:"4rem !important"},
                    color: theme.palette.mode === "light" ? "#232E4A" : "#FFFFFF",
                }}
            >
                {t("title")}
            </SectionHeading>
            <List sx={{ width: "100%" }}>
                {questionsData.map((item, index) => (
                    <ListItem
                        key={index}
                        onClick={() => handleToggle(index)}
                        sx={{
                            borderBottom: "1px solid #ddd",
                            padding: {
                                xs: "10px 14px",
                                sm: "24px 32px",
                            },
                            cursor: "pointer",
                        }}
                    >
                        <Box sx={{ flex: 1 }}>
                            <Typography
                                variant="h4"
                                sx={{
                                    fontSize: "1.6rem !important",
                                    color: theme.palette.mode === "light" ? "#232E4A" : "#FFFFFF",
                                    display: "flex",
                                    justifyContent: "space-between",
                                    fontWeight: "400",
                                }}
                            >
                                {item.question}

                                <IconButton
                                    onClick={() => handleToggle(index)}
                                    sx={{
                                        marginLeft: {
                                            xs: "4px",
                                            sm: "16px",
                                        },
                                        "& .MuiSvgIcon-root": { fontSize: 32 },
                                    }}
                                >
                                    {openIndex.includes(index) ? <ExpandLessIcon onClick={() => handleToggle(index)} /> : <ExpandMoreIcon onClick={() => handleToggle(index)}/>}
                                </IconButton>
                            </Typography>
                            <Collapse in={openIndex.includes(index)}>
                                <Typography
                                    variant="h5"
                                    sx={{
                                        marginTop: "2rem",
                                        color: theme.palette.mode === "light" ? "#535353" : "#C2C2C2",
                                        "& p": {
                                            fontSize: "1.4rem",
                                            marginBottom: "1rem",
                                        },
                                        fontWeight: "300",
                                    }}
                                >
                                    {item.answer}
                                </Typography>
                            </Collapse>
                        </Box>
                    </ListItem>
                ))}
            </List>
        </Box>
    );
};

export default Questions;
