import { configureStore } from '@reduxjs/toolkit';
import NotesReducer from '@store/slices/notesSlice';
import { notesName } from '@store/slices/notesSlice/config';
import TagsReducer from '@store/slices/tagsSlice';
import { nameTagsSlice } from '@store/slices/tagsSlice/config';

const store = configureStore({
  reducer: {
    [notesName]: NotesReducer,
    [nameTagsSlice]: TagsReducer,
  },
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
