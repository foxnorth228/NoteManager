import NoteList from '@layouts/NoteList';
import TagsFilter from '@layouts/TagsFilter';
import { GlobalStyles } from '@mui/material';
import React from 'react';

const globalStyles = (
  <GlobalStyles
    styles={() => ({
      ':root': { boxSizing: 'border-box' },
      body: { margin: 0 },
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
      <TagsFilter />
      <NoteList />
    </div>
  );
};

export default App;
