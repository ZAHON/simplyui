'use client';

import type { SliderRootProps } from './slider-root';
import type { SliderTrackProps } from './slider-track';
import type { SliderRangeProps } from './slider-range';
import type { SliderMarkerProps } from './slider-marker';
import type { SliderThumbProps } from './slider-thumb';
import type { SliderTooltipProps } from './slider-tooltip';
import type { SliderTooltipContentProps } from './slider-tooltip-content';
import type { SliderTooltipTextProps } from './slider-tooltip-text';
import type { SliderTooltipArrowProps } from './slider-tooltip-arrow';

import { SliderRoot } from './slider-root';
import { SliderTrack } from './slider-track';
import { SliderRange } from './slider-range';
import { SliderMarker } from './slider-marker';
import { SliderThumb } from './slider-thumb';
import { SliderTooltip } from './slider-tooltip';
import { SliderTooltipContent } from './slider-tooltip-content';
import { SliderTooltipText } from './slider-tooltip-text';
import { SliderTooltipArrow } from './slider-tooltip-arrow';

export type {
  SliderRootProps as RootProps,
  SliderTrackProps as TrackProps,
  SliderRangeProps as RangeProps,
  SliderMarkerProps as MarkerProps,
  SliderThumbProps as ThumbProps,
  SliderTooltipProps as TooltipProps,
  SliderTooltipContentProps as TooltipContentProps,
  SliderTooltipTextProps as TooltipTextProps,
  SliderTooltipArrowProps as TooltipArrowProps,
};

export {
  /** Contains all the parts of a slider. It will render an `input` for each thumb when used within a `form` to ensure events propagate correctly. This component is based on the `span` element. */
  SliderRoot as Root,
  /** The track that contains the `Slider.Range`. This component is based on the `span` element. */
  SliderTrack as Track,
  /** The range part. Must be rendered inside `Slider.Track`. This component is based on the `span` element. */
  SliderRange as Range,
  /** Optional marker part. Must be rendered inside `Slider.Track`. This component is based on the `span` element. */
  SliderMarker as Marker,
  /** A draggable thumb. This component is based on the `button` element. */
  SliderThumb as Thumb,
  /** Contains all the parts of a slider tooltip. Must be rendered inside `Slider.Thumb`. This component is based on the `div` element. */
  SliderTooltip as Tooltip,
  /** The component that pops out when the slider tooltip is open. Must be rendered inside `Slider.Tooltip`. This component is based on the `div` element. */
  SliderTooltipContent as TooltipContent,
  /** The text content of the slider tooltip. By default will be contain the current value of the slider. Must be rendered inside `Slider.TooltipContent`. This component is based on the `div` element. */
  SliderTooltipText as TooltipText,
  /** An optional slider tooltip arrow element. This component is based on the `svg` element. Must be rendered inside `Slider.Tooltip`. */
  SliderTooltipArrow as TooltipArrow,
};
