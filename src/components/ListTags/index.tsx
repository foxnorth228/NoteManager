import CloseIcon from '@mui/icons-material/Close';
import { Button, Grid, Typography } from '@mui/material';
import React from 'react';

import { useSelectTag } from '../../store/slices/tagsSlice/hooks';
import { IListTags } from './types';

const ListTags = ({ tags, isEndIconShown = false }: IListTags) => {
  const selectTag = useSelectTag();
  return (
    <Grid container columnSpacing={2} rowSpacing={1}>
      {tags.map((el) => (
        <Grid item xs="auto" key={el}>
          <Button
            variant="outlined"
            sx={{
              display: 'grid',
              gridTemplateColumns: '1fr min-content',
              columnGap: 1,
              boxSizing: 'border-box',
              textAlign: 'start',
              width: 'fit-content',
              maxWidth: 280,
              paddingLeft: 2,
              paddingRight: 2,
              border: 1,
              '& .MuiButton-endIcon': {
                margin: 0,
              },
            }}
            endIcon={isEndIconShown && <CloseIcon />}
            onClick={() => selectTag(el)}
          >
            <Typography
              variant="body2"
              sx={{
                display: 'block',
                width: 'fit-content',
                maxWidth: 280 - 16 - 16 - 8 - 20 - 2,
                overflow: 'hidden',
                whiteSpace: 'nowrap',
                textOverflow: 'ellipsis',
                textTransform: 'none',
              }}
            >
              {el}
            </Typography>
          </Button>
        </Grid>
      ))}
    </Grid>
  );
};

export default ListTags;
