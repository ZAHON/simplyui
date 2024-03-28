import { cva } from 'class-variance-authority';

export const tableRowHeaderCellStyles = cva(
  ['font-normal', 'min-h-[--table-cell-min-height]', 'p-[--table-cell-padding]'],
  {
    variants: {
      justify: {
        start: ['text-start'],
        center: ['text-center'],
        end: ['text-end'],
      },
    },
  }
);
