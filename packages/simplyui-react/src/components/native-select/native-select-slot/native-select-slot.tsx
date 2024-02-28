'use client';
import type { NativeSelectSlotProps } from './native-select-slot.types';
import { forwardRef } from 'react';
import { Slot } from '@radix-ui/react-slot';
import { twMerge } from 'tailwind-merge';
import { useNativeSelectContext } from '../native-select-context';
import { nativeSelectSlotStyles } from './native-select-slot.styles';

export const NativeSelectSlot = forwardRef<HTMLDivElement, NativeSelectSlotProps>((props, ref) => {
  const { asChild, className, children, ...others } = props;

  const { disabled, invalid } = useNativeSelectContext();

  const Component = asChild ? Slot : 'div';

  return (
    <Component
      ref={ref}
      data-disabled={disabled ? '' : undefined}
      data-invalid={invalid ? '' : undefined}
      className={twMerge(nativeSelectSlotStyles(), className)}
      {...others}
    >
      {children}
    </Component>
  );
});

NativeSelectSlot.displayName = 'NativeSelectSlot';
