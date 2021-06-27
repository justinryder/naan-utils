export const isZ = (event: KeyboardEvent) =>
  event.code === 'KeyZ' ||
  // eslint-disable-next-line no-magic-numbers
  event.keyCode === 90;
