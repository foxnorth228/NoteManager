import { configureStore } from '@reduxjs/toolkit';

import NotesReducer from './slices/notesSlice';
import { notesName } from './slices/notesSlice/config';

const store = configureStore({
  reducer: {
    [notesName]: NotesReducer,
  },
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
