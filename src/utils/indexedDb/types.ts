export type IDBObjectStoreFunctions = 'delete' | 'getAll' | 'get' | 'put' | 'add';
export type IIDBObjectStoreFunctionsParameters = Parameters<
  IDBObjectStore[IDBObjectStoreFunctions]
>;
