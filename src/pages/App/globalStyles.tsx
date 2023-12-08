import { GlobalStyles } from '@mui/material';
import React from 'react';

const globalStyles = (
  <GlobalStyles
    styles={(theme) => ({
      ':root': { boxSizing: 'border-box' },
      body: { margin: 0, minHeight: '100vh', backgroundColor: theme.palette.custom.background },
      '#root': { minHeight: '100vh' },
      '*': { boxSizing: 'inherit' },
      ':before': { boxSizing: 'inherit' },
      ':after': { boxSizing: 'inherit' },
    })}
  />
);

export default globalStyles;
