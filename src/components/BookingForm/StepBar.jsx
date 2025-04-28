'use client';
import Image from 'next/image';
import { useContext } from 'react';
import { FormContext } from '../../contexts/MultiStepFormContext';
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
import { useTranslations } from "next-intl";

const StepBar = () => {
    const t = useTranslations('booking');
    const { currentStep, navigateToStep, isStepAccessible } = useContext(FormContext);
    const items = [
        {
            label: t("stepbar.0"),
            icon: <Image src={LocationIcon} alt="Brief Icon" width={20} height={20} />,
        },
        {
            label: t("stepbar.1"),
            icon: <Image src={CarIcon} alt="Brief Icon" width={20} height={20} />,
        },
        {
            label: t("stepbar.2"),
            icon: <Image src={UnionIcon} alt="Brief Icon" width={20} height={20} />,
        },
        {
            label: t("stepbar.3"),
            icon: <Image src={WrenchIcon} alt="Brief Icon" width={20} height={20} />,
        },
        {
            label: t("stepbar.4"),
            icon: <Image src={GroupIcon} alt="Brief Icon" width={20} height={20} />,
        },
        {
            label: t("stepbar.5"),
            icon: <Image src={PlusIcon} alt="Brief Icon" width={20} height={20} />,
        },
        {
            label: t("stepbar.6"),
            icon: <Image src={ListIcon} alt="Brief Icon" width={20} height={20} />,
        },
        {
            label: t("stepbar.7"),
            icon: (
                <Image src={AppointmentIcon} alt="Brief Icon" width={20} height={20} />
            ),
        },
        {
            label: t("stepbar.8"),
            icon: <Image src={ClipBoardIcon} alt="Brief Icon" width={20} height={20} />,
        },
        {
            label: t("stepbar.9"),
            icon: <Image src={CheckIcon} alt="Brief Icon" width={20} height={20} />,
        },
    ];

    return (
        <StepBarContainer>
            <StepBarLine />
            <StepsContainer>
                {items.map((item, index) => {
                    let adjustedIndex = index >= 5 ? index + 1 : index;
                    return (
                        <StepItem
                            key={index}
                            label={item.label}
                            icon={item.icon}
                            invert={item.invert}
                            selected={adjustedIndex < currentStep}
                            current={currentStep === adjustedIndex + 1}
                            index={index}
                            onStepClick={() => navigateToStep(index)}
                            isAccessible={isStepAccessible(index)}
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
                      index,
                      onStepClick,
                      isAccessible
                  }) => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
    const filterStyle =
        invert && theme.palette.mode === 'light' ? 'invert(1)' : 'none';

    return (
        <StepItemOuterContainer
            onClick={() => isAccessible && onStepClick()}
            style={{
                cursor: isAccessible ? 'pointer' : 'not-allowed',
                opacity: isAccessible ? 1 : 0.7,
            }}
        >
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