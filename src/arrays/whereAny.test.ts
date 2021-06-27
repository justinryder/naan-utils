import { whereAny } from './whereAny';

describe('whereAny', () => {
  it('should not not change array if no conditions are passed', () => {
    const input = ['a', 'b', 'c'];
    const result = input.filter(whereAny());
    expect(result).toEqual(input);
  });

  it('should not invoke callbacks if only non-function conditions are passed', () => {
    const input = ['a', 'b', 'c'];
    const result = input.filter(whereAny(false, null, 0, '', undefined));
    expect(result).toEqual(input);
  });

  it('should return a subset of the arrays containing matches that satisfy any condition', () => {
    const input = ['a', 'b', 'c'];
    const isA = (x: string) => x === 'a';
    const isB = (x: string) => x === 'b';
    const isZ = (x: string) => x === 'z';
    const result = input.filter(whereAny(isA, isB, isZ));
    expect(result).toEqual(['a', 'b']);
  });

  it('should work with only 1 condition', () => {
    const input = ['a', 'b', 'c'];
    const isB = (x: string) => x === 'b';
    const result = input.filter(whereAny(isB));
    expect(result).toEqual(['b']);
  });
});
