"use client";
import React, { useState, useEffect } from "react";
import {
    Box,
    Card,
    Dialog,
    DialogContent,
    DialogTitle,
    Divider,
    Grid,
    IconButton,
    InputAdornment,
    TextField,
    Typography, useMediaQuery,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import FilterListIcon from "@mui/icons-material/FilterList";
import SearchIcon from "@mui/icons-material/Search";
import {
    ModalButton,
    ModalContentBox,
    ModalLabel,
    ModalValue,
    SectionHeading,
} from "../mui/AdminPkgs";
import AddIcon from "@mui/icons-material/Add";
import BookingProfileCard from "./BookingProfileCard";
import { EditBookingModal } from "./EditBookingModal";

const BookingsPage = ({}) => {
    const { bookings: bookingsData } = useBookings();
    const isMobile = useMediaQuery("(max-width:600px)");
    const [selectedBooking, setSelectedBooking] = useState(null);
    const [newBooking, setNewBooking] = useState(null);
    const [searchQuery, setSearchQuery] = useState("");
    const [removed, setRemoved] = useState([]);

    const handleOpenModal = (booking) => {
        setSelectedBooking(booking);
    };

    const handleOpenNewBookingModal = () => {
        setNewBooking(true);
    };

    const handleCloseModal = () => {
        setSelectedBooking(null);
    };

    const handleCloseNewBookingModal = () => {
        setNewBooking(null);
    };

    const handleSearchChange = (event) => {
        setSearchQuery(event.target.value);
    };

    const removeBookingwithId = (id) => {
        setRemoved([...removed, id]);
    };

    const filteredBookings = bookingsData
        ?.filter((booking) => {
            return (
                booking.firstName.toLowerCase().includes(searchQuery.toLowerCase()) ||
                booking.surname.toLowerCase().includes(searchQuery.toLowerCase())
            );
        })
        .filter((booking) => !removed.includes(booking._id));

    return (
        <Box sx={{ padding: isMobile? "0" : "16px" }}>
            <Box
                sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    flexDirection: isMobile ? "column" : "row",
                    width: "100%",
                }}
            >
                <Box
                    sx={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                        width: "100%",
                    }}
                >
                    <SectionHeading>Bookings</SectionHeading>

                    {isMobile && (
                        <Box sx={{ display: "flex", gap: 1 }}>
                            <IconButton>
                                <FilterListIcon />
                            </IconButton>
                            <IconButton onClick={handleOpenNewBookingModal}>
                                <AddIcon />
                            </IconButton>
                        </Box>
                    )}
                </Box>

                <Box
                    sx={{
                        display: "flex",
                        alignItems: "center",
                        marginTop: isMobile ? 2 : 0, // Adds space only on mobile
                        width: isMobile ? "100%" : "auto",
                    }}
                >
                    <BookingPageTextField handleSearchChange={handleSearchChange} searchQuery={searchQuery} />

                    {/* Buttons stay here for larger screens */}
                    {!isMobile && (
                        <>
                            <IconButton>
                                <FilterListIcon />
                            </IconButton>
                            <IconButton onClick={handleOpenNewBookingModal}>
                                <AddIcon />
                            </IconButton>
                        </>
                    )}
                </Box>
            </Box>

            <Divider sx={{ marginBottom: "20px", marginTop: "20px" }} />

            <Box sx={{ padding: 2 }}>
                <Grid container spacing={2}>
                    {filteredBookings.map((booking, index) => (
                        <BookingProfileCard booking={booking} handleOpenModal={handleOpenModal} key={index}/>
                    ))}
                </Grid>
            </Box>

            <BookingInfoModal
                open={!!selectedBooking}
                handleCloseModal={handleCloseModal}
                selectedBooking={selectedBooking}
                removeBookingWithId={removeBookingwithId}
            />
            <NewBookingFormModal open={!!newBooking} handleCloseModal={handleCloseNewBookingModal} />
        </Box>
    );
};

export default BookingsPage;

import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import MoreTimeIcon from "@mui/icons-material/MoreTime";
const BookingInfoModal = ({ open, handleCloseModal, selectedBooking, removeBookingWithId }) => {
    const [rescheduleOpen, setResceduleOpen] = useState(false);
    const [editBooking, setEditBooking] = useState(null);
    const { openSnackbar } = useSnackbar();

    async function handleDeleteBooking(id) {
        try {
            const response = await fetch(`/api/booking?id=${id}`, {
                method: "DELETE",
                headers: {
                    "Content-Type": "application/json",
                },
            });

            if (!response.ok) {
                openSnackbar("Error delete booking: " + error, "error");
                return;
            }

            const booking = await response.json();
            openSnackbar("Booking deleted successfully");
            return booking;
        } catch (error) {
            openSnackbar("Error delete booking: " + error, "error");
            throw error;
        }
    }

    const handleResceduleClose = () => {
        setResceduleOpen(null);
    };

    const handleResceduleOpen = () => {
        setResceduleOpen(true);
    };

    const handleDelete = () => {
        handleDeleteBooking(selectedBooking._id).then(() => {
            removeBookingWithId(selectedBooking._id);
            handleCloseModal();
        });
    };

    const handleEditModal = () => {
        setEditBooking(true);
    };

    const handleCloseEditModal = () => {
        setEditBooking(null);
    };

    if (!open) return null;
    console.log("aaaaaaaaa", selectedBooking);

    return (
        <>
            <EditBookingModal open={!!editBooking} handleCloseModal={handleCloseEditModal} selectedBooking={selectedBooking} />
            <RescheduleModal
                booking={selectedBooking}
                serviceType={selectedBooking.type}
                duration={selectedBooking.duration || 0}
                open={!!rescheduleOpen}
                handleCloseModal={handleResceduleClose}
            />
            <Dialog open={open} onClose={handleCloseModal} PaperProps={{ style: { maxWidth: "60rem", width: "100%" } }}>
                <DialogTitle
                    sx={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                        fontSize: "1.6rem",
                    }}
                >
                    Booking Details
                    <Box>
                        {/* <IconButton onClick={handleEditModal}>
              <EditIcon />
            </IconButton> */}
                        <IconButton onClick={handleDelete}>
                            <DeleteIcon />
                        </IconButton>
                        <IconButton onClick={handleResceduleOpen}>
                            <MoreTimeIcon />
                        </IconButton>
                        <IconButton onClick={handleCloseModal}>
                            <CloseIcon />
                        </IconButton>
                    </Box>
                </DialogTitle>

                <DialogContent>
                    <ModalLabel sx={{ fontSize: "1.4rem", marginBottom: "1.2rem" }}>
                        Status: {selectedBooking.status === "COMPLETED" ? "Completed" : "Pending"}
                    </ModalLabel>
                    {/* Outer Bordered Card for Glassmorph effect */}
                    <Box>
                        {/* Personal Details Card */}
                        <Box sx={{ width: "100%", height: "auto" }}>
                            <Typography sx={{ fontSize: "1.5rem", mb: "2rem" }}>Personal details</Typography>
                            <ModalContentBox>
                                <ModalLabel sx={{ fontSize: "1.4rem" }}>Phone Number</ModalLabel>
                                <ModalValue>{selectedBooking.phoneNumber}</ModalValue>
                            </ModalContentBox>

                            <ModalContentBox>
                                <ModalLabel sx={{ fontSize: "1.4rem" }}>Email</ModalLabel>
                                <ModalValue>{selectedBooking.email}</ModalValue>
                            </ModalContentBox>

                            <ModalContentBox>
                                <ModalLabel sx={{ fontSize: "1.4rem" }}>Company</ModalLabel>
                                <ModalValue>{selectedBooking.companyName}</ModalValue>
                            </ModalContentBox>

                            <ModalContentBox>
                                <ModalLabel sx={{ fontSize: "1.4rem" }}>Address</ModalLabel>
                                <ModalValue>{`${selectedBooking.street}, ${selectedBooking.city}, ${selectedBooking.zipCode}`}</ModalValue>
                            </ModalContentBox>
                        </Box>

                        {/* Vehicle and Work Details Card */}
                        <Box sx={{ width: "100%", height: "100%" }}>
                            <Typography sx={{ fontSize: "1.5rem", mb: "2rem" }}>Vehicle details</Typography>
                            <Box>
                                <ModalContentBox>
                                    <ModalLabel sx={{ fontSize: "1.4rem" }}>Vehicle</ModalLabel>
                                    <ModalValue>{selectedBooking.vehicleMakeAndModel}</ModalValue>
                                </ModalContentBox>

                                <ModalContentBox>
                                    <ModalLabel sx={{ fontSize: "1.4rem" }}>License Plate</ModalLabel>
                                    <ModalValue>{selectedBooking.vehicleDetails?.kenteken || "..."}</ModalValue>
                                </ModalContentBox>

                                <ModalContentBox>
                                    <ModalLabel sx={{ fontSize: "1.4rem" }}>Service</ModalLabel>
                                    <ModalValue>{selectedBooking.serviceName}</ModalValue>
                                </ModalContentBox>

                                <ModalContentBox>
                                    <ModalLabel sx={{ fontSize: "1.4rem" }}>Add-ons</ModalLabel>
                                    <ModalValue>
                                        {selectedBooking.serviceAddons.addons && selectedBooking.serviceAddons?.addons?.join(", ")}
                                    </ModalValue>
                                </ModalContentBox>

                                <ModalContentBox>
                                    <ModalLabel sx={{ fontSize: "1.4rem" }}>Detailing</ModalLabel>
                                    <ModalValue>
                                        {selectedBooking.serviceAddons.detailing && `, ${selectedBooking.serviceAddons?.detailing?.join(", ")}`}
                                    </ModalValue>
                                </ModalContentBox>
                            </Box>
                            <Box>
                                <Typography sx={{ fontSize: "1.5rem", mb: "2rem" }}>Package Details</Typography>

                                <ModalContentBox>
                                    <ModalLabel sx={{ fontSize: "1.4rem" }}>Price</ModalLabel>
                                    <ModalValue>{selectedBooking.price}</ModalValue>
                                </ModalContentBox>

                                <ModalContentBox>
                                    <ModalLabel sx={{ fontSize: "1.4rem" }}>Duration</ModalLabel>
                                    <ModalValue>{selectedBooking.price}mins</ModalValue>
                                </ModalContentBox>

                                <ModalContentBox>
                                    <ModalLabel sx={{ fontSize: "1.4rem" }}>Payment Status</ModalLabel>
                                    <ModalValue>{selectedBooking.paymentStatus}</ModalValue>
                                </ModalContentBox>
                            </Box>
                        </Box>
                    </Box>

                    {/* Complete Button */}
                    <Box
                        sx={{
                            display: "flex",
                            justifyContent: "center",
                            marginTop: "20px",
                        }}
                    >
                        <ModalButton onClick={() => alert("Service Completed!")}>Complete</ModalButton>
                    </Box>
                </DialogContent>
            </Dialog>
        </>
    );
};

const BookingPageTextField = ({ searchQuery, handleSearchChange }) => {
    return (
        <TextField
            variant="outlined"
            placeholder="Search"
            value={searchQuery}
            onChange={handleSearchChange}
            InputProps={{
                startAdornment: (
                    <InputAdornment position="start">
                        <SearchIcon sx={{ color: "#333" }} />
                    </InputAdornment>
                ),
            }}
            sx={{
                marginRight: "16px",
                width: "250px",
                backgroundColor: "#fff",
                borderRadius: "8px",
                boxShadow: "0px 4px 8px 0px rgba(0, 0, 0, 0.1)",
                "& .MuiOutlinedInput-root": {
                    "& fieldset": {
                        borderColor: "#888",
                    },
                    "&:hover fieldset": {
                        borderColor: "#555",
                    },
                    "&.Mui-focused fieldset": {
                        borderColor: "#333",
                    },
                },
                "& input": {
                    color: "#333",
                },
            }}
        />
    );
};
import BookingForm from "../../components/BookingForm";
import RescheduleModal from "./RescheduleModal";
import useSnackbar from "../../hooks/useSnackbar";
import { useBookings } from "../../contexts/BookingsContext";
import {error} from "next/dist/build/output/log";

const NewBookingFormModal = ({ handleCloseModal, open }) => {
    if (!open) return null;

    return (
        <Dialog open={open} onClose={handleCloseModal} PaperProps={{ style: { maxWidth: "100rem", width: "100%" } }}>
            <DialogTitle
                sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    fontSize: "1.6rem",
                }}
            >
                Make a new Booking
                <IconButton onClick={handleCloseModal}>
                    <CloseIcon />
                </IconButton>
            </DialogTitle>

            <DialogContent>
                {/* ! ERROR HERE */}
                <BookingForm />
            </DialogContent>
        </Dialog>
    );
};
