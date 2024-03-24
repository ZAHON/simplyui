'use client';

export type { SliderRootProps } from './slider-root';
export type { SliderTrackProps } from './slider-track';
export type { SliderRangeProps } from './slider-range';
export type { SliderMarkerProps } from './slider-marker';
export type { SliderThumbProps } from './slider-thumb';

import { SliderRoot } from './slider-root';
import { SliderTrack } from './slider-track';
import { SliderRange } from './slider-range';
import { SliderMarker } from './slider-marker';
import { SliderThumb } from './slider-thumb';

/** Contains all the parts of a slider. It will render an `input` for each thumb when used within a `form` to ensure events propagate correctly. This component is based on the `span` element. */
export const Slider = Object.assign(SliderRoot, {
  /** The track that contains the `Slider.Range`. This component is based on the `span` element. */
  Track: SliderTrack,
  /** The range part. Must live inside `Slider.Track`. This component is based on the `span` element. */
  Range: SliderRange,
  /** Optional marker part. Must live inside `Slider.Track`. This component is based on the `span` element. */
  Marker: SliderMarker,
  /** A draggable thumb. You can render multiple thumbs. This component is based on the `span` element. */
  Thumb: SliderThumb,
});
