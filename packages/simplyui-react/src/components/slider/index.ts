'use client';

import type { SliderRootProps } from './slider-root';
import type { SliderTrackProps } from './slider-track';
import type { SliderRangeProps } from './slider-range';
import type { SliderMarkerProps } from './slider-marker';
import type { SliderThumbProps } from './slider-thumb';

import { SliderRoot } from './slider-root';
import { SliderTrack } from './slider-track';
import { SliderRange } from './slider-range';
import { SliderMarker } from './slider-marker';
import { SliderThumb } from './slider-thumb';

export type {
  SliderRootProps as RootProps,
  SliderTrackProps as TrackProps,
  SliderRangeProps as RangeProps,
  SliderMarkerProps as MarkerProps,
  SliderThumbProps as ThumbProps,
};

export {
  /** Contains all the parts of a slider. It will render an `input` for each thumb when used within a `form` to ensure events propagate correctly. This component is based on the `span` element. */
  SliderRoot as Root,
  /** The track that contains the `Slider.Range`. This component is based on the `span` element. */
  SliderTrack as Track,
  /** The range part. Must live inside `Slider.Track`. This component is based on the `span` element. */
  SliderRange as Range,
  /** Optional marker part. Must live inside `Slider.Track`. This component is based on the `span` element. */
  SliderMarker as Marker,
  /** A draggable thumb. You can render multiple thumbs. This component is based on the `button` element. */
  SliderThumb as Thumb,
};
