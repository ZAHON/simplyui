'use client';
import type { CollapsibleTriggerProps } from './collapsible-trigger.types';
import { forwardRef } from 'react';
import { Trigger } from '@radix-ui/react-collapsible';

export const CollapsibleTrigger = forwardRef<HTMLButtonElement, CollapsibleTriggerProps>((props, ref) => {
  const { children, ...others } = props;

  return (
    <Trigger ref={ref} {...others}>
      {children}
    </Trigger>
  );
});

CollapsibleTrigger.displayName = 'CollapsibleTrigger';
