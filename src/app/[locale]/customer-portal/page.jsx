"use client";
import React, { useState } from 'react';
import { Box, CssBaseline, Toolbar, useMediaQuery } from '@mui/material';
import Navbar from '../../../components/Customer/Navbar';
import Sidebar from '../../../components/Customer/Sidebar';
import Dashboard from '../../../components/Customer/Dashboard';
import BookingsPage from './booking/page';
import NotificationsPage from './notifications/page';
import {useTranslations} from "next-intl";

const CustomerDashboard = () => {
    const t = useTranslations('customer_dashboard');
    const [drawerOpen, setDrawerOpen] = useState(false);
    const [selectedTab, setSelectedTab] = useState('Dashboard');
    const backgroundImage = "/img_1.png";
    const isMobile = useMediaQuery('(max-width:600px)');

    const toggleDrawer = () => {
        setDrawerOpen((prev) => !prev);
    };

    const handleTabChange = (tab) => {
        setSelectedTab(tab);
    };

    const renderTabContent = () => {
        switch (selectedTab) {
            case t("options.0"):
                return <Dashboard />;
            case t("options.1"):
                return <BookingsPage />;
            case t("options.2"):
                return <NotificationsPage />;
            default:
                return <Dashboard />;
        }
    };

    return (
        <Box sx={{
            display: 'flex',
            height: '100vh',
            overflow: 'hidden',
            position: 'relative',
        }}>
            <Box sx={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                backgroundImage: `url(${backgroundImage})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
                zIndex: -1,
                opacity: 0.5,
            }} />
            <Navbar toggleDrawer={toggleDrawer} drawerOpen={drawerOpen} handleTabChange={handleTabChange}/>
            {!isMobile && (
                <Sidebar drawerOpen={drawerOpen} toggleDrawer={toggleDrawer} handleTabChange={handleTabChange} />
            )}
            <Box
                component="main"
                sx={{
                    flexGrow: 1,
                    p: 3,
                    overflowY: 'auto',
                    zIndex: 1,
                    position: 'relative',
                    "@media (max-width: 600px)": { padding: "0" }
                }}
            >
                <Toolbar />
                {renderTabContent()}
            </Box>
        </Box>
    );
};

export default CustomerDashboard;
