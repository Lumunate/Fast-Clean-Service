'use client';
import { useState, useEffect } from 'react';
import useMultiStepForm from '../../hooks/useMultiStepForm';
import { useValidation } from '../../contexts/ValidationContext';
import { useTheme } from '../../contexts/themeContext';
import {
  ButtonContainer,
  NextPrevButton,
  PricingContainer,
  PricingSpacer,
  PricingText,
  PricingTextContainer,
} from '../mui/BookingFormPackages';
import { Loader } from '../mui/Loader';
import { duration } from '@mui/material';

const BookingFormFooter = () => {
  const {
    currentStep,
    formData,
    price,
    duration,
    updateFormData,
    nextStep,
    prevStep,
    calculatePricing,
  } = useMultiStepForm();
  const { theme } = useTheme();
  const { isValid, updateValidation } = useValidation();
  const [isBtnInvalid, setIsBtnInvalid] = useState(false);

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const step = currentStep;

  useEffect(() => {
    if (currentStep === 0 && !formData.service) setIsBtnInvalid(true);
    else if (currentStep === 1) {
      if (
        !formData.proceedWithoutLicensePlate &&
        (!formData.licensePlate || formData.licensePlate.trim().length === 0)
      ) {
        setIsBtnInvalid(true);
      } else {
        setIsBtnInvalid(false);
      }
    } else if (!formData.carType && currentStep === 2) {
      setIsBtnInvalid(true);
    } else if (!formData.selectedPackageType && currentStep === 3) {
      setIsBtnInvalid(true);
    } else if (!formData.packageType && currentStep === 4) {
      setIsBtnInvalid(true);
    } else if (
      formData.selectedPackageType === 'Anywhere Autocare' &&
      !formData?.selectedPackage?.packages &&
      currentStep === 5
    ) {
      setIsBtnInvalid(true);
    } else if (currentStep === 8) {
      setIsBtnInvalid(!formData.selectedTime);
    } else {
      setIsBtnInvalid(false);
    }

    calculatePricing();
  }, [formData, currentStep, calculatePricing]);

  const scrollToTop = () => {
    window.scrollTo({
      top: 100,
      behavior: 'smooth',
    });
  };

  const fetchLicensePlateData = async (licensePlate) => {
    const response = await fetch(
      `/api/license-plate?licensePlate=${licensePlate}`
    );

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();

    if (data.length === 0) {
      throw new Error(`No data found for ${licensePlate}`);
    }

    return data[0];
  };

  const validatePlate = async () => {
    const plate = formData.licensePlate;

    setLoading(true);
    setError('');

    if (!plate || plate.trim().length === 0) {
      setLoading(false);
      updateValidation(false);
      return false;
    }

    const dutchLicensePlateRegex =
      /^(([A-Z]{2}-?\d{2}-?\d{2})|([A-Z]{2}-?\d{2}-?[A-Z]{2})|(\d{2}-?[A-Z]{2}-?\d{2})|(\d{2}-?[A-Z]{3}-?\d{1})|(\d{1}-?[A-Z]{3}-?\d{2})|([A-Z]{1}-?\d{3}-?[A-Z]{2})|([A-Z]{3}-?\d{2}-?[A-Z]{1})|(\d{1}-?[A-Z]{2}-?\d{3})|([A-Z]{2}-?\d{3}-?[A-Z]{1})|([A-Z]{1}-?\d{2}-?[A-Z]{3})|([A-Z]{3}-?\d{2}-?\d{1})|(\d{3}-?[A-Z]{2}-?\d{1})|([A-Z]{2}-?[A-Z]{2}-?\d{2})|([A-Z]{1}-?\d{3}-?[A-Z]{1})|([BHK]{1}[SDJFM]{1}-?[A-Z]{2}-?\d{2}))$/;

    if (!dutchLicensePlateRegex.test(plate)) {
      setError('Invalid license plate format');
      setLoading(false);
      updateValidation(false);
      return false;
    }

    try {
      const data = await fetchLicensePlateData(plate);
      updateFormData({ vehicleDetails: data });
      updateValidation(true);
      setLoading(false);
      return true;
    } catch (err) {
      setError(err.message);
      console.error(err);
      updateValidation(false);
      setLoading(false);
      return false;
    }
  };

  const handleNext = async () => {
    if (step === 2) {
      if (!formData.proceedWithoutLicensePlate) {
        if (formData.licensePlate && formData.licensePlate.trim().length > 0) {
          const isValid = await validatePlate();
          if (!isValid) return;
        } else {
          setError(
            "Please enter a license plate or check 'Proceed without license plate'"
          );
          updateValidation(false);
          return;
        }
      } else {
        updateValidation(true);
      }
    }
    if (
      currentStep === 5 &&
      formData?.selectedPackageType === 'Subscription Plans'
    ) {
      nextStep(2);
      scrollToTop();
      return;
    }

    nextStep();
    scrollToTop();
  };

  const handleBack = () => {
    if (
      currentStep === 7 &&
      formData.selectedPackageType === 'Subscription Plans'
    ) {
      prevStep(2);
      scrollToTop();
      return;
    }

    prevStep();
    scrollToTop();
  };

  return (
    <PricingContainer>
      <PricingSpacer />
      <PricingTextContainer>
        <PricingText>Price</PricingText>
        <PricingText>$ {isNaN(price) ? 0.0 : price.toFixed(2)}</PricingText>
      </PricingTextContainer>
      <PricingTextContainer sx={{ marginBottom: '3rem' }}>
        <PricingText>Duration</PricingText>
        <PricingText>{isNaN(duration) ? 0 : duration} mins</PricingText>
      </PricingTextContainer>
      <ButtonContainer>
        <NextPrevButton dull onClick={handleBack}>
          Back
        </NextPrevButton>
        <NextPrevButton onClick={handleNext} disabled={loading || isBtnInvalid}>
          {currentStep === 11 ? 'Submit' : 'Next'}
        </NextPrevButton>
      </ButtonContainer>
      {error && <div style={{ color: 'red' }}>{error}</div>}
    </PricingContainer>
  );
};

export default BookingFormFooter;
