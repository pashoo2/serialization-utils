import sortKeys from 'sort-keys';

import {TSerializableDataTypes, IKeyValue, TArray} from './types';

/**
 * Stringify a data passed in props.
 * For an object and array value always do a deep sort of it's keys before stringify.
 * So comparison of objects or arrays can be done also by comparison of it's
 * stringified versions.
 *
 * @export
 * @param {TSerializableDataTypes} data - string, number, key-value or an array
 * @returns {string} - data stringified
 * @throws - if a data passed as a parameters has an unsupported type
 */
export function stringify(data: TSerializableDataTypes): string {
  const dataType = typeof data;

  if (dataType === 'string' || data instanceof String) {
    return data as string;
  }
  if (dataType === 'number' || data instanceof Number) {
    return String(data);
  }
  if (dataType === 'object') {
    // it's necessary to sort a keys of the object to give
    // the same strings for all objects with the same keys
    return JSON.stringify(sortKeys(data as IKeyValue | TArray, {deep: true}));
  }
  throw new Error('Unknown data type');
}
