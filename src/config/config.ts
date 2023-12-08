import NoteDb from '@utils/noteDb';

const globalConfig = {
  highlightRegEx: /#[а-яА-Яa-zA-Z0-9_]+\b/g,
  database: NoteDb.init(),
  styleNoScrollbar: {
    overflowY: 'auto',
    '&::-webkit-scrollbar': {
      display: 'none',
    },
    msOverflowStyle: 'none',
    scrollbarWidth: 'none',
  },
};

export default globalConfig;
