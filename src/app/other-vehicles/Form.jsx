"use client";
import React, { useState } from "react";
import {Typography, Box, Grid, MenuItem, Select, FormControl, InputLabel, Button} from "@mui/material";
import { CustomFormTextField } from "../../components/mui/NewFormPkgs";
import { CustomCard } from "../../components/mui/CardPackages";
import { useTheme } from "../../contexts/themeContext";
import { deepmerge } from "@mui/utils";
import { ThemeProvider } from "@emotion/react";
import useSnackbar from "../../hooks/useSnackbar";
import axios from "axios";

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
        <CustomCard sx={{
            backgroundColor: theme.palette.mode === "dark" ? "rgba(255,255,255,0.05)" : "rgba(255, 255, 255, 0.05)",
            border: `1px solid ${theme.palette.mode === "dark" ? "rgba(255,255,255,0.12)" : "white"}`,
            backdropFilter: "blur(2.4px)",
            borderRadius: "32px",
            boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
            padding: "2rem",
        }}>
            <ThemeProvider theme={(outerTheme) => deepmerge(outerTheme, theme)}>
                <Box component="form" onSubmit={handleSubmit} sx={{ padding: "5.8rem", display: "flex", flexDirection: "column", alignItems: "center" }}>
                    <Grid container spacing={4}>
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
                                        backgroundColor: "rgba(255, 255, 255, 0.1)",
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
                                        backgroundColor: "rgba(255, 255, 255, 0.1)",
                                        boxShadow: "0 2px 11.9px 0 rgba(0, 0, 0, 0.25)",
                                    },
                                }}
                            />
                        </Grid>

                        <Grid item xs={12}>
                            <CustomFormTextField
                                label="Phone Number"
                                name="phone"
                                value={formData.phone}
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
                            <FormControl fullWidth variant="outlined">
                                <InputLabel
                                    id="vehicleType-label"
                                    sx={{
                                        fontSize: "1.4rem",
                                        color: theme.palette.mode === "dark" ? "#fff" : "#050505",
                                        transform: "translate(10%, 70%) scale(1)",
                                        "&.Mui-focused": {
                                            color: theme.palette.mode === "dark" ? "#fff" : "#050505", // Retain color on focus
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
                                        backgroundColor: theme.palette.mode === "dark"
                                            ? "rgba(255, 255, 255, 0.1)"
                                            : "transparent",
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
                                    <MenuItem value="">
                                        <em>None</em>
                                    </MenuItem>
                                    <MenuItem value="Bikes">Bikes (all types)</MenuItem>
                                    <MenuItem value="Trucks">Trucks</MenuItem>
                                    <MenuItem value="Campers">Campers</MenuItem>
                                    <MenuItem value="Boats">Boats</MenuItem>
                                </Select>
                            </FormControl>
                        </Grid>

                        <Grid item xs={12}>
                            <FormControl fullWidth variant="outlined">
                                <InputLabel
                                    id="serviceType-label"
                                    sx={{
                                        fontSize: "1.4rem",
                                        color: theme.palette.mode === "dark" ? "#fff" : "#050505",
                                        transform: "translate(10%, 70%) scale(1)",
                                        "&.Mui-focused": {
                                            color: theme.palette.mode === "dark" ? "#fff" : "#050505", // Retain color on focus
                                        },
                                    }}
                                >
                                    Service Type
                                </InputLabel>
                                <Select
                                    labelId="serviceType-label"
                                    id="serviceType"
                                    value={formData.serviceType}
                                    label="Service Type"
                                    onChange={(e) => {
                                        e.target.name = "serviceType";
                                        handleChange(e);
                                    }}
                                    sx={{
                                        backgroundColor: theme.palette.mode === "dark"
                                            ? "rgba(255, 255, 255, 0.1)"
                                            : "transparent",
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
                                    <MenuItem value="">
                                        <em>None</em>
                                    </MenuItem>
                                    <MenuItem value="Anywhere AutoCare">Anywhere AutoCare</MenuItem>
                                    <MenuItem value="FleetCare Pro">FleetCare Pro</MenuItem>
                                </Select>
                            </FormControl>
                        </Grid>

                        <Grid item xs={12}>
                            <FormControl fullWidth variant="outlined">
                                <InputLabel
                                    id="location-label"
                                    sx={{
                                        fontSize: "1.4rem",
                                        color: theme.palette.mode === "dark" ? "#fff" : "#050505",
                                        transform: "translate(10%, 70%) scale(1)",
                                        "&.Mui-focused": {
                                            color: theme.palette.mode === "dark" ? "#fff" : "#050505", // Retain color on focus
                                        },
                                    }}
                                >
                                    Location
                                </InputLabel>
                                <Select
                                    labelId="location-label"
                                    id="location"
                                    value={formData.location}
                                    label="Location"
                                    onChange={(e) => {
                                        e.target.name = "location";
                                        handleChange(e);
                                    }}
                                    sx={{
                                        backgroundColor: theme.palette.mode === "dark"
                                            ? "rgba(255, 255, 255, 0.1)"
                                            : "transparent",
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
                                    <MenuItem value="">
                                        <em>None</em>
                                    </MenuItem>
                                    <MenuItem value="Onsite">Onsite</MenuItem>
                                    <MenuItem value="Your Place">Your Place</MenuItem>
                                </Select>
                            </FormControl>
                        </Grid>

                        {formData.location === "Your Place" && (
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
                                            backgroundColor: "rgba(255, 255, 255, 0.1)",
                                            boxShadow: "0 2px 11.9px 0 rgba(0, 0, 0, 0.25)",
                                        },
                                    }}
                                />
                            </Grid>
                        )}

                        <Grid item xs={12}>
                            <CustomFormTextField
                                label="Number of Vehicles"
                                name="numVehicles"
                                value={formData.numVehicles}
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
                            fontFamily: "DMSans",
                            marginTop: "2rem",
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
