'use client';

import type { MenuRootProps } from './menu-root';
import type { MenuTriggerProps } from './menu-trigger';
import type { MenuPortalProps } from './menu-portal';
import type { MenuContentProps } from './menu-content';
import type { MenuItemProps } from './menu-item';
import type { MenuGroupProps } from './menu-group';
import type { MenuLabelProps } from './menu-label';
import type { MenuSeparatorProps } from './menu-separator';

import { MenuRoot } from './menu-root';
import { MenuTrigger } from './menu-trigger';
import { MenuPortal } from './menu-portal';
import { MenuContent } from './menu-content';
import { MenuItem } from './menu-item';
import { MenuGroup } from './menu-group';
import { MenuLabel } from './menu-label';
import { MenuSeparator } from './menu-separator';

export type {
  MenuRootProps as RootProps,
  MenuTriggerProps as TriggerProps,
  MenuPortalProps as PortalProps,
  MenuContentProps as ContentProps,
  MenuItemProps as ItemProps,
  MenuGroupProps as GroupProps,
  MenuLabelProps as LabelProps,
  MenuSeparatorProps as SeparatorProps,
};

export {
  /** Contains all the parts of a menu. */
  MenuRoot as Root,
  /** The button that toggles the menu. By default, the `Menu.Content` will position itself against the trigger. This component is based on the `button` element. */
  MenuTrigger as Trigger,
  /** When used, portals the content part into the `body`. */
  MenuPortal as Portal,
  /** The component that pops out when the menu is open. This component is based on the `div` element. */
  MenuContent as Content,
  /** The component that contains the menu items. This component is based on the `div` element. */
  MenuItem as Item,
  /** Used to group multiple `Menu.Item`s. This component is based on the `div` element. */
  MenuGroup as Group,
  /** Used to render a label. It won't be focusable using arrow keys. This component is based on the `div` element. */
  MenuLabel as Label,
  /** Used to visually separate items in the menu. This component is based on the `div` element. */
  MenuSeparator as Separator,
};
