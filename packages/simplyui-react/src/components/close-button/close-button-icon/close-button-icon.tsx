import type { CloseButtonIconProps } from './close-button-icon.types';
import { forwardRef } from 'react';
import { twMerge } from 'tailwind-merge';
import { IconX } from '../../../icons/icon-x';
import { closeButtonIconStyles } from './close-button-icon.styles';

export const CloseButtonIcon = forwardRef<SVGSVGElement, CloseButtonIconProps>((props, ref) => {
  const { size, className, ...others } = props;

  return <IconX ref={ref} className={twMerge(closeButtonIconStyles({ size }), className)} {...others} />;
});

CloseButtonIcon.displayName = 'CloseButtonIcon';
