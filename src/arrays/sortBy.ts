// myArray.sort(sortBy(x => x.someProp))
export const sortBy = <T, U>(selector: (arg0: T) => U) => (a: T, b: T) => {
  if (selector(a) < selector(b)) {
    return -1;
  }
  if (selector(a) > selector(b)) {
    return 1;
  }
  return 0;
};
