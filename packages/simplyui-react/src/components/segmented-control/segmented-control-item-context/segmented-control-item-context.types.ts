import type { ReactNode } from 'react';

export interface SegmentedControlItemContextValue {
  /**
   * The disabled state of the segmented control item.
   */
  disabled?: boolean;

  /**
   * The state of the segmented control item.
   */
  state?: 'checked' | 'unchecked';
}

export type SegmentedControlItemContextProviderProps = {
  value: SegmentedControlItemContextValue;
  children: ReactNode;
};
