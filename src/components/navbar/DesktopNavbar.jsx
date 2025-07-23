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
import Logo from "../../../public/updatedLogo.svg";
import CustomLink from "../CustomLink";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
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
import {useTranslations} from "next-intl";
import { useRouter } from "next/navigation";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faPhoneFlip} from "@fortawesome/free-solid-svg-icons";
import { faWhatsapp, faFacebookF, faInstagram } from "@fortawesome/free-brands-svg-icons";
import { useLocale } from 'next-intl';
import LanguageSwitcher from "../language-switcher/LanguageSwitcher";
import { useLoginModal } from "../../contexts/ModalContext";

const DesktopNavbar = () => {
  const locale = useLocale();
  const router = useRouter();
  const { theme, toggleTheme } = useTheme();
  const { data: session, status: sessionStatus } = useSession();
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const anchorEl = useRef(null);
  const [userMenuOpen, setUserMenuOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [unreadCount, setUnreadCount] = useState(0);
  const dropdownRef = useRef(null);
  const userDropdownRef = useRef(null);
  const t = useTranslations("header");
    const [scrolled, setScrolled] = useState(false);
    const { openLoginModal, isLoginModalOpen, closeLoginModal } = useLoginModal();
  const [openSignup, setOpenSignup] = useState(false);

  const handleUserMenuToggle = () => {
    setUserMenuOpen((prev) => !prev);
  };

  const handleClickOutside = (event) => {
    if (dropdownRef.current && userDropdownRef.current) {
      if (!dropdownRef.current.contains(event.target)) {
        setIsServicesOpen(false);
      }
      if (!userDropdownRef.current.contains(event.target)) {
        setUserMenuOpen(false);
      }
    }
  };

  const handleServicesToggle = () => {
    setIsServicesOpen(!isServicesOpen);
  };

  const handleOpenModal = (modalType) => {
    if (modalType === "signup") {
      setOpenSignup(true);
    }
  };

  const handleLogout = async () => {
    setLoading(true);
    await signOut();
    setLoading(false);
  };

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > window.innerHeight);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

  useEffect(() => {
    if (isServicesOpen || userMenuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isServicesOpen, userMenuOpen]);

  useEffect(() => {
    const fetchNotifications = async () => {
      if (session?.user?.id) {
        try {
          const response = await fetch(`/api/notifications?userId=${session.user.id}`);
          const data = await response.json();

          if (data.success) {
            const unreadNotifications = data.notifications.filter((notification) => notification.status === "unread");
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
    <NavbarContainer style={{
        background: "linear-gradient(to bottom, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.1))",
        backdropFilter: "blur(5px)"
    }}>
      <Box sx={{ maxWidth:'1560px', width:'100%' ,justifyContent:'end', display:'flex', gap:'20px', }}>
          <CustomLink href="tel:020-2440994">
            <NavLinkButton sx={{ display:'flex', gap:'8px'}}><FontAwesomeIcon icon={faPhoneFlip} />020-2440994</NavLinkButton>
          </CustomLink>
          <CustomLink href="mailto:info@fastcleanservice.nl">
            <NavLinkButton sx={{ display:'flex', gap:'8px'}}><FontAwesomeIcon icon={faEnvelope} />info@fastcleanservice.nl</NavLinkButton>
          </CustomLink>
          <CustomLink href="https://wa.me/message/M7UOKFDWKTAUI1">
            <NavLinkButton><FontAwesomeIcon style={{fontSize:'20px'}} icon={faWhatsapp} /></NavLinkButton>
          </CustomLink>
          <CustomLink href="https://www.facebook.com/FastCleanServiceNL/">
            <NavLinkButton><FontAwesomeIcon style={{fontSize:'20px'}} icon={faFacebookF} /></NavLinkButton>
          </CustomLink>
          <CustomLink href="https://www.instagram.com/fastcleanservice/">
            <NavLinkButton><FontAwesomeIcon style={{fontSize:'20px'}} icon={faInstagram} /></NavLinkButton>
          </CustomLink>
          <LanguageSwitcher currentLocale={locale} />
      </Box>
      <NavbarInnerContainer>
        <LogoContainer>
          <CustomLink href="/">
            <LogoImage src={Logo} alt="logo" width={99} height={61} />
          </CustomLink>
        </LogoContainer>

        <NavBarLinksContainer>
          <CustomLink href="/">
            <NavLinkButton>{t("navigation.home")}</NavLinkButton>
          </CustomLink>

          <CustomLink href="/aboutus">
            <NavLinkButton>{t("navigation.about")}</NavLinkButton>
          </CustomLink>

          <NavLinkDropDownContainer ref={dropdownRef}>
            <NavLinkButton
              onClick={handleServicesToggle}
              endIcon={
                <ChevronRightIcon
                  sx={{
                    marginLeft: "0.5rem",
                    color: "#FFF",
                    transform: isServicesOpen ? "rotate(90deg)" : "rotate(0deg)", // Rotate based on state
                    transition: "transform 0.3s ease-in-out",
                  }}
                />
              }
              sx={{ zIndex: "10", fontWeight: isServicesOpen ? "bold" : "normal" }}
            >
              {t("navigation.services.title")}
              <ChevronRightIcon
                sx={{
                  marginLeft: "0.5rem",
                  color: "#FFF",
                  transform: isServicesOpen ? "translateY(2px) rotate(-90deg)" : "translateY(2px) rotate(90deg)", // Rotate based on state
                  transition: "transform 0.3s ease-in-out",
                }}
              />
            </NavLinkButton>

            {isServicesOpen && (
              <Box
                sx={{
                  position: "absolute",
                  top: { xs: "-4rem", sm: "-8rem", md: "-3.5rem", xl: "-4rem" },
                  left: { xs: "-2rem", sm: "-4rem", md: "-6rem" },
                  zIndex: 2,
                  WebkitBackdropFilter: "blur(10px)",
                  padding: { xs: "2rem", sm: "3rem", md: "3rem", xl: "4rem" },
                  borderRadius: "4px",
                  width: {
                    xs: "18rem",
                    sm: "20rem",
                    md: "23.4rem",
                    xl: "34.4rem",
                  },
                  display: "flex",
                  flexDirection: "column",
                  gap: { xs: "1.5rem", sm: "1.7rem", md: "2rem", xl: "2.7rem" },
                  paddingTop: "8rem !important",
                  backgroundColor: "rgba(35, 35, 35, 0.5)",
                  backdropFilter: "blur(10px)",
                  boxShadow: "rgba(0, 0, 0, 0.25) 0px 4px 7px 0px",
                }}
              >
                <CustomLink href="/fleet">
                  <DropDownLink onClick={() => setIsServicesOpen(false)}>{t("navigation.services.options.0")}</DropDownLink>
                </CustomLink>
                <CustomLink href="/autocare">
                  <DropDownLink onClick={() => setIsServicesOpen(false)}>{t("navigation.services.options.1")}</DropDownLink>
                </CustomLink>
                <CustomLink href="/subscribe">
                  <DropDownLink onClick={() => setIsServicesOpen(false)}>{t("navigation.services.options.2")}</DropDownLink>
                </CustomLink>
                <CustomLink href="/other-vehicles">
                  <DropDownLink onClick={() => setIsServicesOpen(false)}>{t("navigation.services.options.3")}</DropDownLink>
                </CustomLink>
                <DropDownLink
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    cursor: "not-allowed",
                    text:"12px"
                  }}
                >
                  {t("navigation.services.options.4")} <Badge sx={{ whiteSpace: "nowrap" }}>{t("navigation.services.options.5")}</Badge>
                </DropDownLink>
              </Box>
            )}
          </NavLinkDropDownContainer>

          <CustomLink href="/contact">
            <NavLinkButton>{t("navigation.contact")}</NavLinkButton>
          </CustomLink>
        </NavBarLinksContainer>

          <NavLinksContainer>
              { (sessionStatus === "authenticated" || scrolled) ? (
                  <CustomLink href="/booking">
                      <NavbarCTA>{t("buttons.book_now")}</NavbarCTA>
                  </CustomLink>
              ) : (
                  <Box
                      sx={{
                          display: "flex",
                          gap: "1rem",
                          width: "230px",
                          justifyContent: "flex-end",
                      }}
                  >
                      <Button
                          variant="outlined"
                          sx={{
                              color: "white",
                              borderColor: "white",
                              textTransform: "none",
                              borderRadius: "50px",
                              padding: "0.8rem 1.6rem",
                              fontSize: "1.4rem",
                              transition: "background-color 0.3s, color 0.3s",
                              "&:hover": {
                                  backgroundColor: "rgba(255, 255, 255, 0.2)",
                                  borderColor: "rgba(255, 255, 255, 0.7)",
                              },
                          }}
                          onClick={openLoginModal}
                      >
                          {t("buttons.login")}
                      </Button>
                      <Button
                          variant="contained"
                          sx={{
                              backgroundColor: "#1976d2",
                              color: "white",
                              borderRadius: "50px",
                              padding: "0.8rem 1.6rem",
                              textTransform: "none",
                              fontSize: "1.4rem",
                              transition: "background-color 0.3s, transform 0.3s",
                              "&:hover": {
                                  backgroundColor: "#125a9a",
                                  transform: "scale(1.05)",
                              },
                          }}
                          onClick={() => handleOpenModal("signup")}
                      >
                          {t("buttons.signup")}
                      </Button>
                  </Box>
              )}

              {sessionStatus === "authenticated" && (
                  <NavbarRightContainer>
                      <NavLinkDropDownContainer ref={userDropdownRef}>
                          <IconButton
                              onClick={handleUserMenuToggle}
                              ref={anchorEl}
                              aria-label="account of current user"
                              aria-controls="menu-appbar"
                              aria-haspopup="true"
                              sx={{ zIndex: 10 }}
                          >
                              <LogoImage
                                  src={UserIcon}
                                  alt="User Icon"
                                  width={20}
                                  height={20}
                                  style={{ objectFit: "contain" }}
                              />
                          </IconButton>

                          {userMenuOpen && (
                              <Box
                                  sx={{
                                      position: "absolute",
                                      top: { xs: "-4rem", sm: "-8rem", md: "-3.5rem", xl: "-4rem" },
                                      left: "-3rem",
                                      zIndex: 2,
                                      padding: { xs: "2rem", sm: "3rem", md: "3rem", xl: "4rem" },
                                      borderRadius: "4px",
                                      width: { xs: "31rem", sm: "34rem", md: "40.8rem", xl: "48.2rem" },
                                      display: "flex",
                                      flexDirection: "column",
                                      gap: { xs: "1.5rem", sm: "1.7rem", md: "2rem", xl: "2.7rem" },
                                      paddingTop: "10rem !important",
                                      backgroundColor: "rgba(35, 35, 35, 0.5)",
                                      backdropFilter: "blur(10px)",
                                      boxShadow: "rgba(0, 0, 0, 0.25) 0px 4px 7px 0px",
                                  }}
                              >
                                  {session.user.isAdmin && (
                                      <CustomLink href="/admin">
                                          <DropDownLink onClick={() => setIsServicesOpen(false)}>
                                              <Image
                                                  style={{ marginRight: "1rem", transform: "translateY(4px)" }}
                                                  src={Users_Plus}
                                                  alt="User Icon"
                                                  width={20}
                                                  height={20}
                                              />
                                              Admin
                                          </DropDownLink>
                                      </CustomLink>
                                  )}
                                  <CustomLink href="/customer-portal">
                                      <DropDownLink onClick={() => setUserMenuOpen(false)}>
                                          <Badge badgeContent={unreadCount} color="error" sx={{ marginRight: "1rem" }}>
                                              <MailIcon
                                                  color="primary"
                                                  sx={{
                                                      transform: "translateY(2px)",
                                                      filter: theme.palette.mode === "dark" ? "invert(1)" : "unset"
                                                  }}
                                              />
                                          </Badge>
                                          Dashboard
                                      </DropDownLink>
                                  </CustomLink>
                                  <DropDownLink onClick={handleLogout}>
                                      <LogoutIcon
                                          style={{ marginRight: "1rem", fontSize: 20, transform: "translateY(4px)" }}
                                      />
                                      Logout
                                  </DropDownLink>
                              </Box>
                          )}
                      </NavLinkDropDownContainer>
                  </NavbarRightContainer>
              )}

              <IconButton onClick={toggleTheme} sx={{ zIndex: 10, marginLeft: "2rem" }}>
                  {theme.palette.mode === "dark" ? (
                      <Image src={MoonIcon} alt="Moon Icon" width={30} height={30} style={{ objectFit: "contain" }} />
                  ) : (
                      <SunIcon sx={{ fontSize: "2rem", color: "white", cursor: "pointer" }} />
                  )}
              </IconButton>
          </NavLinksContainer>
      </NavbarInnerContainer>

        {isLoginModalOpen && <LoginModal onClose={closeLoginModal} setOpenSignup={setOpenSignup} />}
      {openSignup && <SignUpModal setOpenSignup={setOpenSignup} setOpenLogin={openLoginModal} />}
    </NavbarContainer>
  );
};

export default DesktopNavbar;
