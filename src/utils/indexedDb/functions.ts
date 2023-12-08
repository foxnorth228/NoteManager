import config from './config';
import { IDBObjectStoreFunctions, IIDBObjectStoreFunctionsParameters } from './types';

export function openDatabasePromise(
  name: string,
  version: number,
  objectName: string,
  keyPath: string
): Promise<IDBDatabase> {
  return new Promise((resolve, reject) => {
    const dbOpenRequest = window.indexedDB.open(name, version);

    dbOpenRequest.onblocked = () => {
      reject(config.onBlocked);
    };

    dbOpenRequest.onerror = (event) => {
      const error = (event.target as IDBRequest).error;
      console.log(config.onOpenError + name);
      console.log(error);
      reject(config.onError + (error?.name ? `Техническая информация: ${error?.message}` : ''));
    };

    dbOpenRequest.onupgradeneeded = (event) => {
      const db = (event.target as IDBRequest).result;
      if (!db.objectStoreNames.contains(objectName)) {
        db.createObjectStore(objectName, { keyPath });
      }
    };

    dbOpenRequest.onsuccess = () => {
      resolve(dbOpenRequest.result);
      console.log('db created');
    };
  });
}

export function wrap(methodName: IDBObjectStoreFunctions) {
  return function (objectStore: IDBObjectStore, ...etc: IIDBObjectStoreFunctionsParameters) {
    return new Promise((resolve, reject) => {
      //NO ERROR HERE. FUNCTION WORKS WITH RESTED ELEMENTS
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-expect-error
      const request = objectStore[methodName](...etc);
      request.onsuccess = () => resolve(request.result);
      request.onerror = reject;
    });
  };
}
