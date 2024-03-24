import { createRef } from 'react';
import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import * as Switch from '.';

const SWITCH_ROOT_CONTENT = 'switch-root';
const SWITCH_THUMB_CONTENT = 'switch-thumb';

describe('Switch', () => {
  describe('Root', () => {
    it('should support ref', () => {
      const ref = createRef<HTMLButtonElement>();

      render(<Switch.Root ref={ref}>{SWITCH_ROOT_CONTENT}</Switch.Root>);
      expect(ref.current).toBeInstanceOf(HTMLButtonElement);
    });

    it('should be not invalid when invalid property not provided', () => {
      render(<Switch.Root invalid={false}>{SWITCH_ROOT_CONTENT}</Switch.Root>);
      expect(screen.getByText(SWITCH_ROOT_CONTENT)).toBeValid();
    });

    it('should be invalid when invalid property provided', () => {
      render(<Switch.Root invalid={true}>{SWITCH_ROOT_CONTENT}</Switch.Root>);
      expect(screen.getByText(SWITCH_ROOT_CONTENT)).toBeInvalid();
    });

    it('should have not data-invalid attribute when invalid property not provided', () => {
      render(<Switch.Root invalid={false}>{SWITCH_ROOT_CONTENT}</Switch.Root>);
      expect(screen.getByText(SWITCH_ROOT_CONTENT)).not.toHaveAttribute('data-invalid');
    });

    it('should have data-invalid attribute when invalid property provided', () => {
      render(<Switch.Root invalid={true}>{SWITCH_ROOT_CONTENT}</Switch.Root>);
      expect(screen.getByText(SWITCH_ROOT_CONTENT)).toHaveAttribute('data-invalid');
    });

    it('should have class name handed over by className property', () => {
      const className = 'test';

      render(<Switch.Root className={className}>{SWITCH_ROOT_CONTENT}</Switch.Root>);
      expect(screen.getByText(SWITCH_ROOT_CONTENT)).toHaveClass(className);
    });
  });

  describe('Thumb', () => {
    it('should support ref', () => {
      const ref = createRef<HTMLSpanElement>();

      render(
        <Switch.Root>
          <Switch.Thumb ref={ref} />
        </Switch.Root>
      );
      expect(ref.current).toBeInstanceOf(HTMLSpanElement);
    });

    it('should have not data-invalid attribute when invalid property not provided on Root element', () => {
      render(
        <Switch.Root invalid={false}>
          <Switch.Thumb>{SWITCH_THUMB_CONTENT}</Switch.Thumb>
        </Switch.Root>
      );
      expect(screen.getByText(SWITCH_THUMB_CONTENT)).not.toHaveAttribute('data-invalid');
    });

    it('should have data-invalid attribute when invalid property provided on Root element', () => {
      render(
        <Switch.Root invalid={true}>
          <Switch.Thumb>{SWITCH_THUMB_CONTENT}</Switch.Thumb>
        </Switch.Root>
      );
      expect(screen.getByText(SWITCH_THUMB_CONTENT)).toHaveAttribute('data-invalid');
    });

    it('should have class name handed over by className property', () => {
      const className = 'test';

      render(
        <Switch.Root>
          <Switch.Thumb className={className}>{SWITCH_THUMB_CONTENT}</Switch.Thumb>
        </Switch.Root>
      );
      expect(screen.getByText(SWITCH_THUMB_CONTENT)).toHaveClass(className);
    });
  });
});
