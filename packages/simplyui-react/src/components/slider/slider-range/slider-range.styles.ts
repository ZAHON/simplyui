import { cva } from 'class-variance-authority';

export const sliderRangeStyles = cva(
  ['absolute', 'data-[orientation=horizontal]:h-full', 'data-[orientation=vertical]:w-full'],
  {
    variants: {
      color: {
        default: ['bg-default-9'],
        primary: ['bg-primary-9'],
        success: ['bg-success-9'],
        warning: ['bg-warning-9'],
        danger: ['bg-danger-9'],
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
