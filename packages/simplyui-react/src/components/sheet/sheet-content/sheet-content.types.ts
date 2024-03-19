import type { ComponentPropsWithRef, ReactNode } from 'react';
import type { DialogContentProps } from '@radix-ui/react-dialog';

export interface SheetContentProps extends ComponentPropsWithRef<'div'> {
  /**
   * Change the default rendered element for the one passed as a child, merging their props and behavior.
   * @default false
   */
  asChild?: boolean;

  /**
   * The content to be rendered in the open sheet.
   */
  children: ReactNode;

  /**
   * Used to force mounting when more control is needed. Useful when controlling animation with React animation libraries. It inherits from `Modal.Portal`.
   */
  forceMount?: true;

  /**
   * Event handler called when focus moves into the component after opening. It can be prevented by calling `event.preventDefault`.
   */
  onOpenAutoFocus?: (event: Event) => void;

  /**
   * Event handler called when focus moves to the trigger after closing. It can be prevented by calling `event.preventDefault`.
   */
  onCloseAutoFocus?: (event: Event) => void;

  /**
   * Event handler called when the escape key is down. It can be prevented by calling `event.preventDefault`.
   */
  onEscapeKeyDown?: (event: KeyboardEvent) => void;

  /**
   * Event handler called when a pointer event occurs outside the bounds of the component. It can be prevented by calling `event.preventDefault`.
   */
  onPointerDownOutside?: DialogContentProps['onPointerDownOutside'];

  /**
   * Event handler called when a pointer event occurs outside the bounds of the component. It can be prevented by calling `event.preventDefault`.
   */
  onInteractOutside?: DialogContentProps['onInteractOutside'];

  /**
   * The size of the sheet content.
   * @default "2"
   */
  size?: '1' | '2' | '3' | '4';

  /**
   * The side of the edge of the screen where the component will appear.
   * @default "right"
   */
  side?: 'top' | 'right' | 'bottom' | 'left';
}
