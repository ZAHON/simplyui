import { cva } from 'class-variance-authority';

export const scrollAreaThumbStyles = cva(
  [
    'flex-1',
    'relative',
    'bg-default-8',

    'motion-safe:transition-[background-color,brightness]',
    'motion-safe:duration-100',

    'hover:bg-default-9',
    'active:bg-default-10',
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
    },
  }
);
