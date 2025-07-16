'use client';
import React, { createContext, useState, useEffect, useCallback } from 'react';
import { useSession } from 'next-auth/react';
import useSnackbar from '../hooks/useSnackbar';

export const FormContext = createContext();

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
    bookingId: null,
  });
  const [price, setPrice] = useState(0);
  const [duration, setDuration] = useState(0);
  const [currentStep, setCurrentStep] = useState(0);
  const [color, setColor] = useState('#000000');
  const [completedSteps, setCompletedSteps] = useState(new Set([0]));

  function parseHighestDuration(durationStr) {
    const cleaned = durationStr.replace(/[^\d/-]/g, '');

    const numbers = cleaned.split('/').map(Number);
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
    console.log("package selected:", pkg);
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
    console.log("vehicle duration:", duration);
    newPrice += pkg.vehicleOptions[carType]?.additionalCost || 0;
    console.log("vehicle price added:", newPrice);


    newPrice += parseFloat(pkg.price.replace('€', '').trim());
    console.log("package price added:", newPrice);
    duration += parseHighestDuration(pkg.duration);

    if (formData.selectedPackageType === 'Subscription Plans') {
      if (formData.selectedAdditionalOptions?.length > 0) {
        Object.values(formData.selectedAdditionalOptions).forEach((addon) => {
          const _addon = pkg.additionalOptions.find((a) => a._id === addon);
          const addonPrice = _addon?.additionalCost;
          const addonDuration = _addon?.additionalTime;

          if (addonPrice !== undefined || addonDuration !== undefined) {
            newPrice += addonPrice;
            duration += addonDuration;
          }
        });
      }
    } else {
      if (formData.selectedAdditionalOptions?.length > 0) {
        Object.values(formData.selectedAdditionalOptions).forEach((addon) => {
          const addonPrice =
              pkg.additionalOptions?.interior?.find((a) => a._id === addon)
                  ?.additionalCost ||
              pkg.additionalOptions?.exterior?.find((a) => a._id === addon)
                  ?.additionalCost ||
              0;

          newPrice += addonPrice;
        });
      }
      if (formData.selectedDetailingOptions?.length > 0) {
        Object.values(formData.selectedDetailingOptions).forEach((addon) => {
          const addonPrice = pkg.additionalOptions?.detailing?.find(
              (a) => a._id === addon
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
    setFormData((prevData) => {
      if (newData.carType === 'Coupe') {
        newData.carType = 'Coupé';
      }
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

  const isStepComplete = useCallback((step) => {
    switch (step) {
      case 0:
        return !!formData.service;
      case 1:
        return !!formData.licensePlate && !!formData.vehicleDetails;
      case 2:
        return !!formData.carType;
      case 3:
        return !!formData.selectedPackageType;
      case 4:
        if (formData.selectedPackageType === 'Subscription Plans') {
          return !!formData.selectedPackage && !!formData.packageType;
        }
        return true;
      case 5:
        if (formData.selectedPackageType === 'Anywhere Autocare') {
          return !!formData.selectedPackage && !!formData.packageType;
        }
        return true;
      case 6:
        return true;
      case 7:
        return true;
      case 8:
        return !!formData.selectedTime;
      case 9:
        return true;
      case 10:
        return !!formData.firstName && !!formData.surname && !!formData.email && !!formData.phoneNumber;
      case 11:
        return true;
      default:
        return false;
    }
  }, [formData]);

  const nextStep = async (step = 1) => {
    setCompletedSteps(prev => {
      const newSet = new Set(prev);
      newSet.add(currentStep);
      return newSet;
    });

    if (currentStep === 10) {
      const location =
          formData.location || '';
      if (location === '' || location === undefined) {
        openSnackbar("Please complete all required fields before submitting.");
        return;
      }
      try {
        const data = {
          type: formData.service,
          firstName: formData.firstName,
          surname: formData.surname,
          companyName: formData.companyName,
          street: formData.street,

         zipCode: formData.zipCode || "1011AC",
          city: formData.location,
          email: formData.email,
          phoneNumber: formData.phoneNumber,
          vehicleMakeAndModel: formData.makeModel,
          message: formData.bookingMessage,
          serviceName: formData.selectedPackageType,
          packageType: formData.packageType.name,
          packageName: formData.selectedPackage.id,
          appointmentTimestamp: formData.selectedTime,
          vehicleDetails: formData.vehicleDetails,
          vehicleType: formData.carType,

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

        if (!response.ok) {
          const err = await response.json();
          openSnackbar(err.message || 'Failed to create booking');
          return;            // ←— prevent setCurrentStep
        }

        const res = await response.json();
        if (!res.success) {
          openSnackbar(res.error || 'Server rejected booking');
          return;            // ←— prevent setCurrentStep
        }
        if (res.success) {
          openSnackbar('Form submitted successfully!');
          setFormData(prev => ({
            ...prev,
            bookingId: res.data._id,
          }));
        }
      } catch (err) {
        openSnackbar('Error submitting form');
        return;
      }
    }

    const newStep = currentStep + step;
    setCurrentStep(newStep);

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

  const isStepAccessible = useCallback((stepIndex) => {
    const adjustedIndex = stepIndex >= 5 ? stepIndex + 1 : stepIndex;
    if (adjustedIndex <= currentStep) {
      return true;
    }

    if (adjustedIndex === currentStep + 1) {
      for (let i = 0; i < currentStep; i++) {
        if (!completedSteps.has(i)) {
          return false;
        }
      }
      return true;
    }

    return false;
  }, [currentStep, completedSteps]);

  const navigateToStep = useCallback((stepIndex) => {
    const adjustedIndex = stepIndex >= 5 ? stepIndex + 1 : stepIndex;

    if (isStepAccessible(stepIndex)) {
      setCurrentStep(adjustedIndex);
      return true;
    }

    return false;
  }, [isStepAccessible]);

  useEffect(() => {
    calculatePricing();
    if (currentStep > 2) calculateFormColors();

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