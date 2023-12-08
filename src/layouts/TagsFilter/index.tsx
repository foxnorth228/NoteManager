import ListTags from '@components/ListTags';
import Searcher from '@components/Searcher';
import { Grid } from '@mui/material';
import { useSelectedTags, useTotalTags } from '@store/slices/tagsSlice/hooks';
import React from 'react';

const TagsFilter = () => {
  const totalTags = useTotalTags();
  const selectedTags = useSelectedTags();

  return (
    <Grid container sx={{ marginBottom: 1, minHeight: '20vh' }}>
      <Grid item xs={4} alignItems="stretch" sx={{ display: 'flex', minHeight: '100%' }}>
        <Grid
          container
          rowSpacing={2}
          sx={{
            display: 'grid',
            gridTemplateRows: 'min-content 1fr',
            padding: 2,
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
            <ListTags tags={selectedTags} isEndIconShown={true} />
          </Grid>
        </Grid>
      </Grid>
      <Grid
        item
        xs={8}
        sx={{
          padding: 2,
          borderLeft: 1,
          borderBottom: 1,
          borderRadius: 2,
          borderColor: 'grey.300',
        }}
      >
        <ListTags tags={totalTags} />
      </Grid>
    </Grid>
  );
};

export default TagsFilter;
