import { AppBar, IconButton, Toolbar, Typography, Box, Menu, MenuItem, ListItemIcon, ListItemText } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import HomeIcon from "@mui/icons-material/Home";
import DashboardIcon from "@mui/icons-material/Dashboard";
import EventIcon from "@mui/icons-material/Event";
import NotificationsIcon from "@mui/icons-material/Notifications";  // ← new
import LogoutIcon from "@mui/icons-material/Logout";
import { useEffect, useState } from "react";
import { signOut } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useTranslations } from "next-intl";

const Navbar = ({ toggleDrawer, handleTabChange }) => {
    const t = useTranslations('customer_dashboard');
    const [isScrolled, setIsScrolled] = useState(false);
    const [anchorEl, setAnchorEl] = useState(null);
    const [selectedTab, setSelectedTab] = useState(t("options.0"));
    const router = useRouter();

    const handleScroll = () => {
        setIsScrolled(window.pageYOffset > 0);
    };

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const handleMenuClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleMenuClose = () => {
        setAnchorEl(null);
    };

    const handleTabClick = (tab) => {
        setSelectedTab(tab);
        handleTabChange(tab);
    };

    const handleLogout = async () => {
        await signOut({ redirect: false });
        router.push("/");
    };

    // three tabs: Dashboard, Bookings, Notifications
    const tabItems = [
        { text: t("options.0"), icon: <DashboardIcon /> },
        { text: t("options.1"), icon: <EventIcon /> },
        { text: t("options.2"), icon: <NotificationsIcon /> },  // ← new
    ];

    return (
        <AppBar
            position="fixed"
            sx={{
                zIndex: (theme) => theme.zIndex.drawer + 2,
                backgroundColor: isScrolled ? "rgba(255, 255, 255, 0.8)" : "#fff",
                boxShadow: "0px 4px 15px rgba(0, 0, 0, 0.1)",
                backdropFilter: isScrolled ? "blur(8px)" : "none",
                transition: "background-color 0.3s ease",
            }}
        >
            <Toolbar>
                <IconButton color="inherit" aria-label="open drawer" onClick={handleMenuClick} edge="start">
                    <MenuIcon />
                </IconButton>

                <Menu
                    anchorEl={anchorEl}
                    open={Boolean(anchorEl)}
                    onClose={handleMenuClose}
                    anchorOrigin={{ vertical: "top", horizontal: "left" }}
                    transformOrigin={{ vertical: "top", horizontal: "left" }}
                    sx={{
                        top: "41px !important",
                        left: "-16px !important",
                        position: "absolute !important",
                    }}
                >
                    {/* Home */}
                    <MenuItem onClick={() => { router.push("/"); handleMenuClose(); }}>
                        <ListItemIcon><HomeIcon /></ListItemIcon>
                        <ListItemText primary="Home" />
                    </MenuItem>

                    {/* Dashboard / Bookings / Notifications */}
                    {tabItems.map((item) => (
                        <MenuItem
                            key={item.text}
                            onClick={() => { handleTabClick(item.text); handleMenuClose(); }}
                        >
                            <ListItemIcon>{item.icon}</ListItemIcon>
                            <ListItemText primary={item.text} />
                        </MenuItem>
                    ))}

                    {/* Logout */}
                    <MenuItem onClick={() => { handleLogout(); handleMenuClose(); }}>
                        <ListItemIcon><LogoutIcon /></ListItemIcon>
                        <ListItemText primary="Logout" />
                    </MenuItem>
                </Menu>

                <Typography
                    variant="h4"
                    noWrap
                    component="div"
                    sx={{ fontSize: "1.8rem", fontWeight: "bold", marginLeft: "8px" }}
                >
                    {t("title")}
                </Typography>

                <Box sx={{ flexGrow: 1 }} />

                <IconButton edge="end" color="inherit" onClick={() => router.push("/")}>
                    <HomeIcon />
                </IconButton>
            </Toolbar>
        </AppBar>
    );
};

export default Navbar;
