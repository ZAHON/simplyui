import type { ComponentPropsWithRef, ReactNode, CSSProperties } from 'react';

export interface SegmentedControlContentProps extends ComponentPropsWithRef<'div'> {
  /**
   * Change the default rendered element for the one passed as a child, merging their props and behavior.
   * @default false
   */
  asChild?: boolean;

  /**
   * The content of the component.
   */
  children: ReactNode;
}

export interface SegmentedControlContentStyle extends CSSProperties {
  '--segmented-control-items-count': number;
  '--segmented-control-checked-item-index': number;
}
