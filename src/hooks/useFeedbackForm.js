import { useState } from 'react';
import axios from 'axios';

export const useSubmitFeedbackForm = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const submitForm = async (formData) => {
    setLoading(true);
    try {
      const response = await axios.post('/api/feedback', formData, {
        headers: {
          'Content-Type': 'application/json',
        },
      });
      setLoading(false);
      return response.data;
    } catch (err) {
      setError(err);
      setLoading(false);
      throw err;
    }
  };

  return { submitForm, loading, error };
};
