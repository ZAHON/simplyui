import type { IndicatorRootProps, IndicatorDotProps } from '.';
import { createRef } from 'react';
import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { Indicator } from '.';

describe('Indicator', () => {
  describe('IndicatorRoot', () => {
    const indicatorRootTestid = 'indicator-root';

    function IndicatorRootTest(props: Partial<IndicatorRootProps>) {
      return (
        <Indicator data-testid={indicatorRootTestid} {...props}>
          <Indicator.Dot />
        </Indicator>
      );
    }

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
      const { container } = render(<IndicatorRootTest />);

      expect(screen.getByTestId(indicatorRootTestid)).toBeInstanceOf(HTMLDivElement);
      // eslint-disable-next-line testing-library/no-container, testing-library/no-node-access
      expect(container.querySelector(`div[data-testid="${indicatorRootTestid}"]`)).toBeInTheDocument();
    });

    it('should be Slot element when asChild property provided', () => {
      const { container } = render(
        <Indicator asChild data-testid={indicatorRootTestid}>
          <span>
            <Indicator.Dot />
          </span>
        </Indicator>
      );

      expect(screen.getByTestId(indicatorRootTestid)).toBeInstanceOf(HTMLSpanElement);
      // eslint-disable-next-line testing-library/no-container, testing-library/no-node-access
      expect(container.querySelector(`div[data-testid="${indicatorRootTestid}"]`)).not.toBeInTheDocument();
    });

    it('should have class name handed over by className property', () => {
      const className = 'test';

      render(<IndicatorRootTest className={className} />);
      expect(screen.getByTestId(indicatorRootTestid)).toHaveClass(className);
    });
  });

  describe('IndicatorDot', () => {
    const indicatorDotTestid = 'indicator-root';

    function IndicatorDotTest(props: Partial<IndicatorDotProps>) {
      return <Indicator.Dot data-testid={indicatorDotTestid} {...props} />;
    }

    it('should support ref', () => {
      const ref = createRef<HTMLDivElement>();

      render(<Indicator.Dot ref={ref} />);
      expect(ref.current).toBeInstanceOf(HTMLDivElement);
    });

    it('should be div element when asChild property not provided', () => {
      const { container } = render(<IndicatorDotTest />);

      expect(screen.getByTestId(indicatorDotTestid)).toBeInstanceOf(HTMLDivElement);
      // eslint-disable-next-line testing-library/no-container, testing-library/no-node-access
      expect(container.querySelector(`div[data-testid="${indicatorDotTestid}"]`)).toBeInTheDocument();
    });

    it('should be Slot element when asChild property provided', () => {
      const { container } = render(
        <Indicator.Dot asChild data-testid={indicatorDotTestid}>
          <span />
        </Indicator.Dot>
      );

      expect(screen.getByTestId(indicatorDotTestid)).toBeInstanceOf(HTMLSpanElement);
      // eslint-disable-next-line testing-library/no-container, testing-library/no-node-access
      expect(container.querySelector(`div[data-testid="${indicatorDotTestid}"]`)).not.toBeInTheDocument();
    });

    it('should have not data-disabled attribute when disabled property not provided', () => {
      render(<IndicatorDotTest disabled={false} />);
      expect(screen.getByTestId(indicatorDotTestid)).not.toHaveAttribute('data-disabled');
    });

    it('should have data-disabled attribute when disabled property provided', () => {
      render(<IndicatorDotTest disabled={true} />);
      expect(screen.getByTestId(indicatorDotTestid)).toHaveAttribute('data-disabled');
    });

    it('should have not data-processing attribute when processing property not provided', () => {
      render(<IndicatorDotTest processing={false} />);
      expect(screen.getByTestId(indicatorDotTestid)).not.toHaveAttribute('data-processing');
    });

    it('should have data-processing attribute when processing property provided', () => {
      render(<IndicatorDotTest processing={true} />);
      expect(screen.getByTestId(indicatorDotTestid)).toHaveAttribute('data-processing');
    });

    it('should support custom safe duration of the processing animation provided by processingSafeDuration property', () => {
      const processingSafeDuration = 100;

      render(<IndicatorDotTest processingSafeDuration={processingSafeDuration} />);
      expect(screen.getByTestId(indicatorDotTestid)).toHaveStyle(
        `--indicator-dot-processing-safe-duration: ${processingSafeDuration}ms`
      );
    });

    it('should support custom reduce duration of the processing animation provided by processingReduceDuration property', () => {
      const processingReduceDuration = 100;

      render(<IndicatorDotTest processingReduceDuration={processingReduceDuration} />);
      expect(screen.getByTestId(indicatorDotTestid)).toHaveStyle(
        `--indicator-dot-processing-reduce-duration: ${processingReduceDuration}ms`
      );
    });

    it('should have class name handed over by className property', () => {
      const className = 'test';

      render(<IndicatorDotTest className={className} />);
      expect(screen.getByTestId(indicatorDotTestid)).toHaveClass(className);
    });
  });
});
