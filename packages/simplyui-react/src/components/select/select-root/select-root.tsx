'use client';
import type { SelectRootProps } from './select-root.types';
import { Root } from '@radix-ui/react-select';
import { SelectContextProvider } from '../select-context';
import { applayComponentDefaultProps } from '../../../utils/applay-component-default-props';

const defaultProps: Partial<SelectRootProps> = {
  radius: 'md',
  size: '2',
};

export function SelectRoot(props: SelectRootProps) {
  const { invalid, radius, size, children, ...others } = applayComponentDefaultProps(defaultProps, props);

  return (
    <SelectContextProvider value={{ invalid, radius, size }}>
      <Root dir="ltr" {...others}>
        {children}
      </Root>
    </SelectContextProvider>
  );
}
