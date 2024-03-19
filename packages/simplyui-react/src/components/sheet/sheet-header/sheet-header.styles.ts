import { cva } from 'class-variance-authority';

export const sheetHeaderStyles = cva(['flex', 'flex-col'], {
  variants: {
    size: {
      '1': ['px-3', 'gap-y-1'],
      '2': ['px-4', 'gap-y-2'],
      '3': ['px-6', 'gap-y-3'],
      '4': ['px-8', 'gap-y-3'],
    },
  },
});
