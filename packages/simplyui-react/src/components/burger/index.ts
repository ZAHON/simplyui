export type { BurgerRootProps } from './burger-root';
export type { BurgerIconProps } from './burger-icon';

import { BurgerRoot } from './burger-root';
import { BurgerIcon } from './burger-icon';

/** Contains all the parts of a burger. This component is based on the `button` element. */
export const Burger = Object.assign(BurgerRoot, {
  /** The icon that indicate state of the burger. Must live inside `Burger`. This component is based on the `div` element. */
  Icon: BurgerIcon,
});
