'use client';
import type { PopoverTriggerProps } from './popover-trigger.types';
import { forwardRef } from 'react';
import { Trigger } from '@radix-ui/react-popover';

export const PopoverTrigger = forwardRef<HTMLButtonElement, PopoverTriggerProps>((props, ref) => {
  const { children, ...others } = props;

  return (
    <Trigger ref={ref} {...others}>
      {children}
    </Trigger>
  );
});

PopoverTrigger.displayName = 'Popover.Trigger';
