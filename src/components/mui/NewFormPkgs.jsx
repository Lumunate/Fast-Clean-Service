import {Box, Button, FormControl, InputLabel, MenuItem, Select, styled, TextField } from "@mui/material";
import { DateField, DatePicker } from "@mui/x-date-pickers";

export const CustomFormTextField = styled(TextField)(({ theme }) => ({
  fontFamily: "Inter",
  fontSize: "0.9rem",

  "& .MuiInputBase-input": {
    padding: "1rem 1.5rem",
    color: theme.palette.mode === "light" ? "#818181" : "#fff",
    fontSize: "1.8rem",
    fontWeight: "300",
  },

  "& label": {
    border: "none",
    color: theme.palette.mode === "light" ? "#818181 " : "#fff",
    fontSize: "1.4rem",
    fontWeight: 400,
    lineHeight: 1.21,
    position: "relative",
    transform: "translate(3%, 180%) scale(1)",
  },
  "& label.MuiInputLabel-shrink": {
    transform: "translate(3%, -10%) scale(1)",
  },

  "& label.Mui-focused": {
    border: "none",
    color: theme.palette.mode === "light" ? "#818181 " : "#fff",
    transform: "translate(3%, -10%) scale(1)",
  },

  "& .MuiInput-underline:after": {
    border: "none",
  },

  "& .MuiOutlinedInput-root": {
    borderRadius: "6px",
    fontSize: "0.9rem",
    boxShadow: "0 2px 11.9px 0 rgba(0, 0, 0, 0.25)",
    border: "none",
    backgroundColor: theme.palette.mode === "dark" ? "rgba(255, 255, 255, 0.1)" : "white",
    backdropFilter: theme.palette.mode === "dark" ? "blur(8px)" : "none",

    "&:hover fieldset": {
      borderColor: "transparent",
    },
    "&.Mui-focused fieldset legend": {
      display: "hidden",
    },
    "&.Mui-focused fieldset": {
      border: "none",
      borderColor: "transparent",
    },
  },

  "@media (max-width: 600px)": {
    paddingTop: "9px",
    "& .MuiInputBase-input": {
      padding: "1rem 1.5rem",
    },

    "& label": {
      fontSize: "1.4rem",
      fontWeight: 400,
      lineHeight: 1.2,
      transform: "translate(5%, 200%) scale(1)",
    },

    "& .MuiOutlinedInput-root": {
      boxShadow: "0 2px 8px rgba(0, 0, 0, 0.25)",
      borderRadius: "5px",
      fontSize: "0.85rem",
    },
  },
}));

export const CustomFormDateField = styled(DatePicker)(({ theme }) => ({
  fontFamily: "Inter",
  fontSize: "0.9rem",
  width: "100%",

  "& .MuiInputBase-input": {
    padding: "1rem 1.5rem",
    color: "#050505",
    fontSize: "0.8rem",
    fontWeight: "300",
  },

  "& label": {
    border: "none",
    color: theme.palette.primary.contrastText,
    fontSize: "1rem",
    fontWeight: 400,
    lineHeight: 1.21,
    position: "relative",
    transform: "translate(0%, -30%) scale(1)",
  },

  "& label.Mui-focused": {
    border: "none",
    color: theme.palette.primary.contrastText,
  },

  "& .MuiInput-underline:after": {
    border: "none",
  },

  "& .MuiOutlinedInput-root": {
    borderRadius: "6px",
    fontSize: "0.9rem",
    boxShadow: "0 2px 11.9px 0 rgba(0, 0, 0, 0.25)",
    border: "none",
    backgroundColor: theme.palette.mode === "dark" ? "rgba(255, 255, 255, 0.1)" : "white",
    backdropFilter: theme.palette.mode === "dark" ? "blur(8px)" : "none",

    "&:hover fieldset": {
      borderColor: "transparent",
    },
    "&.Mui-focused fieldset legend": {
      display: "hidden",
    },
    "&.Mui-focused fieldset": {
      border: "none",
      borderColor: "transparent",
    },
  },

  "@media (max-width: 600px)": {
    paddingTop: "9px",
    "& .MuiInputBase-input": {
      padding: "1rem 1.5rem",
    },

    "& label": {
      fontSize: "1rem",
      fontWeight: 400,
      lineHeight: 1.2,
      transform: "translate(0%, -20%) scale(1)",
    },

    "& .MuiOutlinedInput-root": {
      boxShadow: "0 2px 8px rgba(0, 0, 0, 0.25)",
      borderRadius: "5px",
      fontSize: "0.85rem",
    },
  },
}));

export const CustomFormSelect = styled(FormControl)(({ theme }) => ({
  fontFamily: "Inter",
  fontSize: "0.9rem",
  boxShadow: "0 2px 11.9px 0 rgba(0, 0, 0, 0.5)", // Box shadow to match the input field
  borderRadius: "5px",
  backgroundColor: theme.palette.mode === "dark" ? "rgba(255, 255, 255, 0.1)" : "white",
  backdropFilter: theme.palette.mode === "dark" ? "blur(8px)" : "none",
  border: "none", // No border for a cleaner look

  "& .MuiInputLabel-root": {
    color: theme.palette.primary.contrastText, // Label color to match input field
    fontSize: "1rem",
    transform: "translate(0%, -30%) scale(1)", // Label transform for consistency
  },
  "& .MuiInputLabel-root.Mui-focused": {
    color: theme.palette.primary.contrastText, // Label color when focused
  },

  "& .MuiSelect-select": {
    padding: "0.8rem 1.35rem", // Match padding with input fields
    color: "#050505", // Match text color with input field
    fontFamily: "Inter",
  },

  "& .MuiOutlinedInput-root": {
    "& fieldset": {
      border: "none",
    },
    "&:hover fieldset": {
      borderColor: "transparent",
    },
    "&.Mui-focused fieldset": {
      border: "none",
    },
  },
}));

export const CustomFormButton = styled(Button)(({ theme }) => ({
  marginTop: 3,
  marginBottom: 2,
  padding: "12px 48px",
  fontSize: "1.8rem",
  color: "white",
  borderRadius: "50px",
  backgroundColor: theme.palette.primary.accent,
  ":hover": {
    backgroundColor: theme.palette.primary.accent2,
  },
}));

export const FormTwoColumn = styled(Box)(({ theme }) => ({
  display: "flex",
  gap: "2rem",
  width: "100%",
  "@media (max-width: 600px)": {
    flexDirection: "column",
    gap: "1rem",
  },
}));

export const FormContainer = styled(Box)(({ theme }) => ({
  backgroundColor: "rgba(204, 204, 204, 0.2)",
  borderRadius: theme.shape.borderRadius,
  boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
  padding: theme.spacing(4),
  zIndex: 10,

  "@media (max-width: 600px)": {
    padding: "0.5rem 0",
  },
}));

export const CustomSelect = ({ name, label, options, value, onChange, ...props }) => {
  return (
    <FormControl>
      <InputLabel id={`${name}-label`} sx={{ color: "white !important", fontSize: "1.8rem" }}>
        {label}
      </InputLabel>
      <Select
        name={name}
        labelId={`${name}-label`}
        id={name}
        value={value}
        label={label}
        onChange={(e) => {
          e.target.name = name;
          onChange(e);
        }}
        {...props}
        sx={{
          "& .MuiOutlinedInput-notchedOutline": {
            padding: "2.6rem 1rem",
            color: "white !important",
          },
          "& .MuiOutlinedInput-input": {
            color: "white !important",
            fontSize: "1.8rem",
          },
          "&:hover .MuiOutlinedInput-notchedOutline": {
            color: "white !important",
            borderColor: "primary.contrastText",
          },

          "&.Mui-focused fieldset legend": {
            fontSize: "1.4em !important",
          },
          "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
            color: "white !important",
            borderColor: "white !important",
          },
          "& .MuiInputLabel-root": {
            color: "white",
            padding: "2.2rem 1rem",
          },
          "& .MuiInputLabel-root.Mui-focused": {
            color: "white !important",
          },
          "& .MuiSelect-icon": {
            margin: "0.5rem 0",
            color: "primary.contrastText",
          },
          "& .MuiSelect-select": {
            color: "primary.contrastText",
          },
        }}
      >
        <MenuItem value="">
          <em>None</em>
        </MenuItem>
        {options.map((option, index) => (
          <MenuItem key={index} value={option.value}>
            {option.label}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};
