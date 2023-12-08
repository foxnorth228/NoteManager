import NoteDb from '@utils/noteDb';

const config = {
  highlightRegEx: /#.+?\b/,
  database: NoteDb.init(),
};

export default config;
