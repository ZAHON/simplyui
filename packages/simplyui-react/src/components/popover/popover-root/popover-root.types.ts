import type { ReactNode } from 'react';

export interface PopoverRootProps {
  /**
   * The all the parts of a popover.
   */
  children: ReactNode;

  /**
   * The open state of the popover when it is initially rendered. Use when you do not need to control its open state.
   */
  defaultOpen?: boolean;

  /**
   * The modality of the `popover`. When set to true, interaction with outside elements will be disabled and only popover content will be visible to screen readers.
   * @default false
   */
  modal?: boolean;

  /**
   * Event handler called when the open state of the popover changes.
   */
  onOpenChange?: (open: boolean) => void;

  /**
   * The controlled open state of the popover. Must be used in conjunction with `onOpenChange` property.
   */
  open?: boolean;
}
