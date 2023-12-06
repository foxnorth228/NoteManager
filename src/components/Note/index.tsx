import HighLightText from '@components/HighLightText';
import config from '@config/config';
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
  const [text, setText] = useState(baseNote.text);
  const editNote = useEditNote();
  const removeNote = useRemoveNote();

  const onClickEdit = useCallback(() => {
    if (isEditable) {
      const regex = new RegExp(config.highlightRegEx.source, config.highlightRegEx.flags + 'g');
      const tags = text.match(regex) ?? [];
      editNote({ text, tags, id: baseNote.id });
    }
    setIsEditable(!isEditable);
  }, [baseNote.id, editNote, isEditable, text]);

  const onClickDelete = useCallback(() => {
    removeNote(baseNote.id);
  }, [baseNote.id, removeNote]);

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
        <HighLightText isDisabled={!isEditable} text={text} setText={setText} />
      </CardContent>
      <CardContent></CardContent>
    </Card>
  );
};

export default Note;
