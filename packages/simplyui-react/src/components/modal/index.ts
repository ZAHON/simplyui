export type { ModalRootProps } from './modal-root';
export type { ModalTriggerProps } from './modal-trigger';
export type { ModalPortalProps } from './modal-portal';
export type { ModalOverlayProps } from './modal-overlay';
export type { ModalContentProps } from './modal-content';
export type { ModalHeaderProps } from './modal-header';
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
import { ModalClose } from './modal-close';
import { ModalTitle } from './modal-title';
import { ModalDescription } from './modal-description';
import { ModalBody } from './modal-body';
import { ModalFooter } from './modal-footer';

export const Modal = Object.assign(ModalRoot, {
  Trigger: ModalTrigger,
  Portal: ModalPortal,
  Overlay: ModalOverlay,
  Content: ModalContent,
  Header: ModalHeader,
  Close: ModalClose,
  Title: ModalTitle,
  Description: ModalDescription,
  Body: ModalBody,
  Footer: ModalFooter,
});
