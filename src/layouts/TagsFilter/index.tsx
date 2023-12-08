import ListTags from '@components/ListTags';
import Searcher from '@components/Searcher';
import { Box } from '@mui/material';
import { useSelectedTags, useTotalTags } from '@store/slices/tagsSlice/hooks';
import React from 'react';

import config from './config';

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
        height: config.height,
        maxHeight: config.height,
      }}
    >
      <Box
        sx={{
          borderRight: 1,
          display: 'grid',
          gridTemplateRows: 'min-content 1fr',
          rowGap: 2,
          ...config.tagFilterElement,
        }}
      >
        <Searcher></Searcher>
        <ListTags tags={selectedTags} isEndIconShown={true} />
      </Box>
      <Box
        sx={{
          borderLeft: 1,
          ...config.tagFilterElement,
        }}
      >
        <ListTags tags={totalTags} />
      </Box>
    </Box>
  );
};

export default TagsFilter;
