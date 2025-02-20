import {
    AppBar,
    IconButton,
    Toolbar,
    Typography,
    Box,
    Menu,
    MenuItem,
    ListItemIcon,
    ListItemText,
    useMediaQuery
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import HomeIcon from "@mui/icons-material/Home";
import LogoutIcon from "@mui/icons-material/Logout";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import EventIcon from "@mui/icons-material/Event";
import DirectionsCarIcon from "@mui/icons-material/DirectionsCar";
import DirectionsBoatIcon from "@mui/icons-material/DirectionsBoat";
import StoreIcon from "@mui/icons-material/Store";
import CategoryIcon from "@mui/icons-material/Category";
import LocalActivityIcon from "@mui/icons-material/LocalActivity";
import DashboardIcon from "@mui/icons-material/Dashboard";

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const menuItems = [
    { text: "Dashboard", icon: <DashboardIcon />, route: "/en/admin/dashboard" },
    { text: "Bookings", icon: <EventIcon />, route: "/en/admin/booking" },
    { text: "FleetCare Pro", icon: <DirectionsCarIcon />, route: "/en/admin/fleetpro" },
    { text: "Other Vehicles Management", icon: <DirectionsBoatIcon />, route: "/en/admin/othervehicles" },
    { text: "Shop Management", icon: <StoreIcon />, route: "/en/admin/shop" },
    { text: "Package Management", icon: <CategoryIcon />, route: "/en/admin/package-management" },
    { text: "Coupon Management", icon: <LocalActivityIcon />, route: "/en/admin/coupons" },
];

const Navbar = ({ toggleDrawer, drawerOpen, handleSignOut }) => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [anchorEl, setAnchorEl] = useState(null);
    const router = useRouter();

    // Check if screen is below 600px
    const isMobile = useMediaQuery("(max-width:600px)");

    useEffect(() => {
        const handleScroll = () => {
            const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
            setIsScrolled(scrollTop > 0);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const handleMenuClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleMenuClose = () => {
        setAnchorEl(null);
    };

    const handleMenuItem = (route) => {
        router.push(route);
        handleMenuClose();
    };

    const handleLogout = () => {
        handleSignOut();
        handleMenuClose();
        router.push("/");
    };

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
                {isMobile ? (
                    // On mobile: the hamburger opens a Menu
                    <>
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
                                mt: "45px",
                                top: "-4px !important",
                                left: "-16px !important",
                                position: "absolute !important",
                            }}
                        >
                            <MenuItem onClick={() => { router.push("/"); handleMenuClose(); }}>
                                <ListItemIcon><ArrowBackIcon /></ListItemIcon>
                                <ListItemText primary="Home" />
                            </MenuItem>

                            {menuItems.map((item) => (
                                <MenuItem key={item.text} onClick={() => handleMenuItem(item.route)}>
                                    <ListItemIcon>{item.icon}</ListItemIcon>
                                    <ListItemText primary={item.text} />
                                </MenuItem>
                            ))}

                            <MenuItem onClick={handleLogout}>
                                <ListItemIcon><LogoutIcon /></ListItemIcon>
                                <ListItemText primary="Logout" />
                            </MenuItem>
                        </Menu>
                    </>
                ) : (
                    // On larger screens: show the sidebar toggle + arrow back/home icons if desired
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        onClick={toggleDrawer}
                        edge="start"
                    >
                        <MenuIcon />
                    </IconButton>
                )}
                <Box sx={{ display: "flex", alignItems: "center", flexGrow: 1, ml: 2 }}>
                    <Typography
                        variant="h4"
                        noWrap
                        component="div"
                        sx={{
                            fontSize: "1.8rem",
                            fontWeight: "bold",
                            marginLeft: "8px",
                            "@media (max-width: 600px)": { marginLeft: "0", },
                        }}
                    >
                        Admin Dashboard
                    </Typography>
                </Box>
            </Toolbar>
        </AppBar>
    );
};

export default Navbar;
