import type { ComponentPropsWithRef, ReactNode } from 'react';

export interface LabelRootProps extends ComponentPropsWithRef<'label'> {
  /**
   * The content of the label.
   */
  children: ReactNode;

  /**
   * Change the default rendered element for the one passed as a child, merging their props and behavior.
   * @default false
   */
  asChild?: boolean;

  /**
   * The id of the element the label is associated with.
   */
  htmlFor?: string;

  /**
   * The size of the label.
   * @default "md"
   */
  size?: 'sm' | 'md' | 'lg' | 'xl';

  /**
   * If true, the label will look like disabled and have `data-disabled` attribute.
   * @default false
   */
  disabled?: boolean;
}
