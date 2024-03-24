'use client';
import type { SelectTriggerProps } from './select-trigger.types';
import { forwardRef } from 'react';
import { Trigger } from '@radix-ui/react-select';
import { twMerge } from 'tailwind-merge';
import { applayComponentDefaultProps } from '../../../utils/applay-component-default-props';
import { useSelectContext } from '../select-context';
import { selectTriggerStyles } from './select-trigger.styles';

const defaultProps: Partial<SelectTriggerProps> = {
  variant: 'default',
};

export const SelectTrigger = forwardRef<HTMLButtonElement, SelectTriggerProps>((props, ref) => {
  const { variant, className, children, ...others } = applayComponentDefaultProps(defaultProps, props);

  const { invalid, radius, size } = useSelectContext();

  return (
    <Trigger
      ref={ref}
      aria-invalid={invalid ? true : undefined}
      data-invalid={invalid ? '' : undefined}
      className={twMerge(selectTriggerStyles({ radius, size, variant }), className)}
      {...others}
    >
      {children}
    </Trigger>
  );
});

SelectTrigger.displayName = 'SelectTrigger';
