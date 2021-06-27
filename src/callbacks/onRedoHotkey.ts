import { ifAll } from './ifAll';
import { isCtrl } from '../assertions/isCtrl';
import { isY } from '../assertions/isY';

export const onRedoHotkey = ifAll(isCtrl, isY);
