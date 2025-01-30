'use client';
import Image from 'next/image';
import useMultiStepForm from '../../hooks/useMultiStepForm';
import LocationIcon from '../../../public/bookingFormIcons/location.svg';
import CarIcon from '../../../public/bookingFormIcons/Car.svg';
import UnionIcon from '../../../public/bookingFormIcons/Union.svg';
import WrenchIcon from '../../../public/bookingFormIcons/Wrench.svg';
import GroupIcon from '../../../public/bookingFormIcons/Group.svg';
import PlusIcon from '../../../public/bookingFormIcons/PlusCircle.svg';
import ListIcon from '../../../public/bookingFormIcons/LisDetails.svg';
import AppointmentIcon from '../../../public/bookingFormIcons/Union-1.svg';
import ClipBoardIcon from '../../../public/bookingFormIcons/ClipBoard.svg';
import MapIcon from '../../../public/servicesicons/Map.svg';
import CheckIcon from '../../../public/bookingFormIcons/Check.svg';
import CheckMark from '../../../public/bookingFormIcons/CheckMark.svg';
import {
  StepBarContainer,
  StepBarLine,
  StepCheckImageContainer,
  StepImageContainer,
  StepItemContainer,
  StepItemOuterContainer,
  StepLabel,
  StepsContainer,
} from '../mui/BookingFormPackages';
import { Check } from '@mui/icons-material';
import { useMediaQuery, useTheme } from '@mui/material';

const items = [
  {
    label: 'Location',
    icon: <Image src={LocationIcon} alt="Brief Icon" width={20} height={20} />,
  },
  {
    label: 'License Plate',
    icon: <Image src={CarIcon} alt="Brief Icon" width={20} height={20} />,
  },
  {
    label: 'Vehicle Type',
    icon: <Image src={UnionIcon} alt="Brief Icon" width={20} height={20} />,
  },
  {
    label: 'Service Type',
    icon: <Image src={WrenchIcon} alt="Brief Icon" width={20} height={20} />,
  },
  {
    label: 'Packages',
    icon: <Image src={GroupIcon} alt="Brief Icon" width={20} height={20} />,
  },
  {
    label: 'Add Ons',
    icon: <Image src={PlusIcon} alt="Brief Icon" width={20} height={20} />,
  },
  {
    label: 'Detailings',
    icon: <Image src={ListIcon} alt="Brief Icon" width={20} height={20} />,
  },
  {
    label: 'Appointment',
    icon: (
      <Image src={AppointmentIcon} alt="Brief Icon" width={20} height={20} />
    ),
  },
  {
    label: 'Summary',
    icon: <Image src={ClipBoardIcon} alt="Brief Icon" width={20} height={20} />,
  },
  {
    label: 'Confirmation',
    icon: <Image src={CheckIcon} alt="Brief Icon" width={20} height={20} />,
  },
];

const StepBar = () => {
  const { currentStep } = useMultiStepForm();

  return (
    <StepBarContainer>
      <StepBarLine />
      <StepsContainer>
        {items.map((item, index) => {
          let adjustedIndex = index >= 5 ? index + 1 : index; // Adjust the index to skip sub package step
          return (
            <StepItem
              key={index}
              label={item.label}
              icon={item.icon}
              invert={item.invert}
              selected={adjustedIndex < currentStep}
              current={currentStep === adjustedIndex + 1}
            />
          );
        })}
      </StepsContainer>
    </StepBarContainer>
  );
};

export default StepBar;

const StepItem = ({
  icon,
  label,
  selected = false,
  current = false,
  invert = false,
}) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const filterStyle =
    invert && theme.palette.mode === 'light' ? 'invert(1)' : 'none';

  return (
    <StepItemOuterContainer>
      <StepItemContainer selected={selected} current={current}>
        {selected && (
          <StepCheckImageContainer>
            {isMobile ? (
              <Check
                sx={{ fontSize: '1.5rem', fontWeight: '600', color: '#6DFF49' }}
              />
            ) : (
              <Image src={CheckMark} alt="Check Mark" width={20} height={20} />
            )}
          </StepCheckImageContainer>
        )}
        <StepImageContainer selected={selected} current={current}>
          {label === 'City' ? (
            <Image
              src={MapIcon}
              alt="Map Icon"
              width={20}
              height={20}
              style={{ filter: filterStyle }}
            />
          ) : (
            icon
          )}
        </StepImageContainer>
      </StepItemContainer>

      <StepLabel current={current}>{label}</StepLabel>
    </StepItemOuterContainer>
  );
};
