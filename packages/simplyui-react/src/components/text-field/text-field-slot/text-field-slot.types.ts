import type { ComponentPropsWithRef, ReactNode } from 'react';

export interface TextFieldSlotProps extends ComponentPropsWithRef<'div'> {
  /**
   * Change the default rendered element for the one passed as a child, merging their props and behavior.
   * @default false
   */
  asChild?: boolean;

  /**
   * The content of the slot - icons or buttons associated with an `TextField.Input`.
   */
  children: ReactNode;
}
