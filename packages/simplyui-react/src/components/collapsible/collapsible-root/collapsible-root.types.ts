import type { ComponentPropsWithRef, ReactNode } from 'react';

export interface CollapsibleRootProps extends ComponentPropsWithRef<'div'> {
  /**
   * Change the default rendered element for the one passed as a child, merging their props and behavior.
   * @default false
   */
  asChild?: boolean;

  /**
   * The all the parts of a collapsible = `Collapsible.Trigger` and `Collapsible.Content`
   */
  children: ReactNode;

  /**
   * When `true`, prevents the user from interacting with the collapsible.
   * @default false
   */
  disabled?: boolean;

  /**
   * The open state of the collapsible when it is initially rendered. Use when you do not need to control its open state.
   * @default false
   */
  defaultOpen?: boolean;

  /**
   * The controlled open state of the collapsible. Must be used in conjunction with `onOpenChange` property.
   * @default false
   */
  open?: boolean;

  /**
   * Event handler called when the open state of the collapsible changes.
   */
  onOpenChange?: (open: boolean) => void;
}
