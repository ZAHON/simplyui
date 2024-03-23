import { createRef } from 'react';
import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { NativeScrollArea } from '.';

const NATIVE_SCROLL_AREA_TEST_ID = 'native-scroll-area-test-id';
const NATIVE_SCROLL_AREA_CONTENT = 'native-scroll-area';

describe('NativeScrollArea', () => {
  it('should support ref', () => {
    const ref = createRef<HTMLDivElement>();

    render(<NativeScrollArea ref={ref}>{NATIVE_SCROLL_AREA_CONTENT}</NativeScrollArea>);
    expect(ref.current).toBeInstanceOf(HTMLDivElement);
  });

  it('should be div element when asChild property not provided', () => {
    const { container } = render(
      <NativeScrollArea data-testid={NATIVE_SCROLL_AREA_TEST_ID}>{NATIVE_SCROLL_AREA_CONTENT}</NativeScrollArea>
    );

    expect(screen.getByTestId(NATIVE_SCROLL_AREA_TEST_ID)).toBeInstanceOf(HTMLDivElement);
    // eslint-disable-next-line testing-library/no-container, testing-library/no-node-access
    expect(container.querySelector(`div[data-testid="${NATIVE_SCROLL_AREA_TEST_ID}"]`)).toBeInTheDocument();
  });

  it('should be Slot element when asChild property provided', () => {
    const { container } = render(
      <NativeScrollArea asChild data-testid={NATIVE_SCROLL_AREA_TEST_ID}>
        <span>{NATIVE_SCROLL_AREA_CONTENT}</span>
      </NativeScrollArea>
    );

    expect(screen.getByTestId(NATIVE_SCROLL_AREA_TEST_ID)).toBeInstanceOf(HTMLSpanElement);
    // eslint-disable-next-line testing-library/no-container, testing-library/no-node-access
    expect(container.querySelector(`div[data-testid="${NATIVE_SCROLL_AREA_TEST_ID}"]`)).not.toBeInTheDocument();
  });

  it('should have class name handed over by className property', () => {
    const className = 'test';

    render(<NativeScrollArea className={className}>{NATIVE_SCROLL_AREA_CONTENT}</NativeScrollArea>);
    expect(screen.getByText(NATIVE_SCROLL_AREA_CONTENT)).toHaveClass(className);
  });
});
