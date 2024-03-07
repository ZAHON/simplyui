import { cva } from 'class-variance-authority';

export const collapsibleContentStyles = cva([
  'overflow-hidden',
  'will-change-[height,opacity]',

  'motion-safe:data-[state=open]:animate-collapsible-down',
  'motion-safe:data-[state=closed]:animate-collapsible-up',
]);
