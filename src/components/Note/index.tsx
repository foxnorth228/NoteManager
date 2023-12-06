import HighLightText from '@components/HighLightText';
import ClearIcon from '@mui/icons-material/Clear';
import EditNoteIcon from '@mui/icons-material/EditNote';
import SaveOutlinedIcon from '@mui/icons-material/SaveOutlined';
import { Card, CardActions, CardContent, IconButton } from '@mui/material';
import { useEditNote, useRemoveNote } from '@store/slices/notesSlice/hooks';
import { INote } from '@store/slices/notesSlice/types';
import React, { useCallback, useState } from 'react';

type INoteComponent = {
  baseNote: INote;
};

const Note = ({ baseNote }: INoteComponent) => {
  const [isEditable, setIsEditable] = useState(false);
  const [note, setNote] = useState({ note: '', tags: [] as string[] });
  const editNote = useEditNote();
  const removeNote = useRemoveNote();

  const onClickEdit = useCallback(() => {
    setIsEditable(!isEditable);
  }, [isEditable]);

  const onClickDelete = useCallback(() => {}, []);

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
        <IconButton onClick={onClickEdit}>
          {isEditable ? <SaveOutlinedIcon /> : <EditNoteIcon />}
        </IconButton>
        <IconButton onClick={onClickDelete}>
          <ClearIcon></ClearIcon>
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
        <HighLightText isDisabled={!isEditable} note={note} setNote={setNote} />
      </CardContent>
      <CardContent></CardContent>
    </Card>
  );
};

export default Note;
