import { cva } from 'class-variance-authority';

export const sliderRootStyles = cva(
  [
    'relative',
    'flex',
    'items-center',
    'select-none',
    'touch-none',
    'h-fit',

    'motion-safe:transition',
    'motion-safe:duration-100',

    'data-[disabled]:opacity-60',
    'data-[disabled]:cursor-not-allowed',
  ],
  {
    variants: {
      size: {
        sm: ['h-4'],
        md: ['h-5'],
        lg: ['h-6'],
        xl: ['h-7'],
      },
    },
  }
);
