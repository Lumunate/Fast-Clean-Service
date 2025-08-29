"use client";
import { Box, Typography } from "@mui/material";
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
import { useLocale, useTranslations } from "next-intl";

const AdditionalOptionsBox = ({
  color,
  selected,
  expanded,
  name,
  price,
  options = [],
  onClick,
}) => {
  const { theme } = useTheme();

  return (
    <Box>
      <AdditionalOption
        onClick={onClick}
        sx={{
          backgroundColor: selected
            ? alpha(color, 0.5)
            : theme.palette.mode === 'dark'
            ? 'transparent'
            : '#FFFFFF',
        }}
      >
        <AdditionalOptionText selected={selected}>{name}</AdditionalOptionText>
        <AdditionalOptionText variant="p">+ €{price}</AdditionalOptionText>
      </AdditionalOption>
      {expanded && options.length > 0 && (
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            gap: '4px',
            padding: '0 1.2rem',
            marginTop: '4px',
            '@media (max-width: 600px)': {
              padding: '0.5rem 1.2rem',
              gap: 0,
            },
          }}
        >
          {options.map((option, index) => (
            <Box
              key={index}
              sx={{
                display: 'flex',
                gap: '1rem',
                alignItems: 'center',
                padding: '0 0.5rem',
                '@media (max-width: 600px)': {
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
                    theme.palette.mode === 'dark'
                      ? 'brightness(0) invert(1)'
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
  const t = useTranslations("booking.steps.5.no_options")
  const locale = useLocale();
  const isSubscriptionPackage =
    form.formData.selectedPackageType === "Subscription Plans";
  
  // Check if there are any additional options available
  const hasAdditionalOptions = pkg?.additionalOptions && 
    Object.keys(pkg.additionalOptions)
      .filter(category => category !== 'detailing' && category !== '_id')
      .some(category => {
        const options = pkg.additionalOptions[category];
        return Array.isArray(options) && options.length > 0;
      });

  const noAddonsAvailable =
    isSubscriptionPackage || !pkg || !hasAdditionalOptions;

  const getOptionName = (option) => {
    if (!option.name) return "";
    return option.name[locale] || option.name.en || option.name.nl || "";
  };

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
              color: theme.palette.mode === 'dark' ? '#FFFFFF' : '#525252',
              fontWeight: 'regular',
              fontSize: '1.2rem',
              lineHeight: '2.4rem',
              marginBottom: '1.2rem',
              textAlign: 'center',
            }}
          >
            {t("0")}
          </Typography>
        </AdditionalContent>
      ) : (
        Object.keys(pkg.additionalOptions)
          .filter((category) => category !== 'detailing' && category !== '_id')
          .map((category, index) => {
            const categoryOptions = pkg.additionalOptions[category];
            
            // Skip categories that don't have array options or empty arrays
            if (!Array.isArray(categoryOptions) || categoryOptions.length === 0) {
              return null;
            }

            return (
              <Box key={index} sx={{ width: '100%' }}>
                <AdditionalName variant="h5">
                  {category.toUpperCase()}
                </AdditionalName>
                <AdditionalContent>
                  {categoryOptions.map((option, optionIndex) => (
                    <AdditionalOptionsBox
                      key={optionIndex}
                      name={getOptionName(option)}
                      price={option.additionalCost}
                      color={form.color}
                      options={option.options}
                      selected={form.formData.selectedAdditionalOptions?.includes(option)}
                      expanded={form.formData.expandedAdditionalOption === option}
                      onClick={() => handleClick(option)}
                    />
                  ))}
                </AdditionalContent>
              </Box>
            );
          })
      )}
    </AdditionalContainer>
  );
};

export default AdditionalOptions;