"use client";
import FadeIn from "../../Animations/FadeIn";
import {
    CTAContainer,
    CTAContentBox,
    CTAHeading,
    CTADescription,
    CTAInnerBox,
    CTAButton,
    CTAImage,
} from "./CallToActionPckgs";
import {useTheme} from "../../../contexts/themeContext"
import {Button} from "@mui/material";

const CallToActionBox = ({ hideImage = false }) => {
    const {theme} = useTheme();
    return (
        <CTAContainer>
            {!hideImage && (
                <CTAImage
                    component="img"
                    src="/decorative/Cuts.svg"
                    alt="Decorative Image"
                    width={388}
                    height={-1}
                    style={{
                        transform: "scaleX(-1)",
                    }}
                    sx={{ "@media (max-width: 700px)": { display: "none"}}}
                />
            )}

            <CTAContentBox>
                <CTAHeading>Ready for a Sparkling Clean Ride?</CTAHeading>

                <CTADescription>
                Now Ready to make your car shine? Book online now and experience for yourself why so<br/>many customers choose Fast Clean Service!
                </CTADescription>

                <CTAInnerBox>
                    <Button
                        variant="contained"
                        onClick={() => (window.location.href = "/booking")}
                        sx={{
                            marginTop: "1rem",
                            padding: "1.5rem 3rem",
                            fontSize: "16px",
                            fontWeight: 500,
                            backgroundColor: "primary.accentDark",
                            color: "white",
                            fontFamily: "DMSans",
                            "&:hover": {
                                backgroundColor: "#00BEFF",
                            },
                        }}
                    >
                        Book Now
                    </Button>

                </CTAInnerBox>
            </CTAContentBox>
        </CTAContainer>
    );
};

export default CallToActionBox;
