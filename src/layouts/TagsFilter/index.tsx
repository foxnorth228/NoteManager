import ListSelectedTags from '@components/ListSelectedTags';
import Searcher from '@components/Searcher';
import { Grid } from '@mui/material';
import React from 'react';

const TagsFilter = () => {
  return (
    <Grid
      container
      spacing={2}
      sx={{
        maxWidth: 420,
        paddingRight: 1,
        paddingBottom: 3,
        marginBottom: 3,
        borderRadius: 2,
        borderBottom: 1,
        borderRight: 1,
        borderColor: 'grey.300',
      }}
    >
      <Grid item xs={12}>
        <Searcher></Searcher>
      </Grid>
      <Grid item xs={12}>
        <ListSelectedTags />
      </Grid>
    </Grid>
  );
};

export default TagsFilter;
