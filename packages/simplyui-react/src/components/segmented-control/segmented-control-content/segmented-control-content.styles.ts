import { cva } from 'class-variance-authority';

export const segmentedControlContentStyles = cva([
  'relative',
  'h-full',
  'grid',
  'grid-flow-col',
  'auto-cols-fr',
  'items-stretch',
  'min-w-max',
]);
