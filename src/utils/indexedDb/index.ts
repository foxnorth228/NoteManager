import { openDatabasePromise } from './functions';

export default class IndexedDbRepository {
  name: string;
  version: number;
  nameObjectStore: string;
  keyPath: string;

  dbConnection: IDBDatabase | undefined;
  error: Error | null;
  openDatabasePromise: Promise<void>;

  constructor(name: string, version: number, nameObjectStore: string, keyPath: string) {
    this.name = name;
    this.version = version;
    this.nameObjectStore = nameObjectStore;
    this.keyPath = keyPath;
    this.error = null;
    this.openDatabasePromise = this._openDatabase();
  }

  async _openDatabase() {
    try {
      this.dbConnection = await openDatabasePromise(
        this.name,
        this.version,
        this.nameObjectStore,
        this.keyPath
      );
    } catch (error) {
      this.error = error as Error;
      throw error;
    }
  }

  async _tx(
    txMode: IDBTransactionMode,
    callback: (objectStore: IDBObjectStore) => Promise<unknown>
  ) {
    await this.openDatabasePromise;
    const transaction = this.dbConnection?.transaction([this.nameObjectStore], txMode);
    const objectStore = transaction?.objectStore(this.nameObjectStore);
    if (typeof objectStore !== 'undefined') {
      return await callback(objectStore);
    }
  }
}
