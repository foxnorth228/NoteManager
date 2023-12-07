import HighLightText from '@components/HighLightText';
import config from '@config/config';
import { Button, Card, CardActions, CardContent } from '@mui/material';
import { useSelectTag } from '@store/slices/tagsSlice/hooks';
import React, { useEffect, useRef } from 'react';

import { INoteCard } from './types';

const NoteCard = ({ text, setText, tags, setTags, isEditable = true, children }: INoteCard) => {
  const regex = useRef(new RegExp(config.highlightRegEx.source, config.highlightRegEx.flags + 'g'));
  const selectTag = useSelectTag();

  useEffect(() => {
    setTags(text.match(regex.current) ?? []);
  }, [setTags, text]);

  return (
    <Card
      sx={{
        display: 'grid',
        gridTemplateRows: 'min-content 4fr 1.5fr',
        width: 350,
        maxWidth: 350,
        height: 450,
        boxShadow: 3,
      }}
    >
      <CardActions sx={{ justifyContent: 'flex-end' }}>{children}</CardActions>
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

export default NoteCard;
