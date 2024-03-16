import { createRef } from 'react';
import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { Text } from '.';

const TEXT_CONTENT = 'text';

describe('Text', () => {
  it('should be p element by default', () => {
    const ref = createRef<HTMLParagraphElement>();

    render(<Text ref={ref}>{TEXT_CONTENT}</Text>);
    expect(ref.current).toBeInstanceOf(HTMLParagraphElement);
  });

  it('should be p element when as property provided with p value', () => {
    const ref = createRef<HTMLParagraphElement>();

    render(
      <Text as="p" ref={ref}>
        {TEXT_CONTENT}
      </Text>
    );
    expect(ref.current).toBeInstanceOf(HTMLParagraphElement);
  });

  it('should be span element when as property provided with span value', () => {
    const ref = createRef<HTMLSpanElement>();

    render(
      <Text as="span" ref={ref}>
        {TEXT_CONTENT}
      </Text>
    );
    expect(ref.current).toBeInstanceOf(HTMLSpanElement);
  });

  it('should be div element when as property provided with div value', () => {
    const ref = createRef<HTMLDivElement>();

    render(
      <Text as="div" ref={ref}>
        {TEXT_CONTENT}
      </Text>
    );
    expect(ref.current).toBeInstanceOf(HTMLDivElement);
  });

  it('should be Slot element when asChild property provided', () => {
    const ref = createRef<HTMLLabelElement>();

    render(
      <Text asChild ref={ref}>
        <label>{TEXT_CONTENT}</label>
      </Text>
    );
    expect(ref.current).toBeInstanceOf(HTMLLabelElement);
  });

  it('should have class name handed over by className property', () => {
    const className = 'test';

    render(<Text className={className}>{TEXT_CONTENT}</Text>);
    expect(screen.getByText(TEXT_CONTENT)).toHaveClass(className);
  });
});
