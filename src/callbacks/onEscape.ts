import { ifAll } from './ifAll';
import { isEscape } from '../assertions/isEscape';

export const onEscape = ifAll(isEscape);
