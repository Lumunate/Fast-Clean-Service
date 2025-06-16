// Page.js
"use client";

import React, { useEffect, useState } from "react";
import { Box, Typography, Divider } from "@mui/material";

// Import data, updatePackages: updateAutocarePackages
import { useAutocarePackages } from "../../../../hooks/useAutocarePackages";
import { useSubscriptionPackages } from "../../../../hooks/useSubscriptionPackages";

// Import components
import Header from "../../../../components/Admin/packageTab/Header";
import PackageTabs from "../../../../components/Admin/packageTab/PackageTabs";
import PackageList from "../../../../components/Admin/packageTab/PackageList";
import EditPackageModal from "../../../../components/Admin/packageTab/EditPackageModal";
import { Loader } from "../../../../components/mui/Loader";

// Import styled components
import {
  PageContainer,
  PackageContainer,
  SecondaryTypography,
  SubSectionTitle,
  SectionTitle,
} from "../../../../components/Admin/packageTab/StyledComponents";
import useSnackbar from "../../../../hooks/useSnackbar";

const Page = () => {
  const [tabValue, setTabValue] = useState(0); // 0: Service Packages, 1: Subscription Packages
  const [openModal, setOpenModal] = useState(false);
  const [selectedPackage, setSelectedPackage] = useState(null);
  const [isSubscription, setIsSubscription] = useState(false);
  const { openSnackbar } = useSnackbar();

  const handleTabChange = (event, newValue) => {
    setTabValue(newValue);
  };

  const handleOpenModal = (pkg, subscription = false) => {
    setSelectedPackage(pkg);
    setIsSubscription(subscription);
    setOpenModal(true);
  };

  const handleCloseModal = () => {
    setOpenModal(false);
    setSelectedPackage(null);
    setIsSubscription(false);
  };

  const handleInputChange = (field, value, index, subfield) => {
    // Implement state updates for the form fields
    // This function should update the selectedPackage state accordingly
    // Example implementation:
    setSelectedPackage((prev) => {
      if (!prev) return prev;

      const updatedPackage = { ...prev };

      if (field === "price") {
        updatedPackage.price = `€ ${value.toFixed(2)}`;
      } else if (field === "duration") {
        updatedPackage.duration = `± ${value} min.`;
      } else if (field.startsWith("addonName")) {
        const [_, addonType] = field.split("_"); // e.g., "addonPrice_interior"
        if (updatedPackage.additionalOptions && updatedPackage.additionalOptions[addonType]) {
          updatedPackage.additionalOptions[addonType][index].name = value;
        }
      } else if (field.startsWith("addonPrice")) {
        const [_, addonType] = field.split("_"); // e.g., "addonPrice_interior"
        if (updatedPackage.additionalOptions && updatedPackage.additionalOptions[addonType]) {
          updatedPackage.additionalOptions[addonType][index].additionalCost = value;
        }
      } else if (field.startsWith("addonTime")) {
        const [_, addonType] = field.split("_"); // e.g., "addonPrice_interior"
        if (updatedPackage.additionalOptions && updatedPackage.additionalOptions[addonType]) {
          updatedPackage.additionalOptions[addonType][index].additionalTime = value;
        }
      } else if (field.startsWith("basePrice") || field.startsWith("additionalCost") || field.startsWith("additionalTime")) {
        // Handle vehicle-specific pricing updates
        // Assuming 'field' is one of the vehicle fields
        const vehicleFields = ["basePrice", "additionalCost", "additionalTime"];
        const vehicleField = vehicleFields.find((f) => field.includes(f));
        if (vehicleField) {
          const vehicle = Object.keys(updatedPackage.vehicleOptions)[index];
          updatedPackage.vehicleOptions[vehicle][vehicleField] = value;
        }
      }

      return updatedPackage;
    });
  };

  const handleAddAdditionalOption = (addonType) => {
    setSelectedPackage((prev) => {
      if (!prev) return prev;

      const updatedPackage = { ...prev };

      if (!updatedPackage.additionalOptions) {
        updatedPackage.additionalOptions = {};
      }

      if (!updatedPackage.additionalOptions[addonType]) {
        updatedPackage.additionalOptions[addonType] = [];
      }

      updatedPackage.additionalOptions[addonType].push({
        name: "",
        additionalCost: 0,
      });

      return updatedPackage;
    });
  };

  const renderVehiclePricing = (vehicleOptions) => {
    if (!vehicleOptions) return null;
    return (
      <Box sx={{ marginBottom: "16px" }}>
        <SubSectionTitle>Vehicle-Specific Pricing</SubSectionTitle>
        <Box component="ul" sx={{ listStyle: "none", paddingLeft: 0 }}>
          {Object.keys(vehicleOptions).map((vehicle) => (
            <li key={vehicle} style={{ display: "flex", justifyContent: "space-between", marginBottom: "8px" }}>
              <Typography sx={{ fontWeight: 400, fontSize: "1.6rem" }}>{vehicle}</Typography>
              <Typography sx={{ fontWeight: 600, fontSize: "1.6rem" }}>
                €{vehicleOptions[vehicle].basePrice.toFixed(2)}
                {vehicleOptions[vehicle].additionalCost !== 0 && (
                  <span> + €{vehicleOptions[vehicle].additionalCost.toFixed(2)}</span>
                )}
                {vehicleOptions[vehicle].additionalTime !== 0 && <span> (± {vehicleOptions[vehicle].additionalTime} min.)</span>}
              </Typography>
            </li>
          ))}
        </Box>
      </Box>
    );
  };

  const renderAddOns = (additionalOptions) => {
    if (!additionalOptions) return null;
    const { interior, exterior, detailing } = additionalOptions;

    const renderSection = (title, items, type) => (
      <Box sx={{ marginBottom: "16px" }}>
        <SubSectionTitle>{title}</SubSectionTitle>
        {items?.length > 0 ? (
          <Box component="ul" sx={{ listStyle: "none", paddingLeft: 0 }}>
            {items.map((item, idx) => (
              <li
                key={idx}
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  marginBottom: "8px",
                }}
              >
                <Typography sx={{ fontWeight: 400, fontSize: "1.6rem" }}>{item.name}</Typography>
                <Typography sx={{ fontWeight: 600, fontSize: "1.6rem" }}>
                  {typeof item.additionalCost === "number" ? `€${item.additionalCost}` : item.additionalCost}
                </Typography>
              </li>
            ))}
          </Box>
        ) : (
          <Typography color="text.secondary" sx={{ fontSize: "1.6rem" }}>
            No {title.toLowerCase()} available.
          </Typography>
        )}
      </Box>
    );

    return (
      <Box>
        <SubSectionTitle>Add-Ons</SubSectionTitle>
        {renderSection("Interior Add-Ons", interior, "interior")}
        {renderSection("Exterior Add-Ons", exterior, "exterior")}
        {renderSection("Detailing Options", detailing, "detailing")}
      </Box>
    );
  };

  const { packages, fetchPackages: fetchAutocarePackages, updatePackage: updateAutocarePackages } = useAutocarePackages();
  const {
    packages: subscriptionPackages,
    fetchPackages: fetchSubscriptionPackages,
    updatePackage: updateSubscriptionPackages,
  } = useSubscriptionPackages();

  useEffect(() => {
    fetchAutocarePackages();
    fetchSubscriptionPackages();
  }, [fetchAutocarePackages, fetchSubscriptionPackages]);

  if (!packages || !subscriptionPackages) {
    return <Loader />;
  }

  const autocarePackages = packages?.packages;
  console.log("autocarePackages>>>>>>>>:", autocarePackages)

  const handleSubmit = async () => {
    try {
      if (tabValue === 0) {
        await updateAutocarePackages(selectedPackage._id, selectedPackage);
      } else {
        await updateSubscriptionPackages(selectedPackage._id, selectedPackage);
      }

      handleCloseModal();
    } catch (error) {
      console.log(error);
      openSnackbar("Failed to update package", 5000);
    }
  };

  return (
    <PageContainer>
      <Header />

      <PackageTabs tabValue={tabValue} handleTabChange={handleTabChange} />

      <PackageContainer>
        {tabValue === 0 && (
          <Box>
            <SectionTitle>Service Packages</SectionTitle>
            <SecondaryTypography>Manage your service packages, pricing structure, and add-ons</SecondaryTypography>

            {Object.entries(autocarePackages)
              .filter(([k, v]) => k !== "_id" && k !== "__v")
              .map(([category, packages]) => (
                <Box key={category} sx={{ marginBottom: "16px" }}>
                  <PackageList
                    packages={packages}
                    category={category}
                    isSubscription={false}
                    handleOpenModal={handleOpenModal}
                    renderVehiclePricing={renderVehiclePricing}
                    renderAddOns={renderAddOns}
                  />
                </Box>
              ))}
          </Box>
        )}

        {tabValue === 1 && (
          <Box>
            <SectionTitle variant="h5">Subscription Packages</SectionTitle>
            <SecondaryTypography>Manage your subscription packages and pricing</SecondaryTypography>

            <PackageList
              packages={subscriptionPackages}
              category="Subscription"
              isSubscription={true}
              handleOpenModal={handleOpenModal}
              renderVehiclePricing={renderVehiclePricing}
              renderAddOns={renderAddOns}
            />
          </Box>
        )}
      </PackageContainer>

      <EditPackageModal
        open={openModal}
        handleClose={handleCloseModal}
        selectedPackage={selectedPackage}
        isSubscription={isSubscription}
        handleInputChange={handleInputChange}
        handleAddAdditionalOption={handleAddAdditionalOption}
        handleSubmit={handleSubmit}
      />
    </PageContainer>
  );
};

export default Page;
