import { cva } from 'class-variance-authority';

export const alertIconStyles = cva(['flex', 'items-center'], {
  variants: {
    size: {
      '1': ['h-5'],
      '2': ['h-6'],
      '3': ['h-7'],
      '4': ['h-7'],
    },
  },
});
