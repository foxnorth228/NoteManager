import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { addNote, editNote, removeNote } from '../notesSlice';
import { initialStateTags, nameTagsSlice } from './config';

const tagsSlice = createSlice({
  name: nameTagsSlice,
  initialState: initialStateTags,
  reducers: {
    selectTag: (state, action: PayloadAction<string>) => {
      if (state.selectedTags.includes(action.payload)) {
        const index = state.selectedTags.indexOf(action.payload);
        state.selectedTags.splice(index, 1);
      } else {
        state.selectedTags.push(action.payload);
      }
      console.log(JSON.stringify(state));
      return state;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(addNote, (state, { payload: { tags } }) => {
        for (let i = 0; i < tags.length; ++i) {
          if (tags[i] in state.totalTags) {
            state.totalTags[tags[i]] += 1;
          } else {
            state.totalTags[tags[i]] = 1;
          }
        }
        return state;
      })
      .addCase(editNote, (state, { payload: { tags, oldTags } }) => {
        for (let i = 0; i < oldTags.length; ++i) {
          state.totalTags[oldTags[i]] -= 1;
          if (state.totalTags[oldTags[i]] === 0) {
            delete state.totalTags[oldTags[i]];
          }
        }
        for (let i = 0; i < tags.length; ++i) {
          if (tags[i] in state.totalTags) {
            state.totalTags[tags[i]] += 1;
          } else {
            state.totalTags[tags[i]] = 1;
          }
        }
        return state;
      })
      .addCase(removeNote, (state, { payload: { oldTags } }) => {
        for (let i = 0; i < oldTags.length; ++i) {
          state.totalTags[oldTags[i]] -= 1;
          if (state.totalTags[oldTags[i]] === 0) {
            delete state.totalTags[oldTags[i]];
          }
        }
      });
  },
});

export const { selectTag } = tagsSlice.actions;
export default tagsSlice.reducer;
