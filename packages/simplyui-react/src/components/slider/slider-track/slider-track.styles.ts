import { cva } from 'class-variance-authority';

export const sliderTrackStyles = cva(
  [
    'relative',
    'grow',
    'bg-default-3',

    'motion-safe:transition',
    'motion-safe:duration-100',

    '[&:not([data-disabled])]:hover:bg-default-4',
    '[&:not([data-disabled])]:active:bg-default-5',
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
        '1': ['data-[orientation=horizontal]:h-1', 'data-[orientation=vertical]:w-1'],
        '2': ['data-[orientation=horizontal]:h-1.5', 'data-[orientation=vertical]:w-1.5'],
        '3': ['data-[orientation=horizontal]:h-2', 'data-[orientation=vertical]:w-2'],
        '4': ['data-[orientation=horizontal]:h-2.5', 'data-[orientation=vertical]:w-2.5'],
      },
      variant: {
        default: ['ring-inset', 'ring-1', 'ring-default-7'],
        filled: [],
      },
    },
  }
);
