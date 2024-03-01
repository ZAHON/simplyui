import type { ReactNode } from 'react';

export interface SegmentedControlItemContextValue {
  /**
   * The checked state of the item.
   */
  checked: boolean;

  /**
   * The disabled state of the item.
   */
  disabled?: boolean;

  /**
   * The id of the item.
   */
  id: string;
}

export type SegmentedControlItemContextProviderProps = {
  value: SegmentedControlItemContextValue;
  children: ReactNode;
};
