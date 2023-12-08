import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import { IconButton } from '@mui/material';
import { useAddNote } from '@store/slices/notesSlice/hooks';
import React, { useCallback, useState } from 'react';

import NoteCard from '../NoteCard';

const NoteNew = () => {
  const [text, setText] = useState('');
  const [tags, setTags] = useState<Array<string>>([]);

  const addNote = useAddNote();

  const onClickAdd = useCallback(() => {
    if (text === '') {
      return;
    }
    addNote({ text: text, tags });
    setText('');
  }, [addNote, tags, text]);

  return (
    <NoteCard text={text} setText={setText} tags={tags} setTags={setTags}>
      <>
        <IconButton onClick={onClickAdd}>
          <AddCircleOutlineIcon />
        </IconButton>
      </>
    </NoteCard>
  );
};

export default NoteNew;
