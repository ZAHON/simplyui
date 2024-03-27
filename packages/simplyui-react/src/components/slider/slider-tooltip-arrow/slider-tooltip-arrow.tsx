'use client';
import type { SliderTooltipArrowProps } from './slider-tooltip-arrow.types';
import type { CSSProperties } from 'react';
import { forwardRef } from 'react';
import { twMerge } from 'tailwind-merge';
import { Primitive } from '../../primitive';
import { applayComponentDefaultProps } from '../../../utils/applay-component-default-props';
import { useSliderContext } from '../slider-context';
import { useSliderTooltipContext } from '../slider-tooltip-context';
import { sliderTooltipArrowStyles } from './slider-tooltip-arrow.styles';

const defaultProps: Partial<SliderTooltipArrowProps> = {
  height: 5,
  width: 10,
};

export const SliderTooltipArrow = forwardRef<SVGSVGElement, SliderTooltipArrowProps>((props, ref) => {
  const { height, width, style, className, children, ...others } = applayComponentDefaultProps(defaultProps, props);

  const { disabled } = useSliderContext();
  const { side, shiftX } = useSliderTooltipContext();

  const translateX = shiftX ? shiftX * -1 : undefined;

  const tooltipArrowStyle: CSSProperties = {
    transform: translateX ? `translateX(${translateX}px)` : undefined,
    ...style,
  };

  if (children) {
    return (
      <Primitive.svg asChild ref={ref} data-disabled={disabled ? '' : undefined} style={tooltipArrowStyle} {...others}>
        {children}
      </Primitive.svg>
    );
  }

  return (
    <svg
      ref={ref}
      data-disabled={disabled ? '' : undefined}
      height={height}
      width={width}
      viewBox="0 0 30 10"
      preserveAspectRatio="none"
      aria-hidden="true"
      focusable="false"
      style={tooltipArrowStyle}
      className={twMerge(sliderTooltipArrowStyles(), className)}
      {...others}
    >
      <polygon points={side === 'top' ? '0,0 30,0 15,10' : '15,0 0,10 30,10'} />
    </svg>
  );
});

SliderTooltipArrow.displayName = 'Slider.TooltipArrow';
