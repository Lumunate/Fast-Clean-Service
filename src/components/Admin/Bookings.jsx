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

import BookingForm from "../../components/BookingForm";
import RescheduleModal from "./RescheduleModal";
import useSnackbar from "../../hooks/useSnackbar";
import { useBookings } from "../../contexts/BookingsContext";
import {error} from "next/dist/build/output/log";

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
import { useLocale, useTranslations } from "next-intl";
import { useAutocarePackages } from "../../hooks/useAutocarePackages";
const BookingInfoModal = ({ open, handleCloseModal, selectedBooking, removeBookingWithId }) => {
    const [rescheduleOpen, setResceduleOpen] = useState(false);
    const [editBooking, setEditBooking] = useState(null);
    const { openSnackbar } = useSnackbar();
    const t = useTranslations("admin_dashboard.admin_booking")

    const locale = useLocale()

     const { packages: apiPackages, loading, error, fetchPackages } = useAutocarePackages();

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

    async function handleCompleteBooking() {
  try {
    const response = await fetch(`/api/booking?id=${selectedBooking._id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ bookingStatus: "COMPLETED" }),
    });

    if (!response.ok) {
      throw new Error("Failed to update status");
    }

    openSnackbar("Booking marked as Completed", "success");
    selectedBooking.bookingStatus = "COMPLETED"; // Update local state (optional)
  } catch (error) {
    openSnackbar("Error updating status: " + error.message, "error");
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
// First make sure these are defined in the same scope
const pkgsType = selectedBooking?.packageType?.toLowerCase();
const packagesArray = apiPackages?.packages[pkgsType];
const matchedPackage = packagesArray?.find(pkg => pkg.id === selectedBooking?.packageName);

// Get all additional options
const addOns = matchedPackage?.additionalOptions || {};
const addOnsBooking = selectedBooking?.serviceAddons || {};
//Get all detailing options and match
const detailingOptions = addOns?.detailing || [];
const selectedDetailingIds = addOnsBooking?.detailing || [];
const matchedDetails = detailingOptions.filter(option =>
  selectedDetailingIds.includes(option._id)
);
const matchedNames = matchedDetails.map(option => option.name[locale]);

//to find name of addons by ids which are matching
const matchedInteriorExteriorAddons = [
  ...(matchedPackage?.additionalOptions?.interior || []),
  ...(matchedPackage?.additionalOptions?.exterior || [])
].filter(addon => addOnsBooking?.addons?.includes(addon._id));

const matchedInteriorExteriorNames = matchedInteriorExteriorAddons.map(addon => addon.name[locale]);

    if (!open) return null;

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
                    {t("0")}
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
                        {t("1")}: {selectedBooking.bookingStatus === "COMPLETED" ? "Completed" : "Pending"}
                    </ModalLabel>
                    {/* Outer Bordered Card for Glassmorph effect */}
                    <Box>
                        {/* Personal Details Card */}
                        <Box sx={{ width: "100%", height: "auto" }}>
                            <Typography sx={{ fontSize: "1.5rem", mb: "2rem" }}>{t("2")}</Typography>
                            <ModalContentBox>
                                <ModalLabel sx={{ fontSize: "1.4rem" }}>{t("3")}</ModalLabel>
                                <ModalValue>{selectedBooking.firstName} {selectedBooking.surname}</ModalValue>
                            </ModalContentBox>
                            
                            <ModalContentBox>
                                <ModalLabel sx={{ fontSize: "1.4rem" }}>{t("4")}</ModalLabel>
                                <ModalValue>{selectedBooking.phoneNumber}</ModalValue>
                            </ModalContentBox>

                            <ModalContentBox>
                                <ModalLabel sx={{ fontSize: "1.4rem" }}>{t("5")}</ModalLabel>
                                <ModalValue>{selectedBooking.email}</ModalValue>
                            </ModalContentBox>

                            <ModalContentBox>
                                <ModalLabel sx={{ fontSize: "1.4rem" }}>{t("6")}</ModalLabel>
                                <ModalValue>{selectedBooking.companyName}</ModalValue>
                            </ModalContentBox>

                            <ModalContentBox>
                                <ModalLabel sx={{ fontSize: "1.4rem" }}>{t("7")}</ModalLabel>
                                <ModalValue>{`${selectedBooking.street}, ${selectedBooking.zipCode}, ${selectedBooking.city}`}</ModalValue>
                            </ModalContentBox>
                        </Box>

                        {/* Vehicle and Work Details Card */}
                        <Box sx={{ width: "100%", height: "100%" }}>
                            <Typography sx={{ fontSize: "1.5rem", mb: "2rem" }}>{t("8")}</Typography>
                            <Box>
                                <ModalContentBox>
                                    <ModalLabel sx={{ fontSize: "1.4rem" }}>{t("9")}</ModalLabel>
                                    <ModalValue>{selectedBooking.vehicleMakeAndModel}</ModalValue>
                                </ModalContentBox>

                                <ModalContentBox>
                                    <ModalLabel sx={{ fontSize: "1.4rem" }}>{t("10")}</ModalLabel>
                                    <ModalValue>{selectedBooking.vehicleDetails?.kenteken || "..."}</ModalValue>
                                </ModalContentBox>

                                <ModalContentBox>
                                    <ModalLabel sx={{ fontSize: "1.4rem" }}>{t("11")}</ModalLabel>
                                    <ModalValue>{selectedBooking.serviceName}</ModalValue>
                                </ModalContentBox>

                                <ModalContentBox>
                                    <ModalLabel sx={{ fontSize: "1.4rem" }}>{t("12")}</ModalLabel>
                                    <ModalValue style={{ whiteSpace: 'pre-line' }}>
                                        {matchedInteriorExteriorNames?.join("\n")}
                                    </ModalValue>
                                </ModalContentBox>

                                <ModalContentBox>
                                    <ModalLabel sx={{ fontSize: "1.4rem" }}>{t("13")}</ModalLabel>
                                    <ModalValue style={{ whiteSpace: 'pre-line' }}>
                                        {matchedNames?.join("\n")}
                                    </ModalValue>
                                </ModalContentBox>
                            </Box>
                            <Box>
                                <Typography sx={{ fontSize: "1.5rem", mb: "2rem" }}>{t("14")}</Typography>

                                <ModalContentBox>
                                    <ModalLabel sx={{ fontSize: "1.4rem" }}>{t("15")}</ModalLabel>
                                    <ModalValue>{selectedBooking.packageType}</ModalValue>
                                </ModalContentBox>

                                <ModalContentBox>
                                    <ModalLabel sx={{ fontSize: "1.4rem" }}>{t("16")}</ModalLabel>
                                    <ModalValue>{selectedBooking.type}</ModalValue>
                                </ModalContentBox>

                                <ModalContentBox>
                                    <ModalLabel sx={{ fontSize: "1.4rem" }}>{t("17")}</ModalLabel>
                                    <ModalValue>{selectedBooking.price}</ModalValue>
                                </ModalContentBox>

                                <ModalContentBox>
                                    <ModalLabel sx={{ fontSize: "1.4rem" }}>{t("18")}</ModalLabel>
                                    <ModalValue>{selectedBooking.duration}mins</ModalValue>
                                </ModalContentBox>

                                <ModalContentBox>
                                    <ModalLabel sx={{ fontSize: "1.4rem" }}>{t("21")}</ModalLabel>
                                    <ModalValue>{new Date(selectedBooking.lockTime.start).toLocaleString("en-GB", {
                                        year: "numeric",
                                        month: "short",
                                        day: "2-digit",
                                        hour: "2-digit",
                                        minute: "2-digit",
                                    })}</ModalValue>
                                </ModalContentBox>

                                <ModalContentBox>
                                    <ModalLabel sx={{ fontSize: "1.4rem" }}>{t("19")}</ModalLabel>
                                    <ModalValue>
                                        {selectedBooking.payment?.status?.toUpperCase() || 'PENDING'}
                                    </ModalValue>
                                </ModalContentBox>
                            </Box>
                        </Box>
                    </Box>

                    {/* Complete Button */}
                    {selectedBooking.bookingStatus !== "COMPLETED" && (
                    <Box
                        sx={{
                            display: "flex",
                            justifyContent: "center",
                            marginTop: "20px",
                        }}
                    >
                        <ModalButton  onClick={handleCompleteBooking}>{t("20")}</ModalButton>
                    </Box>
                    )}
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
