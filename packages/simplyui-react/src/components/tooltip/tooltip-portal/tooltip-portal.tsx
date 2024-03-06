'use client';
import type { TooltipPortalProps } from './tooltip-portal.types';
import { Portal } from '@radix-ui/react-tooltip';

export function TooltipPortal(props: TooltipPortalProps) {
  const { children, ...others } = props;

  return <Portal {...others}>{children}</Portal>;
}
