export type { NativeSelectRootProps } from './native-select-root';
export type { NativeSelectSlotProps } from './native-select-slot';
export type { NativeSelectInputProps } from './native-select-input';
export type { NativeSelectIndicatorProps } from './native-select-indicator';
export type { NativeSelectIconProps } from './native-select-icon';

import { NativeSelectRoot } from './native-select-root';
import { NativeSelectSlot } from './native-select-slot';
import { NativeSelectInput } from './native-select-input';
import { NativeSelectIndicator } from './native-select-indicator';
import { NativeSelectIcon } from './native-select-icon';

export const NativeSelect = Object.assign(NativeSelectRoot, {
  Input: NativeSelectInput,
  Slot: NativeSelectSlot,
  Indicator: NativeSelectIndicator,
  Icon: NativeSelectIcon,
});
