'use client';
import type { CheckboxRootProps } from './checkbox-root.types';
import { forwardRef } from 'react';
import { Root } from '@radix-ui/react-checkbox';
import { twMerge } from 'tailwind-merge';
import { applayComponentDefaultProps } from '../../../utils/applay-component-default-props';
import { CheckboxContextProvider } from '../checkbox-context';
import { checkboxRootStyles } from './checkbox-root.styles';

const defaultProps: Partial<CheckboxRootProps> = {
  color: 'primary',
  radius: 'md',
  size: '2',
  variant: 'default',
};

export const CheckboxRoot = forwardRef<HTMLButtonElement, CheckboxRootProps>((props, ref) => {
  const { color, invalid, radius, size, variant, className, children, ...others } = applayComponentDefaultProps(
    defaultProps,
    props
  );

  return (
    <CheckboxContextProvider value={{ invalid }}>
      <Root
        ref={ref}
        aria-invalid={invalid ? true : undefined}
        data-invalid={invalid ? '' : undefined}
        className={twMerge(checkboxRootStyles({ color, radius, size, variant }), className)}
        {...others}
      >
        {children}
      </Root>
    </CheckboxContextProvider>
  );
});

CheckboxRoot.displayName = 'CheckboxRoot';
