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

const CallToActionBox = ({ hideImage = false }) => {
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
                />
            )}

            <CTAContentBox>
                <CTAHeading>Ready for a Sparkling Clean Ride?</CTAHeading>

                <CTADescription>
                    Experience the best in professional car care today. Whether you’re at home, at work, or on the go, we’ll bring our
                    expertise to you! Don’t wait – your car deserves the best.
                </CTADescription>

                <CTAInnerBox>
                    <CTAButton variant="contained" onClick={() => (window.location.href = "/booking")}>
                        Book Now
                    </CTAButton>
                </CTAInnerBox>
            </CTAContentBox>
        </CTAContainer>
    );
};

export default CallToActionBox;
