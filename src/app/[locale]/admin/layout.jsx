"use client";
import { useState } from "react";
import { Box, Toolbar, useMediaQuery } from "@mui/material";
import Sidebar from "../../../components/Admin/Sidebar";
import Navbar from "../../../components/Admin/Navbar";
import { signOut } from "next-auth/react";
import BookingsProvider from "../../../contexts/BookingsContext";
import { useRouter } from "next/navigation";

const AdminDashboardLayout = ({ children }) => {
    const [drawerOpen, setDrawerOpen] = useState(false);
    // Check if screen is below 600px
    const isMobile = useMediaQuery("(max-width:600px)");
    const router = useRouter();

    const toggleDrawer = () => {
        setDrawerOpen((prev) => !prev);
    };

    const handleSignOut = async() => {
       await signOut({ redirect: false });
        router.push("/");
    };

    return (
        <BookingsProvider>
            <Navbar
                toggleDrawer={toggleDrawer}
                drawerOpen={drawerOpen}
                handleSignOut={handleSignOut}
            />

            <Box sx={{ display: "flex", height: "100vh", overflow: "hidden" }}>
                {!isMobile && (
                    <Sidebar
                        drawerOpen={drawerOpen}
                        toggleDrawer={toggleDrawer}
                        handleSignOut={handleSignOut}
                    />
                )}

                <Box
                    component="main"
                    sx={{
                        flexGrow: 1,
                        p: 3,
                        overflowY: "auto",
                        zIndex: 1,
                        position: "relative",
                        "@media (max-width: 600px)": {p: 0},
                    }}
                >
                    <Toolbar />
                    {children}
                </Box>
            </Box>
        </BookingsProvider>
    );
};

export default AdminDashboardLayout;
