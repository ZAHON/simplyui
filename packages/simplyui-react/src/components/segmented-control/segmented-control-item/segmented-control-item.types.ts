import type { ComponentPropsWithRef, ReactNode } from 'react';

export interface SegmentedControlItemProps extends ComponentPropsWithRef<'button'> {
  /**
   * Change the default rendered element for the one passed as a child, merging their props and behavior.
   * @default false
   */
  asChild?: boolean;

  /**
   * The content of the segmented control.
   */
  children: ReactNode;

  /**
   * The value given as data when submitted with a name.
   */
  value: string;

  /**
   * When true, prevents the user from interacting with the segmented control item.
   * @default false
   */
  disabled?: boolean;
}
