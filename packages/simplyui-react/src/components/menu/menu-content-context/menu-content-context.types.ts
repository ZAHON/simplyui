import type { ReactNode } from 'react';

export interface MenuContentContextValue {
  /**
   * The border radius value of the menu content.
   * @default "md"
   */
  radius?: 'none' | 'sm' | 'md' | 'lg' | 'xl' | 'full';

  /**
   * The size of the menu content.
   */
  size?: 'sm' | 'md';
}

export type MenuContentContextProviderProps = {
  value: MenuContentContextValue;
  children: ReactNode;
};
