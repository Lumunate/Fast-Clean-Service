import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import { useTheme } from "../../../contexts/themeContext";
import { Box, Typography } from "@mui/material";
import useMultiStepForm from "../../../hooks/useMultiStepForm";
import { packages as subscriptionPackages } from "../../../app/subscribe/data";
import { packages as autocarePackages } from "../../../app/autocare/data";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useValidation } from "../../../contexts/ValidationContext";
import CheckMark from "../../../../public/bookingFormIcons/CheckMark.svg";
import Image from "next/image";

const DetailingBox = ({ selected, name, price, available, options, onClick }) => {
  return (
    <Box>
      <Box
        onClick={onClick}
        sx={{
          display: "flex",
          padding: "0 1.2rem",
          justifyContent: "space-between",
          alignItems: "center",
          borderRadius: "6px",
          backgroundColor: selected ? "#78D53F" : "#ffffff",
          boxShadow: "0px 2px 11.9px rgba(0, 0, 0, 0.25)",
          cursor: "pointer",
        }}
      >
        <Typography
          variant="p"
          sx={{
            color: "#585858",
            fontWeight: "light",
            fontFamily: "Unbounded",
            fontSize: "0.8rem",
            lineHeight: "2.4rem",
          }}
        >
          {name}
        </Typography>

        <Typography
          variant="p"
          sx={{
            color: "#585858",
            fontWeight: "bold",
            fontFamily: "Unbounded",
            fontSize: "0.8rem",
            lineHeight: "2.4rem",
          }}
        >
          {available ? `+ €${price}` : price}
        </Typography>
      </Box>
      {selected && (
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: "8px",
            padding: "0 1.2rem",
          }}
        >
          {options.map((option, index) => (
            <Box
              key={index}
              sx={{
                display: "flex",
                gap: "1rem",
                alignItems: "center",
                padding: "0 1.2rem",
              }}
            >
              <Image src={CheckMark} alt="Included Option" width={12} height={12} />
              <Typography
                variant="p"
                sx={{
                  color: "#525252",
                  fontWeight: "light",
                  fontFamily: "Unbounded",
                  fontSize: "0.7rem",
                  lineHeight: "1.6rem",
                }}
              >
                {option}
              </Typography>
            </Box>
          ))}
        </Box>
      )}
    </Box>
  );
};

const Detailing = () => {
  const form = useMultiStepForm();
  const selectedPackage = form.formData.selectedPackage;
  const { updateValidation } = useValidation();

  const handleClick = (optionName) => {
    const selectedOptions = form.formData.selectedDetailingOptions || [];
    const newSelectedOptions = selectedOptions.includes(optionName)
      ? selectedOptions.filter((option) => option !== optionName)
      : [...selectedOptions, optionName];

    form.updateFormData({
      selectedDetailingOptions: newSelectedOptions,
    });
    updateValidation(newSelectedOptions.length > 0);
  };

  return (
    <Box
      sx={{
        border: "0.4px solid #38E274",
        borderRadius: "6px",
        boxShadow: "0px 4px 30.1px rgba(0, 0, 0, 0.25)",
        padding: "3.4rem 4.1rem",
        maxWidth: "700px",
        margin: "0 auto",
      }}
    >
      <Box
        sx={{
          maxWidth: "550px",
          margin: "0 auto",
        }}
      >
        <Typography
          variant="h5"
          sx={{
            color: "#000000",
            fontWeight: "regular",
            fontFamily: "Unbounded",
            fontSize: "1.8rem",
            lineHeight: "2.4rem",
            marginBottom: "1.2rem",
          }}
        >
          Detailing
        </Typography>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: "8px",
            margin: "0 auto",
          }}
        >
          {selectedPackage.additionalOptions?.detailing?.length !== 0 && (
            <Typography
              sx={{
                color: "#525252",
                fontWeight: "regular",
                fontFamily: "Unbounded",
                fontSize: "1.2rem",
                lineHeight: "2.4rem",
                marginBottom: "1.2rem",
              }}
            >
              No Detailing Add ons
            </Typography>
          )}

          {selectedPackage.additionalOptions?.detailing?.map((option, index) => (
            <DetailingBox
              key={index}
              name={option.name}
              price={option.additionalCost}
              available={option.available}
              options={option.options}
              selected={form.formData.selectedDetailingOptions?.includes(option.name)}
              onClick={() => handleClick(option.name)}
            />
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default Detailing;