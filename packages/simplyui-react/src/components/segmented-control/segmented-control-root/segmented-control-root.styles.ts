import { cva } from 'class-variance-authority';

export const segmentedControlRootStyles = cva(
  [
    'relative',
    'h-full',
    'grid',
    'grid-flow-col',
    'auto-cols-fr',
    'items-stretch',
    'min-w-max',
    'bg-default-3',

    'motion-safe:transition',
    'motion-safe:duration-100',

    'data-[disabled]:opacity-60',
  ],
  {
    variants: {
      radius: {
        none: ['rounded-none'],
        sm: ['rounded-sm'],
        md: ['rounded'],
        lg: ['rounded-md'],
        xl: ['rounded-lg'],
        full: ['rounded-full'],
      },
      size: {
        '1': ['h-6'],
        '2': ['h-8'],
        '3': ['h-10'],
        '4': ['h-12'],
      },
    },
  }
);
