// PackageAccordion.jsx
import React from "react";
import {
    Accordion,
    AccordionSummary,
    AccordionDetails,
    Typography,
    Box,
    Divider,
    IconButton,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { SubSectionTitle } from "./StyledComponents";
import Image from "next/image";
import { useLocale } from "next-intl";

const PackageAccordion = ({ pkg, category, isSubscription, handleOpenModal, renderVehiclePricing, renderAddOns }) => {
    const locale = useLocale();
    const services = (pkg.packages || []).map((s) =>
        typeof s === "string" ? { nl: s, en: "" } : { nl: s.nl, en: s.en }
    );

    const displayCategory = isSubscription
        ? "Subscription"
        : category.charAt(0).toUpperCase() + category.slice(1);

    return (
        <Accordion
            key={pkg.id}
            sx={{
                marginBottom: "16px",
                borderBottom: "1px solid #E4E4E7",
                borderRadius: "0px",
                backgroundColor: "transparent",
            }}
        >
            <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                sx={{
                    padding: "12px 22px",
                }}
            >
                <Box
                    sx={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                        width: "100%",
                    }}
                >
                    <Typography sx={{ fontWeight: "bold", flexGrow: 1, fontSize: "1.8rem" }}>
                        {`${displayCategory} Package – ${
                            pkg?.name 
                        }`}
                    </Typography>
                    <Box sx={{ display: "flex", alignItems: "center", gap: "8px" }}>
                        <Box sx={{ display: "flex", flexDirection: "column", marginRight: "0.8rem", textAlign: "right" }}>
                            <Typography sx={{ fontWeight: 400, fontSize: "1.6rem" }}>{pkg.price}</Typography>
                            <Typography sx={{ fontWeight: 400, fontSize: "1.6rem" }}>{pkg.duration}</Typography>
                        </Box>
                        <IconButton
                            sx={{ color: "#1976d2" }}
                            onClick={(e) => {
                                e.stopPropagation();
                                handleOpenModal(pkg, isSubscription);
                            }}
                        >
                            <Image src="/edit-icon.svg" alt="Edit Icon" width={50} height={50} />
                        </IconButton>
                    </Box>
                </Box>
            </AccordionSummary>
            <AccordionDetails sx={{ padding: "2.2rem" }}>
                <Typography
                    sx={{ marginBottom: "16px", fontStyle: "normal", fontSize: "1.6rem" }}
                    color="text.secondary"
                >
                    {pkg.description[locale]}
                </Typography>

                <Divider sx={{ marginBottom: "16px" }} />

                {pkg.vehicleOptions && renderVehiclePricing(pkg.vehicleOptions)}

                {services.length > 0 && (
                    <Box sx={{ marginBottom: "16px" }}>
                        <SubSectionTitle variant="subtitle1">
                            Included Services
                        </SubSectionTitle>
                        <Box component="ul" sx={{ listStyle: "disc", paddingLeft: "20px" }}>
                            {services.map((svc, idx) => (
                                <li key={idx} style={{ fontSize: "1.6rem" }}>
                                    {svc[locale]}
                                </li>
                            ))}
                        </Box>
                    </Box>
                )}

                {pkg.additionalOptions && renderAddOns(pkg.additionalOptions)}
            </AccordionDetails>
        </Accordion>
    );
};

export default PackageAccordion;
