import { createRef } from 'react';
import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import * as Tooltip from '.';

const TOOLTIP_TRIGGER_TEST_ID = 'tooltip-trigger-test-id';
const TOOLTIP_CONTENT_TEST_ID = 'tooltip-content-test-id';
const TOOLTIP_TEXT_TEST_ID = 'tooltip-text-test-id';
const TOOLTIP_ARROW_TEST_ID = 'tooltip-arrow-test-id';

const TOOLTIP_TRIGER_CONTENT = 'tooltip-trigger';
const TOOLTIP_CONTENT_CONTENT = 'tooltip-content';
const TOOLTIP_TEXT_CONTENT = 'tooltip-text';

describe('Tooltip', () => {
  describe('Trigger', () => {
    it('should support ref', () => {
      const ref = createRef<HTMLButtonElement>();

      render(
        <Tooltip.Provider delayDuration={0}>
          <Tooltip.Root defaultOpen>
            <Tooltip.Trigger ref={ref}>{TOOLTIP_TRIGER_CONTENT}</Tooltip.Trigger>
          </Tooltip.Root>
        </Tooltip.Provider>
      );
      expect(ref.current).toBeInstanceOf(HTMLButtonElement);
    });

    it('should have class name handed over by className property', () => {
      const className = 'test';

      render(
        <Tooltip.Provider delayDuration={0}>
          <Tooltip.Root defaultOpen>
            <Tooltip.Trigger className={className} data-testid={TOOLTIP_TRIGGER_TEST_ID}>
              {TOOLTIP_TRIGER_CONTENT}
            </Tooltip.Trigger>
          </Tooltip.Root>
        </Tooltip.Provider>
      );
      expect(screen.getByTestId(TOOLTIP_TRIGGER_TEST_ID)).toHaveClass(className);
    });
  });

  describe('Content', () => {
    it('should support ref', () => {
      const ref = createRef<HTMLDivElement>();

      render(
        <Tooltip.Provider delayDuration={0}>
          <Tooltip.Root defaultOpen>
            <Tooltip.Content ref={ref}>{TOOLTIP_CONTENT_CONTENT}</Tooltip.Content>
          </Tooltip.Root>
        </Tooltip.Provider>
      );
      expect(ref.current).toBeInstanceOf(HTMLDivElement);
    });

    it('should have class name handed over by className property', () => {
      const className = 'test';

      render(
        <Tooltip.Provider delayDuration={0}>
          <Tooltip.Root defaultOpen>
            <Tooltip.Content className={className} data-testid={TOOLTIP_CONTENT_TEST_ID}>
              {TOOLTIP_CONTENT_CONTENT}
            </Tooltip.Content>
          </Tooltip.Root>
        </Tooltip.Provider>
      );
      expect(screen.getByTestId(TOOLTIP_CONTENT_TEST_ID)).toHaveClass(className);
    });
  });

  describe('Text', () => {
    it('should support ref', () => {
      const ref = createRef<HTMLParagraphElement>();

      render(
        <Tooltip.Provider delayDuration={0}>
          <Tooltip.Root defaultOpen>
            <Tooltip.Content>
              <Tooltip.Text ref={ref}>{TOOLTIP_TEXT_CONTENT}</Tooltip.Text>
            </Tooltip.Content>
          </Tooltip.Root>
        </Tooltip.Provider>
      );
      expect(ref.current).toBeInstanceOf(HTMLParagraphElement);
    });

    it('should be p element when asChild property not provided', () => {
      const { container } = render(
        <Tooltip.Provider delayDuration={0}>
          <Tooltip.Root defaultOpen>
            <Tooltip.Content>
              <Tooltip.Text data-testid={TOOLTIP_TEXT_TEST_ID}>{TOOLTIP_TEXT_CONTENT}</Tooltip.Text>
            </Tooltip.Content>
          </Tooltip.Root>
        </Tooltip.Provider>
      );

      // eslint-disable-next-line testing-library/no-container, testing-library/no-node-access
      expect(container.querySelector(`p[data-testid="${TOOLTIP_TEXT_TEST_ID}"]`)).toBeInTheDocument();
    });

    it('should be Slot element when asChild property provided', () => {
      const { container } = render(
        <Tooltip.Provider delayDuration={0}>
          <Tooltip.Root defaultOpen>
            <Tooltip.Content>
              <Tooltip.Text asChild data-testid={TOOLTIP_TEXT_TEST_ID}>
                <span>{TOOLTIP_TEXT_CONTENT}</span>
              </Tooltip.Text>
            </Tooltip.Content>
          </Tooltip.Root>
        </Tooltip.Provider>
      );

      // eslint-disable-next-line testing-library/no-container, testing-library/no-node-access
      expect(container.querySelector(`p[data-testid="${TOOLTIP_TEXT_TEST_ID}"]`)).not.toBeInTheDocument();
    });

    it('should have class name handed over by className property', () => {
      const className = 'test';

      const { container } = render(
        <Tooltip.Provider delayDuration={0}>
          <Tooltip.Root defaultOpen>
            <Tooltip.Content>
              <Tooltip.Text className={className} data-testid={TOOLTIP_TEXT_TEST_ID}>
                {TOOLTIP_TEXT_CONTENT}
              </Tooltip.Text>
            </Tooltip.Content>
          </Tooltip.Root>
        </Tooltip.Provider>
      );

      // eslint-disable-next-line testing-library/no-container, testing-library/no-node-access
      expect(container.querySelector(`p[data-testid="${TOOLTIP_TEXT_TEST_ID}"]`)).toHaveClass(className);
    });
  });

  describe('Arrow', () => {
    // Mock ResizeObserver
    global.ResizeObserver = vi.fn().mockImplementation(() => ({
      observe: vi.fn(),
      unobserve: vi.fn(),
      disconnect: vi.fn(),
    }));

    it('should support ref', () => {
      const ref = createRef<SVGSVGElement>();

      render(
        <Tooltip.Provider delayDuration={0}>
          <Tooltip.Root defaultOpen>
            <Tooltip.Content>
              <Tooltip.Arrow ref={ref} />
            </Tooltip.Content>
          </Tooltip.Root>
        </Tooltip.Provider>
      );
      expect(ref.current).toBeInstanceOf(SVGSVGElement);
    });

    it('should have class name handed over by className property', () => {
      const className = 'test';

      const { container } = render(
        <Tooltip.Provider delayDuration={0}>
          <Tooltip.Root defaultOpen>
            <Tooltip.Content>
              <Tooltip.Arrow className={className} data-testid={TOOLTIP_ARROW_TEST_ID} />
            </Tooltip.Content>
          </Tooltip.Root>
        </Tooltip.Provider>
      );

      // eslint-disable-next-line testing-library/no-container, testing-library/no-node-access
      expect(container.querySelector(`svg[data-testid="${TOOLTIP_ARROW_TEST_ID}"]`)).toHaveClass(className);
    });
  });
});
