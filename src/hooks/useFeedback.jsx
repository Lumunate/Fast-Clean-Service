import { useState, useCallback, useMemo } from 'react';

export const useFeedback = () => {
  // State for feedback list and pagination
  const [feedbacks, setFeedbacks] = useState([]);
  const [pagination, setPagination] = useState({
    total: 0,
    page: 1,
    limit: 10,
    totalPages: 0,
    hasMore: false,
  });

  // State for single feedback
  const [selectedFeedback, setSelectedFeedback] = useState(null);

  // Shared loading and error states
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);

  // Reset state function
  const reset = useCallback(() => {
    setError(null);
    setSuccess(false);
    setIsLoading(false);
  }, []);

  // Submit feedback function
  const submitFeedback = useCallback(async (feedbackData) => {
    try {
      setIsLoading(true);
      setError(null);
      setSuccess(false);

      const response = await fetch('/api/feedback', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(feedbackData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || 'Failed to submit feedback');
      }

      setSuccess(true);
      // Optionally update the feedback list if it's being displayed
      setFeedbacks(prev => [data.data, ...prev]);
      return data;
    } catch (err) {
      setError(err.message);
      throw err;
    } finally {
      setIsLoading(false);
    }
  }, []);

  // Fetch feedback list function
  const fetchFeedbacks = useCallback(async (page = 1, limit = 10) => {
    try {
      setIsLoading(true);
      setError(null);

      const response = await fetch(
        `/api/feedback?page=${page}&limit=${limit}`
      );
      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || 'Failed to fetch feedback');
      }

      setFeedbacks(data.feedback);
      setPagination(data.pagination);
      return data;
    } catch (err) {
      setError(err.message);
      throw err;
    } finally {
      setIsLoading(false);
    }
  }, []);

  // Fetch single feedback function
  const fetchFeedbackById = useCallback(async (id) => {
    try {
      setIsLoading(true);
      setError(null);

      const response = await fetch(`/api/feedback?id=${id}`);
      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || 'Failed to fetch feedback');
      }

      setSelectedFeedback(data.data);
      return data.data;
    } catch (err) {
      setError(err.message);
      throw err;
    } finally {
      setIsLoading(false);
    }
  }, []);

  // Memoized pagination information
  const paginationInfo = useMemo(() => ({
    currentPage: pagination.page,
    totalPages: pagination.totalPages,
    hasNextPage: pagination.hasMore,
    hasPreviousPage: pagination.page > 1,
  }), [pagination]);

  // Memoized loading states
  const loadingStates = useMemo(() => ({
    isLoading,
    isSuccess: success,
    isError: !!error,
    error,
  }), [isLoading, success, error]);

  return {
    // Data
    feedbacks,
    selectedFeedback,
    pagination: paginationInfo,
    
    // Actions
    submit: submitFeedback,
    fetchAll: fetchFeedbacks,
    fetchById: fetchFeedbackById,
    reset,

    // States
    ...loadingStates,
  };
};
