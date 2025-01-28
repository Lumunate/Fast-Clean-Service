import { Facebook, Instagram, X, YouTube } from "@mui/icons-material";
import { Box, IconButton } from "@mui/material";
import React from "react";
import styles from "./Footer.module.css";
import { useTheme } from "../../../contexts/themeContext";

interface SocialsDivProps {
  nav: boolean;
}

const SocialsDiv: React.FC<SocialsDivProps> = ({ nav }) => {
  const { theme } = useTheme();
  return (
    <Box className={styles.socialLinks}>
      <IconButton href="https://www.facebook.com/FastCleanServiceNL" className={`${styles.socialIcon} ${styles.facebook}`}>
        <Facebook />
      </IconButton>
      <IconButton href="https://www.instagram.com/fastcleanservice/" className={`${styles.socialIcon} ${styles.instagram}`}>
        <Instagram />
      </IconButton>
      <IconButton href="#" className={`${styles.socialIcon} ${styles.youtube}`}>
        <YouTube />
      </IconButton>
      <IconButton
        href="#"
        className={styles.socialIcon}
        sx={{ color: nav ? "white" : theme.palette.mode === "dark" ? "white !important" : "black !important" }}
      >
        <X />
      </IconButton>
    </Box>
  );
};

export default SocialsDiv;
