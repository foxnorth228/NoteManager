import NoteCard from '@components/NoteCard';
import ClearIcon from '@mui/icons-material/Clear';
import EditNoteIcon from '@mui/icons-material/EditNote';
import SaveOutlinedIcon from '@mui/icons-material/SaveOutlined';
import { IconButton } from '@mui/material';
import { useEditNote, useRemoveNote } from '@store/slices/notesSlice/hooks';
import React, { useCallback, useState } from 'react';

import { INoteComponent } from './types';

const Note = ({ baseNote }: INoteComponent) => {
  const [isEditable, setIsEditable] = useState(false);
  const [text, setText] = useState(baseNote.text);
  const [tags, setTags] = useState<Array<string>>([]);
  const editNote = useEditNote();
  const removeNote = useRemoveNote();

  const onClickEdit = useCallback(() => {
    if (isEditable) {
      editNote({ text, tags, id: baseNote.id, oldTags: baseNote.tags });
    }
    setIsEditable(!isEditable);
  }, [baseNote.id, baseNote.tags, editNote, isEditable, tags, text]);

  const onClickDelete = useCallback(() => {
    removeNote({ id: baseNote.id, oldTags: baseNote.tags });
  }, [baseNote.id, baseNote.tags, removeNote]);

  return (
    <NoteCard text={text} setText={setText} tags={tags} setTags={setTags} isEditable={isEditable}>
      <>
        <IconButton aria-label={isEditable ? 'Edit note' : 'Save note'} onClick={onClickEdit}>
          {isEditable ? <SaveOutlinedIcon /> : <EditNoteIcon />}
        </IconButton>
        <IconButton aria-label="Delete note" onClick={onClickDelete}>
          <ClearIcon></ClearIcon>
        </IconButton>
      </>
    </NoteCard>
  );
};

export default Note;
