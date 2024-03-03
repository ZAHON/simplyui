import { cva } from 'class-variance-authority';

export const alertBodyStyles = cva(['flex', 'flex-col'], {
  variants: {
    size: {
      sm: ['gap-y-1.5'],
      md: ['gap-y-2'],
      lg: ['gap-y-2.5'],
      xl: ['gap-y-3'],
    },
  },
});
