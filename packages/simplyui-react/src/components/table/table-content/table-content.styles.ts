import { cva } from 'class-variance-authority';

export const tableContentStyles = cva(['h-0', 'w-full', 'text-default-12', 'border-collapse', 'border-spacing-0'], {
  variants: {
    layout: {
      auto: ['table-auto'],
      fixed: ['table-fixed'],
    },
    size: {
      '1': ['text-xs', '[--table-cell-min-height:2.25rem]', '[--table-cell-padding:0.5rem]'],
      '2': ['text-sm', '[--table-cell-min-height:2.75rem]', '[--table-cell-padding:0.75rem]'],
      '3': ['text-base', '[--table-cell-min-height:3rem]', '[--table-cell-padding:0.75rem_1rem]'],
      '4': ['text-lg', '[--table-cell-min-height:3.25rem]', '[--table-cell-padding:1rem_1.25rem]'],
    },
  },
});
