"use client";
import React, { useEffect, useState } from "react";
import { signIn, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import {
    Box,
    Checkbox,
    FormControlLabel,
    Grid,
    Typography,
    Button,
} from "@mui/material";
import { useTheme } from "../../contexts/themeContext";
import { CustomFormTextField } from "../../components/mui/NewFormPkgs";
import { CustomCard } from "../../components/mui/CardPackages";
import { isValidEmail } from "../../lib/utils.js";

const SignUpModal = ({ setOpenSignup, setOpenLogin }) => {
    const { theme } = useTheme();
    const router = useRouter();
    const [error, setError] = useState("");
    const { data: session, status: sessionStatus } = useSession();

    useEffect(() => {
        if (sessionStatus === "authenticated") {
            router.replace("/");
        }
    }, [sessionStatus, router]);

    const handleSubmit = async (e) => {
        e.preventDefault();

        const data = {
            firstName: e.target.firstName.value,
            lastName: e.target.lastName.value,
            companyName: e.target.companyName.value,
            street: e.target.street.value,
            city: e.target.city.value,
            zipCode: e.target.zipCode.value,
            email: e.target.email.value,
            phoneNumber: e.target.phoneNumber.value,
            password: e.target.password.value,
        };

        // Validation for empty fields
        if (!data.firstName) {
            setError("First Name is required");
        } else if (!data.lastName) {
            setError("Last Name is required");
        } else if (!data.companyName) {
            setError("Company Name is required");
        } else if (!data.street) {
            setError("Street is required");
        } else if (!data.city) {
            setError("City is required");
        } else if (!data.zipCode) {
            setError("Zip Code is required");
        } else if (!data.email) {
            setError("Email is required");
        } else if (!isValidEmail(data.email)) {
            setError("Email is not valid");
        } else if (!data.password) {
            setError("Password is required");
        } else if (!data.phoneNumber) {
            setError("Phone Number is required");
        } else {
            const response = await fetch("/api/register", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(data),
            });
            const res_data = await response.json();
            if (res_data.error) {
                setError(res_data.error);
            } else {
                setOpenSignup(false);
                setOpenLogin(true);
            }
        }
    };

    return (
        sessionStatus !== "authenticated" && (
            <Box
                component="main"
                sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    paddingTop: "5rem",
                    width: "100%",
                    height: "calc(100vh - 5rem)",
                    position: "fixed",
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    zIndex: 100000,
                    backdropFilter: "blur(10px)",
                }}
                onClick={() => setOpenSignup(false)}
            >
                <CustomCard
                    sx={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        justifyContent: "center",
                        padding: "4rem",
                        borderRadius: "10px",
                        boxShadow: "2px 2px 20px #00000060 !important",
                        maxHeight: "calc(100vh - 5rem)",
                        overflowY: "auto",
                        maxWidth: "700px",
                        width: "100%",
                        backgroundColor: theme.palette.mode === "dark" ? "rgba(0, 0, 0, 0.4)" : "rgba(255, 255, 255, 0.05)",
                    }}
                    onClick={(e) => e.stopPropagation()}
                >
                    <Typography
                        component="h1"
                        sx={{
                            fontWeight: 700,
                            marginTop: "1rem",
                            marginBottom: "1rem",
                            paddingTop: "1.5rem",
                            paddingBottom: "1.5rem",
                            color: "primary.accent",
                            fontSize: "2.8rem",
                        }}
                    >
                        Sign Up
                    </Typography>
                    <Box
                        component="form"
                        onSubmit={handleSubmit}
                        sx={{ mt: 3, width: "100%", maxWidth: "80%" }}
                    >
                        <Grid container spacing={4}>
                            <Grid item xs={12} sm={6}>
                                <CustomFormTextField
                                    autoComplete="given-name"
                                    name="firstName"
                                    required
                                    fullWidth
                                    id="firstName"
                                    label="First Name"
                                    autoFocus
                                />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <CustomFormTextField
                                    required
                                    fullWidth
                                    id="lastName"
                                    label="Last Name"
                                    name="lastName"
                                    autoComplete="family-name"
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <CustomFormTextField
                                    required
                                    fullWidth
                                    id="companyName"
                                    label="Company"
                                    name="companyName"
                                    autoComplete="company-name"
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <CustomFormTextField
                                    autoComplete="street-address"
                                    name="street"
                                    required
                                    fullWidth
                                    id="street"
                                    label="Street"
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <CustomFormTextField
                                    autoComplete="phone"
                                    name="phoneNumber"
                                    required
                                    fullWidth
                                    id="phone"
                                    label="Phone"
                                />
                            </Grid>
                            <Grid item xs={12} sm={8}>
                                <CustomFormTextField
                                    required
                                    fullWidth
                                    id="City"
                                    label="City"
                                    name="city"
                                    autoComplete="city"
                                />
                            </Grid>
                            <Grid item xs={12} sm={4}>
                                <CustomFormTextField
                                    required
                                    fullWidth
                                    id="zipCode"
                                    label="Zip Code"
                                    name="zipCode"
                                    autoComplete="zip-code"
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <CustomFormTextField
                                    required
                                    fullWidth
                                    id="email"
                                    label="Email Address"
                                    name="email"
                                    autoComplete="email"
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <CustomFormTextField
                                    required
                                    fullWidth
                                    name="password"
                                    label="Password"
                                    type="password"
                                    id="password"
                                    autoComplete="new-password"
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <FormControlLabel
                                    sx={{
                                        margin: "-1rem auto 2.5rem",
                                        "& span": {
                                            fontSize: "1.5rem",
                                        },
                                        "& .MuiCheckbox-root.Mui-checked": {
                                            color: "#00BEFF",
                                        },
                                    }}
                                    control={<Checkbox value="allowExtraEmails" color="primary" />}
                                    label="I want to receive inspiration, marketing promotions and updates via email."
                                />
                            </Grid>
                        </Grid>
                        <Box sx={{ display: "flex", justifyContent: "center", width: "100%" }}>
                            <Button
                                type="submit"
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
                                Sign Up
                            </Button>
                        </Box>
                        <Grid container justifyContent="center" sx={{ margin: "2rem 0 0" }}>
                            <Grid item>
                                <Typography
                                    sx={{
                                        color: "primary.contrastText",
                                        fontSize: "1.8rem",
                                    }}
                                >
                                    Already have an account?{" "}
                                    <span
                                        onClick={() => {
                                            setOpenSignup(false);
                                            setOpenLogin(true);
                                        }}
                                        style={{ cursor: "pointer", color: "#00BEFF" }}
                                    >
                                        Sign In
                                    </span>
                                </Typography>
                            </Grid>
                        </Grid>
                    </Box>
                </CustomCard>
            </Box>
        )
    );
};

export default SignUpModal;
