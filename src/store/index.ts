import { configureStore } from '@reduxjs/toolkit';
import NotesReducer from '@store/slices/notesSlice';
import { default as configNotes } from '@store/slices/notesSlice/config';
import TagsReducer from '@store/slices/tagsSlice';
import { default as configTags } from '@store/slices/tagsSlice/config';

const store = configureStore({
  // REDUCER JUST DON'T LIKE DEFAULT IMPORTS
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-expect-error
  reducer: {
    [configNotes.name]: NotesReducer,
    [configTags.name]: TagsReducer,
  },
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
