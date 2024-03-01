import { createRef } from 'react';
import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { StatusDot } from '.';

const STATUS_DOT_TEST_ID = 'status-dot-test-id';
const STATUS_DOT_CONTENT = 'status-dot';

describe('StatusDot', () => {
  it('should support ref', () => {
    const ref = createRef<HTMLSpanElement>();

    render(<StatusDot ref={ref}>{STATUS_DOT_CONTENT}</StatusDot>);
    expect(ref.current).toBeInstanceOf(HTMLSpanElement);
  });

  it('should be span element when asChild property not provided', () => {
    const { container } = render(<StatusDot data-testid={STATUS_DOT_TEST_ID}>{STATUS_DOT_CONTENT}</StatusDot>);

    expect(screen.getByTestId(STATUS_DOT_TEST_ID)).toBeInstanceOf(HTMLSpanElement);
    // eslint-disable-next-line testing-library/no-container, testing-library/no-node-access
    expect(container.querySelector(`span[data-testid="${STATUS_DOT_TEST_ID}"]`)).toBeInTheDocument();
  });

  it('should be Slot element when asChild property provided', () => {
    const { container } = render(
      <StatusDot asChild data-testid={STATUS_DOT_TEST_ID}>
        <div>{STATUS_DOT_CONTENT}</div>
      </StatusDot>
    );

    expect(screen.getByTestId(STATUS_DOT_TEST_ID)).toBeInstanceOf(HTMLDivElement);
    // eslint-disable-next-line testing-library/no-container, testing-library/no-node-access
    expect(container.querySelector(`span[data-testid="${STATUS_DOT_TEST_ID}"]`)).not.toBeInTheDocument();
  });

  it('should have class name handed over by className property', () => {
    const className = 'test';

    render(<StatusDot className={className}>{STATUS_DOT_CONTENT}</StatusDot>);
    expect(screen.getByText(STATUS_DOT_CONTENT)).toHaveClass(className);
  });
});
