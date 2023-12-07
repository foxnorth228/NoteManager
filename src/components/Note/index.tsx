import ClearIcon from '@mui/icons-material/Clear';
import EditNoteIcon from '@mui/icons-material/EditNote';
import SaveOutlinedIcon from '@mui/icons-material/SaveOutlined';
import { IconButton } from '@mui/material';
import { useEditNote, useRemoveNote } from '@store/slices/notesSlice/hooks';
import React, { useCallback, useState } from 'react';

import NoteCard from '../NoteCard';
import { INoteComponent } from './types';

const Note = ({ baseNote }: INoteComponent) => {
  const [isEditable, setIsEditable] = useState(false);
  const [text, setText] = useState(baseNote.text);
  const [tags, setTags] = useState<Array<string>>([]);
  const editNote = useEditNote();
  const removeNote = useRemoveNote();

  const onClickEdit = useCallback(() => {
    if (isEditable) {
      editNote({ text, tags, id: baseNote.id });
    }
    setIsEditable(!isEditable);
  }, [baseNote.id, editNote, isEditable, tags, text]);

  const onClickDelete = useCallback(() => {
    removeNote(baseNote.id);
  }, [baseNote.id, removeNote]);

  return (
    <NoteCard text={text} setText={setText} tags={tags} setTags={setTags} isEditable={isEditable}>
      <>
        <IconButton onClick={onClickEdit}>
          {isEditable ? <SaveOutlinedIcon /> : <EditNoteIcon />}
        </IconButton>
        <IconButton onClick={onClickDelete}>
          <ClearIcon></ClearIcon>
        </IconButton>
      </>
    </NoteCard>
  );
};

export default Note;
