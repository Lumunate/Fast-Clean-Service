import React from "react";
import { Box, Grid } from "@mui/material";
import {
  FeedbackContainer,
  FeedbackHeadingTypography,
  FeedbackParaTypography,
} from "./feedback.style";
import FeedbackForm from "../../../components/feedback/FeedbackForm";
import { useTranslations } from "next-intl";

export default function FeedbackPage() {

  const t = useTranslations("feedback")

  return (
    <FeedbackContainer>
      <Grid
        container
        columns={24}
        sx={{ px: { xs: "0", md: "40px" }, mx: "auto" }}
      >
        <Grid xs={24} sx={{ position: "relative" }}>
          <FeedbackHeadingTypography>
            {t("title")}
          </FeedbackHeadingTypography>
          <FeedbackParaTypography variant="body1">
            {t("subtitle")}
          </FeedbackParaTypography>
        </Grid>

        <Grid xs={24}>
          <Box sx={{ maxWidth: "832px", mx: "auto", width: "100%", padding: "3rem" }}>
            <FeedbackForm />
          </Box>
        </Grid>
      </Grid>
    </FeedbackContainer>
  );
}
