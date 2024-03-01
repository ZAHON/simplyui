import type { ReactNode } from 'react';

export interface SegmentedControlContentContextValue {
  /**
   * Indicates whether the checked item is in segmented control content.
   */
  haveChackedItem: boolean;
}

export type SegmentedControlContentContextProviderProps = {
  value: SegmentedControlContentContextValue;
  children: ReactNode;
};
