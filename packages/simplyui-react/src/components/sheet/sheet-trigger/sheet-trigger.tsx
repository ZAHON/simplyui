'use client';
import type { SheetTriggerProps } from './sheet-trigger.types';
import { forwardRef } from 'react';
import { Trigger } from '@radix-ui/react-dialog';

export const SheetTrigger = forwardRef<HTMLButtonElement, SheetTriggerProps>((props, ref) => {
  const { children, ...others } = props;

  return (
    <Trigger ref={ref} {...others}>
      {children}
    </Trigger>
  );
});

SheetTrigger.displayName = 'Sheet.Trigger';
