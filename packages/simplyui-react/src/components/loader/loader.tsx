import type { LoaderProps } from './loader.types';
import { applayComponentDefaultProps } from '../../utils';
import { LoaderOval } from './loader-oval';
import { LoaderDots } from './loader-dots';

const defaultProps: Partial<LoaderProps> = {
  size: 'md',
  color: 'primary',
  variant: 'oval',
  speedSafe: 1000,
  speedReduce: 1500,
  label: 'Loading, please wait...',
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
