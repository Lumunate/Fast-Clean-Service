"use client";
import React, {createContext, useContext, useState, useCallback, useMemo} from 'react';

const ValidationContext = createContext(null);

export const ValidationProvider = ({ children }) => {
    const [isValid, setIsValid] = useState(false);
    const updateValidation = useCallback((valid) => {
        setIsValid(valid);
        }, []);

    const value = useMemo(() => ({ isValid, updateValidation }), [isValid, updateValidation]);
    return (
        <ValidationContext.Provider value={value}>
            {children}
        </ValidationContext.Provider>
    );
};

export const useValidation = () => useContext(ValidationContext);
