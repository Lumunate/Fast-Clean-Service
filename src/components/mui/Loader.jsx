import { Box, CircularProgress, styled } from "@mui/material";
import { useTheme } from "../../contexts/themeContext";

export const LoaderContainer = styled(Box)(({ theme }) => ({
  width: "100%",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  color: theme.palette.primary.accent,
}));

export const Loader = () => {
  const { theme } = useTheme();

  return (
    <LoaderContainer>
      {/* <CircularProgress color={theme.palette.primary.accent} />; */}
      <CircularProgress color="inherit" />
    </LoaderContainer>
  );
};