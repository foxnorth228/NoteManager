import { configureStore } from '@reduxjs/toolkit';
import NotesReducer from '@store/slices/notesSlice';
import { nameNotes } from '@store/slices/notesSlice/config';
import TagsReducer from '@store/slices/tagsSlice';
import { nameTags } from '@store/slices/tagsSlice/config';

const store = configureStore({
  reducer: {
    [nameNotes]: NotesReducer,
    [nameTags]: TagsReducer,
  },
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
