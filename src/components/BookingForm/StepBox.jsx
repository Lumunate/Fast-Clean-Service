import React from 'react';
import Box from '@mui/material/Box';

const StepBox = ({ currentStep, stepIndex, children, transStyles }) => {
  return (
    <Box
      className={currentStep === stepIndex ? 'active' : ''}
      sx={{
        width: 'calc(100% / 11)',
        transition: 'all 300ms ease-in-out',
        opacity: 0,
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
