'use client';
import type { SliderTooltipTextProps } from './slider-tooltip-text.types';
import { forwardRef } from 'react';
import { twMerge } from 'tailwind-merge';
import { Primitive } from '../../primitive';
import { applayComponentDefaultProps } from '../../../utils/applay-component-default-props';
import { useSliderContext } from '../slider-context';
import { sliderTooltipTextStyles } from './slider-tooltip-text.styles';

const defaultProps: Partial<SliderTooltipTextProps> = {
  size: '1',
  tracking: 'normal',
  weight: 'regular',
};

export const SliderTooltipText = forwardRef<HTMLDivElement, SliderTooltipTextProps>((props, ref) => {
  const { size, tracking, weight, className, children, ...others } = applayComponentDefaultProps(defaultProps, props);

  const { value, disabled } = useSliderContext();

  const content = typeof children === 'function' ? children(value) : children ? children : value;

  return (
    <Primitive.div
      ref={ref}
      data-disabled={disabled ? '' : undefined}
      className={twMerge(sliderTooltipTextStyles({ size, tracking, weight }), className)}
      {...others}
    >
      {content}
    </Primitive.div>
  );
});

SliderTooltipText.displayName = 'Slider.TooltipText';
