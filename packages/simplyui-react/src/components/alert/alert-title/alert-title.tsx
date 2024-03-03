'use client';
import type { AlertTitleProps } from './alert-title.types';
import { forwardRef } from 'react';
import { twMerge } from 'tailwind-merge';
import { Primitive } from '@/components/primitive';
import { useAlertContext } from '../alert-context';
import { alertTitleStyles } from './alert-title.styles';

export const AlertTitle = forwardRef<HTMLParagraphElement, AlertTitleProps>((props, ref) => {
  const { className, children, ...others } = props;

  const { titleId } = useAlertContext();

  return (
    <Primitive.p
      ref={ref}
      id={titleId}
      data-alert-title=""
      className={twMerge(alertTitleStyles(), className)}
      {...others}
    >
      {children}
    </Primitive.p>
  );
});

AlertTitle.displayName = 'AlertTitle';
