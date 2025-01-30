"use client";
import React, { useState } from "react";
import {
  Box,
  Grid,
  InputAdornment,
  Table,
  TableBody,
  TableContainer,
  TableHead,
  TablePagination,
  TextField,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import {
  CardBody,
  CardHeading,
  ModalButton,
  SectionHeading,
  StyledCard,
  TableCellCustom,
  TableHeaderCell,
  TableRowCustom,
} from "../../../../components/mui/AdminPkgs";

const otherVehiclesData = [
  {
    ownerFirstName: "John",
    ownerLastName: "Doe",
    vehicleType: "Car",
    vehicleDetails: { licensePlate: "ABC1234", vehicleModel: "Tesla Model S" },
  },
  {
    ownerFirstName: "Jane",
    ownerLastName: "Smith",
    vehicleType: "Boat",
    vehicleDetails: { licensePlate: "XYZ5678", vehicleModel: "Yamaha 242X" },
  },
  {
    ownerFirstName: "Michael",
    ownerLastName: "Johnson",
    vehicleType: "Bike",
    vehicleDetails: {
      licensePlate: "DEF3456",
      vehicleModel: "Harley Davidson",
    },
  },
  {
    ownerFirstName: "Emily",
    ownerLastName: "Davis",
    vehicleType: "Truck",
    vehicleDetails: { licensePlate: "GHI7890", vehicleModel: "Ford F-150" },
  },
  {
    ownerFirstName: "David",
    ownerLastName: "Clark",
    vehicleType: "Car",
    vehicleDetails: {
      licensePlate: "JKL0123",
      vehicleModel: "Chevrolet Tahoe",
    },
  },
  {
    ownerFirstName: "Sophia",
    ownerLastName: "Wilson",
    vehicleType: "Bike",
    vehicleDetails: { licensePlate: "MNO4567", vehicleModel: "Ducati Monster" },
  },
  {
    ownerFirstName: "Chris",
    ownerLastName: "Martinez",
    vehicleType: "Truck",
    vehicleDetails: { licensePlate: "PQR8901", vehicleModel: "Toyota Tundra" },
  },
  {
    ownerFirstName: "Olivia",
    ownerLastName: "Lopez",
    vehicleType: "Car",
    vehicleDetails: { licensePlate: "STU2345", vehicleModel: "Lexus RX" },
  },
  {
    ownerFirstName: "James",
    ownerLastName: "Brown",
    vehicleType: "Boat",
    vehicleDetails: {
      licensePlate: "VWX6789",
      vehicleModel: "MasterCraft X24",
    },
  },
  {
    ownerFirstName: "Ava",
    ownerLastName: "Hernandez",
    vehicleType: "Bike",
    vehicleDetails: { licensePlate: "YZA1357", vehicleModel: "Kawasaki Ninja" },
  },
  {
    ownerFirstName: "Daniel",
    ownerLastName: "Garcia",
    vehicleType: "Truck",
    vehicleDetails: { licensePlate: "BCD2468", vehicleModel: "RAM 1500" },
  },
  {
    ownerFirstName: "Laura",
    ownerLastName: "Anderson",
    vehicleType: "Car",
    vehicleDetails: { licensePlate: "EFG9134", vehicleModel: "BMW X5" },
  },
  {
    ownerFirstName: "Robert",
    ownerLastName: "Moore",
    vehicleType: "Boat",
    vehicleDetails: { licensePlate: "HIJ5768", vehicleModel: "Bayliner VR5" },
  },
  {
    ownerFirstName: "Jessica",
    ownerLastName: "Taylor",
    vehicleType: "Car",
    vehicleDetails: { licensePlate: "KLM7982", vehicleModel: "Audi A6" },
  },
  {
    ownerFirstName: "Matthew",
    ownerLastName: "Jackson",
    vehicleType: "Truck",
    vehicleDetails: { licensePlate: "NOP2341", vehicleModel: "GMC Sierra" },
  },
  {
    ownerFirstName: "Isabella",
    ownerLastName: "White",
    vehicleType: "Bike",
    vehicleDetails: { licensePlate: "QRS1243", vehicleModel: "Yamaha MT-09" },
  },
  {
    ownerFirstName: "Ethan",
    ownerLastName: "Thompson",
    vehicleType: "Car",
    vehicleDetails: {
      licensePlate: "TUV6574",
      vehicleModel: "Mercedes-Benz E-Class",
    },
  },
  {
    ownerFirstName: "Henry",
    ownerLastName: "Martinez",
    vehicleType: "Boat",
    vehicleDetails: {
      licensePlate: "WXY8362",
      vehicleModel: "Sea Ray SPX 210",
    },
  },
  {
    ownerFirstName: "Sophia",
    ownerLastName: "Brown",
    vehicleType: "Car",
    vehicleDetails: { licensePlate: "ZAB2356", vehicleModel: "Tesla Model 3" },
  },
  {
    ownerFirstName: "Emily",
    ownerLastName: "Robinson",
    vehicleType: "Truck",
    vehicleDetails: { licensePlate: "BCD7623", vehicleModel: "Ford Ranger" },
  },
];

const OtherVehiclesPage = () => {
  const [formData, setFormData] = useState({
    ownerFirstName: "",
    ownerLastName: "",
    vehicleType: "",
    vehicleModel: "",
    licensePlate: "",
  });
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedVehicle, setSelectedVehicle] = useState(null);

  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);

  const handleFormChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSearch = (event) => {
    const query = event.target.value.toUpperCase();
    setSearchQuery(query);
    const foundVehicle = otherVehiclesData.find(
      (vehicle) => vehicle.vehicleDetails.licensePlate === query
    );
    setSelectedVehicle(foundVehicle || null);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  return (
    <Box sx={{ padding: "16px" }}>
      <SectionHeading>Other Vehicles Management</SectionHeading>

      <Grid container spacing={3}>
        {/* <Grid item xs={12} md={5}>
                    <StyledCard>
                        <CardBody>
                            <CardHeading>Add a New Vehicle</CardHeading>
                            <form onSubmit={handleSubmit}>
                                <TextField
                                    label="Owner First Name"
                                    variant="outlined"
                                    name="ownerFirstName"
                                    value={formData.ownerFirstName}
                                    onChange={handleFormChange}
                                    fullWidth
                                    margin="normal"
                                />
                                <TextField
                                    label="Owner Last Name"
                                    variant="outlined"
                                    name="ownerLastName"
                                    value={formData.ownerLastName}
                                    onChange={handleFormChange}
                                    fullWidth
                                    margin="normal"
                                />
                                <TextField
                                    label="Vehicle Type"
                                    variant="outlined"
                                    name="vehicleType"
                                    value={formData.vehicleType}
                                    onChange={handleFormChange}
                                    fullWidth
                                    margin="normal"
                                    placeholder="Car, Boat, Bike, etc."
                                />
                                <TextField
                                    label="Vehicle Model"
                                    variant="outlined"
                                    name="vehicleModel"
                                    value={formData.vehicleModel}
                                    onChange={handleFormChange}
                                    fullWidth
                                    margin="normal"
                                />
                                <TextField
                                    label="License Plate"
                                    variant="outlined"
                                    name="licensePlate"
                                    value={formData.licensePlate}
                                    onChange={handleFormChange}
                                    fullWidth
                                    margin="normal"
                                />
                                <ModalButton type="submit" sx={{ width: '100%', marginTop: '20px' }}>Submit</ModalButton>
                            </form>
                        </CardBody>
                    </StyledCard>
                </Grid> */}

        <Grid item xs={12} md={7}>
          <StyledCard>
            <CardBody>
              <CardHeading>Vehicles List</CardHeading>
              <TextField
                label="Search by License Plate"
                variant="outlined"
                value={searchQuery}
                onChange={handleSearch}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <SearchIcon />
                    </InputAdornment>
                  ),
                }}
                sx={{ width: "100%", marginBottom: "20px" }}
              />

              <TableContainer>
                <Table>
                  <TableHead>
                    <TableRowCustom>
                      <TableHeaderCell>License Plate</TableHeaderCell>
                      <TableHeaderCell>Vehicle Model</TableHeaderCell>
                      <TableHeaderCell>Vehicle Type</TableHeaderCell>
                      <TableHeaderCell>Owner</TableHeaderCell>
                    </TableRowCustom>
                  </TableHead>
                  <TableBody>
                    {otherVehiclesData
                      .slice(
                        page * rowsPerPage,
                        page * rowsPerPage + rowsPerPage
                      )
                      .map((vehicle, index) => (
                        <TableRowCustom key={index} hover>
                          <TableCellCustom>
                            {vehicle.vehicleDetails.licensePlate}
                          </TableCellCustom>
                          <TableCellCustom>
                            {vehicle.vehicleDetails.vehicleModel}
                          </TableCellCustom>
                          <TableCellCustom>
                            {vehicle.vehicleType}
                          </TableCellCustom>
                          <TableCellCustom>{`${vehicle.ownerFirstName} ${vehicle.ownerLastName}`}</TableCellCustom>
                        </TableRowCustom>
                      ))}
                  </TableBody>
                </Table>
              </TableContainer>
              <TablePagination
                rowsPerPageOptions={[5, 10, 25]}
                component="div"
                count={otherVehiclesData.length}
                rowsPerPage={rowsPerPage}
                page={page}
                onPageChange={handleChangePage}
                onRowsPerPageChange={handleChangeRowsPerPage}
              />
            </CardBody>
          </StyledCard>
        </Grid>
      </Grid>
    </Box>
  );
};

export default OtherVehiclesPage;
