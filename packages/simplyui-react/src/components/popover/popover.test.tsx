import { createRef } from 'react';
import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { Popover } from '.';

const POPOVER_TRIGGER_CONTENT = 'popover-trigger';
const POPOVER_ANCHOR_CONTENT = 'popover-anchor';
const POPOVER_CONTENT_CONTENT = 'popover-content';
const POPOVER_CLOSE_CONTENT = 'popover-close';

describe('Popover', () => {
  describe('Trigger', () => {
    it('should support ref', () => {
      const ref = createRef<HTMLButtonElement>();

      render(
        <Popover>
          <Popover.Trigger ref={ref}>{POPOVER_TRIGGER_CONTENT}</Popover.Trigger>
        </Popover>
      );
      expect(ref.current).toBeInstanceOf(HTMLButtonElement);
    });

    it('should have class name handed over by className property', () => {
      const className = 'test';

      render(
        <Popover>
          <Popover.Trigger className={className}>{POPOVER_TRIGGER_CONTENT}</Popover.Trigger>
        </Popover>
      );
      expect(screen.getByText(POPOVER_TRIGGER_CONTENT)).toHaveClass(className);
    });
  });

  describe('Anchor', () => {
    it('should support ref', () => {
      const ref = createRef<HTMLDivElement>();

      render(
        <Popover>
          <Popover.Anchor ref={ref}>{POPOVER_ANCHOR_CONTENT}</Popover.Anchor>
        </Popover>
      );
      expect(ref.current).toBeInstanceOf(HTMLDivElement);
    });

    it('should have class name handed over by className property', () => {
      const className = 'test';

      render(
        <Popover>
          <Popover.Anchor className={className}>{POPOVER_ANCHOR_CONTENT}</Popover.Anchor>
        </Popover>
      );
      expect(screen.getByText(POPOVER_ANCHOR_CONTENT)).toHaveClass(className);
    });
  });

  describe('Content', () => {
    it('should support ref', () => {
      const ref = createRef<HTMLDivElement>();

      render(
        <Popover defaultOpen>
          <Popover.Content ref={ref}>{POPOVER_CONTENT_CONTENT}</Popover.Content>
        </Popover>
      );
      expect(ref.current).toBeInstanceOf(HTMLDivElement);
    });

    it('should have class name handed over by className property', () => {
      const className = 'test';

      render(
        <Popover defaultOpen>
          <Popover.Content className={className}>{POPOVER_CONTENT_CONTENT}</Popover.Content>
        </Popover>
      );
      expect(screen.getByText(POPOVER_CONTENT_CONTENT)).toHaveClass(className);
    });
  });

  describe('Close', () => {
    it('should support ref', () => {
      const ref = createRef<HTMLButtonElement>();

      render(
        <Popover defaultOpen>
          <Popover.Close ref={ref}>{POPOVER_CLOSE_CONTENT}</Popover.Close>
        </Popover>
      );
      expect(ref.current).toBeInstanceOf(HTMLButtonElement);
    });

    it('should have class name handed over by className property', () => {
      const className = 'test';

      render(
        <Popover defaultOpen>
          <Popover.Close className={className}>{POPOVER_CLOSE_CONTENT}</Popover.Close>
        </Popover>
      );
      expect(screen.getByText(POPOVER_CLOSE_CONTENT)).toHaveClass(className);
    });
  });
});
