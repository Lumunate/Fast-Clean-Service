"use client";
import React, { useEffect, useState } from "react";
import { Box, IconButton, Modal, Table, TableBody, TableHead, Typography } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import {
  ButtonLearnMore,
  ModalButton,
  ModalCard,
  NavbarSearch,
  SearchInput,
  SectionHeading,
  StyledCard,
  StyledTable,
  TableCellCustom,
  TableHeaderCell,
  TableRowCustom,
} from "../../../../components/mui/AdminPkgs";
import { CustomFormTextField } from "../../../../components/mui/FormPkgs";
import DeleteIcon from "@mui/icons-material/Delete";
import DoneIcon from "@mui/icons-material/Done";
import useSnackbar from "../../../../hooks/useSnackbar";

export default function FleetProCareAppointments() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  const getData = async () => {
    setLoading(true);
    try {
      const response = await fetch(`/api/fleetcare-pro`);
      const data = await response.json();
      setData(data.data.reverse());
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  const { openSnackbar } = useSnackbar();

  const [open, setOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [formData, setFormData] = useState({
    business: "",
    address: "",
    name: "",
    email: "",
    vehicleType: "",
    numVehicles: "",
  });

  const handleOpen = () => setOpen(true);
  const handleClose = () => {
    setOpen(false);
    setFormData({
      business: "",
      address: "",
      name: "",
      email: "",
      vehicleType: "",
      numVehicles: "",
    });
  };

  const handleDelete = async (id) => {
    try {
      await fetch(`/api/fleetcare-pro?id=${id}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      });
      openSnackbar("Deleted form successfully");
      await getData();
    } catch (err) {
      console.error(err);
      openSnackbar("Error deleting form");
    }
  };

  const handleComplete = async (id) => {
    try {
      await fetch(`/api/fleetcare-pro?id=${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
      });
      openSnackbar("Marked as completed successfully");
      await getData();
    } catch (err) {
      console.error(err);
      openSnackbar("Error completing form");
    }
  };

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleFormChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newData = {
      business: formData.business,
      address: formData.address,
      name: formData.name,
      email: formData.email,
      vehicleType: formData.vehicleType,
      fleetSize: formData.numVehicles,
    };
    setData([...data, newData]);
    handleClose();
  };

  const filteredData = data.filter(item =>
      item.businessName?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.address?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.name?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.email?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.vehicleType?.toLowerCase().includes(searchTerm.toLowerCase())
  );
  
  return (
      <Box sx={{ padding: "16px" }}>
        <SectionHeading sx={{ marginBottom: "2rem" }}>FleetCare Pro Appointments</SectionHeading>
        <StyledCard sx={{ marginBottom: "2rem" }}>
          <Box sx={{ display: "flex", justifyContent: "flex-start", alignItems: "center", marginBottom: "1.5rem" }}>
            <NavbarSearch sx={{ width: "250px" }}>
              <SearchInput placeholder="Search" value={searchTerm} onChange={handleSearch} />
            </NavbarSearch>
            <ButtonLearnMore onClick={handleOpen} sx={{ marginLeft: "1rem" }}>
              Add Service
            </ButtonLearnMore>
          </Box>

          <StyledTable component="div">
            <Table>
              <TableHead>
                <TableRowCustom>
                  <TableHeaderCell>Business</TableHeaderCell>
                  <TableHeaderCell>Address</TableHeaderCell>
                  <TableHeaderCell>Name</TableHeaderCell>
                  <TableHeaderCell>Email</TableHeaderCell>
                  <TableHeaderCell>Vehicle Type</TableHeaderCell>
                  <TableHeaderCell>Fleet Size</TableHeaderCell>
                  <TableHeaderCell>Status</TableHeaderCell>
                  <TableHeaderCell>Actions</TableHeaderCell>
                </TableRowCustom>
              </TableHead>
              <TableBody>
                {loading ? (
                    <TableRowCustom>
                      <TableCellCustom colSpan={8} sx={{ textAlign: 'center' }}>Loading...</TableCellCustom>
                    </TableRowCustom>
                ) : filteredData.length === 0 ? (
                    <TableRowCustom>
                      <TableCellCustom colSpan={8} sx={{ textAlign: 'center' }}>No appointments found</TableCellCustom>
                    </TableRowCustom>
                ) : (
                    filteredData.map((row) => (
                        <TableRowCustom key={row._id}>
                          <TableCellCustom>{row.businessName}</TableCellCustom>
                          <TableCellCustom>{row.address}</TableCellCustom>
                          <TableCellCustom>{row.name}</TableCellCustom>
                          <TableCellCustom>{row.email}</TableCellCustom>
                          <TableCellCustom>{row.vehicleType}</TableCellCustom>
                          <TableCellCustom>{row.fleetSize}</TableCellCustom>
                          <TableCellCustom sx={{
                            color: row.isComplete === true ? 'success.main' : 'warning.main',
                            fontWeight: 'bold'
                          }}>
                            {row.isComplete === true ? 'Completed' : 'Pending'}{console.log(3333, row.isComplete)}
                          </TableCellCustom>
                          <TableCellCustom>
                            <IconButton
                                onClick={() => handleDelete(row._id)}
                                disabled={row.status === 'completed'}
                                color="error"
                            >
                              <DeleteIcon />
                            </IconButton>
                            <IconButton
                                onClick={() => handleComplete(row._id)}
                                disabled={row.status === 'completed'}
                                color="success"
                            >
                              <DoneIcon />
                            </IconButton>
                          </TableCellCustom>
                        </TableRowCustom>
                    ))
                )}
              </TableBody>
            </Table>
          </StyledTable>
        </StyledCard>

        <Modal open={open} onClose={handleClose}>
          <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100vh" }}>
            <ModalCard sx={{ padding: "20px", position: "relative", maxHeight: "80vh", overflow: "auto" }}>
              <IconButton onClick={handleClose} sx={{ position: "absolute", top: "10px", right: "10px" }}>
                <CloseIcon />
              </IconButton>
              <Typography variant="h6" component="h2" sx={{ fontSize: "1.4rem", marginBottom: "20px" }}>
                Add New Service
              </Typography>
              <StyledCard sx={{ backgroundColor: "#f0f0f0", backdropFilter: "blur(10px)" }}>
                <form onSubmit={handleSubmit}>
                  <CustomFormTextField
                      label="Business Name"
                      name="business"
                      value={formData.business}
                      onChange={handleFormChange}
                      fullWidth
                      margin="normal"
                      required
                  />
                  <CustomFormTextField
                      label="Address"
                      name="address"
                      value={formData.address}
                      onChange={handleFormChange}
                      fullWidth
                      margin="normal"
                      required
                  />
                  <CustomFormTextField
                      label="Contact Name"
                      name="name"
                      value={formData.name}
                      onChange={handleFormChange}
                      fullWidth
                      margin="normal"
                      required
                  />
                  <CustomFormTextField
                      label="Email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleFormChange}
                      fullWidth
                      margin="normal"
                      required
                  />
                  <CustomFormTextField
                      label="Vehicle Type"
                      name="vehicleType"
                      value={formData.vehicleType}
                      onChange={handleFormChange}
                      fullWidth
                      margin="normal"
                      required
                  />
                  <CustomFormTextField
                      label="Fleet Size"
                      name="numVehicles"
                      type="number"
                      value={formData.numVehicles}
                      onChange={handleFormChange}
                      fullWidth
                      margin="normal"
                      required
                  />
                  <ModalButton type="submit" sx={{ margin: "20px auto" }}>
                    Submit
                  </ModalButton>
                </form>
              </StyledCard>
            </ModalCard>
          </Box>
        </Modal>
      </Box>
  );
}