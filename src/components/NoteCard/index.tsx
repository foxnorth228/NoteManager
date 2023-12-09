import HighLightText from '@components/HighLightText';
import globalConfig from '@config/config';
import { Button, Card, CardActions, CardContent, Tooltip } from '@mui/material';
import { useSelectTag } from '@store/slices/tagsSlice/hooks';
import React, { useEffect } from 'react';

import { INoteCard } from './types';

const NoteCard = ({ text, setText, tags, setTags, isEditable = true, children }: INoteCard) => {
  const selectTag = useSelectTag();

  useEffect(() => {
    setTags([...new Set(text.match(globalConfig.highlightRegEx) ?? [])]);
  }, [setTags, text]);

  return (
    <Card
      sx={{
        display: 'grid',
        gridTemplateRows: 'min-content 4fr 1.5fr',
        width: {
          lg: 350,
          sm: 270,
          xs: '90%',
        },
        height: 450,
        boxShadow: 6,
      }}
    >
      <CardActions sx={{ justifyContent: 'flex-end' }}>{children}</CardActions>
      <CardContent
        sx={{
          borderTop: 1,
          borderBottom: 1,
          borderColor: 'grey.300',
          padding: 0,
          position: 'relative',
        }}
      >
        <HighLightText isDisabled={!isEditable} text={text} setText={setText} />
      </CardContent>
      <CardContent
        sx={{
          ...globalConfig.styleNoScrollbar,
          paddingLeft: 2,
          paddingRight: 2,
          width: 'inherit',
          maxWidth: 'inherit',
          flexWrap: 'wrap',
        }}
      >
        {tags.map((el, i) => (
          <Tooltip key={i} sx={{ maxWidth: 'none' }} title={el} arrow>
            <Button
              aria-label="tag"
              color="custom"
              variant="outlined"
              sx={{
                display: 'inline-block',
                boxSizing: 'border-box',
                textAlign: 'start',
                width: 350 - 16 - 16,
                marginRight: 1,
                marginBottom: 1,
                maxWidth: 'fit-content',
                textOverflow: 'ellipsis',
                overflow: 'hidden',
                whiteSpace: 'nowrap',
                textTransform: 'none',
              }}
              onClick={() => selectTag(el)}
            >
              {el}
            </Button>
          </Tooltip>
        ))}
      </CardContent>
    </Card>
  );
};

export default NoteCard;
