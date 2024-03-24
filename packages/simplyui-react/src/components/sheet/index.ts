'use client';

export type { SheetRootProps } from './sheet-root';
export type { SheetTriggerProps } from './sheet-trigger';
export type { SheetPortalProps } from './sheet-portal';
export type { SheetOverlayProps } from './sheet-overlay';
export type { SheetContentProps } from './sheet-content';
export type { SheetHeaderProps } from './sheet-header';
export type { SheetCloseButtonProps } from './sheet-close-button';
export type { SheetCloseProps } from './sheet-close';
export type { SheetTitleProps } from './sheet-title';
export type { SheetDescriptionProps } from './sheet-description';
export type { SheetBodyProps } from './sheet-body';
export type { SheetFooterProps } from './sheet-footer';

import { SheetRoot } from './sheet-root';
import { SheetTrigger } from './sheet-trigger';
import { SheetPortal } from './sheet-portal';
import { SheetOverlay } from './sheet-overlay';
import { SheetContent } from './sheet-content';
import { SheetHeader } from './sheet-header';
import { SheetCloseButton } from './sheet-close-button';
import { SheetClose } from './sheet-close';
import { SheetTitle } from './sheet-title';
import { SheetDescription } from './sheet-description';
import { SheetBody } from './sheet-body';
import { SheetFooter } from './sheet-footer';

/** Contains all the parts of a sheet. */
export const Sheet = Object.assign(SheetRoot, {
  /** The button that opens the sheet. This component is based on the `button` element. */
  Trigger: SheetTrigger,
  /** When used, portals your overlay and content parts into the `body`. */
  Portal: SheetPortal,
  /** A layer that covers the inert portion of the view when the sheet is open. This component is based on the `div` element. */
  Overlay: SheetOverlay,
  /** Contains content to be rendered in the open sheet. This component is based on the `div` element. */
  Content: SheetContent,
  /** An optional header of the sheet content. This component usually contains `Sheet.Title`, `Sheet.Description` and `Sheet.CloseButton`. This component is based on the `div` element. */
  Header: SheetHeader,
  /** The button that closes the sheet. By default it will be rendered in the upper right corner of the `Sheet.Content`. This component is based on the `button` element. */
  CloseButton: SheetCloseButton,
  /** The button that closes the sheet. This component is based on the `button` element. */
  Close: SheetClose,
  /** An accessible title to be announced when the sheet is opened. This component is based on the `h2` element. If you want to hide the title, pass `visuallyHidden` to this component. If you want to remove the title entirely, remove this part and pass `aria-labelledby={undefined}` to `Sheet.Content` component. */
  Title: SheetTitle,
  /** An optional accessible description to be announced when the sheet is opened. This component is based on the `p` element. If you want to hide the description, pass `visuallyHidden` to this component. If you want to remove the description entirely, remove this part and pass `aria-describedby={undefined}` to `Sheet.Content` component. */
  Description: SheetDescription,
  /** An optional body of the sheet content. This component usually contains main part of the sheet. This component is based on the `div` element. */
  Body: SheetBody,
  /** An optional footer of the sheet content. This component usually contains some action button and `Sheet.Close`. This component is based on the `div` element. */
  Footer: SheetFooter,
});
