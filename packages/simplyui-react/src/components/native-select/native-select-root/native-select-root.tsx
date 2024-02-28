'use client';
import type { NativeSelectRootProps } from './native-select-root.types';
import { forwardRef, useMemo } from 'react';
import { twMerge } from 'tailwind-merge';
import { applayComponentDefaultProps } from '@/utils/applay-component-default-props';
import { getValidChildren } from '@/utils/get-valid-children';
import { Primitive } from '@/components/primitive';
import { NativeSelectContextProvider } from '../native-select-context';
import { nativeSelectRootStyles } from './native-select-root.styles';

const defaultProps: Partial<NativeSelectRootProps> = {
  radius: 'md',
  size: 'md',
  variant: 'default',
};

export const NativeSelectRoot = forwardRef<HTMLDivElement, NativeSelectRootProps>((props, ref) => {
  const { disabled, invalid, radius, required, size, variant, className, children, ...others } =
    applayComponentDefaultProps(defaultProps, props);

  const withSlot = useMemo(() => {
    const validChildren = getValidChildren(children);

    return validChildren.some((child) => {
      const { type } = child;

      if (typeof type === 'object' && '__docgenInfo' in type && 'displayName' in type['__docgenInfo']) {
        return type['__docgenInfo']['displayName'] === 'NativeSelectSlot';
      }

      return false;
    });
  }, [children]);

  return (
    <NativeSelectContextProvider value={{ disabled, invalid, radius, required, size, variant, withSlot }}>
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
