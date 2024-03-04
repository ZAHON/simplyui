export type { SwitchRootProps } from './switch-root';
export type { SwitchThumb } from './switch-thumb';

import { SwitchRoot } from './switch-root';
import { SwitchThumb } from './switch-thumb';

/** Contains all the parts of a switch. An `input` will also render when used within a `form` to ensure events propagate correctly. This component is based on the `button` element. */
export const Switch = Object.assign(SwitchRoot, {
  /** The thumb that is used to visually indicate whether the switch is on or off. This component is based on the `span` element. */
  Thumb: SwitchThumb,
});
