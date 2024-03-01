import type { ComponentPropsWithRef, ReactNode } from 'react';

export interface SegmentedControlItemProps extends ComponentPropsWithRef<'div'> {
  /**
   * The content of the item.
   */
  children: ReactNode;

  /**
   * When `true`, prevents the user from interacting with the segmented control item.
   * @default false
   */
  disabled?: boolean;

  /**
   * When `true`, indicates that the user must check the segmented control item before the owning form can be submitted.
   * @default false
   */
  required?: boolean;

  /**
   * The value given as data when submitted with a name.
   */
  value: string;
}
