export type { SliderRootProps } from './slider-root';
export type { SliderTrackProps } from './slider-track';
export type { SliderRangeProps } from './slider-range';
export type { SliderThumbProps } from './slider-thumb';

import { SliderRoot } from './slider-root';
import { SliderTrack } from './slider-track';
import { SliderRange } from './slider-range';
import { SliderThumb } from './slider-thumb';

export const Slider = Object.assign(SliderRoot, {
  Track: SliderTrack,
  Range: SliderRange,
  Thumb: SliderThumb,
});
