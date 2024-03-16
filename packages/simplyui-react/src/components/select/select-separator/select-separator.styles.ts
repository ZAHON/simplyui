import { cva } from 'class-variance-authority';

export const selectSeparatorStyles = cva(['h-px', 'bg-default-6'], {
  variants: {
    size: {
      '1': ['mx-1.5', 'my-1'],
      '2': ['mx-2', 'my-2'],
      '3': ['mx-2.5', 'my-3'],
      '4': ['mx-3', 'my-4'],
    },
  },
});
