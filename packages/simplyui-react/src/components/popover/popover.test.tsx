import { createRef } from 'react';
import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import * as Popover from '.';

const POPOVER_TRIGGER_CONTENT = 'popover-trigger';
const POPOVER_ANCHOR_CONTENT = 'popover-anchor';
const POPOVER_CONTENT_CONTENT = 'popover-content';
const POPOVER_CLOSE_CONTENT = 'popover-close';

describe('Popover', () => {
  describe('Trigger', () => {
    it('should support ref', () => {
      const ref = createRef<HTMLButtonElement>();

      render(
        <Popover.Root>
          <Popover.Trigger ref={ref}>{POPOVER_TRIGGER_CONTENT}</Popover.Trigger>
        </Popover.Root>
      );
      expect(ref.current).toBeInstanceOf(HTMLButtonElement);
    });

    it('should have class name handed over by className property', () => {
      const className = 'test';

      render(
        <Popover.Root>
          <Popover.Trigger className={className}>{POPOVER_TRIGGER_CONTENT}</Popover.Trigger>
        </Popover.Root>
      );
      expect(screen.getByText(POPOVER_TRIGGER_CONTENT)).toHaveClass(className);
    });
  });

  describe('Anchor', () => {
    it('should support ref', () => {
      const ref = createRef<HTMLDivElement>();

      render(
        <Popover.Root>
          <Popover.Anchor ref={ref}>{POPOVER_ANCHOR_CONTENT}</Popover.Anchor>
        </Popover.Root>
      );
      expect(ref.current).toBeInstanceOf(HTMLDivElement);
    });

    it('should have class name handed over by className property', () => {
      const className = 'test';

      render(
        <Popover.Root>
          <Popover.Anchor className={className}>{POPOVER_ANCHOR_CONTENT}</Popover.Anchor>
        </Popover.Root>
      );
      expect(screen.getByText(POPOVER_ANCHOR_CONTENT)).toHaveClass(className);
    });
  });

  describe('Content', () => {
    it('should support ref', () => {
      const ref = createRef<HTMLDivElement>();

      render(
        <Popover.Root defaultOpen>
          <Popover.Content ref={ref}>{POPOVER_CONTENT_CONTENT}</Popover.Content>
        </Popover.Root>
      );
      expect(ref.current).toBeInstanceOf(HTMLDivElement);
    });

    it('should have class name handed over by className property', () => {
      const className = 'test';

      render(
        <Popover.Root defaultOpen>
          <Popover.Content className={className}>{POPOVER_CONTENT_CONTENT}</Popover.Content>
        </Popover.Root>
      );
      expect(screen.getByText(POPOVER_CONTENT_CONTENT)).toHaveClass(className);
    });
  });

  describe('Close', () => {
    it('should support ref', () => {
      const ref = createRef<HTMLButtonElement>();

      render(
        <Popover.Root defaultOpen>
          <Popover.Close ref={ref}>{POPOVER_CLOSE_CONTENT}</Popover.Close>
        </Popover.Root>
      );
      expect(ref.current).toBeInstanceOf(HTMLButtonElement);
    });

    it('should have class name handed over by className property', () => {
      const className = 'test';

      render(
        <Popover.Root defaultOpen>
          <Popover.Close className={className}>{POPOVER_CLOSE_CONTENT}</Popover.Close>
        </Popover.Root>
      );
      expect(screen.getByText(POPOVER_CLOSE_CONTENT)).toHaveClass(className);
    });
  });
});
