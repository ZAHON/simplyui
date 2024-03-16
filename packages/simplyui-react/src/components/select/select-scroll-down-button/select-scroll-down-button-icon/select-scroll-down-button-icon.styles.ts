import { cva } from 'class-variance-authority';

export const selectScrollDownButtonIconStyles = cva(['pointer-events-none', 'text-default-11'], {
  variants: {
    size: {
      '1': ['size-3.5'],
      '2': ['size-4'],
      '3': ['size-[1.125rem]'],
      '4': ['size-5'],
    },
  },
});
