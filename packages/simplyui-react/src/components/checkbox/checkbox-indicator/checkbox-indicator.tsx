'use client';
import { CheckboxIndicatorProps } from './checkbox-indicator.types';
import { forwardRef } from 'react';
import { Indicator } from '@radix-ui/react-checkbox';
import { twMerge } from 'tailwind-merge';
import { useCheckboxContext } from '../checkbox-context';
import { CheckboxIcon } from '../checkbox-icon';
import { checkboxIndicatorStyles } from './checkbox-indicator.styles';

export const CheckboxIndicator = forwardRef<HTMLSpanElement, CheckboxIndicatorProps>((props, ref) => {
  const { className, children, ...others } = props;

  const { invalid } = useCheckboxContext();

  return (
    <Indicator
      ref={ref}
      forceMount
      data-invalid={invalid ? '' : undefined}
      className={twMerge(checkboxIndicatorStyles(), className)}
      {...others}
    >
      {children ? children : <CheckboxIcon />}
    </Indicator>
  );
});

CheckboxIndicator.displayName = 'CheckboxIndicator';
