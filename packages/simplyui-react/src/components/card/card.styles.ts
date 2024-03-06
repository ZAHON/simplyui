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
    shadow: {
      none: ['drop-shadow-none'],
      sm: ['drop-shadow-sm'],
      md: ['drop-shadow'],
      lg: ['drop-shadow-md'],
      xl: ['drop-shadow-lg'],
    },
    size: {
      '1': ['p-3', 'text-xs'],
      '2': ['p-4', 'text-sm'],
      '3': ['p-6', 'text-base'],
      '4': ['p-8', 'text-lg'],
    },
  },
});
