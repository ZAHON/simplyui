import { cva } from 'class-variance-authority';

export const sliderThumbStyles = cva(
  [
    'flex',
    'justify-center',
    'items-center',
    'text-black',
    'bg-white',
    'drop-shadow',
    'origin-center',

    'motion-safe:transition',
    'motion-safe:duration-100',

    'focus-visible:outline-none',
    'focus-visible:scale-110',
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
        sm: ['size-4'],
        md: ['size-5'],
        lg: ['size-6'],
        xl: ['size-7'],
      },
    },
  }
);
