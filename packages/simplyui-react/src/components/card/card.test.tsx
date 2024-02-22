import type { CardProps } from '.';
import { createRef } from 'react';
import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { Card } from '.';

const CARD_TEST_ID = 'card-test-id';
const CARD_CONTENT = 'cARD';

function CardTest(props: Partial<CardProps>) {
  return (
    <Card data-testid={CARD_TEST_ID} {...props}>
      {CARD_CONTENT}
    </Card>
  );
}

describe('Card', () => {
  it('should support ref', () => {
    const ref = createRef<HTMLDivElement>();

    render(<Card ref={ref}>{CARD_CONTENT}</Card>);
    expect(ref.current).toBeInstanceOf(HTMLDivElement);
  });

  it('should be div element when asChild property not provided', () => {
    const { container } = render(<CardTest />);

    expect(screen.getByTestId(CARD_TEST_ID)).toBeInstanceOf(HTMLDivElement);
    // eslint-disable-next-line testing-library/no-container, testing-library/no-node-access
    expect(container.querySelector(`div[data-testid="${CARD_TEST_ID}"]`)).toBeInTheDocument();
  });

  it('should be Slot element when asChild property provided', () => {
    const { container } = render(
      <Card asChild data-testid={CARD_TEST_ID}>
        <span>{CARD_CONTENT}</span>
      </Card>
    );

    expect(screen.getByTestId(CARD_TEST_ID)).toBeInstanceOf(HTMLSpanElement);
    // eslint-disable-next-line testing-library/no-container, testing-library/no-node-access
    expect(container.querySelector(`div[data-testid="${CARD_TEST_ID}"]`)).not.toBeInTheDocument();
  });

  it('should have class name handed over by className property', () => {
    const className = 'test';

    render(<CardTest className={className} />);
    expect(screen.getByText(CARD_CONTENT)).toHaveClass(className);
  });
});
