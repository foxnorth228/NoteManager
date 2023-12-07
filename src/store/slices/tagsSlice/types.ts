export interface ITagsSlice {
  totalTags: {
    [key: string]: number;
  };
  selectedTags: string[];
}
