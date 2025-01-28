"use client";
import Image from "next/image";
import { Box, Typography } from "@mui/material";
import { useTheme } from "../../contexts/themeContext";

const DecorativeItemBoxes = ({ text, sx, reversed }) => {
  const { theme } = useTheme();
  return (
    <Box
      sx={{
        backgroundColor: "primary.main",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: reversed ? "row-reverse" : "row",
        borderRadius: "1.2rem",
        boxShadow: "0 7px 16.8px -4px rgba(0, 0, 0, 0.25)",
        padding: "1.2rem 3.6rem",
        maxWidth: "41.3rem",
        marginBottom: "1rem",
        gap: "1rem",
        border: theme.palette.mode === "dark" ? "0.5px solid #858585" : "none",
        ...sx,
          "@media (max-width: 600px)": {
              display: "none",
          },
      }}
    >
      <Typography
        sx={{
          fontSize: "1.2rem",
          fontWeight: 500,
          color: "primary.text",
        }}
      >
        {text}
      </Typography>
      <Image
        src={"/decorative/Down_Left_Arrow.svg"}
        alt="Decorative Arrow"
        width={20}
        height={-1}
        style={{
          transform: reversed ? "scaleX(-1)" : "scaleX(1)",
          filter: theme.palette.mode === "dark" ? "invert(1)" : "invert(0)",
        }}
      />
    </Box>
  );
};

export default DecorativeItemBoxes;
