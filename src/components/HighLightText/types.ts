import React from 'react';

export interface IHighLightText {
  isDisabled?: boolean;
  text: string;
  setText: React.Dispatch<React.SetStateAction<string>>;
}
