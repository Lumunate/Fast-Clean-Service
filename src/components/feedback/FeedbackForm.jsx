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
  experience: '4',
  feedback: '',
}

export default function FeedbackForm() {
    const theme = useTheme()

    const snackbarContext = useSnackbar();

    console.log(snackbarContext);

    const { showSnackbar } = snackbarContext || {};

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
            if (showSnackbar) showSnackbar('Form submitted successfully!');
            setSuccessMessage(true);
            setTimeout(() => setSuccessMessage(false), 5000);
            reset();
        } catch (err) {
            if (showSnackbar) showSnackbar('Failed to submit Contact Form. Please try again later!');
        }
    };


  return (
    <>
    <FeedbackFormContainer sx={{ position:"relative" ,"&::before": {
      content: '""',
      position: "absolute",
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
       backdropFilter:"blur(14px)",
       }}}>
        {successMessage && (
            <Box sx={{
                position: 'absolute',
                top: '40px',
                left: '50%',
                transform: 'translateX(-50%)',
                backgroundColor: '#4CAF50',
                color: 'white',
                padding: '10px 20px',
                borderRadius: '4px',
                textAlign: 'center',
                fontWeight: 'bold',
                zIndex: 10,
            }}>
                Feedback sent successfully!
            </Box>
        )}
        <form  onSubmit={handleSubmit(onSubmit)}>
        <Grid
            container
            columns={24}

            alignItems={'start'}
            sx={{ mb: '40px' }}
          >
            <Grid  xs={24} md={12}>
                <StyledTextField
                 label='Name'
                 variant='standard'
                 fullWidth
                 margin='none'
                 error={!!errors.name}
                 helperText={errors.name?.message}
                 {...register('name')}
                 inputfontsize='18px'
                 labelfontsize='16px'
                />
            </Grid>

            <Grid  xs={24} md={12}>
                <StyledTextField
                 label='Last Name'
                variant='standard'
                fullWidth
                margin='none'
                error={!!errors.lastName}
                helperText={errors.lastName?.message}
                {...register('lastName')}
                 inputfontsize='18px'
                 labelfontsize='16px'
                />
            </Grid>

            <Grid sx={{marginTop:"44px"}}  xs={24} md={12}>
                <CustomFormControl fullWidth variant='standard' labelfontsize='16px' error={!!errors.Service}>
                <InputLabel id='Service'>Service</InputLabel>
                <Controller  name='Service'
                      control={control}
                  render={({ field }) => (
                <StyledSelectField
                    sx={{ width: "90%" }}
                label='Service'
                value={field.value}
                onChange={field.onChange}
                variant='standard'
                inputfontsize='18px'
                IconComponent={() => (
                  <Image src='/feedback/down.svg' alt='Custom Dropdown Icon' width={7} height={8} />
                )}
                MenuProps={{
                  disableScrollLock: true,
                }} >
                <MenuItem value='Standard'>Standard</MenuItem>
                <MenuItem value='Deluxe'>Deluxe</MenuItem>
                <MenuItem value='Premium'>Premium</MenuItem>
              </StyledSelectField>
            )}/>{errors.Service && <FormHelperText error>{errors.Service?.message}</FormHelperText>}
                </CustomFormControl>
            </Grid>

            <Grid sx={{marginTop:"44px"}} xs={24} md={12}>
              <Box sx={{
                  position: 'relative',
                  '& .feedback-datepicker::placeholder': {
                      color: '#818181'
                  }
              }}>
                <Image
                  src={'/feedback/calender.svg'}
                  width={20}
                  height={22}
                  alt='icon'
                  style={{
                    position: 'absolute',
                    right: '36px',
                    top: '25px',
                    zIndex: 2,
                  }}
                />
                <Controller
                  name='Appointment'
                  control={control}
                  render={({ field }) => (
                    <DatePicker
                      selected={field.value}
                      onChange={(date) => field.onChange(date)}
                      className='feedback-datepicker'
                      placeholderText='Date of Appointment'
                      dateFormat='MM/dd/yyyy'
                      isClearable
                    />
                  )}
                />
                 {errors.Appointment && (
                  <FormHelperText error sx={{ fontSize: '10px' }}>
                    {errors.Appointment?.message}
                  </FormHelperText>
                )}
              </Box>
            </Grid>

            <Grid sx={{marginTop:"44px"}}  xs={24} md={12}>
              <Box sx={{ width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'start' }}>
                <CustomInputLabel id='experience'>Rate Your Experience</CustomInputLabel>
                <Controller
                  name='experience'
                  control={control}
                  render={({ field }) => (
                    <Rating
                      name='experience'
                      value={field.value ? Number(field.value) : 4}
                      onChange={(_, newValue) => field.onChange(String(newValue))}
                      size='large'
                      icon={<Image src='/feedback/yellowStar.svg' alt='Filled Star' width={26} height={25} />}
                      emptyIcon={<Image src='/feedback/whiteStar.svg' alt='Outlined Star' width={26} height={25} />}
                      sx={{
                        '& .MuiRating-icon': {
                          marginRight: '5px',
                        }
                      }}
                    />
                  )}
                />
                 {errors.experience && <FormHelperText error>{errors.experience?.message}</FormHelperText>}
              </Box>
            </Grid>

            <Grid sx={{marginTop:"44px"}} xs={24}>
              <StyledTextField
                label='Share Your Experience Here...'
                variant='standard'
                fullWidth
                multiline
                rows={5}
                margin='none'
                error={!!errors.feedback}
                helperText={errors.feedback?.message}
                {...register('feedback')}
                inputfontsize='18px'
                labelfontsize='16px'
                sx={{
                    height: "36px",
                    '& .MuiInput-root': {
                        height: "36px",
                    },
                }}

              />
            </Grid>

          </Grid>
            <Button sx={{
                marginTop:"24px",
                borderRadius:"4px",
                fontSize:"16px",
                fontWeight: "400",
                width:"35%",
                height:"41px",
                backgroundColor: "#02B4EB",
                color:"white",
                "&:hover": {
                  backgroundColor: "#02B4EB !important",
                },
            }} type='submit' special >
            {loading ? <CircularProgress size={24} /> : 'Submit Feedback'}
            </Button>

        </form>

        <DecorativeBackgroundImage
        top="14rem"
        right="-59rem"
        width="92rem"
        height="68.2rem"
      />
    </FeedbackFormContainer>
    </>
  )
}
