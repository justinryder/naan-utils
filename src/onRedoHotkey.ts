import { ifAll } from './ifAll';
import { isCtrl } from './isCtrl';
import { isY } from './isY';

export const onRedoHotkey = ifAll(isCtrl, isY);
