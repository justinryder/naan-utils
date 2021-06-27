import { ifAll } from './ifAll';
import { isCtrl } from '../assertions/isCtrl';
import { isZ } from '../assertions/isZ';

export const onUndoHotkey = ifAll(isCtrl, isZ);
