"use client";
import {
  styled,
  Box,
  Typography,
  Button,
  Checkbox,
  ButtonBase,
  ToggleButtonGroup,
  ToggleButton,
} from "@mui/material";

export const BookingFormHeading = styled(Typography)(({ theme }) => ({
  fontFamily: "Unbounded",
  marginBottom: "2.5rem",
  padding: "2rem 0 0",
  color: theme.palette.mode === "dark" ? "#fff" : "#232E4A",
  textAlign: "center",
  fontSize: "2.6rem",
  fontWeight: "700",
  lineHeight: "1.5rem",
  "@media (max-width: 600px)": {
    fontSize: "1.6rem",
    fontWeight: "600",
    lineHeight: "5.7rem",
    marginTop: 0,
    padding: 0,
  },
}));

export const BookingFormSubHeading = styled(Typography)(({ theme }) => ({
  fontFamily: "Unbounded",
  color: theme.palette.mode === "dark" ? "#D4D4D4" : "#A4A4A4",
  textAlign: "center",
  fontSize: "1.6rem",
  fontWeight: "300",
  lineHeight: "auto",
  marginBottom: "4rem",
  "@media (max-width: 600px)": {
    fontSize: "1rem",
    fontWeight: "300",
    lineHeight: "1.2rem",
    marginBottom: "1.5rem",
  },
}));

export const BookingFormTagline = styled(Typography)(({ theme }) => ({
  color: theme.palette.mode === "dark" ? "#D4D4D4" : "#A4A4A4",
  textAlign: "center",
  fontSize: "1.2rem",
  fontWeight: "300",
  lineHeight: "auto",
  marginBottom: "4rem",
  "@media (max-width: 600px)": {
    fontSize: "0.8rem",
    fontWeight: "300",
    lineHeight: "1.2rem",
    marginBottom: "1.5rem",
  },
}));

export const AutoCarePackageSubheading = styled(Typography)(({ theme }) => ({
  fontFamily: "Unbounded",
  color: "#14BC06",
  textAlign: "center",
  fontSize: "1.4rem",
  fontWeight: "light",
  // lineHeight: "57.6px",
  marginBottom: "2rem",
  "@media (max-width: 600px)": {
    fontSize: "0.9rem",
    marginBottom: "1rem",

  }
}));

export const AutoCarePackageTagline = styled(Typography)(({ theme }) => ({
  textAlign: "center",
  fontSize: "1.2rem",
  fontWeight: "300",
  // lineHeight: "57.6px",
  padding: "0 4rem",
  marginBottom: "4rem",
  "@media (max-width: 600px)": {
    fontSize: "0.7rem",
    marginBottom: "1rem",
    padding: "0",
  }
}));

export const ServiceToggleContainer = styled(Box)(({ theme }) => ({
  width: "100%",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  marginBottom: "4rem",
  "@media (max-width: 600px)":  {
    marginBottom: "1.9rem",
  },
}));

export const PricingSpacer = styled(Box)(({ theme }) => ({
  width: "100%",
  height: "2px",
  background: `linear-gradient(to right, transparent 0%, ${theme.palette.mode === "dark" ? "white" : "black"} 50%, transparent 100%)`,
  "@media (max-width: 600px)": {
    width: "100%",
  },
}));

export const PricingContainer = styled(Box)(({ theme }) => ({
  maxWidth: "570px",
  margin: "0 auto",
  marginTop: "3rem",
  "@media (max-width: 600px)": {
    width: "100%",
    padding: "0",
  },
}));

export const PricingText = styled(Typography)(({ theme }) => ({
  fontFamily: "Unbounded",
  color: theme.palette.text.primary,
  fontWeight: "300",
  fontSize: "1.6rem",
  lineHeight: "1.9rem",
  "@media (max-width: 600px)": {
    fontSize: "1.4rem",
    lineHeight: "1.74rem",
  },
}));

export const PricingTextContainer = styled(Typography)(({ theme }) => ({
  padding: "1rem 3rem",
  display: "flex",
  justifyContent: "space-between",
  marginBottom: "0.2rem",
  "@media (max-width: 600px)": {
    // marginBottom: "3rem",
  },
}));

export const ButtonContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  width: "100%",
  justifyContent: "space-between",
  alignItems: "center",
  padding: "1rem 2rem",
  "@media (max-width: 600px)": {
    padding: "1rem 1rem",
  },
}));

export const NextPrevButton = styled(ButtonBase)(({ theme, dull = false }) => ({
  width: "160px",
  padding: "1.6rem 0",
  borderRadius: "12px",
  boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
  color: dull ? "black" : "white",
  backgroundColor: dull ? "#DFDFDF" : "#1C79CC",
  fontFamily: "DMSans",
  fontSize: "1.6rem",
  lineHeight: "1.5rem",
  textAlign: "center",
  fontWeight: "500",

  "&:disabled": {
    backgroundColor: "grey",
  },

  "@media (max-width: 600px)": {
    width: "10.4rem",
    height: "3.1rem",
    fontSize: "1.2rem",
    lineHeight: "0 !important",
    fontWeight: "500",
  },
}));

export const CarTypeContainer = styled(Box)(({ theme }) => ({
  display: "grid",
  gridTemplateColumns: "repeat(4, 1fr)",
  gap: "1rem",
  justifyContent: "center",
  alignItems: "center",
  maxWidth: "fit-content",
  margin: "auto",
}));

export const SubscriptionPkgsContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  gap: "1.5rem",
  width: "100%",
  height: "100%",
  "@media (max-width: 600px)": {
    width: "100%",
    overflow: "visible",
    position: "relaive",
    alignItems: "center",
  },
}));

export const SubscriptionCardContainer = styled(Box)(({ theme, selected }) => ({
  position: "relative",
  width: "207px",
  height: "280px",
  borderRadius: "15px",
  boxShadow: "0px 4px 30.1px 0px #00000040",
  overflow: "hidden",
  border: `1px solid ${selected ? "#1C79CC" : "#FAFAFA"}`,
  "@media (max-width: 600px)": {
    width: "14.2rem",
    height: "21.4rem",
  },
}));

export const SubscriptionCardBanner = styled(Box)(({ theme, color }) => ({
  position: "absolute",
  top: "1.6rem",
  left: "-3rem",
  padding: "0.2rem 3rem",
  backgroundColor: color,
  zIndex: 30,
  transform: "rotate(-45deg)",
}));

export const SubscriptionCardHeading = styled(Typography)(({ theme }) => ({
  fontFamily: "Unbounded",
  color: "#ffffff",
  fontSize: "1rem",
  fontWeight: "light",
  "@media (max-width: 600px)": {
    fontSize: "0.8rem",
    fontWeight: 300,
    paddingLeft: "0.6rem",
  },
}));

export const SubscriptionCardHeader = styled(Box)(({ theme, color }) => ({
  position: "relative",
  width: "100%",
  height: "166px",
  overflow: "hidden",
  "& > img": {
    objectFit: "cover",
    overflow: "hidden",
    borderRadius: "10px 10px 0 0",
    clipPath: "path('M -2 165 Q 200 80 250 200 L 220 -2 L -2 -2 Z')",
    boxShadow: "0px 4px 30.1px rgba(0, 0, 0, 0.25)",
    "@media (max-width: 600px)": {
      top: "-5rem",
      width: "100%",
      clipPath: "path('M -2 120 Q 120 30 250 120 L 200 -2 L -2 -2 Z')",
    },
  },
  "& > .heading": {
    position: "absolute",
    bottom: "10px",
    right: "10px",
    backgroundColor: color,
    borderRadius: "7px",
    padding: "1rem",
    zIndex: 20,
    fontFamily: "Unbounded",
    color: "#ffffff",
    fontSize: "1.4rem",
    fontWeight: "semibold",
    "@media (max-width: 600px)": {
      fontSize: "1rem",
      padding: "0.8rem",
    },
  },
  "& .highlight": {
    position: "absolute",
    backgroundColor: color,
    clipPath: "path('M -2 165 Q 200 80 250 200 L 220 -2 L -2 -2 Z')",
    top: 0,
    bottom: 0,
    right: 0,
    left: 0,
    opacity: "35%",
    zIndex: 10,
    "@media (max-width: 600px)": {
      clipPath: "path('M -2 120 Q 120 30 250 120 L 200 -2 L -2 -2 Z')",
    },
  },
  "@media (max-width: 600px)": {
    height: "11.4rem",
  },
}));

export const UpdatedSubscriptionCardHeader = styled(Box)(({ theme, color }) => ({
  position: "relative",
  width: "100%",
  height: "50%",
  overflow: "hidden",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",

  "& > img": {
    objectFit: "cover",
    overflow: "hidden",
    borderRadius: "10px 10px 0 0",
    clipPath: "path('M -2 165 Q 200 80 250 200 L 220 -2 L -2 -2 Z')",
    boxShadow: "0px 4px 30.1px rgba(0, 0, 0, 0.25)",
    width: "100%",
    height: "100%",
  },

  "& > .heading": {
    position: "absolute",
    bottom: "10px",
    right: "10px",
    backgroundColor: color,
    borderRadius: "7px",
    padding: "1.5rem",
    zIndex: 20,
    fontFamily: "Unbounded",
    color: "#ffffff",
    fontSize: "1.8rem",
    fontWeight: "bold",
    textAlign: "center",
    width: "40%",
  },

  "& .highlight": {
    position: "absolute",
    backgroundColor: color,
    clipPath: "path('M -2 165 Q 200 80 250 200 L 220 -2 L -2 -2 Z')",
    top: 0,
    bottom: 0,
    right: 0,
    left: 0,
    opacity: "35%",
    zIndex: 10,
  },
}));

export const SubscriptionCardContent = styled(Box)(({ theme }) => ({
  marginTop: "2rem",
  padding: "0 1.6rem",
  "@media (max-width: 600px)": {
    padding: "1.5rem 1.6rem 1.1rem 1.6rem",
    marginTop: 0,
  },
  "& > .content__row": {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
}));

export const SubscriptionContentLabel = styled(Typography)(({ theme }) => ({
  fontFamily: "Unbounded",
  fontSize: "1.2rem",
  fontWeight: "light",
  color: theme.palette.mode === "dark" ? "#FFFFFF" : "#000000",
  lineHeight: "2.4rem",
  "@media (max-width: 600px)": {
    fontSize: "1rem",
  },
}));

export const SubscriptionContentValue = styled(Typography)(
    ({ theme, color, highlight }) => ({
      fontFamily: "Unbounded",
      fontSize: "1.4rem",
      fontWeight: highlight ? "medium" : "light",
      color: highlight
          ? color
          : theme.palette.mode === "dark"
              ? "#FFFFFF"
              : "#000000",
      lineHeight: "2.4rem",
      "@media (max-width: 600px)": {
        fontSize: "1rem",
      },
    })
);

export const LisencePlateContainer = styled(Box)(({ theme }) => ({
  height: "12.5rem",
  width: "100%",
  maxWidth: "520px",
  margin: "auto auto",
  backgroundColor: "#F2BA00",
  display: "grid",
  gridTemplateColumns: "20% 80%",
  borderRadius: "10px",
  // padding: "0.4rem",
  position: "relative",
  boxShadow: "0px 0px 20px rgba(51, 51, 51, 0.2)",

  "& > .border": {
    position: "absolute",
    top: "0",
    left: "0",
    width: "100%",
    height: "100%",
    borderRadius: "10px",
    border: "3px solid black",
    // margin: "0.4rem",
  },

  "@media (max-width: 600px)": {
    height: "6.7rem",
    maxWidth: "24rem",
    gridTemplateColumns: "4.1rem auto",
    "& > .border": {
      border: "1px solid black",
    },
  },
}));

export const LisencePlateImg = styled(Box)(({ theme }) => ({
  backgroundColor: "#003599",
  width: "100%",
  height: "100%",
  borderRadius: "10px 0 0 10px",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  overflow: "hidden",

  "& img": {
    width: "100%",
    // height: "100%",
    objectFit: "cover",
  },

  "@media (max-width: 600px)": {
    width: "4.1rem",
  }
}));

export const LisencePlateInput = styled(Box)(({ theme }) => ({
  width: "100%",
  height: "100%",
  display: "flex",
  justifyContent: "center",
  margin: "auto 0",
  alignItems: "center",
  padding: "0 2rem",
  textDecoration: "uppercase",

  "& input": {
    fontSize: "7rem",
    fontfamily: "BDSans, Roboto !important",
    fontWeight: "bold",
    color: "#000",
  },

  "@media (max-width: 600px)": {
    "& input": {
      fontSize: "2rem",
      textAlign: "center",
    },
  },
}));

export const AutoCareContainer = styled(Box)(({ theme }) => ({
  marginBottom: "2rem",
  display: "flex",
  justifyContent: "center",
  gap: "1.5rem",
  maxWidth: "800px",

  "@media (max-width: 600px)": {
    "& > div": {
      flex: "1 1 100%",
      maxWidth: "100%",
    },
  },
}));

export const AdditionalContainer = styled(Box)(({ theme }) => ({
  border: "0.4px solid #38E274",
  borderRadius: "6px",
  boxShadow: "0px 4px 30.1px rgba(0, 0, 0, 0.25)",
  padding: "3.4rem 4.1rem",
  maxWidth: "700px",
  margin: "0 auto",
  display: "flex",
  gap: "5rem",

  "@media (max-width: 600px)": {
    border: "none",
    borderRadius: "none",
    boxShadow: "none",
    padding: "0 3rem",
    flexDirection: "column",
    gap: "2.1rem",
  },
}));

export const AdditionalName = styled(Typography)(({ theme }) => ({
  color: theme.palette.mode === "dark" ? "#FFFFFF" : "#000000",
  fontWeight: "regular",
  fontFamily: "Unbounded",
  fontSize: "1.8rem",
  lineHeight: "2.4rem",
  marginBottom: "1.2rem",

  "@media (max-width: 600px)": {
    fontWeight: "400",
    fontSize: "1.4rem",
    marginBottom: "1rem",
  },

}));


export const AdditionalContent = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  gap: "18px",
  margin: "0 auto",
  // backgroundColor: "red",

  // "&:not(:last-child)": {
  //   marginRight: "2rem",
  // },
  "@media (max-width: 600px)": {
    gap: "0.5rem",
    margin: 0,
  },
}));

export const AdditionalNoOption = styled(Typography)(({ theme }) => ({
  color: theme.palette.mode === "dark" ? "#FFFFFF" : "#525252",
  fontWeight: "regular",
  fontFamily: "Unbounded",
  fontSize: "1.2rem",
  lineHeight: "2.4rem",
  marginBottom: "1.2rem",
}));

export const AdditionalOption = styled(Box)(({ theme }) => ({
  display: "flex",
  padding: "0 1.2rem",
  justifyContent: "space-between",
  alignItems: "center",
  borderRadius: "6px",
  border: theme.palette.mode === "dark" ? "0.4px solid #C5C5C5" : "none",
  boxShadow: "0px 2px 11.9px rgba(0, 0, 0, 0.25)",
  cursor: "pointer",
  "@media (max-width: 600px)": {
    padding: "0 1.2rem",
  },
}));

export const AdditionalOptionText = styled(Typography)(({ selected, theme }) => ({
  color: selected ? theme.palette.mode === "dark" ? "#C5C5C5" : "#585858" : theme.palette.mode === "dark" ? "#C5C5C5" : "#585858",
  fontWeight: "light",
  fontFamily: "Unbounded",
  fontSize: "1rem",
  lineHeight: "1.8rem",
  minWidth: "4rem",
  "@media (max-width: 600px)": {
    fontSize: "0.8rem",
    fontWeight: "300",
  },
}));


// SERVICE TOGGLE

export const StyledToggleButtonGroup = styled(ToggleButtonGroup)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "rgba(255,255,255,0.05)" : "white",
  border: `1px solid ${theme.palette.grey[300]}`,
  borderRadius: "9999px",
  padding: "5px",
  boxShadow: "0px 4px 7px rgba(0, 0, 0, 0.25)",
}));

export const StyledToggleButton = styled(ToggleButton)(({ theme }) => ({
  borderRadius: "9999px !important",
  padding: "16px 24px",
  textTransform: "none",
  border: "1px solid transparent",

  "&.Mui-selected": {
    backgroundColor: "#1C79CC",
    color: "white",
    "&:hover": {
      backgroundColor: "#1C79DD",
    },
    border: "1px solid #C4C1C1",
  },
  "&:hover": {
    backgroundColor: theme.palette.action.hover,
  },
  transition: "all 0.3s ease",

  fontSize: "1.4rem",
  fontFamily: "Unbounded",
  fontWeight: "300",
  color: theme.palette.mode === "dark" ? "#FFF" : "#040404",

  "@media (max-width: 600px)": {
    fontSize: "0.7rem",
    maxHeight: "2.6rem",
    maxWidth: "15.2rem",
    fontWeight: "200",
    padding: "12px 8px",
  },
}));

// STEP BAR

export const StepBarContainer = styled(Box)(({ theme }) => ({
  maxWidth: "990px",
  margin: "0 auto",
  position: "relative",
  "@media (max-width: 600px)": {
    width: "100%",
    padding: "0 2rem",
  },
}));

export const StepBarLine = styled(Box)(({ theme }) => ({
  position: "absolute",
  top: "2rem",
  left: "3.4rem",
  width: "calc(100% - 3.8rem)",
  height: "1px",
  backgroundColor: "gray",
  "@media (max-width: 600px)": {
    top: "1rem",
    width: "calc(100% - 6rem)",
    left: "4rem",
  },
}));

export const StepsContainer = styled(Box)(({ theme }) => ({
  width: "100%",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "start",
  marginBottom: "1rem",
}));

export const StepItemContainer = styled(Box)(({ theme, selected, current }) => ({
    borderRadius: "50%",
    width: "42px",
    height: "42px",
    position: "relative",
  backgroundColor: selected ? "#1C79CC" : theme.palette.mode === "dark" ? "#0D0E12" : "#fff",
    border: current ? "1px solid #1C79CC" : selected ? "none" : theme.palette.mode === "dark" ? "1px solid #C5C5C5" : "1px solid black",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    "@media (max-width: 600px)": {
        width: "21px",
        height: "21px",
        transform: current ? "scale(1.5)" : "scale(1)",
        border: current
            ? "0.5px solid #1C79CC" : selected ? "none" : theme.palette.mode === "dark" ? "0.5px solid #C5C5C5" : "0.5px solid black",
    },
    "@media (max-width: 350px)": {
      transform: current ? "scale(1.25)" : "scale(0.8)",
    },
}));


export const StepItemOuterContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  width:'100%'
}));

export const StepCheckImageContainer = styled(Box)(({ theme }) => ({
  position: "absolute",
  top: "-5px",
  right: "-8px",
  zIndex: 10,
  "@media (max-width: 600px)": {
    right: "8px",
    width: "2px !important",
    height: "2px !important",
  },
}));

export const StepImageContainer = styled(Box)(({ theme, selected = false, current }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  filter: selected ? "brightness(0) invert(1)" : theme.palette.mode === "dark" ? "brightness(0) invert(1)" : "" ,
  "@media (max-width: 600px)": {
    width: "7px",
    height: "7px",
    margin: "0.4rem",
    transform: current ? "scale(0.7)" : "scale(0.6)",
  },
}));

export const StepLabel = styled(Typography)(({ theme, current }) => ({
  marginTop: "10px",
  fontFamily: "Unbounded",
  fontSize: "12px",
  color: current ? theme.palette.mode === "dark" ? "#fff" : "black" : theme.palette.mode === "dark" ? "#FFFFFF" : "#A4A4A4",
  "@media (max-width: 1080px)": {
    fontSize: "10px",
  },
  "@media (max-width: 880px)": {
    fontSize: "8px",
  },
  "@media (max-width: 720px)": {
    fontSize: "6px",
  },
  "@media (max-width: 600px)": {
    fontSize: current ? "0.7rem" : "0px",
    marginTop: "4.5rem",
    position: "absolute",
    fontWeight: "200",
  },
}));

export const SummaryHeading = styled(Typography)(({ theme }) => ({
  fontFamily: "Unbounded",
  marginBottom: "0.5rem",
  color: theme.palette.mode === "dark" ? "#FFFFFF" : "#000000",
  fontSize: "1.4rem",
  fontWeight: "regular",
  lineHeight: "2.4rem",

  "@media (max-width: 600px)": {
    fontSize: "1.2rem",
    fontWeight: "400",
  },
}));

//CheckBox Components

export const TermsContainer = styled(Box)(({ theme }) => ({
  marginTop: "2.5rem",
  display: "flex",
  justifyContent: "flex-start",
  alignItems: "center",
}));

export const StyledCheckbox = styled(Checkbox)(({ theme }) => ({
  color: theme.palette.mode === "dark" ? "#C5C5C5" : "primary",
  '&.Mui-checked': {
    color: "#1C79CC",
  },
}));

export const TermsLabel = styled(Typography)(({ theme }) => ({
  fontSize: "1rem",
  color: theme.palette.text.primary,
  "& span a": {
    color: "inherit",
    textDecoration: "none",
    fontWeight: "bold",
    "&:hover": {
      color: "#1C79CC",
    },
  },
  "@media (max-width: 600px)": {
    fontSize: "0.875rem",
  },
}));