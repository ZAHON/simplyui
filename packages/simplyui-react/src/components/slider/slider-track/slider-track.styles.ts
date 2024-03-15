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
      '1': ['h-0.5'],
      '2': ['h-1'],
      '3': ['h-1.5'],
      '4': ['h-2'],
    },
  },
});
