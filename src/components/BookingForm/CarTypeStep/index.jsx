'use client';
import { Box, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { useTheme } from '../../../contexts/themeContext';
import useMultiStepForm from '../../../hooks/useMultiStepForm';
import { useValidation } from '../../../contexts/ValidationContext';
import {
  BookingFormHeading,
  BookingFormSubHeading,
  CarTypeContainer,
} from '../../mui/BookingFormPackages';

import Subtract1 from '../../../../public/carsIcons/Subtract-1.svg';
import Subtract2 from '../../../../public/carsIcons/Subtract-2.svg';
import Subtract3 from '../../../../public/carsIcons/Subtract-3.svg';
import Subtract from '../../../../public/carsIcons/Subtract.svg';
import HatchBack from '../../../../public/carsIcons/hatchback-car.svg';
import Union1 from '../../../../public/carsIcons/Union-1.svg';
import Union2 from '../../../../public/carsIcons/Union-2.svg';
import Union3 from '../../../../public/carsIcons/Union-3.svg';
import UnionIcon from '../../../../public/carsIcons/Union.svg';
import BikeIcon from '../../../../public/bookingFormIcons/BikeIcon.png';
import SuvIcon from '../../../../public/carsIcons/suv.svg';
import WagonIcon from '../../../../public/carsIcons/wagon.svg';
import CheckMark from '../../../../public/bookingFormIcons/CheckMark.svg';
import {useTranslations} from "next-intl";

const CarTypeBox = ({ name, icon, selected }) => {
  const { theme } = useTheme();

  const styledIcon = React.cloneElement(icon, {
    sx: {
      fontSize: 50,
      color: theme.palette.primary.contrastText,

      '@media (max-width: 600px)': {
        fontSize: 12,
          width: '12px', // Added width for consistency
          height: '12px',
      },
    },
  });

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '1rem',
        border: `1px solid ${selected ? '#1C79CC' : '#A5A5A5'}`,
        borderRadius: '10px',
        width: '140px',
        height: '140px',
        backgroundColor: theme.palette.primary.main,
        cursor: 'pointer',
        position: 'relative',
        transition: 'background-color 0.3s ease',
        '&:hover': {
          backgroundColor: theme.palette.primary.main,
        },
        textAlign: 'center',
        boxShadow: '0 1px 14.3px rgba(0, 0, 0, 0.1)',

        '@media (max-width: 600px)': {
          width: '6.3rem',
          height: '5.9rem',
        },
      }}
    >
      <Box
        sx={{
          position: 'absolute',
          top: 5,
          right: 5,
          display: selected ? 'block' : 'none',
        }}
      >
        <Image alt="check icon" width={20} height={20} src={CheckMark} />
      </Box>
      {styledIcon}
      <Typography
        sx={{
          marginTop: '6.5px',
          fontFamily: 'Unbounded',
          fontSize: 12,
          fontWeight: 'light',
          color: theme.palette.mode === 'dark' ? '#fff' : '#434343',

          '@media (max-width: 600px)': {
            fontSize: '0.6rem',
            lineHeight: '0.75rem',
            fontWeight: '300',
          },
        }}
      >
        {name}
      </Typography>
    </Box>
  );
};

const Index = () => {
    const t = useTranslations('booking');
  const [selectedCarType, setSelectedCarType] = useState(null);
  const form = useMultiStepForm();
  const { updateValidation } = useValidation();

  const { theme } = useTheme();

  const carTypes = [
    {
      name: t("steps.2.vehicle_types.0"),
      icon: (
        <Image
          src={HatchBack}
          alt={'car type'}
          width={40}
          height={40}
          style={{ filter: theme.palette.mode === 'dark' ? 'invert(1)' : '' }}
        />
      ),
    },
    {
      name: t("steps.2.vehicle_types.1"),
      icon: (
        <Image
          src={Subtract2}
          alt={'car type'}
          width={40}
          height={40}
          style={{ filter: theme.palette.mode === 'dark' ? 'invert(1)' : '' }}
        />
      ),
    },
    {
      name: t("steps.2.vehicle_types.2"),
      icon: (
        <Image
          src={UnionIcon}
          alt={'car type'}
          width={40}
          height={40}
          style={{ filter: theme.palette.mode === 'dark' ? 'invert(1)' : '' }}
        />
      ),
    },
    {
      name: t("steps.2.vehicle_types.3"),
      icon: (
        <Image
          src={Subtract1}
          alt={'car type'}
          width={40}
          height={40}
          style={{ filter: theme.palette.mode === 'dark' ? 'invert(1)' : '' }}
        />
      ),
    },
    {
      name: t("steps.2.vehicle_types.4"),
      icon: (
        <Image
          src={WagonIcon}
          alt={'car type'}
          width={40}
          height={40}
          style={{ filter: theme.palette.mode === 'dark' ? 'invert(1)' : '' }}
        />
      ),
    },
    {
      name: t("steps.2.vehicle_types.5"),
      icon: (
        <Image
          src={SuvIcon}
          alt={'car type'}
          width={40}
          height={40}
          style={{ filter: theme.palette.mode === 'dark' ? 'invert(1)' : '' }}
        />
      ),
    },
    {
      name: t("steps.2.vehicle_types.6"),
      icon: (
        <Image
          src={Union3}
          alt={'car type'}
          width={40}
          height={40}
          style={{ filter: theme.palette.mode === 'dark' ? 'invert(1)' : '' }}
        />
      ),
    },
    {
      name: t("steps.2.vehicle_types.7"),
      icon: (
        <Image
          src={Union2}
          alt={'car type'}
          width={40}
          height={40}
          style={{ filter: theme.palette.mode === 'dark' ? 'invert(1)' : '' }}
        />
      ),
    },
    {
      name: t("steps.2.vehicle_types.8"),
      icon: (
        <Image
          src={Subtract}
          alt={'car type'}
          width={40}
          height={40}
          style={{ filter: theme.palette.mode === 'dark' ? 'invert(1)' : '' }}
        />
      ),
    },
    {
      name: t("steps.2.vehicle_types.9"),
      icon: (
        <Image
          src={BikeIcon}
          alt={'Motor type'}
          width={40}
          height={40}
          style={{ filter: theme.palette.mode === 'dark' ? 'invert(1)' : '' }}
        />
      ),
    },
  ];

  useEffect(() => {
    updateValidation(!!selectedCarType);
  }, [selectedCarType, updateValidation]);

  const handleCarTypeClick = (carType) => {
    setSelectedCarType(carType);
    form.updateFormData({ carType });
    form.nextStep();
  };

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '2rem',
        marginTop: '5rem',

        '@media (max-width: 600px)': {
          marginTop: 0,
          padding: 0,
        },
      }}
    >
      <BookingFormHeading
        sx={{
          marginBottom: '5rem',
          '@media (max-width: 600px)': {
            marginBottom: '1.5rem',
          },
        }}
      >
          {t("steps.2.title")}
      </BookingFormHeading>

        <BookingFormSubHeading
            sx={{
                marginBottom: "0",
            }}
        >
            {t("steps.2.description.0")}
        </BookingFormSubHeading>
        <BookingFormSubHeading>
            {t("steps.2.description.1")}
        </BookingFormSubHeading>

      <CarTypeContainer
        sx={{
          display: 'grid',
          gridTemplateColumns: {
            xs: 'repeat(3, 1fr)',
            sm: 'repeat(4, 1fr)',
            md: 'repeat(5, 1fr)',
          },
          gridAutoFlow: 'dense',
          gap: '1rem',
        }}
      >
        {carTypes.map((carType, index) => (
          <Box
            key={carType.name}
            onClick={() => handleCarTypeClick(carType.name)}
            sx={{
              gridColumn: index >= 6 ? 'span 1' : undefined,
            }}
          >
            <CarTypeBox
              name={carType.name}
              icon={carType.icon}
              selected={form?.formData?.carType === carType.name}
            />
          </Box>
        ))}
      </CarTypeContainer>
    </Box>
  );
};

export default Index;
