'use client';
import type { LabelIndicatorProps } from './label-indicator.types';
import { forwardRef } from 'react';
import { twMerge } from 'tailwind-merge';
import { Primitive } from '@/components/primitive';
import { useLabelContext } from '../label-context';
import { labelIndicatorStyles } from './label-indicator.styles';

export const LabelIndicator = forwardRef<HTMLSpanElement, LabelIndicatorProps>((props, ref) => {
  const { className, children, ...others } = props;

  const { disabled } = useLabelContext();

  return (
    <Primitive.span
      ref={ref}
      aria-hidden="true"
      data-disabled={disabled ? '' : undefined}
      className={twMerge(labelIndicatorStyles(), className)}
      {...others}
    >
      {children ? children : ' *'}
    </Primitive.span>
  );
});

LabelIndicator.displayName = 'LabelIndicator';
