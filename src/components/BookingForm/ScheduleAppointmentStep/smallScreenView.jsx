'use client';
import React, { useEffect, useState } from 'react';
import {
  Box,
  Typography,
  Button,
  Grid,
  createTheme,
  ThemeProvider,
  useMediaQuery,
} from '@mui/material';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import {
  LocalizationProvider,
  StaticDatePicker,
  PickersDay,
} from '@mui/x-date-pickers';
import dayjs from 'dayjs';
import utc from 'dayjs/plugin/utc';
import timezone from 'dayjs/plugin/timezone';
import 'dayjs/locale/en';
import useMultiStepForm from '../../../hooks/useMultiStepForm';
import useSnackbar from '../../../hooks/useSnackbar';
import { useValidation } from '../../../contexts/ValidationContext';
import { Loader } from '../../mui/Loader';
import { LoaderContainer } from './ScheduleAppointment.style';

dayjs.extend(utc);
dayjs.extend(timezone);
dayjs.tz.setDefault('UTC');

const theme = createTheme({
  palette: {
    mode: 'light', // Use 'light' or 'dark' based on your preference
  },
});

const SmallScreenView = () => {
  const form = useMultiStepForm();
  const { updateValidation } = useValidation();
  const { openSnackbar } = useSnackbar();

  const [selectedDate, setSelectedDate] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [timeSlots, setTimeSlots] = useState([]);
  const [availableDates, setAvailableDates] = useState([]);
  const [selectedTimeSlot, setSelectedTimeSlot] = useState(null); // Track selected time slot
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));

  useEffect(() => {
    const fetchTimeSlots = async (offset) => {
      try {
        const res = await fetch(
          `/api/booking/timeslots/weekly?date=${new Date().toISOString()}&type=${form.formData.service}&offset=${offset}&duration=${form.duration}`
        );
        const data = await res.json();
        if (data.success && Array.isArray(data.availableTimeSlots)) {
          return data.availableTimeSlots;
        } else {
          console.error('Invalid response structure: ', data);
          openSnackbar('Invalid data received from server');
          return [];
        }
      } catch (err) {
        console.error('Error fetching time slots', err);
        openSnackbar('Error fetching time slots');
        return [];
      }
    };

    const fetchInitialData = async () => {
      setIsLoading(true);

      const initialData = await fetchTimeSlots(0);
      setTimeSlots(initialData);
      setAvailableDates(initialData.map((slot) => dayjs(slot.time)));

      setIsLoading(false);

      for (let i = 1; i < 9; i++) {
        const additionalData = await fetchTimeSlots(i);
        setTimeSlots((prev) => [...prev, ...additionalData]);
        setAvailableDates((prev) => [
          ...prev,
          ...additionalData.map((slot) => dayjs(slot.time)),
        ]);
      }
    };

    if (form.currentStep === 8) fetchInitialData();
  }, [form.formData.service, form.duration, form.currentStep, openSnackbar]);

  const handleDateChange = (newDate) => {
    setSelectedDate(newDate);
    setSelectedTimeSlot(null); // Reset selected time slot when date changes
  };

  const handleTimeSlotClick = (time) => {
    const selectedTime = dayjs(
      `${selectedDate.format('YYYY-MM-DD')} ${time}`,
      'YYYY-MM-DD HH:mm'
    );
    form.updateFormData({ selectedTime: selectedTime.toDate() });

    setSelectedTimeSlot(time); // Set the selected time slot

    setTimeSlots((prev) =>
      prev.map((slot) => ({
        ...slot,
        slots: slot.slots.map((s) => ({
          ...s,
          selected:
            s.start === time && dayjs(slot.time).isSame(selectedDate, 'day'),
        })),
      }))
    );

    updateValidation(true);
  };

  const shouldDisableDate = (date) => {
    return !availableDates.some((availableDate) =>
      availableDate.isSame(date, 'day')
    );
  };

  const CustomDay = (props) => {
    const { day, outsideCurrentMonth, ...other } = props;
    const isDisabled = shouldDisableDate(day);
    const isAvailable = availableDates.some((availableDate) =>
      availableDate.isSame(day, 'day')
    );

    return (
      <PickersDay
        {...other}
        day={day}
        outsideCurrentMonth={outsideCurrentMonth}
        disableRipple={isDisabled}
        sx={{
          borderRadius: '50%',
          position: 'relative',
          '&.Mui-selected': {
            backgroundColor: 'transparent', // Remove background color for selected date
            border: 'none', // Remove border for selected date
          },
          ...(isDisabled && {
            '&:before': {
              content: '""',
              position: 'absolute',
              width: '50%',
              height: '1px',
              backgroundColor: 'white',
              top: '50%',
              left: '25%',
            },
          }),
          ...(isAvailable && {
            '&:after': {
              content: '""',
              position: 'absolute',
              width: 6,
              height: 6,
              borderRadius: '50%',
              backgroundColor: '#348feb',
              bottom: 4,
              left: 'calc(50% - 3px)',
            },
          }),
        }}
      />
    );
  };

  if (isLoading) {
    return (
      <LoaderContainer>
        <Loader />
      </LoaderContainer>
    );
  }

  // Find time slots for the selected date
  const selectedDateTimeslots = timeSlots.find((d) =>
    dayjs(d.time).isSame(selectedDate, 'day')
  );

  return (
    <ThemeProvider theme={theme}>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <Box p={4}>
          <Typography variant="h6" gutterBottom textAlign="center">
            Select an appointment time
          </Typography>

          <Box
            sx={{
              mt: 2,
              display: 'flex',
              gap: 4,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '3rem',
                position: 'relative',
              }}
            >
              <StaticDatePicker
                orientation={isSmallScreen ? 'landscape' : 'portrait'}
                value={selectedDate}
                onChange={handleDateChange}
                disablePast
                shouldDisableDate={shouldDisableDate}
                sx={{ width: '100%' }}
                slots={{ day: CustomDay }}
              />
            </Box>

            <Box
              sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                flex: 1,
                maxWidth: '32rem',
                zIndex: selectedDate ? 1 : -1,
                opacity: selectedDate ? 1 : 0,
                transform: selectedDate ? 'translateX(0)' : 'translateX(-130%)',
                pointerEvents: selectedDate ? 1 : 0,
                visibility: selectedDate ? 'visible' : 'hidden',
                transition:
                  'opacity 0.75s ease, transform 0.75s ease, visibility 0s ease 0.25s',
              }}
            >
              <Typography variant="body1" sx={{ textAlign: 'center', mb: 2 }}>
                {selectedDate?.format('ddd, MMMM D')}
              </Typography>
              {selectedDateTimeslots ? (
                selectedDateTimeslots.slots.map((slot, slotIndex) => (
                  <Button
                    key={slotIndex}
                    variant="outlined"
                    sx={{
                      margin: '0.5rem 0',
                      fontSize: isSmallScreen ? '0.75rem' : '1rem',
                      backgroundColor:
                        selectedTimeSlot === slot.start ? '#348feb' : 'inherit', // Highlight selected time slot
                      color:
                        selectedTimeSlot === slot.start ? 'white' : 'inherit', // Change text color for selected time slot
                      '&:hover': {
                        backgroundColor:
                          selectedTimeSlot === slot.start
                            ? '#348feb'
                            : 'inherit', // Maintain highlight on hover
                      },
                    }}
                    onClick={() => handleTimeSlotClick(slot.start)}
                  >
                    {slot.start}
                  </Button>
                ))
              ) : (
                <Typography sx={{ textAlign: 'center', fontSize: '0.85rem' }}>
                  No slots available
                </Typography>
              )}
            </Box>
          </Box>
        </Box>
      </LocalizationProvider>
    </ThemeProvider>
  );
};

export default SmallScreenView;
