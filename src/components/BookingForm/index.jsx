"use client";
import {Box} from "@mui/material";
import StepBar from "./StepBar";
import {FormProvider} from "../../contexts/MultiStepFormContext";
import {ServiceToggleContainer} from "../mui/BookingFormPackages";
import BookingForm from "./BookingForm";
import BookingFormFooter from "./BookingFormFooter";
import ServiceToggle from "./ServiceToggle";
import {ValidationProvider} from "../../contexts/ValidationContext";
import { useTheme } from "../../contexts/themeContext";

const Index = () => {
    const { theme } = useTheme();
  return (
    <ValidationProvider>
      <FormProvider>
        <Box
          sx={{
            maxWidth: "1170px",
            margin: "0 auto",
            boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.17)",
            borderRadius: "23px",
            padding: "4rem 2rem",
            border: "1px solid #CECECE",
              width: "95%",
              "@media (max-width: 600px)": {
                  boxShadow: "none",
                  border: "none",
                  backgroundColor: "transparent",
                  padding: "2rem 1rem",
                  marginTop: "-5rem",
              },
          }}
        >
            <ServiceToggleContainer>
            <ServiceToggle />
          </ServiceToggleContainer>
          <StepBar />

          <BookingForm />

          <BookingFormFooter />
        </Box>
      </FormProvider>
    </ValidationProvider>
  );
};

export default Index;
