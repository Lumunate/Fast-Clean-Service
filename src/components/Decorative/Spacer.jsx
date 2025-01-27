import { Box } from "@mui/material";
import RadialCircle from "./RadialCircle";
import DecorativeItemBoxes from "./ItemBoxes";
import FadeIn from "../Animations/FadeIn";
import Image from "next/image";

const DecorativeSpacer = ({ reversed }) => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: reversed ? "row-reverse" : "row",
        justifyContent: "space-between",
        alignItems: "center",
        margin: "11.1rem 6.6rem 5rem",
        zIndex: 100,
          "@media (max-width: 600px)": {
              display: "none"
          },
      }}
    >
      <Box
        sx={{
          position: "relative",
        }}
      >
        <RadialCircle top={"-22rem"} right={"-22rem"} />
        <FadeIn direction={reversed ? "right" : "left"} distance={500} duration={1}>
          <DecorativeItemBoxes
            text="Get Started"
            sx={{
              transform: reversed ? "translateX(-4.2rem)" : "translateX(4.2rem)",
            }}
            reversed={reversed}
          />
        </FadeIn>
        <FadeIn direction={reversed ? "right" : "left"} distance={100} duration={1} delay={0.5}>
          <DecorativeItemBoxes text="24/7 Service Available" reversed={reversed} />
        </FadeIn>
      </Box>
      <FadeIn direction={reversed ? "left" : "right"} distance={100} duration={1.5} sx={{ "@media (max-width: 600px)": { display: "none" } }}>
        <Image
          src={"/decorative/Cuts.svg"}
          alt="Decorative Cuts"
          width={388}
          height={-1}
          style={{
            transform: reversed ? "scaleX(-1)" : "scaleX(1)",
          }}
        />
      </FadeIn>
    </Box>
  );
};

export default DecorativeSpacer;
