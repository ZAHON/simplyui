import { cva } from 'class-variance-authority';

export const cardStyles = cva(['bg-panel', 'border', 'border-default-6'], {
  variants: {
    radius: {
      none: ['rounded-none'],
      sm: ['rounded-sm'],
      md: ['rounded'],
      lg: ['rounded-md'],
      xl: ['rounded-lg'],
      full: ['rounded-2xl'],
    },
    size: {
      sm: ['p-3', 'text-xs'],
      md: ['p-4', 'text-sm'],
      lg: ['p-6', 'text-base'],
      xl: ['p-8', 'text-lg'],
    },
  },
});
