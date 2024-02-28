import type { ReactNode } from 'react';

export interface MenuPortalProps {
  /**
   * The content of the portal.
   */
  children: ReactNode;

  /**
   * Specify a container element to portal the content into.
   * @default document.body
   */
  container?: HTMLElement;

  /**
   * Used to force mounting when more control is needed. Useful when controlling animation with React animation libraries. If used on this part, it will be inherited by `Menu.Content` and `Menu.SubContent` respectively.
   */
  forceMount?: true;
}
