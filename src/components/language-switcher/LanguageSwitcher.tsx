"use client";

import { useState } from "react";
import { useRouter, usePathname } from "next/navigation";
import { IconButton, Menu, MenuItem } from "@mui/material";
import { GB, NL } from "country-flag-icons/react/3x2";

export default function LanguageSwitcher({ currentLocale }: { currentLocale: string }) {
    const router = useRouter();
    const pathname = usePathname();
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

    const open = Boolean(anchorEl);

    const handleClick = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const switchLanguage = (locale: string) => {
        const currentPath = pathname.replace(/^\/(en|de)/, ""); // Remove existing locale prefix
        router.push(`/${locale}${currentPath}`);
        handleClose(); // Close the dropdown after switching language
    };

    return (
        <>
            {/* Circular Button with Flag */}
            <IconButton
                onClick={handleClick}
                sx={{
                    position: "fixed",
                    bottom: 20,
                    right: 20,
                    zIndex: 1000,
                    width: 50,
                    height: 50,
                    borderRadius: "50%",
                    backgroundColor: "#0070f3",
                    color: "#fff",
                    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
                    "&:hover": {
                        backgroundColor: "#005bb5",
                    },
                }}
            >
                {currentLocale === "en" ? (
                    <GB style={{ width: "30px", height: "30px" }} />
                ) : (
                    <NL style={{ width: "30px", height: "30px" }} />
                )}
            </IconButton>

            {/* Dropdown Menu */}
            <Menu
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                anchorOrigin={{
                    vertical: "top",
                    horizontal: "center",
                }}
                transformOrigin={{
                    vertical: "bottom",
                    horizontal: "center",
                }}
            >
                <MenuItem onClick={() => switchLanguage("en")}>
                    <GB style={{ width: "24px", height: "24px", marginRight: "8px" }} />
                    English
                </MenuItem>
                <MenuItem onClick={() => switchLanguage("de")}>
                    <NL style={{ width: "24px", height: "24px", marginRight: "8px" }} />
                    Deutsch
                </MenuItem>
            </Menu>
        </>
    );
}