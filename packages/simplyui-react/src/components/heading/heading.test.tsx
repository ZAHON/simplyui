import { createRef } from 'react';
import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { Heading } from '.';

const HEADING_TEST_ID = 'heading-test-id';
const HEADING_CONTENT = 'Heading';

describe('Heading', () => {
  it('should support ref', () => {
    const ref = createRef<HTMLHeadingElement>();

    render(<Heading ref={ref}>{HEADING_CONTENT}</Heading>);
    expect(ref.current).toBeInstanceOf(HTMLHeadingElement);
  });

  it('should be h1 element when asChild property not provided', () => {
    const { container } = render(<Heading data-testid={HEADING_TEST_ID}>{HEADING_CONTENT}</Heading>);

    // eslint-disable-next-line testing-library/no-container, testing-library/no-node-access
    expect(container.querySelector(`h1[data-testid="${HEADING_TEST_ID}"]`)).toBeInTheDocument();
  });

  it('should be Slot element when asChild property provided', () => {
    const { container } = render(
      <Heading asChild data-testid={HEADING_TEST_ID}>
        <div>{HEADING_CONTENT}</div>
      </Heading>
    );

    expect(screen.getByTestId(HEADING_TEST_ID)).toBeInstanceOf(HTMLDivElement);
    // eslint-disable-next-line testing-library/no-container, testing-library/no-node-access
    expect(container.querySelector(`h1[data-testid="${HEADING_TEST_ID}"]`)).not.toBeInTheDocument();
  });

  it('should be h1 element when as property provided with h1 value', () => {
    const { container } = render(
      <Heading as="h1" data-testid={HEADING_TEST_ID}>
        {HEADING_CONTENT}
      </Heading>
    );

    // eslint-disable-next-line testing-library/no-container, testing-library/no-node-access
    expect(container.querySelector(`h1[data-testid="${HEADING_TEST_ID}"]`)).toBeInTheDocument();
  });

  it('should be h2 element when as property provided with h2 value', () => {
    const { container } = render(
      <Heading as="h2" data-testid={HEADING_TEST_ID}>
        {HEADING_CONTENT}
      </Heading>
    );

    // eslint-disable-next-line testing-library/no-container, testing-library/no-node-access
    expect(container.querySelector(`h2[data-testid="${HEADING_TEST_ID}"]`)).toBeInTheDocument();
  });

  it('should be h3 element when as property provided with h3 value', () => {
    const { container } = render(
      <Heading as="h3" data-testid={HEADING_TEST_ID}>
        {HEADING_CONTENT}
      </Heading>
    );

    // eslint-disable-next-line testing-library/no-container, testing-library/no-node-access
    expect(container.querySelector(`h3[data-testid="${HEADING_TEST_ID}"]`)).toBeInTheDocument();
  });

  it('should be h4 element when as property provided with h4 value', () => {
    const { container } = render(
      <Heading as="h4" data-testid={HEADING_TEST_ID}>
        {HEADING_CONTENT}
      </Heading>
    );

    // eslint-disable-next-line testing-library/no-container, testing-library/no-node-access
    expect(container.querySelector(`h4[data-testid="${HEADING_TEST_ID}"]`)).toBeInTheDocument();
  });

  it('should be h5 element when as property provided with h5 value', () => {
    const { container } = render(
      <Heading as="h5" data-testid={HEADING_TEST_ID}>
        {HEADING_CONTENT}
      </Heading>
    );

    // eslint-disable-next-line testing-library/no-container, testing-library/no-node-access
    expect(container.querySelector(`h5[data-testid="${HEADING_TEST_ID}"]`)).toBeInTheDocument();
  });

  it('should be h6 element when as property provided with h6 value', () => {
    const { container } = render(
      <Heading as="h6" data-testid={HEADING_TEST_ID}>
        {HEADING_CONTENT}
      </Heading>
    );

    // eslint-disable-next-line testing-library/no-container, testing-library/no-node-access
    expect(container.querySelector(`h6[data-testid="${HEADING_TEST_ID}"]`)).toBeInTheDocument();
  });

  it('should have class name handed over by className property', () => {
    const className = 'test';

    render(<Heading className={className}>{HEADING_CONTENT}</Heading>);
    expect(screen.getByText(HEADING_CONTENT)).toHaveClass(className);
  });
});
