import Note from '@components/Note';
import NoteNew from '@components/NoteNew';
import { Box } from '@mui/material';
import { useNotes } from '@store/slices/notesSlice/hooks';
import React from 'react';

const NoteList = () => {
  const notes = useNotes();
  return (
    <Box sx={{ display: 'grid', rowGap: 3, gridTemplateColumns: { xl: 'repeat(4, 1fr)' } }}>
      <NoteNew />
      {notes.map((el) => (
        <Note key={el.id} baseNote={el} />
      ))}
    </Box>
  );
};

export default NoteList;
