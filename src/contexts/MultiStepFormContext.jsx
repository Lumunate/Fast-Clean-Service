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
    selectedTime: '',
  });
  const [price, setPrice] = useState(0);
  const [duration, setDuration] = useState(0);
  const [currentStep, setCurrentStep] = useState(1);
  const [color, setColor] = useState('#000000');

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

          // const addonDuration =
          //   pkg.additionalOptions.interior.find((a) => a.name === addon)?.additionalTime ||
          //   pkg.additionalOptions.exterior.find((a) => a.name === addon)?.additionalTime;

          newPrice += addonPrice;
          // duration += addonDuration;
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

    setPrice(newPrice);
    setDuration(duration);
  }, [formData, price]);

  const calculateFormColors = useCallback(() => {
    const colors = {
      Standard: '#5dfa48',
      Interior: '#5dfa48',
      Deluxe: '#0088ff',
      Exterior: '#0088ff',
      Premium: '#ffd02b',
      Combi: '#ffd02b',
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

  // Recalculate pricing whenever formData is updated
  useEffect(() => {
    calculatePricing();
    if (currentStep > 3) calculateFormColors();
  }, [formData, currentStep, calculatePricing, calculateFormColors]);

  const nextStep = async (step = 1) => {
    if (currentStep === 11) {
      // Submit the form
      try {
        const data = {
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
          body: JSON.stringify(data), // Stringify the data object
          credentials: 'include',
        });

        const res = await response.json();
        console.log('Response:', res);
        if (res.success) {
          openSnackbar('Form submitted successfully!');
          setPrice(0);
          setFormData({});
          setCurrentStep(1);
        }
      } catch (err) {
        console.error('Error submitting form:', err);
        openSnackbar('Error submitting form');
      } finally {
        return;
      }
    }

    setCurrentStep((prevStep) => prevStep + step);
  };

  const prevStep = () => {
    if (currentStep === 1) return;
    if (
      currentStep === 7 &&
      formData?.selectedPackageType === 'Subscription Plans'
    ) {
      setCurrentStep((prevStep) => prevStep - 2);
      return;
    }
    setCurrentStep((prevStep) => prevStep - 1);
  };

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
      }}
    >
      {children}
    </FormContext.Provider>
  );
};
