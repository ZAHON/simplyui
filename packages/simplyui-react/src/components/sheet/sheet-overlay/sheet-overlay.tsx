'use client';
import type { SheetOverlayProps } from './sheet-overlay.types';
import { forwardRef } from 'react';
import { Overlay } from '@radix-ui/react-dialog';
import { twMerge } from 'tailwind-merge';
import { applayComponentDefaultProps } from '../../../utils/applay-component-default-props';
import { sheetOverlayStyles } from './sheet-overlay.styles';

const defaultProps: Partial<SheetOverlayProps> = {
  backdrop: 'opaque',
};

export const SheetOverlay = forwardRef<HTMLDivElement, SheetOverlayProps>((props, ref) => {
  const { backdrop, className, ...others } = applayComponentDefaultProps(defaultProps, props);

  return <Overlay ref={ref} className={twMerge(sheetOverlayStyles({ backdrop }), className)} {...others} />;
});

SheetOverlay.displayName = 'SheetOverlay';
