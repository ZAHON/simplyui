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
      none: ['rounded-none'],
      sm: ['rounded-sm'],
      md: ['rounded'],
      lg: ['rounded-md'],
      xl: ['rounded-lg'],
      full: ['rounded-full'],
    },
  },
});
