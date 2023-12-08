import './style.scss';

import globalConfig from '@config/config';
import parse from 'html-react-parser';
import React, { ChangeEvent, useCallback, useRef } from 'react';

import { IHighLightText } from './types';

const HighLightText = ({ isDisabled = false, text, setText }: IHighLightText) => {
  const refBackdrop = useRef<HTMLDivElement>(null);

  const onChangeTextarea = useCallback(
    (e: ChangeEvent<HTMLTextAreaElement>) => {
      setText(e.currentTarget.value);
    },
    [setText]
  );

  const onScrollTextarea = useCallback((e: React.UIEvent<HTMLTextAreaElement, UIEvent>) => {
    refBackdrop!.current!.scroll(0, e.currentTarget.scrollTop);
  }, []);

  return (
    <>
      <div ref={refBackdrop} className="highlightText__content highlightText__backdrop">
        <div className="highlightText__highlights highlightText__text">
          {!isDisabled && parse(text.replace(globalConfig.highlightRegEx, '<mark>$&</mark>'))}
        </div>
      </div>
      <textarea
        value={text}
        disabled={isDisabled}
        onChange={(e) => onChangeTextarea(e)}
        onScroll={(e) => onScrollTextarea(e)}
        className="highlightText__content highlightText__textarea highlightText__text"
      />
    </>
  );
};

export default HighLightText;
