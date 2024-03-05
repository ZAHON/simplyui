import { createRef } from 'react';
import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { Input } from '.';

const INPUT_TEST_ID = 'input-test-id';

describe('Input', () => {
  it('should support ref', () => {
    const ref = createRef<HTMLInputElement>();

    render(<Input ref={ref} />);
    expect(ref.current).toBeInstanceOf(HTMLInputElement);
  });

  it('should be not disabled when disabled property not provided', () => {
    render(<Input disabled={false} data-testid={INPUT_TEST_ID} />);
    expect(screen.getByTestId(INPUT_TEST_ID)).toBeEnabled();
  });

  it('should be disabled when disabled property provided', () => {
    render(<Input disabled={true} data-testid={INPUT_TEST_ID} />);
    expect(screen.getByTestId(INPUT_TEST_ID)).toBeDisabled();
  });

  it('should have not data-disabled attribute when disabled property not provided', () => {
    render(<Input disabled={false} data-testid={INPUT_TEST_ID} />);
    expect(screen.getByTestId(INPUT_TEST_ID)).not.toHaveAttribute('data-disabled');
  });

  it('should have data-disabled attribute when disabled property provided', () => {
    render(<Input disabled={true} data-testid={INPUT_TEST_ID} />);
    expect(screen.getByTestId(INPUT_TEST_ID)).toHaveAttribute('data-disabled');
  });

  it('should be not invalid when invalid property not provided', () => {
    render(<Input invalid={false} data-testid={INPUT_TEST_ID} />);
    expect(screen.getByTestId(INPUT_TEST_ID)).toBeValid();
  });

  it('should be invalid when invalid property provided', () => {
    render(<Input invalid={true} data-testid={INPUT_TEST_ID} />);
    expect(screen.getByTestId(INPUT_TEST_ID)).toBeInvalid();
  });

  it('should have not data-invalid attribute when invalid property not provided', () => {
    render(<Input invalid={false} data-testid={INPUT_TEST_ID} />);
    expect(screen.getByTestId(INPUT_TEST_ID)).not.toHaveAttribute('data-invalid');
  });

  it('should have data-invalid attribute when invalid property provided', () => {
    render(<Input invalid={true} data-testid={INPUT_TEST_ID} />);
    expect(screen.getByTestId(INPUT_TEST_ID)).toHaveAttribute('data-invalid');
  });

  it('should be not required when required property not provided', () => {
    render(<Input required={false} data-testid={INPUT_TEST_ID} />);
    expect(screen.getByTestId(INPUT_TEST_ID)).not.toBeRequired();
  });

  it('should be required when required property provided', () => {
    render(<Input required={true} data-testid={INPUT_TEST_ID} />);
    expect(screen.getByTestId(INPUT_TEST_ID)).toBeRequired();
  });

  it('should have class name handed over by className property', () => {
    const className = 'test';

    render(<Input className={className} data-testid={INPUT_TEST_ID} />);
    expect(screen.getByTestId(INPUT_TEST_ID)).toHaveClass(className);
  });
});
