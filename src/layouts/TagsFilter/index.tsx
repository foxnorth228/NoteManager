import ListSelectedTags from '@components/ListSelectedTags';
import Searcher from '@components/Searcher';
import { Box } from '@mui/material';
import React from 'react';

const TagsFilter = () => {
  return (
    <Box>
      <Searcher></Searcher>
      <ListSelectedTags />
    </Box>
  );
};

export default TagsFilter;
