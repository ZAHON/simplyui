import { cva } from 'class-variance-authority';

export const closeButtonIconStyles = cva(
  ['pointer-events-none', 'motion-safe:transition', 'motion-safe:duration-100'],
  {
    variants: {
      size: {
        '1': ['size-[0.9375rem]'],
        '2': ['size-[1.125rem]'],
        '3': ['size-[1.375rem]'],
        '4': ['size-[1.625rem]'],
      },
    },
  }
);
