'use client';
import { CheckboxIndicatorProps } from './checkbox-indicator.types';
import { forwardRef } from 'react';
import { Indicator } from '@radix-ui/react-checkbox';
import { twMerge } from 'tailwind-merge';
import { CheckboxIcon } from '../checkbox-icon';
import { checkboxIndicatorStyles } from './checkbox-indicator.styles';

export const CheckboxIndicator = forwardRef<HTMLSpanElement, CheckboxIndicatorProps>((props, ref) => {
  const { className, children, ...others } = props;

  return (
    <Indicator ref={ref} forceMount className={twMerge(checkboxIndicatorStyles(), className)} {...others}>
      {children ? children : <CheckboxIcon />}
    </Indicator>
  );
});

CheckboxIndicator.displayName = 'CheckboxIndicator';
