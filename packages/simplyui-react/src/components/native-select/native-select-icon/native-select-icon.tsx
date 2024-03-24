'use client';
import type { NativeSelectIconProps } from './native-select-icon.types';
import { forwardRef } from 'react';
import { twMerge } from 'tailwind-merge';
import { Primitive } from '../../primitive';
import { useNativeSelectContext } from '../native-select-context';
import { NativeSelectIconDefault } from './native-select-icon-default';
import { nativeSelectIconStyles } from './native-select-icon.styles';

export const NativeSelectIcon = forwardRef<HTMLDivElement, NativeSelectIconProps>((props, ref) => {
  const { className, children, ...others } = props;

  const { disabled, invalid } = useNativeSelectContext();

  return (
    <Primitive.div
      ref={ref}
      data-native-select-icon=""
      data-disabled={disabled ? '' : undefined}
      data-invalid={invalid ? '' : undefined}
      className={twMerge(nativeSelectIconStyles(), className)}
      {...others}
    >
      {children ? children : <NativeSelectIconDefault />}
    </Primitive.div>
  );
});

NativeSelectIcon.displayName = 'NativeSelectIcon';
