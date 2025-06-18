import { useState, useEffect, useCallback } from 'react';
import { useLocale } from 'next-intl'

const TRANSLATE_API = '/api/translate'
export const useAutocarePackages = () => {
  const locale = useLocale()
  const [packages, setPackages] = useState(null);
  const [translated, setTranslated] = useState(null);
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
      setTranslated(null);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    if (!packages || locale !== 'en') return;

    const { packages: pkgs } = packages;
    // 1) flatten out every string you want to translate
    const textArray = [];
    const pointers = [];
    ['standard','deluxe','premium'].forEach(tab => {
      pkgs[tab]?.forEach((pkg, i) => {
        // description
        pointers.push({ tab, i, field: 'description' });
        textArray.push(pkg.description);
        // bullet points
        pkg.packages.forEach((pt, j) => {
          pointers.push({ tab, i, field: 'packages', index: j });
          textArray.push(pt);
        });
      });
    });

    // 2) send for translation
    fetch('/api/translate', {
      method: 'POST',
      headers: {'Content-Type':'application/json'},
      body: JSON.stringify({ textArray, targetLang: 'en' })
    })
        .then(r => r.json())
        .then(({ translations }) => {
          // 3) rebuild a new object mapping back translations
          const copy = JSON.parse(JSON.stringify(pkgs));
          translations.forEach((tr, idx) => {
            const p = pointers[idx];
            if (p.field === 'description') {
              copy[p.tab][p.i].description = tr;
            } else {
              copy[p.tab][p.i].packages[p.index] = tr;
            }
          });
          setTranslated({ packages: copy });
        })
        .catch(() => {
          // fail softly: leave Dutch
          setTranslated(null);
        });
  }, [packages, locale]);

  // expose whichever is appropriate
  const display = (locale === 'en' && translated) ? translated : packages;


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
    packages: display,
    loading,
    error,
    fetchPackages,
    createPackage,
    updatePackage,
    updatePartialPackage,
    deletePackage,
  };
};
