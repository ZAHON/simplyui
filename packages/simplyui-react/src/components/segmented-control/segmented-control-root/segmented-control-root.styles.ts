import { cva } from 'class-variance-authority';

export const segmentedControlRootStyles = cva(
  [
    'relative',
    'w-full',
    'p-0.5',
    'bg-default-3',

    'motion-safe:transition',
    'motion-safe:duration-100',

    'data-[disabled]:cursor-not-allowed',
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
        sm: ['h-6'],
        md: ['h-8'],
        lg: ['h-10'],
        xl: ['h-12'],
      },
    },
  }
);
