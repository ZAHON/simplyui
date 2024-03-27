import { cva } from 'class-variance-authority';

export const sliderTooltipContentStyles = cva(['py-1', 'px-2', 'max-w-80', 'bg-default-12', 'text-default-1'], {
  variants: {
    radius: {
      none: ['rounded-none'],
      sm: ['rounded-sm'],
      md: ['rounded'],
      lg: ['rounded-md'],
      xl: ['rounded-lg'],
      full: ['rounded-xl'],
    },
  },
});
