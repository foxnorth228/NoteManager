import { Box, TextField } from '@mui/material';
import { useSelectTag } from '@store/slices/tagsSlice/hooks';
import React, { useCallback, useState } from 'react';

const Searcher = () => {
  const [tag, setTag] = useState('');
  const selectTag = useSelectTag();

  const onKeyPressTag = useCallback(
    (e: React.KeyboardEvent<HTMLDivElement>) => {
      if (e.key === 'Enter') {
        selectTag(tag);
        setTag('');
      }
    },
    [selectTag, tag]
  );

  const onInputTag = useCallback((e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setTag(e.currentTarget.value);
  }, []);
  return (
    <Box>
      <TextField
        value={tag}
        onChange={(e) => onInputTag(e)}
        onKeyUp={(e) => onKeyPressTag(e)}
        label="Input tag"
        variant="outlined"
      ></TextField>
    </Box>
  );
};

export default Searcher;
