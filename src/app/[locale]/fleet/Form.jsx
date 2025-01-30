"use client";
import React, { useState } from "react";
import {
  Typography,
  Box,
  Grid,
  MenuItem,
  Select,
  FormControl,
  InputLabel,
  CircularProgress,
  Button,
} from "@mui/material";
import {
  CustomFormTextField,
  CustomFormButton,
} from "../../../components/mui/NewFormPkgs";
import { CustomCard } from "../../../components/mui/CardPackages";
import { useTheme } from "../../../contexts/themeContext";
import { deepmerge } from "@mui/utils";
import { ThemeProvider } from "@emotion/react";
import useSnackbar from "../../../hooks/useSnackbar";
import axios from "axios";
import { ServiceHeading } from "../../../components/Home/ServicesOverview/ServiceColumnGroup";

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

export default function FleetCareProForm() {
  const { openSnackbar } = useSnackbar();
  const { theme } = useTheme();

  const [formData, setFormData] = useState({
    businessName: "",
    address: "",
    name: "",
    email: "",
    vehicleType: "",
    fleetSize: "",
  });

  const handleChange = (e) => {
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
      openSnackbar("Form submitted successfully!");
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
        `Error: ${error instanceof Error ? error.message : "An unexpected error occurred"}`
      );
    }
  };

  return (
    <CustomCard
      sx={{
        zIndex: "10",
        backgroundColor: theme.palette.mode === "dark" ? "rgba(255,255,255,0.05)" : "rgba(255, 255, 255, 0.05)",
        border: `1px solid ${theme.palette.mode === "dark" ? "rgba(255,255,255,0.12)" : "white"}`,
        backdropFilter: "blur(2.4px)",
        borderRadius: "32px",
        boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
        padding: "2rem",
        marginBottom: "5rem",

        "@media (max-width: 600px)": {
          padding: "0",
        },
      }}
    >
      <ThemeProvider theme={(outerTheme) => deepmerge(outerTheme, theme)}>
        <ServiceHeading sx={{
          fontSize: '3.2rem',
          marginTop: "2rem",
          marginBottom: "0.5rem",
        }}> Request a Quote</ServiceHeading>
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
                label="Business"
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
                label="Address"
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
                label="Name"
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
                label="Email"
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
                  Vehicle Type
                </InputLabel>
                <Select
                  labelId="vehicleType-label"
                  id="vehicleType"
                  value={formData.vehicleType}
                  label="Vehicle Type"
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
                    <em>None</em>
                  </MenuItem>
                  <MenuItem value="Cars (all types)">Cars (all types)</MenuItem>
                  <MenuItem value="SUVs">SUVs</MenuItem>
                  <MenuItem value="Bikes (all types)">Bikes (all types)</MenuItem>
                  <MenuItem value="Trucks">Trucks</MenuItem>
                  <MenuItem value="Campers">Campers</MenuItem>
                  <MenuItem value="Boats">Boats</MenuItem>
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
                  Fleet Size
                </InputLabel>
                <Select
                  labelId="fleetSize-label"
                  id="fleetSize"
                  value={formData.fleetSize}
                  label="Fleet Size"
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
            Submit
          </Button>
        </Box>
      </ThemeProvider>
    </CustomCard>
  );
}
