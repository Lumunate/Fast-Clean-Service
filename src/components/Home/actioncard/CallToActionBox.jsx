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
import {useTranslations} from "next-intl";

const CallToActionBox = ({ hideImage = false }) => {
    const {theme} = useTheme();
    const t = useTranslations('about.cta_section');
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
            sx={{ "@media (max-width: 700px)": { display: "none" } }}
          />
        )}

        <CTAContentBox>
          <CTAHeading>{t("title")}</CTAHeading>

          <CTADescription sx={{ maxWidth: "50%"}}>
              {t("description")}
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
                borderRadius: "50px",
                fontFamily: "DMSans",
                "&:hover": {
                  backgroundColor: "#00BEFF",
                },
              }}
            >
                {t("button")}
            </Button>
          </CTAInnerBox>
        </CTAContentBox>
      </CTAContainer>
    );
};

export default CallToActionBox;
