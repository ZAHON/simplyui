import type { LoaderProps } from './loader.types';
import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { Loader } from './loader';

describe('Loader', () => {
  describe('Variant dots', () => {
    function LoaderVariantDotsTest(props: Omit<LoaderProps, 'variant'>) {
      return <Loader variant="dots" {...props} />;
    }

    it('should have role="status"', () => {
      render(<LoaderVariantDotsTest />);
      expect(screen.getByRole('status')).toBeInTheDocument();
    });

    it('should support custom size provided by loaderSize property', () => {
      const loaderSize = '5rem';

      render(<LoaderVariantDotsTest loaderSize={loaderSize} />);
      expect(screen.getByRole('status')).toHaveStyle(`--loader-size: ${loaderSize}`);
    });

    it('should support custom safe animation speed provided by speedSafe property', () => {
      const speedSafe = 100;

      render(<LoaderVariantDotsTest speedSafe={speedSafe} />);
      expect(screen.getByRole('status')).toHaveStyle(`--loader-safe-animation-duration: ${speedSafe}ms`);
    });

    it('should support custom reduce animation speed provided by speedReduce property', () => {
      const speedReduce = 1000;

      render(<LoaderVariantDotsTest speedReduce={speedReduce} />);
      expect(screen.getByRole('status')).toHaveStyle(`--loader-reduce-animation-duration: ${speedReduce}ms`);
    });

    it('should have fallback text provided by label property', () => {
      const label = 'Loading...';

      render(<LoaderVariantDotsTest label={label} />);
      expect(screen.getByText(label)).toBeInTheDocument();
    });

    it('should have class name handed over by className property', () => {
      const className = 'test';

      render(<LoaderVariantDotsTest className={className} />);
      expect(screen.getByRole('status')).toHaveClass(className);
    });
  });

  describe('Variant Oval', () => {
    function LoaderVariantOvalTest(props: Omit<LoaderProps, 'variant'>) {
      return <Loader variant="oval" {...props} />;
    }

    it('should have role="status"', () => {
      render(<LoaderVariantOvalTest />);
      expect(screen.getByRole('status')).toBeInTheDocument();
    });

    it('should support custom size provided by loaderSize property', () => {
      const loaderSize = '5rem';

      render(<LoaderVariantOvalTest loaderSize={loaderSize} />);
      expect(screen.getByRole('status')).toHaveStyle(`--loader-size: ${loaderSize}`);
    });

    it('should support custom safe animation speed provided by speedSafe property', () => {
      const speedSafe = 100;

      render(<LoaderVariantOvalTest speedSafe={speedSafe} />);
      expect(screen.getByRole('status')).toHaveStyle(`--loader-safe-animation-duration: ${speedSafe}ms`);
    });

    it('should support custom reduce animation speed provided by speedReduce property', () => {
      const speedReduce = 1000;

      render(<LoaderVariantOvalTest speedReduce={speedReduce} />);
      expect(screen.getByRole('status')).toHaveStyle(`--loader-reduce-animation-duration: ${speedReduce}ms`);
    });

    it('should have fallback text provided by label property', () => {
      const label = 'Loading...';

      render(<LoaderVariantOvalTest label={label} />);
      expect(screen.getByText(label)).toBeInTheDocument();
    });

    it('should have class name handed over by className property', () => {
      const className = 'test';

      render(<LoaderVariantOvalTest className={className} />);
      expect(screen.getByRole('status')).toHaveClass(className);
    });
  });
});
