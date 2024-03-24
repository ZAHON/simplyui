'use client';
import type { SwitchThumbProps } from './switch-thumb.types';
import { forwardRef } from 'react';
import { Thumb } from '@radix-ui/react-switch';
import { twMerge } from 'tailwind-merge';
import { useSwitchContext } from '../switch-context';
import { switchThumbStyles } from './switch-thumb.styles';

export const SwitchThumb = forwardRef<HTMLSpanElement, SwitchThumbProps>((props, ref) => {
  const { className, children, ...others } = props;

  const { invalid, radius, size } = useSwitchContext();

  return (
    <Thumb
      ref={ref}
      data-invalid={invalid ? '' : undefined}
      className={twMerge(switchThumbStyles({ radius, size }), className)}
      {...others}
    >
      {children}
    </Thumb>
  );
});

SwitchThumb.displayName = 'Switch.Thumb';
