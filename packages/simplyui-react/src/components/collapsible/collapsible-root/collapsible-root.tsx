'use client';
import type { CollapsibleRootProps } from './collapsible-root.types';
import { forwardRef } from 'react';
import { Root } from '@radix-ui/react-collapsible';

export const CollapsibleRoot = forwardRef<HTMLDivElement, CollapsibleRootProps>((props, ref) => {
  const { children, ...others } = props;

  return (
    <Root ref={ref} {...others}>
      {children}
    </Root>
  );
});

CollapsibleRoot.displayName = 'CollapsibleRoot';
