"use client";
import React, {useState} from "react";
import {Box, Button, Typography} from "@mui/material";
import {FormContainer} from "../../components/mui/FleetPkgs";
import HeadingLinesAnimation from "../../components/Home/HeadingLinesAnimation/HeadingLinesAnimation";
import { CustomFormTextField } from "../../components/mui/NewFormPkgs";
import useSnackbar from "../../hooks/useSnackbar";
import axios from "axios";
import { useTheme } from "../../contexts/themeContext";

const submitFleetCareProForm = async (formData) => {
  try {
    const response = await axios.post("/api/contact", formData, {
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

export default function Form({}) {
  const { openSnackbar } = useSnackbar();
  const { theme } = useTheme();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
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

      // Reset form
      setFormData({
        name: "",
        email: "",
        message: "",
      });
    } catch (error) {
      openSnackbar(`Error: ${error instanceof Error ? error.message : "An unexpected error occurred"}`);
    }
  };

  return (
    <FormContainer component="form" onSubmit={handleSubmit} sx={{
      backgroundColor: theme.palette.mode === "dark" ? "rgba(255,255,255,0.0001)" : "white",
      border: `1px solid ${theme.palette.mode === "dark" ? "rgba(255,255,255,0.25)" : "white"}`,
      backdropFilter: "blur(2.4px)",
        borderRadius: "10px",
      boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
      padding: "2rem",
    }}>
      <CustomFormTextField label="Name" name="name" value={formData.name} onChange={handleChange} fullWidth required />
      <CustomFormTextField
        label="Email"
        name="email"
        type="email"
        value={formData.email}
        onChange={handleChange}
        fullWidth
        required
        sx={{
          boxShadow: "0 2px 6px rgba(0, 0, 0, 0.1)",
          borderRadius: "8px",
        }}
      />
      <CustomFormTextField
        label="Message"
        name="message"
        value={formData.message}
        onChange={handleChange}
        fullWidth
        multiline
        rows={4}
        required
        sx={{
          boxShadow: "0 2px 6px rgba(0, 0, 0, 0.1)",
          borderRadius: "8px",
        }}
      />
        <Box
            sx={{
                display: "flex",
                gap: "2rem",
                flexDirection: { xs: "column", sm: "row" },
                margin: "0 auto",
            }}
        >
            <Button
                variant="contained"
                sx={{
                    padding: "1.5rem 3rem",
                    fontSize: "1.6rem",
                    fontWeight: "bold",
                    backgroundColor: "primary.accentDark",
                    color: "white",
                    fontFamily: "DMSans",
                    "&:hover": {
                        backgroundColor: theme.palette.primary.accent,
                    },
                }}
            >
                Submit
            </Button>
        </Box>
    </FormContainer>
  );
}
