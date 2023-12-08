import Note from '@components/Note';
import NoteNew from '@components/NoteNew';
import { Box } from '@mui/material';
import { useNotes } from '@store/slices/notesSlice/hooks';
import { useSelectedTags } from '@store/slices/tagsSlice/hooks';
import React from 'react';

const NoteList = () => {
  const notes = useNotes();
  const selectedTags = useSelectedTags();
  const filteredNotes = notes.filter((el) => {
    if (
      selectedTags.length === 0 ||
      el.tags.length === 0 ||
      el.tags.some((tag) => selectedTags.includes(tag))
    ) {
      return el;
    }
  });
  return (
    <Box
      sx={{ display: 'grid', padding: 2, rowGap: 3, gridTemplateColumns: { xl: 'repeat(4, 1fr)' } }}
    >
      <NoteNew />
      {filteredNotes.map((el) => (
        <Note key={el.id} baseNote={el} />
      ))}
    </Box>
  );
};

export default NoteList;
