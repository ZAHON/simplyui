import type { ReactNode } from 'react';

export interface SegmentedControlContextValue {
  /**
   * The color of the segmented control indicator.
   */
  color?: 'default' | 'primary' | 'success' | 'warning' | 'danger';

  /**
   * The disabled state of the segmented control.
   */
  disabled?: boolean;

  /**
   * The handler that allow change segmented control value.
   */
  handleValueChange: (value: string, ...payload: any[]) => void; // eslint-disable-line @typescript-eslint/no-explicit-any

  /**
   * The name of the group.
   */
  name: string;

  /**
   * The border radius value of the segmented control.
   */
  radius?: 'none' | 'sm' | 'md' | 'lg' | 'xl' | 'full';

  /**
   * The size of the segmented control.
   */
  size?: 'sm' | 'md' | 'lg' | 'xl';

  /**
   * The value of the segmented control.
   */
  value: string;
}

export type SegmentedControlContextProviderProps = {
  value: SegmentedControlContextValue;
  children: ReactNode;
};
