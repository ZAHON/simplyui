'use client';

export type { NativeSelectRootProps } from './native-select-root';
export type { NativeSelectSlotProps } from './native-select-slot';
export type { NativeSelectInputProps } from './native-select-input';
export type { NativeSelectIconProps } from './native-select-icon';

import { NativeSelectRoot } from './native-select-root';
import { NativeSelectSlot } from './native-select-slot';
import { NativeSelectInput } from './native-select-input';
import { NativeSelectIcon } from './native-select-icon';

/** Groups `NativeSelect.Slot`, `NativeSelect.Input` and `NativeSelect.Icon` parts. This component is based on the `div` element. */
export const NativeSelect = Object.assign(NativeSelectRoot, {
  /** Contains icons associated with an `NativeSelect.Input`. This component is based on the `div` element. */
  Slot: NativeSelectSlot,
  /** The input element. This component is based on the `select` element. */
  Input: NativeSelectInput,
  /** A small icon often displayed next to the value as a visual affordance for the fact it can be open. You can use your own icon via `asChild` or use `children`. This component is based on the `div` element. */
  Icon: NativeSelectIcon,
});
