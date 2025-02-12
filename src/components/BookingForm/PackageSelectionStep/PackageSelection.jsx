'use client';
import { Box, Grid, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import useMultiStepForm from '../../../hooks/useMultiStepForm';
import { useTheme } from '../../../contexts/themeContext';
import { useValidation } from '../../../contexts/ValidationContext';
import { styled } from '@mui/material';
import Image from 'next/image';

import CheckMark from '../../../../public/bookingFormIcons/CheckMark.svg';
import {useTranslations} from "next-intl";

const StyledImage = styled(Image)(({}) => ({
  width: '194.4px',
  height: '104.4px',
  objectFit: 'cover',
  borderRadius: '7px',
  boxShadow: '0px 4px 9.6px rgba(0, 0, 0, 0.25)',

  '@media (max-width: 600px)': {
    padding: '0.6rem 0.6rem 0',
    width: '100%',
    objectFit: 'cover',
    height: 'auto',
    maxHeight: '9.3rem',
  },
}));

const PackageSelection = () => {
  const t = useTranslations('booking');
  const [selectedOption, setSelectedOption] = useState(null);
  const form = useMultiStepForm();
  const { theme } = useTheme();
  const { updateValidation } = useValidation();
  const packages = [
    { name: t("steps.3.options.0"), image: '/g1.jpg' },
    { name: t("steps.3.options.1"), image: '/g4.jpg' },
  ];

  useEffect(() => {
    updateValidation(!!selectedOption);
  }, [selectedOption, updateValidation]);

  const handlePackageSelect = (packageName) => {
    setSelectedOption(packageName);
    form.updateFormData({ selectedPackageType: packageName });
    form.nextStep();
  };

  return (
    <Box
      sx={{
        maxWidth: '550px',
        margin: 'auto',
        mt: 2,
        '@media (max-width: 600px)': {
          width: '100%',
          padding: '0 2rem',
        },
      }}
    >
      <Grid container spacing={1} sx={{ alignItems: 'center' }}>
        {packages.map((pkg) => (
          <Grid
            item
            xs={6}
            key={pkg.name}
            onClick={() => handlePackageSelect(pkg.name)}
          >
            <Box
              sx={{
                cursor: 'pointer',
                padding: '1rem',
                borderRadius: '10px',
                transition: 'all 0.3s ease',
                backgroundColor: theme.palette.primary.main,
                border: `${form?.formData?.selectedPackageType === pkg.name ? '2px' : '1px'} solid ${
                  form?.formData?.selectedPackageType === pkg.name
                    ? '#1C79CC'
                    : '#A5A5A5'
                }`,
                boxSizing: 'border-box',
                transformOrigin: 'center center',
                boxShadow: '0px 4px 12.3px 0px #0000002B',
                position: 'relative',

                '@media (max-width: 600px)': {
                  borderRadius: '10px',
                  padding: 0,
                  marginTop: '-1.5rem',
                  marginBottom: '9.9rem',

                  '& img': {
                    width: '100%',
                  },
                },
              }}
            >
              <Box
                sx={{
                  position: 'absolute',
                  top: -12,
                  right: -12,
                  display:
                    form?.formData?.selectedPackageType === pkg.name
                      ? 'block'
                      : 'none',
                }}
              >
                <Image
                  alt="check icon"
                  width={20}
                  height={20}
                  src={CheckMark}
                />
              </Box>
              <StyledImage
                src={pkg.image}
                alt={pkg.name}
                width={194.4}
                height={104.4}
              />
              <Typography
                variant="h4"
                sx={{
                  fontFamily: 'Unbounded',
                  fontSize: '12px',
                  fontWeight: 'light',
                  color: theme.palette.mode === 'dark' ? '#fff' : '#232E4A',
                  padding: '1rem 0',
                  textAlign: 'center',

                  '@media (max-width: 600px)': {
                    fontSize: '8px',
                    fontWeight: '300',
                    lineHeight: '0.992rem',
                    padding: '0.8rem 0',
                  },
                }}
              >
                {pkg.name}
              </Typography>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default PackageSelection;
