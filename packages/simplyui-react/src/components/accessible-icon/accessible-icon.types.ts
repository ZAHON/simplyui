import type { ReactNode } from 'react';

export interface AccessibleIconProps {
  /**
   * The svg icon.
   */
  children: ReactNode;

  /**
   * The accessible label for the icon. This label will be visually hidden but announced to screen reader users, similar to `alt` text for `img` tags.
   *
   * If added, icon will have `aria-label` attribute with value provided by this prop.
   */
  label?: string;
}
