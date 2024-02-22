import type { LoaderProps } from './loader.types';
import { applayComponentDefaultProps } from '../../utils';
import { LoaderOval } from './loader-oval';
import { LoaderDots } from './loader-dots';

const defaultProps: Partial<LoaderProps> = {
  color: 'primary',
  label: 'Loading, please wait...',
  size: 'md',
  speedReduce: 1500,
  speedSafe: 1000,
  variant: 'oval',
};

export function Loader(props: LoaderProps) {
  const { variant, ...others } = applayComponentDefaultProps(defaultProps, props);

  switch (variant) {
    case 'oval': {
      return <LoaderOval {...others} />;
    }
    case 'dots': {
      return <LoaderDots {...others} />;
    }
    default: {
      throw Error(`Unknown variant: ${variant}`);
    }
  }
}
