import type { ReactNode } from 'react';

export interface ModalContentContextValue {
  /**
   * The size of the modal content.
   */
  size?: '1' | '2' | '3' | '4';
}

export interface ModalContentContextProviderProps {
  value: ModalContentContextValue;
  children: ReactNode;
}
