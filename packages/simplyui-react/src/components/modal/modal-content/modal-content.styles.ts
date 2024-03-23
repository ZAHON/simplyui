import { cva } from 'class-variance-authority';

export const modalContentStyles = cva(
  [
    'z-50',
    'fixed',
    'flex',
    'flex-col',
    'bg-panel',
    'border',
    'border-default-6',

    'motion-safe:data-[state=open]:animate-in',
    'motion-safe:data-[state=open]:fade-in-0',
    'motion-safe:data-[state=open]:duration-200',

    'motion-safe:data-[state=closed]:animate-out',
    'motion-safe:data-[state=closed]:fade-out-0',
    'motion-safe:data-[state=closed]:duration-200',
  ],
  {
    variants: {
      radius: {
        none: ['rounded-none'],
        sm: ['rounded-sm'],
        md: ['rounded'],
        lg: ['rounded-md'],
        xl: ['rounded-lg'],
        full: ['rounded-2xl'],
      },
      shadow: {
        none: ['drop-shadow-none'],
        sm: ['drop-shadow-sm'],
        md: ['drop-shadow'],
        lg: ['drop-shadow-md'],
        xl: ['drop-shadow-lg'],
      },
      size: {
        '1': ['py-3', 'gap-y-3', 'max-w-sm'],
        '2': ['py-4', 'gap-y-4', 'max-w-md'],
        '3': ['py-6', 'gap-y-4', 'max-w-lg'],
        '4': ['py-8', 'gap-y-6', 'max-w-xl'],
      },
      fullScreen: {
        true: ['inset-0', 'max-w-none', 'rounded-none', 'border-none', 'drop-shadow-none'],
        false: [
          'max-h-[90vh]',
          'w-[90vw]',
          'top-1/2',
          'left-1/2',
          '-translate-y-1/2',
          '-translate-x-1/2',

          'motion-safe:data-[state=open]:zoom-in-95',
          'motion-safe:data-[state=open]:slide-in-from-top-[48%]',
          'motion-safe:data-[state=open]:slide-in-from-left-1/2',

          'motion-safe:data-[state=closed]:zoom-out-95',
          'motion-safe:data-[state=closed]:slide-out-to-top-[48%]',
          'motion-safe:data-[state=closed]:slide-out-to-left-1/2',
        ],
      },
    },
  }
);
