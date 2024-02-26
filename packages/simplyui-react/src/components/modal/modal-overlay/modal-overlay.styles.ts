import { cva } from 'class-variance-authority';

export const modalOverlayStyles = cva(
  [
    'z-50',
    'fixed',
    'inset-0',

    'motion-safe:data-[state=open]:animate-modal-overlay-show',
    'motion-safe:data-[state=closed]:animate-modal-overlay-hide',
  ],
  {
    variants: {
      backdrop: {
        transparent: [''],
        opaque: ['bg-black/30'],
        blur: ['bg-black/30', 'backdrop-blur-sm', 'backdrop-saturate-150'],
      },
    },
  }
);
