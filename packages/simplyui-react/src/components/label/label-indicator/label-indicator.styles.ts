import { cva } from 'class-variance-authority';

export const labelIndicatorStyles = cva([
  'text-danger-11',

  'motion-safe:transition-colors',
  'motion-safe:duration-100',

  'data-[disabled]:opacity-60',
]);
