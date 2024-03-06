import { cva } from 'class-variance-authority';

export const sliderThumbStyles = cva(
  [
    'relative',
    'block',
    'drop-shadow',

    'after:content-[""]',
    'after:absolute',
    'after:-inset-0.5',
    'after:bg-white',

    'focus-visible:outline-none',
    'focus-visible:after:ring-2',
    'focus-visible:after:ring-offset-2',
    'focus-visible:after:ring-offset-primary-3',
    'focus-visible:after:ring-focus',
  ],
  {
    variants: {
      radius: {
        none: ['rounded-none', 'after:rounded-none'],
        sm: ['rounded-sm', 'after:rounded-sm'],
        md: ['rounded', 'after:rounded'],
        lg: ['rounded-md', 'after:rounded-md'],
        xl: ['rounded-lg', 'after:rounded-lg'],
        full: ['rounded-full', 'after:rounded-full'],
      },
      size: {
        '1': ['size-2'],
        '2': ['size-4'],
        '3': ['size-5'],
        '4': ['size-6'],
      },
    },
  }
);
