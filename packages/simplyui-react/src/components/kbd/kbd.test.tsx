import { createRef } from 'react';
import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { Kbd } from '.';

const KBD_TEST_ID = 'kbd-test-id';
const KBD_CONTENT = 'kbd';

describe('Kbd', () => {
  it('should support ref', () => {
    const ref = createRef<HTMLElement>();

    render(<Kbd ref={ref}>{KBD_CONTENT}</Kbd>);
    expect(ref.current).toBeInstanceOf(HTMLElement);
  });

  it('should be kbd element when asChild property not provided', () => {
    const { container } = render(<Kbd data-testid={KBD_TEST_ID}>{KBD_CONTENT}</Kbd>);

    expect(screen.getByTestId(KBD_TEST_ID)).toBeInstanceOf(HTMLElement);
    // eslint-disable-next-line testing-library/no-container, testing-library/no-node-access
    expect(container.querySelector(`kbd[data-testid="${KBD_TEST_ID}"]`)).toBeInTheDocument();
  });

  it('should be Slot element when asChild property provided', () => {
    const { container } = render(
      <Kbd asChild data-testid={KBD_TEST_ID}>
        <div>{KBD_CONTENT}</div>
      </Kbd>
    );

    expect(screen.getByTestId(KBD_TEST_ID)).toBeInstanceOf(HTMLDivElement);
    // eslint-disable-next-line testing-library/no-container, testing-library/no-node-access
    expect(container.querySelector(`kbd[data-testid="${KBD_TEST_ID}"]`)).not.toBeInTheDocument();
  });

  it('should have class name handed over by className property', () => {
    const className = 'test';

    render(<Kbd className={className}>{KBD_CONTENT}</Kbd>);
    expect(screen.getByText(KBD_CONTENT)).toHaveClass(className);
  });
});
