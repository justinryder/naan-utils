export const isCtrl = (event: KeyboardEvent) =>
  event.ctrlKey ||
  // Also check metaKey for Mac command key (⌘)
  event.metaKey;
