"use client";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import { useTheme } from "../../../contexts/themeContext";
import { Box, Typography } from "@mui/material";
import useMultiStepForm from "../../../hooks/useMultiStepForm";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useValidation } from "../../../contexts/ValidationContext";
import { useSubscriptionPackages } from "../../../hooks/useSubscriptionPackages";

const AdditionalOptionsBox = ({ selected, name, price, onClick }) => {
  const { theme } = useTheme();
  const color = "#00c3ff" || "#FFC107";

  const textColor = theme.palette.mode === "dark" ? "#ffffff" : theme.palette.primary.contrastText;
  const backgroundColor = selected ? theme.palette.primary.accent : theme.palette.mode === "dark" ? "#333" : "white";

  return (
    <Box
      onClick={onClick}
      sx={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: 2,
        borderRadius: 2,
        backgroundColor: backgroundColor,
        boxShadow: "1px 2px 10px #00000060",
        cursor: "pointer",
      }}
    >
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          gap: "1rem",
        }}
      >
        <FontAwesomeIcon
          icon={faCheckCircle}
          style={{
            color: selected ? "white" : color,
            marginRight: "1rem",
            transform: "translateY(2px)",
          }}
        />
        <Typography
          variant="h6"
          sx={{
            textAlign: "left !important",
            color: selected ? "white" : textColor,
            fontWeight: "bold",
          }}
        >
          Additional Cost: + €{price.toFixed(1)}
        </Typography>
      </Box>

      <Typography
        variant="h4"
        sx={{
          textAlign: "left !important",
          color: selected ? "white" : textColor,
          fontWeight: "bold",
        }}
      >
        {name}
      </Typography>
    </Box>
  );
};

const AdditionalOptions = () => {
  const form = useMultiStepForm();
  const selectedPackage = form.formData.selectedPackage;
  const { updateValidation } = useValidation();

  const { packages, loading, error, fetchPackages } = useSubscriptionPackages();

  useEffect(() => {
    fetchPackages();
  }, [fetchPackages]);
  
  if(!packages) {
    return null;
  }

  const additionalOptions = packages.find((pkg) => pkg.name === selectedPackage).additionalOptions;

  const handleClick = (optionName) => {
    const selectedOptions = form.formData.selectedAdditionalOptions || [];
    const newSelectedOptions = selectedOptions.includes(optionName)
      ? selectedOptions.filter((option) => option !== optionName)
      : [...selectedOptions, optionName];

    form.updateFormData({
      selectedAdditionalOptions: newSelectedOptions,
    });
    updateValidation(newSelectedOptions.length > 0);
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: "16px",
      }}
    >
      {additionalOptions.map((option, index) => (
        <AdditionalOptionsBox
          key={index}
          name={option.option}
          price={option.additionalCost}
          selected={form.formData.selectedAdditionalOptions?.includes(option.option)}
          onClick={() => handleClick(option.option)}
        />
      ))}
    </Box>
  );
};

export default AdditionalOptions;
