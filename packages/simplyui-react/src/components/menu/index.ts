'use client';

export type { MenuRootProps } from './menu-root';
export type { MenuTriggerProps } from './menu-trigger';
export type { MenuPortalProps } from './menu-portal';
export type { MenuContentProps } from './menu-content';
export type { MenuItemProps } from './menu-item';
export type { MenuGroupProps } from './menu-group';
export type { MenuLabelProps } from './menu-label';
export type { MenuSeparatorProps } from './menu-separator';

import { MenuRoot } from './menu-root';
import { MenuTrigger } from './menu-trigger';
import { MenuPortal } from './menu-portal';
import { MenuContent } from './menu-content';
import { MenuItem } from './menu-item';
import { MenuGroup } from './menu-group';
import { MenuLabel } from './menu-label';
import { MenuSeparator } from './menu-separator';

/** Contains all the parts of a menu. */
export const Menu = Object.assign(MenuRoot, {
  /** The button that toggles the menu. By default, the `Menu.Content` will position itself against the trigger. This component is based on the `button` element. */
  Trigger: MenuTrigger,
  /** When used, portals the content part into the `body`. */
  Portal: MenuPortal,
  /** The component that pops out when the menu is open. This component is based on the `div` element. */
  Content: MenuContent,
  /** The component that contains the menu items. This component is based on the `div` element. */
  Item: MenuItem,
  /** Used to group multiple `Menu.Item`s. This component is based on the `div` element. */
  Group: MenuGroup,
  /** Used to render a label. It won't be focusable using arrow keys. This component is based on the `div` element. */
  Label: MenuLabel,
  /** Used to visually separate items in the menu. This component is based on the `div` element. */
  Separator: MenuSeparator,
});
