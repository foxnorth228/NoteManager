import NoteList from '@layouts/NoteList';
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
      <NoteList />
    </div>
  );
};

export default App;
