import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { v4 as uuidv4 } from 'uuid';

import { notesInitialState, notesName } from './config';
import { INote, INoteEdit, INoteView } from './types';
import config from '@config/config';

let isFirstCall = true;

export const notesSlice = createSlice({
  name: notesName,
  initialState: notesInitialState,
  reducers: {
    setupStore: (state, action: PayloadAction<INote[]>) => {
      if (isFirstCall) {
        isFirstCall = false;
        return [...state, ...action.payload];
      }
      return state;
    },
    addNote: (state, { payload }: PayloadAction<INoteView>) => {
      const id = uuidv4();
      state.push({ ...payload, id });
      config.database.add({ ...payload, id }).catch((err) => console.log(err));
      return state;
    },
    editNote: (state, { payload }: PayloadAction<INoteEdit>) => {
      const noteIndex = state.findIndex((el) => el.id === payload.id);
      if (noteIndex !== -1) {
        state[noteIndex] = payload;
        config.database.edit(state[noteIndex]).catch((err) => console.log(err));
      }
      return state;
    },
    removeNote: (state, action: PayloadAction<{ id: string; oldTags: string[] }>) => {
      const removedIndex = state.findIndex((el) => el.id === action.payload.id);
      if (removedIndex !== -1) {
        state.splice(removedIndex, 1);
        config.database.deleteById(action.payload.id).catch((err) => console.log(err));
      }
      return state;
    },
  },
});

export const { addNote, editNote, removeNote, setupStore } = notesSlice.actions;
export default notesSlice.reducer;
