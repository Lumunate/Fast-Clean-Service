// StyledComponents.jsx
import { styled } from "@mui/material/styles";
import { Box, Typography, Tabs, Tab, Button, IconButton, Dialog, DialogTitle, DialogContent, DialogActions, TextField, Grid } from "@mui/material";

// Container for the entire page
export const PageContainer = styled(Box)(({ theme }) => ({
    padding: "24px",
    margin: "0 auto",
}));

// Header styles
export const HeaderTypography = styled(Typography)(({ theme }) => ({
    fontWeight: "bold",
    fontSize: "4.6rem",
    marginBottom: "24px",
}));

// Tabs styles
export const StyledTabs = styled(Tabs)(({ theme }) => ({
    marginBottom: "24px",
    borderBottom: "1px solid #D3D3D3",
    "& .MuiTab-root": {
        textTransform: "none",
        fontWeight: "bold",
        fontSize: "1.6rem",
        color: "#000",
    },
    "& .MuiTab-root.Mui-selected": {
        color: "#1976d2",
    },
    "& .MuiTabs-indicator": {
        backgroundColor: "#1976d2",
        height: "4px",
    },
}));

// Tab styles
export const StyledTab = styled(Tab)(({ theme }) => ({}));

// Package container
export const PackageContainer = styled(Box)(({ theme }) => ({
    border: "1px solid #D3D3D3",
    borderRadius: "10px",
    padding: "6.4rem 3.2rem",
    margin: "3rem 0",
    backgroundColor: "#fff",
}));

// Section title
export const SectionTitle = styled(Typography)(({ theme }) => ({
    fontWeight: 500,
    fontSize: "3.6rem",
    marginBottom: "8px",
}));

// Subsection title
export const SubSectionTitle = styled(Typography)(({ theme }) => ({
    fontWeight: "bold",
    fontSize: "1.8rem",
    marginBottom: "8px",
}));

// Button styles
export const StyledButton = styled(Button)(({ theme }) => ({
    backgroundColor: "#18181A",
    color: "#B1B8B4",
    padding: "0.8rem 2.2rem",
    fontSize: "1.4rem",
    fontWeight: "400",
    borderRadius: "10px",
    "&:hover": {
        backgroundColor: "#18181A",
    },
}));

// Save button in modal
export const SaveButton = styled(Button)(({ theme }) => ({
    backgroundColor: "#18181A",
    color: "#B1B8B4",
    padding: "2rem 2.2rem",
    fontSize: "1.4rem",
    fontWeight: "400",
    "&:hover": {
        backgroundColor: "#18181A",
    },
}));

// Dialog title styles
export const StyledDialogTitle = styled(DialogTitle)(({ theme }) => ({
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "2.2rem 5rem",
}));

// Dialog content styles
export const StyledDialogContent = styled(DialogContent)(({ theme }) => ({
    padding: "2.2rem 5rem",
}));

// Dialog actions styles
export const StyledDialogActions = styled(DialogActions)(({ theme }) => ({
    padding: "2.2rem 5rem",
}));

// Grid container for vehicle pricing
export const VehicleGridContainer = styled(Grid)(({ theme }) => ({
    marginBottom: "1rem",
}));

// Flex container
export const FlexBox = styled(Box)(({ theme }) => ({
    display: "flex",
    alignItems: "center",
}));

// Typography for secondary text
export const SecondaryTypography = styled(Typography)(({ theme }) => ({
    fontSize: "1.6rem",
    fontWeight: 600,
    color: "#A7A5B0",
    marginBottom: "24px",
}));

// Other styled components can be added similarly...
