import { cva } from 'class-variance-authority';

export const selectViewportStyles = cva([''], {
  variants: {
    size: {
      '1': ['p-0.5'],
      '2': ['p-1'],
      '3': ['p-1.5'],
      '4': ['p-2'],
    },
  },
});
