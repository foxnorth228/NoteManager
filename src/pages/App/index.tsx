import NoteList from '@layouts/NoteList';
import TagsFilter from '@layouts/TagsFilter';
import { GlobalStyles } from '@mui/material';
import React, { useLayoutEffect } from 'react';

import config from '../../config/config';
import { useSetupStore } from '../../store/slices/notesSlice/hooks';
import { INote } from '../../store/slices/notesSlice/types';

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
  const setupStore = useSetupStore();
  useLayoutEffect(() => {
    console.log('setup');
    const setDataToStore = async () => {
      const result = (await config.database.getAll()) as INote[];
      console.log(result);
      setupStore(result);
    };
    setDataToStore().catch((err) => console.log(err));
  }, [setupStore]);

  return (
    <div>
      {globalStyles}
      <TagsFilter />
      <NoteList />
    </div>
  );
};

export default App;
