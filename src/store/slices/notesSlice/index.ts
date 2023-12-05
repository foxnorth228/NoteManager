import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { notesInitialState, notesName } from './config';
import { INote } from './types';

export const notesSlice = createSlice({
  name: notesName,
  initialState: notesInitialState,
  reducers: {
    addNote: (state, { payload }: PayloadAction<INote>) => {
      const isNotExist = state.findIndex((el) => el.id === payload.id) === -1;
      if (isNotExist) {
        state.push(payload);
      }
      return state;
    },
    editNote: (state, { payload }: PayloadAction<INote>) => {
      const noteIndex = state.findIndex((el) => el.id === payload.id);
      if (noteIndex !== -1) {
        state[noteIndex] = payload;
      }
      return state;
    },
    removeNote: (state, action: PayloadAction<number>) => {
      const removedIndex = state.findIndex((el) => el.id === action.payload);
      state.splice(removedIndex, 1);
      return state;
    },
  },
});

export const { addNote, editNote, removeNote } = notesSlice.actions;
export default notesSlice.reducer;
