import type { ComponentPropsWithRef, ReactNode } from 'react';

export interface LabelRootProps extends ComponentPropsWithRef<'label'> {
  /**
   * Change the default rendered element for the one passed as a child, merging their props and behavior.
   * @default false
   */
  asChild?: boolean;

  /**
   * The content of the label.
   */
  children: ReactNode;

  /**
   * If `true`, the label will look like disabled and have `data-disabled` attribute.
   * @default false
   */
  disabled?: boolean;

  /**
   * The id of the element the label is associated with.
   */
  htmlFor?: string;

  /**
   * The size of the label.
   * @default "3"
   */
  size?: '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9';

  /**
   * The tracking (letter spacing) of the label.
   * @default "normal"
   */
  tracking?: 'tighter' | 'tight' | 'normal' | 'wide' | 'wider' | 'widest';

  /**
   * The font weight of the label.
   * @default "regular"
   */
  weight?: 'light' | 'regular' | 'medium' | 'semibold' | 'bold';
}
