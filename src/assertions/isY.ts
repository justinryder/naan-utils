export const isY = (event: KeyboardEvent) =>
  event.code === 'KeyY' ||
  // eslint-disable-next-line no-magic-numbers
  event.keyCode === 89;
