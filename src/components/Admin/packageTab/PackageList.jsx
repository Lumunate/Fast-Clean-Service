// PackageList.jsx
import React from "react";
import { Box, Typography } from "@mui/material";
import PackageAccordion from "./PackageAccordion";
import { SectionTitle, SecondaryTypography } from "./StyledComponents";

const PackageList = ({
                         packages,
                         category,
                         isSubscription,
                         handleOpenModal,
                         renderVehiclePricing,
                         renderAddOns,
                     }) => {
    return (
        <Box>
            {!isSubscription && (
                <>
                </>
            )}
            {packages.map((pkg) => (
                <PackageAccordion
                    key={pkg.id}
                    pkg={pkg}
                    category={category}
                    isSubscription={isSubscription}
                    handleOpenModal={handleOpenModal}
                    renderVehiclePricing={renderVehiclePricing}
                    renderAddOns={renderAddOns}
                />
            ))}
        </Box>
    );
};

export default PackageList;
