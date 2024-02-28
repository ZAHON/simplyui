import type { ComponentPropsWithRef, ReactNode } from 'react';

type HTMLAttributesToOmit = 'onSelect';

export interface MenuItemProps extends Omit<ComponentPropsWithRef<'div'>, HTMLAttributesToOmit> {
  /**
   * Change the default rendered element for the one passed as a child, merging their props and behavior.
   * @default false
   */
  asChild?: boolean;

  /**
   * The content of the item.
   */
  children: ReactNode;

  /**
   * The color of the item.
   * @default "primary"
   */
  color?: 'primary' | 'danger';

  /**
   * When `true`, prevents the user from interacting with the item.
   * @default false
   */
  disabled?: boolean;

  /**
   * Event handler called when the user selects an item (via mouse or keyboard). Calling `event.preventDefault` in this handler will prevent the menu from closing when selecting that item.
   */
  onSelect?: (event: Event) => void;

  /**
   * Optional text used for typeahead purposes. By default the typeahead behavior will use the `.textContent` of the item. Use this when the content is complex, or you have non-textual content inside.
   */
  textValue?: string;
}
