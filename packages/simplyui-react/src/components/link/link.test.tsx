import { createRef } from 'react';
import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { Link } from '.';

const LINK_TEST_ID = 'link-test-id';
const LINK_CONTENT = 'link';

describe('Link', () => {
  it('should support ref', () => {
    const ref = createRef<HTMLAnchorElement>();

    render(<Link ref={ref}>{LINK_CONTENT}</Link>);
    expect(ref.current).toBeInstanceOf(HTMLAnchorElement);
  });

  it('should be a element when asChild property not provided', () => {
    const { container } = render(<Link data-testid={LINK_TEST_ID}>{LINK_CONTENT}</Link>);

    expect(screen.getByTestId(LINK_TEST_ID)).toBeInstanceOf(HTMLAnchorElement);
    // eslint-disable-next-line testing-library/no-container, testing-library/no-node-access
    expect(container.querySelector(`a[data-testid="${LINK_TEST_ID}"]`)).toBeInTheDocument();
  });

  it('should be Slot element when asChild property provided', () => {
    const { container } = render(
      <Link asChild data-testid={LINK_TEST_ID}>
        <span>{LINK_CONTENT}</span>
      </Link>
    );

    expect(screen.getByTestId(LINK_TEST_ID)).toBeInstanceOf(HTMLSpanElement);
    // eslint-disable-next-line testing-library/no-container, testing-library/no-node-access
    expect(container.querySelector(`a[data-testid="${LINK_TEST_ID}"]`)).not.toBeInTheDocument();
  });

  it('should have not data-disabled and aria-disabled="true" attributes when disabled property not provided', () => {
    render(
      <Link disabled={false} href="#" data-testid={LINK_TEST_ID}>
        {LINK_CONTENT}
      </Link>
    );
    expect(screen.getByRole('link')).not.toHaveAttribute('data-disabled');
    expect(screen.getByRole('link')).not.toHaveAttribute('aria-disabled', 'true');
  });

  it('should have data-disabled and aria-disabled="true" attributes when disabled property provided', () => {
    render(
      <Link disabled={true} href="#" data-testid={LINK_TEST_ID}>
        {LINK_CONTENT}
      </Link>
    );
    expect(screen.getByRole('link')).toHaveAttribute('data-disabled');
    expect(screen.getByRole('link')).toHaveAttribute('aria-disabled', 'true');
  });

  it('should have not target="_blank" and rel="noopener noreferrer" attributes when external property not provided', () => {
    render(
      <Link external={false} href="#" data-testid={LINK_TEST_ID}>
        {LINK_CONTENT}
      </Link>
    );
    expect(screen.getByRole('link')).not.toHaveAttribute('target', '_blank');
    expect(screen.getByRole('link')).not.toHaveAttribute('rel', 'noopener noreferrer');
  });

  it('should have target="_blank" and rel="noopener noreferrer" attributes when external property provided', () => {
    render(
      <Link external={true} href="#" data-testid={LINK_TEST_ID}>
        {LINK_CONTENT}
      </Link>
    );
    expect(screen.getByRole('link')).toHaveAttribute('target', '_blank');
    expect(screen.getByRole('link')).toHaveAttribute('rel', 'noopener noreferrer');
  });

  it('should have class name handed over by className property', () => {
    const className = 'test';

    render(
      <Link className={className} href="#" data-testid={LINK_TEST_ID}>
        {LINK_CONTENT}
      </Link>
    );
    expect(screen.getByRole('link')).toHaveClass(className);
  });
});
