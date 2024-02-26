import { cva } from 'class-variance-authority';

export const modalContentStyles = cva(
  [
    'z-50',
    'fixed',
    'top-1/2',
    'left-1/2',
    '-translate-y-1/2',
    '-translate-x-1/2',
    'max-h-[85vh]',
    'w-[90vw]',
    'flex',
    'flex-col',
    'bg-panel',
    'border',
    'border-default-6',

    'focus-visible:outline',
    'focus-visible:outline-2',
    'focus-visible:outline-offset-0',
    'focus-visible:outline-focus',

    'motion-safe:data-[state=open]:animate-modal-content-show',
    'motion-safe:data-[state=closed]:animate-modal-content-hide',
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
        none: ['shadow-none'],
        sm: ['shadow-sm'],
        md: ['shadow'],
        lg: ['shadow-md'],
        xl: ['shadow-lg'],
      },
      size: {
        sm: ['max-w-sm'],
        md: ['max-w-md'],
        lg: ['max-w-lg'],
        xl: ['max-w-xl'],
      },
    },
  }
);
