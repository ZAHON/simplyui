import { cva } from 'class-variance-authority';

export const closeButtonIconStyles = cva(
  ['pointer-events-none', 'motion-safe:transition', 'motion-safe:duration-100'],
  {
    variants: {
      size: {
        sm: ['size-[0.9375rem]'],
        md: ['size-[1.125rem]'],
        lg: ['size-[1.375rem]'],
        xl: ['size-[1.625rem]'],
      },
    },
  }
);
