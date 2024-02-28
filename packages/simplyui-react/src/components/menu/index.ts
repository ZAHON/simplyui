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

export const Menu = Object.assign(MenuRoot, {
  Trigger: MenuTrigger,
  Portal: MenuPortal,
  Content: MenuContent,
  Item: MenuItem,
  Group: MenuGroup,
  Label: MenuLabel,
  Separator: MenuSeparator,
});
