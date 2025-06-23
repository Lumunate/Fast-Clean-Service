"use client";
import {Box} from "@mui/material";
import StepBar from "./StepBar";
import {FormProvider} from "../../contexts/MultiStepFormContext";
import {ServiceToggleContainer} from "../mui/BookingFormPackages";
import BookingForm from "./BookingForm";
import BookingFormFooter from "./BookingFormFooter";
import ServiceToggle from "./ServiceToggle";
import {ValidationProvider} from "../../contexts/ValidationContext";
import { useLoginModal } from '../../contexts/ModalContext';
import useSnackbar from '../../hooks/useSnackbar';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { useTheme } from "../../contexts/themeContext";
import {useEffect} from "react";

const Index = () => {
    const { theme } = useTheme();
    const { data: session, status } = useSession();
    const router = useRouter();
    const { openLoginModal } = useLoginModal();
    const { openSnackbar } = useSnackbar();

    useEffect(() => {
        if (status === 'authenticated' || status === 'loading') return;
        openSnackbar("You must be logged in to book!");
        openLoginModal();
    }, [status, session, openSnackbar, openLoginModal, router]);

    if (status !== 'authenticated') {
        return null;
    }

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
