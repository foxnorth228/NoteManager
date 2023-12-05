import Note from '@components/Note';
import { GlobalStyles } from '@mui/material';
import React from 'react';

const globalStyles = (
  <GlobalStyles
    styles={() => ({
      ':root': { boxSizing: 'border-box' },
      '*': { boxSizing: 'inherit' },
      ':before': { boxSizing: 'inherit' },
      ':after': { boxSizing: 'inherit' },
    })}
  />
);

const App = () => {
  return (
    <div>
      {globalStyles}
      Hello world
      <Note></Note>
    </div>
  );
};

export default App;
