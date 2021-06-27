import { Func } from '../types';

export const isFunction = <T extends any[], U>(
  func: unknown
): func is Func<T, U> => typeof func === 'function';
