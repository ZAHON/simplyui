import { cva } from 'class-variance-authority';

export const scrollAreaCornerStyles = cva(
  [
    'motion-safe:peer-data-[state=visible]:animate-in',
    'motion-safe:peer-data-[state=visible]:fade-in-0',
    'motion-safe:peer-data-[state=visible]:duration-100',

    'motion-safe:peer-data-[state=hidden]:animate-out',
    'motion-safe:peer-data-[state=hidden]:fade-out-0',
    'motion-safe:peer-data-[state=hidden]:duration-100',
  ],
  {
    variants: {
      withBackground: {
        true: ['bg-default-3'],
      },
    },
  }
);
