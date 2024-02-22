// import type { ButtonRootProps, ButtonContentProps, ButtonLoaderProps } from '.';
import { createRef } from 'react';
import { describe, it, expect } from 'vitest';
import { render } from '@testing-library/react';
import { Button } from '.';

describe('Button', () => {
  describe('Root', () => {
    it('should support ref', () => {
      const ref = createRef<HTMLButtonElement>();

      render(<Button ref={ref}>Test</Button>);
      expect(ref.current).toBeInstanceOf(HTMLButtonElement);
    });
  });
});
