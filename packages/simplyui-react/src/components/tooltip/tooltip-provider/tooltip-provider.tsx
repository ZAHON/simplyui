'use client';
import type { TooltipProviderProps } from './tooltip-provider.types';
import { Provider } from '@radix-ui/react-tooltip';

export function TooltipProvider(props: TooltipProviderProps) {
  const { children, ...others } = props;

  return <Provider {...others}>{children}</Provider>;
}
