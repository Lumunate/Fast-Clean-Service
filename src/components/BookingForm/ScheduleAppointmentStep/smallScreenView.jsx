'use client';
import React, { useEffect, useState } from 'react';
import {
    Box,
    Typography,
    Button,
    Grid,
    useTheme,
    styled,
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
import { useTranslations } from "next-intl";

dayjs.extend(utc);
dayjs.extend(timezone);
dayjs.tz.setDefault('UTC');

const StyledCalendarContainer = styled(Box)(({ theme }) => ({
    '& .MuiPickersDay-root': {
        color: theme.palette.mode === 'dark' ? '#ffffff' : '#000000',
        border: theme.palette.mode === 'dark' ? '1px solid #C2C2C2' : '1px solid #e0e0e0',
        backgroundColor: 'transparent',
        '&.Mui-disabled': {
            color: theme.palette.mode === 'dark' ? '#666666' : '#aaaaaa',
            borderColor: 'transparent',
            opacity: 0.6,
        },
        '&:hover': {
            backgroundColor: theme.palette.mode === 'dark' ? 'rgba(194, 194, 194, 0.15)' : 'rgba(0, 0, 0, 0.04)',
        },
        '&.Mui-selected': {
            backgroundColor: '#348feb !important',
            color: '#fff !important',
            border: `1px solid ${theme.palette.mode === 'dark' ? '#fff' : '#000'}`,  // Apply border for selected day as well
            '&:after': {
                backgroundColor: '#fff !important',
            }
        },
        '&.Mui-selected:not(.Mui-disabled)': {
            border: `1px solid ${theme.palette.mode === 'dark' ? '#fff' : '#000'}`,
        },
    },
    '& .MuiPickersCalendarHeader-root': {
        color: theme.palette.mode === 'dark' ? '#ffffff' : '#000000',
    },
    '& .MuiTypography-root': {
        color: theme.palette.mode === 'dark' ? '#ffffff' : '#000000',
    },
    '& .MuiDialogActions-root .MuiButton-root': {
        border: theme.palette.mode === 'dark' ? '1px solid #C2C2C2' : '1px solid #e0e0e0',
        color: theme.palette.mode === 'dark' ? '#ffffff' : '#000000',
        boxShadow: 'none',
        '&:hover': {
            backgroundColor: theme.palette.mode === 'dark' ? 'rgba(194, 194, 194, 0.15)' : 'rgba(0, 0, 0, 0.04)',
        },
    },
}));

const SmallScreenView = ({forceFetchInitialData = false}) => {
    const t = useTranslations('booking');
    const theme = useTheme();
    const form = useMultiStepForm();
    const { updateValidation } = useValidation();
    const { openSnackbar } = useSnackbar();

    const [selectedDate, setSelectedDate] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [timeSlots, setTimeSlots] = useState([]);
    const [availableDates, setAvailableDates] = useState([]);
    const [selectedTimeSlot, setSelectedTimeSlot] = useState(null);
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
                }
                openSnackbar(t("steps.7.error.0"));
                return [];
            } catch (err) {
                openSnackbar(t("steps.7.error.1"));
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

       if (form.currentStep === 8 || forceFetchInitialData) {
      fetchInitialData();
    }
    }, [form.formData.service, form.duration, form.currentStep, openSnackbar, forceFetchInitialData,t]);

    const handleDateChange = (newDate) => {
        setSelectedDate(newDate);
        setSelectedTimeSlot(null);
    };

    const handleTimeSlotClick = (time) => {
        const selectedTime = dayjs(
            `${selectedDate.format('YYYY-MM-DD')} ${time}`,
            'YYYY-MM-DD HH:mm'
        );
        form.updateFormData({ selectedTime: selectedTime.toDate() });
        setSelectedTimeSlot(time);
        updateValidation(true);
    };

    const shouldDisableDate = (date) => {
        return !availableDates.some((availableDate) =>
            availableDate.isSame(date, 'day')
        );
    };

    const CustomDay = (props) => {
        const { day, outsideCurrentMonth, selected, ...other } = props;
        const isDisabled = shouldDisableDate(day);
        const isAvailable = availableDates.some((availableDate) =>
            availableDate.isSame(day, 'day')
        );
        const isToday = dayjs().isSame(day, 'day');

        return (
            <PickersDay
                {...other}
                day={day}
                outsideCurrentMonth={outsideCurrentMonth}
                disableRipple={isDisabled}
                selected={selected}
                sx={{
                    fontSize: "1.2rem",
                    borderRadius: '50%',
                    position: 'relative',
                    color: `${theme.palette.mode === 'dark' ? '#ffffff' : '#000000'} !important`,
                    // Current date outline
                    ...(isToday && !selected && {
                        border: `1px solid ${theme.palette.mode === 'dark' ? '#fff' : '#000'} !important`,
                    }),
                    '&.Mui-selected': {
                        backgroundColor: '#348feb !important',
                        color: '#fff !important',
                        border: 'none',
                        '&:after': {
                            backgroundColor: '#fff !important',
                        }
                    },
                    '&.Mui-disabled': {
                        color: `${theme.palette.mode === 'dark' ? '#666666' : '#aaaaaa'} !important`,
                        opacity: 0.6,
                    },
                    ...(isDisabled && {
                        '&:before': {
                            content: '""',
                            position: 'absolute',
                            width: '50%',
                            height: '1px',
                            backgroundColor: theme.palette.mode === 'dark' ? '#C2C2C2' : '#000000',
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
                            backgroundColor: selected
                                ? '#fff'
                                : theme.palette.mode === 'dark'
                                    ? '#fff'
                                    : '#348feb',
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

    const selectedDateTimeslots = timeSlots.find((d) =>
        dayjs(d.time).isSame(selectedDate, 'day')
    );

    return (
        <LocalizationProvider dateAdapter={AdapterDayjs}>
            <StyledCalendarContainer>
                <Box p={isSmallScreen ? 2 : 4}>
                    <Typography variant="h6" gutterBottom textAlign="center" sx={{display:"none"}}>
                        {t("steps.7.title")}
                    </Typography>

                    <Box
                        sx={{
                            mt: 2,
                            display: 'flex',
                            flexDirection: isSmallScreen ? 'column' : 'row',
                            gap: isSmallScreen ? 2 : 4,
                            alignItems: 'center',
                            justifyContent: 'center',
                        }}
                    >
                        <Box sx={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            width: '100%',
                            maxWidth: isSmallScreen ? '100%' : '50%',
                        }}>
                            <StaticDatePicker
                                orientation={isSmallScreen ? 'portrait' : 'portrait'}
                                value={selectedDate}
                                onChange={handleDateChange}
                                disablePast
                                shouldDisableDate={shouldDisableDate}
                                sx={{
                                    width: '100%',
                                    '& .MuiPickersCalendarHeader-root': {
                                        color: theme.palette.mode === 'dark' ? '#ffffff' : '#000000',
                                         fontSize:{xs:"10px",sm:"14px"},
                                    },
                                    '& .MuiTypography-root': {
                                        color: theme.palette.mode === 'dark' ? '#ffffff' : '#000000',
                                        fontSize:{xs:"10px",sm:"14px"},
                                    },
                                    '& .css-8yp5da-MuiPickersCalendarHeader-labelContainer': {
                                         fontSize:{xs:"10px",sm:"14px"},
                                    },
                                    '& .MuiPickersLayout-actionBar':{
                                        display:"none",
                                    },
                                    backgroundColor: 'transparent',
                                    border: theme.palette.mode === 'dark' ? '1px solid #C2C2C2' : '1px solid #e0e0e0',
                                    borderRadius: '8px',
                                    boxShadow: 'none',
                                }}
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
                            <Typography variant="body1" sx={{ textAlign: 'center', mb: 2, fontSize:'1.6rem' }}>
                                {selectedDate?.format('ddd, MMMM D')}
                            </Typography>
                            {selectedDateTimeslots ? (
                                selectedDateTimeslots.slots.map((slot, slotIndex) => (
                                    <Button
                                        key={slotIndex}
                                        variant="outlined"
                                        sx={{
                                            margin: '0.5rem 0',
                                            fontSize: isSmallScreen ? '1rem' : '1.4rem',
                                            backgroundColor:
                                                selectedTimeSlot === slot.start ? '#348feb' : 'inherit',
                                            color:
                                                selectedTimeSlot === slot.start ? 'white' : 'inherit',
                                            border: `1px solid ${theme.palette.mode === 'dark' ? '#C2C2C2' : '#e0e0e0'}`,
                                            boxShadow: 'none',
                                            '&:hover': {
                                                backgroundColor:
                                                    selectedTimeSlot === slot.start
                                                        ? '#348feb'
                                                        : 'inherit',
                                            },
                                        }}
                                        onClick={() => handleTimeSlotClick(slot.start)}
                                    >
                                        {slot.start}
                                    </Button>
                                ))
                            ) : (
                                <Typography sx={{ textAlign: 'center', fontSize: '0.85rem' }}>
                                    {t("steps.7.unavailable")}
                                </Typography>
                            )}
                        </Box>
                    </Box>
                </Box>
            </StyledCalendarContainer>
        </LocalizationProvider>
    );
};

export default SmallScreenView;