import globalConfig from '@config/config';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { v4 as uuidv4 } from 'uuid';

import config from './config';
import { INote, INoteEdit, INoteView } from './types';

export const notesSlice = createSlice({
  name: config.name,
  initialState: config.initialState,
  reducers: {
    setupStore: (state, action: PayloadAction<INote[]>) => {
      if (config.isFirstSetup) {
        config.isFirstSetup = false;
        return [...state, ...action.payload];
      }
      return state;
    },
    addNote: (state, { payload }: PayloadAction<INoteView>) => {
      const id = uuidv4();
      state.push({ ...payload, id });
      globalConfig.database.add({ ...payload, id }).catch((err) => console.log(err));
      return state;
    },
    editNote: (state, { payload }: PayloadAction<INoteEdit>) => {
      const noteIndex = state.findIndex((el) => el.id === payload.id);
      if (noteIndex !== -1) {
        state[noteIndex] = payload;
        globalConfig.database.edit(state[noteIndex]).catch((err) => console.log(err));
      }
      return state;
    },
    removeNote: (state, action: PayloadAction<{ id: string; oldTags: string[] }>) => {
      const removedIndex = state.findIndex((el) => el.id === action.payload.id);
      if (removedIndex !== -1) {
        state.splice(removedIndex, 1);
        globalConfig.database.deleteById(action.payload.id).catch((err) => console.log(err));
      }
      return state;
    },
  },
});

export const { addNote, editNote, removeNote, setupStore } = notesSlice.actions;
export default notesSlice.reducer;
