"use client";
import { useState, useEffect } from "react";
import { StyledToggleButton, StyledToggleButtonGroup } from "../mui/BookingFormPackages";
import useMultiStepForm from "../../hooks/useMultiStepForm";
import { useTranslations } from "next-intl";
import { Box, Tooltip, Typography } from "@mui/material";
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';

const ServiceToggle = () => {
    const t = useTranslations("booking");
    const { updateFormData, formData, currentStep } = useMultiStepForm();
    const [service, setService] = useState(formData.service || "Remote");
    const isDisabled = currentStep >= 8;

    useEffect(() => {
        if (formData.service && formData.service !== service) {
            setService(formData.service);
        }
    }, [formData.service, service]);

    const handleChange = (event, newService) => {
        if (!newService) return; // ignore null (deselect)
        if (newService === service) return; // already selected
        updateFormData({ service: newService });
        setService(newService);
    };


    return (
        <Box>
            <StyledToggleButtonGroup
                value={service}
                exclusive
                onChange={handleChange}
                aria-label="service type"
            >
                <StyledToggleButton value="Remote" disabled={isDisabled} aria-label="on-location service">
                    {t("toggle.0")}
                    <Tooltip title={t("toggleInfo.0")} arrow componentsProps={{
                        tooltip: {
                            sx: {
                                fontSize: "1rem",
                                padding: "10px 12px",
                            },
                        },
                    }}>
                        <InfoOutlinedIcon fontSize="small" sx={{ ml: 1, opacity: 0.6 }} />
                    </Tooltip>
                </StyledToggleButton>
                <StyledToggleButton value="Onsite" disabled={isDisabled} aria-label="onsite service">
                    {t("toggle.1")}
                    <Tooltip title={t("toggleInfo.1")} arrow componentsProps={{
                        tooltip: {
                            sx: {
                                fontSize: "1rem",
                                padding: "10px 12px",
                            },
                        },
                    }}>
                        <InfoOutlinedIcon fontSize="small" sx={{ ml: 1, opacity: 0.6 }} />
                    </Tooltip>
                </StyledToggleButton>
            </StyledToggleButtonGroup>
        </Box>
    );
};

export default ServiceToggle;
