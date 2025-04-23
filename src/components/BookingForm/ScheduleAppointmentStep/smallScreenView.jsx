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
    styled,
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
import {useTranslations} from "next-intl";

dayjs.extend(utc);
dayjs.extend(timezone);
dayjs.tz.setDefault('UTC');

// Custom styled component to override MUI classes
const StyledCalendarContainer = styled(Box)(({ theme, darkMode }) => ({
    '& .MuiPickersLayout-root .MuiPickersDay-root': {
        color: darkMode ? '#ffffff !important' : '#000000 !important',
    },
    '& .MuiPickersLayout-root .MuiPickersDay-root.Mui-disabled': {
        color: darkMode ? '#666666 !important' : '#aaaaaa !important',
        opacity: 0.6,
    },
    '& .css-1asoz3s-MuiPickersLayout-root .MuiPickersDay-root': {
        color: darkMode ? '#ffffff !important' : '#000000 !important',
    },
    '& .css-1asoz3s-MuiPickersLayout-root .MuiPickersDay-root.Mui-disabled': {
        color: darkMode ? '#666666 !important' : '#aaaaaa !important',
        opacity: 0.6,
    },
    // Additional selectors to ensure all day elements are covered
    '& .MuiDateCalendar-root .MuiPickersDay-root': {
        color: darkMode ? '#ffffff !important' : '#000000 !important',
    },
    '& .MuiDateCalendar-root .MuiPickersDay-root.Mui-disabled': {
        color: darkMode ? '#666666 !important' : '#aaaaaa !important',
        opacity: 0.6,
    },
}));

const theme = createTheme({
    palette: {
        mode: 'light',
    },
    components: {
        MuiPickersDay: {
            styleOverrides: {
                root: {
                    color: '#000000',
                    '&.Mui-disabled': {
                        color: '#aaaaaa',
                    },
                },
            },
        },
    },
});

const darkTheme = createTheme({
    palette: {
        mode: 'dark',
    },
    components: {
        MuiPickersDay: {
            styleOverrides: {
                root: {
                    color: '#ffffff',
                    '&.Mui-disabled': {
                        color: '#666666',
                    },
                },
            },
        },
    },
});

const SmallScreenView = () => {
    const t = useTranslations('booking');
    const form = useMultiStepForm();
    const { updateValidation } = useValidation();
    const { openSnackbar } = useSnackbar();

    const [selectedDate, setSelectedDate] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [timeSlots, setTimeSlots] = useState([]);
    const [availableDates, setAvailableDates] = useState([]);
    const [selectedTimeSlot, setSelectedTimeSlot] = useState(null);
    const isSmallScreen = useMediaQuery('(max-width:600px)');
    const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');

    useEffect(() => {
        // Add global styles to override MUI's date picker styles
        const style = document.createElement('style');
        style.type = 'text/css';
        style.innerHTML = `
            .css-1asoz3s-MuiPickersLayout-root .MuiPickersDay-root {
                color: ${prefersDarkMode ? '#ffffff !important' : '#000000 !important'};
            }
            .css-1asoz3s-MuiPickersLayout-root .MuiPickersDay-root.Mui-disabled {
                color: ${prefersDarkMode ? '#666666 !important' : '#aaaaaa !important'};
                opacity: 0.6;
            }
        `;
        document.head.appendChild(style);

        return () => {
            document.head.removeChild(style);
        };
    }, [prefersDarkMode]);

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
                    openSnackbar(t("steps.7.error.0"));
                    return [];
                }
            } catch (err) {
                console.error('Error fetching time slots', err);
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

        if (form.currentStep === 8) fetchInitialData();
    }, [form.formData.service, form.duration, form.currentStep, openSnackbar]);

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
                    color: prefersDarkMode ? '#ffffff !important' : '#000000 !important',
                    '&.Mui-selected': {
                        backgroundColor: 'transparent',
                        border: 'none',
                    },
                    '&.Mui-disabled': {
                        color: prefersDarkMode ? '#666666 !important' : '#aaaaaa !important',
                        opacity: 0.6,
                    },
                    ...(isDisabled && {
                        '&:before': {
                            content: '""',
                            position: 'absolute',
                            width: '50%',
                            height: '1px',
                            backgroundColor: prefersDarkMode ? '#C2C2C2' : '#000000',
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

    const selectedDateTimeslots = timeSlots.find((d) =>
        dayjs(d.time).isSame(selectedDate, 'day')
    );

    return (
        <ThemeProvider theme={prefersDarkMode ? darkTheme : theme}>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
                <StyledCalendarContainer darkMode={prefersDarkMode}>
                    <Box p={isSmallScreen ? 2 : 4}>
                        <Typography variant="h6" gutterBottom textAlign="center">
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
                            <Box
                                sx={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    width: '100%',
                                    maxWidth: isSmallScreen ? '100%' : '50%',
                                }}
                            >
                                <StaticDatePicker
                                    orientation={isSmallScreen ? 'portrait' : 'portrait'}
                                    value={selectedDate}
                                    onChange={handleDateChange}
                                    disablePast
                                    shouldDisableDate={shouldDisableDate}
                                    sx={{
                                        width: '100%',
                                        '& .MuiPickersCalendarHeader-root': {
                                            color: prefersDarkMode ? '#ffffff' : '#000000',
                                        },
                                        '& .MuiTypography-root': {
                                            color: prefersDarkMode ? '#ffffff' : '#000000',
                                        },
                                        '& .MuiPickersDay-root': {
                                            color: `${prefersDarkMode ? '#ffffff' : '#000000'} !important`,
                                        },
                                        '& .MuiPickersDay-root.Mui-disabled': {
                                            color: `${prefersDarkMode ? '#666666' : '#aaaaaa'} !important`,
                                            opacity: 0.6,
                                        },
                                        '& .MuiPickersDay-root:not(.Mui-selected)': {
                                            borderColor: prefersDarkMode ? '#C2C2C2' : 'transparent',
                                        },
                                        backgroundColor: prefersDarkMode ? 'transparent' : 'inherit',
                                        border: prefersDarkMode ? '1px solid #C2C2C2' : 'none',
                                        borderRadius: prefersDarkMode ? '8px' : '0',
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
                                                    selectedTimeSlot === slot.start ? '#348feb' : 'inherit',
                                                color:
                                                    selectedTimeSlot === slot.start ? 'white' : 'inherit',
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
        </ThemeProvider>
    );
};

export default SmallScreenView;