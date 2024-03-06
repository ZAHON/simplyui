import { cva } from 'class-variance-authority';

export const sliderRangeStyles = cva(
  [
    'absolute',

    'motion-safe:transition',
    'motion-safe:duration-100',

    'data-[orientation=horizontal]:h-full',
    'data-[orientation=vertical]:w-full',

    '[&:not([data-disabled])]:active:brightness-110',
  ],
  {
    variants: {
      color: {
        default: ['bg-default-9', '[&:not([data-disabled])]:hover:bg-default-10'],
        primary: ['bg-primary-9', '[&:not([data-disabled])]:hover:bg-primary-10'],
        success: ['bg-success-9', '[&:not([data-disabled])]:hover:bg-success-10'],
        warning: ['bg-warning-9', '[&:not([data-disabled])]:hover:bg-warning-10'],
        danger: ['bg-danger-9', '[&:not([data-disabled])]:hover:bg-danger-10'],
      },
      inverted: {
        true: ['data-[orientation=horizontal]:rounded-l-none', 'data-[orientation=vertical]:rounded-b-none'],
        false: ['data-[orientation=horizontal]:rounded-r-none', 'data-[orientation=vertical]:rounded-t-none'],
      },
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
