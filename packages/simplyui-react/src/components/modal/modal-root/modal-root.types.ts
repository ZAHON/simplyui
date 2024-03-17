import type { ReactNode } from 'react';

export interface ModalRootProps {
  /**
   * The all the parts of a modal.
   */
  children: ReactNode;

  /**
   * The open state of the modal when it is initially rendered. Use when you do not need to control its open state.
   */
  defaultOpen?: boolean;

  /**
   * The controlled open state of the modal. Must be used in conjunction with `onOpenChange` property.
   */
  open?: boolean;

  /**
   * The modality of the modal. When set to `true`, interaction with outside elements will be disabled and only modal content will be visible to screen readers.
   * @default true
   */
  modal?: boolean;
}
