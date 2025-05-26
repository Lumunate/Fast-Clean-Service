'use client';
import { Box } from '@mui/system';
import useMultiStepForm from '../../hooks/useMultiStepForm';
import LocationSelection from './LocationSelectionStep';
import LiscencePlateStep from './LiscensePlateStep';
import CarTypeStep from './CarTypeStep';
import PackageSelectionStep from './PackageSelectionStep';
import SubscriptionPackagesStep from './SubscriptionPackagesStep';
import AutocarePackagesStep from './AutoCarePackagesStep';
import AdditionalOptionsStep from './AdditonalOptionsStep';
import DetailingStep from './DetailingStep';
import ScheduleAppointmentStep from './ScheduleAppointmentStep';
import SummaryStep from './SummaryStep';
import PersonParticularsStep from './PersonParticularsStep';
import CheckoutStep from './CheckoutStep';
import StepBox from './StepBox';
import { Container } from '@mui/material';
import { useState, useRef, useEffect } from 'react';

const transitionStyles = (activeNum) => {
  const centerNum = 100 * activeNum;
  const rightNum = centerNum * -1 + 100;
  const leftNum = centerNum * -1 - 100;

  return {
    left: { opacity: 0, transform: `translateX(${leftNum}%)` },
    center: {
      opacity: 1,
      transform: `translateX(${centerNum !== 0 && '-'}${centerNum}%)`,
    },
    right: { opacity: 0, transform: `translateX(${rightNum}%)` },
  };
};

const BookingForm = () => {
  const { currentStep, formData } = useMultiStepForm();
  const sliderRef = useRef(null);
  const [activeHeight, setActiveHeight] = useState('auto');

  const transStyles = transitionStyles(currentStep);

  // if (currentStep === 1) return <LocationSelection />;
  // else if (currentStep === 2) return <LiscencePlateStep />;
  // else if (currentStep === 3) return <CarTypeStep />;
  // else if (currentStep === 4) return <PackageSelectionStep />;
  // else if (currentStep === 5) return <SubscriptionPackagesStep />;
  // else if (
  //   currentStep === 6 &&
  //   formData.selectedPackageType === 'Subscription Plans'
  // ) {
  //   // nextStep();
  //   return null;
  // } else if (
  //   currentStep === 6 &&
  //   formData.selectedPackageType === 'Anywhere Autocare'
  // )
  //   return <AutocarePackagesStep />;
  // else if (currentStep === 7) return <AdditionalOptionsStep />;
  // else if (currentStep === 8) return <DetailingStep />;
  // else if (currentStep === 9) return <ScheduleAppointmentStep />;
  // else if (currentStep === 10) return <SummaryStep />;
  // else if (currentStep === 11) return <PersonParticularsStep />;

  // return <Box>Undefined</Box>;

  useEffect(() => {
    if (sliderRef.current) {
      const children = sliderRef.current.childNodes;
      children.forEach((el) => {
        const list = Array.from(el.classList);
        if (list.includes('active') && currentStep === 8) {
          setActiveHeight('auto');
        } else if (list.includes('active'))
          setActiveHeight(el.childNodes[0].clientHeight + 20);
      });
    }
  }, [currentStep]);

  const steps = [
    { stepIndex: 0, component: <LocationSelection /> },
    { stepIndex: 1, component: <LiscencePlateStep /> },
    { stepIndex: 2, component: <CarTypeStep /> },
    { stepIndex: 3, component: <PackageSelectionStep /> },
    { stepIndex: 4, component: <SubscriptionPackagesStep /> },
    {
      stepIndex: 5,
      component: <AutocarePackagesStep />,
      condition: formData?.selectedPackageType === 'Anywhere Autocare',
    },
    { stepIndex: 6, component: <AdditionalOptionsStep /> },
    { stepIndex: 7, component: <DetailingStep /> },
    { stepIndex: 8, component: <ScheduleAppointmentStep /> },
    { stepIndex: 9, component: <SummaryStep /> },
    { stepIndex: 10, component: <PersonParticularsStep /> },
    { stepIndex: 11, component: <CheckoutStep /> },
  ];

  return (
    <Box
      ref={sliderRef}
      style={{
        // backgroundColor: 'blue',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: '1200%',
        height: activeHeight,
        transition: 'all 300ms ease-in-out',
        // marginLeft: "5rem",
        "@media (max-width: 900px)": { marginLeft: "0", },
      }}
    >
      {steps.map((step) => (
        <StepBox
          key={step.stepIndex}
          currentStep={currentStep}
          stepIndex={step.stepIndex}
          transStyles={transStyles}
          packageTypeName={(formData?.packageType?.name || '').toLowerCase()}
          carType={formData?.carType}
        >
          {step.condition !== undefined && !step.condition ? (
            <></>
          ) : (
            step.component
          )}
        </StepBox>
      ))}
    </Box>
  );
};

export default BookingForm;
