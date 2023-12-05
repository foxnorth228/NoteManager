import HighLightText from '@components/HighLightText';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import { Card, CardActions, CardContent, IconButton } from '@mui/material';
import React, { useCallback, useState } from 'react';

import { useAddNote } from '../../store/slices/notesSlice/hooks';

const Note = () => {
  const addNote = useAddNote();
  const [note, setNote] = useState({ note: '', tags: [] as string[] });
  const onClickAdd = useCallback(() => {}, []);

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
        <HighLightText note={note} setNote={setNote} />
      </CardContent>
      <CardContent></CardContent>
    </Card>
  );
};

export default Note;
