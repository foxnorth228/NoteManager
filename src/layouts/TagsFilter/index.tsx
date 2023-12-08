import ListTags from '@components/ListTags';
import Searcher from '@components/Searcher';
import { Box, Grid } from '@mui/material';
import { useSelectedTags, useTotalTags } from '@store/slices/tagsSlice/hooks';
import React from 'react';

const TagsFilter = () => {
  const totalTags = useTotalTags();
  const selectedTags = useSelectedTags();

  return (
    <Box
      sx={{
        display: 'grid',
        gridTemplateColumns: {
          md: '1fr 2fr',
          sm: '1fr 1fr',
        },
        gridTemplateRows: {
          sm: '1fr',
          xs: '1fr 1fr',
        },
        marginBottom: 1,
        height: {
          sm: '20vh',
          xs: '30vh',
        },
        maxHeight: {
          sm: '20vh',
          xs: '30vh',
        },
      }}
    >
      <Box
        sx={{
          width: 1,
          height: 1,
          maxHeight: 1,
          padding: 2,
          borderRight: 1,
          borderBottom: 1,
          borderRadius: 2,
          borderColor: 'grey.300',
          display: 'grid',
          gridTemplateRows: 'min-content 1fr',
          rowGap: 2,
          overflowY: 'auto',
          '&::-webkit-scrollbar': {
            display: 'none',
          },
          msOverflowStyle: 'none',
          scrollbarWidth: 'none',
        }}
      >
        <Searcher></Searcher>
        <ListTags tags={selectedTags} isEndIconShown={true} />
      </Box>
      <Box
        sx={{
          width: 1,
          height: 1,
          maxHeight: 1,
          padding: 2,
          borderLeft: 1,
          borderBottom: 1,
          borderRadius: 2,
          borderColor: 'grey.300',
          overflowY: 'auto',
          '&::-webkit-scrollbar': {
            display: 'none',
          },
          msOverflowStyle: 'none',
          scrollbarWidth: 'none',
        }}
      >
        <ListTags tags={totalTags} />
      </Box>
    </Box>
  );
};

export default TagsFilter;
