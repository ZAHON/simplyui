'use client';
import type { NativeSelectRootProps } from './native-select-root.types';
import { forwardRef } from 'react';
import { twMerge } from 'tailwind-merge';
import { applayComponentDefaultProps } from '@/utils/applay-component-default-props';
import { Primitive } from '@/components/primitive';
import { NativeSelectContextProvider } from '../native-select-context';
import { nativeSelectRootStyles } from './native-select-root.styles';

const defaultProps: Partial<NativeSelectRootProps> = {
  radius: 'md',
  size: '2',
  variant: 'default',
};

export const NativeSelectRoot = forwardRef<HTMLDivElement, NativeSelectRootProps>((props, ref) => {
  const { disabled, invalid, radius, required, size, variant, className, children, ...others } =
    applayComponentDefaultProps(defaultProps, props);

  return (
    <NativeSelectContextProvider value={{ disabled, invalid, radius, required, size, variant }}>
      <Primitive.div
        ref={ref}
        data-disabled={disabled ? '' : undefined}
        data-invalid={invalid ? '' : undefined}
        className={twMerge(nativeSelectRootStyles(), className)}
        {...others}
      >
        {children}
      </Primitive.div>
    </NativeSelectContextProvider>
  );
});

NativeSelectRoot.displayName = 'NativeSelectRoot';
