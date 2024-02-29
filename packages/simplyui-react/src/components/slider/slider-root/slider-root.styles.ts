import { cva } from 'class-variance-authority';

export const sliderRootStyles = cva(
  [
    'relative',
    'flex',
    'items-center',
    'select-none',
    'touch-none',

    'motion-safe:transition',
    'motion-safe:duration-100',

    'data-[orientation=horizontal]:flex-row',
    'data-[orientation=horizontal]:w-full',

    'data-[orientation=vertical]:flex-col',
    'data-[orientation=vertical]:h-full',

    'data-[disabled]:opacity-60',
    'data-[disabled]:cursor-not-allowed',
  ],
  {
    variants: {
      size: {
        sm: ['data-[orientation=horizontal]:h-4', 'data-[orientation=vertical]:w-4'],
        md: ['data-[orientation=horizontal]:h-5', 'data-[orientation=vertical]:w-5'],
        lg: ['data-[orientation=horizontal]:h-6', 'data-[orientation=vertical]:w-6'],
        xl: ['data-[orientation=horizontal]:h-7', 'data-[orientation=vertical]:w-7'],
      },
    },
  }
);
