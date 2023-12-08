import CloseIcon from '@mui/icons-material/Close';
import { Button, Grid, Tooltip, Typography } from '@mui/material';
import React from 'react';

import { useSelectTag } from '../../store/slices/tagsSlice/hooks';
import { IListTags } from './types';

const ListTags = ({ tags, isEndIconShown = false }: IListTags) => {
  const selectTag = useSelectTag();
  return (
    <Grid
      sx={{
        height: 1,
        maxHeight: 1,
        overflowY: 'auto',
        '&::-webkit-scrollbar': {
          display: 'none',
        },
        msOverflowStyle: 'none',
        scrollbarWidth: 'none',
      }}
      container
      columnSpacing={2}
      rowSpacing={1}
    >
      {tags.map((el) => (
        <Grid item key={el} sx={{ maxWidth: 'min(100%, 280px)' }}>
          <Tooltip sx={{ maxWidth: 'none' }} title={el} arrow disableInteractive={true}>
            <Button
              variant="outlined"
              sx={{
                display: 'grid',
                gridTemplateColumns: '1fr min-content',
                columnGap: 1,
                boxSizing: 'border-box',
                textAlign: 'start',
                width: 'fit-content',
                maxWidth: 'min(100%, 280px)',
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
                  maxWidth: 1,
                  overflow: 'hidden',
                  whiteSpace: 'nowrap',
                  textOverflow: 'ellipsis',
                  textTransform: 'none',
                }}
              >
                {el}
              </Typography>
            </Button>
          </Tooltip>
        </Grid>
      ))}
    </Grid>
  );
};

export default ListTags;
