import { createRef } from 'react';
import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { Code } from '.';

const CODE_TEST_ID = 'code-test-id';
const CODE_CONTENT = 'code';

describe('Code', () => {
  it('should support ref', () => {
    const ref = createRef<HTMLElement>();

    render(<Code ref={ref}>{CODE_CONTENT}</Code>);
    expect(ref.current).toBeInstanceOf(HTMLElement);
  });

  it('should be code element when asChild property not provided', () => {
    const { container } = render(<Code data-testid={CODE_TEST_ID}>{CODE_CONTENT}</Code>);

    expect(screen.getByTestId(CODE_TEST_ID)).toBeInstanceOf(HTMLElement);
    // eslint-disable-next-line testing-library/no-container, testing-library/no-node-access
    expect(container.querySelector(`code[data-testid="${CODE_TEST_ID}"]`)).toBeInTheDocument();
  });

  it('should be Slot element when asChild property provided', () => {
    const { container } = render(
      <Code asChild data-testid={CODE_TEST_ID}>
        <div>{CODE_CONTENT}</div>
      </Code>
    );

    expect(screen.getByTestId(CODE_TEST_ID)).toBeInstanceOf(HTMLDivElement);
    // eslint-disable-next-line testing-library/no-container, testing-library/no-node-access
    expect(container.querySelector(`code[data-testid="${CODE_TEST_ID}"]`)).not.toBeInTheDocument();
  });

  it('should have class name handed over by className property', () => {
    const className = 'test';

    render(<Code className={className}>{CODE_CONTENT}</Code>);
    expect(screen.getByText(CODE_CONTENT)).toHaveClass(className);
  });
});
