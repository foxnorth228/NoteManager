import { INote } from './types';

const config = {
  name: 'notes',
  initialState: [] as INote[],
  isFirstSetup: true,
};

export default config;
export const nameNotes = 'notes';
