'use client';
import type { AlertDescriptionProps } from './alert-description.types';
import { forwardRef } from 'react';
import { twMerge } from 'tailwind-merge';
import { Primitive } from '@/components/primitive';
import { useAlertContext } from '../alert-context';
import { alertDescriptionStyles } from './alert-description.styles';

export const AlertDescription = forwardRef<HTMLParagraphElement, AlertDescriptionProps>((props, ref) => {
  const { visuallyHidden, className, children, ...others } = props;

  const { descriptionId, size } = useAlertContext();

  return (
    <Primitive.p
      ref={ref}
      id={descriptionId}
      className={twMerge(alertDescriptionStyles({ size, visuallyHidden }), className)}
      {...others}
    >
      {children}
    </Primitive.p>
  );
});

AlertDescription.displayName = 'AlertDescription';
