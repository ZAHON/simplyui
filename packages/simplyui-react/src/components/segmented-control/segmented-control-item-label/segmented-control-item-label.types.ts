import type { ComponentPropsWithRef, ReactNode } from 'react';

export interface SegmentedControlItemLabelProps extends ComponentPropsWithRef<'span'> {
  /**
   * Change the default rendered element for the one passed as a child, merging their props and behavior.
   * @default false
   */
  asChild?: boolean;

  /**
   * The content of the item label.
   */
  children: ReactNode;

  /**
   * Describes the nature of item label visibility.
   *
   * `"checked"` means that item label is visible when item is checked.
   *
   * `"unchecked"` means that item label is visible when item is unchecked.
   */
  type: 'checked' | 'unchecked';
}
