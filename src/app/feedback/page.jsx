import React from "react";
import { Box, Grid } from "@mui/material";
import {
  FeedbackContainer,
  FeedbackHeadingTypography,
  FeedbackParaTypography,
} from "./feedback.style";
import FeedbackForm from "../../components/feedback/FeedbackForm";

export default function FeedbackPage() {
  return (
    <FeedbackContainer>
      <Grid
        container
        columns={24}
        sx={{ px: { xs: "0", md: "40px" }, mx: "auto" }}
      >
        <Grid xs={24} sx={{ position: "relative" }}>
          <FeedbackHeadingTypography>
            Your Feedback Matters!
          </FeedbackHeadingTypography>
          <FeedbackParaTypography variant="body1">
            Leave Your Review and tell us how we helped you!
          </FeedbackParaTypography>
        </Grid>

        <Grid xs={24}>
          <Box sx={{ maxWidth: "832px", mx: "auto" }}>
            <FeedbackForm />
          </Box>
        </Grid>
      </Grid>
    </FeedbackContainer>
  );
}
