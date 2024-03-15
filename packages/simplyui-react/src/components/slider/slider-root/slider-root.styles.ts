import { cva } from 'class-variance-authority';

export const sliderRootStyles = cva(
  [
    'relative',
    'w-full',
    'flex',
    'items-center',
    'select-none',
    'touch-none',

    'motion-safe:transition',
    'motion-safe:duration-100',

    'data-[disabled]:opacity-60',
    'data-[disabled]:cursor-not-allowed',
  ],
  {
    variants: {
      size: {
        '1': ['h-3'],
        '2': ['h-5'],
        '3': ['h-6'],
        '4': ['h-7'],
      },
    },
  }
);
