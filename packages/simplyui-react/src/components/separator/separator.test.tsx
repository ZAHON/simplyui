import { createRef } from 'react';
import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { Separator } from '.';

const SEPARATOR_TEST_ID = 'separator-test-id';

describe('Separator', () => {
  it('should support ref', () => {
    const ref = createRef<HTMLDivElement>();

    render(<Separator ref={ref} />);
    expect(ref.current).toBeInstanceOf(HTMLDivElement);
  });

  it('should be div element when asChild property not provided', () => {
    const { container } = render(<Separator data-testid={SEPARATOR_TEST_ID} />);

    expect(screen.getByTestId(SEPARATOR_TEST_ID)).toBeInstanceOf(HTMLDivElement);
    // eslint-disable-next-line testing-library/no-container, testing-library/no-node-access
    expect(container.querySelector(`div[data-testid="${SEPARATOR_TEST_ID}"]`)).toBeInTheDocument();
  });

  it('should be Slot element when asChild property provided', () => {
    const { container } = render(
      <Separator asChild data-testid={SEPARATOR_TEST_ID}>
        <span />
      </Separator>
    );

    expect(screen.getByTestId(SEPARATOR_TEST_ID)).toBeInstanceOf(HTMLSpanElement);
    // eslint-disable-next-line testing-library/no-container, testing-library/no-node-access
    expect(container.querySelector(`div[data-testid="${SEPARATOR_TEST_ID}"]`)).not.toBeInTheDocument();
  });

  it('should have not aria-orientation attribute when decorative={true}', () => {
    render(<Separator decorative={true} data-testid={SEPARATOR_TEST_ID} />);
    expect(screen.getByTestId(SEPARATOR_TEST_ID)).not.toHaveAttribute('aria-orientation');
  });

  it('should have not aria-orientation attribute when decorative={false} and orientation="horizontal"', () => {
    render(<Separator decorative={false} orientation="horizontal" data-testid={SEPARATOR_TEST_ID} />);
    expect(screen.getByTestId(SEPARATOR_TEST_ID)).not.toHaveAttribute('aria-orientation');
  });

  it('should have not aria-orientation="vertical" attribute when decorative={false} and orientation="vertical"', () => {
    render(<Separator decorative={false} orientation="vertical" data-testid={SEPARATOR_TEST_ID} />);
    expect(screen.getByTestId(SEPARATOR_TEST_ID)).toHaveAttribute('aria-orientation', 'vertical');
  });

  it('should have data-orientation="horizontal" attribute when orientation="horizontal"', () => {
    render(<Separator orientation="horizontal" data-testid={SEPARATOR_TEST_ID} />);
    expect(screen.getByTestId(SEPARATOR_TEST_ID)).toHaveAttribute('data-orientation', 'horizontal');
  });

  it('should have data-orientation="vertical" attribute when orientation="vertical"', () => {
    render(<Separator orientation="vertical" data-testid={SEPARATOR_TEST_ID} />);
    expect(screen.getByTestId(SEPARATOR_TEST_ID)).toHaveAttribute('data-orientation', 'vertical');
  });

  it('should have role="separator" attribute when decorative={false}', () => {
    render(<Separator decorative={false} data-testid={SEPARATOR_TEST_ID} />);
    expect(screen.getByTestId(SEPARATOR_TEST_ID)).toHaveAttribute('role', 'separator');
  });

  it('should have role="none" attribute when decorative={true}', () => {
    render(<Separator decorative={true} data-testid={SEPARATOR_TEST_ID} />);
    expect(screen.getByTestId(SEPARATOR_TEST_ID)).toHaveAttribute('role', 'none');
  });

  it('should have class name handed over by className property', () => {
    const className = 'test';

    render(<Separator className={className} data-testid={SEPARATOR_TEST_ID} />);
    expect(screen.getByTestId(SEPARATOR_TEST_ID)).toHaveClass(className);
  });
});
