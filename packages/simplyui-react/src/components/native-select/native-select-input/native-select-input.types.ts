import type { ComponentPropsWithRef, ReactNode } from 'react';

type HTMLAttributesToOmit = 'size' | 'disabled';

export interface NativeSelectInputProps extends Omit<ComponentPropsWithRef<'select'>, HTMLAttributesToOmit> {
  /**
   * The content of the native select input - HTML option element or HTML optgroup element.
   */
  children: ReactNode;

  /**
   * If added, the native select input will have placeholder.
   */
  placeholder?: string;
}
