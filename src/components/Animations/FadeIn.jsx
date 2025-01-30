"use client";
import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { Box } from "@mui/material";

// Make sure to register ScrollTrigger with GSAP
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const FadeIn = ({
  children,
  direction = "right",
  distance = 50,
  duration = 1,
  delay = 0,
  ease = "power3.out",
  triggerStart = "top 80%",
  triggerEnd = "bottom 20%",
}) => {
  const elementRef = useRef(null);

  useEffect(() => {
    const element = elementRef.current;

    let initialProps = {
      opacity: 0,
    };

    switch (direction) {
      case "left":
        initialProps.x = -distance;
        break;
      case "right":
        initialProps.x = distance;
        break;
      case "up":
        initialProps.y = distance;
        break;
      case "down":
        initialProps.y = -distance;
        break;
      default:
        console.warn(`Unsupported direction: ${direction}. Defaulting to 'right'.`);
        initialProps.x = distance;
    }

    gsap.set(element, initialProps);

    gsap.to(element, {
      x: 0,
      y: 0,
      opacity: 1,
      duration,
      delay,
      ease,
      scrollTrigger: {
        trigger: element,
        start: triggerStart,
        end: triggerEnd,
        toggleActions: "play none none reverse",
      },
    });
    // Cleanup function
    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, [direction, distance, duration, delay, ease, triggerStart, triggerEnd]);

  return <Box sx={{height:"inherit"}} ref={elementRef}>{children}</Box>;
};

export default FadeIn;

// Usage example:
// import FadeInDirection from './FadeInDirection';
//
// const YourPage = () => {
//   return (
//     <div style={{ height: '200vh', display: 'flex', flexDirection: 'column', justifyContent: 'space-around' }}>
//       <FadeInDirection direction="right" distance={100} duration={1.5}>
//         <h1>This will fade in from the right</h1>
//       </FadeInDirection>
//       <FadeInDirection direction="left" distance={100} duration={1.5}>
//         <h1>This will fade in from the left</h1>
//       </FadeInDirection>
//       <FadeInDirection direction="up" distance={100} duration={1.5}>
//         <h1>This will fade in from below</h1>
//       </FadeInDirection>
//       <FadeInDirection direction="down" distance={100} duration={1.5}>
//         <h1>This will fade in from above</h1>
//       </FadeInDirection>
//     </div>
//   );
// };
