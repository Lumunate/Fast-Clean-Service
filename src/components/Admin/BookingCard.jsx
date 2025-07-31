"use client";
import React, { useState } from "react";
import {
  CardBody,
  CardHeading,
  CardSubheading,
  StyledCard,
  StyledTable,
  TableCellCustom,
  TableHeaderCell,
  TableRowCustom,
} from "../mui/AdminPkgs";
import {
  Paper,
  Table,
  TableBody,
  TableHead,
  TablePagination,
} from "@mui/material";
import { useTranslations } from "next-intl";

// const bookings = [
//     {
//         firstName: "John",
//         surname: "Doe",
//         companyName: "JD Enterprises",
//         street: "123 Elm St",
//         zipCode: "10001",
//         city: "New York",
//         email: "johndoe@example.com",
//         phoneNumber: "123-456-7890",
//         vehicleMakeAndModel: "Tesla Model S",
//         vehicleType: "Sedan",
//         location: "New York",
//         serviceName: "Full Exterior Wash",
//         package: "Premium",
//         serviceAddons: ["Wax", "Tire Shine"],
//         appointmentTimestamp: new Date(),
//         price: "$100",
//         paymentStatus: "Paid",
//         vehicleDetails: { licensePlate: "ABC1234" },
//     },
//     {
//         firstName: "Jane",
//         surname: "Smith",
//         companyName: "Smith Co",
//         street: "456 Oak Ave",
//         zipCode: "90210",
//         city: "Beverly Hills",
//         email: "janesmith@example.com",
//         phoneNumber: "987-654-3210",
//         vehicleMakeAndModel: "BMW X5",
//         vehicleType: "SUV",
//         location: "Los Angeles",
//         serviceName: "Interior Detailing",
//         package: "Standard",
//         serviceAddons: ["Tire Shine", "Engine Clean"],
//         appointmentTimestamp: new Date(),
//         price: "$80",
//         paymentStatus: "Pending",
//         vehicleDetails: { licensePlate: "XYZ5678" },
//     },
//     {
//         firstName: "Michael",
//         surname: "Brown",
//         companyName: "CleanRide",
//         street: "789 Maple St",
//         zipCode: "30303",
//         city: "Atlanta",
//         email: "michael.brown@example.com",
//         phoneNumber: "404-555-1234",
//         vehicleMakeAndModel: "Ford Mustang",
//         vehicleType: "Coupe",
//         location: "Atlanta",
//         serviceName: "Polish & Wax",
//         package: "Deluxe",
//         serviceAddons: ["Polish", "Ceramic Coating"],
//         appointmentTimestamp: new Date(),
//         price: "$120",
//         paymentStatus: "Paid",
//         vehicleDetails: { licensePlate: "MNO3456" },
//     },
//     {
//         firstName: "Emily",
//         surname: "Johnson",
//         companyName: "WashMasters",
//         street: "135 Lake Dr",
//         zipCode: "60606",
//         city: "Chicago",
//         email: "emily.johnson@example.com",
//         phoneNumber: "312-555-6789",
//         vehicleMakeAndModel: "Mercedes-Benz C300",
//         vehicleType: "Sedan",
//         location: "Chicago",
//         serviceName: "Full Interior Cleaning",
//         package: "Premium",
//         serviceAddons: ["Leather Conditioning", "Carpet Cleaning"],
//         appointmentTimestamp: new Date(),
//         price: "$150",
//         paymentStatus: "Paid",
//         vehicleDetails: { licensePlate: "ABC7890" },
//     },
//     {
//         firstName: "Linda",
//         surname: "Taylor",
//         companyName: "SparkleAuto",
//         street: "789 Willow Ave",
//         zipCode: "80202",
//         city: "Denver",
//         email: "linda.taylor@example.com",
//         phoneNumber: "303-555-5678",
//         vehicleMakeAndModel: "Honda Civic",
//         vehicleType: "Sedan",
//         location: "Denver",
//         serviceName: "Full Wash",
//         package: "Basic",
//         serviceAddons: ["Wax", "Tire Shine"],
//         appointmentTimestamp: new Date(),
//         price: "$70",
//         paymentStatus: "Paid",
//         vehicleDetails: { licensePlate: "FGH1234" },
//     },
//     {
//         firstName: "Chris",
//         surname: "White",
//         companyName: "DetailKing",
//         street: "369 Highland Dr",
//         zipCode: "02118",
//         city: "Boston",
//         email: "chris.white@example.com",
//         phoneNumber: "617-555-2345",
//         vehicleMakeAndModel: "Jeep Wrangler",
//         vehicleType: "SUV",
//         location: "Boston",
//         serviceName: "Exterior Detailing",
//         package: "Standard",
//         serviceAddons: ["Polish", "Tire Shine"],
//         appointmentTimestamp: new Date(),
//         price: "$90",
//         paymentStatus: "Pending",
//         vehicleDetails: { licensePlate: "KLM5678" },
//     },
//     {
//         firstName: "Rachel",
//         surname: "Walker",
//         companyName: "AutoLux",
//         street: "654 Palm St",
//         zipCode: "75201",
//         city: "Dallas",
//         email: "rachel.walker@example.com",
//         phoneNumber: "214-555-1234",
//         vehicleMakeAndModel: "Audi Q7",
//         vehicleType: "SUV",
//         location: "Dallas",
//         serviceName: "Interior Detailing",
//         package: "Premium",
//         serviceAddons: ["Leather Cleaning", "Glass Cleaning"],
//         appointmentTimestamp: new Date(),
//         price: "$110",
//         paymentStatus: "Paid",
//         vehicleDetails: { licensePlate: "NOP3456" },
//     },
//     {
//         firstName: "Sophia",
//         surname: "Martinez",
//         companyName: "ShinyCarts",
//         street: "987 Silver Ave",
//         zipCode: "85001",
//         city: "Phoenix",
//         email: "sophia.martinez@example.com",
//         phoneNumber: "602-555-7890",
//         vehicleMakeAndModel: "Tesla Model 3",
//         vehicleType: "Sedan",
//         location: "Phoenix",
//         serviceName: "Full Detailing",
//         package: "Deluxe",
//         serviceAddons: ["Rim Polishing", "Engine Detailing"],
//         appointmentTimestamp: new Date(),
//         price: "$150",
//         paymentStatus: "Pending",
//         vehicleDetails: { licensePlate: "PQR6789" },
//     },
//     {
//         firstName: "Daniel",
//         surname: "Evans",
//         companyName: "RideShine",
//         street: "456 Cedar St",
//         zipCode: "75202",
//         city: "Dallas",
//         email: "daniel.evans@example.com",
//         phoneNumber: "214-555-2345",
//         vehicleMakeAndModel: "Ford F-150",
//         vehicleType: "Truck",
//         location: "Dallas",
//         serviceName: "Exterior Wash",
//         package: "Basic",
//         serviceAddons: ["Tire Shine"],
//         appointmentTimestamp: new Date(),
//         price: "$60",
//         paymentStatus: "Paid",
//         vehicleDetails: { licensePlate: "DEF5678" },
//     },
//     {
//         firstName: "Oliver",
//         surname: "Taylor",
//         companyName: "LuxAuto",
//         street: "789 Birch St",
//         zipCode: "20001",
//         city: "Washington",
//         email: "oliver.taylor@example.com",
//         phoneNumber: "202-555-7890",
//         vehicleMakeAndModel: "BMW 3 Series",
//         vehicleType: "Sedan",
//         location: "Washington D.C.",
//         serviceName: "Full Wash",
//         package: "Standard",
//         serviceAddons: ["Wax"],
//         appointmentTimestamp: new Date(),
//         price: "$80",
//         paymentStatus: "Pending",
//         vehicleDetails: { licensePlate: "GHI6789" },
//     },
//     {
//         firstName: "Sophia",
//         surname: "Brown",
//         companyName: "ShinyCar Pro",
//         street: "456 Oak Ridge",
//         zipCode: "60606",
//         city: "Chicago",
//         email: "sophia.brown@example.com",
//         phoneNumber: "312-555-9870",
//         vehicleMakeAndModel: "Honda CR-V",
//         vehicleType: "SUV",
//         location: "Chicago",
//         serviceName: "Interior Detailing",
//         package: "Deluxe",
//         serviceAddons: ["Seat Cleaning", "Carpet Shampoo"],
//         appointmentTimestamp: new Date(),
//         price: "$110",
//         paymentStatus: "Paid",
//         vehicleDetails: { licensePlate: "JKL2345" },
//     },
//     {
//         firstName: "Lucas",
//         surname: "White",
//         companyName: "ShinyRide",
//         street: "987 Cypress Ave",
//         zipCode: "80202",
//         city: "Denver",
//         email: "lucas.white@example.com",
//         phoneNumber: "303-555-7890",
//         vehicleMakeAndModel: "Tesla Model X",
//         vehicleType: "SUV",
//         location: "Denver",
//         serviceName: "Polish & Wax",
//         package: "Deluxe",
//         serviceAddons: ["Glass Protection", "Rim Cleaning"],
//         appointmentTimestamp: new Date(),
//         price: "$130",
//         paymentStatus: "Pending",
//         vehicleDetails: { licensePlate: "LMN5678" },
//     },
//     {
//         firstName: "Amelia",
//         surname: "Harris",
//         companyName: "LuxRide",
//         street: "135 Maple St",
//         zipCode: "94103",
//         city: "San Francisco",
//         email: "amelia.harris@example.com",
//         phoneNumber: "415-555-2345",
//         vehicleMakeAndModel: "Porsche Cayenne",
//         vehicleType: "SUV",
//         location: "San Francisco",
//         serviceName: "Ceramic Coating",
//         package: "Premium",
//         serviceAddons: ["Leather Conditioning", "Engine Cleaning"],
//         appointmentTimestamp: new Date(),
//         price: "$200",
//         paymentStatus: "Paid",
//         vehicleDetails: { licensePlate: "OPQ7890" },
//     },
//     {
//         firstName: "Jackson",
//         surname: "Green",
//         companyName: "RideLuxury",
//         street: "456 Oak St",
//         zipCode: "85001",
//         city: "Phoenix",
//         email: "jackson.green@example.com",
//         phoneNumber: "602-555-1234",
//         vehicleMakeAndModel: "Mercedes-Benz GLE",
//         vehicleType: "SUV",
//         location: "Phoenix",
//         serviceName: "Full Detailing",
//         package: "Deluxe",
//         serviceAddons: ["Glass Protection", "Tire Shine"],
//         appointmentTimestamp: new Date(),
//         price: "$180",
//         paymentStatus: "Pending",
//         vehicleDetails: { licensePlate: "QRS7890" },
//     },
// ];


const BookingsCard = ({ bookings }) => {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const bookingLength = Array.isArray(bookings) ? bookings.length : 0;
  const t = useTranslations("admin_dashboard.dashboard")
  
  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };
  
  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const tableHeaders = [
  t("6"),
  t("7"),
  t("8"),
  t("9"),
  t("10"),
  t("11"),
  t("12"),
  t("13"),
  t("14"),
  t("15"),
  t("16"),
  t("17"),
  ];

  return (
    <StyledCard>
      <CardBody>
        <CardHeading>{t("4")}</CardHeading>
        <CardSubheading>
          {t("5")}
        </CardSubheading>

        <StyledTable component={Paper}>
          <Table aria-label="bookings table">
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
              {bookings
                ?.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((booking, index) => (
                  <TableRowCustom key={index}>
                    <TableCellCustom
                      sx={{ fontSize: "1.1rem", color: "black" }}
                    >{`${booking.firstName} ${booking.surname}`}</TableCellCustom>
                    <TableCellCustom
                      sx={{ fontSize: "1.1rem", color: "black" }}
                    >
                      {booking.vehicleMakeAndModel}
                    </TableCellCustom>
                    <TableCellCustom
                      sx={{ fontSize: "1.1rem", color: "black" }}
                    >
                      {booking.vehicleDetails?.kenteken || "..."}
                    </TableCellCustom>
                    <TableCellCustom
                      sx={{ fontSize: "1.1rem", color: "black" }}
                    >
                      {booking.city || "..."}
                    </TableCellCustom>
                    <TableCellCustom
                      sx={{ fontSize: "1.1rem", color: "black" }}
                    >
                      {booking.serviceName}
                    </TableCellCustom>
                    <TableCellCustom
                      sx={{ fontSize: "1.1rem", color: "black" }}
                    >
                      {booking.packageName}
                    </TableCellCustom>
                    <TableCellCustom
                      sx={{ fontSize: "1.1rem", color: "black" }}
                    >
                      {booking.serviceAddons?.addons?.join(", ") || "..."}
                    </TableCellCustom>
                    <TableCellCustom
                      sx={{ fontSize: "1.1rem", color: "black" }}
                    >
                      {booking.serviceAddons?.detailing?.join(", ") || "..."}
                    </TableCellCustom>
                    <TableCellCustom
                      sx={{ fontSize: "1.1rem", color: "black" }}
                    >
                      {booking.appointmentTimestamp.toLocaleString()}
                    </TableCellCustom>
                    <TableCellCustom
                      sx={{ fontSize: "1.1rem", color: "black" }}
                    >
                      {booking.price}
                    </TableCellCustom>
                    <TableCellCustom
                      sx={{ fontSize: "1.1rem", color: "black" }}
                    >
                      {booking.payment.status}
                    </TableCellCustom>
                    <TableCellCustom
                      sx={{ fontSize: "1.1rem", color: "black" }}
                    >
                      {booking.bookingStatus}
                    </TableCellCustom>
                  </TableRowCustom>
                ))}
            </TableBody>
          </Table>
        </StyledTable>

        <TablePagination
          component="div"
          count={bookingLength}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
          rowsPerPageOptions={[5, 10, 25]}
        />
      </CardBody>
    </StyledCard>
  );
};

export default BookingsCard;
