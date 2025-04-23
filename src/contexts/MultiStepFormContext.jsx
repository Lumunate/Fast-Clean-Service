'use client';
import React, { createContext, useState, useEffect, useCallback } from 'react';
import { useSession } from 'next-auth/react';
import useSnackbar from '../hooks/useSnackbar';

// Create the context
export const FormContext = createContext();

// Create a provider component
export const FormProvider = ({ children }) => {
  const { openSnackbar } = useSnackbar();
  const { data: session, status } = useSession();
  const [formData, setFormData] = useState({
    service: '',
    licensePlate: '',
    vehicleDetails: null,
    carType: '',
    selectedPackageType: '',
    selectedPackage: null,
    packageType: null,
    selectedAdditionalOptions: [],
    selectedDetailingOptions: [],
    selectedTime: new Date(2023, 0, 1),
  });
  const [price, setPrice] = useState(0);
  const [duration, setDuration] = useState(0);
  const [currentStep, setCurrentStep] = useState(0);
  const [color, setColor] = useState('#000000');
  // Track completed steps
  const [completedSteps, setCompletedSteps] = useState(new Set([0]));

  function parseHighestDuration(durationStr) {
    // Remove all non-numeric and non-slash characters
    const cleaned = durationStr.replace(/[^\d/-]/g, '');

    // Split on slash if exists, otherwise use the single number
    const numbers = cleaned.split('/').map(Number);

    // For strings like "90~120", the split will result in a single string "90120"
    // So we need to handle this case by splitting the string into chunks of 2-3 digits
    if (numbers.length === 1 && cleaned.length > 3) {
      const matches = cleaned.match(/\d{2,3}/g) || [];
      return Math.max(...matches.map(Number));
    }

    return Math.max(...numbers);
  }

  const calculatePricing = useCallback(() => {
    let newPrice = 0;
    let duration = 0;

    const pkg = formData.selectedPackage;
    const carType = formData.carType;

    if (
        !pkg ||
        !pkg.vehicleOptions ||
        !carType ||
        !(carType in pkg.vehicleOptions)
    ) {
      return 0;
    }

    duration += pkg.vehicleOptions[carType]?.additionalTime || 0;
    newPrice += pkg.vehicleOptions[carType]?.additionalCost || 0;

    newPrice += parseFloat(pkg.price.replace('€', '').trim());
    duration += parseHighestDuration(pkg.duration);

    if (formData.selectedPackageType === 'Subscription Plans') {
      if (formData.selectedAdditionalOptions?.length > 0) {
        Object.values(formData.selectedAdditionalOptions).forEach((addon) => {
          const _addon = pkg.additionalOptions.find((a) => a.name === addon);
          const addonPrice = _addon?.additionalCost;
          const addonDuration = _addon?.additionalTime;

          if (addonPrice !== undefined || addonDuration !== undefined) {
            newPrice += addonPrice;
            duration += addonDuration;
            console.log('duration', duration);
          }
        });
      }
    } else {
      if (formData.selectedAdditionalOptions?.length > 0) {
        Object.values(formData.selectedAdditionalOptions).forEach((addon) => {
          const addonPrice =
              pkg.additionalOptions?.interior?.find((a) => a.name === addon)
                  ?.additionalCost ||
              pkg.additionalOptions?.exterior?.find((a) => a.name === addon)
                  ?.additionalCost ||
              0;

          newPrice += addonPrice;
        });
      }
      if (formData.selectedDetailingOptions?.length > 0) {
        Object.values(formData.selectedDetailingOptions).forEach((addon) => {
          const addonPrice = pkg.additionalOptions?.detailing?.find(
              (a) => a.name === addon
          )?.additionalCost;

          if (addonPrice === 'On Request') {
            return price;
          }

          if (addonPrice !== undefined) {
            newPrice += addonPrice;
          }
        });
      }
    }

    // Add travel cost based on travelDistance
    if (formData.travelDistance) {
      let travelCost = 0;
      if (formData.travelDistance > 20) {
        travelCost = (formData.travelDistance - 20) * 0.5;
      } else if (formData.travelDistance > 75) {
        travelCost = formData.travelDistance * 0.6;
      }

      newPrice += travelCost;
    }

    if (formData.discount) {
      newPrice = newPrice * ((100 - formData.discount) / 100);
    }

    setPrice(newPrice);
    setDuration(duration);
  }, [formData, price]);

  const calculateFormColors = useCallback(() => {
    const colors = {
      Interior: '#5dfa48',
      Standard: '#5dfa48',
      Deluxe: '#0088ff',
      Premium: '#ffd02b',
      Combi: '#ffd02b',
      Exterior: '#0088ff',
    };

    const pkg = formData?.packageType?.name;
    const _color = pkg ? colors[pkg] : null;
    if (!_color) return '#000000';
    setColor(_color);
  }, [formData]);

  const updateFormData = (newData) => {
    console.log(newData);
    setFormData((prevData) => {
      let updatedData = { ...prevData, ...newData };

      if (
          newData.selectedPackageType &&
          newData.selectedPackageType !== prevData.selectedPackageType
      ) {
        setPrice(0);
        setDuration(0);
        updatedData.selectedPackage = null;
        updatedData.selectedAdditionalOptions = null;
        updatedData.selectedDetailingOptions = null;
        updatedData.packageType = null;
      }

      if (newData.packageType && newData.packageType !== prevData.packageType) {
        setPrice(0);
        setDuration(0);
        if (newData.selectedPackageType === 'Anywhere Autocare')
          updatedData.selectedPackage = null;
        updatedData.selectedTime = null;
        updatedData.selectedAdditionalOptions = [];
        updatedData.selectedDetailingOptions = [];
      }

      if (
          newData.selectedPackage &&
          newData?.selectedPackage?.id !== prevData?.selectedPackage?.id
      ) {
        setPrice(0);
        setDuration(0);
        updatedData.selectedAdditionalOptions = [];
        updatedData.selectedDetailingOptions = [];
      }

      return updatedData;
    });
  };

  // Check if current step is complete based on form data
  const isStepComplete = useCallback((step) => {
    switch (step) {
      case 0: // Location Selection
        return !!formData.service;
      case 1: // License Plate
        return !!formData.licensePlate && !!formData.vehicleDetails;
      case 2: // Car Type
        return !!formData.carType;
      case 3: // Package Selection
        return !!formData.selectedPackageType;
      case 4: // Subscription Packages
        if (formData.selectedPackageType === 'Subscription Plans') {
          return !!formData.selectedPackage && !!formData.packageType;
        }
        return true;
      case 5: // Autocare Packages
        if (formData.selectedPackageType === 'Anywhere Autocare') {
          return !!formData.selectedPackage && !!formData.packageType;
        }
        return true;
      case 6: // Additional Options
        return true; // Optional step
      case 7: // Detailing
        return true; // Optional step
      case 8: // Schedule Appointment
        return !!formData.selectedTime;
      case 9: // Summary
        return true; // Always completable
      case 10: // Person Particulars
        return !!formData.firstName && !!formData.surname && !!formData.email && !!formData.phoneNumber;
      case 11: // Checkout
        return true;
      default:
        return false;
    }
  }, [formData]);

  // Update completedSteps when moving to next step
  const nextStep = async (step = 1) => {
    // Mark current step as completed
    setCompletedSteps(prev => {
      const newSet = new Set(prev);
      newSet.add(currentStep);
      return newSet;
    });

    if (currentStep === 10) {
      // Submit the form
      try {
        const data = {
          type: formData.service,
          firstName: formData.firstName,
          surname: formData.surname,
          companyName: formData.companyName,
          street: formData.street,
          zipCode: formData.zipCode,
          city: formData.city,
          email: formData.email,
          phoneNumber: formData.phoneNumber,
          vehicleMakeAndModel: formData.makeModel,
          message: formData.message,
          serviceName: formData.selectedPackageType,
          packageType: formData.packageType.name,
          packageName: formData.selectedPackage.name,
          appointmentTimestamp: formData.selectedTime,
          vehicleDetails: formData.vehicleDetails,
          vehicleType: formData.vehicleType,
          travelDistance: formData.travelDistance,
          serviceAddons: {
            addons: formData.selectedAdditionalOptions?.length
                ? formData.selectedAdditionalOptions
                : null,
            detailing: formData.selectedDetailingOptions?.length
                ? formData.selectedDetailingOptions
                : null,
          },
        };

        const response = await fetch('/api/booking', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(data),
          credentials: 'include',
        });

        const res = await response.json();
        console.log('Response:', res);
        if (res.success) {
          openSnackbar('Form submitted successfully!');
        }
      } catch (err) {
        console.error('Error submitting form:', err);
        openSnackbar('Error submitting form');
      }
    }

    const newStep = currentStep + step;
    setCurrentStep(newStep);

    // If we're skipping a step (like with Subscription Plans), mark the skipped step as complete too
    if (step > 1) {
      for (let i = currentStep + 1; i < newStep; i++) {
        setCompletedSteps(prev => {
          const newSet = new Set(prev);
          newSet.add(i);
          return newSet;
        });
      }
    }
  };

  const prevStep = () => {
    if (currentStep === 0) return;
    if (
        currentStep === 6 &&
        formData?.selectedPackageType === 'Subscription Plans'
    ) {
      setCurrentStep((prevStep) => prevStep - 2);
      return;
    }
    setCurrentStep((prevStep) => prevStep - 1);
  };

  // Function to check if a step is accessible (can be navigated to)
  const isStepAccessible = useCallback((stepIndex) => {
    // Convert to adjusted index to match form flow (account for gap at index 5)
    const adjustedIndex = stepIndex >= 5 ? stepIndex + 1 : stepIndex;

    // Can always go back to previous steps
    if (adjustedIndex <= currentStep) {
      return true;
    }

    // Can only go forward to the next available step and if all previous steps are complete
    if (adjustedIndex === currentStep + 1) {
      // Check if all previous steps are in the completedSteps set
      for (let i = 0; i < currentStep; i++) {
        if (!completedSteps.has(i)) {
          return false;
        }
      }
      return true;
    }

    // Can't jump ahead by more than one step
    return false;
  }, [currentStep, completedSteps]);

  // Function to navigate to a specific step
  const navigateToStep = useCallback((stepIndex) => {
    // Convert to adjusted index to match form flow
    const adjustedIndex = stepIndex >= 5 ? stepIndex + 1 : stepIndex;

    if (isStepAccessible(stepIndex)) {
      setCurrentStep(adjustedIndex);
      return true;
    }

    return false;
  }, [isStepAccessible]);

  // Recalculate pricing whenever formData is updated
  useEffect(() => {
    calculatePricing();
    if (currentStep > 2) calculateFormColors();

    // Check if current step is complete and mark it
    if (isStepComplete(currentStep)) {
      setCompletedSteps(prev => {
        const newSet = new Set(prev);
        newSet.add(currentStep);
        return newSet;
      });
    }
  }, [formData, currentStep, calculatePricing, calculateFormColors, isStepComplete]);

  return (
      <FormContext.Provider
          value={{
            formData,
            updateFormData,
            currentStep,
            nextStep,
            prevStep,
            price,
            duration,
            calculatePricing,
            color,
            navigateToStep,
            isStepAccessible,
            completedSteps
          }}
      >
        {children}
      </FormContext.Provider>
  );
};