import IndexedDbRepository from '@utils/indexedDb';

import config from './config';
import { addPromise, deletePromise, getAllPromise, putPromise } from './functions';
import { INote } from "@store/slices/notesSlice/types";

export default class NoteDb extends IndexedDbRepository {
  private constructor(
    name: string = config.nameDatabase,
    version: number = config.version,
    nameObjectStore: string = config.nameStore,
    keyPath: string = config.keyPath
  ) {
    super(name, version, nameObjectStore, keyPath);
  }

  static init() {
    return new NoteDb();
  }

  async getAll() {
    return this._tx('readonly', (objectStore: IDBObjectStore) => getAllPromise(objectStore));
  }

  async add(item: INote) {
    return this._tx('readwrite', (objectStore: IDBObjectStore) => addPromise(objectStore, item));
  }
  async edit(item: object) {
    return this._tx('readwrite', (objectStore: IDBObjectStore) => putPromise(objectStore, item));
  }

  async deleteById(key: string) {
    return this._tx('readwrite', (objectStore: IDBObjectStore) => deletePromise(objectStore, key));
  }
}
