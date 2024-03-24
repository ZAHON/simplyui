'use client';
import type { ModalContentProps } from './modal-content.types';
import { forwardRef } from 'react';
import { Content } from '@radix-ui/react-dialog';
import { twMerge } from 'tailwind-merge';
import { applayComponentDefaultProps } from '../../../utils/applay-component-default-props';
import { ModalContentContextProvider } from '../modal-content-context';
import { modalContentStyles } from './modal-content.styles';

const defaultProps: Partial<ModalContentProps> = {
  radius: 'md',
  shadow: 'md',
  size: '2',
  fullScreen: false,
};

export const ModalContent = forwardRef<HTMLDivElement, ModalContentProps>((props, ref) => {
  const { radius, shadow, size, fullScreen, className, children, ...others } = applayComponentDefaultProps(
    defaultProps,
    props
  );

  return (
    <ModalContentContextProvider value={{ size }}>
      <Content
        ref={ref}
        className={twMerge(modalContentStyles({ radius, shadow, size, fullScreen }), className)}
        {...others}
      >
        {children}
      </Content>
    </ModalContentContextProvider>
  );
});

ModalContent.displayName = 'ModalContent';
