import { createRef } from 'react';
import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { Collapsible } from '.';

const COLLAPSIBLE_CONTENT_TEST_ID = 'collapsible-content-test-id';

const COLLAPSIBLE_ROOT_CONTENT = 'collapsible-root';
const COLLAPSIBLE_TRIGGER_CONTENT = 'collapsible-trigger';
const COLLAPSIBLE_CONTENT_CONTENT = 'collapsible-content';

describe('Collapsible', () => {
  describe('Root', () => {
    it('should support ref', () => {
      const ref = createRef<HTMLDivElement>();

      render(<Collapsible ref={ref}>{COLLAPSIBLE_ROOT_CONTENT}</Collapsible>);
      expect(ref.current).toBeInstanceOf(HTMLDivElement);
    });
  });

  describe('Trigger', () => {
    it('should support ref', () => {
      const ref = createRef<HTMLButtonElement>();

      render(
        <Collapsible>
          <Collapsible.Trigger ref={ref}>{COLLAPSIBLE_TRIGGER_CONTENT}</Collapsible.Trigger>
        </Collapsible>
      );
      expect(ref.current).toBeInstanceOf(HTMLButtonElement);
    });
  });

  describe('Content', () => {
    it('should support ref', () => {
      const ref = createRef<HTMLDivElement>();

      render(
        <Collapsible>
          <Collapsible.Trigger>{COLLAPSIBLE_TRIGGER_CONTENT}</Collapsible.Trigger>
          <Collapsible.Content ref={ref}>{COLLAPSIBLE_CONTENT_CONTENT}</Collapsible.Content>
        </Collapsible>
      );
      expect(ref.current).toBeInstanceOf(HTMLDivElement);
    });

    it('should have class name handed over by className property', () => {
      const className = 'test';

      render(
        <Collapsible>
          <Collapsible.Trigger>{COLLAPSIBLE_TRIGGER_CONTENT}</Collapsible.Trigger>
          <Collapsible.Content className={className} data-testid={COLLAPSIBLE_CONTENT_TEST_ID}>
            {COLLAPSIBLE_CONTENT_CONTENT}
          </Collapsible.Content>
        </Collapsible>
      );
      expect(screen.getByTestId(COLLAPSIBLE_CONTENT_TEST_ID)).toHaveClass(className);
    });
  });
});
