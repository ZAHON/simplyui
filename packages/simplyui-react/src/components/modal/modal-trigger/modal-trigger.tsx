'use client';
import type { ModalTriggerProps } from './modal-trigger.types';
import { forwardRef } from 'react';
import { Trigger } from '@radix-ui/react-dialog';

export const ModalTrigger = forwardRef<HTMLButtonElement, ModalTriggerProps>((props, ref) => {
  const { children, ...others } = props;

  return (
    <Trigger ref={ref} {...others}>
      {children}
    </Trigger>
  );
});

ModalTrigger.displayName = 'ModalTrigger';
