import Note from '@components/Note';
import NoteNew from '@components/NoteNew';
import { useNotes } from '@store/slices/notesSlice/hooks';
import React from 'react';

const NoteList = () => {
  const notes = useNotes();
  console.log(notes);
  return (
    <>
      <NoteNew />
      {/*<Note />*/}
    </>
  );
};

export default NoteList;
