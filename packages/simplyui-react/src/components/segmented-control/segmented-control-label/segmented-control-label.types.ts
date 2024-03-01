import type { ComponentPropsWithRef, ReactNode } from 'react';

type HTMLAttributesToOmit = 'htmlFor';

export interface SegmentedControlLabelProps extends Omit<ComponentPropsWithRef<'label'>, HTMLAttributesToOmit> {
  /**
   * The content of the label.
   */
  children: ReactNode;
}
