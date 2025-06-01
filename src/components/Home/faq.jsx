"use client";
import React, { useState } from "react";
import { Box, Collapse, IconButton, List, ListItem, Typography } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import { SectionHeading } from "../mui/HomePkgs";
import { useTheme } from "../../contexts/themeContext";
import { useTranslations } from "next-intl";
import HeadingLinesAnimation from "./HeadingLinesAnimation/HeadingLinesAnimation";

const Questions = () => {
    const [openIndex, setOpenIndex] = useState([]);
    const { theme } = useTheme();
    const t = useTranslations("home.faq");

    const questionsData = Array.from({ length: 10 }, (_, i) => {
        const question = t(`questions.${i}.question`);
        const answer = t.raw(`questions.${i}.answer`);
        const isArray = Array.isArray(answer);

        return {
            question,
            answer: isArray ? (
                <ul>
                    {answer.map((line, idx) => (
                        <li key={idx}>{line}</li>
                    ))}
                </ul>
            ) : (
                <p>{answer}</p>
            ),
        };
    });

    const handleToggle = (index) => {
        setOpenIndex((prevOpenIndex) =>
            prevOpenIndex.includes(index)
                ? prevOpenIndex.filter((item) => item !== index)
                : [...prevOpenIndex, index]
        );
    };

    return (
        <Box sx={{ marginBottom: "3rem", display: "flex", flexDirection: "column", justifyContent: "center" }}>
            <HeadingLinesAnimation text={t("title")} sx={{ width: "100%", textAlign: "center" }} />

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
                                    fontSize: {xs:"1.4rem !important",sm:"1.6rem !important"},
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
                                    {openIndex.includes(index) ? <ExpandLessIcon /> : <ExpandMoreIcon />}
                                </IconButton>
                            </Typography>
                            <Collapse in={openIndex.includes(index)}>
                                <Typography
                                    variant="h5"
                                    sx={{
                                        marginTop: "2rem",
                                        color: theme.palette.mode === "light" ? "#535353" : "#C2C2C2",
                                        "& p, & ul": {
                                            fontSize: {xs:"1.2rem", sm:"1.4rem"},
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
