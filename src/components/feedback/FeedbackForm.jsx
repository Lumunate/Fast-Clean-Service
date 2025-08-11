'use client';
import React, { useState } from 'react';
import { CustomFormControl, CustomInputLabel, FeedbackFormContainer, StyledSelectField, StyledTextField } from './FeedbackForm.style'
import { Box, Grid, InputLabel, MenuItem, Rating,Button, FormHelperText, CircularProgress } from '@mui/material'
import { Controller, useForm } from "react-hook-form"
import DatePicker from "react-datepicker"
import {zodResolver} from "@hookform/resolvers/zod"
import 'react-datepicker/dist/react-datepicker.css';
import Image from 'next/image';
import { DecorativeBackgroundImage } from '../Decorative/Decorative.style';
import useSnackbar from '../../hooks/useSnackbar';
import { feedbackSchema } from '../../types/feedback';
import {useSubmitFeedbackForm} from '../../hooks/useFeedbackForm'
import { useTheme } from '../../contexts/themeContext';
import { useTranslations } from 'next-intl';

const datePickerStyles = `
  .feedback-datepicker::placeholder {
    color: #818181;
  }
`;

const defaultValues = {
  name: '',
  lastName: '',
  Service: '',
    Appointment: null,
  experience: '5',
  feedback: '',
}

export default function FeedbackForm() {

  const t = useTranslations("feedback")

    const theme = useTheme()

    const { openSnackbar } = useSnackbar();

    const [successMessage, setSuccessMessage] = useState(false);

    const {
    control,
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(feedbackSchema),
    defaultValues,
  });

  const { submitForm, loading, error } = useSubmitFeedbackForm();

    const onSubmit = async (data) => {
        const formattedData = { ...data, experience: String(data.experience) };

        try {
            await submitForm(formattedData);
            openSnackbar(t("form_fields.snackbar_text.0"));
            reset();
        } catch (err) {
             openSnackbar(t("form_fields.snackbar_text.1"));
        }
    };


  return (
    <>
      <FeedbackFormContainer>
        {successMessage && (
          <Box
            sx={{
              position: "absolute",
              top: "40px",
              left: "50%",
              transform: "translateX(-50%)",
              backgroundColor: "#4CAF50",
              color: "white",
              padding: "10px 20px",
              borderRadius: "4px",
              textAlign: "center",
              fontWeight: "bold",
              zIndex: 10,
            }}
          >
            Feedback sent successfully!
          </Box>
        )}
        <form onSubmit={handleSubmit(onSubmit)}>
          <Grid container columns={24} gap={2} alignItems={"start"} sx={{ mb: "40px" }}>
            <Grid xs={24} md={11.5}>
              <StyledTextField
                label={t("form_fields.name")}
                variant="standard"
                fullWidth
                margin="none"
                error={!!errors.name}
                helperText={errors.name?.message}
                {...register("name")}
                inputfontsize="18px"
                labelfontsize="16px"
              />
            </Grid>
            <Grid
              xs={24}
              md={11.5}
              sx={{
                "@media (max-width: 900px)": {
                  marginTop: "3rem",
                },
              }}
            >
              <StyledTextField
                label={t("form_fields.last_name")}
                variant="standard"
                fullWidth
                margin="none"
                error={!!errors.lastName}
                helperText={errors.lastName?.message}
                {...register("lastName")}
                inputfontsize="18px"
                labelfontsize="16px"
              />
            </Grid>

            <Grid sx={{ marginTop: "44px" }} xs={24} md={11.5}>
              <CustomFormControl fullWidth variant="standard" labelfontsize="16px" error={!!errors.Service}>
                <InputLabel id="Service">{t("form_fields.service")}</InputLabel>
                <Controller
                  name="Service"
                  control={control}
                  render={({ field }) => (
                    <StyledSelectField
                      label={t("form_fields.service")}
                      value={field.value}
                      onChange={field.onChange}
                      variant="standard"
                      inputfontsize="18px"
                      IconComponent={() => <Image src="/feedback/down.svg" alt="Custom Dropdown Icon" width={7} height={8} />}
                      MenuProps={{
                        disableScrollLock: true,
                      }}
                    >
                      <MenuItem value="Standard">Standard</MenuItem>
                      <MenuItem value="Deluxe">Deluxe</MenuItem>
                      <MenuItem value="Premium">Premium</MenuItem>
                    </StyledSelectField>
                  )}
                />
                {errors.Service && <FormHelperText error>{errors.Service?.message}</FormHelperText>}
              </CustomFormControl>
            </Grid>

            <Grid sx={{ marginTop: "44px" }} xs={24} md={11.5}>
              <Box
                sx={{
                  position: "relative",
                  "& .feedback-datepicker::placeholder": {
                    color: "#818181",
                  },
                }}
              >
                <Image
                  src={"/feedback/calender.svg"}
                  width={20}
                  height={22}
                  alt="icon"
                  style={{
                    position: "absolute",
                    right: "8px",
                    bottom: "10px",
                    zIndex: 2,
                  }}
                />
                <Controller
                  name="Appointment"
                  control={control}
                  render={({ field }) => (
                    <DatePicker
                      selected={field.value}
                      onChange={(date) => field.onChange(date)}
                      className="feedback-datepicker"
                      placeholderText={t("form_fields.date_of_appointment")}
                      dateFormat="MM/dd/yyyy"
                      isClearable
                    />
                  )}
                />
                {errors.Appointment && (
                  <FormHelperText error sx={{ fontSize: "10px" }}>
                    {errors.Appointment?.message}
                  </FormHelperText>
                )}
              </Box>
            </Grid>

            <Grid sx={{ marginTop: "44px" }} xs={24} md={12}>
              <Box sx={{ width: "100%", display: "flex", flexDirection: "column", alignItems: "start" }}>
                <CustomInputLabel id="experience">{t("form_fields.rating")}</CustomInputLabel>
                <Controller
                  name="experience"
                  control={control}
                  render={({ field }) => (
                    <Rating
                      name="experience"
                      value={field.value ? Number(field.value) : 4}
                      onChange={(_, newValue) => field.onChange(String(newValue))}
                      size="large"
                      icon={<Image src="/feedback/yellowStar.svg" alt="Filled Star" width={26} height={25} />}
                      emptyIcon={<Image src="/feedback/whiteStar.svg" alt="Outlined Star" width={26} height={25} />}
                      sx={{
                        "& .MuiRating-icon": {
                          marginRight: "5px",
                        },
                      }}
                    />
                  )}
                />
                {errors.experience && <FormHelperText error>{errors.experience?.message}</FormHelperText>}
              </Box>
            </Grid>

            <Grid sx={{ marginTop: "44px" }} xs={24}>
              <StyledTextField
                label={t("form_fields.review")}
                variant="standard"
                fullWidth
                multiline
                rows={5}
                margin="none"
                error={!!errors.feedback}
                helperText={errors.feedback?.message}
                {...register("feedback")}
                inputfontsize="18px"
                labelfontsize="16px"
                InputLabelProps={{
                  sx: {
                    transition: "transform 0.3s ease",
                    "&.Mui-focused": {
                      transform: "translate(0, -30px) scale(0.75)",
                     opacity: 1,
                    },
                    "&.MuiFormLabel-filled": {
                    opacity: 0,
                  },
                  },
                }}
                sx={{
                  height: "36px",
                  "& .MuiInput-root": {
                    height: "36px",
                  },
                }}
              />
            </Grid>
          </Grid>
          <Button
            sx={{
              marginTop: "24px",
              borderRadius: "4px",
              fontSize: "16px",
              fontWeight: "400",
              width: "35%",
              borderRadius: "50px",
              height: "41px",
              backgroundColor: "#0085FF",
              color: "white",
              "&:hover": {
                backgroundColor: "#02B4EB !important",
                color: "black",
              },
              "@media (max-width: 768px)": {
                fontSize: "1.2rem",
              },
              "@media (max-width: 508px)": {
                fontSize: "1rem",
                width: "50%",
              },
            }}
            type="submit"
            special
          >
            {loading ? <CircularProgress size={24} /> : t("buttons.submit")}
          </Button>
        </form>

        <DecorativeBackgroundImage top="10rem" right="-59rem" width="92rem" height="68.2rem" />
      </FeedbackFormContainer>
    </>
  );
}
