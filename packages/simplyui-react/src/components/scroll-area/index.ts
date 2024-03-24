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

/** Contains all the parts of a scroll area. This component is based on the `div` element. */
export const ScrollArea = Object.assign(ScrollAreaRoot, {
  /** The viewport area of the scroll area. This component is based on the `div` element. */
  Viewport: ScrollAreaViewport,
  /** The scrollbar part. This component is based on the `div` element. */
  Scrollbar: ScrollAreaScrollbar,
  /** The thumb to be used in `ScrollArea.Scrollbar`. This component is based on the `div` element. */
  Thumb: ScrollAreaThumb,
  /** The corner where both vertical and horizontal scrollbars meet. This component is based on the `div` element. */
  Corner: ScrollAreaCorner,
});
