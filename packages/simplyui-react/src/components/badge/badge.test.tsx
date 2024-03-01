import { createRef } from 'react';
import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { Badge } from '.';

const BADGE_TEST_ID = 'badge-test-id';
const BADGE_CONTENT = 'badge';

describe('Badge', () => {
  it('should support ref', () => {
    const ref = createRef<HTMLSpanElement>();

    render(<Badge ref={ref}>{BADGE_CONTENT}</Badge>);
    expect(ref.current).toBeInstanceOf(HTMLSpanElement);
  });

  it('should be span element when asChild property not provided', () => {
    const { container } = render(<Badge data-testid={BADGE_TEST_ID}>{BADGE_CONTENT}</Badge>);

    expect(screen.getByTestId(BADGE_TEST_ID)).toBeInstanceOf(HTMLSpanElement);
    // eslint-disable-next-line testing-library/no-container, testing-library/no-node-access
    expect(container.querySelector(`span[data-testid="${BADGE_TEST_ID}"]`)).toBeInTheDocument();
  });

  it('should be Slot element when asChild property provided', () => {
    const { container } = render(
      <Badge asChild data-testid={BADGE_TEST_ID}>
        <div>{BADGE_CONTENT}</div>
      </Badge>
    );

    expect(screen.getByTestId(BADGE_TEST_ID)).toBeInstanceOf(HTMLDivElement);
    // eslint-disable-next-line testing-library/no-container, testing-library/no-node-access
    expect(container.querySelector(`span[data-testid="${BADGE_TEST_ID}"]`)).not.toBeInTheDocument();
  });

  it('should have class name handed over by className property', () => {
    const className = 'test';

    render(<Badge className={className}>{BADGE_CONTENT}</Badge>);
    expect(screen.getByText(BADGE_CONTENT)).toHaveClass(className);
  });
});
