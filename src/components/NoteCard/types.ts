import React, { ReactElement } from 'react';

export interface INoteCard {
  text: string;
  setText: React.Dispatch<React.SetStateAction<string>>;
  tags: string[];
  setTags: React.Dispatch<React.SetStateAction<string[]>>;
  isEditable?: boolean;
  children: ReactElement<unknown, string>;
}
