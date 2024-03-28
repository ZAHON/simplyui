import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { AccessibleIcon } from '.';

const ICON_TEST_ID = 'icon-test-id';

describe('AccessibleIcon', () => {
  it('should add aria-hidden="true" attribute to the child', () => {
    render(
      <AccessibleIcon>
        <svg data-testid={ICON_TEST_ID} />
      </AccessibleIcon>
    );

    expect(screen.getByTestId(ICON_TEST_ID)).toHaveAttribute('aria-hidden', 'true');
  });

  it('should add focusable="false" attribute on the child', () => {
    render(
      <AccessibleIcon>
        <svg data-testid={ICON_TEST_ID} />
      </AccessibleIcon>
    );
    expect(screen.getByTestId(ICON_TEST_ID)).toHaveAttribute('focusable', 'false');
  });

  it('should not add aria-label attribute on the child when label not provided', () => {
    render(
      <AccessibleIcon>
        <svg data-testid={ICON_TEST_ID} />
      </AccessibleIcon>
    );
    expect(screen.getByTestId(ICON_TEST_ID)).not.toHaveAttribute('aria-label');
  });

  it('should add aria-label attribute on the child when label provided', () => {
    render(
      <AccessibleIcon label="test">
        <svg data-testid={ICON_TEST_ID} />
      </AccessibleIcon>
    );
    expect(screen.getByTestId(ICON_TEST_ID)).toHaveAttribute('aria-label', 'test');
  });
});
