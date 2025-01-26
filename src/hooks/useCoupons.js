// src/hooks/useCoupons.js
import { useState } from 'react';

export const useCoupons = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // Get all coupons
  const getCoupons = async (includeInactive = false) => {
    setLoading(true);
    setError(null);
    try {
      const response = await fetch(`/api/coupons?includeInactive=${includeInactive}`);
      if (!response.ok) {
        throw new Error('Failed to fetch coupons');
      }
      return await response.json();
    } catch (err) {
      setError(err.message || 'Failed to fetch coupons');
      return [];
    } finally {
      setLoading(false);
    }
  };

  // Get single coupon
  const getCoupon = async (id) => {
    setLoading(true);
    setError(null);
    try {
      const response = await fetch(`/api/coupons/${id}`);
      if (!response.ok) {
        throw new Error('Failed to fetch coupon');
      }
      return await response.json();
    } catch (err) {
      setError(err.message || 'Failed to fetch coupon');
      return null;
    } finally {
      setLoading(false);
    }
  };

  // Create coupon
  const createCoupon = async (data) => {
    setLoading(true);
    setError(null);
    try {
      const response = await fetch('/api/coupons', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });
      if (!response.ok) {
        throw new Error('Failed to create coupon');
      }
      return await response.json();
    } catch (err) {
      setError(err.message || 'Failed to create coupon');
      return null;
    } finally {
      setLoading(false);
    }
  };

  // Update coupon
  const updateCoupon = async (id, data) => {
    setLoading(true);
    setError(null);
    try {
      const response = await fetch(`/api/coupons/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });
      if (!response.ok) {
        throw new Error('Failed to update coupon');
      }
      return await response.json();
    } catch (err) {
      setError(err.message || 'Failed to update coupon');
      return null;
    } finally {
      setLoading(false);
    }
  };

  // Delete coupon
  const deleteCoupon = async (id) => {
    setLoading(true);
    setError(null);
    try {
      const response = await fetch(`/api/coupons/${id}`, {
        method: 'DELETE',
      });
      if (!response.ok) {
        throw new Error('Failed to delete coupon');
      }
      return true;
    } catch (err) {
      setError(err.message || 'Failed to delete coupon');
      return false;
    } finally {
      setLoading(false);
    }
  };

  // Validate coupon
  const validateCoupon = async (code) => {
    setLoading(true);
    setError(null);
    try {
      const response = await fetch(`/api/coupons/validate/${code}`);
      if (!response.ok) {
        throw new Error('Failed to validate coupon');
      }
      return await response.json();
    } catch (err) {
      setError(err.message || 'Failed to validate coupon');
      return { valid: false, message: 'Failed to validate coupon' };
    } finally {
      setLoading(false);
    }
  };

  // Apply coupon
  const applyCoupon = async (code, price) => {
    setLoading(true);
    setError(null);
    try {
      const response = await fetch(`/api/coupons/redeem/${code}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ price }),
      });
      if (!response.ok) {
        throw new Error('Failed to apply coupon');
      }
      return await response.json();
    } catch (err) {
      setError(err.message || 'Failed to apply coupon');
      return { success: false, message: 'Failed to apply coupon' };
    } finally {
      setLoading(false);
    }
  };

  return {
    getCoupons,
    getCoupon,
    createCoupon,
    updateCoupon,
    deleteCoupon,
    validateCoupon,
    applyCoupon,
    loading,
    error,
  };
};