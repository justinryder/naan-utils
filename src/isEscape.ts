export const isEscape = (event: KeyboardEvent) =>
  event.code === 'Escape' ||
  event.code === 'Esc' ||
  // eslint-disable-next-line no-magic-numbers
  event.keyCode === 27;
