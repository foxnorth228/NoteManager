import { useDispatch, useSelector } from 'react-redux';

import { RootState } from '../../index';
import { selectTag } from './index';

export const useTags = () => {
  return useSelector((state: RootState) => state.tags);
};

export const useTotalTags = () => {
  const totalTags = useSelector((state: RootState) => state.tags.totalTags);
  return Object.keys(totalTags);
};

export const useSelectedTags = () => {
  return useSelector((state: RootState) => state.tags.selectedTags);
};

export const useSelectTag = () => {
  const dispatch = useDispatch();
  return (tag: string) => dispatch(selectTag(tag));
};
