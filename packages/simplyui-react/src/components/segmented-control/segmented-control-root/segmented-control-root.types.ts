import type { ComponentPropsWithRef, ReactNode, CSSProperties } from 'react';

type HTMLAttributesToOmit = 'dir';

export interface SegmentedControlRootProps extends Omit<ComponentPropsWithRef<'div'>, HTMLAttributesToOmit> {
  /**
   * Change the default rendered element for the one passed as a child, merging their props and behavior.
   * @default false
   */
  asChild?: boolean;

  /**
   * The value of the segmented control item that should be checked when initially rendered. Use when you do not need to control the state of the segmented control items.
   */
  defaultValue?: string;

  /**
   * The controlled value of the segmented control item to check. Should be used in conjunction with `onValueChange` property.
   */
  value?: string;

  /**
   * Event handler called when the value changes.
   */
  onValueChange?: (value: string) => void;

  /**
   * The all the parts of a segmented control.
   */
  children: ReactNode;

  /**
   * When `true`, prevents the user from interacting with segmented control items.
   * @default false
   */
  disabled?: boolean;

  /**
   * When `true`, keyboard navigation will loop from last segmented control to first, and vice versa.
   * @default true
   */
  loop?: boolean;

  /**
   * The name of the segmented control. Submitted with its owning form as part of a name/value pair.
   */
  name?: string;

  /**
   * The border radius value of the segmented control.
   * @default "md"
   */
  radius?: 'none' | 'sm' | 'md' | 'lg' | 'xl' | 'full';

  /**
   * The size of the segmented control.
   * @default "2"
   */
  size?: '1' | '2' | '3' | '4';
}

export interface SegmentedControlRootStyle extends CSSProperties {
  '--segmented-control-items-count': number;
  '--segmented-control-checked-item-index': number;
}
