'use client';

import type { BurgerRootProps } from './burger-root';
import type { BurgerIconProps } from './burger-icon';

import { BurgerRoot } from './burger-root';
import { BurgerIcon } from './burger-icon';

export type { BurgerRootProps as RootProps, BurgerIconProps as IconProps };

export {
  /** Contains all the parts of a burger. This component is based on the `button` element. */
  BurgerRoot as Root,
  /** The icon that indicate state of the burger. Must live inside `Burger`. This component is based on the `div` element. */
  BurgerIcon as Icon,
};
