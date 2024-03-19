import type { ReactNode } from 'react';

export interface SheetContentContextValue {
  /**
   * The size of the sheet content.
   */
  size?: '1' | '2' | '3' | '4';
}

export interface SheetContentContextProviderProps {
  value: SheetContentContextValue;
  children: ReactNode;
}
