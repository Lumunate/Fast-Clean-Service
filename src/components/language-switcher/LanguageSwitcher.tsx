"use client";

import { useState } from "react";
import { useRouter, usePathname } from "next/navigation";
import { IconButton, Menu, MenuItem } from "@mui/material";
import { GB, NL } from "country-flag-icons/react/3x2";

interface LanguageSwitcherProps {
    currentLocale: string,
    width?:string,
    height?:string
}

export default function LanguageSwitcher({ currentLocale, width = "24px", height = "24pxx" }: LanguageSwitcherProps) {
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
        const currentPath = pathname.replace(/^\/(en|nl)/, ""); // Remove existing locale prefix
        router.push(`/${locale}${currentPath}`);
        handleClose(); // Close the dropdown after switching language
    };

    return (
        <>
            {/* Circular Button with Flag */}
            <IconButton
                onClick={handleClick}
                sx={{
                    width: 'auto',
                    height: "auto",
                    borderRadius: "0px",
                    // backgroundColor: "#0070f3",
                    color: "#fff",
                    padding:'0px',
                    marginTop:'-3px',
                    
                }}
            >
                {currentLocale === "en" ? (
                   <GB style={{ width, height }} />
                ) : (
                    <NL style={{ width, height }} />
                )}
            </IconButton>

            {/* Dropdown Menu */}
            <Menu
                disableScrollLock={true}
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
                <MenuItem onClick={() => switchLanguage("nl")}>
                    <NL style={{ width: "24px", height: "24px", marginRight: "8px" }} />
                    Dutch
                </MenuItem>
                <MenuItem onClick={() => switchLanguage("en")}>
                    <GB style={{ width: "24px", height: "24px", marginRight: "8px" }} />
                    English
                </MenuItem>
            </Menu>
        </>
    );
}