import { cva } from 'class-variance-authority';

export const sliderTrackStyles = cva(['relative', 'overflow-hidden', 'grow', 'bg-default-3'], {
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
      sm: ['data-[orientation=horizontal]:h-1', 'data-[orientation=vertical]:w-1'],
      md: ['data-[orientation=horizontal]:h-1.5', 'data-[orientation=vertical]:w-1.5'],
      lg: ['data-[orientation=horizontal]:h-2', 'data-[orientation=vertical]:w-2'],
      xl: ['data-[orientation=horizontal]:h-2.5', 'data-[orientation=vertical]:w-2.5'],
    },
  },
});
