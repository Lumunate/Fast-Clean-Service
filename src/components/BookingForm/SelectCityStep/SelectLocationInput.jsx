"use client";
import LocationSearch from "./LocationSearch";
import useMultiStepForm from "../../../hooks/useMultiStepForm";
import { useValidation } from "../../../contexts/ValidationContext";
import { useEffect } from "react";

export const calculateDistance = async (destination) => {
  if (!window.google) {
    throw new Error("Google Maps not loaded");
  }

  const service = new window.google.maps.DistanceMatrixService();
  const baseLocation = process.env.NEXT_PUBLIC_BASE_LOCATION;

  try {
    const response = await service.getDistanceMatrix({
      origins: [baseLocation],
      destinations: [destination],
      travelMode: "DRIVING",
      unitSystem: window.google.maps.UnitSystem.METRIC,
    });

    if (response.rows[0].elements[0].status === "OK") {
      // Returns distance in meters
      return {
        distance: response.rows[0].elements[0].distance.value,
        duration: response.rows[0].elements[0].duration.value, // in seconds
        distanceText: response.rows[0].elements[0].distance.text,
        durationText: response.rows[0].elements[0].duration.text,
      };
    } else {
      throw new Error("Could not calculate distance");
    }
  } catch (error) {
    console.error("Error calculating distance:", error);
    throw error;
  }
};

const SelectLocationInput = () => {
  const form = useMultiStepForm();
  const { updateValidation } = useValidation();

  useEffect(() => {
    updateValidation(form.formData?.location !== "");
  }, [form.formData?.location, updateValidation]);

  const handlePlaceSelect = async (place) => {
    if (place) {
      try {
        const { distance: distanceInMeters, duration } = await calculateDistance(place.description);
        const distanceInKm = Math.round(distanceInMeters / 1000);

        form.updateFormData({
          location: place.description,
          travelDistance: distanceInKm,
          travelDuration: duration, 
        });
        updateValidation(true);
      } catch (error) {
        console.error("Error getting distance:", error);
        // Handle error appropriately
      }
    }
  };

  return <LocationSearch onPlaceSelect={handlePlaceSelect} />;
};

export default SelectLocationInput;
