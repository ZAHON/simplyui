'use client';
import type { SelectContentProps } from './select-content.types';
import { forwardRef } from 'react';
import { Content } from '@radix-ui/react-select';
import { twMerge } from 'tailwind-merge';
import { applayComponentDefaultProps } from '../../../utils/applay-component-default-props';
import { SelectContentContextProvider } from '../select-content-context';
import { useSelectContext } from '../select-context';
import { selectContentStyles } from './select-content.styles';

const defaultProps: Partial<SelectContentProps> = {
  color: 'primary',
  shadow: 'md',
  sideOffset: 8,
  variant: 'filled',
};

export const SelectContent = forwardRef<HTMLDivElement, SelectContentProps>((props, ref) => {
  const { color, shadow, variant, className, children, ...others } = applayComponentDefaultProps(defaultProps, props);

  const { radius } = useSelectContext();

  return (
    <SelectContentContextProvider value={{ color, variant }}>
      <Content
        ref={ref}
        position="popper"
        className={twMerge(selectContentStyles({ radius, shadow }), className)}
        {...others}
      >
        {children}
      </Content>
    </SelectContentContextProvider>
  );
});

SelectContent.displayName = 'SelectContent';
