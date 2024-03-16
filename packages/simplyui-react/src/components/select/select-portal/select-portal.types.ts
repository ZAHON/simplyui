import type { ReactNode } from 'react';

export interface SelectPortalProps {
  /**
   * Specify a container element to portal the content into.
   * @default document.body
   */
  container?: HTMLElement;

  /**
   * The content of the portal - `Select.Content`.
   */
  children: ReactNode;
}
