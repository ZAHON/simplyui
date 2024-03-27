'use client';
import type { SliderTooltipProps, SliderTooltipStyle } from './slider-tooltip.types';
import { forwardRef } from 'react';
import { useFloating, offset, shift, limitShift, flip, autoUpdate } from '@floating-ui/react-dom';
import { twMerge } from 'tailwind-merge';
import { Primitive } from '../../primitive';
import { applayComponentDefaultProps } from '../../../utils/applay-component-default-props';
import { isNotNull } from '../../../utils/is-not-null';
import { useSliderContext } from '../slider-context';
import { SliderTooltipContextProvider } from '../slider-tooltip-context';
import { sliderTooltipStyles } from './slider-tooltip.styles';

const defaultProps: Partial<SliderTooltipProps> = {
  arrowPadding: 0,
  avoidCollisions: true,
  collisionBoundary: [],
  collisionPadding: 10,
  delayDuration: 150,
  side: 'top',
  sideOffset: 4,
  sticky: 'partial',
  type: 'auto',
};

export const SliderTooltip = forwardRef<HTMLDivElement, SliderTooltipProps>((props, ref) => {
  const {
    arrowPadding,
    avoidCollisions,
    collisionBoundary,
    collisionPadding,
    delayDuration,
    side,
    sideOffset,
    sticky,
    type,
    style,
    className,
    children,
    ...others
  } = applayComponentDefaultProps(defaultProps, props);

  const { disabled, thumbRef } = useSliderContext();

  const tooltipCollisionPadding =
    typeof collisionPadding === 'number' ? collisionPadding : { top: 0, bottom: 0, ...collisionPadding };

  const boundary = collisionBoundary
    ? Array.isArray(collisionBoundary)
      ? collisionBoundary
      : [collisionBoundary]
    : [];

  const detectOverflowOptions = {
    padding: tooltipCollisionPadding,
    boundary: boundary.filter(isNotNull),
  };

  const { refs, floatingStyles, placement, isPositioned, middlewareData } = useFloating({
    strategy: 'absolute',
    placement: side ?? 'top',
    whileElementsMounted: (...args) => {
      const cleanup = autoUpdate(...args, {
        animationFrame: false,
      });
      return cleanup;
    },
    elements: {
      reference: thumbRef,
    },
    middleware: [
      offset({ mainAxis: sideOffset ?? 4, alignmentAxis: 0 }),
      avoidCollisions &&
        shift({
          mainAxis: true,
          crossAxis: false,
          limiter: sticky === 'partial' ? limitShift() : undefined,
          ...detectOverflowOptions,
        }),
      avoidCollisions && flip({ ...detectOverflowOptions }),
    ],
  });

  const tooltipSide = placement === 'top' ? 'top' : placement === 'bottom' ? 'bottom' : undefined;
  const tooltipShiftX = middlewareData.shift?.x;

  const tooltipStyle: SliderTooltipStyle = {
    '--slider-tooltip-arrow-padding': `${arrowPadding}px`,
    '--slider-tooltip-delay-duration': `${delayDuration}ms`,
    ...style,
  };

  return (
    <SliderTooltipContextProvider value={{ side: tooltipSide, shiftX: tooltipShiftX }}>
      <div
        ref={refs.setFloating}
        style={{
          ...floatingStyles,
          transform: isPositioned ? floatingStyles.transform : 'translate(0, -200%)',
          minWidth: 'max-content',
          zIndex: 40,
        }}
      >
        <Primitive.div
          ref={ref}
          data-disabled={disabled ? '' : undefined}
          data-side={placement}
          style={tooltipStyle}
          className={twMerge(sliderTooltipStyles({ side: tooltipSide, type }), className)}
          {...others}
        >
          {children}
        </Primitive.div>
      </div>
    </SliderTooltipContextProvider>
  );
});

SliderTooltip.displayName = 'Slider.Tooltip';
