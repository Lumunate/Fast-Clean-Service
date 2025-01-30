"use client";
import { Box, Button, List, styled } from "@mui/material";

export const AutoCareSection = styled(Box)(({ theme }) => ({
  height: "100vh",
  width: "100%",
  margin: "15rem 2rem 0",
  background: `linear-gradient(to bottom, ${theme.palette.primary.accent2}, ${theme.palette.primary.accent}, ${theme.palette.primary.main})`,
  borderRadius: "20px",
  position: "relative",
}));

export const AutoTabContainer = styled(Box)(({ theme }) => ({
  //   backgroundColor: "red",
  height: "100%",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  gap: "5rem",
  padding: "5rem",
  // width: "100%",
  // minWidth: "700px"
  zIndex  : 1,
}));

export const AutoTab = styled(Box)(({ theme }) => ({
  minHeight: "40rem",
  // height: "200rem",
  width: "27rem",
  position: "relative",
  perspective: "150rem",
  cursor: "pointer",

  "&.selected": {
    "& .tab__side--back": {
      transform: "rotateY(0)",
    },

    "& .tab__side--front": {
      transform: "rotateY(-180deg)",
    },
  },

  "& .tab__side": {
    // backgroundColor: "rgba(255,255,255,0.05)",
    textAlign: "left",
    height: "100%",
    width: "100%",
    transition: "all 0.8s ease",
    position: "absolute",
    top: 0,
    left: 0,
    backfaceVisibility: "hidden",
    borderRadius: "10px",
    // borderRadius: "3px",
    overflow: "hidden",
    boxShadow: "0 1.5rem 4rem rgba(0,0,0,0.15)",

    "&--front": {
      backgroundColor:
        theme.palette.mode === "light"
          ? `${theme.palette.primary.main}90`
          : `rgba(255,255,255,0.05)`,
      backdropFilter: "blur(30px)",
      height: "40rem",
    },

    "&--back": {
      transform: "rotateY(180deg)",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",

      "&-1": {
        backgroundImage: "linear-gradient(to right bottom, #7ed56f, #28b485)",
      },
      "&-2": {
        backgroundImage: "linear-gradient(to right bottom, #2998ff, #5643fa)",
      },
      "&-3": {
        backgroundImage: "linear-gradient(to right bottom, #ffb900, #ff7730)",
      },
    },
  },

  "& .tab__picture": {
    backgroundSize: "cover",
    height: "28.7rem",
    top: "-3rem",
    backgroundBlendMode: "screen",
    clipPath: "polygon(0 0, 100% 0, 100% 85%, 0 100%)",
    borderRadius: "3px 3px 0 0",

    "&--1": {
      backgroundImage:
        "linear-gradient(to right bottom, #7ed56f, #28b485),url(2.png)",
    },
    "&--2": {
      backgroundImage:
        "linear-gradient(to right bottom, #2998ff, #5643fa),url(6.png)",
    },
    "&--3": {
      backgroundImage:
        "linear-gradient(to right bottom, #ffb900, #ff7730),url(5.jpg)",
    },
  },

  "& .MuiTypography-root.heading": {
    fontSize: "20px",
    borderRadius: "2px",
    fontWeight: 600,
    textAlign: "right",
    color: "#fff",
    position: "absolute",
    top: "17rem",
    right: "2rem",
    width: "75%",
    "@media (max-width: 950px)": {
      fontSize: "2rem",
    },

    "& .heading--span": {
      padding: "1rem 1.5rem",
      "&-1": {
        backgroundImage:
          "linear-gradient(to right bottom, rgba(93, 250, 72, 1), rgba(56, 226, 116, 1))",
      },
      "&-2": {
        backgroundImage:
          "linear-gradient(to right bottom, rgba(41, 152, 255, 0.85), rgba(86, 67, 250, 0.85))",
      },
      "&-3": {
        backgroundImage:
          "linear-gradient(to right bottom, rgba(255,185,0,0.85), rgba(255,119,48,0.85))",
      },

    },
  },

  "& .tab__cta": {
    textAlign: "center",
    color: "#fff",
    marginBottom: "4rem",

    "& .tab__price": {
      fontSize: "1.4rem",
      textTransform: "uppercase",
    },

    "& .tab__value": {
      fontSize: "4.5rem",
      fontWeight: "100",

      "@media (max-width: 900px)": {
        fontSize: "2.8rem",
      },
      //   color: "#ffffffdd",
      "@media (max-width: 700px)": { fontSize: "2.4rem" }
    },
  },
}));

export const AutoTabList = styled(List)(({ theme }) => ({
  margin: "0 auto",
  width: "80%",
  //   height: "100%",
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",

  "& li": {
    display: "flex",
    justifyContent: "center",
    textAlign: "center",
    fontSize: "1.5rem",
    padding: "1rem",

    "&:not(:last-child)": {
      borderBottom: "1px solid #eee",
    },
  },
}));

export const CardContainer = styled(Box)(({ theme, color }) => ({
  display: "flex",
  justifyContent: "center",
  gap: "5rem",
  // height: "100vh",
  opacity: 0,
  transform: "translate(0, 100px)",
  // filter: "blur(33px)",
  //   animation: "showContent 1s ease-in-out 0.3s 1 forwards",
  "@media (max-width: 1150px)": {
    flexDirection: "column",
    alignItems: "center",
  },
}));

export const Card = styled(Box)(({ theme, color }) => ({
  backgroundColor:
    theme.palette.mode === "light"
      ? "rgba(255, 255, 255, 0.3)"
      : "rgba(255,255,255,0.05)",
  padding: "3rem",
  borderRadius: "30px 30px 30px 30px",
  // border: `1px solid transparent`,
  boxShadow: "1px 1px 10px #00000080",
  position: "relative",
  overflow: "hidden",
  color: theme.palette.primary.contrastText,
  minWidth: "320px",
  // width: "33%",
  maxWidth: "394px",
  backdropFilter: "blur(20px)",
  display: "flex",
  flexDirection: "column",
  height: "100%",

  "& .style": {
    position: "absolute",
    backgroundColor: color,
    // clipPath:
    //   'path("M 0 100 Q -100 -100 100 0 Q 15.6 8 30.8 8 Q 2.6 8.8 0 100 Z")',

    "&--1": {
      width: "100%",
      height: "100%",
      top: 0,
      left: 0,
      clipPath: 'path("M 0 120 L 0 0 L 120 0 L 30 3 Q 5 5 3 30 Z")',
    },

    "&--2": {
      width: "200px",
      height: "200px",
      top: "0",
      right: "0",
      clipPath: 'path("M 0 120 L 0 0 L 120 0 L 30 3 Q 5 5 3 30 Z")',
      transform: "rotate(90deg)",
    },
  },
  "@media (max-width: 1150px)": {
    width: "100%",
    minWidth: 0,
    maxWidth: "450px",
    overflow: "visible",
    "& .style--1, & .style--2": {
      display: "none",
    },
  },
}));

export const CardHeader = styled(Box)(({ theme, color }) => ({
  width: "100%",
  color: theme.palette.primary.contrastText,

  "& .MuiTypography-root": {
    "&.heading": {
      fontSize: "4rem",
      color: color,
      "@media (max-width: 900px)": {
        fontSize: "2.4rem",
      },
    },

    "&.sub-heading": {
      fontSize: "1.5rem",
    },

    "&.tagline": {
      fontSize: "2rem",
      "@media (max-width: 600px)": {
        fontSize: "1.4rem",
      },
    },
  },
}));

export const CardInfo = styled(Box)(({ theme, color }) => ({
  display: "flex",
  color: theme.palette.primary.contrastText,
  marginTop: "1rem",

  "& .MuiTypography-root.price": {
    fontSize: "4rem",
    fontWeight: "bold",
    display: "flex",

    "&:before": {
      fontSize: "3.5rem",
      fontWeight: "bold",
      color: color,
      alignSelf: "flex-start",
      marginTop: "5%",
      marginRight: "1rem",
    },
    "@media (max-width: 600px)": {
      fontSize: "2.4rem",

      "&:before": {
        fontSize: "2rem",
      },
    },
  },
}));

export const CardDetails = styled(List)(({ theme }) => ({
  margin: "0 auto 1rem",
  width: "100%",

  "& li": {
    display: "flex",
    fontSize: "1.5rem",
    paddingLeft: 0,
    gap: "1rem",
    paddingRight: 0,

    "@media (max-width: 600px)": {
      fontSize: "1.2rem",
    },
  },
}));

export const CardButton = styled(Button)(({ theme }) => ({
  width: "100%",
  backgroundColor: "#dedede",
  borderRadius: "50px",
  color: theme.palette.primary.contrastText,
  paddingTop: "12px",
  paddingBottom: "12px",
  paddingRight: "22px",
  paddingLeft: "22px",
  fontSize: "13px",
  borderRadius: "50px",

  "@media (max-width: 600px)": {
    alignSelf: "center",
    fontSize: "1.6rem",
    width: "80%",
    marginTop: 0,
  },
}));
