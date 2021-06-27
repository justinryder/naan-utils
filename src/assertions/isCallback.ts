import { Callback } from '../types';

export const isCallback = <T extends any[]>(
  func: unknown
): func is Callback<T> => typeof func === 'function';
