export type { SelectRootProps } from './select-root';
export type { SelectTriggerProps } from './select-trigger';
export type { SelectValueProps } from './select-value';
export type { SelectIconProps } from './select-icon';
export type { SelectPortalProps } from './select-portal';
export type { SelectContentProps } from './select-content';
export type { SelectViewportProps } from './select-viewport';
export type { SelectItemProps } from './select-item';
export type { SelectItemTextProps } from './select-item-text';
export type { SelectItemIndicatorProps } from './select-item-indicator';
export type { SelectScrollUpButtonProps } from './select-scroll-up-button';
export type { SelectScrollDownButtonProps } from './select-scroll-down-button';
export type { SelectGroupProps } from './select-group';
export type { SelectLabelProps } from './select-label';
export type { SelectSeparatorProps } from './select-separator';

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

/** Contains all the parts of a select. */
export const Select = Object.assign(SelectRoot, {
  /** The button that toggles the select. The `Select.Content` will position itself by aligning over the trigger. This component is based on the `button` element. */
  Trigger: SelectTrigger,
  /** The part that reflects the selected value. By default the selected item's text will be rendered. If you require more control, you can instead control the select and pass your own `children`. It should not be styled to ensure correct positioning. An optional `placeholder` prop is also available for when the select has no value. This component is based on the `span` element. */
  Value: SelectValue,
  /** A small icon often displayed next to the value as a visual affordance for the fact it can be open. You can use your own icon via `asChild` or use `children`. This component is based on the `span` element. */
  Icon: SelectIcon,
  /** When used, portals the content part into the `body`. */
  Portal: SelectPortal,
  /** The component that pops out when the select is open. This component is based on the `div` element.  */
  Content: SelectContent,
  /** The scrolling viewport that contains all of the items. This component is based on the `div` element. */
  Viewport: SelectViewport,
  /** The component that contains the select items. This component is based on the `div` element. */
  Item: SelectItem,
  /** The textual part of the item. It should only contain the text you want to see in the trigger when that item is selected. It should not be styled to ensure correct positioning. This component is based on the `span` element. */
  ItemText: SelectItemText,
  /** Renders when the item is selected. This component is based on the `span` element. */
  ItemIndicator: SelectItemIndicator,
  /** An optional button used as an affordance to show the viewport overflow as well as functionaly enable scrolling upwards. This component is based on the `div` element. */
  ScrollUpButton: SelectScrollUpButton,
  /** An optional button used as an affordance to show the viewport overflow as well as functionaly enable scrolling downwards. This component is based on the `div` element. */
  ScrollDownButton: SelectScrollDownButton,
  /** Used to group multiple items. use in conjunction with `Select.Label` to ensure good accessibility via automatic labelling. This component is based on the `div` element. */
  Group: SelectGroup,
  /** Used to render the label of a group. It won't be focusable using arrow keys. This component is based on the `div` element. */
  Label: SelectLabel,
  /** Used to visually separate items in the select. This component is based on the `div` element. */
  Separator: SelectSeparator,
});
