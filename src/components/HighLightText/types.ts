import React from 'react';

export interface IHighLightText {
  isShown?: boolean;
  isDisabled?: boolean;
  text: string;
  setText: React.Dispatch<React.SetStateAction<string>>;
}
