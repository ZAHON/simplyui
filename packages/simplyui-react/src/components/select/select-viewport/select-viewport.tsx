'use client';
import type { SelectViewportProps } from './select-viewport.types';
import { forwardRef } from 'react';
import { Viewport } from '@radix-ui/react-select';
import { twMerge } from 'tailwind-merge';
import { useSelectContext } from '../select-context';
import { selectViewportStyles } from './select-viewport.styles';

export const SelectViewport = forwardRef<HTMLDivElement, SelectViewportProps>((props, ref) => {
  const { className, children, ...others } = props;

  const { size } = useSelectContext();

  return (
    <Viewport ref={ref} className={twMerge(selectViewportStyles({ size }), className)} {...others}>
      {children}
    </Viewport>
  );
});

SelectViewport.displayName = 'SelectViewport';
