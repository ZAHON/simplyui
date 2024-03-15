import { cva } from 'class-variance-authority';

export const sliderThumbStyles = cva(
  [
    'relative',
    'block',
    'origin-center',

    'before:content-[""]',
    'before:absolute',
    'before:-inset-0.5',
    'before:rounded-[inherit]',

    'after:content-[""]',
    'after:absolute',
    'after:inset-0',
    'after:bg-white',
    'after:rounded-[inherit]',
    'after:origin-center',
    'after:motion-safe:transition',
    'after:motion-safe:duration-100',

    'motion-safe:transition',
    'motion-safe:duration-100',

    'dark:active:[&:not([data-disabled])]:scale-110',
    'active:[&:not([data-disabled])]:after:scale-[0.80]',

    'focus:outline-none',

    'focus-visible:outline',
    'focus-visible:outline-2',
    'focus-visible:outline-offset-4',
    'focus-visible:outline-focus',
  ],
  {
    variants: {
      color: {
        default: ['before:bg-default-9', 'dark:before:bg-white'],
        primary: ['before:bg-primary-9', 'dark:before:bg-white'],
        success: ['before:bg-success-9', 'dark:before:bg-white'],
        warning: ['before:bg-warning-9', 'dark:before:bg-white'],
        danger: ['before:bg-danger-9', 'dark:before:bg-white'],
      },
      radius: {
        none: ['rounded-none'],
        sm: ['rounded-sm'],
        md: ['rounded'],
        lg: ['rounded-md'],
        xl: ['rounded-lg'],
        full: ['rounded-full'],
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
