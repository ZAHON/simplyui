import type { ComponentPropsWithRef, ReactNode } from 'react';

export interface SegmentedControlRootProps extends ComponentPropsWithRef<'div'> {
  /**
   * Change the default rendered element for the one passed as a child, merging their props and behavior.
   * @default false
   */
  asChild?: boolean;

  /**
   * The all the parts of a segmented control.
   */
  children: ReactNode;

  /**
   * The color of the segmented control indicator.
   * @default "default"
   */
  color?: 'default' | 'primary' | 'success' | 'warning' | 'danger';

  /**
   * The value of the segmented control item that should be checked when initially rendered. Use when you do not need to control the state of the segmented control items.
   */
  defaultValue?: string;

  /**
   * When `true`, prevents the user from interacting with segmented control items.
   * @default false
   */
  disabled?: boolean;

  /**
   * The name of the group. Submitted with its owning form as part of a name/value pair.
   */
  name?: string;

  /**
   * Event handler called when the value changes.
   */
  onValueChange?: (value: string) => void;

  /**
   * The border radius value of the segmented control.
   * @default "md"
   */
  radius?: 'none' | 'sm' | 'md' | 'lg' | 'xl' | 'full';

  /**
   * When `true`, indicates that the user must check a segmented control item before the owning form can be submitted.
   * @default false
   */
  required?: boolean;

  /**
   * The size of the segmented control.
   * @default "md"
   */
  size?: 'sm' | 'md' | 'lg' | 'xl';

  /**
   * The controlled value of the segmented control item to check. Should be used in conjunction with `onValueChange` property.
   */
  value?: string;
}
