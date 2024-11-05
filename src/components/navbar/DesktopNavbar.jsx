import {useTheme} from "@/contexts/themeContext";
import {signOut, useSession} from "next-auth/react";
import React, {useRef, useState} from "react";
import {Loader} from "@/components/mui/Loader";
import {
    DropDownLink,
    LogoContainer,
    LogoImage,
    NavbarContainer, NavbarCTA,
    NavbarInnerContainer,
    NavBarLinksContainer, NavbarRightContainer, NavLinkButton, NavLinkDropDownContainer, NavLinksContainer
} from "@/components/mui/navbarPkgs";
import Logo from "../../../public/logo.png";
import Link from "next/link";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import {Box, Button, IconButton} from "@mui/material";
import Badge from "@mui/material/Badge";
import UserIcon from "../../../public/navbar/User.svg";
import Image from "next/image";
import Users_Plus from "../../../public/navbar/Users-Plus--Streamline-Tabler.svg";
import MailIcon from "@mui/icons-material/Mail";
import LogoutIcon from "@mui/icons-material/Logout";
import SunIcon from "@mui/icons-material/WbSunny";
import MoonIcon from "../../../public/navbar/Moon.svg";
import LoginModal from "@/components/Login/LoginModal";
import SignUpModal from "@/components/SignUp/SignUpModal";

const DesktopNavbar = () => {
    const { theme, toggleTheme } = useTheme();
    const { data: session, status: sessionStatus } = useSession();
    const [isServicesOpen, setIsServicesOpen] = useState(false);
    const anchorEl = useRef(null);
    const [userMenuOpen, setUserMenuOpen] = useState(false);
    const [loading, setLoading] = useState(false)

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

    if (loading) return <Loader />;

    return (
        <NavbarContainer>
            <NavbarInnerContainer>
                <LogoContainer>
                    <LogoImage src={Logo} alt="logo" width={99} height={61} />
                </LogoContainer>

                <NavBarLinksContainer>
                    <Link href="/" passHref>
                        <NavLinkButton>Home</NavLinkButton>
                    </Link>

                    <Link href="/aboutus" passHref>
                        <NavLinkButton>About</NavLinkButton>
                    </Link>

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
                                    backgroundColor: "rgba(35, 35, 35, 0.9)",
                                    padding: { xs: "2rem", sm: "3rem", md: "3rem", xl: "4rem" },
                                    borderRadius: "4px",
                                    border: "0.01px solid #fff",
                                    width: {
                                        xs: "15rem",
                                        sm: "17rem",
                                        md: "20.4rem",
                                        xl: "23.4rem",
                                    },
                                    display: "flex",
                                    flexDirection: "column",
                                    gap: { xs: "1.5rem", sm: "1.7rem", md: "2rem", xl: "2.7rem" },
                                    paddingTop: "8rem !important",
                                }}
                            >
                                <DropDownLink
                                    onClick={() => {
                                        window.location.href = "/fleet";
                                        setIsServicesOpen(false);
                                    }}
                                >
                                    FleetCare Pro
                                </DropDownLink>
                                <DropDownLink
                                    onClick={() => {
                                        window.location.href = "/autocare";
                                        setIsServicesOpen(false);
                                    }}
                                >
                                    Anywhere AutoCare
                                </DropDownLink>
                                <DropDownLink
                                    onClick={() => {
                                        window.location.href = "/subscribe";
                                        setIsServicesOpen(false);
                                    }}
                                >
                                    Subscription Plans
                                </DropDownLink>
                                <DropDownLink
                                    onClick={() => {
                                        window.location.href = "/other-vehicles";
                                        setIsServicesOpen(false);
                                    }}
                                >
                                    Diverse Vehicles
                                </DropDownLink>
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

                    <Link href="/contact" passHref>
                        <NavLinkButton>Contact</NavLinkButton>
                    </Link>
                </NavBarLinksContainer>

                <NavLinksContainer>
                    {sessionStatus === "authenticated" &&
                        <Link href="/booking" passHref>
                            <NavbarCTA>Book Now</NavbarCTA>
                        </Link>}

                    {sessionStatus === "authenticated" ?
                        (<NavbarRightContainer>
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
                                            <Badge
                                                badgeContent={6}
                                                color="error"
                                                sx={{ marginRight: "1rem" }}
                                            >
                                                <MailIcon color="primary" />
                                            </Badge>
                                            Customer
                                        </DropDownLink>
                                        <DropDownLink onClick={handleLogout}>
                                            <LogoutIcon style={{ marginRight: "1rem", fontSize: 20 }} />
                                            Logout
                                        </DropDownLink>
                                    </Box>
                                )}
                            </NavLinkDropDownContainer>

                        </NavbarRightContainer>)
                        : (
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