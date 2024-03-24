import type { ReactNode } from 'react';

export interface MenuContentContextValue {
  /**
   * The border radius value of the menu content.
   */
  radius?: 'none' | 'sm' | 'md' | 'lg' | 'xl' | 'full';

  /**
   * The size of the menu content.
   */
  size?: '1' | '2' | '3' | '4';
}

export type MenuContentContextProviderProps = {
  value: MenuContentContextValue;
  children: ReactNode;
};
