'use client';
import type { NativeSelectIndicatorProps } from './native-select-indicator.types';
import { forwardRef } from 'react';
import { Slot } from '@radix-ui/react-slot';
import { twMerge } from 'tailwind-merge';
import { useNativeSelectContext } from '../native-select-context';
import { nativeSelectIndicatorStyles } from './native-select-indicator.styles';

export const NativeSelectIndicator = forwardRef<HTMLDivElement, NativeSelectIndicatorProps>((props, ref) => {
  const { asChild, className, children, ...others } = props;

  const { disabled, invalid } = useNativeSelectContext();

  const Component = asChild ? Slot : 'div';

  return (
    <Component
      ref={ref}
      data-disabled={disabled ? '' : undefined}
      data-invalid={invalid ? '' : undefined}
      className={twMerge(nativeSelectIndicatorStyles(), className)}
      {...others}
    >
      {children}
    </Component>
  );
});

NativeSelectIndicator.displayName = 'NativeSelectIndicator';
