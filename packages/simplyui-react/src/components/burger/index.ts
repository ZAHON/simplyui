export type { BurgerRootProps } from './burger-root';
export type { BurgerIconProps } from './burger-icon';

import { BurgerRoot } from './burger-root';
import { BurgerIcon } from './burger-icon';

export const Burger = Object.assign(BurgerRoot, {
  Icon: BurgerIcon,
});
