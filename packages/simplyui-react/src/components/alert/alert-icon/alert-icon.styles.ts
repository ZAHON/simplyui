import { cva } from 'class-variance-authority';

export const alertIconStyles = cva(['flex', 'items-center'], {
  variants: {
    size: {
      sm: ['h-4'],
      md: ['h-5'],
      lg: ['h-6'],
      xl: ['h-7'],
    },
  },
});
