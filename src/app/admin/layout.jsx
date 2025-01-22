"use client";
import React, { useEffect, useState } from "react";
import { Box, CssBaseline, Toolbar } from "@mui/material";
import Sidebar from "../../components/Admin/Sidebar";
import { useRouter } from "next/navigation";
import Navbar from "../../components/Admin/Navbar";
import { signOut, useSession } from "next-auth/react";
import useSnackbar from "../../hooks/useSnackbar";
import BookingsProvider from "../../contexts/BookingsContext";

export const metadata = {
    title: "Admin Dashboard - Fast Clean Service Management",
    description: "Manage bookings, subscriptions, customer feedback, and fleet services efficiently with the Fast Clean Service Admin Dashboard.",
    keywords: "admin dashboard, Fast Clean Service admin, fleet management, customer management, auto detailing administration, service tracking, bookings management",
    canonical: "https://fast-clean-service.onrender.com/admin-dashboard",
    viewport: "width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no",
    robots: "noindex, nofollow",
    openGraph: {
        type: "website",
        locale: "en_US",
        title: "Admin Dashboard | Fast Clean Service Management",
        description: "Access the Fast Clean Service Admin Dashboard to oversee bookings, subscriptions, customer feedback, and fleet service operations.",
        url: "https://fast-clean-service.onrender.com/admin-dashboard",
        siteName: "Fast Clean Service",
        image: {
            url: "https://fastcleanservice.nl/wp-content/uploads/2022/05/admin-dashboard.jpg",
            width: 2560,
            height: 1707,
            alt: "Admin Dashboard - Fast Clean Service",
            type: "image/jpeg",
        },
    },
    twitter: {
        card: "summary_large_image",
        title: "Fast Clean Service | Admin Dashboard",
        description: "Manage bookings, customer accounts, and service requests in the Fast Clean Service Admin Dashboard.",
        image: "https://fastcleanservice.nl/wp-content/uploads/2022/05/admin-dashboard.jpg",
        site: "@FastCleanService",
    },
    schema: {
        "@context": "https://schema.org",
        "@type": "WebPage",
        name: "Admin Dashboard",
        url: "https://fast-clean-service.onrender.com/admin-dashboard",
        isPartOf: {
            "@type": "WebSite",
            name: "Fast Clean Service",
            url: "https://fast-clean-service.onrender.com/",
        },
        about: {
            "@type": "Service",
            name: "Admin Control for Fast Clean Service",
            provider: {
                "@type": "Organization",
                name: "Fast Clean Service",
                url: "https://fast-clean-service.onrender.com/",
            },
        },
    },
    additionalMetaTags: [
        { name: "application-name", content: "Fast Clean Service Admin" },
        { name: "theme-color", content: "#0c7fcf" },
        { name: "mobile-web-app-capable", content: "yes" },
    ],
};


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
