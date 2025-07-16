'use client';
import {
  Box,
  Grid,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from '@mui/material';
import {
  CustomFormTextField,
  FormContainer,
  CustomFormSelect,
} from '../../../components/mui/NewFormPkgs';
import {
  TermsContainer,
  StyledCheckbox,
  TermsLabel,
} from '../../../components/mui/BookingFormPackages';
import { ThemeProvider } from '@emotion/react';
import { deepmerge } from '@mui/utils';
import { useTheme } from '../../../contexts/themeContext';
import useMultiStepForm from '../../../hooks/useMultiStepForm';
import React, { useEffect, useState } from 'react';
import { useValidation } from '../../../contexts/ValidationContext';
import { useSession } from 'next-auth/react';
import SelectLocationInput from '../SelectCityStep/SelectLocationInput';
import {useTranslations} from "next-intl";
import useSnackbar from '../../../hooks/useSnackbar';

export function isValidEmail(email) {
    if (typeof email !== 'string') return false;

    const trimmed = email.trim();

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

    return emailRegex.test(trimmed);
}

const BookingParticulars = () => {
    const { openSnackbar } = useSnackbar();
  const t = useTranslations('booking');
  const form = useMultiStepForm();
  const { data: session, status } = useSession();
  const { theme } = useTheme();
  const { updateValidation } = useValidation();
  const { formData } = form;


  const [bookingForm, setBookingForm] = useState({
    firstName: '',
    surname: '',
    companyName: '',
    street: '',
    zipCode: '',
    email: '',
    phoneNumber: '',
    makeModel: '',
    location: '',
    travelDistance: 0,
    bookingMessage: '',
  });

    const isChecked = formData?.termsAccepted ?? false;

    const toTitleCase = (str) => {
    return str
        .toLowerCase()
        .split(' ')
        .map((word) => {
          word = word.replace(/^[^a-zA-Z0-9]+|[^a-zA-Z0-9]+$/g, '');
          return word.charAt(0).toUpperCase() + word.slice(1);
        })
        .join(' ');
  };

  useEffect(() => {
    if (session?.user) {
      setBookingForm((prevBookingForm) => ({
        ...prevBookingForm,
        email: session?.user.email,
        firstName: session?.user.firstName,
        surname: session?.user.lastName,
        companyName: session?.user.companyName,
        street: session?.user.street,
        location: session?.user.location,
        phoneNumber: session?.user.phoneNumber,
      }));

      form.updateFormData({
        email: session?.user.email,
        firstName: session?.user.firstName,
        surname: session?.user.lastName,
        companyName: session?.user.companyName,
        street: session?.user.street,
        location: session?.user.location,
        phoneNumber: session?.user.phoneNumber,
      });
    }
  }, [session?.user]);

  useEffect(() => {
    const vehicleDetails = form.formData.vehicleDetails || {};
    const merk = vehicleDetails.merk || '';
    const handelsbenaming = vehicleDetails.handelsbenaming || '';

    const combinedMakeModel = [merk, handelsbenaming].filter(Boolean).join(' ');

      const makeModel = toTitleCase(combinedMakeModel);

    setBookingForm((prevForm) => ({
      ...prevForm,
      makeModel: makeModel || prevForm.makeModel,
    }));

    form.updateFormData({ makeModel });
  }, []);

    useEffect(() => {
        const location = bookingForm.location || formData.location || '';

        const hasValidLocation =
            typeof location === 'string' && location.trim() !== '';

        const allFilled =
            Object.entries(bookingForm)
                .every(([key, value]) => {
                    if (key === 'location') return true;
                    return value !== '';
                });

        const isValid =
            isChecked && hasValidLocation && allFilled;
        updateValidation(isValid);
    }, [bookingForm, isChecked, formData.location, updateValidation]);

    if (!isValidEmail(formData.email)) {
        openSnackbar("Please enter a valid email address.");
        return;
    }

    const handleChange = (e) => {
    const { name, value } = e.target;
    setBookingForm({
      ...bookingForm,
      [name]: value,
    });

    form.updateFormData({ [name]: value });
  };

    const handleCheckboxChange = (e) => {
        const checked = e.target.checked;
        form.updateFormData({ termsAccepted: checked });
    };


    return (
      <Box
          sx={{
            padding: '2rem 1rem',
            maxWidth: '800px',
            margin: 'auto',
            '@media (max-width: 600px)': {
              position: 'relative',
              top: '-3rem',
            },
          }}
      >
        <FormContainer
            component="form"
            sx={{ backgroundColor: 'transparent', boxShadow: 'none' }}
        >
          <ThemeProvider theme={(outerTheme) => deepmerge(outerTheme, theme)}>
            {/* Form Fields */}
            <Grid container spacing={2}>
              <Grid item xs={12} md={6}>
                <CustomFormTextField
                    label={t("steps.9.form_fields.0")}
                    name="firstName"
                    value={bookingForm.firstName}
                    onChange={handleChange}
                    required
                    fullWidth
                    sx={{
                      borderRadius: '8px',
                    }}
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <CustomFormTextField
                    label={t("steps.9.form_fields.1")}
                    name="surname"
                    value={bookingForm.surname}
                    onChange={handleChange}
                    required
                    fullWidth
                    sx={{
                      borderRadius: '8px',
                    }}
                />
              </Grid>
            </Grid>
            <Grid container spacing={2}>
              <Grid item xs={12} md={6}>
                <CustomFormTextField
                    label={t("steps.9.form_fields.2")}
                    name="phoneNumber"
                    value={bookingForm.phoneNumber}
                    onChange={handleChange}
                    required
                    fullWidth
                    sx={{
                      borderRadius: '8px',
                      marginTop: '1.5rem',
                    }}
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <CustomFormTextField
                    label={t("steps.9.form_fields.3")}
                    name="companyName"
                    value={bookingForm.companyName}
                    onChange={handleChange}
                    fullWidth
                    sx={{
                      borderRadius: '8px',
                      marginTop: '1.5rem',
                    }}
                />
              </Grid>
            </Grid>
            <Grid container spacing={2}>
              <Grid item xs={12} md={12}>
                <SelectLocationInput
                    hoist={({ ...data }) =>
                        setBookingForm((prevBookingForm) => ({
                          ...prevBookingForm,
                          ...data,
                        }))
                    }
                />
              </Grid>
            </Grid>

            <Grid container spacing={2}>
              <Grid item xs={12} md={6}>
                <CustomFormTextField
                    label={t("steps.9.form_fields.4")}
                    name="email"
                    value={bookingForm.email}
                    onChange={handleChange}
                    required
                    fullWidth
                    sx={{
                      borderRadius: '8px',
                      marginTop: '1.5rem',
                      '@media (max-width: 600px)': {
                        marginTop: '2rem',
                      },
                    }}
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <CustomFormTextField
                    label={t("steps.9.form_fields.5")}
                    name="makeModel"
                    value={bookingForm.makeModel}
                    onChange={handleChange}
                    required
                    fullWidth
                    sx={{
                      borderRadius: '8px',
                      marginTop: '1.5rem',
                      '@media (max-width: 600px)': {
                        marginTop: '0.9rem',
                      },
                    }}
                />
              </Grid>
            </Grid>

            <Grid container spacing={2}>
              <Grid item xs={12}>
                <CustomFormTextField
                    label={t("steps.9.form_fields.6")}
                    name="bookingMessage"
                    value={bookingForm.bookingMessage}
                    onChange={handleChange}
                    fullWidth
                    multiline
                    rows={4}
                    sx={{
                      borderRadius: '8px',
                      marginTop: '1.5rem',
                    }}
                />
              </Grid>
            </Grid>

            <TermsContainer>
              <StyledCheckbox
                  required
                  checked={isChecked}
                  onChange={handleCheckboxChange}
              />
              <TermsLabel variant="body2">
                {t("steps.9.form_fields.7")}{' '}
                <span>
                <a href="/terms_and_conditions">Terms and Conditions</a>
              </span>
              </TermsLabel>
            </TermsContainer>
          </ThemeProvider>
        </FormContainer>
      </Box>
  );
};

export default BookingParticulars;
