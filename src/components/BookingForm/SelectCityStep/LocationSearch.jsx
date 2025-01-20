import React from "react";
import { Autocomplete, Box, TextField } from "@mui/material";
import { useGooglePlaces } from "../../../hooks/useGooglePlaces";

const LocationSearch = ({ onPlaceSelect, preSelectedPlace }) => {
  const { inputValue, options, loading, initialized, handleInputChange, setInputValue } = useGooglePlaces();

  if (preSelectedPlace?.description) {
    setInputValue(preSelectedPlace.description);
  }

  if (!initialized) {
    return <TextField label="Loading Google Places..." disabled fullWidth variant="outlined" />;
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
    />
  );
};

export default LocationSearch;
