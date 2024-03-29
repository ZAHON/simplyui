import { createRef } from 'react';
import { describe, it, expect } from 'vitest';
import { render, cleanup, screen } from '@testing-library/react'; // eslint-disable-line testing-library/no-manual-cleanup
import * as SegmentedControl from '.';

const SEGMENTED_CONTROL_ROOT_TEST_ID = 'segmented-control-root-test-id';
const SEGMENTED_CONTROL_INDICATOR_TEST_ID = 'segmented-control-indicator-test-id';
const SEGMENTED_CONTROL_ITEM_TEST_ID = 'segmented-control-item-test-id';
const SEGMENTED_CONTROL_ITEM_LABEL_TEST_ID = 'segmented-control-item-label-test-id';

const SEGMENTED_CONTROL_ROOT_CONTENT = 'segmented-control-root';
const SEGMENTED_CONTROL_INDICATOR_CONTENT = 'segmented-control-indicator';
const SEGMENTED_CONTROL_ITEM_CONTENT = 'segmented-control-item';
const SEGMENTED_CONTROL_ITEM_LABEL_CONTENT = 'segmented-control-item-label';

describe('SegmentedControl', () => {
  describe('Root', () => {
    it('should support ref', () => {
      const ref = createRef<HTMLDivElement>();

      render(<SegmentedControl.Root ref={ref}>{SEGMENTED_CONTROL_ROOT_CONTENT}</SegmentedControl.Root>);
      expect(ref.current).toBeInstanceOf(HTMLDivElement);
    });

    it('should have not data-disabled attribute when disabled property not provided', () => {
      render(
        <SegmentedControl.Root disabled={false} data-testid={SEGMENTED_CONTROL_ROOT_TEST_ID}>
          {SEGMENTED_CONTROL_ROOT_CONTENT}
        </SegmentedControl.Root>
      );
      expect(screen.getByTestId(SEGMENTED_CONTROL_ROOT_TEST_ID)).not.toHaveAttribute('data-disabled');
    });

    it('should have data-disabled attribute when disabled property provided', () => {
      render(
        <SegmentedControl.Root disabled={true} data-testid={SEGMENTED_CONTROL_ROOT_TEST_ID}>
          {SEGMENTED_CONTROL_ROOT_CONTENT}
        </SegmentedControl.Root>
      );
      expect(screen.getByTestId(SEGMENTED_CONTROL_ROOT_TEST_ID)).toHaveAttribute('data-disabled');
    });

    it('should have css variables with appropriate values', () => {
      render(
        <SegmentedControl.Root data-testid={SEGMENTED_CONTROL_ROOT_TEST_ID}>
          <SegmentedControl.Indicator />
        </SegmentedControl.Root>
      );
      expect(screen.getByTestId(SEGMENTED_CONTROL_ROOT_TEST_ID)).toHaveStyle({
        '--segmented-control-items-count': '0',
        '--segmented-control-checked-item-index': '-1',
      });

      cleanup();

      render(
        <SegmentedControl.Root data-testid={SEGMENTED_CONTROL_ROOT_TEST_ID}>
          <SegmentedControl.Indicator />
          <SegmentedControl.Item value="test-1">test 1</SegmentedControl.Item>
          <SegmentedControl.Item value="test-2">test 2</SegmentedControl.Item>
        </SegmentedControl.Root>
      );
      expect(screen.getByTestId(SEGMENTED_CONTROL_ROOT_TEST_ID)).toHaveStyle({
        '--segmented-control-items-count': '2',
        '--segmented-control-checked-item-index': '-1',
      });

      cleanup();

      render(
        <SegmentedControl.Root defaultValue="test-1" data-testid={SEGMENTED_CONTROL_ROOT_TEST_ID}>
          <SegmentedControl.Indicator />
          <SegmentedControl.Item value="test-1">test 1</SegmentedControl.Item>
          <SegmentedControl.Item value="test-2">test 2</SegmentedControl.Item>
        </SegmentedControl.Root>
      );
      expect(screen.getByTestId(SEGMENTED_CONTROL_ROOT_TEST_ID)).toHaveStyle({
        '--segmented-control-items-count': '2',
        '--segmented-control-checked-item-index': '0',
      });

      cleanup();

      render(
        <SegmentedControl.Root value="test-1" data-testid={SEGMENTED_CONTROL_ROOT_TEST_ID}>
          <SegmentedControl.Indicator />
          <SegmentedControl.Item value="test-1">test 1</SegmentedControl.Item>
          <SegmentedControl.Item value="test-2">test 2</SegmentedControl.Item>
        </SegmentedControl.Root>
      );
      expect(screen.getByTestId(SEGMENTED_CONTROL_ROOT_TEST_ID)).toHaveStyle({
        '--segmented-control-items-count': '2',
        '--segmented-control-checked-item-index': '0',
      });
    });

    it('should have style handed over by style property', () => {
      render(
        <SegmentedControl.Root style={{ color: 'test' }} data-testid={SEGMENTED_CONTROL_ROOT_TEST_ID}>
          {SEGMENTED_CONTROL_ROOT_CONTENT}
        </SegmentedControl.Root>
      );
      expect(screen.getByTestId(SEGMENTED_CONTROL_ROOT_TEST_ID)).toHaveStyle({ color: 'test' });
    });

    it('should have class name handed over by className property', () => {
      const className = 'test';

      render(
        <SegmentedControl.Root className={className} data-testid={SEGMENTED_CONTROL_ROOT_TEST_ID}>
          {SEGMENTED_CONTROL_ROOT_CONTENT}
        </SegmentedControl.Root>
      );
      expect(screen.getByTestId(SEGMENTED_CONTROL_ROOT_TEST_ID)).toHaveClass(className);
    });
  });

  describe('Indicator', () => {
    it('should support ref', () => {
      const ref = createRef<HTMLDivElement>();

      render(
        <SegmentedControl.Root defaultValue="test-1">
          <SegmentedControl.Indicator ref={ref}>{SEGMENTED_CONTROL_INDICATOR_CONTENT}</SegmentedControl.Indicator>
          <SegmentedControl.Item value="test-1">test 1</SegmentedControl.Item>
        </SegmentedControl.Root>
      );
      expect(ref.current).toBeInstanceOf(HTMLDivElement);
    });

    it('should be div element when asChild property not provided', () => {
      const { container } = render(
        <SegmentedControl.Root defaultValue="test-1">
          <SegmentedControl.Indicator data-testid={SEGMENTED_CONTROL_INDICATOR_TEST_ID}>
            {SEGMENTED_CONTROL_INDICATOR_CONTENT}
          </SegmentedControl.Indicator>
          <SegmentedControl.Item value="test-1">test 1</SegmentedControl.Item>
        </SegmentedControl.Root>
      );

      expect(screen.getByTestId(SEGMENTED_CONTROL_INDICATOR_TEST_ID)).toBeInstanceOf(HTMLDivElement);
      // eslint-disable-next-line testing-library/no-container, testing-library/no-node-access
      expect(container.querySelector(`div[data-testid="${SEGMENTED_CONTROL_INDICATOR_TEST_ID}"]`)).toBeInTheDocument();
    });

    it('should be Slot element when asChild property provided', () => {
      const { container } = render(
        <SegmentedControl.Root defaultValue="test-1">
          <SegmentedControl.Indicator asChild data-testid={SEGMENTED_CONTROL_INDICATOR_TEST_ID}>
            <span>{SEGMENTED_CONTROL_INDICATOR_CONTENT}</span>
          </SegmentedControl.Indicator>
          <SegmentedControl.Item value="test-1">test 1</SegmentedControl.Item>
        </SegmentedControl.Root>
      );

      expect(screen.getByTestId(SEGMENTED_CONTROL_INDICATOR_TEST_ID)).toBeInstanceOf(HTMLSpanElement);
      expect(
        // eslint-disable-next-line testing-library/no-container, testing-library/no-node-access
        container.querySelector(`div[data-testid="${SEGMENTED_CONTROL_INDICATOR_TEST_ID}"]`)
      ).not.toBeInTheDocument();
    });

    it('should have aria-hidden="true" attribute', () => {
      render(
        <SegmentedControl.Root defaultValue="test-1">
          <SegmentedControl.Indicator data-testid={SEGMENTED_CONTROL_INDICATOR_TEST_ID}>
            {SEGMENTED_CONTROL_INDICATOR_CONTENT}
          </SegmentedControl.Indicator>
          <SegmentedControl.Item value="test-1">test 1</SegmentedControl.Item>
        </SegmentedControl.Root>
      );
      expect(screen.getByTestId(SEGMENTED_CONTROL_INDICATOR_TEST_ID)).toHaveAttribute('aria-hidden', 'true');
    });

    it('should have not data-disabled attribute when disabled property not provided on Root element', () => {
      render(
        <SegmentedControl.Root disabled={false} defaultValue="test-1">
          <SegmentedControl.Indicator data-testid={SEGMENTED_CONTROL_INDICATOR_TEST_ID}>
            {SEGMENTED_CONTROL_INDICATOR_CONTENT}
          </SegmentedControl.Indicator>
          <SegmentedControl.Item value="test-1">test 1</SegmentedControl.Item>
        </SegmentedControl.Root>
      );
      expect(screen.getByTestId(SEGMENTED_CONTROL_INDICATOR_TEST_ID)).not.toHaveAttribute('data-disabled');
    });

    it('should have data-disabled attribute when disabled property provided on Root element', () => {
      render(
        <SegmentedControl.Root disabled={true} defaultValue="test-1">
          <SegmentedControl.Indicator data-testid={SEGMENTED_CONTROL_INDICATOR_TEST_ID}>
            {SEGMENTED_CONTROL_INDICATOR_CONTENT}
          </SegmentedControl.Indicator>
          <SegmentedControl.Item value="test-1">test 1</SegmentedControl.Item>
        </SegmentedControl.Root>
      );
      expect(screen.getByTestId(SEGMENTED_CONTROL_INDICATOR_TEST_ID)).toHaveAttribute('data-disabled');
    });

    it('should have class name handed over by className property', () => {
      const className = 'test';

      render(
        <SegmentedControl.Root defaultValue="test-1">
          <SegmentedControl.Indicator className={className} data-testid={SEGMENTED_CONTROL_INDICATOR_TEST_ID}>
            {SEGMENTED_CONTROL_INDICATOR_CONTENT}
          </SegmentedControl.Indicator>
          <SegmentedControl.Item value="test-1">test 1</SegmentedControl.Item>
        </SegmentedControl.Root>
      );
      expect(screen.getByTestId(SEGMENTED_CONTROL_INDICATOR_TEST_ID)).toHaveClass(className);
    });
  });

  describe('Item', () => {
    it('should support ref', () => {
      const ref = createRef<HTMLButtonElement>();

      render(
        <SegmentedControl.Root>
          <SegmentedControl.Item ref={ref} value="test-1" data-testid={SEGMENTED_CONTROL_ITEM_TEST_ID}>
            {SEGMENTED_CONTROL_ITEM_CONTENT}
          </SegmentedControl.Item>
        </SegmentedControl.Root>
      );
      expect(ref.current).toBeInstanceOf(HTMLButtonElement);
    });

    it('should have not data-disabled attribute when disabled property not provided on Root element', () => {
      render(
        <SegmentedControl.Root disabled={false} defaultValue="test-1">
          <SegmentedControl.Item value="test-1" data-testid={SEGMENTED_CONTROL_ITEM_TEST_ID}>
            {SEGMENTED_CONTROL_ITEM_CONTENT}
          </SegmentedControl.Item>
        </SegmentedControl.Root>
      );
      expect(screen.getByTestId(SEGMENTED_CONTROL_ITEM_TEST_ID)).not.toHaveAttribute('data-disabled');
    });

    it('should have data-disabled attribute when disabled property provided on Root element', () => {
      render(
        <SegmentedControl.Root disabled={true} defaultValue="test-1">
          <SegmentedControl.Item value="test-1" data-testid={SEGMENTED_CONTROL_ITEM_TEST_ID}>
            {SEGMENTED_CONTROL_ITEM_CONTENT}
          </SegmentedControl.Item>
        </SegmentedControl.Root>
      );
      expect(screen.getByTestId(SEGMENTED_CONTROL_ITEM_TEST_ID)).toHaveAttribute('data-disabled');
    });

    it('should have not data-disabled attribute when disabled property not provided', () => {
      render(
        <SegmentedControl.Root defaultValue="test-1">
          <SegmentedControl.Item disabled={false} value="test-1" data-testid={SEGMENTED_CONTROL_ITEM_TEST_ID}>
            {SEGMENTED_CONTROL_ITEM_CONTENT}
          </SegmentedControl.Item>
        </SegmentedControl.Root>
      );
      expect(screen.getByTestId(SEGMENTED_CONTROL_ITEM_TEST_ID)).not.toHaveAttribute('data-disabled');
    });

    it('should have data-disabled attribute when disabled property provided', () => {
      render(
        <SegmentedControl.Root defaultValue="test-1">
          <SegmentedControl.Item disabled={true} value="test-1" data-testid={SEGMENTED_CONTROL_ITEM_TEST_ID}>
            {SEGMENTED_CONTROL_ITEM_CONTENT}
          </SegmentedControl.Item>
        </SegmentedControl.Root>
      );
      expect(screen.getByTestId(SEGMENTED_CONTROL_ITEM_TEST_ID)).toHaveAttribute('data-disabled');
    });

    it('should have class name handed over by className property', () => {
      const className = 'test';

      render(
        <SegmentedControl.Root>
          <SegmentedControl.Item className={className} value="test-1" data-testid={SEGMENTED_CONTROL_ITEM_TEST_ID}>
            {SEGMENTED_CONTROL_ITEM_CONTENT}
          </SegmentedControl.Item>
        </SegmentedControl.Root>
      );
      expect(screen.getByTestId(SEGMENTED_CONTROL_ITEM_TEST_ID)).toHaveClass(className);
    });
  });

  describe('ItemLabel', () => {
    it('should support ref', () => {
      const ref = createRef<HTMLSpanElement>();

      render(
        <SegmentedControl.Root>
          <SegmentedControl.Item value="test-1">
            <SegmentedControl.ItemLabel ref={ref} type="unchecked">
              {SEGMENTED_CONTROL_ITEM_LABEL_CONTENT}
            </SegmentedControl.ItemLabel>
          </SegmentedControl.Item>
        </SegmentedControl.Root>
      );
      expect(ref.current).toBeInstanceOf(HTMLSpanElement);
    });

    it('should be span element when asChild property not provided', () => {
      const { container } = render(
        <SegmentedControl.Root>
          <SegmentedControl.Item value="test-1">
            <SegmentedControl.ItemLabel type="unchecked" data-testid={SEGMENTED_CONTROL_ITEM_LABEL_TEST_ID}>
              {SEGMENTED_CONTROL_ITEM_LABEL_CONTENT}
            </SegmentedControl.ItemLabel>
          </SegmentedControl.Item>
        </SegmentedControl.Root>
      );

      expect(screen.getByTestId(SEGMENTED_CONTROL_ITEM_LABEL_TEST_ID)).toBeInstanceOf(HTMLSpanElement);
      expect(
        // eslint-disable-next-line testing-library/no-container, testing-library/no-node-access
        container.querySelector(`span[data-testid="${SEGMENTED_CONTROL_ITEM_LABEL_TEST_ID}"]`)
      ).toBeInTheDocument();
    });

    it('should be Slot element when asChild property provided', () => {
      const { container } = render(
        <SegmentedControl.Root>
          <SegmentedControl.Item value="test-1">
            <SegmentedControl.ItemLabel asChild type="unchecked" data-testid={SEGMENTED_CONTROL_ITEM_LABEL_TEST_ID}>
              <div>{SEGMENTED_CONTROL_ITEM_LABEL_CONTENT}</div>
            </SegmentedControl.ItemLabel>
          </SegmentedControl.Item>
        </SegmentedControl.Root>
      );

      expect(screen.getByTestId(SEGMENTED_CONTROL_ITEM_LABEL_TEST_ID)).toBeInstanceOf(HTMLDivElement);
      expect(
        // eslint-disable-next-line testing-library/no-container, testing-library/no-node-access
        container.querySelector(`span[data-testid="${SEGMENTED_CONTROL_ITEM_LABEL_TEST_ID}"]`)
      ).not.toBeInTheDocument();
    });

    it('should have not data-disabled attribute when disabled property not provided on Root element', () => {
      render(
        <SegmentedControl.Root disabled={false}>
          <SegmentedControl.Item value="test-1">
            <SegmentedControl.ItemLabel type="unchecked" data-testid={SEGMENTED_CONTROL_ITEM_LABEL_TEST_ID}>
              {SEGMENTED_CONTROL_ITEM_LABEL_CONTENT}
            </SegmentedControl.ItemLabel>
          </SegmentedControl.Item>
        </SegmentedControl.Root>
      );
      expect(screen.getByTestId(SEGMENTED_CONTROL_ITEM_LABEL_TEST_ID)).not.toHaveAttribute('data-disabled');
    });

    it('should have data-disabled attribute when disabled property provided on Root element', () => {
      render(
        <SegmentedControl.Root disabled={true}>
          <SegmentedControl.Item value="test-1">
            <SegmentedControl.ItemLabel type="unchecked" data-testid={SEGMENTED_CONTROL_ITEM_LABEL_TEST_ID}>
              {SEGMENTED_CONTROL_ITEM_LABEL_CONTENT}
            </SegmentedControl.ItemLabel>
          </SegmentedControl.Item>
        </SegmentedControl.Root>
      );
      expect(screen.getByTestId(SEGMENTED_CONTROL_ITEM_LABEL_TEST_ID)).toHaveAttribute('data-disabled');
    });

    it('should have not data-disabled attribute when disabled property not provided on Item element', () => {
      render(
        <SegmentedControl.Root>
          <SegmentedControl.Item disabled={false} value="test-1">
            <SegmentedControl.ItemLabel type="unchecked" data-testid={SEGMENTED_CONTROL_ITEM_LABEL_TEST_ID}>
              {SEGMENTED_CONTROL_ITEM_LABEL_CONTENT}
            </SegmentedControl.ItemLabel>
          </SegmentedControl.Item>
        </SegmentedControl.Root>
      );
      expect(screen.getByTestId(SEGMENTED_CONTROL_ITEM_LABEL_TEST_ID)).not.toHaveAttribute('data-disabled');
    });

    it('should have data-disabled attribute when disabled property provided on Item element', () => {
      render(
        <SegmentedControl.Root>
          <SegmentedControl.Item disabled={true} value="test-1">
            <SegmentedControl.ItemLabel type="unchecked" data-testid={SEGMENTED_CONTROL_ITEM_LABEL_TEST_ID}>
              {SEGMENTED_CONTROL_ITEM_LABEL_CONTENT}
            </SegmentedControl.ItemLabel>
          </SegmentedControl.Item>
        </SegmentedControl.Root>
      );
      expect(screen.getByTestId(SEGMENTED_CONTROL_ITEM_LABEL_TEST_ID)).toHaveAttribute('data-disabled');
    });

    it('should have data-state="unchecked" attribute when rendered inside unchecked Item', () => {
      render(
        <SegmentedControl.Root>
          <SegmentedControl.Item disabled={false} value="test-1">
            <SegmentedControl.ItemLabel type="unchecked" data-testid={SEGMENTED_CONTROL_ITEM_LABEL_TEST_ID}>
              {SEGMENTED_CONTROL_ITEM_LABEL_CONTENT}
            </SegmentedControl.ItemLabel>
          </SegmentedControl.Item>
        </SegmentedControl.Root>
      );
      expect(screen.getByTestId(SEGMENTED_CONTROL_ITEM_LABEL_TEST_ID)).toHaveAttribute('data-state', 'unchecked');
    });

    it('should have data-state="checked" attribute when rendered inside checked Item', () => {
      render(
        <SegmentedControl.Root defaultValue="test-1">
          <SegmentedControl.Item disabled={false} value="test-1">
            <SegmentedControl.ItemLabel type="unchecked" data-testid={SEGMENTED_CONTROL_ITEM_LABEL_TEST_ID}>
              {SEGMENTED_CONTROL_ITEM_LABEL_CONTENT}
            </SegmentedControl.ItemLabel>
          </SegmentedControl.Item>
        </SegmentedControl.Root>
      );
      expect(screen.getByTestId(SEGMENTED_CONTROL_ITEM_LABEL_TEST_ID)).toHaveAttribute('data-state', 'checked');
    });

    it('should have class name handed over by className property', () => {
      const className = 'test';

      render(
        <SegmentedControl.Root>
          <SegmentedControl.Item disabled={false} value="test-1">
            <SegmentedControl.ItemLabel
              className={className}
              type="unchecked"
              data-testid={SEGMENTED_CONTROL_ITEM_LABEL_TEST_ID}
            >
              {SEGMENTED_CONTROL_ITEM_LABEL_CONTENT}
            </SegmentedControl.ItemLabel>
          </SegmentedControl.Item>
        </SegmentedControl.Root>
      );
      expect(screen.getByTestId(SEGMENTED_CONTROL_ITEM_LABEL_TEST_ID)).toHaveClass(className);
    });
  });
});
