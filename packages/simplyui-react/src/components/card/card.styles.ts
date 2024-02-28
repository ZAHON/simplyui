import { cva } from 'class-variance-authority';

export const cardStyles = cva(['border', 'border-default-6'], {
  variants: {
    background: {
      solid: ['bg-panel-solid'],
      translucent: ['bg-panel-translucent'],
    },
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
      sm: ['p-3', 'text-xs'],
      md: ['p-4', 'text-sm'],
      lg: ['p-6', 'text-base'],
      xl: ['p-8', 'text-lg'],
    },
  },
});
