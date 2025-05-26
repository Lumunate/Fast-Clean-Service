'use client';
import { Box, Typography, useMediaQuery } from '@mui/material';
import React, { use, useEffect, useState } from 'react';
import { calculateFilter } from '../../../lib/colorFilters';
import { useTheme } from '../../../contexts/themeContext';
import useMultiStepForm from '../../../hooks/useMultiStepForm';
import { useValidation } from '../../../contexts/ValidationContext';
import Image from 'next/image';
import bg from '../../../../public/voor1.jpg';
import CheckMark from '../../../../public/bookingFormIcons/CheckMark.svg';
import {
  AutoCareContainer,
  AutoCarePackageSubheading,
  AutoCarePackageTagline,
} from '../../mui/BookingFormPackages';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { useAutocarePackages } from '../../../hooks/useAutocarePackages';

const AutocarePackages = () => {
  const { theme } = useTheme();
  const [selectedPackage, setSelectedPackage] = useState(null);
  const form = useMultiStepForm();
  const { updateValidation } = useValidation();
  const COLOR = form.color;

  const isMobile = useMediaQuery('(max-width:600px)');

  useEffect(() => {
    updateValidation(!!selectedPackage);
  }, [selectedPackage, updateValidation]);

  useEffect(() => {
    if (isMobile) {
      const adjustCardHeights = () => {
        const cards = document.querySelectorAll('.autocare-card');
        let maxHeight = 0;

        cards.forEach((card) => {
          card.style.height = 'auto';
          const cardHeight = card.scrollHeight;
          if (cardHeight > maxHeight) {
            maxHeight = cardHeight;
          }
        });
        cards.forEach((card) => {
          card.style.height = `${maxHeight}px`;
        });
      };

      adjustCardHeights();
      window.addEventListener('resize', adjustCardHeights);

      return () => window.removeEventListener('resize', adjustCardHeights);
    }
  }, [isMobile, selectedPackage]);

  const handleClick = (pkg) => {
    if (pkg.id !== selectedPackage) {
      setSelectedPackage(pkg.id);
      form.updateFormData({ selectedPackage: pkg });
      form.nextStep();
    }
  };

  const { packages, loading, error, fetchPackages } = useAutocarePackages();
  useEffect(() => {
    fetchPackages();
  }, [fetchPackages]);

  if (!packages) {
    return null;
  }

  const packageTypeName = form.formData?.packageType?.name?.toLocaleLowerCase();
  const allPackages = packages.packages[packageTypeName];
  let displayedPackages = allPackages || [];

  // Apply filtering based on carType
  if (form.formData.carType === 'Motorbike') {
   if (packageTypeName !== 'premium' && Array.isArray(allPackages)) {
      // For 'Motor' and not 'premium', only show 'Exterior' packages
      displayedPackages = allPackages.filter(
        (pkg) => pkg.name.toLowerCase() === 'exterior'
      );
    }
    // For 'premium', show all packages
  }

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      <AutoCarePackageSubheading sx={{ color: COLOR }}>
        {form.formData?.packageType?.name?.toLocaleUpperCase()}
      </AutoCarePackageSubheading>

      {isMobile ? (
        <Swiper
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={1.4}
          spaceBetween={10}
          breakpoints={{
            300: {
              slidesPerView: 1.75,
            },
            350: {
              slidesPerView: 2.25,
            },
            390: {
              slidesPerView: 2.55,
            },
            420: {
              slidesPerView: 2.75,
            },
            470: {
              slidesPerView: 3,
            },
          }}
          style={{
            width: '100%',
            height: 'auto',
          }}
        >
          {displayedPackages.map((pkg, index) => (
            <SwiperSlide
              key={index}
              style={{ display: 'flex', alignItems: 'stretch' }}
            >
              <AutocarePackagesCard
                image={bg}
                color={COLOR}
                packageType={pkg.name}
                descriptionItems={pkg.packages}
                price={pkg.price}
                description={pkg.description}
                selected={form.formData.selectedPackage?.id === pkg.id}
                onClick={() => handleClick(pkg)}
                className="autocare-card"
              />
            </SwiperSlide>
          ))}
        </Swiper>
      ) : (
        <AutoCareContainer>
          {displayedPackages.map((pkg, index) => (
            <AutocarePackagesCard
              key={index}
              image={bg}
              color={COLOR}
              packageType={pkg.name}
              descriptionItems={pkg.packages}
              price={pkg.price}
              description={pkg.description}
              selected={form.formData.selectedPackage?.id === pkg.id}
              onClick={() => handleClick(pkg)}
            />
          ))}
        </AutoCareContainer>
      )}
    </Box>
  );
};

export default AutocarePackages;

const AutocarePackagesCard = ({
  description,
  price,
  packageType,
  descriptionItems,
  onClick,
  selected = false,
  color,
}) => {
  const { theme } = useTheme();
  const formattedPrice = Number(price.replace('€', '').trim()).toFixed(2);

  return (
    <Box
      onClick={onClick}
      sx={{
        position: 'relative',
        padding: '24px 35px',
        width:
          packageType.toLowerCase() !== 'premium' ? 'auto' : 'calc(33% - 2rem)',
        borderRadius: '15px',
        backgroundColor: 'primary.main',
        boxShadow: '0px 4px 30.1px 0 rgba(0, 0, 0, 0.25)',
        border: `1px solid ${selected ? '#1C79CC' : color}`,
        '@media(max-width: 600px)': {
          width: '14rem',
          height: 'auto',
          boxShadow: 'none !important',
          padding: '0 0.6rem',
          paddingBottom: '1rem',
          paddingTop: '1.9rem',
        },
      }}
      className="autocare-card"
    >
      <Box
        sx={{
          position: 'absolute',
          backgroundColor: 'primary.main',
          borderRadius: '100%',
          top: '-5px',
          right: '-10px',
          display: selected ? 'block' : 'none',
        }}
      >
        <Image
          src={CheckMark}
          alt="Included Option"
          width={30}
          height={30}
          style={{ zIndex: 2000 }}
        />
      </Box>
      <Typography
        sx={{
          fontFamily: 'Unbounded',
          color: theme.palette.mode === 'dark' ? '#FFFFFF' : '#000000',
          fontSize: '2rem',
          fontWeight: 'regular',
          '@media (max-width: 600px)': {
            fontSize: '1.4rem',
            fontWeight: '400',
          },
        }}
      >
        {packageType}
      </Typography>
      <Typography
        sx={{
          fontFamily: 'Unbounded',
          color: theme.palette.mode === 'dark' ? '#C5C5C5' : '#525252',
          fontSize: '0.95rem',
          fontWeight: 'light',
          '@media (max-width: 600px)': {
            fontSize: '0.7rem',
            fontWeight: '300',
            lineHeight: '0.88rem',
          },
        }}
      >
        {description}
      </Typography>
      <Box>
        <Typography
          sx={{
            marginTop: '2rem',
            fontFamily: 'Unbounded',
            color: color,
            fontSize: '2.6rem',
            lineHeight: '2.4rem',
            fontWeight: '600',
            textWrap: 'nowrap',
            '@media (max-width: 600px)': {
              fontSize: '1.6rem',
              fontWeight: '600',
              lineHeight: '2.4rem',
              marginTop: 0,
            },
          }}
        >
          € {formattedPrice}
        </Typography>

        <Box
          sx={{
            marginTop: '2rem',
            '@media (max-width: 600px)': {
              marginTop: '0.5rem',
            },
          }}
        >
          {descriptionItems &&
            descriptionItems.map((option, index) => (
              <Box
                key={index}
                sx={{
                  display: 'flex',
                  gap: '7px',
                  alignItems: 'center',
                  '@media (max-width: 600px)': {
                    alignItems: 'left',
                  },
                }}
              >
                <Image
                  src={CheckMark}
                  alt="Included Option"
                  width={14}
                  height={14}
                  style={{
                    filter: `overlay(${calculateFilter(color)})`,
                  }}
                />
                <Typography
                  sx={{
                    fontFamily: 'Unbounded',
                    fontSize: '0.8rem',
                    fontWeight: 'light',
                    color:
                      theme.palette.mode === 'dark' ? '#C5C5C5' : '#525252',
                    lineHeight: '1.5rem',
                    '@media (max-width: 600px)': {
                      fontSize: '0.8rem',
                      fontWeight: '300',
                      lineHeight: '1.5rem',
                    },
                  }}
                >
                  {option}
                </Typography>
              </Box>
            ))}
        </Box>
      </Box>
    </Box>
  );
};
