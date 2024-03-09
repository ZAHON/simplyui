import { cva } from 'class-variance-authority';

export const iconButtonContentStyles = cva([
  'flex',
  'justify-center',
  'items-center',
  'pointer-events-none',

  'data-[loading]:opacity-0',
]);
