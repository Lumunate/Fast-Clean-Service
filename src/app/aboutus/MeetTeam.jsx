import React from "react";
import {
    Box,
    Container,
    Typography,
    IconButton,
    useTheme,
} from "@mui/material";
import { Instagram, Facebook } from "@mui/icons-material";
import EmailIcon from "@mui/icons-material/Email";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";

const teamMember = {
    name: "Felicio Perk",
    title: "Founder & CEO",
    imgSrc: "/peoplemain.png",
    description:
        "Wij zijn een gespecialiseerd mobiel poetsbedrijf voor elk type voertuig",
    socialLinks: {
        email: "mailto:felicio.perk@example.com",
        whatsapp: "https://wa.me/1234567890",
        instagram: "https://www.instagram.com/fastcleanservice/",
        facebook: "https://www.facebook.com/FastCleanServiceNL/",
    },
};

export default function MeetTeam() {
    const theme = useTheme();
    const isDarkMode = theme.palette.mode === "dark";

    return (
        <Container
            sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                marginTop: "2rem",
            }}
        >
            <Box
                sx={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                    gap: "1rem",
                    borderRadius: "16px",
                    padding: "3rem",
                    textAlign: "left",
                    position: "relative",
                    "@media (max-width: 600px)": {
                        flexDirection: "column",
                        padding: "2rem",
                        marginTop: "-4rem",
                    },
                }}
            >
                <Box
                    component="img"
                    src="/Rectangle 66.png"
                    alt="Background rectangle"
                    sx={{
                        position: "absolute",
                        width: "400px",
                        height: "300px",
                        zIndex: 1,
                        top: isDarkMode ? "62%" : "65%",
                        left: "5%",
                        transform: "translateY(-50%)",
                        "@media (max-width: 900px)": {
                            width: "250px",
                            height: "200px",
                            top: "61%",
                            left: "5%"
                        },
                        "@media (max-width: 600px)": {
                            top: "39%",
                            left: "12%"
                        },
                    }}
                />

                <Box
                    component="img"
                    src={teamMember.imgSrc}
                    alt={teamMember.name}
                    sx={{
                        width: "500px",
                        height: "500px",
                        objectFit: "cover",
                        position: "relative",
                        zIndex: 2,
                        "@media (max-width: 900px)": {
                            width: "300px",
                            height: "300px",
                        },
                    }}
                />

                <Box
                    sx={{
                        textAlign: "left",
                        position: "relative",
                        "@media (max-width: 600px)": {
                            textAlign: "left",
                            padding: "2rem"
                        },
                    }}
                >
                    <Typography
                        sx={{
                            fontWeight: "500",
                            color: isDarkMode ? "#fff" : "#000",
                            fontSize: "3rem",
                            "@media (max-width: 600px)": {
                                fontSize: "1.8rem",
                            },
                        }}
                    >
                        {teamMember.name}
                    </Typography>
                    <Typography
                        sx={{
                            color: isDarkMode ? "#fff" : "#000",
                            fontWeight: "400",
                            marginBottom: "1rem",
                            fontSize: "2.8rem",
                            "@media (max-width: 600px)": {
                                fontSize: "1.6rem",
                            },
                        }}
                    >
                        {teamMember.title}
                    </Typography>
                    <Typography
                        sx={{
                            color: isDarkMode ? "#C5C5C5" : "#000",
                            lineHeight: "1.2",
                            fontSize: "1.6rem",
                            fontWeight: "400",
                            "@media (max-width: 600px)": {
                                fontSize: "1.4rem",
                            },
                        }}
                    >
                        {teamMember.description}
                    </Typography>

                    <Box
                        sx={{
                            display: "flex",
                            justifyContent: "flex-start",
                            gap: "0.5rem",
                            marginTop: "1rem",
                        }}
                    >
                        <IconButton
                            href={teamMember.socialLinks.email}
                            target="_blank"
                            rel="noopener noreferrer"
                            sx={{ color: isDarkMode ? "#fff" : "#000" }}
                        >
                            <EmailIcon />
                        </IconButton>
                        <IconButton
                            href={teamMember.socialLinks.whatsapp}
                            target="_blank"
                            rel="noopener noreferrer"
                            sx={{ color: isDarkMode ? "#fff" : "#000" }}
                        >
                            <WhatsAppIcon />
                        </IconButton>
                        <IconButton
                            href={teamMember.socialLinks.instagram}
                            target="_blank"
                            rel="noopener noreferrer"
                            sx={{ color: isDarkMode ? "#fff" : "#000" }}
                        >
                            <Instagram />
                        </IconButton>
                        <IconButton
                            href={teamMember.socialLinks.facebook}
                            target="_blank"
                            rel="noopener noreferrer"
                            sx={{ color: isDarkMode ? "#fff" : "#000" }}
                        >
                            <Facebook />
                        </IconButton>
                    </Box>
                </Box>
            </Box>
        </Container>
    );
}
