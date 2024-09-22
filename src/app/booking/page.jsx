import { Box } from "@mui/material";
import React from "react";
import BookingForm from "../../components/BookingForm";

const Page = () => {
  return (
    <Box
      sx={{
        margin: "20rem auto",
      }}
    >
      <BookingForm />
    </Box>
  );
};

export default Page;