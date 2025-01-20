// PackageTabs.jsx
import React from "react";
import { StyledTabs, StyledTab } from "./StyledComponents";

const PackageTabs = ({ tabValue, handleTabChange }) => {
    return (
        <StyledTabs
            value={tabValue}
            onChange={handleTabChange}
            centered
            textColor="primary"
            indicatorColor="primary"
        >
            <StyledTab label="Service Packages" />
            <StyledTab label="Subscription Packages" />
        </StyledTabs>
    );
};

export default PackageTabs;
