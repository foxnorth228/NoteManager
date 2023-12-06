import './style.scss';

import React, { ChangeEvent, useCallback, useRef } from 'react';
import parse from 'html-react-parser';

import { IHighLightText } from './types';

const HighLightText = ({ isDisabled = false, text, setText }: IHighLightText) => {
  const refBackdrop = useRef<HTMLDivElement>(null);
  const refHighlight = useRef<HTMLDivElement>(null);

  const onChangeTextarea = useCallback(
    (e: ChangeEvent<HTMLTextAreaElement>) => {
      setText(e.currentTarget.value.replace(/\n$/g, '\n\n'));
    },
    [setText]
  );

  const onScrollTextarea = useCallback((e: React.UIEvent<HTMLTextAreaElement, UIEvent>) => {
    refBackdrop!.current!.scroll(0, e.currentTarget.scrollTop);
  }, []);

  return (
    <>
      <div ref={refBackdrop} className="card__content card__backdrop">
        <div ref={refHighlight} className="card__highlights card__text">
          {parse(text.replace(/#.+?\b/g, '<mark>$&</mark>'))}
        </div>
      </div>
      <textarea
        value={text}
        disabled={isDisabled}
        onChange={(e) => onChangeTextarea(e)}
        onScroll={(e) => onScrollTextarea(e)}
        className="card__content card__textarea card__text"
      />
    </>
  );
};

export default HighLightText;
