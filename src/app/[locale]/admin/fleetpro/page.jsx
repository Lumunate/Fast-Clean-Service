"use client";
import React, { useEffect, useState } from "react";
import { Box, IconButton, Modal, Table, TableBody, TableHead, Typography, MenuItem, FormControl, Select } from "@mui/material";
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
} from "../../../../components/mui/AdminPkgs"; // Adjust according to file path
import { CustomFormTextField } from "../../../../components/mui/FormPkgs";

import DeleteIcon from "@mui/icons-material/Delete";
import DoneIcon from "@mui/icons-material/Done";
import useSnackbar from "../../../../hooks/useSnackbar";

export default function FleetProCareAppointments() {
  const [data, setData] = useState([]);

  const getData = async () => {
    try {
      const response = await fetch(`/api/fleetcare-pro`);
      const data = await response.json();
      setData(data.data);
    } catch (error) {
      console.error(error);
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
  const handleClose = () => setOpen(false);

  const handleDelete = (id) => {
    setData(data.filter((_, i) => i !== id));

    fetch(`/api/fleetcare-pro?id=${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((_data) => {
        console.log(_data);
        openSnackbar("Deleted form successfully");
        setData(data.filter((_, i) => i !== id));
      })
      .catch((err) => {
        console.error(err);
        openSnackbar("Error deleting form");
      });
  };

  const handleComplete = (id) => {
    setData(data.filter((_, i) => i !== id));

    fetch(`/api/fleetcare-pro?id=${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((_data) => {
        console.log(_data);
        openSnackbar("Completed form successfully");
        setData(data.filter((_, i) => i !== id));
      })
      .catch((err) => {
        console.error(err);
        openSnackbar("Error completing form");
      });
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

  const filteredData = data;

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
                <TableHeaderCell></TableHeaderCell>
              </TableRowCustom>
            </TableHead>
            <TableBody>
              {filteredData.map((row, index) => (
                <TableRowCustom key={index}>
                  <TableCellCustom>{row.businessName}</TableCellCustom>
                  <TableCellCustom>{row.address}</TableCellCustom>
                  <TableCellCustom>{row.name}</TableCellCustom>
                  <TableCellCustom>{row.email}</TableCellCustom>
                  <TableCellCustom>{row.vehicleType}</TableCellCustom>
                  <TableCellCustom>{row.fleetSize}</TableCellCustom>
                  <TableCellCustom>
                    {/* <IconButton onClick={() => {}}>
                      <EditIcon />
                    </IconButton> */}
                    <IconButton
                      onClick={() => {
                        handleDelete(row._id);
                      }}
                    >
                      <DeleteIcon />
                    </IconButton>
                    {/* <IconButton onClick={() => {}}>
                      <MoreTimeIcon />
                    </IconButton> */}
                    <IconButton
                      onClick={() => {
                        handleComplete(row._id);
                      }}
                    >
                      <DoneIcon />
                    </IconButton>
                  </TableCellCustom>
                </TableRowCustom>
              ))}
            </TableBody>
          </Table>
        </StyledTable>
      </StyledCard>

      <Modal open={open} onClose={handleClose} aria-labelledby="add-service-modal" aria-describedby="form-to-add-service">
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "100vh",
          }}
        >
          <ModalCard
            sx={{
              padding: "20px",
              position: "relative",
              maxHeight: "80vh",
              overflow: "auto",
            }}
          >
            <IconButton onClick={handleClose} sx={{ position: "absolute", top: "10px", right: "10px" }}>
              <CloseIcon />
            </IconButton>
            <Typography variant="h6" component="h2" sx={{ fontSize: "1.4rem", marginBottom: "20px" }}>
              Add New Service
            </Typography>
            <StyledCard sx={{ backgroundColor: "#f0f0f0", backdropFilter: "blur(10px)" }}>
              <form onSubmit={handleSubmit}>
                <CustomFormTextField
                  label="Business"
                  name="business"
                  value={formData.business}
                  onChange={handleFormChange}
                  fullWidth
                  margin="normal"
                  sx={{ fontSize: "0.9rem !important" }}
                />
                <CustomFormTextField
                  label="Address"
                  name="address"
                  value={formData.address}
                  onChange={handleFormChange}
                  fullWidth
                  margin="normal"
                  sx={{ fontSize: "0.9rem !important" }}
                />
                <CustomFormTextField
                  label="Name"
                  name="name"
                  value={formData.name}
                  onChange={handleFormChange}
                  fullWidth
                  margin="normal"
                  sx={{ fontSize: "0.9rem !important" }}
                />
                <CustomFormTextField
                  label="Email"
                  name="email"
                  value={formData.email}
                  onChange={handleFormChange}
                  fullWidth
                  margin="normal"
                  sx={{ fontSize: "0.9rem !important" }}
                />
                <CustomFormTextField
                  label="Vehicle Type"
                  name="vehicleType"
                  value={formData.vehicleType}
                  onChange={handleFormChange}
                  fullWidth
                  margin="normal"
                  sx={{ fontSize: "0.9rem !important" }}
                />
                <CustomFormTextField
                  label="Fleet Size"
                  name="numVehicles"
                  value={formData.numVehicles}
                  onChange={handleFormChange}
                  fullWidth
                  margin="normal"
                  sx={{ fontSize: "0.9rem !important" }}
                />
                <ModalButton type="submit" sx={{ fontSize: "1.4rem", width: "max-content", margin: "20px auto" }}>
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
