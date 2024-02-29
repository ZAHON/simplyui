import { cva } from 'class-variance-authority';

export const sliderTrackStyles = cva(['relative', 'grow', 'bg-default-3'], {
  variants: {
    radius: {
      none: ['rounded-none'],
      sm: ['rounded-sm'],
      md: ['rounded'],
      lg: ['rounded-md'],
      xl: ['rounded-lg'],
      full: ['rounded-full'],
    },
    size: {
      sm: ['h-1'],
      md: ['h-1.5'],
      lg: ['h-2'],
      xl: ['h-2.5'],
    },
  },
});
