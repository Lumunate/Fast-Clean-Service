import React from 'react';
import Box from '@mui/material/Box';

const StepBox = ({ currentStep, stepIndex, children, transStyles }) => {

    const getCustomMargin = () => {
        if (window.innerWidth > 600) return '0';

        const customMargins = {
            8: '-7rem',
            4: '22rem',
            5: '26rem',
            6: '-7rem',
            7: '-7rem',
            9: '-7rem',
            10: '-7rem'
        };

        return customMargins[stepIndex] || '0';
    };

    return (
        <Box
            className={currentStep === stepIndex ? 'active' : ''}
            sx={{
                width: 'calc(100% / 11)',
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