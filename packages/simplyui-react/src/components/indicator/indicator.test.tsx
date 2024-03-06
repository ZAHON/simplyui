import { createRef } from 'react';
import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { Indicator } from '.';

const INDICATOR_ROOT_TEST_ID = 'indicator-root-test-id';
const INDICATOR_DOT_TEST_ID = 'indicator-dot-test-id';

const INDICATOR_ROOT_CONTENT = 'indicator-root';

describe('Indicator', () => {
  describe('Root', () => {
    it('should support ref', () => {
      const ref = createRef<HTMLDivElement>();

      render(
        <Indicator ref={ref}>
          <Indicator.Dot />
        </Indicator>
      );

      expect(ref.current).toBeInstanceOf(HTMLDivElement);
    });

    it('should be div element when asChild property not provided', () => {
      const { container } = render(
        <Indicator data-testid={INDICATOR_ROOT_TEST_ID}>{INDICATOR_ROOT_CONTENT}</Indicator>
      );

      expect(screen.getByTestId(INDICATOR_ROOT_TEST_ID)).toBeInstanceOf(HTMLDivElement);
      // eslint-disable-next-line testing-library/no-container, testing-library/no-node-access
      expect(container.querySelector(`div[data-testid="${INDICATOR_ROOT_TEST_ID}"]`)).toBeInTheDocument();
    });

    it('should be Slot element when asChild property provided', () => {
      const { container } = render(
        <Indicator asChild data-testid={INDICATOR_ROOT_TEST_ID}>
          <span>{INDICATOR_ROOT_CONTENT}</span>
        </Indicator>
      );

      expect(screen.getByTestId(INDICATOR_ROOT_TEST_ID)).toBeInstanceOf(HTMLSpanElement);
      // eslint-disable-next-line testing-library/no-container, testing-library/no-node-access
      expect(container.querySelector(`div[data-testid="${INDICATOR_ROOT_TEST_ID}"]`)).not.toBeInTheDocument();
    });

    it('should have class name handed over by className property', () => {
      const className = 'test';

      render(
        <Indicator className={className} data-testid={INDICATOR_ROOT_TEST_ID}>
          {INDICATOR_ROOT_CONTENT}
        </Indicator>
      );
      expect(screen.getByTestId(INDICATOR_ROOT_TEST_ID)).toHaveClass(className);
    });
  });

  describe('Dot', () => {
    it('should support ref', () => {
      const ref = createRef<HTMLDivElement>();

      render(<Indicator.Dot ref={ref} />);
      expect(ref.current).toBeInstanceOf(HTMLDivElement);
    });

    it('should be div element when asChild property not provided', () => {
      const { container } = render(<Indicator.Dot data-testid={INDICATOR_DOT_TEST_ID} />);

      expect(screen.getByTestId(INDICATOR_DOT_TEST_ID)).toBeInstanceOf(HTMLDivElement);
      // eslint-disable-next-line testing-library/no-container, testing-library/no-node-access
      expect(container.querySelector(`div[data-testid="${INDICATOR_DOT_TEST_ID}"]`)).toBeInTheDocument();
    });

    it('should be Slot element when asChild property provided', () => {
      const { container } = render(
        <Indicator.Dot asChild data-testid={INDICATOR_DOT_TEST_ID}>
          <span />
        </Indicator.Dot>
      );

      expect(screen.getByTestId(INDICATOR_DOT_TEST_ID)).toBeInstanceOf(HTMLSpanElement);
      // eslint-disable-next-line testing-library/no-container, testing-library/no-node-access
      expect(container.querySelector(`div[data-testid="${INDICATOR_DOT_TEST_ID}"]`)).not.toBeInTheDocument();
    });

    it('should have aria-hidden="true" attribute', () => {
      render(<Indicator.Dot aria-hidden="true" data-testid={INDICATOR_DOT_TEST_ID} />);
      expect(screen.getByTestId(INDICATOR_DOT_TEST_ID)).toHaveAttribute('aria-hidden', 'true');
    });

    it('should have not data-disabled attribute when disabled property not provided', () => {
      render(<Indicator.Dot disabled={false} data-testid={INDICATOR_DOT_TEST_ID} />);
      expect(screen.getByTestId(INDICATOR_DOT_TEST_ID)).not.toHaveAttribute('data-disabled');
    });

    it('should have data-disabled attribute when disabled property provided', () => {
      render(<Indicator.Dot disabled={true} data-testid={INDICATOR_DOT_TEST_ID} />);
      expect(screen.getByTestId(INDICATOR_DOT_TEST_ID)).toHaveAttribute('data-disabled');
    });

    it('should have not data-processing attribute when processing property not provided', () => {
      render(<Indicator.Dot processing={false} data-testid={INDICATOR_DOT_TEST_ID} />);
      expect(screen.getByTestId(INDICATOR_DOT_TEST_ID)).not.toHaveAttribute('data-processing');
    });

    it('should have data-processing attribute when processing property provided', () => {
      render(<Indicator.Dot processing={true} data-testid={INDICATOR_DOT_TEST_ID} />);
      expect(screen.getByTestId(INDICATOR_DOT_TEST_ID)).toHaveAttribute('data-processing');
    });

    it('should support custom safe duration of the processing animation provided by processingSafeDuration property', () => {
      const processingSafeDuration = 100;

      render(<Indicator.Dot processingSafeDuration={processingSafeDuration} data-testid={INDICATOR_DOT_TEST_ID} />);
      expect(screen.getByTestId(INDICATOR_DOT_TEST_ID)).toHaveStyle(
        `--indicator-dot-processing-safe-duration: ${processingSafeDuration}ms`
      );
    });

    it('should support custom reduce duration of the processing animation provided by processingReduceDuration property', () => {
      const processingReduceDuration = 100;

      render(<Indicator.Dot processingReduceDuration={processingReduceDuration} data-testid={INDICATOR_DOT_TEST_ID} />);
      expect(screen.getByTestId(INDICATOR_DOT_TEST_ID)).toHaveStyle(
        `--indicator-dot-processing-reduce-duration: ${processingReduceDuration}ms`
      );
    });

    it('should have class name handed over by className property', () => {
      const className = 'test';

      render(<Indicator.Dot className={className} data-testid={INDICATOR_DOT_TEST_ID} />);
      expect(screen.getByTestId(INDICATOR_DOT_TEST_ID)).toHaveClass(className);
    });
  });
});
