"use client";
import { useState } from "react";
import { Box, Toolbar } from "@mui/material";
import Sidebar from "../../components/Admin/Sidebar";
import Navbar from "../../components/Admin/Navbar";
import { signOut } from "next-auth/react";
import BookingsProvider from "../../contexts/BookingsContext";

const AdminDashboardLayout = ({ children }) => {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const toggleDrawer = () => {
    setDrawerOpen((prev) => !prev);
  };

  const handleTabChange = (tab) => {
    setSelectedTab(tab);
  };

  const handleSignOut = () => {
    signOut();
  };

  return (
    <BookingsProvider>
      <Navbar toggleDrawer={toggleDrawer} drawerOpen={drawerOpen} handleSignOut={handleSignOut} />
      <Box sx={{ display: "flex" }}>
        <Sidebar drawerOpen={drawerOpen} toggleDrawer={toggleDrawer} handleTabChange={handleTabChange} />
        handleSignOut={handleSignOut}
        <Box
          component="main"
          sx={{
            flexGrow: 1,
            p: 3,
            overflowY: "auto",
            zIndex: 1,
            position: "relative",
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
