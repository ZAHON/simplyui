import { cva } from 'class-variance-authority';

export const tableRowStyles = cva(['motion-safe:transition', 'motion-safe:duration-100'], {
  variants: {
    align: {
      start: ['align-top'],
      center: ['align-middle'],
      end: ['align-bottom'],
      baseline: ['align-baseline'],
    },
  },
});
