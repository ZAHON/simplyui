import { cva } from 'class-variance-authority';

export const alertBodyStyles = cva(['flex', 'flex-col'], {
  variants: {
    size: {
      '1': ['gap-y-1.5'],
      '2': ['gap-y-2'],
      '3': ['gap-y-2.5'],
      '4': ['gap-y-3'],
    },
  },
});
