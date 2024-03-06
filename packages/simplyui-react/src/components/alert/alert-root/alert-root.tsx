'use client';
import type { AlertRootProps } from './alert-root.types';
import { forwardRef, useId } from 'react';
import { twMerge } from 'tailwind-merge';
import { Primitive } from '@/components/primitive';
import { applayComponentDefaultProps } from '@/utils/applay-component-default-props';
import { AlertContextProvider } from '../alert-context';
import { alertRootStyles } from './alert-root.styles';

const defaultProps: Partial<AlertRootProps> = {
  color: 'danger',
  radius: 'md',
  size: '2',
  variant: 'light',
};

export const AlertRoot = forwardRef<HTMLDivElement, AlertRootProps>((props, ref) => {
  const { color, radius, size, variant, className, children, ...others } = applayComponentDefaultProps(
    defaultProps,
    props
  );

  const id = useId();

  const titleId = `alert-title-${id}`;
  const descriptionId = `alert-description-${id}`;

  return (
    <AlertContextProvider value={{ titleId, descriptionId, size }}>
      <Primitive.div
        ref={ref}
        role="alert"
        aria-labelledby={titleId}
        aria-describedby={descriptionId}
        className={twMerge(alertRootStyles({ color, radius, size, variant }), className)}
        {...others}
      >
        {children}
      </Primitive.div>
    </AlertContextProvider>
  );
});

AlertRoot.displayName = 'AlertRoot';
