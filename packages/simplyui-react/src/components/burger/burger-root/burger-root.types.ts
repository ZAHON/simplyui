import type { ComponentPropsWithRef, ReactNode } from 'react';

export interface BurgerRootProps extends ComponentPropsWithRef<'button'> {
  /**
   * Change the default rendered element for the one passed as a child, merging their props and behavior.
   * @default false
   */
  asChild?: boolean;

  /**
   * The content of the burger.
   */
  children: ReactNode;

  /**
   * The open state of the burger when it is initially rendered. Use when you do not need to control its open state.
   */
  defaultOpen?: boolean;

  /**
   * The controlled open state of the burger. Must be used in conjunction with `onOpenChange` property.
   */
  open?: boolean;

  /**
   * Event handler called when the open state of the burger changes.
   */
  onOpenChange?: (open: boolean) => void;

  /**
   * When `true`, prevents the user from interacting with the burger.
   * @default false
   */
  disabled?: boolean;

  /**
   * The border radius value of the burger.
   * @default "md"
   */
  radius?: 'none' | 'sm' | 'md' | 'lg' | 'xl' | 'full';

  /**
   * The size of the burger.
   * @default "md"
   */
  size?: 'sm' | 'md' | 'lg' | 'xl';
}
