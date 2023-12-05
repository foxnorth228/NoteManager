import React, { ChangeEvent, useCallback, useRef } from 'react';

type IHighLightText = {
  isDisabled?: boolean;
  note: { note: string; tags: string[] };
  setNote: React.Dispatch<React.SetStateAction<{ note: string; tags: string[] }>>;
};

const HighLightText = ({ isDisabled = false, note, setNote }: IHighLightText) => {
  const refBackdrop = useRef<HTMLDivElement>(null);
  const refHighlight = useRef<HTMLDivElement>(null);

  const onChangeTextarea = useCallback(
    (e: ChangeEvent<HTMLTextAreaElement>) => {
      const text = e.currentTarget.value.replace(/\n$/g, '\n\n');
      const tags = text.match(/#.+?\b/g) ?? [];
      setNote({ note: text, tags });
      console.log(tags);
      refHighlight!.current!.innerHTML = text.replace(/#.+?\b/g, '<mark>$&</mark>');
    },
    [note.tags, setNote]
  );

  const onScrollTextarea = useCallback((e: React.UIEvent<HTMLTextAreaElement, UIEvent>) => {
    refBackdrop!.current!.scroll(0, e.currentTarget.scrollTop);
  }, []);

  return (
    <>
      <div ref={refBackdrop} className="card__content card__backdrop">
        <div ref={refHighlight} className="card__highlights card__text"></div>
      </div>
      <textarea
        disabled={isDisabled}
        onChange={(e) => onChangeTextarea(e)}
        onScroll={(e) => onScrollTextarea(e)}
        className="card__content card__textarea card__text"
      />
    </>
  );
};

export default HighLightText;
