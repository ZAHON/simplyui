export type { ScrollAreaRootProps } from './scroll-area-root';
export type { ScrollAreaViewportProps } from './scroll-area-viewport';
export type { ScrollAreaScrollbarProps } from './scroll-area-scrollbar';
export type { ScrollAreaThumbProps } from './scroll-area-thumb';
export type { ScrollAreaCornerProps } from './scroll-area-corner';

import { ScrollAreaRoot } from './scroll-area-root';
import { ScrollAreaViewport } from './scroll-area-viewport';
import { ScrollAreaScrollbar } from './scroll-area-scrollbar';
import { ScrollAreaThumb } from './scroll-area-thumb';
import { ScrollAreaCorner } from './scroll-area-corner';

export const ScrollArea = Object.assign(ScrollAreaRoot, {
  Viewport: ScrollAreaViewport,
  Scrollbar: ScrollAreaScrollbar,
  Thumb: ScrollAreaThumb,
  Corner: ScrollAreaCorner,
});
