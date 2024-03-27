import { cva } from 'class-variance-authority';

export const segmentedControlItemLabelStyles = cva(
  ['flex', 'justify-center', 'items-center', 'motion-safe:transition-opacity', 'motion-safe:duration-150'],
  {
    variants: {
      size: {
        '1': ['gap-x-1'],
        '2': ['gap-x-2'],
        '3': ['gap-x-3'],
        '4': ['gap-x-3'],
      },
      type: {
        checked: [
          'absolute',
          'font-medium',
          'tracking-[-0.01em]',
          '[word-spacing:0em]',
          'opacity-0',
          'group-data-[state=checked]:opacity-100',
          'motion-safe:group-data-[state=checked]:ease-out',
        ],
        unchecked: [
          'absolute',
          'tracking-normal',
          '[word-spacing:0em]',
          'opacity-100',
          'group-data-[state=checked]:opacity-0',
          'motion-safe:group-data-[state=checked]:ease-in',
        ],
      },
    },
  }
);
