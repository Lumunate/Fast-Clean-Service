"use client";
import styles from "./CTA.module.css";
import {useTheme} from "../../../contexts/themeContext";

const CTA = ({ scrolled }) => {
  const { theme } = useTheme();

  return (
    <div className={styles.ctaContainer}>
      <div
        className={styles.ctaButton}
        style={{
          backgroundColor: theme.palette.primary.accent,
          top: scrolled ? "-130px" : "-120px",
          // top: "-100px",
          right: scrolled ? "-110px" : "-110px",
          transformOrigin: "center",
          transform: scrolled ? "scale(1.1)" : "scale(1.3)",
          transition: "all 0.3s ease-in",
        }}
      ></div>
      <p
        className={styles.name}
        style={{
          bottom: scrolled ? "50px" : "70px",
          right: "20px",
        }}
      >
        BOOK NOW
      </p>
    </div>
  );
};

export default CTA; 