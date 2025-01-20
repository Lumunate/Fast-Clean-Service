"use client";
import {Box, Typography} from "@mui/material";
import useMultiStepForm from "../../../hooks/useMultiStepForm";
import { useValidation } from "../../../contexts/ValidationContext";
import {
    AdditionalContainer,
    AdditionalContent,
    AdditionalName,
    AdditionalNoOption,
    AdditionalOption,
    AdditionalOptionText,
} from "../../mui/BookingFormPackages";
import { useTheme } from "../../../contexts/themeContext";
import Image from "next/image";
import CheckMark from "../../../../public/bookingFormIcons/CheckMark.svg";
import { calculateFilter } from "../../../lib/colorFilters";
import { alpha } from "@mui/material/styles";

const AdditionalOptionsBox = ({ color, selected, expanded, name, price, options = [], onClick }) => {
    const { theme } = useTheme();

    return (
        <Box>
            <AdditionalOption
                onClick={onClick}
                sx={{
                    backgroundColor: selected
                        ? alpha(color, 0.5)
                        : theme.palette.mode === "dark"
                            ? "transparent"
                            : "#ffffff",
                }}
            >
                <AdditionalOptionText selected={selected}>{name}</AdditionalOptionText>
                <AdditionalOptionText variant="p">+ €{price}</AdditionalOptionText>
            </AdditionalOption>
            {expanded && options.length > 0 && (
                <Box
                    sx={{
                        display: "flex",
                        flexDirection: "column",
                        gap: "4px",
                        padding: "0 1.2rem",
                        marginTop: "4px",
                        "@media (max-width: 600px)": {
                            padding: "0.5rem 1.2rem",
                            gap: 0,
                        },
                    }}
                >
                    {options.map((option, index) => (
                        <Box
                            key={index}
                            sx={{
                                display: "flex",
                                gap: "1rem",
                                alignItems: "center",
                                padding: "0 0.5rem",
                                "@media (max-width: 600px)": {
                                    padding: 0,
                                },
                            }}
                        >
                            <Image
                                src={CheckMark}
                                alt="Included Option"
                                width={12}
                                height={12}
                                style={{
                                    filter:
                                        theme.palette.mode === "dark"
                                            ? "brightness(0) invert(1)"
                                            : calculateFilter(color),
                                }}
                            />
                            <AdditionalOptionText variant="p">{option}</AdditionalOptionText>
                        </Box>
                    ))}
                </Box>
            )}
        </Box>
    );
};

const AdditionalOptions = () => {
    const form = useMultiStepForm();
    const { updateValidation } = useValidation();
    const pkg = form.formData.selectedPackage;
    const { theme } = useTheme();
    const isSubscriptionPackage = form.formData.selectedPackageType === "Subscription Plans";
    const noAddonsAvailable = isSubscriptionPackage || !pkg || Object.keys(pkg.additionalOptions).length === 0;

    const handleClick = (optionName) => {
        const selectedOptions = form.formData.selectedAdditionalOptions || [];
        let newSelectedOptions;
        let newExpandedOption;

        if (selectedOptions.includes(optionName)) {
            newSelectedOptions = selectedOptions.filter(
                (option) => option !== optionName
            );
            newExpandedOption = null;
        } else {
            newSelectedOptions = [...selectedOptions, optionName];
            newExpandedOption = optionName;
        }

        form.updateFormData({
            selectedAdditionalOptions: newSelectedOptions,
            expandedAdditionalOption: newExpandedOption,
        });
        updateValidation(newSelectedOptions.length > 0);
    };

    return (
        <AdditionalContainer sx={{ border: `0.4px solid ${form?.color}` }}>
            {noAddonsAvailable ? (
                <AdditionalContent>
                    <Typography
                        sx={{
                            color: theme.palette.mode === "dark" ? "#FFFFFF" : "#525252",
                            fontWeight: "regular",
                            fontSize: "1.2rem",
                            lineHeight: "2.4rem",
                            marginBottom: "1.2rem",
                        }}
                    >
                        No Additional Options
                    </Typography>
                </AdditionalContent>
            ) : (
                Object.keys(pkg.additionalOptions)
                    .filter((category) => category !== "detailing" && category !== "_id")
                    .map((category, index) => (
                        <Box key={index} sx={{ width: "100%" }}>
                            <AdditionalName variant="h5">
                                {category.toUpperCase()}
                            </AdditionalName>
                            <AdditionalContent>
                                {pkg.additionalOptions[category] && pkg.additionalOptions[category]?.length !== 0 ? (
                                    pkg.additionalOptions[category]?.map((option, optionIndex) => (
                                        <AdditionalOptionsBox
                                            key={optionIndex}
                                            name={option.name}
                                            price={option.additionalCost}
                                            color={form.color}
                                            options={option.options}
                                            selected={form.formData.selectedAdditionalOptions?.includes(
                                                option.name
                                            )}
                                            expanded={
                                                form.formData.expandedAdditionalOption === option.name
                                            }
                                            onClick={() => handleClick(option.name)}
                                        />
                                    ))
                                ) : (
                                    <AdditionalNoOption>No Add-ons Available</AdditionalNoOption>
                                )}
                            </AdditionalContent>
                        </Box>
                    ))
            )}
        </AdditionalContainer>
    );
};

export default AdditionalOptions;
