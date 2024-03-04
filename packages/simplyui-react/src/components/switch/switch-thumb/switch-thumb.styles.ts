import { cva } from 'class-variance-authority';

export const switchThumbStyles = cva(
  [
    'flex',
    'justify-center',
    'items-center',
    'pointer-events-none',
    'bg-white',
    'text-black',
    'drop-shadow',

    'motion-safe:transition',
    'motion-safe:duration-100',
  ],
  {
    variants: {
      radius: {
        none: ['rounded-none'],
        sm: ['rounded-[calc(0.125rem-1px)]'],
        md: ['rounded-[calc(0.25rem-1px)]'],
        lg: ['rounded-[calc(0.375rem-1px)]'],
        xl: ['rounded-[calc(0.5rem-1px)]'],
        full: ['rounded-[calc(9999px-1px)]'],
      },
      size: {
        '1': ['size-3.5', 'data-[state=checked]:translate-x-3'],
        '2': ['size-[1.125rem]', 'data-[state=checked]:translate-x-4'],
        '3': ['size-[1.375rem]', 'data-[state=checked]:translate-x-5'],
        '4': ['size-[1.625rem]', 'data-[state=checked]:translate-x-6'],
      },
    },
  }
);
