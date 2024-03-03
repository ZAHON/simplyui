'use client';
import type { AlertRootProps } from './alert-root.types';
import { forwardRef, useId, useState } from 'react';
import { mergeRefs } from 'react-merge-refs';
import { twMerge } from 'tailwind-merge';
import { Primitive } from '@/components/primitive';
import { applayComponentDefaultProps } from '@/utils/applay-component-default-props';
import { AlertContextProvider } from '../alert-context';
import { alertRootStyles } from './alert-root.styles';

const defaultProps: Partial<AlertRootProps> = {
  color: 'danger',
  radius: 'md',
  size: 'md',
  variant: 'light',
};

export const AlertRoot = forwardRef<HTMLDivElement, AlertRootProps>((props, ref) => {
  const { color, radius, size, variant, className, children, ...others } = applayComponentDefaultProps(
    defaultProps,
    props
  );

  const id = useId();
  const [alert, setAlert] = useState<HTMLDivElement | null>(null);

  const hasTitle = alert ? Boolean(alert.querySelector('[data-alert-title]')) : false;
  const hasDescription = alert ? Boolean(alert.querySelector('[data-alert-description]')) : false;

  const titleId = `alert-title-${id}`;
  const descriptionId = `alert-description-${id}`;

  return (
    <AlertContextProvider value={{ titleId, descriptionId, size }}>
      <Primitive.div
        ref={mergeRefs([ref, (node) => setAlert(node)])}
        role="alert"
        aria-labelledby={hasTitle ? titleId : undefined}
        aria-describedby={hasDescription ? descriptionId : undefined}
        className={twMerge(alertRootStyles({ color, radius, size, variant }), className)}
        {...others}
      >
        {children}
      </Primitive.div>
    </AlertContextProvider>
  );
});

AlertRoot.displayName = 'AlertRoot';
