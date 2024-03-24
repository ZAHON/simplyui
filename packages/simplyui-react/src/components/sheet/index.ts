'use client';

import type { SheetRootProps } from './sheet-root';
import type { SheetTriggerProps } from './sheet-trigger';
import type { SheetPortalProps } from './sheet-portal';
import type { SheetOverlayProps } from './sheet-overlay';
import type { SheetContentProps } from './sheet-content';
import type { SheetHeaderProps } from './sheet-header';
import type { SheetCloseButtonProps } from './sheet-close-button';
import type { SheetCloseProps } from './sheet-close';
import type { SheetTitleProps } from './sheet-title';
import type { SheetDescriptionProps } from './sheet-description';
import type { SheetBodyProps } from './sheet-body';
import type { SheetFooterProps } from './sheet-footer';

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

export type {
  SheetRootProps as RootProps,
  SheetTriggerProps as TriggerProps,
  SheetPortalProps as PortalProps,
  SheetOverlayProps as OverlayProps,
  SheetContentProps as ContentProps,
  SheetHeaderProps as HeaderProps,
  SheetCloseButtonProps as CloseButtonProps,
  SheetCloseProps as CloseProps,
  SheetTitleProps as TitleProps,
  SheetDescriptionProps as DescriptionProps,
  SheetBodyProps as BodyProps,
  SheetFooterProps as FooterProps,
};

export {
  /** Contains all the parts of a sheet. */
  SheetRoot as Root,
  /** The button that opens the sheet. This component is based on the `button` element. */
  SheetTrigger as Trigger,
  /** When used, portals your overlay and content parts into the `body`. */
  SheetPortal as Portal,
  /** A layer that covers the inert portion of the view when the sheet is open. This component is based on the `div` element. */
  SheetOverlay as Overlay,
  /** Contains content to be rendered in the open sheet. This component is based on the `div` element. */
  SheetContent as Content,
  /** An optional header of the sheet content. This component usually contains `Sheet.Title`, `Sheet.Description` and `Sheet.CloseButton`. This component is based on the `div` element. */
  SheetHeader as Header,
  /** The button that closes the sheet. By default it will be rendered in the upper right corner of the `Sheet.Content`. This component is based on the `button` element. */
  SheetCloseButton as CloseButton,
  /** The button that closes the sheet. This component is based on the `button` element. */
  SheetClose as Close,
  /** An accessible title to be announced when the sheet is opened. This component is based on the `h2` element. If you want to hide the title, pass `visuallyHidden` to this component. If you want to remove the title entirely, remove this part and pass `aria-labelledby={undefined}` to `Sheet.Content` component. */
  SheetTitle as Title,
  /** An optional accessible description to be announced when the sheet is opened. This component is based on the `p` element. If you want to hide the description, pass `visuallyHidden` to this component. If you want to remove the description entirely, remove this part and pass `aria-describedby={undefined}` to `Sheet.Content` component. */
  SheetDescription as Description,
  /** An optional body of the sheet content. This component usually contains main part of the sheet. This component is based on the `div` element. */
  SheetBody as Body,
  /** An optional footer of the sheet content. This component usually contains some action button and `Sheet.Close`. This component is based on the `div` element. */
  SheetFooter as Footer,
};
