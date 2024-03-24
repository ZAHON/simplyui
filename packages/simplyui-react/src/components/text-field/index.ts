'use client';

export type { TextFieldRootProps } from './text-field-root';
export type { TextFieldSlotProps } from './text-field-slot';
export type { TextFieldButtonProps } from './text-field-button';
export type { TextFieldInputProps } from './text-field-input';

import { TextFieldRoot } from './text-field-root';
import { TextFieldSlot } from './text-field-slot';
import { TextFieldButton } from './text-field-button';
import { TextFieldInput } from './text-field-input';

/** Groups `TextField.Slot` and `TextField.Input` parts. This component is based on the `div` element. */
export const TextField = Object.assign(TextFieldRoot, {
  /** Contains icons or buttons associated with an `TextField.Input`. This component is based on the `div` element. */
  Slot: TextFieldSlot,
  /** The button element.  Must live inside `TextField.Slot`. This component is based on the `button` element. */
  Button: TextFieldButton,
  /** The input element. This component is based on the `input` element. */
  Input: TextFieldInput,
});
