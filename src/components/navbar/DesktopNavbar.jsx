// components/navbar/DesktopNavbar.js
'use client';

import { signOut, useSession } from "next-auth/react";
import React, { useEffect, useRef, useState } from "react";
import { Loader } from "../../components/mui/Loader";
import {
    DropDownLink,
    LogoContainer,
    LogoImage,
    NavbarContainer,
    NavbarCTA,
    NavbarInnerContainer,
    NavBarLinksContainer,
    NavbarRightContainer,
    NavLinkButton,
    NavLinkDropDownContainer,
    NavLinksContainer
} from "../../components/mui/navbarPkgs";
import Logo from "../../../public/logo.png";
import CustomLink from "../CustomLink"; // Import CustomLink instead of next/link
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import { Box, Button, IconButton } from "@mui/material";
import { useTheme } from "../../contexts/themeContext";
import Badge from "@mui/material/Badge";
import UserIcon from "../../../public/navbar/User.svg";
import Image from "next/image";
import Users_Plus from "../../../public/navbar/Users-Plus--Streamline-Tabler.svg";
import MailIcon from "@mui/icons-material/Mail";
import LogoutIcon from "@mui/icons-material/Logout";
import SunIcon from "@mui/icons-material/WbSunny";
import MoonIcon from "../../../public/navbar/Moon.svg";
import LoginModal from "../../components/Login/LoginModal";
import SignUpModal from "../../components/SignUp/SignUpModal";

const DesktopNavbar = () => {
    const { theme, toggleTheme } = useTheme();
    const { data: session, status: sessionStatus } = useSession();
    const [isServicesOpen, setIsServicesOpen] = useState(false);
    const anchorEl = useRef(null);
    const [userMenuOpen, setUserMenuOpen] = useState(false);
    const [loading, setLoading] = useState(false);
    const [unreadCount, setUnreadCount] = useState(0);

    const [openLogin, setOpenLogin] = useState(false);
    const [openSignup, setOpenSignup] = useState(false);

    const handleUserMenuToggle = () => {
        setUserMenuOpen((prev) => !prev);
    };

    const handleServicesToggle = () => {
        setIsServicesOpen(!isServicesOpen);
    };

    const handleOpenModal = (modalType) => {
        if (modalType === 'login') {
            setOpenLogin(true);
        } else if (modalType === 'signup') {
            setOpenSignup(true);
        }
    };

    const handleLogout = async () => {
        setLoading(true);
        await signOut();
        setLoading(false);
    };

    useEffect(() => {
        const fetchNotifications = async () => {
            if (session?.user?.id) {
                try {
                    const response = await fetch(`/api/notifications?userId=${session.user.id}`);
                    const data = await response.json();

                    if (data.success) {
                        const unreadNotifications = data.notifications.filter(notification => notification.status === "unread");
                        setUnreadCount(unreadNotifications.length);
                    }
                } catch (error) {
                    console.error("Failed to fetch notifications:", error);
                }
            }
        };

        fetchNotifications();
    }, [session?.user?.id]);

    if (loading) return <Loader />;

    return (
        <NavbarContainer>
            <NavbarInnerContainer>
                <LogoContainer>
                    <CustomLink href="/">
                        <LogoImage src={Logo} alt="logo" width={99} height={61} />
                    </CustomLink>
                </LogoContainer>

                <NavBarLinksContainer>
                    <CustomLink href="/">
                        <NavLinkButton>Home</NavLinkButton>
                    </CustomLink>

                    <CustomLink href="/aboutus">
                        <NavLinkButton>About</NavLinkButton>
                    </CustomLink>

                    <NavLinkDropDownContainer>
                        <NavLinkButton
                            onClick={handleServicesToggle}
                            endIcon={<ArrowDropDownIcon sx={{ marginLeft: "0.5rem", color: "#FFF" }} />}
                            sx={{ zIndex: "10" }}
                        >
                            Services
                            <ArrowDropDownIcon />
                        </NavLinkButton>

                        {isServicesOpen && (
                            <Box
                                sx={{
                                    position: "absolute",
                                    top: { xs: "-4rem", sm: "-8rem", md: "-3.5rem", xl: "-4rem" },
                                    left: { xs: "-2rem", sm: "-4rem", md: "-6rem" },
                                    zIndex: 2,
                                    backgroundColor: "rgba(35, 35, 35, 0.3)", 
                                    backdropFilter: "blur(10px)", 
                                    WebkitBackdropFilter: "blur(10px)",
                                    padding: { xs: "2rem", sm: "3rem", md: "3rem", xl: "4rem" },
                                    borderRadius: "4px",
                                    border: "0.01px solid #FFFFFF4F",
                                    width: {
                                        xs: "15rem",
                                        sm: "17rem",
                                        md: "19.4rem",
                                        xl: "23.4rem",
                                    },
                                    display: "flex",
                                    flexDirection: "column",
                                    gap: { xs: "1.5rem", sm: "1.7rem", md: "2rem", xl: "2.7rem" },
                                    paddingTop: "8rem !important",
                                }}
                            >
                                <CustomLink href="/fleet">
                                    <DropDownLink onClick={() => setIsServicesOpen(false)}>
                                        FleetCare Pro
                                    </DropDownLink>
                                </CustomLink>
                                <CustomLink href="/autocare">
                                    <DropDownLink onClick={() => setIsServicesOpen(false)}>
                                        Anywhere AutoCare
                                    </DropDownLink>
                                </CustomLink>
                                <CustomLink href="/subscribe">
                                    <DropDownLink onClick={() => setIsServicesOpen(false)}>
                                        Subscription Plans
                                    </DropDownLink>
                                </CustomLink>
                                <CustomLink href="/other-vehicles">
                                    <DropDownLink onClick={() => setIsServicesOpen(false)}>
                                        Diverse Vehicles
                                    </DropDownLink>
                                </CustomLink>
                                <DropDownLink
                                    sx={{
                                        display: "flex",
                                        justifyContent: "space-between",
                                        cursor: "not-allowed",
                                    }}
                                >
                                    Store <Badge sx={{ whiteSpace: "nowrap" }}>Coming Soon</Badge>
                                </DropDownLink>
                            </Box>
                        )}
                    </NavLinkDropDownContainer>

                    <CustomLink href="/contact">
                        <NavLinkButton>Contact</NavLinkButton>
                    </CustomLink>
                </NavBarLinksContainer>

                <NavLinksContainer>
                    {sessionStatus === "authenticated" && (
                        <CustomLink href="/booking">
                            <NavbarCTA>Book Now</NavbarCTA>
                        </CustomLink>
                    )}

                    {sessionStatus === "authenticated" ? (
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

                                {userMenuOpen && (
                                    <Box
                                        sx={{
                                            position: "absolute",
                                            top: { xs: "-4rem", sm: "-8rem", md: "-3.5rem", xl: "-4rem" },
                                            left: "-2rem",
                                            zIndex: 2,
                                            backgroundColor: "rgba(35, 35, 35, 0.9)",
                                            padding: { xs: "2rem", sm: "3rem", md: "3rem", xl: "4rem" },
                                            borderRadius: "4px",
                                            border: "0.01px solid #fff",
                                            width: {
                                                xs: "26rem",
                                                sm: "28rem",
                                                md: "35.8rem",
                                                xl: "41.2rem",
                                            },
                                            display: "flex",
                                            flexDirection: "column",
                                            gap: { xs: "1.5rem", sm: "1.7rem", md: "2rem", xl: "2.7rem" },
                                            paddingTop: "8rem !important",
                                        }}
                                    >
                                        <CustomLink href="/admin">
                                            <DropDownLink onClick={() => setIsServicesOpen(false)}>
                                                <Image style={{ marginRight: "1rem" }} src={Users_Plus} alt="User Icon" width={20} height={20} />
                                                Admin
                                            </DropDownLink>
                                        </CustomLink>
                                        <CustomLink href="/customer-portal">
                                            <DropDownLink onClick={() => setIsServicesOpen(false)}>
                                                <Badge
                                                    badgeContent={unreadCount}
                                                    color="error"
                                                    sx={{ marginRight: "1rem" }}
                                                >
                                                    <MailIcon color="primary" />
                                                </Badge>
                                                Customer
                                            </DropDownLink>
                                        </CustomLink>
                                        <DropDownLink onClick={handleLogout}>
                                            <LogoutIcon style={{ marginRight: "1rem", fontSize: 20 }} />
                                            Logout
                                        </DropDownLink>
                                    </Box>
                                )}
                            </NavLinkDropDownContainer>
                        </NavbarRightContainer>
                    ) : (
                        <Box
                            sx={{
                                display: 'flex',
                                gap: '1rem',
                                width: '200px',
                            }}>
                            <Button
                                variant="outlined"
                                sx={{
                                    color: 'white',
                                    borderColor: 'white',
                                    textTransform: 'none',
                                    borderRadius: '20px',
                                    padding: '0.5rem 1.5rem',
                                    transition: 'background-color 0.3s, color 0.3s',
                                    '&:hover': {
                                        backgroundColor: 'rgba(255, 255, 255, 0.2)',
                                        borderColor: 'rgba(255, 255, 255, 0.7)'
                                    },
                                }}
                                onClick={() => handleOpenModal('login')}
                            >
                                Log In
                            </Button>
                            <Button
                                variant="contained"
                                sx={{
                                    backgroundColor: '#1976d2',
                                    color: 'white',
                                    borderRadius: '20px',
                                    padding: '0.5rem 1.5rem',
                                    textTransform: 'none',
                                    transition: 'background-color 0.3s, transform 0.3s',
                                    '&:hover': {
                                        backgroundColor: '#125a9a',
                                        transform: 'scale(1.05)',
                                    },
                                }}
                                onClick={() => handleOpenModal('signup')}
                            >
                                Sign Up
                            </Button>
                        </Box>
                    )}
                    <IconButton onClick={toggleTheme} sx={{ zIndex: 10, marginLeft: "2rem" }}>
                        {theme.palette.mode === "dark" ? (
                            <SunIcon sx={{ fontSize: "2rem", color: "white", cursor: "pointer" }} />
                        ) : (
                            <Image src={MoonIcon} alt="Moon Icon" width={21} height={21} style={{ objectFit: "contain" }} />
                        )}
                    </IconButton>
                </NavLinksContainer>
            </NavbarInnerContainer>

            {openLogin && <LoginModal setOpenLogin={setOpenLogin} setOpenSignup={setOpenSignup} />}
            {openSignup && <SignUpModal setOpenSignup={setOpenSignup} setOpenLogin={setOpenLogin} />}
        </NavbarContainer>
    );
};

export default DesktopNavbar;
