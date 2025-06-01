"use client";
import React, { useEffect, useState } from "react";
import { signIn, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import {Box, Button, Grid, Typography} from "@mui/material";
import CircularProgress from "@mui/material/CircularProgress";
import { CustomCard } from "../../components/mui/CardPackages";
import { CustomFormTextField } from "../../components/mui/NewFormPkgs";
import { useTheme } from "../../contexts/themeContext";

const isValidEmail = (email) => {
    const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
    return emailRegex.test(email);
};

const LoginModal = ({ setOpenLogin, setOpenSignup }) => {
    const router = useRouter();
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);
    const { data: session, status: sessionStatus } = useSession();
    const { theme } = useTheme();


    useEffect(() => {
        if (sessionStatus === "authenticated") {
            router.replace("/");
        }
    }, [sessionStatus, router]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError("");

        const email = e.target[0].value;
        const password = document.getElementById("password").value;

        if (!isValidEmail(email)) {
            setError("Invalid email");
            setLoading(false);
            return;
        }

        if (!password || password.length < 8) {
            setError("Password is invalid");
            setLoading(false);
            return;
        }

        try {
            const res = await signIn("credentials", {
                redirect: false,
                email,
                password,
            });
            if (!res.ok) throw new Error("Invalid Email or Password");
            if (res?.url) router.replace("/customer-portal");
        } catch (err) {
            setError("Invalid Email or password");
        }
        setLoading(false);
    };

    return (
      sessionStatus !== "authenticated" && (
        <Box
          component="main"
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            margin: "0",
            width: "100%",
            height: "100vh",
            position: "fixed",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            zIndex: 100000,
            backdropFilter: "blur(10px)",
          }}
          onClick={() => setOpenLogin(false)}
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
              maxWidth: "600px",
              width: "100%",
              backgroundColor: theme.palette.mode === "dark" ? "rgba(0, 0, 0, 0.4)" : "rgba(255, 255, 255, 0.4)",
              "@media (max-width: 1400px)": {
                margin: "2rem",
              },
              "@media (max-width: 600px)": {
                margin: "2rem",
                padding: "2rem",
              },
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
                color: "primary.accent",
                fontSize: "2.8rem",
              }}
            >
              Login
            </Typography>

            <Box
              component="form"
              onSubmit={handleSubmit}
              sx={{
                mt: 3,
                width: "100%",
                display: "flex",
                flexDirection: "column",
                maxWidth: "80%",
              }}
            >
              <Box
                sx={{
                  alignSelf: "center",
                  paddingBottom: "2rem",
                  color: "red",
                  fontSize: "1.5rem",
                }}
              >
                {error}
              </Box>

              <CustomFormTextField
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                sx={{ marginBottom: "2rem" }}
              />

              <CustomFormTextField
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="new-password"
                sx={{ marginBottom: "2rem" }}
              />

              <Box sx={{ display: "flex", justifyContent: "center", width: "100%" }}>
                <Button
                  variant="contained"
                  sx={{
                    padding: "1.5rem 3rem",
                    fontSize: "1.6rem",
                    fontWeight: "bold",
                    backgroundColor: "primary.accentDark",
                    borderRadius: "50px",
                    color: "white",
                    fontFamily: "DMSans",
                    "&:hover": {
                      backgroundColor: theme.palette.primary.accent,
                    },
                  }}
                  type="submit"
                  disabled={loading}
                >
                  {loading ? <CircularProgress /> : "Login"}
                </Button>
              </Box>

              <Grid container justifyContent="center" sx={{ margin: "2rem 0 2rem" }}>
                <Grid item>
                  <Typography
                    sx={{
                      color: "primary.contrastText",
                      fontSize: "1.8rem",
                    }}
                  >
                    Don’t have an account?{" "}
                    <span
                      onClick={() => {
                        setOpenLogin(false);
                        setOpenSignup(true);
                      }}
                      style={{ cursor: "pointer", color: "#00BEFF" }}
                    >
                      Sign Up
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

export default LoginModal;
