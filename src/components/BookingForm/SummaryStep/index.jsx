import { Box } from "@mui/material";
import {BookingFormHeading, BookingFormSubHeading, BookingFormTagline} from "../../mui/BookingFormPackages";
import Summary from "./Summary";
import React from "react";
import CouponApplier from "./ApplyCouponCode";

const Index = () => {
  return (
    <Box>
      <BookingFormHeading>
        Summary
      </BookingFormHeading>
        <BookingFormSubHeading>
            Please review your selections<br/>
            Get ready for a pristine clean at your convenience!
        </BookingFormSubHeading>
      <Box>
        <Summary />

        <CouponApplier /> 
      </Box>
    </Box>
  );
};

export default Index;
