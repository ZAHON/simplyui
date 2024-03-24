import { cva } from 'class-variance-authority';

export const menuLabelStyles = cva(['cursor-default', 'text-default-11'], {
  variants: {
    size: {
      '1': ['px-1.5', 'my-0.5', 'text-[0.625rem]'],
      '2': ['px-2', 'my-1', 'text-xs'],
      '3': ['px-2.5', 'my-1.5', 'text-sm'],
      '4': ['px-3', 'my-2', 'text-base'],
    },
  },
});
