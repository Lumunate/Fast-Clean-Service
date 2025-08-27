"use client";
import { Box, styled } from "@mui/material";

export const DecorativeBackgroundImage = styled(Box)(({ theme, top, left, right, bottom, flip = false, variant = "1" }) => ({
  position: "absolute",
  top: top || null,
  left: left || null,
  bottom: bottom || null,
  right: right || null,
  zIndex: -1,
  backgroundImage: variant === "1" ? "url('/decorative/Vector.svg')" : "url('/decorative/Vector-1.svg')",
  transform: flip ? "scaleX(-1)" : null,
}));

export const FoggyBackgroundImage = styled(Box)(({ top, left, right, zIndex, width, height, rotate }) => ({
  position: "absolute",
  top: top,
  left: left,
  right: right,
  zIndex: zIndex || -1,
  width: width || "600px",
  height: height || "500px",
  backgroundImage: "url('/fogg.png')",
  backgroundSize: "contain",
  opacity: 0.1,
  transform: `rotate(${rotate || 0}deg)`,
}));
