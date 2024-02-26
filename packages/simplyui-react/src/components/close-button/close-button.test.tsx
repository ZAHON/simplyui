import { createRef } from 'react';
import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { CloseButton } from '.';

const CLOSE_BUTTON_ROOT_TEST_ID = 'close-button-root-test-id';
const CLOSE_BUTTON_ICON_TEST_ID = 'close-button-icon-test-id';

const CLOSE_BUTTON_ROOT_CONTENT = 'button-icon-test-id';

describe('CloseButton', () => {
  describe('Root', () => {
    it('should support ref', () => {
      const ref = createRef<HTMLButtonElement>();

      render(<CloseButton ref={ref}>{CLOSE_BUTTON_ROOT_CONTENT}</CloseButton>);
      expect(ref.current).toBeInstanceOf(HTMLButtonElement);
    });

    it('should be button element when asChild property not provided', () => {
      const { container } = render(
        <CloseButton data-testid={CLOSE_BUTTON_ROOT_TEST_ID}>{CLOSE_BUTTON_ROOT_CONTENT}</CloseButton>
      );

      expect(screen.getByTestId(CLOSE_BUTTON_ROOT_TEST_ID)).toBeInstanceOf(HTMLButtonElement);
      // eslint-disable-next-line testing-library/no-container, testing-library/no-node-access
      expect(container.querySelector(`button[data-testid="${CLOSE_BUTTON_ROOT_TEST_ID}"]`)).toBeInTheDocument();
    });

    it('should be Slot element when asChild property provided', () => {
      const { container } = render(
        <CloseButton asChild data-testid={CLOSE_BUTTON_ROOT_TEST_ID}>
          <div>{CLOSE_BUTTON_ROOT_CONTENT}</div>
        </CloseButton>
      );

      expect(screen.getByTestId(CLOSE_BUTTON_ROOT_TEST_ID)).toBeInstanceOf(HTMLDivElement);
      // eslint-disable-next-line testing-library/no-container, testing-library/no-node-access
      expect(container.querySelector(`button[data-testid="${CLOSE_BUTTON_ROOT_TEST_ID}"]`)).not.toBeInTheDocument();
    });

    it('should have not data-disabled attribute when disabled property not provided', () => {
      render(<CloseButton disabled={false}>{CLOSE_BUTTON_ROOT_CONTENT}</CloseButton>);
      expect(screen.getByRole('button')).not.toHaveAttribute('data-disabled');
    });

    it('should have data-disabled attribute when disabled property provided', () => {
      render(<CloseButton disabled={true}>{CLOSE_BUTTON_ROOT_CONTENT}</CloseButton>);
      expect(screen.getByRole('button')).toHaveAttribute('data-disabled');
    });

    it('should have class name handed over by className property', () => {
      const className = 'test';

      render(<CloseButton className={className}>{CLOSE_BUTTON_ROOT_CONTENT}</CloseButton>);
      expect(screen.getByRole('button')).toHaveClass(className);
    });
  });

  describe('Icon', () => {
    it('should support ref', () => {
      const ref = createRef<SVGSVGElement>();

      render(
        <CloseButton>
          <CloseButton.Icon ref={ref} data-testid={CLOSE_BUTTON_ICON_TEST_ID} />
        </CloseButton>
      );
      expect(ref.current).toBeInstanceOf(SVGSVGElement);
    });

    it('should have not data-disabled attribute when disabled property not provided on Root element', () => {
      render(
        <CloseButton disabled={false}>
          <CloseButton.Icon data-testid={CLOSE_BUTTON_ICON_TEST_ID} />
        </CloseButton>
      );
      expect(screen.getByTestId(CLOSE_BUTTON_ICON_TEST_ID)).not.toHaveAttribute('data-disabled');
    });

    it('should have data-disabled attribute when disabled property provided on Root element', () => {
      render(
        <CloseButton disabled={true}>
          <CloseButton.Icon data-testid={CLOSE_BUTTON_ICON_TEST_ID} />
        </CloseButton>
      );
      expect(screen.getByTestId(CLOSE_BUTTON_ICON_TEST_ID)).toHaveAttribute('data-disabled');
    });

    it('should have class name handed over by className property', () => {
      const className = 'test';

      render(
        <CloseButton disabled={true}>
          <CloseButton.Icon className={className} data-testid={CLOSE_BUTTON_ICON_TEST_ID} />
        </CloseButton>
      );
      expect(screen.getByTestId(CLOSE_BUTTON_ICON_TEST_ID)).toHaveClass(className);
    });
  });
});
