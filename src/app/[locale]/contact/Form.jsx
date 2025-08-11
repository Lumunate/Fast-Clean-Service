"use client";
import React, {useState} from "react";
import {Box, Button, Typography} from "@mui/material";
import {FormContainer} from "../../../components/mui/FleetPkgs";
import HeadingLinesAnimation from "../../../components/Home/HeadingLinesAnimation/HeadingLinesAnimation";
import { CustomFormTextField } from "../../../components/mui/NewFormPkgs";
import useSnackbar from "../../../hooks/useSnackbar";
import axios from "axios";
import { useTheme } from "../../../contexts/themeContext";
import {useTranslations} from "next-intl";

const submitFleetCareProForm = async (formData,t) => {
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
      console.error(t("Form_messages.0"), error.response.data.error);
      throw new Error(error.response.data.error);
    } else {
      console.error(t("Form_messages.0"), error);
      throw new Error(t("Form_messages.1"));
    }
  }
};

export default function Form() {
    const t = useTranslations('contact.form');
  const { openSnackbar } = useSnackbar();
  const { theme } = useTheme();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone:"",
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
      await submitFleetCareProForm(formData, t);
      openSnackbar(t("Form_messages.2"));

      // Reset form
      setFormData({
        name: "",
        email: "",
        phone:"",
        message: "",
      });
    } catch (error) {
      openSnackbar(`${t("Form_messages.3")} ${error instanceof Error ? error.message : t("Form_messages.1")}`);
    }
  };

  return (
    <FormContainer
      component="form"
      onSubmit={handleSubmit}
      sx={{
        backgroundColor: theme.palette.mode === "dark" ? "rgba(255,255,255,0.05)" : "rgba(255, 255, 255, 0.05)",
        border: `1px solid ${theme.palette.mode === "dark" ? "rgba(255,255,255,0.12)" : "#8D8D8D69"}`,
        backdropFilter: "blur(2.4px)",
        borderRadius: "32px",
        padding: "2rem",
      }}
    >
      <CustomFormTextField label={t("name")} name="name" value={formData.name} onChange={handleChange} fullWidth required />
      <CustomFormTextField
        label={t("email")}
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
        label={t("phone")}
        name="phone"
        type="number"
        value={formData.phone}
        onChange={handleChange}
        fullWidth
        required
        sx={{
          boxShadow: "0 2px 6px rgba(0, 0, 0, 0.1)",
          borderRadius: "8px",
        }}
      />
      <CustomFormTextField
        label={t("message")}
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
          width: "100%",
        }}
      >
        <Button
          variant="contained"
          type="submit"
          sx={{
            padding: "1.5rem 3rem",
            fontSize: "1.6rem",
            fontWeight: "bold",
            backgroundColor: "#4AD1FF",
            color: "white",
            borderRadius: "50px",
            width: "100%",
            fontFamily: "DMSans",
            "&:hover": {
              backgroundColor: theme.palette.primary.accent,
            },
          }}
        >
            {t("button")}
        </Button>
      </Box>
    </FormContainer>
  );
}
