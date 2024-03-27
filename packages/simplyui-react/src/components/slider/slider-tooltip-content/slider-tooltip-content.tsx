'use client';
import type { SliderTooltipContentProps } from './slider-tooltip-content.types';
import { forwardRef } from 'react';
import { twMerge } from 'tailwind-merge';
import { Primitive } from '../../primitive';
import { applayComponentDefaultProps } from '../../../utils/applay-component-default-props';
import { useSliderContext } from '../slider-context';
import { sliderTooltipContentStyles } from './slider-tooltip-content.styles';

const defaultProps: Partial<SliderTooltipContentProps> = {
  radius: 'md',
};

export const SliderTooltipContent = forwardRef<HTMLDivElement, SliderTooltipContentProps>((props, ref) => {
  const { radius, className, children, ...others } = applayComponentDefaultProps(defaultProps, props);

  const { disabled } = useSliderContext();

  return (
    <Primitive.div
      ref={ref}
      data-disabled={disabled ? '' : undefined}
      className={twMerge(sliderTooltipContentStyles({ radius }), className)}
      {...others}
    >
      {children}
    </Primitive.div>
  );
});

SliderTooltipContent.displayName = 'Slider.TooltipContent';
