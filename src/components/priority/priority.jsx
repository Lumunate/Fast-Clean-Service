import { Box, styled, Typography } from "@mui/material";
import React from "react";

const SectionContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  "@media (max-width: 900px)": {
    gap: "3rem",
  },
}));

const TextContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  paddingBottom:"12px",
  paddingTop:"8px",
  borderBottom: "1px Solid #C4C4C4",
  "@media (max-width: 900px)": {
    maxWidth: "90%",
    marginLeft:"auto",
    marginRight:"auto"
  },
}));

export default function priority() {
  const details = [
    {
      title: "Quality as a Priority",
      description:
        "We prioritize top-notch quality with fully equipped service buses and cutting-edge cleaning techniques to perfect every detail.",
    },
    {
      title: "Our Values",
      description:
        "Every car deserves the best, and we deliver excellence for both private and business customers.",
    },
    {
      title: "Experts in Detail",
      description:
        "Our certified team uses advanced techniques in polishing, coating, and steam cleaning for flawless results.",
    },
    {
      title: "Our Successes",
      description:
        "As a certified leader in detailing, we provide professional treatments that extend vehicle life and restore a like-new appearance.",
    },
  ];

  return (
    <Box sx={{ maxWidth: "1370px", mx: "auto",  boxShadow: 1, background:"white", padding:"35px", marginTop:"120px",marginBottom:"120px"}}>
      <SectionContainer>
        {details.map((detail, index) => {
          return (
            <TextContainer key={index}>
              <Typography
                sx={{ width: "30%", fontSize: "22px", fontWeight: 400,"@media (max-width: 900px)": {fontSize:"16px"}, }}
              >
                {detail.title}
              </Typography>
              <Typography
                sx={{
                  width: "70%",
                  fontSize: "16px",
                  fontWeight: 400,
                  color: "#5A5E69",
                  "@media (max-width: 900px)": {fontSize:"14px"}
                }}
              >
               {detail.description}
              </Typography>
            </TextContainer>
          );
        })}
      </SectionContainer>
    </Box>
  );
}
