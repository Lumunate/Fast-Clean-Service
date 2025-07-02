"use client";
import React, { useState } from "react";
import {Typography, Box, Grid, MenuItem, Select, FormControl, InputLabel, Button} from "@mui/material";
import { CustomFormTextField } from "../../../components/mui/NewFormPkgs";
import { CustomCard } from "../../../components/mui/CardPackages";
import { useTheme } from "../../../contexts/themeContext";
import { deepmerge } from "@mui/utils";
import { ThemeProvider } from "@emotion/react";
import useSnackbar from "../../../hooks/useSnackbar";
import axios from "axios";
import { ServiceHeading } from "../../../components/Home/ServicesOverview/ServiceColumnGroup";
import {useTranslations} from "next-intl";

const submitForm = async (formData) => {
  try {
    const response = await axios.post("/api/other-vehicles", formData, {
      headers: {
        "Content-Type": "application/json",
      },
    });
    console.log(response.data.message);
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error) && error.response) {
      console.error("Error submitting form:", error.response.data);
      throw new Error(error.response.data.error || error.response.data.message);
    } else {
      console.error("Error submitting form:", error);
      throw new Error("An unexpected error occurred");
    }
  }
};

export default function Form() {
    const t = useTranslations('other_vehicles.quote_form');
  const { openSnackbar } = useSnackbar();
  const { theme } = useTheme();

  const [formData, setFormData] = useState({
    name: "",
    address: "",
    email: "",
    vehicleType: "",
    phone: "",
    serviceType: "",
    location: "",
    numVehicles: "",
      desiredServices: ""
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
      await submitForm(formData);
      openSnackbar("Form submitted successfully!");

      // Reset form
      setFormData({
        name: "",
        address: "",
        email: "",
        vehicleType: "",
        phone: "",
        serviceType: "",
        location: "",
        numVehicles: "",
      });
    } catch (error) {
      openSnackbar(`Error: ${error instanceof Error ? error.message : "An unexpected error occurred"}`);
    }
  };

  return (
    <CustomCard
      sx={{
        backgroundColor: theme.palette.mode === "dark" ? "rgba(255,255,255,0.05)" : "rgba(255, 255, 255, 0.05)",
        border: `1px solid ${theme.palette.mode === "dark" ? "rgba(255,255,255,0.12)" : "white"}`,
        backdropFilter: "blur(2.4px)",
        borderRadius: "32px",
        boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
        padding: {xs:'1rem',sm:"2rem"},
      }}
    >
      <ThemeProvider theme={(outerTheme) => deepmerge(outerTheme, theme)}>
        <ServiceHeading
          sx={{
            fontSize: {xs:"2rem",sm:"3.2rem"},
            marginTop: "2rem",
            marginBottom: "0.5rem",
          }}
        >
          {" "}
            {t("title")}
        </ServiceHeading>
        <Box
          component="form"
          onSubmit={handleSubmit}
          sx={{
            padding: "5.8rem",
            paddingTop: "2rem",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            "@media (max-width: 600px)": { padding: "1rem", paddingTop: "1rem" },
          }}
        >
          <Grid container spacing={4}>
            <Grid item xs={12}>
              <CustomFormTextField
                  required
                label={t("fields.name")}
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
                    backgroundColor: "rgba(255, 255, 255, 0.1)",
                    boxShadow: "0 2px 11.9px 0 rgba(0, 0, 0, 0.25)",
                  },
                }}
              />
            </Grid>

            <Grid item xs={12}>
              <CustomFormTextField
                  required
                label={t("fields.email")}
                name="email"
                value={formData.email}
                onChange={handleChange}
                fullWidth
                sx={{
                  marginTop:{xs:"-20px", sm:'0px'},
                  "& .MuiInputBase-input": {
                    color: theme.palette.mode === "dark" ? "#fff" : "#050505",
                  },
                  "& label": {
                    color: theme.palette.mode === "dark" ? "#fff" : "#050505",
                  },
                  "& .MuiOutlinedInput-root": {
                    backgroundColor: "rgba(255, 255, 255, 0.1)",
                    boxShadow: "0 2px 11.9px 0 rgba(0, 0, 0, 0.25)",
                  },
                }}
              />
            </Grid>

            <Grid item xs={12}>
              <CustomFormTextField
                  required
                label={t("fields.phone_number")}
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                fullWidth
                sx={{
                   marginTop:{xs:"-20px", sm:'0px'},
                  "& .MuiInputBase-input": {
                    color: theme.palette.mode === "dark" ? "#fff" : "#050505",
                  },
                  "& label": {
                    color: theme.palette.mode === "dark" ? "#fff" : "#050505",
                  },
                  "& .MuiOutlinedInput-root": {
                    backgroundColor: "rgba(255, 255, 255, 0.1)",
                    boxShadow: "0 2px 11.9px 0 rgba(0, 0, 0, 0.25)",
                  },
                }}
              />
            </Grid>

            <Grid item xs={12}>
              <FormControl fullWidth variant="outlined" required>
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
                      color: theme.palette.mode === "dark" ? "#fff" : "#050505", // Retain color on focus
                    },
                  }}
                >
                    {t("fields.vehicle_type.label")}
                </InputLabel>
                <Select
                  labelId="vehicleType-label"
                  id="vehicleType"
                  value={formData.vehicleType}
                  label={t("fields.vehicle_type.label")}
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
                      backgroundColor: "rgba(255, 255, 255, 0.1)",
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
                    <MenuItem value="bicycle">{t("fields.vehicle_type.options.bicycle")}</MenuItem>
                    <MenuItem value="scooter">{t("fields.vehicle_type.options.scooter")}</MenuItem>
                    <MenuItem value="motorcycle">{t("fields.vehicle_type.options.motorcycle")}</MenuItem>
                    <MenuItem value="boat">{t("fields.vehicle_type.options.boat")}</MenuItem>
                    <MenuItem value="truck">{t("fields.vehicle_type.options.truck")}</MenuItem>
                    <MenuItem value="airplane">{t("fields.vehicle_type.options.airplane")}</MenuItem>
                </Select>
              </FormControl>
            </Grid>

            <Grid item xs={12}>
              <FormControl fullWidth variant="outlined" required>
                <InputLabel
                  id="serviceType-label"
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
                    {t("fields.service_type.label")}
                </InputLabel>
                <Select
                  labelId="serviceType-label"
                  id="serviceType"
                  value={formData.serviceType}
                  label={t("fields.service_type.label")}
                  MenuProps={{ disableScrollLock: true }}
                  onChange={(e) => {
                    e.target.name = "serviceType";
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
                      backgroundColor: "rgba(255, 255, 255, 0.1)",
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
                    <MenuItem value="one_time_your_location">
                        {t("fields.service_type.options.one_time_your_location")}
                    </MenuItem>
                    <MenuItem value="one_time_our_location">
                        {t("fields.service_type.options.one_time_our_location")}
                    </MenuItem>
                    <MenuItem value="subscription">
                        {t("fields.service_type.options.subscription")}
                    </MenuItem>
                </Select>
              </FormControl>
            </Grid>

            <Grid item xs={12}>
              <FormControl fullWidth variant="outlined" required>
                <InputLabel
                  id="location-label"
                  sx={{
                    fontSize: "1.4rem",
                    color: theme.palette.mode === "dark" ? "#fff" : "#050505",
                    transform: "translate(10%, 70%) scale(1)",
                    "&.MuiInputLabel-shrink": {
                        transform: formData.serviceType === "one_time_our_location"
                        ? "translate(0%, -115%) scale(1)"
                            : "translate(10%, -105%) scale(1)"
                    },
                    "&.Mui-focused": {
                      color: theme.palette.mode === "dark" ? "#fff" : "#050505", // Retain color on focus
                    },
                  }}
                >
                    {t("fields.location.label")}
                    {formData.serviceType === "one_time_our_location" &&
                    ` — Oude Blaauwweg 14, 1521 RN Wormerveer`}
                </InputLabel>
                <Select
                  labelId="location-label"
                  id="location"
                  value={formData.location}
                  label="Location"
                  MenuProps={{ disableScrollLock: true }}
                  onChange={(e) => {
                    e.target.name = "location";
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
                      backgroundColor: "rgba(255, 255, 255, 0.1)",
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
                    <MenuItem value="onsite">{t("fields.location.options.onsite")}</MenuItem>
                    <MenuItem value="your_place">{t("fields.location.options.your_place")}</MenuItem>
                </Select>
              </FormControl>
            </Grid>

            {formData.location === "your_place" && (
              <Grid item xs={12}>
                <CustomFormTextField
                    required
                  label={t("fields.address")}
                  name="address"
                  value={formData.address}
                  onChange={handleChange}
                  fullWidth
                  InputProps={{
                      readOnly: formData.serviceType === "one_time_our_location"
                  }}
                  sx={{
                    "& .MuiInputBase-input": {
                      color: theme.palette.mode === "dark" ? "#fff" : "#050505",
                    },
                    "& label": {
                      color: theme.palette.mode === "dark" ? "#fff" : "#050505",
                    },
                    "& .MuiOutlinedInput-root": {
                      backgroundColor: "rgba(255, 255, 255, 0.1)",
                      boxShadow: "0 2px 11.9px 0 rgba(0, 0, 0, 0.25)",
                    },
                  }}
                />
              </Grid>
            )}

              <Grid item xs={12}>
                  <CustomFormTextField
                      required
                      label={t("fields.desired_services")}
                      name="desiredServices"
                      value={formData.desiredServices}
                      onChange={handleChange}
                      placeholder={t("fields.desired_services_placeholder")}
                      fullWidth
                      sx={{
                          marginTop:{xs:"-20px", sm:'0px'},
                          "& .MuiInputBase-input": {
                              color: theme.palette.mode === "dark" ? "#fff" : "#050505",
                          },
                          "& label": {
                              color: theme.palette.mode === "dark" ? "#fff" : "#050505",
                          },
                          "& .MuiOutlinedInput-root": {
                              backgroundColor: "rgba(255, 255, 255, 0.1)",
                              boxShadow: "0 2px 11.9px 0 rgba(0, 0, 0, 0.25)",
                          },
                      }}
                  />
              </Grid>

            <Grid item xs={12}>
              <CustomFormTextField
                  required
                label={t("fields.number_of_vehicles")}
                name="numVehicles"
                value={formData.numVehicles}
                onChange={handleChange}
                fullWidth
                sx={{
                   marginTop:{xs:"-20px", sm:'0px'},
                  "& .MuiInputBase-input": {
                    color: theme.palette.mode === "dark" ? "#fff" : "#050505",
                  },
                  "& label": {
                    color: theme.palette.mode === "dark" ? "#fff" : "#050505",
                  },
                  "& .MuiOutlinedInput-root": {
                    backgroundColor: "rgba(255, 255, 255, 0.1)",
                    boxShadow: "0 2px 11.9px 0 rgba(0, 0, 0, 0.25)",
                  },
                }}
              />
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
              borderRadius: "50px",
              color: "white",
              fontFamily: "DMSans",
              marginTop: "2rem",
              "&:hover": {
                backgroundColor: theme.palette.primary.accent,
              },
            }}
          >
              {t("button")}
          </Button>
        </Box>
      </ThemeProvider>
    </CustomCard>
  );
}
