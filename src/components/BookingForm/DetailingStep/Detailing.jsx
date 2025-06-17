"use client";
import { Box, Typography } from "@mui/material";
import useMultiStepForm from "../../../hooks/useMultiStepForm";
import { useValidation } from "../../../contexts/ValidationContext";
import CheckMark from "../../../../public/bookingFormIcons/CheckMark.svg";
import Image from "next/image";
import { calculateFilter } from "../../../lib/colorFilters";
import {
  AdditionalContent,
  AdditionalOption,
  AdditionalOptionText,
  AdditionalContainer,
} from "../../mui/BookingFormPackages";
import { useTheme } from "../../../contexts/themeContext";
import { alpha } from "@mui/material/styles";
import { useLocale } from "next-intl";

const DetailingBox = ({ color, selected, expanded, name, nameDe, price, available, options, onClick }) => {
  const { theme } = useTheme();
    const locale = useLocale();
    const label = locale === "de" ? nameDe : name;
  return (
      <Box>
        <AdditionalOption
            onClick={onClick}
            sx={{
                width: "320px",
              backgroundColor: selected
                  ? alpha(color, 0.5)
                  : theme.palette.mode === "dark"
                      ? "transparent"
                      : "#ffffff",
            }}
        >
          <AdditionalOptionText variant="p">{label}</AdditionalOptionText>
          <AdditionalOptionText variant="p">
            {available ? `+ €${price}` : price}
          </AdditionalOptionText>
        </AdditionalOption>
        {expanded && (
            <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "8px",
                  padding: "0 1.2rem",
                    maxWidth: "300px",
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

const Detailing = () => {
  const form = useMultiStepForm();
  const { updateValidation } = useValidation();
  const selectedPackage = form.formData.selectedPackage;
  const { theme } = useTheme();
    const locale = useLocale();

  const handleClick = (optionName) => {
    const selectedOptions = form.formData.selectedDetailingOptions || [];
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
      selectedDetailingOptions: newSelectedOptions,
      expandedDetailingOption: newExpandedOption,
    });
    updateValidation(newSelectedOptions.length > 0);
  };

  return (
      <AdditionalContainer sx={{ border: `0.4px solid ${form.color}` }}>
          <AdditionalContent>
              {(!selectedPackage || !selectedPackage.additionalOptions || !selectedPackage.additionalOptions.detailing || selectedPackage.additionalOptions.detailing.length === 0) && (
                  <Typography
                      sx={{
                          color: theme.palette.mode === "dark" ? "#FFFFFF" : "#525252",
                          fontWeight: "regular",
                          fontFamily: "Unbounded",
                          fontSize: "1.2rem",
                          lineHeight: "2.4rem",
                          marginBottom: "1.2rem",
                          textAlign:'center',
                      }}
                  >
                      No Detailing Add-ons
                  </Typography>
              )}

              {selectedPackage?.additionalOptions?.detailing?.map((option, index) => (
                  <DetailingBox
                      key={index}
                      color={form.color}
                      name={option.name}
                      nameDe={option.nameDe}
                      price={option.additionalCost}
                      available={option.available}
                      options={option.options}
                      selected={form.formData.selectedDetailingOptions?.includes(option.name)}
                      expanded={form.formData.expandedDetailingOption === option.name}
                      onClick={() => handleClick(option.name)}
                  />
              ))}
          </AdditionalContent>
      </AdditionalContainer>
  );
};

export default Detailing;
