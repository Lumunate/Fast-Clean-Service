"use client";
import React, { useEffect, useState } from "react";
import { Box, Button, FormControl, Grid, IconButton, InputLabel, MenuItem, Modal, Select, Table, TableBody, TableHead, Typography } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import {
  ButtonLearnMore,
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
import { useLocale, useTranslations } from "next-intl";
import { useTheme } from "../../../../contexts/themeContext";
import axios from "axios";
import { CSVLink } from "react-csv";

const submitFleetCareProForm = async (formData) => {
  try {
    const response = await axios.post("/api/fleetcare-pro", formData, {
      headers: {
        "Content-Type": "application/json",
      },
    });
    console.log(response.data.message);
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error) && error.response) {
      console.error("Error submitting form:", error.response.data.error);
      throw new Error(error.response.data.error);
    } else {
      console.error("Error submitting form:", error);
      throw new Error("An unexpected error occurred");
    }
  }
};


export default function FleetProCareAppointments() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  const t = useTranslations("admin_dashboard.fleet_pro")
  const t2 = useTranslations('fleetcare.quote_form');
  const t3 = useTranslations("admin_dashboard.snackbar_message.fleet_pro")
  const t4 = useTranslations("admin_dashboard")
  const locale = useLocale();


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
  const { theme } = useTheme();

  const [open, setOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [formData, setFormData] = useState({
    businessName: "",
    address: "",
    name: "",
    email: "",
    vehicleType: "",
    fleetSize: "",
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

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
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
      openSnackbar(t3("0"));
      await getData();
    } catch (err) {
      console.error(err);
      openSnackbar(t3("1"));
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
      openSnackbar(t3("2"));
      await getData();
    } catch (err) {
      console.error(err);
      openSnackbar(t3("3"));
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

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await submitFleetCareProForm(formData);
      openSnackbar(t3("4"));
      setFormData({
        businessName: "",
        address: "",
        name: "",
        email: "",
        vehicleType: "",
        fleetSize: "",
      });
    } catch (error) {
      openSnackbar(
          `${t3("5")} ${error instanceof Error ? error.message : t3("6")}`
      );
    }

    handleClose();
  };

 const filteredData = data.filter((item) => {
  const query = searchTerm.toLowerCase();

  // Format the createdAt date similar to what you display
  const formattedDate = item.createdAt
    ? new Date(item.createdAt).toLocaleString("en-GB", {
        year: "numeric",
        month: "short",
        day: "2-digit",
        hour: "2-digit",
        minute: "2-digit",
      }).toLowerCase()
    : "";

  return (
    item.businessName?.toLowerCase().includes(query) ||
    formattedDate.includes(query) ||
    item.address?.toLowerCase().includes(query) ||
    item.name?.toLowerCase().includes(query) ||
    item.email?.toLowerCase().includes(query) ||
    item.vehicleType?.toLowerCase().includes(query)
  );
});

const csvHeaders = [
  { label: "Business Name", key: "businessName" },
  { label: "Created At", key: "createdAt" },
  { label: "Address", key: "address" },
  { label: "Contact Person", key: "name" },
  { label: "Email", key: "email" },
  { label: "Vehicle Type", key: "vehicleType" },
  { label: "Fleet Size", key: "fleetSize" },
  { label: "Status", key: "status" },
];

  return (
      <Box sx={{ padding: "16px" }}>
        <SectionHeading sx={{ marginBottom: "2rem" }}>{t("0")}</SectionHeading>
        <StyledCard sx={{ marginBottom: "2rem" }}>
          <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "1.5rem" }}>
            <Box sx={{ display : "flex"}}>

            <NavbarSearch sx={{ width: "250px" }}>
              <SearchInput placeholder="Search" value={searchTerm} onChange={handleSearch} />
            </NavbarSearch>
            <ButtonLearnMore onClick={handleOpen} sx={{ marginLeft: "1rem" }}>
              {t("1")}
            </ButtonLearnMore>
            </Box>
            <Box>
               <ButtonLearnMore>
              <CSVLink
  data={data.map((row) => ({
    businessName: row.businessName,
    createdAt: row.createdAt
      ? new Date(row.createdAt).toLocaleString("en-GB", {
          year: "numeric",
          month: "short",
          day: "2-digit",
          hour: "2-digit",
          minute: "2-digit",
        })
      : "",
    address: row.address,
    name: row.name,
    email: row.email,
    vehicleType: row.vehicleType,
    fleetSize: row.fleetSize ? `'${row.fleetSize}'` : "N/A",
    status: row.isComplete
      ? locale === "en"
        ? "Completed"
        : "Voltooid"
      : locale === "en"
      ? "Pending"
      : "In afwachting",
  }))}
  headers={csvHeaders}
  filename="fleetcare-pro-appointments.csv"
  className="btn btn-primary"
  style={{
    marginLeft: "1rem",
    padding: "8px 16px",
    borderRadius: "6px",
    textDecoration: "none",
    fontWeight: "bold",
  }}
>
 {t4("cvsButton")}
</CSVLink>
</ButtonLearnMore>
            </Box>
          </Box>

          <StyledTable component="div">
            <Table>
              <TableHead>
                <TableRowCustom>
                  <TableHeaderCell>{t("2")}</TableHeaderCell>
                  <TableHeaderCell>{t("16")}</TableHeaderCell>
                  <TableHeaderCell>{t("3")}</TableHeaderCell>
                  <TableHeaderCell>{t("4")}</TableHeaderCell>
                  <TableHeaderCell>{t("5")}</TableHeaderCell>
                  <TableHeaderCell>{t("6")}</TableHeaderCell>
                  <TableHeaderCell>{t("7")}</TableHeaderCell>
                  <TableHeaderCell>{t("8")}</TableHeaderCell>
                  <TableHeaderCell>{t("9")}</TableHeaderCell> 
                </TableRowCustom>
              </TableHead>
              <TableBody>
                {loading ? (
                    <TableRowCustom>
                      <TableCellCustom colSpan={8} sx={{ textAlign: 'center' }}>{t("10")}</TableCellCustom>
                    </TableRowCustom>
                ) : filteredData.length === 0 ? (
                    <TableRowCustom>
                      <TableCellCustom colSpan={8} sx={{ textAlign: 'center' }}>{t("11")}</TableCellCustom>
                    </TableRowCustom>
                ) : (
                    filteredData.map((row) => (
                        <TableRowCustom key={row._id}>
                          <TableCellCustom>{row.businessName}</TableCellCustom>
                          <TableCellCustom>{new Date(row.createdAt).toLocaleString("en-GB", {
                                        year: "numeric",
                                        month: "short",
                                        day: "2-digit",
                                        hour: "2-digit",
                                        minute: "2-digit",
                                    })}</TableCellCustom>
                          <TableCellCustom>{row.address}</TableCellCustom>
                          <TableCellCustom>{row.name}</TableCellCustom>
                          <TableCellCustom>{row.email}</TableCellCustom>
                          <TableCellCustom>{row.vehicleType}</TableCellCustom>
                          <TableCellCustom>{row.fleetSize}</TableCellCustom>
                          <TableCellCustom sx={{
                            color: row.isComplete === true ? 'success.main' : 'warning.main',
                            fontWeight: 'bold'
                          }}>
                            {row.isComplete === true
                              ? locale === 'en' 
                                ? 'Completed' 
                                : 'Voltooid'
                              : locale === 'en' 
                                ? 'Pending' 
                                : 'In afwachting'
                            }
                          </TableCellCustom>
                          <TableCellCustom>
                            <IconButton
                                onClick={() => handleDelete(row._id)}
                                disabled={row.status === 'completed'}
                                color="error"
                            >
                              <DeleteIcon />
                            </IconButton>
                            { !row.isComplete && (
                                <IconButton
                                    onClick={() => handleComplete(row._id)}
                                    color="success"
                                >
                                  <DoneIcon />
                                </IconButton>
                            ) }
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
                {t("12")}
              </Typography>
              <Box
                  component="form"
                  onSubmit={handleSubmit}
                  sx={{
                    padding: "5.8rem",
                    paddingTop: '2rem',
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    "@media (max-width: 600px)": { padding: "2rem", paddingTop: "1rem" },
                  }}
              >
                <Grid container spacing={4}>
                  <Grid item xs={12}>
                    <CustomFormTextField
                        label={t2("fields.business")}
                        name="businessName"
                        value={formData.businessName}
                        onChange={handleChange}
                        fullWidth
                        sx={{
                          "& .MuiInputBase-input": {
                            color: theme.palette.mode === "dark" ? "#fff" : "#050505",
                          },
                          "& label": {
                            color: theme.palette.mode === "dark" ? "#fff" : "#050505",
                          },
                          "& .MuiOutlinedInput-root": {
                            backgroundColor: theme.palette.mode === "dark" ? "rgba(255, 255, 255, 0.1)" : "rgba(255, 255, 255, 0.1)",
                            boxShadow: "0 2px 11.9px 0 rgba(0, 0, 0, 0.25)",
                          },
                        }}
                    />
                  </Grid>

                  <Grid item xs={12}>
                    <CustomFormTextField
                        label={t2("fields.address")}
                        name="address"
                        value={formData.address}
                        onChange={handleChange}
                        fullWidth
                        sx={{
                          "& .MuiInputBase-input": {
                            color: theme.palette.mode === "dark" ? "#fff" : "#050505",
                          },
                          "& label": {
                            color: theme.palette.mode === "dark" ? "#fff" : "#050505",
                          },
                          "& .MuiOutlinedInput-root": {
                            backgroundColor: theme.palette.mode === "dark" ? "rgba(255, 255, 255, 0.1)" : "rgba(255, 255, 255, 0.1)",
                            boxShadow: "0 2px 11.9px 0 rgba(0, 0, 0, 0.25)",
                          },
                        }}
                    />
                  </Grid>

                  <Grid item xs={12}>
                    <CustomFormTextField
                        label={t2("fields.name")}
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        fullWidth
                        sx={{
                          "& .MuiInputBase-input": {
                            color: theme.palette.mode === "dark" ? "#fff" : "#050505",
                          },
                          "& label": {
                            color: theme.palette.mode === "dark" ? "#fff" : "#050505",
                          },
                          "& .MuiOutlinedInput-root": {
                            backgroundColor: theme.palette.mode === "dark" ? "rgba(255, 255, 255, 0.1)" : "rgba(255, 255, 255, 0.1)",
                            boxShadow: "0 2px 11.9px 0 rgba(0, 0, 0, 0.25)",
                          },
                        }}
                    />
                  </Grid>

                  <Grid item xs={12}>
                    <CustomFormTextField
                        label={t2("fields.email")}
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        fullWidth
                        sx={{
                          "& .MuiInputBase-input": {
                            color: theme.palette.mode === "dark" ? "#fff" : "#050505",
                          },
                          "& label": {
                            color: theme.palette.mode === "dark" ? "#fff" : "#050505",
                          },
                          "& .MuiOutlinedInput-root": {
                            backgroundColor: theme.palette.mode === "dark" ? "rgba(255, 255, 255, 0.1)" : "rgba(255, 255, 255, 0.1)",
                            boxShadow: "0 2px 11.9px 0 rgba(0, 0, 0, 0.25)",
                          },
                        }}
                    />
                  </Grid>

                  <Grid item xs={12}>
                    <FormControl fullWidth variant="outlined" sx={{ marginTop: "1rem" }}>
                      <InputLabel
                          id="vehicleType-label"
                          sx={{
                            fontSize: "1.4rem",
                            color: theme.palette.mode === "dark" ? "#fff" : "#050505",
                            transform: "translate(10%, 70%) scale(1)",
                            "&.MuiInputLabel-shrink": {
                              transform: "translate(10%, -105%) scale(1)",
                            },
                            "&.Mui-focused": {
                              color: theme.palette.mode === "dark" ? "#fff" : "#050505",
                            },
                          }}
                      >
                        {t2("fields.vehicle_type")}
                      </InputLabel>
                      <Select
                          labelId="vehicleType-label"
                          id="vehicleType"
                          value={formData.vehicleType}
                          label={t2("fields.vehicle_type")}
                          MenuProps={{ disableScrollLock: true }}
                          onChange={(e) => {
                            e.target.name = "vehicleType";
                            handleChange(e);
                          }}
                          sx={{
                            backgroundColor: theme.palette.mode === "dark" ? "rgba(255, 255, 255, 0.1)" : "transparent",
                            "& .MuiOutlinedInput-input": {
                              padding: "1rem 1.5rem",
                              color: theme.palette.mode === "dark" ? "#fff" : "#050505",
                              fontSize: "1.8rem",
                              fontWeight: "300",
                            },
                            "& .MuiOutlinedInput-notchedOutline": {
                              borderRadius: "6px",
                              borderColor: "transparent",
                              backgroundColor: theme.palette.mode === "dark" ? "rgba(255, 255, 255, 0.1)" : "transparent",
                              boxShadow: "0 2px 11.9px 0 rgba(0, 0, 0, 0.25)",
                            },
                            "& .MuiSelect-icon": {
                              color: theme.palette.mode === "dark" ? "#fff" : "#050505",
                            },
                            "&:hover .MuiOutlinedInput-notchedOutline": {
                              borderColor: "transparent",
                            },
                            "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                              borderColor: "transparent",
                            },
                            "& .MuiInputLabel-root": {
                              color: theme.palette.mode === "dark" ? "#fff" : "#050505",
                            },
                          }}
                      >
                        <MenuItem value="">
                          <em>{t2("fields.vehicle_types.none")}</em>
                        </MenuItem>
                        <MenuItem value="Hatchback">{t2("fields.vehicle_types.hatchback")}</MenuItem>
                        <MenuItem value="Bus">{t2("fields.vehicle_types.bus")}</MenuItem>
                        <MenuItem value="SUVs">{t2("fields.vehicle_types.suvs")}</MenuItem>
                        <MenuItem value="Motorcycle">{t2("fields.vehicle_types.bikes")}</MenuItem>
                        <MenuItem value="Trucks">{t2("fields.vehicle_types.trucks")}</MenuItem>
                        <MenuItem value="Station Wagon">{t2("fields.vehicle_types.wagen")}</MenuItem>
                        <MenuItem value="Campers">{t2("fields.vehicle_types.campers")}</MenuItem>
                        <MenuItem value="Boats">{t2("fields.vehicle_types.boats")}</MenuItem>
                        <MenuItem value="Others">{t2("fields.vehicle_types.other")}</MenuItem>

                      </Select>
                    </FormControl>
                  </Grid>

                  <Grid item xs={12}>
                    <FormControl fullWidth variant="outlined" sx={{ marginTop: "1rem" }}>
                      <InputLabel
                          id="fleetSize-label"
                          sx={{
                            fontSize: "1.4rem",
                            color: theme.palette.mode === "dark" ? "#fff" : "#050505",
                            transform: "translate(10%, 70%) scale(1)",
                            "&.MuiInputLabel-shrink": {
                              transform: "translate(10%, -105%) scale(1)",
                            },
                            "&.Mui-focused": {
                              color: theme.palette.mode === "dark" ? "#fff" : "#050505", // Retain color on focus
                            },
                          }}
                      >
                        {t2("fields.fleet_size")}
                      </InputLabel>
                      <Select
                          labelId="fleetSize-label"
                          id="fleetSize"
                          value={formData.fleetSize}
                          MenuProps={{ disableScrollLock: true }}
                          label={t2("fields.fleet_size")}
                          onChange={(e) => {
                            e.target.name = "fleetSize";
                            handleChange(e);
                          }}
                          sx={{
                            backgroundColor: theme.palette.mode === "dark" ? "rgba(255, 255, 255, 0.1)" : "transparent",
                            "& .MuiOutlinedInput-input": {
                              padding: "1rem 1.5rem",
                              color: theme.palette.mode === "dark" ? "#fff" : "#050505",
                              fontSize: "1.8rem",
                              fontWeight: "300",
                            },
                            "& .MuiOutlinedInput-notchedOutline": {
                              borderRadius: "6px",
                              borderColor: "transparent",
                              backgroundColor: theme.palette.mode === "dark" ? "rgba(255, 255, 255, 0.1)" : "transparent",
                              boxShadow: "0 2px 11.9px 0 rgba(0, 0, 0, 0.25)",
                            },
                            "& .MuiSelect-icon": {
                              color: theme.palette.mode === "dark" ? "#fff" : "#050505",
                            },
                            "&:hover .MuiOutlinedInput-notchedOutline": {
                              borderColor: "transparent",
                            },
                            "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                              borderColor: "transparent",
                            },
                            "& .MuiInputLabel-root": {
                              color: theme.palette.mode === "dark" ? "#fff" : "#050505",
                            },
                          }}
                      >
                        <MenuItem value="">
                          <em>None</em>
                        </MenuItem>
                        <MenuItem value="1-10">1-10</MenuItem>
                        <MenuItem value="11-50">11-50</MenuItem>
                        <MenuItem value="51-100">51-100</MenuItem>
                        <MenuItem value="101-500">101-500</MenuItem>
                        <MenuItem value="500+">500+</MenuItem>
                      </Select>
                    </FormControl>
                  </Grid>
                </Grid>

                <Button
                    variant="contained"
                    type="submit"
                    sx={{
                      padding: "1.5rem 3rem",
                      fontSize: "1.6rem",
                      fontWeight: "bold",
                      backgroundColor: "primary.accentDark",
                      color: "white",
                      borderRadius: "50px",
                      fontFamily: "DMSans",
                      marginTop: "4rem",
                      "&:hover": {
                        backgroundColor: theme.palette.primary.accent,
                      },
                    }}
                >
                  {t2("button")}
                </Button>
              </Box>
            </ModalCard>
          </Box>
        </Modal>
      </Box>
  );
}