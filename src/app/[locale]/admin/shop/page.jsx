"use client";
import { Badge, Box, Grid, Modal, Switch } from "@mui/material";
import React, { useEffect, useState } from "react";
import {
  CardBody,
  CardHeading,
  ModalButton,
  ModalContentBox,
  ModalLabel,
  ModalValue,
  SectionHeading,
  StyledCard,
} from "../../../../components/mui/AdminPkgs";
import { CustomFormDateField, CustomFormTextField } from "../../../../components/mui/NewFormPkgs";
import { DateCalendar, DayCalendarSkeleton, LocalizationProvider, PickersDay } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import dayjs from "dayjs";
import useSnackbar from "../../../../hooks/useSnackbar";
import { ModalContainer, ModalHeading } from "../../../../components/BookingForm/ScheduleAppointmentStep/ScheduleAppointment.style";

const ShopManagementPage = () => {
  return (
    <Box sx={{ padding: "16px" }}>
      <SectionHeading>Shop Management</SectionHeading>

      <Grid container spacing={3}>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <NumberOfVehicles />
        </LocalizationProvider>
        <ShopOpen />
      </Grid>
    </Box>
  );
};

export default ShopManagementPage;

const NumberOfVehicles = () => {
  const { openSnackbar } = useSnackbar();

  const [numVehicles, setNumVehicles] = useState(5);
  const [vehiclesDate, setVehiclesDate] = useState(dayjs());
  const [refetchNumVehicles, setRefetchNumVehicles] = useState(false);
  const [ShowingNumVehicles, setShowingNumVehicles] = useState("Loading...");

  useEffect(() => {
    fetch(`/api/booking/cars?date=${new Date().toISOString()}`)
      .then((res) => res.json())
      .then((data) => {
        setShowingNumVehicles(data.numCars);
      })
      .catch((err) => {
        console.error(err);
      });
  }, [refetchNumVehicles]);

  const handleNumVehiclesChange = (e) => {
    setNumVehicles(e.target.value);
  };

  const handleVehiclesDateChange = (value) => {
    setVehiclesDate(value);
  };

  const handleNumVehiclesSubmit = (e) => {
    e.preventDefault();

    fetch(`/api/booking/cars`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        cars: numVehicles,
        date: vehiclesDate.toISOString(),
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        openSnackbar("Saved! " + numVehicles + " vehicles available on " + vehiclesDate.format("YYYY-MM-DD"));
        setRefetchNumVehicles(!refetchNumVehicles);
      })
      .catch((err) => {
        console.error(err);
        openSnackbar("Error saving vehicles");
      });
  };

  return (
    <Grid item xs={12} md={8}>
      <StyledCard>
        <CardBody>
          <CardHeading>Available Vehicles</CardHeading>

          <Box>
            <ModalContentBox>
              <ModalLabel sx={{ fontSize: "1.4rem" }}>Currently Available Vehicles</ModalLabel>
              <ModalValue>{ShowingNumVehicles}</ModalValue>
            </ModalContentBox>

            <Box sx={{ marginTop: "3rem" }}>
              <CardHeading>Change Available Vehicles</CardHeading>
              <form onSubmit={handleNumVehiclesSubmit}>
                <CustomFormTextField
                  label="Number of Vehicles"
                  name="vehicles"
                  value={numVehicles}
                  onChange={handleNumVehiclesChange}
                  fullWidth
                  sx={{
                    boxShadow: "0 2px 6px rgba(0, 0, 0, 0.1)",
                    borderRadius: "8px",
                  }}
                />
                <CustomFormDateField
                  label="Date (optional)"
                  name="date"
                  value={vehiclesDate}
                  onChange={handleVehiclesDateChange}
                  fullWidth
                  sx={{
                    marginTop: "1.3rem",
                    boxShadow: "0 2px 6px rgba(0, 0, 0, 0.1)",
                    borderRadius: "8px",
                  }}
                />
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "flex-end",
                  }}
                >
                  <ModalButton sx={{}} type="submit">
                    Save
                  </ModalButton>
                </Box>
              </form>
            </Box>
          </Box>
        </CardBody>
      </StyledCard>
    </Grid>
  );
};

const ShopOpen = () => {
  const [availableDates, setAvailableDates] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedDate, setSelectedDate] = useState(null);

  const handleDateSelect = (date) => {
    setSelectedDate(date);
    setIsModalOpen(true);
  };

  const handleModalClose = () => {
    setSelectedDate(null);
    setIsModalOpen(false);
  };

  function ServerDay(props) {
    const { highlightedDays = [], day, outsideCurrentMonth, ...other } = props;

    const isSelected = !outsideCurrentMonth && availableDates.some((date) => date.isSame(day, "day"));
    console.log("isSelected", isSelected, day);

    return (
      <Badge key={props.day.toString()} overlap="circular" badgeContent={isSelected ? "🔴" : undefined}>
        <PickersDay {...other} outsideCurrentMonth={outsideCurrentMonth} day={day} />
      </Badge>
    );
  }

  useEffect(() => {
    setIsLoading(true);
    fetch(`/api/booking/shop/closed`)
      .then((res) => res.json())
      .then((data) => {
        setAvailableDates(data.dates.map((d) => dayjs(d.date)));
        setIsLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setIsLoading(false);
      });
  }, []);

  return (
    <Grid item xs={12} md={4}>
      <StyledCard>
        <CardBody>
          <CardHeading>Shop Open</CardHeading>

          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DateCalendar
              disablePast
              defaultValue={dayjs()}
              loading={isLoading}
              onChange={handleDateSelect}
              // onMonthChange={handleMonthChange}
              renderLoading={() => <DayCalendarSkeleton />}
              slots={{
                day: ServerDay,
              }}
              slotProps={{
                day: {
                  availableDates,
                },
              }}
              style={{ width: "100%", maxWidth: "32rem" }}
            />
          </LocalizationProvider>
        </CardBody>
        <ShopOpenCloseModal
          isOpen={isModalOpen}
          handleClose={handleModalClose}
          selectedDate={selectedDate}
          availableDates={availableDates}
          setAvailableDates={setAvailableDates}
        />
      </StyledCard>
    </Grid>
  );
};

const ShopOpenCloseModal = ({ isOpen, handleClose, selectedDate, availableDates, setAvailableDates }) => {
  const isShopOpen = availableDates.some((date) => date.isSame(selectedDate, "day"));
  const { openSnackbar } = useSnackbar();

  const handleChange = (event) => {
    if (isShopOpen) {
      setAvailableDates(availableDates.filter((date) => !date.isSame(selectedDate, "day")));
    } else {
      setAvailableDates([...availableDates, selectedDate]);
    }

    fetch(`/api/booking/shop`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ date: dayjs(selectedDate).toISOString(), openClose: isShopOpen }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        openSnackbar("Saved! " + (event.target.checked ? "Open" : "Closed") + " shop on " + selectedDate.format("YYYY-MM-DD"));
      })
      .catch((err) => {
        console.error(err);
        openSnackbar("Error saving shop");
      });

    handleClose();
  };

  return (
    <Modal open={isOpen} onClose={handleClose}>
      <ModalContainer>
        <ModalHeading>
          {selectedDate?.format("MMMM, DD")}
          <span style={{ marginLeft: "1.2rem" }}>{selectedDate?.format("ddd").toUpperCase()}</span>
        </ModalHeading>

        <Box
          sx={{
            justifyContent: "center",
            alignItems: "center",
            display: "flex",
            flexDirection: "column",
            padding: "0.5rem",
          }}
        >
          <Switch checked={!isShopOpen} onChange={handleChange} color="warning" inputProps={{ "aria-label": "controlled" }} />
        </Box>
      </ModalContainer>
    </Modal>
  );
};
