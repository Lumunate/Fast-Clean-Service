// Header.jsx
import React from "react";
import { HeaderTypography } from "./StyledComponents";
import { useTranslations } from "next-intl";

const Header = () => {
    const t = useTranslations("admin_dashboard")
    return (
        <HeaderTypography variant="h4">
            {t("title")}
        </HeaderTypography>
    );
};

export default Header;
