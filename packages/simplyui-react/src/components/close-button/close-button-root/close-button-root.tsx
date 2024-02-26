'use client';
import type { CloseButtonRootProps } from './close-button-root.types';
import { forwardRef } from 'react';
import { twMerge } from 'tailwind-merge';
import { applayComponentDefaultProps } from '@/utils/applay-component-default-props';
import { Primitive } from '@/components/primitive';
import { CloseButtonContextProvider } from '../close-button-context';
import { closeButtonRootStyles } from './close-button-root.styles';

const defaultProps: Partial<CloseButtonRootProps> = {
  color: 'default',
  size: 'md',
  radius: 'md',
  type: 'button',
  variant: 'subtle',
};

export const CloseButtonRoot = forwardRef<HTMLButtonElement, CloseButtonRootProps>((props, ref) => {
  const { size, variant, color, radius, disabled, className, children, ...others } = applayComponentDefaultProps(
    defaultProps,
    props
  );

  return (
    <CloseButtonContextProvider value={{ size, disabled }}>
      <Primitive.button
        ref={ref}
        disabled={disabled}
        data-disabled={disabled ? '' : undefined}
        className={twMerge(closeButtonRootStyles({ size, variant, color, radius }), className)}
        {...others}
      >
        {children}
      </Primitive.button>
    </CloseButtonContextProvider>
  );
});

CloseButtonRoot.displayName = 'CloseButtonRoot';
