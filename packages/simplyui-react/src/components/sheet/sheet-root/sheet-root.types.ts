import type { ReactNode } from 'react';

export interface SheetRootProps {
  /**
   * The all the parts of a sheet.
   */
  children: ReactNode;

  /**
   * The open state of the sheet when it is initially rendered. Use when you do not need to control it's open state.
   */
  defaultOpen?: boolean;

  /**
   * The controlled open state of the sheet. Must be used in conjunction with `onOpenChange` property.
   */
  open?: boolean;

  /**
   * Event handler called when the open state of the sheet changes.
   */
  onOpenChange?: (open: boolean) => void;

  /**
   * The modality of the sheet. When set to `true`, interaction with outside elements will be disabled and only sheet content will be visible to screen readers.
   * @default true
   */
  modal?: boolean;
}
