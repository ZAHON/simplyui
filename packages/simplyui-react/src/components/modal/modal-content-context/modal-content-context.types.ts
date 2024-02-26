import type { ReactNode } from 'react';

export interface ModalContentContextValue {
  /**
   * The size of the modal content.
   */
  size?: 'sm' | 'md' | 'lg' | 'xl';
}

export interface ModalContentContextProviderProps {
  value: ModalContentContextValue;
  children: ReactNode;
}
