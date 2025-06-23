'use client';
import { Box, Grid, Typography, IconButton, Modal } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useTheme } from '../../../contexts/themeContext';
import { useValidation } from '../../../contexts/ValidationContext';
import { useSession } from 'next-auth/react';
import { useLoginModal } from '../../../contexts/ModalContext';
import useSnackbar from '../../../hooks/useSnackbar';
import useMultiStepForm from '../../../hooks/useMultiStepForm';
import InfoIcon from '@mui/icons-material/Info';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import StoreOutlinedIcon from '@mui/icons-material/StoreOutlined';
import CheckIcon from '../../../../public/bookingFormIcons/Check.svg';
import CheckMark from '../../../../public/bookingFormIcons/CheckMark.svg';
import Image from 'next/image';
import {useTranslations} from "next-intl";

const shakeAnimation = `
  @keyframes shake {
    0%, 100% {
      transform: translateX(0);
    }
    25% {
      transform: translateX(-2px);
    }
    50% {
      transform: translateX(2px);
    }
    75% {
      transform: translateX(-2px);
    }
  }
`;

const LocationSelection = () => {
  const { updateFormData, formData, nextStep } = useMultiStepForm(); // Use hook for form data
  const [selectedOption, setSelectedOption] = useState(
    formData.service || null
  );
  const [openModal, setOpenModal] = useState(false);
  const [modalInfo, setModalInfo] = useState('');
  const { theme } = useTheme();
  const { updateValidation } = useValidation();
    const { data: session } = useSession();
    const { openLoginModal } = useLoginModal();
    const { openSnackbar } = useSnackbar();
    const t = useTranslations('booking');

    const packages = [
        {
            name: t("steps.0.options.0"),
            icon: (
                <LocationOnOutlinedIcon
                    sx={{
                        fontSize: 30,
                        animation: 'shake 2s infinite',
                        '@media (max-width: 600px)': { fontSize: 20 },
                    }}
                />
            ),
            tagline: t("steps.0.options.2"),
            service: 'Remote',
        },
        {
            name: t("steps.0.options.1"),
            icon: (
                <StoreOutlinedIcon
                    sx={{
                        fontSize: 30,
                        animation: 'shake 2s infinite',
                        '@media (max-width: 600px)': { fontSize: 20 },
                    }}
                />
            ),
            tagline: t("steps.0.options.3"),
            service: 'Onsite',
        },
    ];


    // Update selected option when formData changes
  useEffect(() => {
    setSelectedOption(formData.service);
  }, [formData.service]);

  useEffect(() => {
    updateValidation(!!selectedOption);
  }, [selectedOption, updateValidation]);

  const handlePackageSelect = (pkg) => {
      if (!session) {
          openSnackbar("You must be logged in to proceed!");
          setTimeout(openLoginModal, 2000);
          return;
      }
    setSelectedOption(pkg.name);
    updateFormData({ service: pkg.service });
    nextStep();
  };

  const handleInfoClick = (tagline) => {
    setModalInfo(tagline);
    setOpenModal(true);
  };

  const handleClose = () => {
    setOpenModal(false);
  };

  return (
    <Box
      sx={{
        maxWidth: '550px',
        margin: 'auto',
        justifyContent: 'center',
        mt: 2,
        '@media (max-width: 600px)': {
          width: '100%',
          padding: '0 2rem',
        },
        position: 'relative',
      }}
    >
      <style>{shakeAnimation}</style>

      <Grid container spacing={1} justifyContent="center" alignItems="center">
        {packages.map((pkg) => (
          <Grid
            item
            xs={6}
            key={pkg.name}
            onClick={() => handlePackageSelect(pkg)}
          >
            <Box
              sx={{
                cursor: 'pointer',
                padding: '1rem',
                borderRadius: '10px',
                transition: 'all 0.3s ease',
                backgroundColor: theme.palette.primary.main,
                border: `${
                  selectedOption === pkg.service ? '2px' : '1px'
                } solid ${selectedOption === pkg.service ? '#1C79CC' : '#A5A5A5'}`,
                boxSizing: 'border-box',
                transformOrigin: 'center center',
                boxShadow: '0px 4px 12.3px 0px #0000002B',
                position: 'relative',
                width: '170px',
                textAlign: 'center',

                '@media (max-width: 600px)': {
                  borderRadius: '8px',
                  padding: '10px',
                  marginTop: '-1.5rem',
                  marginBottom: '3rem',
                  width: '100%',
                },
              }}
            >
              <Box
                sx={{
                  position: 'absolute',
                  right: 5,
                  top: 5,
                  display: selectedOption === pkg.service ? 'block' : 'none',
                }}
              >
                <Image
                  alt="check icon"
                  width={20}
                  height={20}
                  src={CheckMark}
                />
              </Box>
              <Box
                sx={{
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  border: '1px solid',
                  borderColor: '#000',
                  borderRadius: '50%',
                  width: '50px',
                  height: '50px',
                  margin: '0 auto',
                  '@media (max-width: 600px)': {
                    border: '0.5px solid',
                    borderRadius: '50%',
                    width: '30px',
                    height: '30px',
                  },
                }}
              >
                {pkg.icon}
              </Box>
              <Box
                sx={{
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  position: 'relative',
                  marginTop: '1rem',
                }}
              >
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
                      fontSize: '1rem',
                      fontWeight: '300',
                      lineHeight: '0.992rem',
                      padding: '0.8rem 0',
                    },
                  }}
                >
                  {pkg.name}
                </Typography>
                <IconButton
                  size="small"
                  onClick={(e) => {
                    e.stopPropagation();
                    handleInfoClick(pkg.tagline);
                  }}
                  sx={{
                    position: 'absolute',
                    right: 0,
                    top: '50%',
                    transform: 'translateY(-50%)',
                  }}
                >
                  <InfoIcon
                    sx={{
                      fontSize: '16px',
                      '@media (max-width: 600px)': { fontSize: '12px' },
                    }}
                  />
                </IconButton>
              </Box>
            </Box>
          </Grid>
        ))}
      </Grid>

      <Modal open={openModal} onClose={handleClose}>
        <Box
          sx={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: 300,
            bgcolor: 'background.paper',
            boxShadow: 24,
            p: 4,
            borderRadius: '2px',
            alignItems: 'center',
          }}
        >
          <Box
            sx={{
              borderRadius: '8px',
              border: '0.5px solid #000',
              padding: '1rem',
            }}
          >
            <Typography
              variant="h6"
              sx={{ fontWeight: 'bold', fontFamily: 'Unbounded' }}
            >
              {modalInfo.includes('come to you') ? 'On Location' : 'On Branch'}
            </Typography>
            <Typography variant="body2" sx={{ fontSize: '14px', mt: 1 }}>
              {modalInfo}
            </Typography>
          </Box>
        </Box>
      </Modal>
    </Box>
  );
};

export default LocationSelection;
