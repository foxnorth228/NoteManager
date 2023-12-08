import globalConfig from '@config/config';
import NoteList from '@layouts/NoteList';
import TagsFilter from '@layouts/TagsFilter';
import { useSetupStore } from '@store/slices/notesSlice/hooks';
import { INote } from '@store/slices/notesSlice/types';
import React, { useLayoutEffect } from 'react';

import globalStyles from './globalStyles';

const App = () => {
  const setupStore = useSetupStore();
  useLayoutEffect(() => {
    const setDataToStore = async () => {
      const result = (await globalConfig.database.getAll()) as INote[];
      setupStore(result);
    };
    setDataToStore().catch((err) => console.log(err));
  }, [setupStore]);

  return (
    <>
      {globalStyles}
      <TagsFilter />
      <NoteList />
    </>
  );
};

export default App;
