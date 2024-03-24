'use client';

import type { ModalRootProps } from './modal-root';
import type { ModalTriggerProps } from './modal-trigger';
import type { ModalPortalProps } from './modal-portal';
import type { ModalOverlayProps } from './modal-overlay';
import type { ModalContentProps } from './modal-content';
import type { ModalHeaderProps } from './modal-header';
import type { ModalCloseButtonProps } from './modal-close-button';
import type { ModalCloseProps } from './modal-close';
import type { ModalTitleProps } from './modal-title';
import type { ModalDescriptionProps } from './modal-description';
import type { ModalBodyProps } from './modal-body';
import type { ModalFooterProps } from './modal-footer';

import { ModalRoot } from './modal-root';
import { ModalTrigger } from './modal-trigger';
import { ModalPortal } from './modal-portal';
import { ModalOverlay } from './modal-overlay';
import { ModalContent } from './modal-content';
import { ModalHeader } from './modal-header';
import { ModalCloseButton } from './modal-close-button';
import { ModalClose } from './modal-close';
import { ModalTitle } from './modal-title';
import { ModalDescription } from './modal-description';
import { ModalBody } from './modal-body';
import { ModalFooter } from './modal-footer';

export type {
  ModalRootProps as RootProps,
  ModalTriggerProps as TriggerProps,
  ModalPortalProps as PortalProps,
  ModalOverlayProps as OverlayProps,
  ModalContentProps as ContentProps,
  ModalHeaderProps as HeaderProps,
  ModalCloseButtonProps as CloseButtonProps,
  ModalCloseProps as CloseProps,
  ModalTitleProps as TitleProps,
  ModalDescriptionProps as DescriptionProps,
  ModalBodyProps as BodyProps,
  ModalFooterProps as FooterProps,
};

export {
  /** Contains all the parts of a modal. */
  ModalRoot as Root,
  /** The button that opens the modal. This component is based on the `button` element. */
  ModalTrigger as Trigger,
  /** When used, portals your overlay and content parts into the `body`. */
  ModalPortal as Portal,
  /** A layer that covers the inert portion of the view when the modal is open. This component is based on the `div` element. */
  ModalOverlay as Overlay,
  /** Contains content to be rendered in the open modal. This component is based on the `div` element. */
  ModalContent as Content,
  /** An optional header of the modal content. This component usually contains `Modal.Title`, `Modal.Description` and `Modal.CloseButton`. This component is based on the `div` element. */
  ModalHeader as Header,
  /** The button that closes the modal. By default it will be rendered in the upper right corner of the `Modal.Content`. This component is based on the `button` element. */
  ModalCloseButton as CloseButton,
  /** The button that closes the modal. This component is based on the `button` element. */
  ModalClose as Close,
  /** An accessible title to be announced when the modal is opened. This component is based on the `h2` element. If you want to hide the title, pass `visuallyHidden` to this component. If you want to remove the title entirely, remove this part and pass `aria-labelledby={undefined}` to `Modal.Content` component. */
  ModalTitle as Title,
  /** An optional accessible description to be announced when the modal is opened. This component is based on the `p` element. If you want to hide the description, pass `visuallyHidden` to this component. If you want to remove the description entirely, remove this part and pass `aria-describedby={undefined}` to `Modal.Content` component. */
  ModalDescription as Description,
  /** An optional body of the modal content. This component usually contains main part of the modal. This component is based on the `div` element. */
  ModalBody as Body,
  /** An optional footer of the modal content. This component usually contains some action button and `Modal.Close`. This component is based on the `div` element. */
  ModalFooter as Footer,
};
