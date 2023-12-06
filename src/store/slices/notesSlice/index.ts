import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { v4 as uuidv4 } from 'uuid';

import { notesInitialState, notesName } from './config';
import { INote, INoteView } from './types';

export const notesSlice = createSlice({
  name: notesName,
  initialState: notesInitialState,
  reducers: {
    addNote: (state, { payload }: PayloadAction<INoteView>) => {
      const id = uuidv4();
      state.push({ ...payload, id });
      return state;
    },
    editNote: (state, { payload }: PayloadAction<INote>) => {
      const noteIndex = state.findIndex((el) => el.id === payload.id);
      if (noteIndex !== -1) {
        state[noteIndex] = payload;
      }
      return state;
    },
    removeNote: (state, action: PayloadAction<string>) => {
      const removedIndex = state.findIndex((el) => el.id === action.payload);
      if (removedIndex !== -1) {
        state.splice(removedIndex, 1);
      }
      return state;
    },
  },
});

export const { addNote, editNote, removeNote } = notesSlice.actions;
export default notesSlice.reducer;
