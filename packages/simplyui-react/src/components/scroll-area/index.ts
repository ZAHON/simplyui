'use client';

import type { ScrollAreaRootProps } from './scroll-area-root';
import type { ScrollAreaViewportProps } from './scroll-area-viewport';
import type { ScrollAreaScrollbarProps } from './scroll-area-scrollbar';
import type { ScrollAreaThumbProps } from './scroll-area-thumb';
import type { ScrollAreaCornerProps } from './scroll-area-corner';

import { ScrollAreaRoot } from './scroll-area-root';
import { ScrollAreaViewport } from './scroll-area-viewport';
import { ScrollAreaScrollbar } from './scroll-area-scrollbar';
import { ScrollAreaThumb } from './scroll-area-thumb';
import { ScrollAreaCorner } from './scroll-area-corner';

export type {
  ScrollAreaRootProps as RootProps,
  ScrollAreaViewportProps as ViewportProps,
  ScrollAreaScrollbarProps as ScrollbarProps,
  ScrollAreaThumbProps as ThumbProps,
  ScrollAreaCornerProps as CornerProps,
};

export {
  /** Contains all the parts of a scroll area. This component is based on the `div` element. */
  ScrollAreaRoot as Root,
  /** The viewport area of the scroll area. This component is based on the `div` element. */
  ScrollAreaViewport as Viewport,
  /** The scrollbar part. This component is based on the `div` element. */
  ScrollAreaScrollbar as Scrollbar,
  /** The thumb to be used in `ScrollArea.Scrollbar`. This component is based on the `div` element. */
  ScrollAreaThumb as Thumb,
  /** The corner where both vertical and horizontal scrollbars meet. This component is based on the `div` element. */
  ScrollAreaCorner as Corner,
};
