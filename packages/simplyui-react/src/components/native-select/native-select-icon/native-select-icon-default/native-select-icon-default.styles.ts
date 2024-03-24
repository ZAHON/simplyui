import { cva } from 'class-variance-authority';

export const nativeSelectIconDefaultStyles = cva([''], {
  variants: {
    size: {
      '1': ['size-3.5'],
      '2': ['size-4'],
      '3': ['size-[1.125rem]'],
      '4': ['size-5'],
    },
  },
});
