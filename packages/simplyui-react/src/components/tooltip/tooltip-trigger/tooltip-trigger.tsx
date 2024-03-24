'use client';
import type { TooltipTriggerProps } from './tooltip-trigger.types';
import { forwardRef } from 'react';
import { Trigger } from '@radix-ui/react-tooltip';

export const TooltipTrigger = forwardRef<HTMLButtonElement, TooltipTriggerProps>((props, ref) => {
  const { children, ...others } = props;

  return (
    <Trigger ref={ref} {...others}>
      {children}
    </Trigger>
  );
});

TooltipTrigger.displayName = 'Tooltip.Trigger';
