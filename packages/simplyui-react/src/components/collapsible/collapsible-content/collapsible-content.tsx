'use client';
import type { CollapsibleContentProps } from './collapsible-content.types';
import { forwardRef } from 'react';
import { Content } from '@radix-ui/react-collapsible';
import { twMerge } from 'tailwind-merge';
import { collapsibleContentStyles } from './collapsible-content.styles';

export const CollapsibleContent = forwardRef<HTMLDivElement, CollapsibleContentProps>((props, ref) => {
  const { className, children, ...others } = props;

  return (
    <Content ref={ref} className={twMerge(collapsibleContentStyles(), className)} {...others}>
      {children}
    </Content>
  );
});

CollapsibleContent.displayName = 'CollapsibleContent';
