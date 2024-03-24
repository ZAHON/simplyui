'use client';
import type { TextFieldRootProps } from './text-field-root.types';
import type { PointerEvent } from 'react';
import { forwardRef } from 'react';
import { twMerge } from 'tailwind-merge';
import { Primitive } from '../../primitive';
import { applayComponentDefaultProps } from '../../../utils/applay-component-default-props';
import { TextFieldContextProvider } from '../text-field-context';
import { textFieldRootStyles } from './text-field-root.styles';

const defaultProps: Partial<TextFieldRootProps> = {
  radius: 'md',
  size: '2',
  variant: 'default',
};

export const TextFieldRoot = forwardRef<HTMLDivElement, TextFieldRootProps>((props, ref) => {
  const { disabled, invalid, radius, required, size, variant, onPointerDown, className, children, ...others } =
    applayComponentDefaultProps(defaultProps, props);

  function handlePointerDown(e: PointerEvent<HTMLDivElement>) {
    if (onPointerDown) onPointerDown(e);

    const target = e.target as HTMLElement;

    if (target.closest('input, button, a')) return;

    const input = e.currentTarget.querySelector('input');

    if (!input) return;

    const isLeftSlot = target.closest('[data-text-field-slot]')?.nextSibling?.nodeName === 'INPUT';

    const cursorPosition = isLeftSlot ? 0 : input.value.length;

    requestAnimationFrame(() => {
      try {
        input.setSelectionRange(cursorPosition, cursorPosition);
      } catch (e) {
      } finally {
        input.focus();
      }
    });
  }

  return (
    <TextFieldContextProvider value={{ disabled, invalid, required, radius }}>
      <Primitive.div
        ref={ref}
        data-disabled={disabled ? '' : undefined}
        data-invalid={invalid ? '' : undefined}
        onPointerDown={handlePointerDown}
        className={twMerge(textFieldRootStyles({ radius, size, variant }), className)}
        {...others}
      >
        {children}
      </Primitive.div>
    </TextFieldContextProvider>
  );
});

TextFieldRoot.displayName = 'TextField.Root';
