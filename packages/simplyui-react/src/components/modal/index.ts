export type { ModalRootProps } from './modal-root';
export type { ModalTriggerProps } from './modal-trigger';
export type { ModalPortalProps } from './modal-portal';
export type { ModalOverlayProps } from './modal-overlay';
export type { ModalContentProps } from './modal-content';
export type { ModalHeaderProps } from './modal-header';
export type { ModalCloseButtonProps } from './modal-close-button';
export type { ModalCloseProps } from './modal-close';
export type { ModalTitleProps } from './modal-title';
export type { ModalDescriptionProps } from './modal-description';
export type { ModalBodyProps } from './modal-body';
export type { ModalFooterProps } from './modal-footer';

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

/** Contains all the parts of a modal. */
export const Modal = Object.assign(ModalRoot, {
  /** The button that opens the modal. This component is based on the `button` element. */
  Trigger: ModalTrigger,
  /** When used, portals your overlay and content parts into the `body`. */
  Portal: ModalPortal,
  /** A layer that covers the inert portion of the view when the modal is open. This component is based on the `div` element. */
  Overlay: ModalOverlay,
  /** Contains content to be rendered in the open modal. This component is based on the `div` element. */
  Content: ModalContent,
  /** An optional header of the modal content. This component usually contains `Modal.Title`, `Modal.Description` and `Modal.CloseButton`. This component is based on the `div` element. */
  Header: ModalHeader,
  /** The button that closes the modal. By default it will be rendered in the upper right corner of the `Modal.Content`. This component is based on the `button` element. */
  CloseButton: ModalCloseButton,
  /** The button that closes the modal. This component is based on the `button` element. */
  Close: ModalClose,
  /** An accessible title to be announced when the modal is opened. This component is based on the `h2` element. If you want to hide the title, pass `visuallyHidden` to this component. If you want to remove the title entirely, remove this part and pass `aria-labelledby={undefined}` to `Modal.Content` component. */
  Title: ModalTitle,
  /** An optional accessible description to be announced when the modal is opened. This component is based on the `p` element. If you want to hide the description, pass `visuallyHidden` to this component. If you want to remove the description entirely, remove this part and pass `aria-describedby={undefined}` to `Modal.Content` component. */
  Description: ModalDescription,
  /** An optional body of the modal content. This component usually contains main part of the modal. This component is based on the `div` element. */
  Body: ModalBody,
  /** An optional footer of the modal content. This component usually contains some action button and `Modal.Close`. This component is based on the `div` element. */
  Footer: ModalFooter,
});
