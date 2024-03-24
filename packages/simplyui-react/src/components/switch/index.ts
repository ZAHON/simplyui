'use client';

import type { SwitchRootProps } from './switch-root';
import type { SwitchThumbProps } from './switch-thumb';

import { SwitchRoot } from './switch-root';
import { SwitchThumb } from './switch-thumb';

export type { SwitchRootProps as RootProps, SwitchThumbProps as ThumbProps };

export {
  /** Contains all the parts of a switch. An `input` will also render when used within a `form` to ensure events propagate correctly. This component is based on the `button` element. */
  SwitchRoot as Root,
  /** The thumb that is used to visually indicate whether the switch is on or off. This component is based on the `span` element. */
  SwitchThumb as Thumb,
};
