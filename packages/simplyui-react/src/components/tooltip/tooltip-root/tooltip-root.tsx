'use client';
import type { TooltipRootProps } from './tooltip-root.types';
import { Root } from '@radix-ui/react-tooltip';

export function TooltipRoot(props: TooltipRootProps) {
  const { children, ...others } = props;

  return <Root {...others}>{children}</Root>;
}
