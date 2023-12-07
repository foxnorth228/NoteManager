import HighLightText from '@components/HighLightText';
import config from '@config/config';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import { Button, Card, CardActions, CardContent, IconButton } from '@mui/material';
import React, { useCallback, useEffect, useRef, useState } from 'react';

import { useAddNote } from '../../store/slices/notesSlice/hooks';
import { useSelectTag } from '@store/slices/tagsSlice/hooks';

const NoteNew = () => {
  const regex = useRef(new RegExp(config.highlightRegEx.source, config.highlightRegEx.flags + 'g'));
  const addNote = useAddNote();
  const [text, setText] = useState('');
  const [tags, setTags] = useState<Array<string>>([]);
  const selectTag = useSelectTag();

  useEffect(() => {
    setTags(text.match(regex.current) ?? []);
  }, [text]);

  const onClickAdd = useCallback(() => {
    if (text === '') {
      return;
    }
    const regex = new RegExp(config.highlightRegEx.source, config.highlightRegEx.flags + 'g');
    const tags = [...new Set(text.match(regex) ?? [])];
    addNote({ text: text, tags });
    setText('');
  }, [addNote, text]);

  return (
    <Card
      sx={{
        display: 'grid',
        gridTemplateRows: 'min-content 4fr 1.5fr',
        width: 350,
        maxWidth: 350,
        height: 450,
        boxShadow: 4,
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
              textTransform: 'none',
            }}
            key={i}
            onClick={() => selectTag(el)}
          >
            {el}
          </Button>
        ))}
      </CardContent>
    </Card>
  );
};

export default NoteNew;
