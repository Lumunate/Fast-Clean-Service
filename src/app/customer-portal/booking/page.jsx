"use client";
import React, { useState, useEffect } from "react";
import {
    Box,
    InputAdornment,
    Paper,
    Table,
    TableBody,
    TableHead,
    TextField,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import {
    CardBody,
    SectionHeading,
    StyledCard,
    StyledTable,
    TableCellCustom,
    TableHeaderCell,
    TableRowCustom,
} from "../../../components/mui/AdminPkgs";
import { useSession } from "next-auth/react";

const tableHeaders = [
    "Customer Name",
    "Company Name",
    "Street",
    "Zip Code",
    "City",
    "Email",
    "Phone Number",
    "Vehicle",
    "Vehicle Type",
    "Service Name",
    "Package",
    "Appointment Start",
    "Appointment End",
    "Price",
    "Duration",
    "Travel Duration",
    "Type",
    "Addons",
    "Detailing",
    "Lock Time Start",
    "Lock Time End",
];

const BookingsPage = () => {
    const { data: session } = useSession();
    const [userBookings, setUserBookings] = useState([]);
    const [searchQuery, setSearchQuery] = useState("");
    const userEmail = session?.user?.email;

    const handleSearchChange = (event) => {
        setSearchQuery(event.target.value);
    };

    useEffect(() => {
        const fetchBookings = async () => {
            try {
                const response = await fetch(`/api/booking/user?userEmail=${userEmail}`);
                const data = await response.json();
                if (data.success) {
                    setUserBookings(data.data);
                }
            } catch (error) {
                console.error("Failed to fetch bookings:", error);
            }
        };

        fetchBookings();
    }, []);

    const filteredBookings = userBookings.filter((booking) => {
        const searchText = searchQuery.toLowerCase();
        return (
            booking.vehicleMakeAndModel.toLowerCase().includes(searchText) ||
            booking.serviceName.toLowerCase().includes(searchText) ||
            booking.city?.toLowerCase().includes(searchText)
        );
    });

    return (
        <Box sx={{ padding: "16px", marginTop: {xs: "1rem", sm: "0"} }}>
            <Box
                sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    marginBottom: "20px",
                    flexDirection: { xs: "column", sm: "row" },
                    alignItems: { xs: "flex-start", sm: "center" },
                }}
            >
                <SectionHeading sx={{ textAlign: { xs: "left", sm: "inherit" } }}>
                    My Bookings
                </SectionHeading>

                <TextField
                    variant="outlined"
                    placeholder="Search by Vehicle, Service, or City"
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
                        width: { xs: "100%", sm: "250px" }, // Full width on small screens
                        backgroundColor: "#fff",
                        borderRadius: "8px",
                        boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
                        marginTop: { xs: "12px", sm: "0" }, // Add spacing on small screens
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
            </Box>

            <StyledCard>
                <CardBody>
                    <StyledTable component={Paper} sx={{ borderRadius: "12px" }}>
                        <Table aria-label="user bookings table">
                            <TableHead>
                                <TableRowCustom>
                                    {tableHeaders.map((header, index) => (
                                        <TableHeaderCell
                                            key={index}
                                            sx={{
                                                fontSize: "1.2rem",
                                                color: "white",
                                                fontWeight: "bold",
                                            }}
                                        >
                                            {header}
                                        </TableHeaderCell>
                                    ))}
                                </TableRowCustom>
                            </TableHead>
                            <TableBody>
                                {filteredBookings.map((booking, index) => (
                                    <TableRowCustom key={booking._id || index}>
                                        <TableCellCustom>
                                            {`${booking.firstName} ${booking.surname}`}
                                        </TableCellCustom>
                                        <TableCellCustom>{booking.companyName || "N/A"}</TableCellCustom>
                                        <TableCellCustom>{booking.street || "N/A"}</TableCellCustom>
                                        <TableCellCustom>{booking.zipCode || "N/A"}</TableCellCustom>
                                        <TableCellCustom>{booking.city || "N/A"}</TableCellCustom>
                                        <TableCellCustom>{booking.email}</TableCellCustom>
                                        <TableCellCustom>{booking.phoneNumber}</TableCellCustom>
                                        <TableCellCustom>{booking.vehicleMakeAndModel}</TableCellCustom>
                                        <TableCellCustom>{booking.vehicleType}</TableCellCustom>
                                        <TableCellCustom>{booking.serviceName}</TableCellCustom>
                                        <TableCellCustom>{booking.packageName}</TableCellCustom>
                                        <TableCellCustom>
                                            {new Date(booking.appointmentTimestamp).toLocaleString()}
                                        </TableCellCustom>
                                        <TableCellCustom>
                                            {new Date(booking.appointmentEndTimestamp).toLocaleString()}
                                        </TableCellCustom>
                                        <TableCellCustom>{`$${booking.price}`}</TableCellCustom>
                                        <TableCellCustom>{`${booking.duration} mins`}</TableCellCustom>
                                        <TableCellCustom>
                                            {booking.travelDuration ? `${booking.travelDuration} mins` : "N/A"}
                                        </TableCellCustom>
                                        <TableCellCustom>{booking.type}</TableCellCustom>
                                        <TableCellCustom>
                                            {booking.serviceAddons.addons?.join(", ") || "None"}
                                        </TableCellCustom>
                                        <TableCellCustom>
                                            {booking.serviceAddons.detailing?.join(", ") || "None"}
                                        </TableCellCustom>
                                        <TableCellCustom>
                                            {new Date(booking.lockTime.start).toLocaleString()}
                                        </TableCellCustom>
                                        <TableCellCustom>
                                            {new Date(booking.lockTime.end).toLocaleString()}
                                        </TableCellCustom>
                                    </TableRowCustom>
                                ))}
                            </TableBody>
                        </Table>
                    </StyledTable>
                </CardBody>
            </StyledCard>
        </Box>
    );
};

export default BookingsPage;
