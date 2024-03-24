import { createRef } from 'react';
import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import * as Checkbox from '.';

const CHECKBOX_ROOT_CONTENT = 'checkbox-root';
const CHECKBOX_INDICATOR_CONTENT = 'checkbox-thumb';

describe('Checkbox', () => {
  describe('Root', () => {
    it('should support ref', () => {
      const ref = createRef<HTMLButtonElement>();

      render(<Checkbox.Root ref={ref}>{CHECKBOX_ROOT_CONTENT}</Checkbox.Root>);
      expect(ref.current).toBeInstanceOf(HTMLButtonElement);
    });

    it('should be not invalid when invalid property not provided', () => {
      render(<Checkbox.Root invalid={false}>{CHECKBOX_ROOT_CONTENT}</Checkbox.Root>);
      expect(screen.getByText(CHECKBOX_ROOT_CONTENT)).toBeValid();
    });

    it('should be invalid when invalid property provided', () => {
      render(<Checkbox.Root invalid={true}>{CHECKBOX_ROOT_CONTENT}</Checkbox.Root>);
      expect(screen.getByText(CHECKBOX_ROOT_CONTENT)).toBeInvalid();
    });

    it('should have not data-invalid attribute when invalid property not provided', () => {
      render(<Checkbox.Root invalid={false}>{CHECKBOX_ROOT_CONTENT}</Checkbox.Root>);
      expect(screen.getByText(CHECKBOX_ROOT_CONTENT)).not.toHaveAttribute('data-invalid');
    });

    it('should have data-invalid attribute when invalid property provided', () => {
      render(<Checkbox.Root invalid={true}>{CHECKBOX_ROOT_CONTENT}</Checkbox.Root>);
      expect(screen.getByText(CHECKBOX_ROOT_CONTENT)).toHaveAttribute('data-invalid');
    });

    it('should have class name handed over by className property', () => {
      const className = 'test';

      render(<Checkbox.Root className={className}>{CHECKBOX_ROOT_CONTENT}</Checkbox.Root>);
      expect(screen.getByText(CHECKBOX_ROOT_CONTENT)).toHaveClass(className);
    });
  });

  describe('Indicator', () => {
    it('should support ref', () => {
      const ref = createRef<HTMLSpanElement>();

      render(
        <Checkbox.Root>
          <Checkbox.Indicator ref={ref} />
        </Checkbox.Root>
      );
      expect(ref.current).toBeInstanceOf(HTMLSpanElement);
    });

    it('should have not data-invalid attribute when invalid property not provided on Root element', () => {
      render(
        <Checkbox.Root invalid={false}>
          <Checkbox.Indicator>{CHECKBOX_INDICATOR_CONTENT}</Checkbox.Indicator>
        </Checkbox.Root>
      );
      expect(screen.getByText(CHECKBOX_INDICATOR_CONTENT)).not.toHaveAttribute('data-invalid');
    });

    it('should have data-invalid attribute when invalid property provided on Root element', () => {
      render(
        <Checkbox.Root invalid={true}>
          <Checkbox.Indicator>{CHECKBOX_INDICATOR_CONTENT}</Checkbox.Indicator>
        </Checkbox.Root>
      );
      expect(screen.getByText(CHECKBOX_INDICATOR_CONTENT)).toHaveAttribute('data-invalid');
    });

    it('should have class name handed over by className property', () => {
      const className = 'test';

      render(
        <Checkbox.Root>
          <Checkbox.Indicator className={className}>{CHECKBOX_INDICATOR_CONTENT}</Checkbox.Indicator>
        </Checkbox.Root>
      );
      expect(screen.getByText(CHECKBOX_INDICATOR_CONTENT)).toHaveClass(className);
    });
  });
});
