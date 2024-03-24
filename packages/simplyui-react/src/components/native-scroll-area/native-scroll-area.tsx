import type { NativeScrollAreaProps } from './native-scroll-area.types';
import { forwardRef } from 'react';
import { twMerge } from 'tailwind-merge';
import { Primitive } from '../primitive';
import { applayComponentDefaultProps } from '../../utils/applay-component-default-props';
import { nativeScrollAreaStyles } from './native-scroll-area.styles';

const defaultProps: Partial<NativeScrollAreaProps> = {
  scrollbarBackground: true,
  scrollbarPadding: true,
  scrollbarRadius: 'none',
  scrollbars: 'both',
  size: '2',
  thumbRadius: 'full',
};

/** This component is based on the `div` element. */
export const NativeScrollArea = forwardRef<HTMLDivElement, NativeScrollAreaProps>((props, ref) => {
  const {
    scrollbarBackground,
    scrollbarPadding,
    scrollbarRadius,
    scrollbars,
    size,
    thumbRadius,
    className,
    children,
    ...others
  } = applayComponentDefaultProps(defaultProps, props);

  return (
    <Primitive.div
      ref={ref}
      className={twMerge(
        nativeScrollAreaStyles({
          scrollbarBackground,
          scrollbarPadding,
          scrollbarRadius,
          scrollbars,
          size,
          thumbRadius,
        }),
        className
      )}
      {...others}
    >
      {children}
    </Primitive.div>
  );
});

NativeScrollArea.displayName = 'NativeScrollArea';
