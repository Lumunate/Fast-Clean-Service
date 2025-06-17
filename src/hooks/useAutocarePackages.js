import { useState, useEffect, useCallback } from 'react';

export const useAutocarePackages = () => {
  const [packages, setPackages] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchPackages = useCallback(async () => {
    try {
      setLoading(true);
      setError(null);
      const response = await fetch('/api/packages/autocare');
      if (!response.ok) {
        throw new Error('Failed to fetch autocare packages');
      }
      const data = await response.json();
      
      setPackages(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }, []);

  const createPackage = useCallback(async (packageData) => {
    try {
      setLoading(true);
      setError(null);
      const response = await fetch('/api/packages/autocare', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(packageData),
      });
      if (!response.ok) {
        throw new Error('Failed to create autocare package');
      }
      const data = await response.json();
      setPackages(prev => prev ? [...prev, data] : [data]);
      return data;
    } catch (err) {
      setError(err.message);
      throw err;
    } finally {
      setLoading(false);
    }
  }, []);

  const updatePackage = useCallback(async (id, packageData) => {
    try {
      setLoading(true);
      setError(null);
      const response = await fetch(`/api/packages/autocare?id=${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(packageData),
      });
      if (!response.ok) {
        throw new Error("Failed to update autocare package");
      }
      const data = await response.json();
      setPackages(prev => {
        return {
          packages: data,
          options: prev.options,
        }
      });
      return data;
    } catch (err) {
      setError(err.message);
      throw err;
    } finally {
      setLoading(false);
    }
  }, []);

  const updatePartialPackage = useCallback(async (id, partialData) => {
    try {
      setLoading(true);
      setError(null);
      const response = await fetch(`/api/packages/autocare/${id}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(partialData),
      });
      if (!response.ok) {
        throw new Error('Failed to update autocare package');
      }
      const data = await response.json();
      setPackages(prev => 
        prev.map(pkg => pkg.id === id ? { ...pkg, ...data } : pkg)
      );
      return data;
    } catch (err) {
      setError(err.message);
      throw err;
    } finally {
      setLoading(false);
    }
  }, []);

  const deletePackage = useCallback(async (id) => {
    try {
      setLoading(true);
      setError(null);
      const response = await fetch(`/api/packages/autocare/${id}`, {
        method: 'DELETE',
      });
      if (!response.ok) {
        throw new Error('Failed to delete autocare package');
      }
      setPackages(prev => 
        prev.filter(pkg => pkg.id !== id)
      );
      return true;
    } catch (err) {
      setError(err.message);
      throw err;
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchPackages();
  }, [fetchPackages]);

  return {
    packages,
    loading,
    error,
    fetchPackages,
    createPackage,
    updatePackage,
    updatePartialPackage,
    deletePackage,
  };
};
