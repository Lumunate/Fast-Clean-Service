// Page.js
"use client";

import React, { useEffect, useState } from "react";
import { Box, Typography, Divider } from "@mui/material";
import { useAutocarePackages } from "../../../../hooks/useAutocarePackages";
import { useSubscriptionPackages } from "../../../../hooks/useSubscriptionPackages";
import Header from "../../../../components/Admin/packageTab/Header";
import PackageTabs from "../../../../components/Admin/packageTab/PackageTabs";
import PackageList from "../../../../components/Admin/packageTab/PackageList";
import EditPackageModal from "../../../../components/Admin/packageTab/EditPackageModal";
import { Loader } from "../../../../components/mui/Loader";
import { useLocale } from "next-intl";
import {
  PageContainer,
  PackageContainer,
  SecondaryTypography,
  SubSectionTitle,
  SectionTitle,
} from "../../../../components/Admin/packageTab/StyledComponents";
import useSnackbar from "../../../../hooks/useSnackbar";

const Page = () => {
  const [tabValue, setTabValue] = useState(0);
  const [openModal, setOpenModal] = useState(false);
  const [selectedPackage, setSelectedPackage] = useState(null);
  const [isSubscription, setIsSubscription] = useState(false);
  const { openSnackbar } = useSnackbar();
  const locale = useLocale();

  const handleTabChange = (event, newValue) => {
    setTabValue(newValue);
  };

  const handleOpenModal = (pkg, subscription = false) => {
    const normalizedServices = (pkg.packages || []).map(item => {
      if (typeof item === "string") {
        return { nl: item, en: "" };
      }
      return { nl: item.nl, en: item.en };
    });

    const normalizeOpts = (arr = []) =>
        arr.map(opt => {
          if (typeof opt.name === "string") {
            return { ...opt, name: { nl: opt.name, en: "" } };
          }
          return { ...opt, name: { nl: opt.name.nl, en: opt.name.en } };
        });

    const normalized = {
      ...pkg,
      packages: normalizedServices,
      additionalOptions: {
        interior: normalizeOpts(pkg.additionalOptions?.interior),
        exterior: normalizeOpts(pkg.additionalOptions?.exterior),
        detailing: normalizeOpts(pkg.additionalOptions?.detailing),
      },
    };

    setSelectedPackage(normalized);
    setIsSubscription(subscription);
    setOpenModal(true);
  };

  const handleCloseModal = () => {
    setOpenModal(false);
    setSelectedPackage(null);
    setIsSubscription(false);
  };

  const handleInputChange = (field, value, index, subfield) => {
    setSelectedPackage((prev) => {
      if (!prev) return prev;

      const updatedPackage = { ...prev };

      if (field === "price") {
        updatedPackage.price = `€ ${value.toFixed(2)}`;
      } else if (field === "duration") {
        updatedPackage.duration = `± ${value} min.`;
      } else if (field.startsWith("addonName")) {
      const parts = field.split("_");
      const addonType = parts[1];              // interior/exterior/detailing
      const lang = parts[2] || "nl";           // default to nl
      const opts = updatedPackage.additionalOptions?.[addonType];
      if (opts?.[index]) {
        // ensure name is an object
        let nameObj = typeof opts[index].name === "string"
            ? { nl: opts[index].name, en: "" }
            : { ...opts[index].name };

        nameObj[lang] = value;
        opts[index].name = nameObj;
      }
    } else if (field.startsWith("addonPrice")) {
        const [_, addonType] = field.split("_"); // e.g., "addonPrice_interior"
        if (
          updatedPackage.additionalOptions &&
          updatedPackage.additionalOptions[addonType]
        ) {
          updatedPackage.additionalOptions[addonType][index].additionalCost =
            value;
        }
      } else if (field.startsWith("addonTime")) {
        const [_, addonType] = field.split("_");
        if (
          updatedPackage.additionalOptions &&
          updatedPackage.additionalOptions[addonType]
        ) {
          updatedPackage.additionalOptions[addonType][index].additionalTime =
            value;
        }
      } else if (
        field.startsWith("basePrice") ||
        field.startsWith("additionalCost") ||
        field.startsWith("additionalTime")
      ) {
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
        options: [],
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
            <li
              key={vehicle}
              style={{
                display: "flex",
                justifyContent: "space-between",
                marginBottom: "8px",
              }}
            >
              <Typography sx={{ fontWeight: 400, fontSize: "1.6rem" }}>
                {vehicle}
              </Typography>

              <Typography sx={{ fontWeight: 400, fontSize: "1.6rem" }}>

                €{vehicleOptions[vehicle].basePrice.toFixed(2)}
                {vehicleOptions[vehicle].additionalCost !== 0 && (
                  <span>
                    {" "}
                    + €{vehicleOptions[vehicle].additionalCost.toFixed(2)}
                  </span>
                )}
                {vehicleOptions[vehicle].additionalTime !== 0 && (
                  <span>
                    {" "}
                    (± {vehicleOptions[vehicle].additionalTime} min.)
                  </span>
                )}
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
            {items.map((item, idx) => {
              const nameObj =
                  typeof item.name === "string"
                      ? {nl: item.name, en: ""}
                      : item.name;
              const displayName =
                  locale === "en" ? nameObj.en : nameObj.nl;

              return (
                  <li
                      key={idx}
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                        marginBottom: "8px",
                      }}
                  >
                    <Typography sx={{fontWeight: 400, fontSize: "1.6rem"}}>
                      {displayName}
                    </Typography>

                    <Typography sx={{fontWeight: 400, fontSize: "1.6rem"}}>

                      {typeof item.additionalCost === "number"
                          ? `€${item.additionalCost}`
                          : item.additionalCost}
                    </Typography>
                  </li>
              );
            })}
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

  const {
    packages,
    fetchPackages: fetchAutocarePackages,
    updatePackage: updateAutocarePackages,
  } = useAutocarePackages();
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

  const normalizePackage = (pkg) => {
    const services = (pkg.packages || []).map((s) =>
        typeof s === "string" ? { nl: s, en: "" } : { nl: s.nl, en: s.en }
    );

    const normalizeOpts = (arr = []) =>
        arr.map((o) => ({
          ...o,
          name:
              typeof o.name === "string"
                  ? { nl: o.name, en: "" }
                  : { nl: o.name.nl, en: o.name.en },
        }));

    return {
      ...pkg,
      packages: services,
      additionalOptions: {
        interior: normalizeOpts(pkg.additionalOptions?.interior),
        exterior: normalizeOpts(pkg.additionalOptions?.exterior),
        detailing: normalizeOpts(pkg.additionalOptions?.detailing),
      },
    };
  };

  const raw = packages.packages;
  const normalizedAuto = Object.fromEntries(
      Object.entries(raw).map(([cat, list]) => [
        cat,
        Array.isArray(list) ? list.map(normalizePackage) : [],
      ])
  );


  const autocarePackages = normalizedAuto;


  const handleSubmit = async () => {
    try {
      if (tabValue === 0) {
        await updateAutocarePackages(selectedPackage._id, selectedPackage);
      } else {
        await updateSubscriptionPackages(selectedPackage._id, selectedPackage);
      }

      handleCloseModal();
    } catch (error) {
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
            <SecondaryTypography>
              Manage your service packages, pricing structure, and add-ons
            </SecondaryTypography>

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
            <SecondaryTypography>
              Manage your subscription packages and pricing
            </SecondaryTypography>

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