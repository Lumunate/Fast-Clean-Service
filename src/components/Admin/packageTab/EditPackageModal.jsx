// EditPackageModal.jsx
import React from "react";
import { Dialog, Typography, TextField, Box, Grid, IconButton } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import {
  StyledDialogTitle,
  StyledDialogContent,
  StyledDialogActions,
  SubSectionTitle,
  StyledButton,
  SaveButton,
} from "./StyledComponents";

// Helper function to format package names
const formatPackageName = (id) => {
  if (!id) return "Unknown Package";

  const words = id.split("-");

  const capitalizedWords = words.map((word) => word.charAt(0).toUpperCase() + word.slice(1));

  return `${capitalizedWords.join(" ")} Package`;
};

const EditPackageModal = ({
  open,
  handleClose,
  selectedPackage,
  isSubscription,
  handleInputChange,
  handleAddAdditionalOption,
  handleSubmit,
}) => {
  if (!selectedPackage) return null;
  console.log("this is editPackageModal:", selectedPackage)

  const displayName = formatPackageName(selectedPackage.id);

  const parseDuration = (durationStr) => {
    const num = parseInt(durationStr.replace("±", "").replace("min.", "").trim());
    return isNaN(num) ? 0 : num;
  };

  return (
    <Dialog open={open} onClose={handleClose} fullWidth maxWidth="lg">
      <StyledDialogTitle>
        <Box sx={{ display: "flex", flexDirection: "column" }}>
          <Typography sx={{ fontWeight: "bold", fontSize: "1.8rem", marginBottom: "0.5rem" }}>Edit Package</Typography>
          <Typography sx={{ fontWeight: 600, color: "#A7A5B0", fontSize: "1.4rem", marginBottom: "2rem" }}>
            Make changes to the package details, pricing, and add-ons below.
          </Typography>
        </Box>
        <IconButton onClick={handleClose}>
          <CloseIcon />
        </IconButton>
      </StyledDialogTitle>
      <StyledDialogContent dividers>
        {/* Package Name */}
        <Box sx={{ display: "flex", alignItems: "center", marginBottom: "2.5rem" }}>
          <Typography sx={{ width: "200px", fontSize: "1.6rem", fontWeight: "500" }}>Package Name:</Typography>
          <TextField
            variant="outlined"
            value={displayName}
            disabled
            fullWidth
            sx={{
              fontSize: "1.6rem",
              borderRadius: "5px",
              "& .MuiInputBase-input.Mui-disabled": {
                opacity: 1,
                WebkitTextFillColor: "#706B74",
              },
            }}
          />
        </Box>

        {/* Base Price */}
        <Box sx={{ display: "flex", alignItems: "center", marginBottom: "2.5rem" }}>
          <Typography sx={{ width: "200px", fontSize: "1.6rem", fontWeight: "500" }}>Base Price (€):</Typography>
          <TextField
            variant="outlined"
            type="number"
            inputProps={{ step: "0.01" }}
            value={parseFloat(selectedPackage.price.replace("€ ", ""))}
            onChange={(e) => handleInputChange("price", parseFloat(e.target.value))}
            fullWidth
            sx={{
              fontSize: "1.6rem",
              borderRadius: "5px",
              "& .MuiInputBase-input": {
                opacity: 1,
                WebkitTextFillColor: "#706B74",
              },
            }}
          />
        </Box>

        {/* Duration */}
        <Box sx={{ display: "flex", alignItems: "center", marginBottom: "2.5rem" }}>
          <Typography sx={{ width: "200px", fontSize: "1.6rem", fontWeight: "500" }}>Duration (min):</Typography>
          <TextField
            variant="outlined"
            type="number"
            value={parseDuration(selectedPackage.duration)}
            onChange={(e) => handleInputChange("duration", parseInt(e.target.value))}
            fullWidth
            sx={{
              fontSize: "1.6rem",
              borderRadius: "5px",
              "& .MuiInputBase-input": {
                opacity: 1,
                WebkitTextFillColor: "#706B74",
              },
            }}
          />
        </Box>

        <Box sx={{ marginBottom: "2.5rem", marginTop: "2rem" }}>
          <SubSectionTitle>Vehicle-Specific Pricing</SubSectionTitle>
          <Grid container spacing={2} sx={{ marginBottom: "1rem" }}>
            <Grid item xs={12} sm={4}>
              <Typography sx={{ fontWeight: "500", fontSize: "1.4rem" }}>Vehicle Type</Typography>
            </Grid>
            <Grid item xs={12} sm={4}>
              <Typography sx={{ fontWeight: "500", fontSize: "1.4rem" }}>Additional Price (€)</Typography>
            </Grid>
            <Grid item xs={12} sm={4}>
              <Typography sx={{ fontWeight: "500", fontSize: "1.4rem" }}>Additional Time (min)</Typography>
            </Grid>
          </Grid>
          {Object.keys(selectedPackage.vehicleOptions).map((vehicle, index) => (
            <Grid container spacing={2} key={vehicle} sx={{ marginBottom: "1.5rem" }}>
              <Grid item xs={12} sm={4}>
                <TextField
                  variant="outlined"
                  value={vehicle}
                  disabled
                  fullWidth
                  sx={{
                    fontSize: "1.6rem",
                    borderRadius: "5px",
                    "& .MuiInputBase-input.Mui-disabled": {
                      opacity: 1,
                      WebkitTextFillColor: "black",
                    },
                  }}
                />
              </Grid>
              <Grid item xs={12} sm={4}>
                <TextField
                  variant="outlined"
                  type="number"
                  value={selectedPackage.vehicleOptions[vehicle].additionalCost}
                  onChange={(e) => handleInputChange("additionalCost", parseFloat(e.target.value), index, "vehicle")}
                  fullWidth
                  sx={{
                    fontSize: "1.6rem",
                    borderRadius: "5px",
                    "& .MuiInputBase-input": {
                      opacity: 1,
                      WebkitTextFillColor: "#706B74",
                    },
                  }}
                />
              </Grid>
              <Grid item xs={12} sm={4}>
                <TextField
                  variant="outlined"
                  type="number"
                  value={selectedPackage.vehicleOptions[vehicle].additionalTime}
                  onChange={(e) => handleInputChange("additionalTime", parseInt(e.target.value), index, "vehicle")}
                  fullWidth
                  sx={{
                    fontSize: "1.6rem",
                    borderRadius: "5px",
                    "& .MuiInputBase-input": {
                      opacity: 1,
                      WebkitTextFillColor: "#706B74",
                    },
                  }}
                />
              </Grid>
            </Grid>
          ))}
        </Box>

        {/* Included Services */}
        <Box sx={{ marginBottom: "2.5rem", marginTop: "2rem" }}>
          <SubSectionTitle>Included Services</SubSectionTitle>
          {selectedPackage.packages.map((service, idx) => (
            <Box key={idx} sx={{ display: "flex", alignItems: "center", marginBottom: "1.5rem" }}>
              <TextField
                variant="outlined"
                value={service}
                fullWidth
                disabled
                sx={{
                  fontSize: "1.6rem",
                  borderRadius: "10px",
                  "& .MuiInputBase-input.Mui-disabled": {
                    opacity: 1,
                    WebkitTextFillColor: "black",
                  },
                }}
              />
            </Box>
          ))}
        </Box>

        {/* Add-Ons */}
        <Box sx={{ marginBottom: "2.5rem", marginTop: "2rem" }}>
          <SubSectionTitle>Add-Ons</SubSectionTitle>

          {/* Interior Add-Ons */}
          {selectedPackage.additionalOptions?.interior && (
            <Box sx={{ marginBottom: "2rem" }}>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  marginBottom: "2rem",
                }}
              >
                <Typography sx={{ fontWeight: "400", fontSize: "1.6rem", marginBottom: "8px" }}>Interior Add-Ons</Typography>
                <StyledButton variant="contained" onClick={() => handleAddAdditionalOption("interior")}>
                  Add Interior Add-On
                </StyledButton>
              </Box>
              <Grid container spacing={2}>
                <Grid item xs={12} sm={4}></Grid>
                <Grid item xs={12} sm={4}>
                  <Typography sx={{ fontWeight: "500", fontSize: "1.4rem", marginBottom: "1rem" }}>
                    Additional Price (€)
                  </Typography>
                </Grid>
                <Grid item xs={12} sm={4}>
                  <Typography sx={{ fontWeight: "500", fontSize: "1.4rem", marginBottom: "1rem" }}>
                    Additional Time (min)
                  </Typography>
                </Grid>
              </Grid>
              {selectedPackage.additionalOptions.interior.map((addon, idx) => (
                <Grid container spacing={2} key={idx} sx={{ marginBottom: "1.5rem" }}>
                  <Grid item xs={12} sm={4}>
                    <TextField
                      variant="outlined"
                      value={addon.name}
                      onChange={(e) => handleInputChange("addonName_interior", e.target.value, idx, "interior")}
                      fullWidth
                      sx={{
                        fontSize: "1.6rem",
                        borderRadius: "5px",
                        "& .MuiInputBase-input.Mui-disabled": {
                          opacity: 1,
                          WebkitTextFillColor: "black",
                        },
                      }}
                    />
                  </Grid>
                  <Grid item xs={12} sm={4}>
                    <TextField
                      variant="outlined"
                      type="number"
                      value={addon.additionalCost}
                      onChange={(e) => handleInputChange("addonPrice_interior", parseFloat(e.target.value), idx, "interior")}
                      fullWidth
                      sx={{
                        fontSize: "1.6rem",
                        borderRadius: "5px",
                        "& .MuiInputBase-input": {
                          opacity: 1,
                          WebkitTextFillColor: "#706B74",
                        },
                      }}
                    />
                  </Grid>
                  <Grid item xs={12} sm={4}>
                    <TextField
                      variant="outlined"
                      type="number"
                      value={addon.additionalTime || 0}
                      onChange={(e) => handleInputChange("addonTime_interior", parseInt(e.target.value), idx, "interior")}
                      fullWidth
                      sx={{
                        fontSize: "1.6rem",
                        borderRadius: "5px",
                        "& .MuiInputBase-input": {
                          opacity: 1,
                          WebkitTextFillColor: "#706B74",
                        },
                      }}
                    />
                  </Grid>
                </Grid>
              ))}
            </Box>
          )}

          {/* Exterior Add-Ons */}
          {selectedPackage.additionalOptions?.exterior && (
            <Box sx={{ marginBottom: "2rem" }}>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  marginBottom: "2rem",
                }}
              >
                <Typography sx={{ fontWeight: "400", fontSize: "1.6rem", marginBottom: "8px" }}>Exterior Add-Ons</Typography>
                <StyledButton variant="contained" onClick={() => handleAddAdditionalOption("exterior")}>
                  Add Exterior Add-On
                </StyledButton>
              </Box>
              <Grid container spacing={2}>
                <Grid item xs={12} sm={4}></Grid>
                <Grid item xs={12} sm={4}>
                  <Typography sx={{ fontWeight: "500", fontSize: "1.4rem", marginBottom: "1rem" }}>
                    Additional Price (€)
                  </Typography>
                </Grid>
                <Grid item xs={12} sm={4}>
                  <Typography sx={{ fontWeight: "500", fontSize: "1.4rem", marginBottom: "1rem" }}>
                    Additional Time (min)
                  </Typography>
                </Grid>
              </Grid>
              {selectedPackage.additionalOptions.exterior.map((addon, idx) => (
                <Grid container spacing={2} key={idx} sx={{ marginBottom: "1.5rem" }}>
                  <Grid item xs={12} sm={4}>
                    <TextField
                      variant="outlined"
                      value={addon.name}
                      onChange={(e) => handleInputChange("addonName_exterior", e.target.value, idx, "exterior")}
                      fullWidth
                      sx={{
                        fontSize: "1.6rem",
                        borderRadius: "5px",
                        "& .MuiInputBase-input.Mui-disabled": {
                          opacity: 1,
                          WebkitTextFillColor: "black",
                        },
                      }}
                    />
                  </Grid>
                  <Grid item xs={12} sm={4}>
                    <TextField
                      variant="outlined"
                      type="number"
                      value={addon.additionalCost}
                      onChange={(e) => handleInputChange("addonPrice_exterior", parseFloat(e.target.value), idx, "exterior")}
                      fullWidth
                      sx={{
                        fontSize: "1.6rem",
                        borderRadius: "5px",
                        "& .MuiInputBase-input": {
                          opacity: 1,
                          WebkitTextFillColor: "#706B74",
                        },
                      }}
                    />
                  </Grid>
                  <Grid item xs={12} sm={4}>
                    <TextField
                      variant="outlined"
                      type="number"
                      value={addon.additionalTime || 0}
                      onChange={(e) => handleInputChange("addonTime_exterior", parseInt(e.target.value), idx, "exterior")}
                      fullWidth
                      sx={{
                        fontSize: "1.6rem",
                        borderRadius: "5px",
                        "& .MuiInputBase-input": {
                          opacity: 1,
                          WebkitTextFillColor: "#706B74",
                        },
                      }}
                    />
                  </Grid>
                </Grid>
              ))}
            </Box>
          )}

          {/* Detailing Add-Ons */}
          {selectedPackage.additionalOptions?.detailing && (
            <Box sx={{ marginBottom: "2rem", marginTop: "2rem" }}>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  marginBottom: "2rem",
                }}
              >
                <Typography sx={{ fontWeight: "bold", fontSize: "1.8rem" }}>Detailing Options</Typography>
                <StyledButton variant="contained" onClick={() => handleAddAdditionalOption("detailing")}>
                  Add Detailing Option
                </StyledButton>
              </Box>
              <Grid container spacing={2}>
                <Grid item xs={12} sm={4}></Grid>
                <Grid item xs={12} sm={4}>
                  <Typography sx={{ fontWeight: "500", fontSize: "1.4rem", marginBottom: "1rem" }}>
                    Additional Price (€)
                  </Typography>
                </Grid>
                <Grid item xs={12} sm={4}>
                  <Typography sx={{ fontWeight: "500", fontSize: "1.4rem", marginBottom: "1rem" }}>
                    Additional Time (min)
                  </Typography>
                </Grid>
              </Grid>
              {selectedPackage.additionalOptions.detailing.map((addon, idx) => (
                <Grid container spacing={2} key={idx} sx={{ marginBottom: "1.5rem" }}>
                  <Grid item xs={12} sm={4}>
                    <TextField
                      variant="outlined"
                      value={addon.name}
                      onChange={(e) => handleInputChange("addonName_detailing", e.target.value, idx, "detailing")}
                      fullWidth
                      sx={{
                        fontSize: "1.6rem",
                        borderRadius: "5px",
                        "& .MuiInputBase-input.Mui-disabled": {
                          opacity: 1,
                          WebkitTextFillColor: "black",
                        },
                      }}
                    />
                  </Grid>
                  <Grid item xs={12} sm={4}>
                    <TextField
                      variant="outlined"
                      type="number"
                      value={addon.additionalCost}
                      onChange={(e) => handleInputChange("addonPrice_detailing", parseFloat(e.target.value), idx, "detailing")}
                      fullWidth
                      sx={{
                        fontSize: "1.6rem",
                        borderRadius: "5px",
                        "& .MuiInputBase-input": {
                          opacity: 1,
                          WebkitTextFillColor: "#706B74",
                        },
                      }}
                    />
                  </Grid>
                  <Grid item xs={12} sm={4}>
                    <TextField
                      variant="outlined"
                      type="number"
                      value={addon.additionalTime || 0}
                      onChange={(e) => handleInputChange("addonTime_detailing", parseInt(e.target.value), idx, "detailing")}
                      fullWidth
                      sx={{
                        fontSize: "1.6rem",
                        borderRadius: "5px",
                        "& .MuiInputBase-input": {
                          opacity: 1,
                          WebkitTextFillColor: "#706B74",
                        },
                      }}
                    />
                  </Grid>
                </Grid>
              ))}
            </Box>
          )}
        </Box>
      </StyledDialogContent>
      <StyledDialogActions>
        <SaveButton variant="contained" onClick={handleSubmit}>
          Save Changes
        </SaveButton>
      </StyledDialogActions>
    </Dialog>
  );
};

export default EditPackageModal;
