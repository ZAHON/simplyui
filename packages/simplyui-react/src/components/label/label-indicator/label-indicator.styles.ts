import { cva } from 'class-variance-authority';

export const labelIndicatorStyles = cva([
  'text-danger-11',

  'motion-safe:transition',
  'motion-safe:duration-100',

  'group-data-[disabled]:opacity-60',
]);
