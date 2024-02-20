import { cva } from 'class-variance-authority';

export const labelRootStyles = cva(
  ['group', 'text-default-12', 'motion-safe:transition', 'motion-safe:duration-100', 'data-[disabled]:text-default-11'],
  {
    variants: {
      size: {
        sm: ['text-xs'],
        md: ['text-sm'],
        lg: ['text-base'],
        xl: ['text-lg'],
      },
    },
  }
);
