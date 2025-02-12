import React from "react";
import { Autocomplete, Box, TextField } from "@mui/material";
import { useGooglePlaces } from "../../../hooks/useGooglePlaces";
import { useTheme } from "../../../contexts/themeContext";
import { CustomFormTextField } from "../../mui/NewFormPkgs";

const LocationSearch = ({ onPlaceSelect, preSelectedPlace }) => {
  const { theme } = useTheme();
  const { inputValue, options, loading, initialized, handleInputChange, setInputValue } = useGooglePlaces();

  if (preSelectedPlace?.description) {
    console.log("preselected val");
    setInputValue(preSelectedPlace.description);
  }

  if (!initialized) {
    return <CustomFormTextField label="Loading Google Places..." disabled fullWidth variant="outlined" />;
  }

  return (
    <Autocomplete
      id="google-places-autocomplete"
      getOptionLabel={(option) => option.description || ""}
      options={options}
      autoComplete
      includeInputInList
      isOptionEqualToValue={(option, value) => option.place_id === value.place_id}
      filterSelectedOptions
      loading={loading}
      inputValue={inputValue}
      onInputChange={(event, newValue) => handleInputChange(newValue)}
      onChange={(event, newValue) => {
        onPlaceSelect?.(newValue);
        setInputValue(newValue?.description || "");
      }}
      renderInput={(params) => <TextField {...params} label="Search locations" variant="outlined" fullWidth />}
      renderOption={(props, option) => (
        <Box component="li" {...props} key={option.place_id}>
          <Box>
            <Box sx={{ fontWeight: 500 }}>{option.structured_formatting.main_text}</Box>
            <Box sx={{ fontSize: "0.875rem", color: "#666" }}>{option.structured_formatting.secondary_text}</Box>
          </Box>
        </Box>
      )}
      sx={{
        fontFamily: "Inter",
        fontSize: "0.7rem",

        "& label": {
          marginTop: '1.5rem',
          color: theme.palette.mode === "light" ? "#000" : "#fff",
          fontSize: "1rem",
          fontWeight: 400,
          lineHeight: 1.21,
          position: "relative",
          transform: "translate(0%, -30%) scale(1)",
        },

        "& label.Mui-focused": {
          color: theme.palette.primary.contrastText,
        },

        "& .MuiOutlinedInput-root": {
          padding: '5px',
          borderRadius: "6px",
          fontSize: "0.9rem",
          boxShadow: "0 2px 11.9px 0 rgba(0, 0, 0, 0.25)",
          backgroundColor: theme.palette.mode === "dark" ? "rgba(255, 255, 255, 0.1)" : "white",
          backdropFilter: theme.palette.mode === "dark" ? "blur(8px)" : "none",

          "& fieldset *": {
            display: 'hidden',
            border: 'none'
          },
        },
      }}
    />
  );
};

export default LocationSearch;
