import { createRef } from 'react';
import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { Loader } from './loader';

describe('Loader', () => {
  describe('Variant dots', () => {
    it('should support ref', () => {
      const ref = createRef<HTMLDivElement>();

      render(<Loader ref={ref} variant="dots" />);
      expect(ref.current).toBeInstanceOf(HTMLDivElement);
    });

    it('should have role="status" attribute', () => {
      render(<Loader variant="dots" />);
      expect(screen.getByRole('status')).toBeInTheDocument();
    });

    it('should support custom size provided by loaderSize property', () => {
      const loaderSize = '5rem';

      render(<Loader loaderSize={loaderSize} variant="dots" />);
      expect(screen.getByRole('status')).toHaveStyle(`--loader-size: ${loaderSize}`);
    });

    it('should support custom reduce animation speed provided by speedReduce property', () => {
      const speedReduce = 1000;

      render(<Loader speedReduce={speedReduce} variant="dots" />);
      expect(screen.getByRole('status')).toHaveStyle(`--loader-reduce-animation-duration: ${speedReduce}ms`);
    });

    it('should support custom safe animation speed provided by speedSafe property', () => {
      const speedSafe = 100;

      render(<Loader speedSafe={speedSafe} variant="dots" />);
      expect(screen.getByRole('status')).toHaveStyle(`--loader-safe-animation-duration: ${speedSafe}ms`);
    });

    it('should have visually hidden fallback text provided by label property', () => {
      const label = 'Loading...';

      render(<Loader label={label} variant="dots" />);
      expect(screen.getByText(label)).toBeInTheDocument();
      expect(screen.getByText(label)).toHaveClass('sr-only');
    });

    it('should have class name handed over by className property', () => {
      const className = 'test';

      render(<Loader className={className} variant="dots" />);
      expect(screen.getByRole('status')).toHaveClass(className);
    });
  });

  describe('Variant oval', () => {
    it('should support ref', () => {
      const ref = createRef<HTMLDivElement>();

      render(<Loader ref={ref} variant="oval" />);
      expect(ref.current).toBeInstanceOf(HTMLDivElement);
    });

    it('should have role="status" attribute', () => {
      render(<Loader variant="oval" />);
      expect(screen.getByRole('status')).toBeInTheDocument();
    });

    it('should support custom size provided by loaderSize property', () => {
      const loaderSize = '5rem';

      render(<Loader loaderSize={loaderSize} variant="oval" />);
      expect(screen.getByRole('status')).toHaveStyle(`--loader-size: ${loaderSize}`);
    });

    it('should support custom reduce animation speed provided by speedReduce property', () => {
      const speedReduce = 1000;

      render(<Loader speedReduce={speedReduce} variant="oval" />);
      expect(screen.getByRole('status')).toHaveStyle(`--loader-reduce-animation-duration: ${speedReduce}ms`);
    });

    it('should support custom safe animation speed provided by speedSafe property', () => {
      const speedSafe = 100;

      render(<Loader speedSafe={speedSafe} variant="oval" />);
      expect(screen.getByRole('status')).toHaveStyle(`--loader-safe-animation-duration: ${speedSafe}ms`);
    });

    it('should have visually hidden fallback text provided by label property', () => {
      const label = 'Loading...';

      render(<Loader label={label} variant="oval" />);
      expect(screen.getByText(label)).toBeInTheDocument();
      expect(screen.getByText(label)).toHaveClass('sr-only');
    });

    it('should have class name handed over by className property', () => {
      const className = 'test';

      render(<Loader className={className} variant="oval" />);
      expect(screen.getByRole('status')).toHaveClass(className);
    });
  });
});
