"use client";
import { Box } from "@mui/material";
import { BookingFormHeading, BookingFormSubHeading } from "../../mui/BookingFormPackages";
import LocationSearch from "./LocationSearch";

const Index = () => {
  const handlePlaceSelect = (place) => {
    if (place) {
      console.log("Selected place:", place);
      // Access place details like:
      // place.description - Full address
      // place.structured_formatting.main_text - Primary address component
      // place.structured_formatting.secondary_text - Secondary address info
      // place.place_id - Unique Google Places identifier
    }
  };
  return (
    <Box>
      <BookingFormHeading>Location Selection</BookingFormHeading>
      <BookingFormSubHeading>
        Please select your city
        <br />
        Just give us your location and we&apos;ll come to you!
      </BookingFormSubHeading>
      <Box
        sx={{
          padding: "2rem 1rem",
          maxWidth: "800px",
          margin: "auto",
          "@media (max-width: 600px)": {
            position: "relative",
            top: "-3rem",
          },
        }}
      >
        <LocationSearch onPlaceSelect={handlePlaceSelect} />
      </Box>
    </Box>
  );
};

export default Index;
