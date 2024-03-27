import { cva } from 'class-variance-authority';

export const sliderThumbStyles = cva(
  [
    'group',
    'relative',
    'block',
    'origin-center',
    'cursor-default',

    'before:content-[""]',
    'before:absolute',
    'before:-inset-0.5',

    'after:content-[""]',
    'after:absolute',
    'after:inset-0',
    'after:bg-background',
    'after:origin-center',
    'after:motion-safe:transition',
    'after:motion-safe:duration-100',

    'motion-safe:transition',
    'motion-safe:duration-100',

    'data-[disabled]:cursor-not-allowed',

    'active:[&:not([data-disabled])]:after:scale-[0.80]',

    'focus:outline-none',

    'focus:after:scale-[0.80]',
  ],
  {
    variants: {
      color: {
        default: ['before:bg-default-9'],
        primary: ['before:bg-primary-9'],
        success: ['before:bg-success-9'],
        warning: ['before:bg-warning-9'],
        danger: ['before:bg-danger-9'],
      },
      radius: {
        none: ['rounded-none', 'before:rounded-none', 'after:rounded-none'],
        sm: ['rounded-sm', 'before:rounded-sm', 'after:rounded-sm'],
        md: ['rounded', 'before:rounded', 'after:rounded'],
        lg: ['rounded-md', 'before:rounded-md', 'after:rounded-md'],
        xl: ['rounded-lg', 'before:rounded-lg', 'after:rounded-lg'],
        full: ['rounded-full', 'before:rounded-full', 'after:rounded-full'],
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
