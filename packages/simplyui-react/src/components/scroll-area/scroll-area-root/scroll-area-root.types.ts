import type { ComponentPropsWithRef, ReactNode } from 'react';

type HtmlHTMLAttributesToOmit = 'dir';

export interface ScrollAreaRootProps extends Omit<ComponentPropsWithRef<'div'>, HtmlHTMLAttributesToOmit> {
  /**
   * Change the default rendered element for the one passed as a child, merging their props and behavior.
   * @default false
   */
  asChild?: boolean;

  /**
   * The all the parts of a scroll area.
   */
  children: ReactNode;

  /**
   * If `type` is set to either `"scroll"` or `"hover"`, this prop determines the length of time, in milliseconds, before the scrollbars are hidden after the user stops interacting with scrollbars.
   * @default 600
   */
  scrollHideDelay?: number;

  /**
   * Describes the nature of scrollbar visibility, similar to how the scrollbar preferences in MacOS control visibility of native scrollbars.
   *
   * `"auto"` means that scrollbars are visible when content is overflowing on the corresponding orientation.
   *
   * `"always"` means that scrollbars are always visible regardless of whether the content is overflowing.
   *
   * `"scroll"` means that scrollbars are visible when the user is scrolling along its corresponding orientation.
   *
   * `"hover"` when the user is scrolling along its corresponding orientation and when the user is hovering over the scroll area.
   *
   * @default "hover"
   */
  type?: 'auto' | 'always' | 'scroll' | 'hover';
}
