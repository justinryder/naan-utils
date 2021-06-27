import { ifAll } from './ifAll';
import { isEscape } from './isEscape';

export const onEscape = ifAll(isEscape);
