'use client';
import type { AlertBodyProps } from './alert-body.types';
import { forwardRef } from 'react';
import { twMerge } from 'tailwind-merge';
import { Primitive } from '@/components/primitive';
import { useAlertContext } from '../alert-context';
import { alertBodyStyles } from './alert-body.styles';

export const AlertBody = forwardRef<HTMLDivElement, AlertBodyProps>((props, ref) => {
  const { className, children, ...others } = props;

  const { size } = useAlertContext();

  return (
    <Primitive.div ref={ref} className={twMerge(alertBodyStyles({ size }), className)} {...others}>
      {children}
    </Primitive.div>
  );
});

AlertBody.displayName = 'AlertBody';
