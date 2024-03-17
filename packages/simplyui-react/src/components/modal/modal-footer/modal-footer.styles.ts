import { cva } from 'class-variance-authority';

export const modalFooterStyles = cva(['flex', 'justify-end', 'items-center'], {
  variants: {
    size: {
      '1': ['px-3', 'gap-x-2'],
      '2': ['px-4', 'gap-x-3'],
      '3': ['px-6', 'gap-x-3'],
      '4': ['px-8', 'gap-x-3'],
    },
  },
});
