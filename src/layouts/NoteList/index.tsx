import Note from '@components/Note';
import NoteNew from '@components/NoteNew';
import { Box } from '@mui/material';
import { useNotes } from '@store/slices/notesSlice/hooks';
import { useSelectedTags } from '@store/slices/tagsSlice/hooks';
import React from 'react';

const NoteList = () => {
  const notes = useNotes();
  const selectedTags = useSelectedTags();
  console.log(notes);
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
      sx={{
        display: 'grid',
        padding: 2,
        rowGap: 3,
        gridTemplateColumns: { xs: '1fr', sm: '1fr 1fr', md: 'repeat(3, 1fr)', xl: 'repeat(4, 1fr)' },
        justifyItems: 'center',
      }}
    >
      <NoteNew />
      {filteredNotes.map((el) => (
        <Note key={el.id} baseNote={el} />
      ))}
    </Box>
  );
};

export default NoteList;
