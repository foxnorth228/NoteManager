import { wrap } from '../indexedDb/functions';

export const getAllPromise = wrap('getAll');
export const addPromise = wrap('add');
export const putPromise = wrap('put');
export const deletePromise = wrap('delete');
