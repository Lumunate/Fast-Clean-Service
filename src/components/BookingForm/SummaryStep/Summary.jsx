import { Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React, { useEffect } from 'react';
import useMultiStepForm from '../../../hooks/useMultiStepForm';
import { useValidation } from '../../../contexts/ValidationContext';
import { useTheme } from '../../../contexts/themeContext';
import { SummaryHeading } from '../../mui/BookingFormPackages';
import { useAutocarePackages } from '../../../hooks/useAutocarePackages';
import {useTranslations} from "next-intl";

const Summary = () => {
    const t = useTranslations('booking');
  const { formData } = useMultiStepForm();
  const { updateValidation } = useValidation();
  updateValidation(true);
  const { theme } = useTheme();

  const { packages, loading, error, fetchPackages } = useAutocarePackages();

  useEffect(() => {
    fetchPackages();
  }, [fetchPackages]);

    useEffect(() => {
        console.log("Form Data: ", formData); // This will log the form data
    }, [formData]);

  if (!packages) {
    return null;
  }

  const getOptionPrice = (optionName, category) => {
    const { _id, __v, ...relevantPackages } = packages.packages;
    for (const pkgCategory of Object.values(relevantPackages)) {
      for (const pkg of pkgCategory) {
        const optionsList =
          pkg.additionalOptions?.[category] ||
          pkg.additionalOptions?.detailing ||
          [];
        const matchedOption = optionsList.find(
          (option) => option.name === optionName
        );
        if (matchedOption) {
          return matchedOption.additionalCost || 0;
        }
      }
    }
    return 0;
  };

  return (
    <Box
      sx={{
        padding: '3.2rem 1.6rem',
        borderRadius: '1.5rem',
        maxWidth: '700px',
        margin: 'auto',
        boxShadow: '0 2px 11.9px rgba(0, 0, 0, 0.25)',
        '@media (max-width: 600px)': {
          padding: '0.5rem 2.5rem',
          border: 'none',
          backgroundColor: 'transparent',
          boxShadow: 'none',
          top: '-4rem',
          position: 'relative',
        },
      }}
    >
      <Grid
        container
        spacing={4}
        sx={{
          '@media (max-width: 600px)': {
            backgroundColor: 'transparent',
            border: 'none',
          },
        }}
      >
        <Grid item xs={12} md={6}>
          <Box sx={{ marginBottom: '2rem', marginTop:{xs:'3rem', sm:'auto'} }}>
            <SummaryHeading>{t("steps.8.sections.0")}</SummaryHeading>
            <SummaryItem
              label={t("stepbar.1")}
              value={
                  formData?.vehicleDetails?.kenteken
                      ? formData.vehicleDetails.kenteken
                      : formData?.licensePlate || '---'
              }
            />
            <SummaryItem label={t("steps.8.sections.2")} value={formData?.carType} />
          </Box>
          <Box>
            <SummaryHeading>{t("steps.8.sections.1")}</SummaryHeading>
            {formData?.selectedAdditionalOptions?.length ? (
              formData.selectedAdditionalOptions.map((option, index) => (
                <SummaryItem
                  key={index}
                  label={option}
                  value={
                    getOptionPrice(option, 'interior') +
                    getOptionPrice(option, 'exterior')
                  }
                />
              ))
            ) : (
              <Typography
                sx={{
                  fontFamily: 'Unbounded',
                  fontSize: '0.8rem',
                  fontWeight: 300,
                  lineHeight: '2.4rem',
                }}
              >
                  {t("steps.8.sections.10")}
              </Typography>
            )}
          </Box>
        </Grid>
        <Grid item xs={12} md={6}>
          <Box sx={{ marginBottom: '2rem' }}>
            <SummaryHeading>{t("steps.8.sections.3")}</SummaryHeading>
            <SummaryItem
              label={t("steps.8.sections.4")}
              value={formData.selectedPackageType}
            />
            <SummaryItem
              label={t("steps.8.sections.5")}
              value={formData.packageType?.name}
            />
            <SummaryItem
              label={t("steps.8.sections.6")}
              value={formData.selectedPackage?.name}
            />
          </Box>
          <Box>
            <SummaryHeading>{t("steps.8.sections.7")}</SummaryHeading>
            {formData?.selectedDetailingOptions?.length ? (
              formData.selectedDetailingOptions.map((option, index) => (
                <SummaryItem
                  key={index}
                  label={option}
                  value={getOptionPrice(option, 'detailing')}
                />
              ))
            ) : (
              <Typography
                sx={{
                  fontFamily: 'Unbounded',
                  fontSize: '0.8rem',
                  fontWeight: 300,
                  lineHeight: '2.4rem',
                }}
              >
                  {t("steps.8.sections.8")}
              </Typography>
            )}
          </Box>
          <Box>
            <SummaryHeading>{t("steps.8.sections.9")}</SummaryHeading>
            <SummaryItem
              label={formData?.selectedTime?.toLocaleDateString('en-US', {
                weekday: 'long',
                day: 'numeric',
                month: 'long',
                year: 'numeric',
              })}
              value={formData?.selectedTime?.toLocaleTimeString('en-US', {
                hour: '2-digit',
                minute: '2-digit',
                hour12: true,
              })}
            />
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Summary;

const SummaryItem = ({ label, value }) => {
  const { theme } = useTheme();
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: '0.5rem',
        padding: '0 1rem',
        boxShadow: '0 2px 11.9px rgba(0, 0, 0, 0.25)',
        backgroundColor:
          theme.palette.mode === 'dark' ? 'transparent' : '#F9F9F9',
        borderRadius: '6px',
        border: '1px solid',
        borderColor: theme.palette.mode === 'dark' ? '#C5C5C5' : 'transparent',
      }}
    >
      <Typography
        sx={{
          fontFamily: 'Unbounded',
          fontSize: '0.8rem',
          fontWeight: 300,
          lineHeight: '2.4rem',
          color: theme.palette.mode === 'dark' ? '#C5C5C5' : '#212121',
        }}
      >
        {label}
      </Typography>
      <Typography
        sx={{
          fontFamily: 'Unbounded',
          fontSize: '0.8rem',
          fontWeight: 300,
          lineHeight: '2.4rem',
        }}
      >
        {typeof value === 'number' ? `€ ${value.toFixed(2)}` : value}
      </Typography>
    </Box>
  );
};
