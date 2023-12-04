import ClearIcon from '@mui/icons-material/Clear';
import EditNoteIcon from '@mui/icons-material/EditNote';
import { Card, CardActions, CardContent, IconButton, TextareaAutosize } from "@mui/material";
import React from 'react';

const Note = () => {
  return (
    <Card
      sx={{
        display: 'grid',
        gridTemplateRows: 'min-content 4fr 1fr',
        maxWidth: 400,
        minHeight: 400,
        boxShadow: 2,
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
      <CardContent sx={{ borderTop: 1, borderBottom: 1, borderColor: 'grey.400', padding: 0 }}>
        <textarea style={{ width: '100%', height: '100%', overflowY: 'auto' }} />
      </CardContent>
      <CardContent></CardContent>
    </Card>
  );
};

export default Note;
