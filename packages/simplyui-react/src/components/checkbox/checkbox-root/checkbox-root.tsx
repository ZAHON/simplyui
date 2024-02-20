'use client';
import type { CheckboxRootProps } from './checkbox-root.types';
import { forwardRef } from 'react';
import { Root } from '@radix-ui/react-checkbox';
import { twMerge } from 'tailwind-merge';
import { applayComponentDefaultProps } from '@/utils/applay-component-default-props';
import { checkboxRootStyles } from './checkbox-root.styles';

const defaultProps: Partial<CheckboxRootProps> = {
  size: 'md',
  radius: 'md',
  variant: 'default',
  color: 'primary',
};

export const CheckboxRoot = forwardRef<HTMLButtonElement, CheckboxRootProps>((props, ref) => {
  const { required, invalid, size, radius, variant, color, className, children, ...others } =
    applayComponentDefaultProps(defaultProps, props);

  return (
    <Root
      ref={ref}
      aria-required={required ? true : undefined}
      aria-invalid={invalid ? true : undefined}
      className={twMerge(checkboxRootStyles({ size, radius, variant, color }), className)}
      {...others}
    >
      {children}
    </Root>
  );
});

CheckboxRoot.displayName = 'CheckboxRoot';
