import type { ComponentPropsWithRef, ReactNode } from 'react';

export interface TableBodyProps extends ComponentPropsWithRef<'tbody'> {
  /**
   * The content of the table body.
   */
  children: ReactNode;
}
