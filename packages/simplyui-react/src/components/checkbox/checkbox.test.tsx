import type { CheckboxRootProps, CheckboxIndicatorProps } from '.';
import { createRef } from 'react';
import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { Checkbox } from '.';

describe('Checkbox', () => {
  describe('CheckboxRoot', () => {
    const checkboxRootTestid = 'checkbox-root';

    function CheckboxRootTest(props: Partial<CheckboxRootProps>) {
      return (
        <Checkbox data-testid={checkboxRootTestid} {...props}>
          <Checkbox.Indicator />
        </Checkbox>
      );
    }

    it('should support ref', () => {
      const ref = createRef<HTMLButtonElement>();

      render(
        <Checkbox ref={ref}>
          <Checkbox.Indicator />
        </Checkbox>
      );

      expect(ref.current).toBeInstanceOf(HTMLButtonElement);
    });

    it('should be button element when asChild property not provided', () => {
      const { container } = render(<CheckboxRootTest />);

      expect(screen.getByTestId(checkboxRootTestid)).toBeInstanceOf(HTMLButtonElement);
      // eslint-disable-next-line testing-library/no-container, testing-library/no-node-access
      expect(container.querySelector(`button[data-testid="${checkboxRootTestid}"]`)).toBeInTheDocument();
    });

    it('should be Slot element when asChild property provided', () => {
      const { container } = render(
        <Checkbox asChild data-testid={checkboxRootTestid}>
          <div>
            <Checkbox.Indicator />
          </div>
        </Checkbox>
      );

      expect(screen.getByTestId(checkboxRootTestid)).toBeInstanceOf(HTMLDivElement);
      // eslint-disable-next-line testing-library/no-container, testing-library/no-node-access
      expect(container.querySelector(`button[data-testid="${checkboxRootTestid}"]`)).not.toBeInTheDocument();
    });

    it('should be not disabled when disabled property not provided', () => {
      render(<CheckboxRootTest disabled={false} />);
      expect(screen.getByRole('checkbox')).toBeEnabled();
    });

    it('should be disabled when disabled property provided', () => {
      render(<CheckboxRootTest disabled={true} />);
      expect(screen.getByRole('checkbox')).toBeDisabled();
    });

    it('should be not required when required property not provided', () => {
      render(<CheckboxRootTest required={false} />);
      expect(screen.getByRole('checkbox')).not.toBeRequired();
    });

    it('should be required when required property provided', () => {
      render(<CheckboxRootTest required={true} />);
      // eslint-disable-next-line jest-dom/prefer-required
      expect(screen.getByRole('checkbox')).toHaveAttribute('aria-required', 'true');
    });

    it('should be not invalid when invalid property not provided', () => {
      render(<CheckboxRootTest invalid={false} />);
      expect(screen.getByRole('checkbox')).toBeValid();
    });

    it('should be invalid when invalid property provided', () => {
      render(<CheckboxRootTest invalid={true} />);
      expect(screen.getByRole('checkbox')).toBeInvalid();
    });

    it('should have class name handed over by className property', () => {
      const className = 'test';

      render(<CheckboxRootTest className={className} />);
      expect(screen.getByRole('checkbox')).toHaveClass(className);
    });
  });

  describe('CheckboxIndicator', () => {
    const checkboxIndicatorTestid = 'checkbox-undicator';

    function CheckboxIndicatorTest(props: Partial<CheckboxIndicatorProps>) {
      return (
        <Checkbox>
          <Checkbox.Indicator data-testid={checkboxIndicatorTestid} {...props} />
        </Checkbox>
      );
    }

    it('should support ref', () => {
      const ref = createRef<HTMLSpanElement>();

      render(
        <Checkbox>
          <Checkbox.Indicator ref={ref} />
        </Checkbox>
      );

      expect(ref.current).toBeInstanceOf(HTMLSpanElement);
    });

    it('should be span element when asChild property not provided', () => {
      const { container } = render(<CheckboxIndicatorTest />);

      expect(screen.getByTestId(checkboxIndicatorTestid)).toBeInstanceOf(HTMLSpanElement);
      // eslint-disable-next-line testing-library/no-container, testing-library/no-node-access
      expect(container.querySelector(`span[data-testid="${checkboxIndicatorTestid}"]`)).toBeInTheDocument();
    });

    it('should be Slot element when asChild property provided', () => {
      const { container } = render(
        <Checkbox>
          <Checkbox.Indicator asChild data-testid={checkboxIndicatorTestid}>
            <div />
          </Checkbox.Indicator>
        </Checkbox>
      );

      expect(screen.getByTestId(checkboxIndicatorTestid)).toBeInstanceOf(HTMLDivElement);
      // eslint-disable-next-line testing-library/no-container, testing-library/no-node-access
      expect(container.querySelector(`span[data-testid="${checkboxIndicatorTestid}"]`)).not.toBeInTheDocument();
    });

    it('should contain custom icon when children property provided', () => {
      const iconTestid = 'custom-icon';

      const { container } = render(
        <Checkbox>
          <Checkbox.Indicator>
            <div data-testid={iconTestid} />
          </Checkbox.Indicator>
        </Checkbox>
      );

      expect(screen.getByTestId(iconTestid)).toBeInTheDocument();
      // eslint-disable-next-line testing-library/no-container, testing-library/no-node-access
      expect(container.querySelector('svg')).not.toBeInTheDocument();
    });

    it('should have class name handed over by className property', () => {
      const className = 'test';

      render(<CheckboxIndicatorTest className={className} />);
      expect(screen.getByTestId(checkboxIndicatorTestid)).toHaveClass(className);
    });
  });
});
