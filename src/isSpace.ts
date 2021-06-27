export const isSpace = (event: KeyboardEvent) =>
  event.code === 'Space' ||
  // eslint-disable-next-line no-magic-numbers
  event.keyCode === 32;
