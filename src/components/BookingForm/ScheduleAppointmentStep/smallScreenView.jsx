'use client';
import React, { useEffect, useState } from 'react';
import { Box, Typography, Modal, IconButton } from '@mui/material';
import { DateCalendar, PickersDay } from '@mui/x-date-pickers';
import dayjs from 'dayjs';
import utc from 'dayjs/plugin/utc';
import timezone from 'dayjs/plugin/timezone';
import 'dayjs/locale/en';
import useMultiStepForm from '../../../hooks/useMultiStepForm';
import useSnackbar from '../../../hooks/useSnackbar';
import { useValidation } from '../../../contexts/ValidationContext';
import { Loader } from '../../mui/Loader';
import {
  LoaderContainer,
  ModalContainer,
  ModalHeading,
  TimeSlotBox,
  TimeSlotLabel,
} from './ScheduleAppointment.style';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';

dayjs.extend(utc);
dayjs.extend(timezone);
dayjs.tz.setDefault('UTC');

const TimeSlotSelector = ({ selectedDate, timeSlots, handleTimeSlotClick }) => {
  const selectedDateTimeslots = timeSlots.find((d) =>
    dayjs(d.time).isSame(selectedDate, 'day')
  );

  return (
    <Box
      sx={{
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
      <Typography>
        {selectedDate?.format('MMMM, DD')}
        <span style={{ marginLeft: '1.2rem' }}>
          {selectedDate?.format('ddd')?.toUpperCase()}
        </span>
      </Typography>

      <Box
        sx={{
          justifyContent: 'center',
          alignItems: 'center',
          display: 'flex',
          flexDirection: 'column',
          padding: '0.5rem',
        }}
      >
        {selectedDateTimeslots ? (
          selectedDateTimeslots.slots.map((slot, i) => (
            <TimeSlotBox
              key={i}
              selected={slot.selected}
              onClick={() => handleTimeSlotClick(slot.start)}
            >
              <TimeSlotLabel selected={slot.selected}>
                {slot.start}
              </TimeSlotLabel>
            </TimeSlotBox>
          ))
        ) : (
          <Typography>No time slots available</Typography>
        )}
      </Box>
    </Box>
  );
};

function AvailableDay({
  availableDates = [],
  day,
  outsideCurrentMonth,
  ...other
}) {
  const isAvailable =
    !outsideCurrentMonth &&
    availableDates.some((date) => date.isSame(day, 'day'));

  return (
    <PickersDay
      {...other}
      day={day}
      outsideCurrentMonth={outsideCurrentMonth}
      sx={{
        position: 'relative',
        '&.MuiPickersDay-today': {
          border: 'none',
        },
        ...(isAvailable && {
          '&::after': {
            content: '""',
            display: 'block',
            width: '10%',
            height: '2px',
            backgroundColor: '#1C79CC',
            position: 'absolute',
            bottom: 12,
            left: '45%',
            borderRadius: '2px',
          },
        }),
      }}
    />
  );
}

const SmallScreenView = () => {
  const form = useMultiStepForm();
  const { updateValidation } = useValidation();
  const { openSnackbar } = useSnackbar();

  const [selectedDate, setSelectedDate] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [timeSlots, setTimeSlots] = useState([]);
  const [availableDates, setAvailableDates] = useState([]);
  const [displayedMonth, setDisplayedMonth] = useState(dayjs().month());

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

    fetchInitialData();
  }, [form.formData.service, form.duration, openSnackbar]);

  const handleDateSelect = (date) => {
    setSelectedDate(date);
  };

  const handleTimeSlotClick = (time) => {
    const selectedTime = dayjs(
      `${selectedDate.format('YYYY-MM-DD')} ${time}`,
      'YYYY-MM-DD HH:mm'
    );
    form.updateFormData({ selectedTime: selectedTime.toDate() });

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

  const handleMonthChange = (date) => {
    setDisplayedMonth(date.month());
  };

  const currentMonth = dayjs().month();
  const isBackButtonDisabled = displayedMonth <= currentMonth;

  const shouldDisableDate = (date) => {
    return !availableDates.some((availableDate) =>
      availableDate.isSame(date, 'day')
    );
  };

  if (isLoading) {
    return (
      <LoaderContainer>
        <Loader />
      </LoaderContainer>
    );
  }

  return (
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
      {/* Calendar Section */}
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '3rem',
          position: 'relative',
        }}
      >
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <IconButton
            onClick={() => setDisplayedMonth((prev) => prev - 1)}
            disabled={isBackButtonDisabled}
          >
            <ArrowBackIosIcon />
          </IconButton>
          <DateCalendar
            disablePast={isBackButtonDisabled}
            value={selectedDate}
            onChange={handleDateSelect}
            onMonthChange={handleMonthChange}
            shouldDisableDate={shouldDisableDate}
            style={{ width: '100%', maxWidth: '32rem' }}
            slots={{
              day: AvailableDay,
            }}
            slotProps={{
              day: {
                availableDates,
              },
            }}
          />
        </Box>
        {/* Time Slot Selector Section */}
        <TimeSlotSelector
          selectedDate={selectedDate}
          timeSlots={timeSlots}
          handleTimeSlotClick={handleTimeSlotClick}
        />
      </Box>
    </Box>
  );
};

export default SmallScreenView;
