import { useDispatch, useSelector } from 'react-redux';

import { RootState } from "@src/store";
import { addNote, editNote, removeNote, setupStore } from './index';
import { INote, INoteEdit, INoteView } from './types';

export const useNotes = () => {
  return useSelector((state: RootState) => state.notes);
};

export const useAddNote = () => {
  const dispatch = useDispatch();
  return (note: INoteView) => dispatch(addNote(note));
};

export const useEditNote = () => {
  const dispatch = useDispatch();
  return (note: INoteEdit) => dispatch(editNote(note));
};

export const useRemoveNote = () => {
  const dispatch = useDispatch();
  return (el: { id: string; oldTags: string[] }) => dispatch(removeNote(el));
};

export const useSetupStore = () => {
  const dispatch = useDispatch();
  return (notes: INote[]) => dispatch(setupStore(notes));
};
