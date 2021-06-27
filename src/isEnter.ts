export const isEnter = (event: KeyboardEvent) =>
  event.code === 'Enter' ||
  // eslint-disable-next-line no-magic-numbers
  event.keyCode === 13;
