'use client';

import type { NativeSelectRootProps } from './native-select-root';
import type { NativeSelectSlotProps } from './native-select-slot';
import type { NativeSelectInputProps } from './native-select-input';
import type { NativeSelectIconProps } from './native-select-icon';

import { NativeSelectRoot } from './native-select-root';
import { NativeSelectSlot } from './native-select-slot';
import { NativeSelectInput } from './native-select-input';
import { NativeSelectIcon } from './native-select-icon';

export type {
  NativeSelectRootProps as RootProps,
  NativeSelectSlotProps as SlotProps,
  NativeSelectInputProps as InputProps,
  NativeSelectIconProps as IconProps,
};

export {
  /** Groups `NativeSelect.Slot`, `NativeSelect.Input` and `NativeSelect.Icon` parts. This component is based on the `div` element. */
  NativeSelectRoot as Root,
  /** Contains icons associated with an `NativeSelect.Input`. This component is based on the `div` element. */
  NativeSelectSlot as Slot,
  /** The input element. This component is based on the `select` element. */
  NativeSelectInput as Input,
  /** A small icon often displayed next to the value as a visual affordance for the fact it can be open. You can use your own icon via `asChild` or use `children`. This component is based on the `div` element. */
  NativeSelectIcon as Icon,
};
