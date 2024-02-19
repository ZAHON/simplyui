import type { ComponentPropsWithRef, ReactNode } from 'react';

export interface LabelProps extends ComponentPropsWithRef<'label'> {
  /**
   * The content of the label.
   */
  children: ReactNode;

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
