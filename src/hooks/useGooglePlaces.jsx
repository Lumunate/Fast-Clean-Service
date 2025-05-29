"use client";
import { useState, useEffect, useCallback } from "react";
import { debounce } from "../lib/debounce";

export const useGooglePlaces = () => {
  const [inputValue, setInputValue] = useState("");
  const [options, setOptions] = useState([]);
  const [loading, setLoading] = useState(false);
  const [initialized, setInitialized] = useState(false);

  useEffect(() => {
    // Load the Google Places script
    const script = document.createElement("script");
    script.src = `https://maps.googleapis.com/maps/api/js?key=${process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY}&libraries=places`;
    script.async = true;
    script.onload = () => setInitialized(true);
    document.head.appendChild(script);

    return () => {
      document.head.removeChild(script);
    };
  }, []);

  const fetchPredictions = async (input) => {
    if (!input || !window.google || !initialized) return;

    const service = new window.google.maps.places.AutocompleteService();
    try {
      const response = await service.getPlacePredictions({
        input,
        types: ["geocode", "establishment"],
      });
      setOptions(response.predictions || []);
    } catch (error) {
      console.error("Error fetching place predictions:", error);
      setOptions([]);
    } finally {
      setLoading(false);
    }
  };

  const debouncedFetch = useCallback((value) => debounce(() => fetchPredictions(value), 300)(), [initialized, fetchPredictions]);

  const handleInputChange = (newValue) => {
    setInputValue(newValue);
    if (newValue) {
      setLoading(true);
      debouncedFetch(newValue);
    } else {
      setOptions([]);
    }
  };

  return {
    inputValue,
    options,
    loading,
    initialized,
    handleInputChange,
    setInputValue,
  };
};
