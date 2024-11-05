import React, {useRef, useState} from "react";
import {
    Box,
    Collapse,
    Divider,
    IconButton,
    List,
    ListItem,
    ListItemButton,
    ListItemText,
    SwipeableDrawer
} from "@mui/material";
import { useTheme } from "../../contexts/themeContext";
import {ExpandLess, ExpandMore} from "@mui/icons-material";
import {
    DropDownLink,
    LogoImage,
    NavbarContainer,
    NavbarCTA,
    NavbarInnerContainer,
    NavbarRightContainer, NavLinkDropDownContainer
} from "../../components/mui/navbarPkgs";
import EllipsisIcon from "../../../public/navbar/Ellipsis.svg";
import UserIcon from "../../../public/navbar/User.svg";
import Image from "next/image";
import Users_Plus from "../../../public/navbar/Users-Plus--Streamline-Tabler.svg";
import User_StreamLine from "../../../public/navbar/User--Streamline-Tabler.svg";
import Arrow_Right from "../../../public/navbar/Arrow-Right-To-Arc--Streamline-Tabler.svg";
import User_Cog from "../../../public/navbar/User-Cog--Streamline-Tabler.svg";
import SunIcon from "@mui/icons-material/WbSunny";
import MoonIcon from "../../../public/navbar/Moon.svg";
import LoginModal from "../../components/Login/LoginModal";
import SignUpModal from "../../components/SignUp/SignUpModal";

const MobileNavbar = () => {
    const { theme, toggleTheme } = useTheme();
    const [isServicesOpen, setIsServicesOpen] = useState(false);
    const anchorEl = useRef(null);
    const [userMenuOpen, setUserMenuOpen] = useState(false);

    const [drawerOpen, setDrawerOpen] = useState(false);

    const [openLogin, setOpenLogin] = useState(false);
    const [openSignup, setOpenSignup] = useState(false);

    const handleUserMenuToggle = () => {
        setUserMenuOpen((prev) => !prev);
    };

    const toggleDrawer = (open) => () => {
        setDrawerOpen(open);
    };

    const navLinks = [
        {
            label: "Home",
            href: "/",
        },
        {
            label: "About",
            href: "/aboutus",
        },
        {
            label: "Services",
            href: "/services",
            more: [
                {
                    label: "FleetCare Pro",
                    href: "/fleet",
                },
                {
                    label: "Anywhere AutoCare",
                    href: "/autocare",
                },
                {
                    label: "Subscription Plans",
                    href: "/subscribe",
                },
            ],
        },
        {
            label: "Contact",
            href: "/contact",
        },
    ];

    const NavbarDrawerList = (
        <Box sx={{ width: 300 }} role="presentation" onClick={toggleDrawer(false)}>
            <List>
                {navLinks.map((item, index) => (
                    <>
                        <ListItem key={item.label} disablePadding>
                            <ListItemButton
                                onClick={() => {
                                    if (item.more) {
                                        setIsServicesOpen(!isServicesOpen);
                                    } else {
                                        window.location.href = item.href;
                                    }
                                }}
                            >
                                <ListItemText primary={item.label} />
                                {item.more && item.more.length > 0 && <>{isServicesOpen ? <ExpandLess /> : <ExpandMore />}</>}
                            </ListItemButton>
                        </ListItem>

                        {item.more && (
                            <Collapse in={isServicesOpen} timeout="auto" unmountOnExit>
                                <List component="div" disablePadding>
                                    {item.more.map((subItem, index) => (
                                        <ListItemButton sx={{ pl: 4 }} key={subItem.label} onClick={() => (window.location.href = subItem.href)}>
                                            <ListItemText primary={subItem.label} />
                                        </ListItemButton>
                                    ))}
                                </List>
                            </Collapse>
                        )}
                    </>
                ))}
            </List>
            <Divider />
            <ListItem disablePadding>
                <ListItemButton onClick={() => (window.location.href = "/booking")}>
                    <NavbarCTA sx={{ marginLeft: "0 !important" }}>Book Now</NavbarCTA>
                </ListItemButton>
            </ListItem>
        </Box>
    );

    return (
        <NavbarContainer>
            <NavbarInnerContainer>
                <IconButton
                    onClick={toggleDrawer(true)}
                    ref={null}
                    aria-label="account of current user"
                    aria-controls="menu-appbar"
                    aria-haspopup="true"
                    sx={{
                        zIndex: "10",
                    }}
                >
                    <LogoImage
                        src={EllipsisIcon}
                        alt="User Icon"
                        width={15}
                        height={15}
                        style={{ objectFit: "contain", filter: "invert(1)" }}
                    />
                </IconButton>

                <NavbarRightContainer>
                    <NavLinkDropDownContainer>
                        <IconButton
                            onClick={handleUserMenuToggle}
                            ref={anchorEl}
                            aria-label="account of current user"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            sx={{
                                zIndex: "10",
                            }}
                        >
                            <LogoImage src={UserIcon} alt="User Icon" width={15} height={15} style={{ objectFit: "contain" }} />
                        </IconButton>

                        <SwipeableDrawer open={drawerOpen} onOpen={toggleDrawer(true)} onClose={toggleDrawer(false)}>
                            {NavbarDrawerList}
                        </SwipeableDrawer>

                        {userMenuOpen && (
                            <Box
                                sx={{
                                    position: "absolute",
                                    top: "-4rem",
                                    right: "-9rem",
                                    zIndex: 2,
                                    backgroundColor: "rgba(35, 35, 35, 0.4)",
                                    padding: { xs: "2rem", sm: "3rem", md: "3rem", xl: "4rem" },
                                    borderRadius: "4px",
                                    backdropFilter: "blur(4px)",
                                    border: "0.01px solid #fff",
                                    width: {
                                        xs: "20rem",
                                        sm: "24rem",
                                    },
                                    display: "flex",
                                    flexDirection: "column",
                                    gap: { xs: "1.5rem", sm: "1.7rem", md: "2rem", xl: "2.7rem" },
                                    paddingTop: "8rem !important",
                                }}
                            >
                                <DropDownLink
                                    onClick={() => {
                                        window.location.href = "/admin";
                                        setIsServicesOpen(false);
                                    }}
                                >
                                    <Image style={{ marginRight: "1rem" }} src={Users_Plus} alt="User Icon" width={20} height={20} />
                                    Admin
                                </DropDownLink>
                                <DropDownLink
                                    onClick={() => {
                                        window.location.href = "/customer-portal";
                                        setIsServicesOpen(false);
                                    }}
                                >
                                    <Image style={{ marginRight: "1rem" }} src={User_StreamLine} alt="User Icon" width={20} height={20} />
                                    Customer
                                </DropDownLink>
                                <DropDownLink
                                    onClick={() => {
                                        setOpenLogin(true);
                                        setIsUserOpen(false);
                                    }}
                                >
                                    <Image style={{ marginRight: "1rem" }} src={Arrow_Right} alt="User Icon" width={20} height={20} />
                                    Login
                                </DropDownLink>
                                <DropDownLink
                                    onClick={() => {
                                        setOpenSignup(true);
                                        setIsUserOpen(false);
                                    }}
                                >
                                    <Image style={{ marginRight: "1rem" }} src={User_Cog} alt="User Icon" width={20} height={20} />
                                    Signup
                                </DropDownLink>
                            </Box>
                        )}
                    </NavLinkDropDownContainer>
                    <IconButton onClick={toggleTheme} sx={{ zIndex: 10, marginLeft: "2rem" }}>
                        {theme.palette.mode === "dark" ? (
                            <SunIcon sx={{ fontSize: "2rem", color: "white", cursor: "pointer" }} />
                        ) : (
                            <Image src={MoonIcon} alt="Moon Icon" width={21} height={21} style={{ objectFit: "contain" }} />
                        )}
                    </IconButton>
                </NavbarRightContainer>
            </NavbarInnerContainer>

            {openLogin && <LoginModal setOpenLogin={setOpenLogin} />}
            {openSignup && <SignUpModal setOpenSignup={setOpenSignup} />}
        </NavbarContainer>
    );
};

export default MobileNavbar;