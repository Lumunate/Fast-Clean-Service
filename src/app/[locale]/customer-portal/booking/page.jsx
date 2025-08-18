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
} from "../../../../components/mui/AdminPkgs";
import {useSession} from "next-auth/react";
import {useLocale, useTranslations} from "next-intl";

const BookingsPage = () => {
    const { data: session } = useSession();
    const [userBookings, setUserBookings] = useState([]);
    const [searchQuery, setSearchQuery] = useState("");
    const userEmail = session?.user?.email;
    const t = useTranslations('customer_dashboard.sections.1');
    const locale = useLocale()

    const tableHeaders = [
        t("table_headers.0"),
        t("table_headers.1"),
        t("table_headers.2"),
        t("table_headers.3"),
        t("table_headers.4"),
        t("table_headers.5"),
        t("table_headers.6"),
        t("table_headers.7"),
        t("table_headers.8"),
        t("table_headers.9"),
        t("table_headers.10"),
        t("table_headers.11"),
        t("table_headers.12"),
        t("table_headers.13"),
        t("table_headers.14"),
        t("table_headers.15"),
        t("table_headers.16"),
        t("table_headers.17"),
        t("table_headers.18"),
        t("table_headers.19"),
        t("table_headers.20"),
        t("table_headers.21"),
        t("table_headers.22")
    ];

    function toTitleCase(str) {
        return str
            .split(' ')
            .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
            .join(' ');
    }

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

  const formattedDate = new Date(booking.appointmentTimestamp).toLocaleString("en-US", {
    month: "numeric",
    day: "numeric",
    year: "numeric",
    hour: "numeric",
    minute: "numeric",
    second: "numeric",
    hour12: true,
  }).toLowerCase();

  return (
    booking.vehicleMakeAndModel.toLowerCase().includes(searchText) ||
    booking.serviceName.toLowerCase().includes(searchText) ||
    booking.city?.toLowerCase().includes(searchText) ||
    booking.packageName?.toLowerCase().includes(searchText) ||
    formattedDate.includes(searchText)
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
                    {t("title")}
                </SectionHeading>

                <TextField
                    variant="outlined"
                    placeholder={t("search_placeholder")}
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
                                                "@media (max-width: 600px)": { fontSize: "1rem" },
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
                                        <TableCellCustom>{booking.licensePlate || "N/A"}</TableCellCustom>
                                        <TableCellCustom>{booking.companyName || "N/A"}</TableCellCustom>
                                        <TableCellCustom>{booking.street || "N/A"}</TableCellCustom>
                                        <TableCellCustom>{booking.zipCode || "N/A"}</TableCellCustom>
                                        <TableCellCustom>{booking.city || "N/A"}</TableCellCustom>
                                        <TableCellCustom>{booking.email}</TableCellCustom>
                                        <TableCellCustom>{booking.phoneNumber}</TableCellCustom>
                                        <TableCellCustom>{booking.vehicleMakeAndModel}</TableCellCustom>
                                        <TableCellCustom>{booking.vehicleType}</TableCellCustom>
                                        <TableCellCustom>{booking.serviceName}</TableCellCustom>
                                        <TableCellCustom>
                                            {toTitleCase(booking.packageName)}
                                        </TableCellCustom>
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
                                            {booking.serviceAddons?.addons?.length > 0
                                                ? booking.serviceAddons.addons.map((addon, idx) => (
                                                    <div key={idx}>{addon?.name?.[locale]}</div>
                                                  ))
                                                : "N/A"}
                                        </TableCellCustom>
                                        <TableCellCustom>
                                            {booking.serviceAddons?.detailing && booking.serviceAddons?.detailing?.length > 0
                                            ? booking.serviceAddons.detailing.map((addon, idx) => (
                                                <div key={idx}>{addon?.name?.[locale]}</div>
                                              ))
                                            : "N/A"}
                                        </TableCellCustom>
                                        <TableCellCustom>{booking.payment.status}</TableCellCustom>
                                        <TableCellCustom>{booking.payment.provider || "N/A"}</TableCellCustom>
                                        <TableCellCustom>{booking.message || "N/A"}</TableCellCustom>
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
