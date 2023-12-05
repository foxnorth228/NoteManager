import Note from '@components/Note';
import NoteNew from '@components/NoteNew';
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
      <NoteNew />
      <Note />
    </div>
  );
};

export default App;
