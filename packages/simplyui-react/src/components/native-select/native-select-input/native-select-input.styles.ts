import { cva } from 'class-variance-authority';

export const nativeSelectInputStyles = cva(
  [
    'appearance-none',
    'block',
    'w-full',
    'border',
    'text-default-12',

    'motion-safe:transition',
    'motion-safe:duration-100',

    'focus:outline',
    'focus:outline-2',
    'focus:outline-offset-[-1px]',
    'focus:outline-focus',

    'data-[disabled]:opacity-60',
    'data-[disabled]:cursor-not-allowed',

    'data-[invalid]:border-danger-7',
    'data-[invalid]:text-danger-11',
    'data-[invalid]:focus:outline-danger-8',
  ],
  {
    variants: {
      radius: {
        none: ['rounded-none'],
        sm: ['rounded-sm'],
        md: ['rounded'],
        lg: ['rounded-md'],
        xl: ['rounded-lg'],
        full: ['rounded-full'],
      },
      size: {
        '1': [
          'h-6',
          'px-1',
          'group-has-[[data-native-select-slot]+select]:pl-6',
          'group-has-[select+[data-native-select-icon]]:pr-6',
          'text-xs',
        ],
        '2': [
          'h-8',
          'px-2',
          'group-has-[[data-native-select-slot]+select]:pl-8',
          'group-has-[select+[data-native-select-icon]]:pr-8',
          'text-sm',
        ],
        '3': [
          'h-10',
          'px-2.5',
          'group-has-[[data-native-select-slot]+select]:pl-10',
          'group-has-[select+[data-native-select-icon]]:pr-10',
          'text-base',
        ],
        '4': [
          'h-12',
          'px-3',
          'group-has-[[data-native-select-slot]+select]:pl-12',
          'group-has-[select+[data-native-select-icon]]:pr-12',
          'text-lg',
        ],
      },
      variant: {
        default: ['bg-surface', '*:bg-white', 'dark:*:bg-default-1', 'border-default-7'],
        filled: ['bg-default-3', 'border-default-3'],
      },
    },
  }
);
