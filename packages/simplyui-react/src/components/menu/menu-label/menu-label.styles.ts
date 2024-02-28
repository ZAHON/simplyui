import { cva } from 'class-variance-authority';

export const menuLabelStyles = cva(['cursor-default', 'text-default-11'], {
  variants: {
    size: {
      sm: ['px-2', 'my-0.5', 'text-[0.625rem]'],
      md: ['px-3', 'my-1', 'text-xs'],
    },
  },
});
