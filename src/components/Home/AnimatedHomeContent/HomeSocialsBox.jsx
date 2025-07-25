import { Box, IconButton } from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import { useTheme } from "../../../contexts/themeContext";
import YouTubeIcon from "@mui/icons-material/YouTube";

const HomeSocialsBox = () => {
    const { theme } = useTheme();
    return (
        <Box
            sx={{
                position: "absolute",
                left: "4.3rem",
                bottom: "4.3rem",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: "0.5rem",
                zIndex: 1000,
                "@media (max-width: 600px)": {
                    left: "2rem",
                    gap: "0.2rem",
                },
            }}
        >
            <IconButton
                component="a"
                href="https://www.facebook.com/FastCleanServiceNL/"
                target="_blank"
                sx={{
                    color: "white",
                    "& svg": {
                        fontSize: "3rem",
                        "@media (max-width: 600px)": {
                            fontSize: "1.2rem",
                        },
                        "@media (max-width: 1380px)": {
                            fontSize: "2rem",
                        },
                    },
                    "&:hover": {
                        color: "#00BEFF",
                    },
                }}
            >
                <FacebookIcon />
            </IconButton>
            <IconButton
                component="a"
                href="https://www.instagram.com/fastcleanservice/"
                target="_blank"
                sx={{
                    color: "white",
                    "& svg": {
                        fontSize: "3rem",
                        "@media (max-width: 600px)": {
                            fontSize: "1.2rem",
                        },
                        "@media (max-width: 1380px)": {
                            fontSize: "2rem",
                        },
                    },
                    "&:hover": {
                        color: "#00BEFF",
                    },
                }}
            >
                <InstagramIcon />
            </IconButton>
            <IconButton
                sx={{
                    color: "white",
                    "& svg": {
                        fontSize: "3rem",
                        "@media (max-width: 600px)": {
                            fontSize: "1.2rem",
                        },
                        "@media (max-width: 1380px)": {
                            fontSize: "2rem",
                        },
                    },
                    "&:hover": {
                        color: "#00BEFF",
                    },
                }}
            >
                <TwitterIcon />
            </IconButton>
            <IconButton
                component="a"
                href="https://www.facebook.com/FastCleanServiceNL/"
                target="_blank"
                sx={{
                    color: "white",
                    "& svg": {
                        fontSize: "3rem",
                        "@media (max-width: 600px)": {
                            fontSize: "1.2rem",
                        },
                        "@media (max-width: 1380px)": {
                            fontSize: "2rem",
                        },
                    },
                    "&:hover": {
                        color: "#00BEFF",
                    },
                }}
            >
                <YouTubeIcon />
            </IconButton>

            <Box
                sx={{
                    width: "2px",
                    height: "70px",
                    backgroundColor: "white",
                    "@media (max-width: 600px)": {
                        height: "40px",
                    },
                }}
            />
        </Box>
    );
};

export default HomeSocialsBox;