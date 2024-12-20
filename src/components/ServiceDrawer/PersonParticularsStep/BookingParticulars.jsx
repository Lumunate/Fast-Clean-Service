"use client";
import {Box, styled} from "@mui/material";
import {CustomFormTextField} from "../../../components/mui/FormPkgs";
import {ThemeProvider} from "@emotion/react";
import {deepmerge} from "@mui/utils";
import {useTheme} from "../../../contexts/themeContext";
import useMultiStepForm from "../../../hooks/useMultiStepForm";
import React, {useEffect, useState} from "react";
import {BookingButton} from "../BookingPckgs";
import {useValidation} from '../../../contexts/ValidationContext';
import axios from 'axios'; // Import axios for submitting the form

export const FormTwoColumn = styled(Box)(({ theme }) => ({
    display: "flex",
    gap: "2rem",
    width: "100%",
    "@media (max-width: 600px)": {
        flexDirection: "column",
        gap: "1rem",
    },
}));

export const FormContainer = styled(Box)(({ theme }) => ({
    backgroundColor: 'rgba(204, 204, 204, 0.2)',
    backdropFilter: 'blur(10px)',
    borderRadius: theme.shape.borderRadius,
    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
    padding: theme.spacing(4),
    zIndex: 10,
}));

const BookingParticulars = () => {
    const form = useMultiStepForm();
    const { formData } = form;
    const { theme } = useTheme();
    const { updateValidation } = useValidation();

    const [bookingForm, setBookingForm] = useState({
        firstName: "",
        surname: "",
        companyName: "",
        street: "",
        zipCode: "",
        city: "",
        email: "",
        phoneNumber: "",
    });

    useEffect(() => {
      const isValid = formData.firstName && formData.surname;
      updateValidation(isValid);
    }, [formData, updateValidation]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setBookingForm({
            ...bookingForm,
            [name]: value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        form.updateFormData({ ...bookingForm });

        try {
        const response = await axios.post('/api/booking', bookingForm, {
                headers: {
                    'Content-Type': 'application/json',
                },
            });

            if (response.status === 201) {

                setBookingForm({
                    firstName: "",
                    surname: "",
                    companyName: "",
                    street: "",
                    zipCode: "",
                    city: "",
                    email: "",
                    phoneNumber: "",
                });
            }
        } catch (error) {
            console.error("Error submitting form:", error.response?.data?.message || error.message);
        }
    };

    return (
        <Box sx={{ padding: "2rem 1rem", maxWidth: "800px", margin: "auto" }}>
            <FormContainer
                component="form"
                onSubmit={handleSubmit}
            >
                <ThemeProvider theme={(outerTheme) => deepmerge(outerTheme, theme)}>
                    <FormTwoColumn>
                        <CustomFormTextField
                            label="First Name"
                            name="firstName"
                            value={bookingForm.firstName}
                            onChange={handleChange}
                            fullWidth
                            sx={{
                                boxShadow: "0 2px 6px rgba(0, 0, 0, 0.1)",
                                borderRadius: "8px",
                            }}
                        />
                        <CustomFormTextField
                            label="Surname"
                            name="surname"
                            value={bookingForm.surname}
                            onChange={handleChange}
                            fullWidth
                            sx={{
                                boxShadow: "0 2px 6px rgba(0, 0, 0, 0.1)",
                                borderRadius: "8px",
                            }}
                        />
                    </FormTwoColumn>
                    <CustomFormTextField
                        label="Company Name"
                        name="companyName"
                        value={bookingForm.companyName}
                        onChange={handleChange}
                        fullWidth
                        sx={{
                            boxShadow: "0 2px 6px rgba(0, 0, 0, 0.1)",
                            borderRadius: "8px",
                            marginTop: "1.5rem",
                        }}
                    />
                    <FormTwoColumn>
                        <CustomFormTextField
                            label="City"
                            name="city"
                            value={bookingForm.city}
                            onChange={handleChange}
                            fullWidth
                            sx={{
                                boxShadow: "0 2px 6px rgba(0, 0, 0, 0.1)",
                                borderRadius: "8px",
                                marginTop: "1.5rem",
                            }}
                        />
                        <CustomFormTextField
                            label="Street"
                            name="street"
                            value={bookingForm.street}
                            onChange={handleChange}
                            fullWidth
                            sx={{
                                boxShadow: "0 2px 6px rgba(0, 0, 0, 0.1)",
                                borderRadius: "8px",
                                marginTop: "1.5rem",
                            }}
                        />
                    </FormTwoColumn>
                    <CustomFormTextField
                        label="Email"
                        name="email"
                        value={bookingForm.email}
                        onChange={handleChange}
                        fullWidth
                        sx={{
                            boxShadow: "0 2px 6px rgba(0, 0, 0, 0.1)",
                            borderRadius: "8px",
                            marginTop: "1.5rem",
                        }}
                    />
                    <FormTwoColumn>
                        <CustomFormTextField
                            label="Phone Number"
                            name="phoneNumber"
                            value={bookingForm.phoneNumber}
                            onChange={handleChange}
                            fullWidth
                            sx={{
                                boxShadow: "0 2px 6px rgba(0, 0, 0, 0.1)",
                                borderRadius: "8px",
                                marginTop: "1.5rem",
                            }}
                        />
                        <CustomFormTextField
                            label="Zip Code"
                            name="zipCode"
                            value={bookingForm.zipCode}
                            onChange={handleChange}
                            fullWidth
                            sx={{
                                boxShadow: "0 2px 6px rgba(0, 0, 0, 0.1)",
                                borderRadius: "8px",
                                marginTop: "1.5rem",
                            }}
                        />
                    </FormTwoColumn>
                </ThemeProvider>
                <Box
                    sx={{
                        display: "flex",
                        justifyContent: "center",
                        marginTop: "2rem",
                    }}
                >
                    <BookingButton sx={{ width: "35%" }}>SUBMIT</BookingButton>
                </Box>
            </FormContainer>
        </Box>
    );
};

export default BookingParticulars;
