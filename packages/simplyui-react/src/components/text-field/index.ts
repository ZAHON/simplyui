'use client';

import type { TextFieldRootProps } from './text-field-root';
import type { TextFieldSlotProps } from './text-field-slot';
import type { TextFieldButtonProps } from './text-field-button';
import type { TextFieldInputProps } from './text-field-input';

import { TextFieldRoot } from './text-field-root';
import { TextFieldSlot } from './text-field-slot';
import { TextFieldButton } from './text-field-button';
import { TextFieldInput } from './text-field-input';

export type {
  TextFieldRootProps as RootProps,
  TextFieldSlotProps as SlotProps,
  TextFieldButtonProps as ButtonProps,
  TextFieldInputProps as InputProps,
};

export {
  /** Groups `TextField.Slot` and `TextField.Input` parts. This component is based on the `div` element. */
  TextFieldRoot as Root,
  /** Contains icons or buttons associated with an `TextField.Input`. This component is based on the `div` element. */
  TextFieldSlot as Slot,
  /** The button element.  Must live inside `TextField.Slot`. This component is based on the `button` element. */
  TextFieldButton as Button,
  /** The input element. This component is based on the `input` element. */
  TextFieldInput as Input,
};
