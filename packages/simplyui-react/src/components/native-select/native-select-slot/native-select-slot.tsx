'use client';
import type { NativeSelectSlotProps } from './native-select-slot.types';
import { forwardRef } from 'react';
import { twMerge } from 'tailwind-merge';
import { Primitive } from '../../primitive';
import { useNativeSelectContext } from '../native-select-context';
import { nativeSelectSlotStyles } from './native-select-slot.styles';

export const NativeSelectSlot = forwardRef<HTMLDivElement, NativeSelectSlotProps>((props, ref) => {
  const { className, children, ...others } = props;

  const { disabled, invalid } = useNativeSelectContext();

  return (
    <Primitive.div
      ref={ref}
      data-native-select-slot=""
      data-disabled={disabled ? '' : undefined}
      data-invalid={invalid ? '' : undefined}
      className={twMerge(nativeSelectSlotStyles(), className)}
      {...others}
    >
      {children}
    </Primitive.div>
  );
});

NativeSelectSlot.displayName = 'NativeSelect.Slot';
