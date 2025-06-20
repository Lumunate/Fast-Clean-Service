import React from 'react';
import Box from '@mui/material/Box';

const StepBox = ({ currentStep, stepIndex, children, transStyles, packageTypeName,  carType  }) => {

    const value = ( window.innerWidth > 389 ? "-7rem" : "0rem")
    const forSummery = ( window.innerWidth > 389 ? "-7rem" : "-8rem")


    const getCustomMargin = () => {
        if (window.innerWidth > 600) return '0';

        const customMargins = {
            8: value,
            4: '22rem',
            5: (packageTypeName === 'premium' || carType === 'Motorbike') ? '0' : '26rem', 
            6: '-5rem',
            7: '-7rem',
            9: forSummery,
            10: forSummery,
            11: forSummery
        };

        return customMargins[stepIndex] || '0';
    };

    return (
        <Box
            className={currentStep === stepIndex ? 'active' : ''}
            sx={{
                 width: currentStep === 8 || currentStep === 7 ? 'calc(100% / 12)' : 'calc(100% / 11)',
                transition: 'all 300ms ease-in-out',
                opacity: 0,
                marginLeft: {
                    xs: currentStep === stepIndex ? getCustomMargin() : '0',
                    sm: '0'
                },
                ...transStyles[
                    currentStep > stepIndex
                        ? 'left'
                        : currentStep === stepIndex
                            ? 'center'
                            : 'right'
                    ],
            }}
        >
            {children}
        </Box>
    );
};

export default StepBox;