"use client";
import { useState, useEffect } from "react";
import { StyledToggleButton, StyledToggleButtonGroup } from "../mui/BookingFormPackages";
import useMultiStepForm from "../../hooks/useMultiStepForm";
import {useTranslations} from "next-intl";

const ServiceToggle = () => {
    const t = useTranslations('booking');
    const { updateFormData, formData } = useMultiStepForm();
    const [service, setService] = useState(formData.service || "Remote");

    useEffect(() => {
        if (formData.service && formData.service !== service) {
            setService(formData.service);
        }
    }, [formData.service, service]);

    const handleChange = (event, newService) => {
        if (newService === service) return;

        updateFormData({ service: newService });
        setService(newService);
    };

    return (
        <StyledToggleButtonGroup
            value={service}
            exclusive
            onChange={handleChange}
            aria-label="service type"
        >
            <StyledToggleButton value="Remote" aria-label="on-location service">
                {t("toggle.0")}
            </StyledToggleButton>
            <StyledToggleButton value="Onsite" aria-label="onsite service">
                {t("toggle.1")}
            </StyledToggleButton>
        </StyledToggleButtonGroup>
    );
};

export default ServiceToggle;
