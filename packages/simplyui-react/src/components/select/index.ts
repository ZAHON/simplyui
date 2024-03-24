'use client';

import type { SelectRootProps } from './select-root';
import type { SelectTriggerProps } from './select-trigger';
import type { SelectValueProps } from './select-value';
import type { SelectIconProps } from './select-icon';
import type { SelectPortalProps } from './select-portal';
import type { SelectContentProps } from './select-content';
import type { SelectViewportProps } from './select-viewport';
import type { SelectItemProps } from './select-item';
import type { SelectItemTextProps } from './select-item-text';
import type { SelectItemIndicatorProps } from './select-item-indicator';
import type { SelectScrollUpButtonProps } from './select-scroll-up-button';
import type { SelectScrollDownButtonProps } from './select-scroll-down-button';
import type { SelectGroupProps } from './select-group';
import type { SelectLabelProps } from './select-label';
import type { SelectSeparatorProps } from './select-separator';

import { SelectRoot } from './select-root';
import { SelectTrigger } from './select-trigger';
import { SelectValue } from './select-value';
import { SelectIcon } from './select-icon';
import { SelectPortal } from './select-portal';
import { SelectContent } from './select-content';
import { SelectViewport } from './select-viewport';
import { SelectItem } from './select-item';
import { SelectItemText } from './select-item-text';
import { SelectItemIndicator } from './select-item-indicator';
import { SelectScrollUpButton } from './select-scroll-up-button';
import { SelectScrollDownButton } from './select-scroll-down-button';
import { SelectGroup } from './select-group';
import { SelectLabel } from './select-label';
import { SelectSeparator } from './select-separator';

export type {
  SelectRootProps as RootProps,
  SelectTriggerProps as TriggerProps,
  SelectValueProps as ValueProps,
  SelectIconProps as IconProps,
  SelectPortalProps as PortalProps,
  SelectContentProps as ContentProps,
  SelectViewportProps as ViewportProps,
  SelectItemProps as ItemProps,
  SelectItemTextProps as ItemTextProps,
  SelectItemIndicatorProps as IndicatorProps,
  SelectScrollUpButtonProps as ScrollUpButtonProps,
  SelectScrollDownButtonProps as ScrollDownButtonProps,
  SelectGroupProps as GroupProps,
  SelectLabelProps as LabelProps,
  SelectSeparatorProps as SeparatorProps,
};

export {
  /** Contains all the parts of a select. */
  SelectRoot as Root,
  /** The button that toggles the select. The `Select.Content` will position itself by aligning over the trigger. This component is based on the `button` element. */
  SelectTrigger as Trigger,
  /** The part that reflects the selected value. By default the selected item's text will be rendered. If you require more control, you can instead control the select and pass your own `children`. It should not be styled to ensure correct positioning. An optional `placeholder` prop is also available for when the select has no value. This component is based on the `span` element. */
  SelectValue as Value,
  /** A small icon often displayed next to the value as a visual affordance for the fact it can be open. You can use your own icon via `asChild` or use `children`. This component is based on the `span` element. */
  SelectIcon as Icon,
  /** When used, portals the content part into the `body`. */
  SelectPortal as Portal,
  /** The component that pops out when the select is open. This component is based on the `div` element.  */
  SelectContent as Content,
  /** The scrolling viewport that contains all of the items. This component is based on the `div` element. */
  SelectViewport as Viewport,
  /** The component that contains the select items. This component is based on the `div` element. */
  SelectItem as Item,
  /** The textual part of the item. It should only contain the text you want to see in the trigger when that item is selected. It should not be styled to ensure correct positioning. This component is based on the `span` element. */
  SelectItemText as ItemText,
  /** Renders when the item is selected. This component is based on the `span` element. */
  SelectItemIndicator as ItemIndicator,
  /** An optional button used as an affordance to show the viewport overflow as well as functionaly enable scrolling upwards. This component is based on the `div` element. */
  SelectScrollUpButton as ScrollUpButton,
  /** An optional button used as an affordance to show the viewport overflow as well as functionaly enable scrolling downwards. This component is based on the `div` element. */
  SelectScrollDownButton as ScrollDownButton,
  /** Used to group multiple items. use in conjunction with `Select.Label` to ensure good accessibility via automatic labelling. This component is based on the `div` element. */
  SelectGroup as Group,
  /** Used to render the label of a group. It won't be focusable using arrow keys. This component is based on the `div` element. */
  SelectLabel as Label,
  /** Used to visually separate items in the select. This component is based on the `div` element. */
  SelectSeparator as Separator,
};
