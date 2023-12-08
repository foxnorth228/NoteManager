import NoteDb from '@utils/noteDb';

const config = {
  highlightRegEx: /#[а-яА-Яa-zA-Z0-9_]+\b/,
  database: NoteDb.init(),
};

export default config;
