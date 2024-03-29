'use client';
import type { AlertTitleProps } from './alert-title.types';
import { forwardRef } from 'react';
import { twMerge } from 'tailwind-merge';
import { Primitive } from '../../primitive';
import { useAlertContext } from '../alert-context';
import { alertTitleStyles } from './alert-title.styles';

export const AlertTitle = forwardRef<HTMLParagraphElement, AlertTitleProps>((props, ref) => {
  const { visuallyHidden, className, children, ...others } = props;

  const { titleId, size } = useAlertContext();

  return (
    <Primitive.p
      ref={ref}
      id={titleId}
      className={twMerge(alertTitleStyles({ size, visuallyHidden }), className)}
      {...others}
    >
      {children}
    </Primitive.p>
  );
});

AlertTitle.displayName = 'Alert.Title';
