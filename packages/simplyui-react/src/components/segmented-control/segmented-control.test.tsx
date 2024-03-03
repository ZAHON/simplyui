import { createRef } from 'react';
import { describe, it, expect } from 'vitest';
import { render, cleanup, screen } from '@testing-library/react'; // eslint-disable-line testing-library/no-manual-cleanup
import { SegmentedControl } from '.';

const SEGMENTED_CONTROL_ROOT_TEST_ID = 'segmented-control-root-test-id';
const SEGMENTED_CONTROL_CONTENT_TEST_ID = 'segmented-control-content-test-id';
const SEGMENTED_CONTROL_INDICATOR_TEST_ID = 'segmented-control-indicator-test-id';
// const SEGMENTED_CONTROL_ITEM_TEST_ID = 'segmented-control-item-test-id';
// const SEGMENTED_CONTROL_LABEL_TEST_ID = 'segmented-control-item-label-id';

const SEGMENTED_CONTROL_ROOT_CONTENT = 'segmented-control-root';
const SEGMENTED_CONTROL_CONTENT_CONTENT = 'segmented-control-content';
const SEGMENTED_CONTROL_INDICATOR_CONTENT = 'segmented-control-indicator';
// const SEGMENTED_CONTROL_ITEM_CONTENT = 'segmented-control-item';
// const SEGMENTED_CONTROL_LABEL_CONTENT = 'segmented-control-label';

describe('SegmentedControl', () => {
  describe('Root', () => {
    it('should support ref', () => {
      const ref = createRef<HTMLDivElement>();

      render(<SegmentedControl ref={ref}>{SEGMENTED_CONTROL_ROOT_CONTENT}</SegmentedControl>);
      expect(ref.current).toBeInstanceOf(HTMLDivElement);
    });

    it('should be div element when asChild property not provided', () => {
      const { container } = render(
        <SegmentedControl data-testid={SEGMENTED_CONTROL_ROOT_TEST_ID}>
          {SEGMENTED_CONTROL_ROOT_CONTENT}
        </SegmentedControl>
      );

      expect(screen.getByTestId(SEGMENTED_CONTROL_ROOT_TEST_ID)).toBeInstanceOf(HTMLDivElement);
      // eslint-disable-next-line testing-library/no-container, testing-library/no-node-access
      expect(container.querySelector(`div[data-testid="${SEGMENTED_CONTROL_ROOT_TEST_ID}"]`)).toBeInTheDocument();
    });

    it('should be Slot element when asChild property provided', () => {
      const { container } = render(
        <SegmentedControl asChild data-testid={SEGMENTED_CONTROL_ROOT_TEST_ID}>
          <span>{SEGMENTED_CONTROL_ROOT_CONTENT}</span>
        </SegmentedControl>
      );

      expect(screen.getByTestId(SEGMENTED_CONTROL_ROOT_TEST_ID)).toBeInstanceOf(HTMLSpanElement);
      // eslint-disable-next-line testing-library/no-container, testing-library/no-node-access
      expect(container.querySelector(`div[data-testid="${SEGMENTED_CONTROL_ROOT_TEST_ID}"]`)).not.toBeInTheDocument();
    });

    it('should have not data-disabled attribute when disabled property not provided', () => {
      render(<SegmentedControl disabled={false}>{SEGMENTED_CONTROL_ROOT_CONTENT}</SegmentedControl>);
      expect(screen.getByRole('radiogroup')).not.toHaveAttribute('data-disabled');
    });

    it('should have data-disabled attribute when disabled property provided', () => {
      render(<SegmentedControl disabled={true}>{SEGMENTED_CONTROL_ROOT_CONTENT}</SegmentedControl>);
      expect(screen.getByRole('radiogroup')).toHaveAttribute('data-disabled');
    });

    it('should be not required when required property not provided', () => {
      render(<SegmentedControl required={false}>{SEGMENTED_CONTROL_ROOT_CONTENT}</SegmentedControl>);
      expect(screen.getByRole('radiogroup')).not.toBeRequired();
    });

    it('should be required when required property provided', () => {
      render(<SegmentedControl required={true}>{SEGMENTED_CONTROL_ROOT_CONTENT}</SegmentedControl>);
      expect(screen.getByRole('radiogroup')).toBeRequired();
    });

    it('should have class name handed over by className property', () => {
      const className = 'test';

      render(<SegmentedControl className={className}>{SEGMENTED_CONTROL_ROOT_CONTENT}</SegmentedControl>);
      expect(screen.getByRole('radiogroup')).toHaveClass(className);
    });
  });

  describe('Content', () => {
    it('should support ref', () => {
      const ref = createRef<HTMLDivElement>();

      render(
        <SegmentedControl>
          <SegmentedControl.Content ref={ref}>{SEGMENTED_CONTROL_CONTENT_CONTENT}</SegmentedControl.Content>
        </SegmentedControl>
      );
      expect(ref.current).toBeInstanceOf(HTMLDivElement);
    });

    it('should be div element when asChild property not provided', () => {
      const { container } = render(
        <SegmentedControl>
          <SegmentedControl.Content data-testid={SEGMENTED_CONTROL_CONTENT_TEST_ID}>
            {SEGMENTED_CONTROL_CONTENT_CONTENT}
          </SegmentedControl.Content>
        </SegmentedControl>
      );

      expect(screen.getByTestId(SEGMENTED_CONTROL_CONTENT_TEST_ID)).toBeInstanceOf(HTMLDivElement);
      // eslint-disable-next-line testing-library/no-container, testing-library/no-node-access
      expect(container.querySelector(`div[data-testid="${SEGMENTED_CONTROL_CONTENT_TEST_ID}"]`)).toBeInTheDocument();
    });

    it('should be Slot element when asChild property provided', () => {
      const { container } = render(
        <SegmentedControl>
          <SegmentedControl.Content asChild data-testid={SEGMENTED_CONTROL_CONTENT_TEST_ID}>
            <span>{SEGMENTED_CONTROL_CONTENT_CONTENT}</span>
          </SegmentedControl.Content>
        </SegmentedControl>
      );

      expect(screen.getByTestId(SEGMENTED_CONTROL_CONTENT_TEST_ID)).toBeInstanceOf(HTMLSpanElement);
      expect(
        // eslint-disable-next-line testing-library/no-container, testing-library/no-node-access
        container.querySelector(`div[data-testid="${SEGMENTED_CONTROL_CONTENT_TEST_ID}"]`)
      ).not.toBeInTheDocument();
    });

    it('should have not data-disabled attribute when disabled property not provided on Root element', () => {
      render(
        <SegmentedControl disabled={false}>
          <SegmentedControl.Content data-testid={SEGMENTED_CONTROL_CONTENT_TEST_ID}>
            {SEGMENTED_CONTROL_CONTENT_CONTENT}
          </SegmentedControl.Content>
        </SegmentedControl>
      );
      expect(screen.getByTestId(SEGMENTED_CONTROL_CONTENT_TEST_ID)).not.toHaveAttribute('data-disabled');
    });

    it('should have data-disabled attribute when disabled property provided on Root element', () => {
      render(
        <SegmentedControl disabled={true}>
          <SegmentedControl.Content data-testid={SEGMENTED_CONTROL_CONTENT_TEST_ID}>
            {SEGMENTED_CONTROL_CONTENT_CONTENT}
          </SegmentedControl.Content>
        </SegmentedControl>
      );
      expect(screen.getByTestId(SEGMENTED_CONTROL_CONTENT_TEST_ID)).toHaveAttribute('data-disabled');
    });

    it('should have css variables with appropriate values', () => {
      render(
        <SegmentedControl>
          <SegmentedControl.Content data-testid={SEGMENTED_CONTROL_CONTENT_TEST_ID}>
            <SegmentedControl.Indicator />
          </SegmentedControl.Content>
        </SegmentedControl>
      );
      expect(screen.getByTestId(SEGMENTED_CONTROL_CONTENT_TEST_ID)).toHaveStyle({
        '--segmented-control-items-count': '0',
        '--segmented-control-checked-item-index': '-1',
      });

      cleanup();

      render(
        <SegmentedControl>
          <SegmentedControl.Content data-testid={SEGMENTED_CONTROL_CONTENT_TEST_ID}>
            <SegmentedControl.Indicator />
            <SegmentedControl.Item value="react">
              <SegmentedControl.Label>React</SegmentedControl.Label>
            </SegmentedControl.Item>
            <SegmentedControl.Item value="vue">
              <SegmentedControl.Label>Vue</SegmentedControl.Label>
            </SegmentedControl.Item>
          </SegmentedControl.Content>
        </SegmentedControl>
      );
      expect(screen.getByTestId(SEGMENTED_CONTROL_CONTENT_TEST_ID)).toHaveStyle({
        '--segmented-control-items-count': '2',
        '--segmented-control-checked-item-index': '-1',
      });

      cleanup();

      render(
        <SegmentedControl defaultValue="react">
          <SegmentedControl.Content data-testid={SEGMENTED_CONTROL_CONTENT_TEST_ID}>
            <SegmentedControl.Indicator />
            <SegmentedControl.Item value="react">React</SegmentedControl.Item>
            <SegmentedControl.Item value="vue">Vue</SegmentedControl.Item>
          </SegmentedControl.Content>
        </SegmentedControl>
      );
      expect(screen.getByTestId(SEGMENTED_CONTROL_CONTENT_TEST_ID)).toHaveStyle({
        '--segmented-control-items-count': '2',
        '--segmented-control-checked-item-index': '0',
      });

      cleanup();

      render(
        <SegmentedControl value="react">
          <SegmentedControl.Content data-testid={SEGMENTED_CONTROL_CONTENT_TEST_ID}>
            <SegmentedControl.Indicator />
            <SegmentedControl.Item value="react">
              <SegmentedControl.Label>React</SegmentedControl.Label>
            </SegmentedControl.Item>
            <SegmentedControl.Item value="vue">
              <SegmentedControl.Label>Vue</SegmentedControl.Label>
            </SegmentedControl.Item>
          </SegmentedControl.Content>
        </SegmentedControl>
      );
      expect(screen.getByTestId(SEGMENTED_CONTROL_CONTENT_TEST_ID)).toHaveStyle({
        '--segmented-control-items-count': '2',
        '--segmented-control-checked-item-index': '0',
      });
    });

    it('should have style handed over by style property', () => {
      render(
        <SegmentedControl>
          <SegmentedControl.Content style={{ color: 'test' }} data-testid={SEGMENTED_CONTROL_CONTENT_TEST_ID}>
            {SEGMENTED_CONTROL_CONTENT_CONTENT}
          </SegmentedControl.Content>
        </SegmentedControl>
      );
      expect(screen.getByTestId(SEGMENTED_CONTROL_CONTENT_TEST_ID)).toHaveStyle({ color: 'test' });
    });

    it('should have class name handed over by className property', () => {
      const className = 'test';

      render(
        <SegmentedControl>
          <SegmentedControl.Content className={className} data-testid={SEGMENTED_CONTROL_CONTENT_TEST_ID}>
            {SEGMENTED_CONTROL_CONTENT_CONTENT}
          </SegmentedControl.Content>
        </SegmentedControl>
      );
      expect(screen.getByTestId(SEGMENTED_CONTROL_CONTENT_TEST_ID)).toHaveClass(className);
    });
  });

  describe('Indicator', () => {
    it('should support ref', () => {
      const ref = createRef<HTMLDivElement>();

      render(
        <SegmentedControl defaultValue="react">
          <SegmentedControl.Content>
            <SegmentedControl.Indicator ref={ref} data-testid={SEGMENTED_CONTROL_INDICATOR_TEST_ID} />
            <SegmentedControl.Item value="react">
              <SegmentedControl.Label>React</SegmentedControl.Label>
            </SegmentedControl.Item>
            <SegmentedControl.Item value="vue">
              <SegmentedControl.Label>Vue</SegmentedControl.Label>
            </SegmentedControl.Item>
          </SegmentedControl.Content>
        </SegmentedControl>
      );
      expect(ref.current).toBeInstanceOf(HTMLDivElement);
    });

    it('should be not render if checked item not exist', () => {
      render(
        <SegmentedControl>
          <SegmentedControl.Content>
            <SegmentedControl.Indicator data-testid={SEGMENTED_CONTROL_INDICATOR_TEST_ID} />
          </SegmentedControl.Content>
        </SegmentedControl>
      );
      expect(screen.queryByTestId(SEGMENTED_CONTROL_INDICATOR_TEST_ID)).not.toBeInTheDocument();
    });

    it('should be div element when asChild property not provided', () => {
      const { container } = render(
        <SegmentedControl defaultValue="react">
          <SegmentedControl.Content>
            <SegmentedControl.Indicator data-testid={SEGMENTED_CONTROL_INDICATOR_TEST_ID} />
            <SegmentedControl.Item value="react">
              <SegmentedControl.Label>React</SegmentedControl.Label>
            </SegmentedControl.Item>
            <SegmentedControl.Item value="vue">
              <SegmentedControl.Label>Vue</SegmentedControl.Label>
            </SegmentedControl.Item>
          </SegmentedControl.Content>
        </SegmentedControl>
      );

      expect(screen.getByTestId(SEGMENTED_CONTROL_INDICATOR_TEST_ID)).toBeInstanceOf(HTMLDivElement);
      // eslint-disable-next-line testing-library/no-container, testing-library/no-node-access
      expect(container.querySelector(`div[data-testid="${SEGMENTED_CONTROL_INDICATOR_TEST_ID}"]`)).toBeInTheDocument();
    });

    it('should be Slot element when asChild property provided', () => {
      const { container } = render(
        <SegmentedControl defaultValue="react">
          <SegmentedControl.Content>
            <SegmentedControl.Indicator asChild data-testid={SEGMENTED_CONTROL_INDICATOR_TEST_ID}>
              <span>{SEGMENTED_CONTROL_INDICATOR_CONTENT}</span>
            </SegmentedControl.Indicator>
            <SegmentedControl.Item value="react">
              <SegmentedControl.Label>React</SegmentedControl.Label>
            </SegmentedControl.Item>
            <SegmentedControl.Item value="vue">
              <SegmentedControl.Label>Vue</SegmentedControl.Label>
            </SegmentedControl.Item>
          </SegmentedControl.Content>
        </SegmentedControl>
      );

      expect(screen.getByTestId(SEGMENTED_CONTROL_INDICATOR_TEST_ID)).toBeInstanceOf(HTMLSpanElement);
      expect(
        // eslint-disable-next-line testing-library/no-container, testing-library/no-node-access
        container.querySelector(`div[data-testid="${SEGMENTED_CONTROL_INDICATOR_TEST_ID}"]`)
      ).not.toBeInTheDocument();
    });

    it('should have aria-hidden="true" attribute', () => {
      render(
        <SegmentedControl defaultValue="react">
          <SegmentedControl.Content>
            <SegmentedControl.Indicator data-testid={SEGMENTED_CONTROL_INDICATOR_TEST_ID} />
            <SegmentedControl.Item value="react">
              <SegmentedControl.Label>React</SegmentedControl.Label>
            </SegmentedControl.Item>
          </SegmentedControl.Content>
        </SegmentedControl>
      );
      expect(screen.getByTestId(SEGMENTED_CONTROL_INDICATOR_TEST_ID)).toHaveAttribute('aria-hidden', 'true');
    });

    it('should have role="presentation" attribute', () => {
      render(
        <SegmentedControl defaultValue="react">
          <SegmentedControl.Content>
            <SegmentedControl.Indicator data-testid={SEGMENTED_CONTROL_INDICATOR_TEST_ID} />
            <SegmentedControl.Item value="react">
              <SegmentedControl.Label>React</SegmentedControl.Label>
            </SegmentedControl.Item>
          </SegmentedControl.Content>
        </SegmentedControl>
      );
      expect(screen.getByTestId(SEGMENTED_CONTROL_INDICATOR_TEST_ID)).toHaveAttribute('role', 'presentation');
    });

    it('should have not data-disabled attribute when disabled property not provided on Root element', () => {
      render(
        <SegmentedControl disabled={false} defaultValue="react">
          <SegmentedControl.Content>
            <SegmentedControl.Indicator data-testid={SEGMENTED_CONTROL_INDICATOR_TEST_ID} />
            <SegmentedControl.Item value="react">
              <SegmentedControl.Label>React</SegmentedControl.Label>
            </SegmentedControl.Item>
          </SegmentedControl.Content>
        </SegmentedControl>
      );
      expect(screen.getByTestId(SEGMENTED_CONTROL_INDICATOR_TEST_ID)).not.toHaveAttribute('data-disabled');
    });

    it('should have data-disabled attribute when disabled property provided on Root element', () => {
      render(
        <SegmentedControl disabled={true} defaultValue="react">
          <SegmentedControl.Content>
            <SegmentedControl.Indicator data-testid={SEGMENTED_CONTROL_INDICATOR_TEST_ID} />
            <SegmentedControl.Item value="react">
              <SegmentedControl.Label>React</SegmentedControl.Label>
            </SegmentedControl.Item>
          </SegmentedControl.Content>
        </SegmentedControl>
      );
      expect(screen.getByTestId(SEGMENTED_CONTROL_INDICATOR_TEST_ID)).toHaveAttribute('data-disabled');
    });

    it('should have class name handed over by className property', () => {
      const className = 'test';

      render(
        <SegmentedControl defaultValue="react">
          <SegmentedControl.Content>
            <SegmentedControl.Indicator className={className} data-testid={SEGMENTED_CONTROL_INDICATOR_TEST_ID} />
            <SegmentedControl.Item value="react">
              <SegmentedControl.Label>React</SegmentedControl.Label>
            </SegmentedControl.Item>
          </SegmentedControl.Content>
        </SegmentedControl>
      );
      expect(screen.getByTestId(SEGMENTED_CONTROL_INDICATOR_TEST_ID)).toHaveClass(className);
    });
  });
});