import { cva } from 'class-variance-authority';

export const sheetContentStyles = cva(
  [
    'z-50',
    'fixed',
    'flex',
    'flex-col',
    'bg-panel',

    'motion-safe:transition',
    'motion-safe:ease-in-out',

    'motion-safe:data-[state=open]:animate-in',
    'motion-safe:data-[state=open]:duration-500',

    'motion-safe:data-[state=closed]:animate-out',
    'motion-safe:data-[state=closed]:duration-300',
  ],
  {
    variants: {
      size: {
        '1': ['py-3', 'gap-y-3'],
        '2': ['py-4', 'gap-y-4'],
        '3': ['py-6', 'gap-y-4'],
        '4': ['py-8', 'gap-y-6'],
      },
      side: {
        top: [
          'top-0',
          'inset-x-0',
          'h-fit',
          'max-h-full',
          'w-full',
          'border-b',
          'border-b-default-6',

          'motion-safe:data-[state=open]:slide-in-from-top',
          'motion-safe:data-[state=closed]:slide-out-to-top ',
        ],
        left: [
          'left-0',
          'inset-y-0',
          'h-full',
          'w-3/4',
          'border-r',
          'border-r-default-6',

          'motion-safe:data-[state=open]:slide-in-from-left',
          'motion-safe:data-[state=closed]:slide-out-to-left',
        ],
        bottom: [
          'bottom-0',
          'inset-x-0',
          'h-fit',
          'max-h-full',
          'w-full',
          'border-t',
          'border-t-default-6',

          'motion-safe:data-[state=open]:slide-in-from-bottom',
          'motion-safe:data-[state=closed]:slide-out-to-bottom',
        ],
        right: [
          'right-0',
          'inset-y-0',
          'h-full',
          'w-3/4',
          'border-l',
          'border-l-default-6',

          'motion-safe:data-[state=open]:slide-in-from-right',
          'motion-safe:data-[state=closed]:slide-out-to-right',
        ],
      },
    },
    compoundVariants: [
      // side left
      {
        side: 'left',
        size: '1',
        className: ['sm:max-w-xs'],
      },
      {
        side: 'left',
        size: '2',
        className: ['sm:max-w-xs'],
      },
      {
        side: 'left',
        size: '3',
        className: ['sm:max-w-sm'],
      },
      {
        side: 'left',
        size: '4',
        className: ['sm:max-w-sm'],
      },

      // side right
      {
        side: 'right',
        size: '1',
        className: ['sm:max-w-xs'],
      },
      {
        side: 'right',
        size: '2',
        className: ['sm:max-w-xs'],
      },
      {
        side: 'right',
        size: '3',
        className: ['sm:max-w-sm'],
      },
      {
        side: 'right',
        size: '4',
        className: ['sm:max-w-sm'],
      },
    ],
  }
);
