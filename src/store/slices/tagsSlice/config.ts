import { ITagsSlice } from './types';

const config = {
  name: 'tags',
  initialState: {
    totalTags: {},
    selectedTags: [],
  } as ITagsSlice,
  isFirstSetup: true,
};

export default config;
export const nameTags = 'tags';
