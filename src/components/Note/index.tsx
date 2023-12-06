import HighLightText from '@components/HighLightText';
import config from '@config/config';
import ClearIcon from '@mui/icons-material/Clear';
import EditNoteIcon from '@mui/icons-material/EditNote';
import SaveOutlinedIcon from '@mui/icons-material/SaveOutlined';
import { Button, Card, CardActions, CardContent, IconButton } from '@mui/material';
import { useEditNote, useRemoveNote } from '@store/slices/notesSlice/hooks';
import { INote } from '@store/slices/notesSlice/types';
import React, { useCallback, useEffect, useRef, useState } from 'react';

type INoteComponent = {
  baseNote: INote;
};

const Note = ({ baseNote }: INoteComponent) => {
  const regex = useRef(new RegExp(config.highlightRegEx.source, config.highlightRegEx.flags + 'g'));
  const [isEditable, setIsEditable] = useState(false);
  const [text, setText] = useState(baseNote.text);
  const [tags, setTags] = useState<Array<string>>([]);
  const editNote = useEditNote();
  const removeNote = useRemoveNote();

  useEffect(() => {
    setTags(text.match(regex.current) ?? []);
  }, [text]);

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
    <Card
      sx={{
        display: 'grid',
        gridTemplateRows: 'min-content 4fr 1fr',
        width: 350,
        maxWidth: 350,
        height: 450,
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
      <CardContent
        sx={{
          overflowY: 'auto',
          '&::-webkit-scrollbar': {
            display: 'none',
          },
          msOverflowStyle: 'none',
          scrollbarWidth: 'none',
          paddingLeft: 2,
          paddingRight: 2,
          width: 'inherit',
          maxWidth: 'inherit',
          flexWrap: 'wrap',
        }}
      >
        {tags.map((el, i) => (
          <Button
            variant="outlined"
            sx={{
              display: 'inline-block',
              boxSizing: 'border-box',
              textAlign: 'start',
              width: 350 - 16 - 16,
              maxWidth: 'fit-content',
              textOverflow: 'ellipsis',
              overflow: 'hidden',
              whiteSpace: 'nowrap',
            }}
            key={i}
          >
            {el}
          </Button>
        ))}
      </CardContent>
    </Card>
  );
};

export default Note;
