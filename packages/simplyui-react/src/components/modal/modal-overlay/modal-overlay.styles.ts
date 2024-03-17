import { cva } from 'class-variance-authority';

export const modalOverlayStyles = cva(
  [
    'z-50',
    'fixed',
    'inset-0',

    'motion-safe:data-[state=open]:animate-in',
    'motion-safe:data-[state=open]:fade-in-0',
    'motion-safe:data-[state=open]:duration-100',

    'motion-safe:data-[state=closed]:animate-out',
    'motion-safe:data-[state=closed]:fade-out-0',
    'motion-safe:data-[state=closed]:duration-100',
  ],
  {
    variants: {
      backdrop: {
        transparent: ['bg-transparent'],
        opaque: ['bg-overlay'],
        blur: ['bg-overlay', 'backdrop-blur-sm', 'backdrop-saturate-150'],
      },
    },
  }
);
