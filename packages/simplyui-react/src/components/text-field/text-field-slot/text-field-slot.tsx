'use client';
import type { TextFieldSlotProps } from './text-field-slot.types';
import { forwardRef } from 'react';
import { twMerge } from 'tailwind-merge';
import { Primitive } from '../../primitive';
import { useTextFieldContext } from '../text-field-context';
import { textFieldSlotStyles } from './text-field-slot.styles';

export const TextFieldSlot = forwardRef<HTMLDivElement, TextFieldSlotProps>((props, ref) => {
  const { className, children, ...others } = props;

  const { disabled, invalid } = useTextFieldContext();

  return (
    <Primitive.div
      ref={ref}
      data-disabled={disabled ? '' : undefined}
      data-invalid={invalid ? '' : undefined}
      data-text-field-slot=""
      className={twMerge(textFieldSlotStyles(), className)}
      {...others}
    >
      {children}
    </Primitive.div>
  );
});

TextFieldSlot.displayName = 'TextField.Slot';
