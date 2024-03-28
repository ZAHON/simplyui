import { cva } from 'class-variance-authority';

export const tableRootStyles = cva([''], {
  variants: {
    radius: {
      none: ['rounded-none'],
      sm: ['rounded-sm'],
      md: ['rounded'],
      lg: ['rounded-md'],
      xl: ['rounded-lg'],
      full: ['rounded-2xl'],
    },
    variant: {
      default: [
        'relative',
        'bg-clip-padding',
        'border',
        'border-default-6',
        'overflow-hidden',

        '[&_table_thead]:bg-default-3',
        '[&_table_tbody]:bg-panel',

        '[&_table_thead_tr]:border-b',
        '[&_table_thead_tr]:border-b-default-6',

        '[&_table_tbody_tr:not(:last-child)]:border-b',
        '[&_table_tbody_tr:not(:last-child)]:border-b-default-6',
      ],
      transparent: ['bg-transparent', '[&_table_tr]:border-b', '[&_table_tr]:border-b-default-6'],
    },
    highlightOnHover: {
      true: [''],
    },
    striped: {
      true: [''],
    },
  },
  compoundVariants: [
    // variant default
    {
      variant: 'default',
      striped: true,
      className: ['even:[&_table_tbody_tr]:bg-default-3'],
    },
    {
      variant: 'default',
      highlightOnHover: true,
      className: ['hover:[&_table_tbody_tr]:bg-default-4'],
    },

    // variant transparent
    {
      variant: 'transparent',
      striped: true,
      className: ['odd:[&_table_tbody_tr]:bg-default-2'],
    },
    {
      variant: 'transparent',
      highlightOnHover: true,
      className: ['hover:[&_table_tbody_tr]:bg-default-3'],
    },
  ],
});
