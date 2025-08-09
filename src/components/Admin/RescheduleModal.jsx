"use client";
import React, { useEffect } from "react";
import {
    Dialog,
    DialogTitle,
    DialogContent,
    IconButton,
    Box
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import ScheduleAppointment from "../../components/BookingForm/ScheduleAppointmentStep/smallScreenView";
import { FormProvider } from "../../contexts/MultiStepFormContext";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import useMultiStepForm from "../../hooks/useMultiStepForm";
import useSnackbar from "../../hooks/useSnackbar";
import { useSession } from "next-auth/react";
import { ModalButton } from "../mui/AdminPkgs";

const RescheduleModal = ({ booking, serviceType, duration, handleCloseModal, open }) => {
    return (
        <FormProvider>
            <RescheduleModalInner
                booking={booking}
                serviceType={serviceType}
                duration={duration}
                handleCloseModal={handleCloseModal}
                open={open}
            />
        </FormProvider>
    );
};

const RescheduleModalInner = ({ booking, serviceType, duration, handleCloseModal, open }) => {
    const form = useMultiStepForm();
    const { openSnackbar } = useSnackbar();
    const { data: session } = useSession();

    useEffect(() => {
        if (booking) {
            form.updateFormData({ service: serviceType, duration });
        }

        return () => {
            form.formData = {};
        };
    }, [booking, serviceType, duration]);

    const handleRescheduleBooking = async () => {
        if (!form.formData.selectedTime) {
            openSnackbar("Please select a new time before rescheduling.", "warning");
            return;
        }

        try {
            const response = await fetch("/api/booking/reschedule", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    id: booking._id,
                    dateTime: form.formData.selectedTime,
                    userId: booking.userId, // ✅ Access after booking is fully in scope
                }),
            });

            if (!response.ok) {
                throw new Error("Failed to reschedule booking.");
            }

            openSnackbar("Booking successfully rescheduled.", "success");
            handleCloseModal();
        } catch (err) {
            openSnackbar("Error rescheduling: " + err.message, "error");
        }
    };

    if (!booking) return null; // ⛔ Prevent execution if booking is undefined

    return (
        <Dialog open={open} onClose={handleCloseModal} PaperProps={{ style: { maxWidth: "60rem", width: "100%" } }}>
            <DialogTitle
                sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    fontSize: "1.6rem",
                }}
            >
                Reschedule Booking
                <Box>
                    <IconButton onClick={handleCloseModal}>
                        <CloseIcon />
                    </IconButton>
                </Box>
            </DialogTitle>

            <DialogContent>
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <ScheduleAppointment forceFetchInitialData />
                </LocalizationProvider>

                <Box
                    sx={{
                        display: "flex",
                        justifyContent: "center",
                        marginTop: "20px",
                    }}
                >
                    <ModalButton
                        disabled={!form.formData?.selectedTime}
                        onClick={handleRescheduleBooking}
                    >
                        Reschedule
                    </ModalButton>
                </Box>
            </DialogContent>
        </Dialog>
    );
};

export default RescheduleModal;
