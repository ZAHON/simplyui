import { createRef } from 'react';
import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import * as Label from '.';

const LABEL_ROOT_TEST_ID = 'label-root-test-id';
const LABEL_INDICATOR_TEST_ID = 'label-indicator-test-id';

const LABEL_ROOT_CONTENT = 'label-root';
const LABEL_INDICATOR_CONTENT = 'label-indicator';

describe('Label', () => {
  describe('Root', () => {
    it('should support ref', () => {
      const ref = createRef<HTMLLabelElement>();

      render(<Label.Root ref={ref}>{LABEL_ROOT_CONTENT}</Label.Root>);
      expect(ref.current).toBeInstanceOf(HTMLLabelElement);
    });

    it('should be label element when asChild property not provided', () => {
      const { container } = render(<Label.Root data-testid={LABEL_ROOT_TEST_ID}>{LABEL_ROOT_CONTENT}</Label.Root>);

      expect(screen.getByTestId(LABEL_ROOT_TEST_ID)).toBeInstanceOf(HTMLLabelElement);
      // eslint-disable-next-line testing-library/no-container, testing-library/no-node-access
      expect(container.querySelector(`label[data-testid="${LABEL_ROOT_TEST_ID}"]`)).toBeInTheDocument();
    });

    it('should be Slot element when asChild property provided', () => {
      const { container } = render(
        <Label.Root asChild data-testid={LABEL_ROOT_TEST_ID}>
          <p>{LABEL_ROOT_CONTENT}</p>
        </Label.Root>
      );

      expect(screen.getByTestId(LABEL_ROOT_TEST_ID)).toBeInstanceOf(HTMLParagraphElement);
      // eslint-disable-next-line testing-library/no-container, testing-library/no-node-access
      expect(container.querySelector(`label[data-testid="${LABEL_ROOT_TEST_ID}"]`)).not.toBeInTheDocument();
    });

    it('should prevent text selection when double clicking', async () => {
      const user = userEvent.setup();
      render(<Label.Root>{LABEL_ROOT_CONTENT}</Label.Root>);

      const labelElement = screen.getByText(LABEL_ROOT_CONTENT);
      await user.dblClick(labelElement);

      const clipboard = await user.copy();
      expect(clipboard).toBeUndefined();
    });

    it('should have not data-disabled attribute when disabled property not provided', () => {
      render(<Label.Root disabled={false}>{LABEL_ROOT_CONTENT}</Label.Root>);
      expect(screen.getByText(LABEL_ROOT_CONTENT)).not.toHaveAttribute('data-disabled');
    });

    it('should have data-disabled attribute when disabled property provided', () => {
      render(<Label.Root disabled={true}>{LABEL_ROOT_CONTENT}</Label.Root>);
      expect(screen.getByText(LABEL_ROOT_CONTENT)).toHaveAttribute('data-disabled');
    });

    it('should have class name handed over by className property', () => {
      const className = 'test';

      render(<Label.Root className={className}>{LABEL_ROOT_CONTENT}</Label.Root>);
      expect(screen.getByText(LABEL_ROOT_CONTENT)).toHaveClass(className);
    });
  });

  describe('Indicator', () => {
    it('should support ref', () => {
      const ref = createRef<HTMLSpanElement>();

      render(
        <Label.Root>
          <Label.Indicator ref={ref}>{LABEL_INDICATOR_CONTENT}</Label.Indicator>
        </Label.Root>
      );
      expect(ref.current).toBeInstanceOf(HTMLSpanElement);
    });

    it('should be span element when asChild property not provided', () => {
      const { container } = render(
        <Label.Root>
          <Label.Indicator data-testid={LABEL_INDICATOR_TEST_ID}>{LABEL_INDICATOR_CONTENT}</Label.Indicator>
        </Label.Root>
      );

      expect(screen.getByTestId(LABEL_INDICATOR_TEST_ID)).toBeInstanceOf(HTMLSpanElement);
      // eslint-disable-next-line testing-library/no-container, testing-library/no-node-access
      expect(container.querySelector(`span[data-testid="${LABEL_INDICATOR_TEST_ID}"]`)).toBeInTheDocument();
    });

    it('should be Slot element when asChild property provided', () => {
      const { container } = render(
        <Label.Root>
          <Label.Indicator asChild data-testid={LABEL_INDICATOR_TEST_ID}>
            <p>{LABEL_INDICATOR_CONTENT}</p>
          </Label.Indicator>
        </Label.Root>
      );

      expect(screen.getByTestId(LABEL_INDICATOR_TEST_ID)).toBeInstanceOf(HTMLParagraphElement);
      // eslint-disable-next-line testing-library/no-container, testing-library/no-node-access
      expect(container.querySelector(`span[data-testid="${LABEL_INDICATOR_TEST_ID}"]`)).not.toBeInTheDocument();
    });

    it('should have aria-hidden="true" attribute', () => {
      render(
        <Label.Root>
          <Label.Indicator>{LABEL_INDICATOR_CONTENT}</Label.Indicator>
        </Label.Root>
      );
      expect(screen.getByText(LABEL_INDICATOR_CONTENT)).toHaveAttribute('aria-hidden', 'true');
    });

    it('should have not data-disabled attribute when disabled property not provided on Root element', () => {
      render(
        <Label.Root disabled={false}>
          <Label.Indicator>{LABEL_INDICATOR_CONTENT}</Label.Indicator>
        </Label.Root>
      );
      expect(screen.getByText(LABEL_INDICATOR_CONTENT)).not.toHaveAttribute('data-disabled');
    });

    it('should have data-disabled attribute when disabled property provided on Root element', () => {
      render(
        <Label.Root disabled={true}>
          <Label.Indicator>{LABEL_INDICATOR_CONTENT}</Label.Indicator>
        </Label.Root>
      );
      expect(screen.getByText(LABEL_INDICATOR_CONTENT)).toHaveAttribute('data-disabled');
    });

    it('should have class name handed over by className property', () => {
      const className = 'test';

      render(
        <Label.Root>
          <Label.Indicator className={className}>{LABEL_INDICATOR_CONTENT}</Label.Indicator>
        </Label.Root>
      );
      expect(screen.getByText(LABEL_INDICATOR_CONTENT)).toHaveClass(className);
    });
  });
});
