import type { ReactNode } from 'react';

export interface SegmentedControlContextValue {
  /**
   * The disabled state of the segmented control.
   */
  disabled?: boolean;

  /**
   * The border radius value of the segmented control.
   */
  radius?: 'none' | 'sm' | 'md' | 'lg' | 'xl' | 'full';

  /**
   * The size of the segmented control.
   */
  size?: '1' | '2' | '3' | '4';

  /**
   * The value of the segmented control.
   */
  value: string;
}

export type SegmentedControlContextProviderProps = {
  value: SegmentedControlContextValue;
  children: ReactNode;
};
