'use client';
import type { PopoverContentProps } from './popover-content.types';
import { forwardRef } from 'react';
import { Content } from '@radix-ui/react-popover';
import { twMerge } from 'tailwind-merge';
import { applayComponentDefaultProps } from '@/utils/applay-component-default-props';
import { popoverContentStyles } from './popover-content.styles';

const defaultProps: Partial<PopoverContentProps> = {
  radius: 'md',
  shadow: 'md',
  size: 'md',
  sideOffset: 8,
  width: 'auto',
};

export const PopoverContent = forwardRef<HTMLDivElement, PopoverContentProps>((props, ref) => {
  const { radius, shadow, size, width, className, children, ...others } = applayComponentDefaultProps(
    defaultProps,
    props
  );

  return (
    <Content
      ref={ref}
      className={twMerge(popoverContentStyles({ radius, shadow, size, width }), className)}
      {...others}
    >
      {children}
    </Content>
  );
});

PopoverContent.displayName = 'PopoverContent';
