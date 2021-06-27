import { ifAll } from './ifAll';
import { isCtrl } from './isCtrl';
import { isZ } from './isZ';

export const onUndoHotkey = ifAll(isCtrl, isZ);
