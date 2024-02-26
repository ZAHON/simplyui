import { cva } from 'class-variance-authority';

export const modalCloseStyles = cva([''], {
  variants: {
    position: {
      'top-end': ['absolute', 'top-2', 'right-2'],
    },
  },
});
