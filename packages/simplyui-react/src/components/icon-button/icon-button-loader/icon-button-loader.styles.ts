import { cva } from 'class-variance-authority';

export const iconButtonLoaderStyles = cva([
  'h-full',
  'flex',
  'justify-center',
  'items-center',
  'absolute',
  'top-1/2',
  'left-1/2',
  '-translate-x-1/2',
  '-translate-y-1/2',
]);
