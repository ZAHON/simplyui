'use client';
import type { AlertIconProps } from './alert-icon.types';
import { forwardRef } from 'react';
import { twMerge } from 'tailwind-merge';
import { Primitive } from '@/components/primitive';
import { useAlertContext } from '../alert-context';
import { alertIconStyles } from './alert-icon.styles';

export const AlertIcon = forwardRef<HTMLDivElement, AlertIconProps>((props, ref) => {
  const { className, children, ...others } = props;

  const { size } = useAlertContext();

  return (
    <Primitive.div ref={ref} aria-hidden="true" className={twMerge(alertIconStyles({ size }), className)} {...others}>
      {children}
    </Primitive.div>
  );
});

AlertIcon.displayName = 'AlertIcon';
