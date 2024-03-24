'use client';
import type { SwitchRootProps } from './switch-root.types';
import { forwardRef } from 'react';
import { Root } from '@radix-ui/react-switch';
import { twMerge } from 'tailwind-merge';
import { applayComponentDefaultProps } from '../../../utils/applay-component-default-props';
import { SwitchContextProvider } from '../switch-context';
import { switchRootStyles } from './switch-root.styles';

const defaultProps: Partial<SwitchRootProps> = {
  color: 'primary',
  radius: 'full',
  size: '2',
  variant: 'default',
};

export const SwitchRoot = forwardRef<HTMLButtonElement, SwitchRootProps>((props, ref) => {
  const { color, invalid, radius, size, variant, className, children, ...others } = applayComponentDefaultProps(
    defaultProps,
    props
  );

  return (
    <SwitchContextProvider value={{ invalid, radius, size }}>
      <Root
        ref={ref}
        aria-invalid={invalid ? true : undefined}
        data-invalid={invalid ? '' : undefined}
        className={twMerge(switchRootStyles({ color, radius, size, variant }), className)}
        {...others}
      >
        {children}
      </Root>
    </SwitchContextProvider>
  );
});

SwitchRoot.displayName = 'Switch.Root';
