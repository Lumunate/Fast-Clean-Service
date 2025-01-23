"use client";
import React, { useState } from "react";
import { Box, Collapse, IconButton, List, ListItem, Typography } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import { SectionHeading } from "../mui/HomePkgs";
import { useTheme } from "../../contexts/themeContext";

const questionsData = [
    {
        question: "What is the process for booking a cleaning service with FAST Clean?",
        answer: (
            <>
                <p>
                    Our process is simple and hassle-free. First, choose your location and service type. Then, select from our range of packages like Deluxe, Premium, or Standard. Pick a date and time, and we’ll handle the rest. Your vehicle will be cleaned and detailed to perfection.
                </p>
            </>
        ),
    },
    {
        question: "What are the key benefits of the Deluxe package?",
        answer: (
            <>
                <p>
                    The Deluxe package is one of our most popular choices, offering a complete cleaning experience. It includes thorough steam cleaning, interior and exterior polishing, and the application of protective wax. Perfect for those who want their vehicle to look brand new.
                </p>
            </>
        ),
    },
    {
        question: "What makes FAST Clean’s mobile cleaning service unique?",
        answer: (
            <>
                <p>
                    Our mobile cleaning service, part of Anywhere Auto-Care, brings professional cleaning directly to your doorstep. We use advanced steam cleaning technology to ensure your vehicle is spotless and ready to go, without you needing to visit our facility.
                </p>
            </>
        ),
    },
    {
        question: "Do you provide cleaning services for larger vehicles like campers and boats?",
        answer: (
            <>
                <p>
                    Yes, we specialize in cleaning larger vehicles such as campers, caravans, boats, and trucks. Services include engine cleaning, interior and exterior detailing, tire cleaning, and advanced steam cleaning for ultimate freshness and performance.
                </p>
            </>
        ),
    },
    {
        question: "What are the features of the Long-Term Vehicle Care plan?",
        answer: (
            <>
                <p>
                    The Long-Term Vehicle Care plan is designed to maintain your vehicle’s peak condition over time. It includes advanced steam cleaning, flexible scheduling, and options for regular maintenance tailored to your specific needs.
                </p>
            </>
        ),
    },
    {
        question: "What is the FleetCare Pro package and who is it for?",
        answer: (
            <>
                <p>
                    FleetCare Pro is a tailored solution for businesses with multiple vehicles. It ensures your fleet stays clean, spotless, and road-ready with flexible service plans and professional detailing for every vehicle in your fleet.
                </p>
            </>
        ),
    },
    {
        question: "What types of cleaning services are included in the Standard package?",
        answer: (
            <>
                <p>
                    The Standard package offers essential cleaning services, including exterior washing, window cleaning, rim cleaning, and basic interior vacuuming. It’s perfect for regular upkeep of your vehicle.
                </p>
            </>
        ),
    },
    {
        question: "What additional options can I add to my cleaning package?",
        answer: (
            <>
                <p>
                    FAST Clean allows you to customize your package with additional options like paint protection, intensive steam cleaning, tire polishing, and headlight restoration. Tailor your cleaning experience to match your needs.
                </p>
            </>
        ),
    },
    {
        question: "How does the polishing and headlight restoration service work?",
        answer: (
            <>
                <p>
                    Our polishing and headlight restoration service removes scratches and restores the brightness of your headlights, giving your vehicle a fresher, more polished appearance. It’s an excellent add-on to any package.
                </p>
            </>
        ),
    },
    {
        question: "What cleaning options are available for vehicles with leather interiors?",
        answer: (
            <>
                <p>
                    For vehicles with leather interiors, we provide specialized cleaning and treatment services, including leather conditioning and polishing to ensure durability and a luxurious finish.
                </p>
            </>
        ),
    },
    {
        question: "How does the subscription plan work for regular maintenance?",
        answer: (
            <>
                <p>
                    Our subscription plan offers worry-free maintenance for your vehicle. Choose from flexible options like monthly or bi-weekly cleanings, enjoy discounted rates, and ensure your car stays in top condition all year round.
                </p>
            </>
        ),
    },
    {
        question: "Can I book a package specifically for engine cleaning and mechanical parts?",
        answer: (
            <>
                <p>
                    Yes, we provide engine cleaning services as part of our specialized packages for campers, boats, and trucks. This includes advanced steam cleaning to ensure your vehicle's mechanical components are fresh and functioning efficiently.
                </p>
            </>
        ),
    },
];



const Questions = () => {
    const [openIndex, setOpenIndex] = useState([]);
    const { theme } = useTheme(); // Assuming you're using a custom theme provider

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
                    fontSize: "4rem !important",
                    color: theme.palette.mode === "light" ? "#232E4A" : "#FFFFFF",
                }}
            >
                FAQ&apos;S
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
                                    {openIndex.includes(index) ? <ExpandLessIcon /> : <ExpandMoreIcon />}
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
