import { createSlice, PayloadAction } from '@reduxjs/toolkit';

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
      console.log(JSON.stringify(state))
      return state;
    },
  },
});

export const { selectTag } = tagsSlice.actions;
export default tagsSlice.reducer;
