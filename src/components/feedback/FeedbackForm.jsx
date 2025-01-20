'use client';
import React from 'react'
import { CustomFormControl, CustomInputLabel, FeedbackFormContainer, StyledSelectField, StyledTextField } from './FeedbackForm.style'
import { Box, Grid, InputLabel, MenuItem, Rating,Button } from '@mui/material'
import { Controller, useForm } from "react-hook-form"
import DatePicker from "react-datepicker"
import 'react-datepicker/dist/react-datepicker.css';
import Image from 'next/image';
import { DecorativeBackgroundImage } from '../Decorative/Decorative.style';

export default function FeedbackForm() {
    const { control, handleSubmit } = useForm();
    const onSubmit = (data) => {
        console.log('Form Data:', data);
        // Handle form submission logic here
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
       backdropFilter:"blur(2px)",
       }}}>
        <form  onSubmit={handleSubmit(onSubmit)}>
        <Grid
            container
            columns={24}
            // columnSpacing={{ xs: '20px', lg: '40px' }}
            // rowSpacing={{ xs: '20px', lg: '40px' }}
            alignItems={'start'}
            sx={{ mb: '40px' }}
          >
            <Grid  xs={24} md={12}>
                <StyledTextField 
                 label='Name'
                 variant='standard'
                 fullWidth
                 margin='none'
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
                 inputfontsize='18px'
                 labelfontsize='16px'
                />
            </Grid>
            <Grid sx={{marginTop:"44px"}}  xs={24} md={12}>
                <CustomFormControl fullWidth variant='standard' labelfontsize='16px' >
                <InputLabel id='course'>Service</InputLabel>
                <Controller  name='course'
                      control={control}
                  render={({ field }) => (
                <StyledSelectField
                label='course'
                value={field.value}
                onChange={field.onChange}
                variant='standard'
                inputfontsize='18px'
                fullWidth
                IconComponent={() => (
                  <Image src='/feedback/down.svg' alt='Custom Dropdown Icon' width={7} height={8} />
                )}
                MenuProps={{
                  disableScrollLock: true,
                }} >
                <MenuItem value='math'>Math</MenuItem>
                <MenuItem value='physics'>Physics</MenuItem>
                <MenuItem value='chemistry'>Chemistry</MenuItem>
              </StyledSelectField>
            )}/>
                </CustomFormControl>
            </Grid>

            <Grid sx={{marginTop:"44px"}} xs={24} md={12}>
              <Box sx={{ position: 'relative' }}>
                <Image
                  src={'/feedback/calender.svg'}
                  width={10}
                  height={12}
                  alt='icon'
                  style={{
                    position: 'absolute',
                    right: '36px',
                    top: '28px',
                    zIndex: 2,
                  }}
                />
                <Controller
                  name='sessionDate'
                  control={control}
                  render={({ field }) => (
                    <DatePicker
                      selected={field.value}
                      onChange={(date) => field.onChange(date)}
                      className='feedback-datepicker'
                      placeholderText='Date of Session'
                    />
                  )}
                />
                
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
                inputfontsize='18px'
                labelfontsize='16px'
              />
            </Grid>

          </Grid>
            <Button sx={{ 
                marginTop:"44px",
                borderRadius:"4px",
                fontSize:"14px",
                width:"170px",
                height:"41px",
                background:"#02B4EB",
                color:"white"
            }} type='submit' special >
            Submit Feedback
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
