import HighLightText from '@components/HighLightText';
import config from '@config/config';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import { Card, CardActions, CardContent, IconButton } from '@mui/material';
import React, { useCallback, useState } from 'react';

import { useAddNote } from '../../store/slices/notesSlice/hooks';

const NoteNew = () => {
  const addNote = useAddNote();
  const [text, setText] = useState('');

  const onClickAdd = useCallback(() => {
    const regex = new RegExp(config.highlightRegEx.source, config.highlightRegEx.flags + 'g');
    const tags = text.match(regex) ?? [];
    addNote({ text: text, tags });
    setText('');
  }, [addNote, text]);

  return (
    <Card
      sx={{
        display: 'grid',
        gridTemplateRows: 'min-content 4fr 1fr',
        maxWidth: 400,
        minHeight: 400,
        boxShadow: 3,
      }}
    >
      <CardActions sx={{ justifyContent: 'flex-end' }}>
        <IconButton onClick={onClickAdd}>
          <AddCircleOutlineIcon />
        </IconButton>
      </CardActions>
      <CardContent
        sx={{
          borderTop: 1,
          borderBottom: 1,
          borderColor: 'grey.300',
          padding: 0,
          position: 'relative',
        }}
      >
        <HighLightText text={text} setText={setText} />
      </CardContent>
      <CardContent></CardContent>
    </Card>
  );
};

export default NoteNew;
