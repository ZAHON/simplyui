import type { LoaderProps } from './loader.types';
import { forwardRef } from 'react';
import { applayComponentDefaultProps } from '@/utils/applay-component-default-props';
import { LoaderOval } from './loader-oval';
import { LoaderDots } from './loader-dots';

const defaultProps: Partial<LoaderProps> = {
  color: 'primary',
  label: 'Loading, please wait...',
  size: '2',
  speedReduce: 1500,
  speedSafe: 1000,
  variant: 'oval',
};

/** The loader element that indicate loading state. This component is based on the `div` element. */
export const Loader = forwardRef<HTMLDivElement, LoaderProps>((props, ref) => {
  const { variant, ...others } = applayComponentDefaultProps(defaultProps, props);

  switch (variant) {
    case 'oval': {
      return <LoaderOval ref={ref} {...others} />;
    }
    case 'dots': {
      return <LoaderDots ref={ref} {...others} />;
    }
    default: {
      throw Error(`Unknown variant: ${variant}`);
    }
  }
});
