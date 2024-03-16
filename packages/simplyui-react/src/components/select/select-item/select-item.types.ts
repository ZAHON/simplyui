import type { ComponentPropsWithRef, ReactNode } from 'react';

export interface SelectItemProps extends ComponentPropsWithRef<'div'> {
  /**
   * Change the default rendered element for the one passed as a child, merging their props and behavior.
   * @default false
   */
  asChild?: boolean;

  /**
   * The content of the item - `Select.ItemText` and `Select.ItemIndicator`.
   */
  children: ReactNode;

  /**
   * The value given as data when submitted with a name.
   */
  value: string;

  /**
   * When `true`, prevents the user from interacting with the item.
   * @default false
   */
  disabled?: boolean;

  /**
   * Optional text used for typeahead purposes. By default the typeahead behavior will use the `.textContent` of the `Select.ItemText` part. Use this when the content is complex, or you have non-textual content inside.
   */
  textValue?: string;
}
