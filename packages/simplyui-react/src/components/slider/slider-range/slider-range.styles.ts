import { cva } from 'class-variance-authority';

export const sliderRangeStyles = cva(['absolute', 'h-full'], {
  variants: {
    color: {
      default: ['bg-default-9'],
      primary: ['bg-primary-9'],
      success: ['bg-success-9'],
      warning: ['bg-warning-9'],
      danger: ['bg-danger-9'],
    },
    radius: {
      none: ['rounded-l-none'],
      sm: ['rounded-l-sm'],
      md: ['rounded-l'],
      lg: ['rounded-l-md'],
      xl: ['rounded-l-lg'],
      full: ['rounded-l-full'],
    },
  },
});
