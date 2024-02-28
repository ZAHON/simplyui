import { cva } from 'class-variance-authority';

export const nativeSelectIconStyles = cva([''], {
  variants: {
    size: {
      sm: ['size-3.5'],
      md: ['size-4'],
      lg: ['size-[1.125rem]'],
      xl: ['size-5'],
    },
  },
});
