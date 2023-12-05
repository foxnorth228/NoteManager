import './style.scss';

import ClearIcon from '@mui/icons-material/Clear';
import EditNoteIcon from '@mui/icons-material/EditNote';
import { Card, CardActions, CardContent, IconButton } from '@mui/material';
import React, { ChangeEvent, useCallback, useRef } from 'react';

const Note = () => {
  const refBackdrop = useRef<HTMLDivElement>(null);
  const refHighlight = useRef<HTMLDivElement>(null);
  const onChangeTextarea = useCallback((e: ChangeEvent<HTMLTextAreaElement>) => {
    const text = e.currentTarget.value;
    refHighlight!.current!.innerHTML = text
      .replace(/\n$/g, '\n\n')
      .replace(/#.+?\b/g, '<mark>$&</mark>');
  }, []);

  const onScrollTextarea = useCallback((e: React.UIEvent<HTMLTextAreaElement, UIEvent>) => {
    console.log('scroll', e.currentTarget.scrollTop);
    refBackdrop!.current!.scroll(0, e.currentTarget.scrollTop);
    console.log(refBackdrop!.current!.scrollTop);
  }, []);
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
        <IconButton>
          <EditNoteIcon></EditNoteIcon>
        </IconButton>
        <IconButton>
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
        <div ref={refBackdrop} className="card__content card__backdrop">
          <div ref={refHighlight} className="card__highlights card__text"></div>
        </div>
        <textarea
          onChange={(e) => onChangeTextarea(e)}
          onScroll={(e) => onScrollTextarea(e)}
          className="card__content card__textarea card__text"
        />
      </CardContent>
      <CardContent></CardContent>
    </Card>
  );
};

export default Note;
