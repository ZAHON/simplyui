import { createRef } from 'react';
import { describe, it, expect } from 'vitest';
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { TextField } from '.';

const TEXT_FIELD_ROOT_TEST_ID = 'text-field-root-test-id';
const TEXT_FIELD_SLOT_TEST_ID = 'text-field-slot-test-id';
const TEXT_FIELD_INPUT_TEST_ID = 'text-field-input-test-id';

const TEXT_FIELD_ROOT_CONTENT = 'text-field-root';
const TEXT_FIELD_SLOT_CONTENT = 'text-field-slot';

describe('TextField', () => {
  describe('Root', () => {
    it('should support ref', () => {
      const ref = createRef<HTMLDivElement>();

      render(<TextField ref={ref}>{TEXT_FIELD_ROOT_CONTENT}</TextField>);
      expect(ref.current).toBeInstanceOf(HTMLDivElement);
    });

    it('should be div element when asChild property not provided', () => {
      const { container } = render(
        <TextField data-testid={TEXT_FIELD_ROOT_TEST_ID}>{TEXT_FIELD_ROOT_CONTENT}</TextField>
      );

      expect(screen.getByTestId(TEXT_FIELD_ROOT_TEST_ID)).toBeInstanceOf(HTMLDivElement);
      // eslint-disable-next-line testing-library/no-container, testing-library/no-node-access
      expect(container.querySelector(`div[data-testid="${TEXT_FIELD_ROOT_TEST_ID}"]`)).toBeInTheDocument();
    });

    it('should be Slot element when asChild property provided', () => {
      const { container } = render(
        <TextField asChild data-testid={TEXT_FIELD_ROOT_TEST_ID}>
          <span>{TEXT_FIELD_ROOT_CONTENT}</span>
        </TextField>
      );

      expect(screen.getByTestId(TEXT_FIELD_ROOT_TEST_ID)).toBeInstanceOf(HTMLSpanElement);
      // eslint-disable-next-line testing-library/no-container, testing-library/no-node-access
      expect(container.querySelector(`div[data-testid="${TEXT_FIELD_ROOT_TEST_ID}"]`)).not.toBeInTheDocument();
    });

    it('should have not data-disabled attribute when disabled property not provided', () => {
      render(<TextField disabled={false}>{TEXT_FIELD_ROOT_CONTENT}</TextField>);
      expect(screen.getByText(TEXT_FIELD_ROOT_CONTENT)).not.toHaveAttribute('data-disabled');
    });

    it('should have data-disabled attribute when disabled property provided', () => {
      render(<TextField disabled={true}>{TEXT_FIELD_ROOT_CONTENT}</TextField>);
      expect(screen.getByText(TEXT_FIELD_ROOT_CONTENT)).toHaveAttribute('data-disabled');
    });

    it('should have not data-invalid attribute when invalid property not provided', () => {
      render(<TextField invalid={false}>{TEXT_FIELD_ROOT_CONTENT}</TextField>);
      expect(screen.getByText(TEXT_FIELD_ROOT_CONTENT)).not.toHaveAttribute('data-invalid');
    });

    it('should have data-invalid attribute when invalid property provided', () => {
      render(<TextField invalid={true}>{TEXT_FIELD_ROOT_CONTENT}</TextField>);
      expect(screen.getByText(TEXT_FIELD_ROOT_CONTENT)).toHaveAttribute('data-invalid');
    });

    it('should have class name handed over by className property', () => {
      const className = 'test';

      render(<TextField className={className}>{TEXT_FIELD_ROOT_CONTENT}</TextField>);
      expect(screen.getByText(TEXT_FIELD_ROOT_CONTENT)).toHaveClass(className);
    });
  });

  describe('Slot', () => {
    it('should support ref', () => {
      const ref = createRef<HTMLDivElement>();

      render(
        <TextField ref={ref}>
          <TextField.Slot ref={ref}>{TEXT_FIELD_SLOT_CONTENT}</TextField.Slot>
        </TextField>
      );
      expect(ref.current).toBeInstanceOf(HTMLDivElement);
    });

    it('should be div element when asChild property not provided', () => {
      const { container } = render(
        <TextField>
          <TextField.Slot data-testid={TEXT_FIELD_SLOT_TEST_ID}>{TEXT_FIELD_SLOT_CONTENT}</TextField.Slot>
        </TextField>
      );

      expect(screen.getByTestId(TEXT_FIELD_SLOT_TEST_ID)).toBeInstanceOf(HTMLDivElement);
      // eslint-disable-next-line testing-library/no-container, testing-library/no-node-access
      expect(container.querySelector(`div[data-testid="${TEXT_FIELD_SLOT_TEST_ID}"]`)).toBeInTheDocument();
    });

    it('should be Slot element when asChild property provided', () => {
      const { container } = render(
        <TextField>
          <TextField.Slot asChild data-testid={TEXT_FIELD_SLOT_TEST_ID}>
            <span>{TEXT_FIELD_SLOT_CONTENT}</span>
          </TextField.Slot>
        </TextField>
      );

      expect(screen.getByTestId(TEXT_FIELD_SLOT_TEST_ID)).toBeInstanceOf(HTMLSpanElement);
      // eslint-disable-next-line testing-library/no-container, testing-library/no-node-access
      expect(container.querySelector(`div[data-testid="${TEXT_FIELD_SLOT_TEST_ID}"]`)).not.toBeInTheDocument();
    });

    it('should have not data-disabled attribute when disabled property not provided on Root element', () => {
      render(
        <TextField disabled={false}>
          <TextField.Slot>{TEXT_FIELD_SLOT_CONTENT}</TextField.Slot>
        </TextField>
      );
      expect(screen.getByText(TEXT_FIELD_SLOT_CONTENT)).not.toHaveAttribute('data-disabled');
    });

    it('should have data-disabled attribute when disabled property provided on Root element', () => {
      render(
        <TextField disabled={true}>
          <TextField.Slot>{TEXT_FIELD_SLOT_CONTENT}</TextField.Slot>
        </TextField>
      );
      expect(screen.getByText(TEXT_FIELD_SLOT_CONTENT)).toHaveAttribute('data-disabled');
    });

    it('should have not data-invalid attribute when invalid property not provided on Root element', () => {
      render(
        <TextField invalid={false}>
          <TextField.Slot>{TEXT_FIELD_SLOT_CONTENT}</TextField.Slot>
        </TextField>
      );
      expect(screen.getByText(TEXT_FIELD_SLOT_CONTENT)).not.toHaveAttribute('data-invalid');
    });

    it('should have data-invalid attribute when invalid property provided on Root element', () => {
      render(
        <TextField invalid={true}>
          <TextField.Slot>{TEXT_FIELD_SLOT_CONTENT}</TextField.Slot>
        </TextField>
      );
      expect(screen.getByText(TEXT_FIELD_SLOT_CONTENT)).toHaveAttribute('data-invalid');
    });

    it('should have class name handed over by className property', () => {
      const className = 'test';

      render(
        <TextField>
          <TextField.Slot className={className}>{TEXT_FIELD_SLOT_CONTENT}</TextField.Slot>
        </TextField>
      );
      expect(screen.getByText(TEXT_FIELD_SLOT_CONTENT)).toHaveClass(className);
    });
  });

  describe('Input', () => {
    it('should support ref', () => {
      const ref = createRef<HTMLInputElement>();

      render(
        <TextField>
          <TextField.Input ref={ref} />
        </TextField>
      );
      expect(ref.current).toBeInstanceOf(HTMLInputElement);
    });

    it('should be not disabled when disabled property not provided on Root element', () => {
      render(
        <TextField disabled={false}>
          <TextField.Input data-testid={TEXT_FIELD_INPUT_TEST_ID} />
        </TextField>
      );
      expect(screen.getByTestId(TEXT_FIELD_INPUT_TEST_ID)).toBeEnabled();
    });

    it('should be disabled when disabled property provided on Root element', () => {
      render(
        <TextField disabled={true}>
          <TextField.Input data-testid={TEXT_FIELD_INPUT_TEST_ID} />
        </TextField>
      );
      expect(screen.getByTestId(TEXT_FIELD_INPUT_TEST_ID)).toBeDisabled();
    });

    it('should have not data-disabled attribute when disabled property not provided on Root element', () => {
      render(
        <TextField disabled={false}>
          <TextField.Input data-testid={TEXT_FIELD_INPUT_TEST_ID} />
        </TextField>
      );
      expect(screen.getByTestId(TEXT_FIELD_INPUT_TEST_ID)).not.toHaveAttribute('data-disabled');
    });

    it('should have data-disabled attribute when disabled property provided on Root element', () => {
      render(
        <TextField disabled={true}>
          <TextField.Input data-testid={TEXT_FIELD_INPUT_TEST_ID} />
        </TextField>
      );
      expect(screen.getByTestId(TEXT_FIELD_INPUT_TEST_ID)).toHaveAttribute('data-disabled');
    });

    it('should be not invalid when invalid property not provided on Root element', () => {
      render(
        <TextField invalid={false}>
          <TextField.Input data-testid={TEXT_FIELD_INPUT_TEST_ID} />
        </TextField>
      );
      expect(screen.getByTestId(TEXT_FIELD_INPUT_TEST_ID)).toBeValid();
    });

    it('should be invalid when invalid property provided on Root element', () => {
      render(
        <TextField invalid={true}>
          <TextField.Input data-testid={TEXT_FIELD_INPUT_TEST_ID} />
        </TextField>
      );
      expect(screen.getByTestId(TEXT_FIELD_INPUT_TEST_ID)).toBeInvalid();
    });

    it('should have not data-invalid attribute when invalid property not provided on Root element', () => {
      render(
        <TextField invalid={false}>
          <TextField.Input data-testid={TEXT_FIELD_INPUT_TEST_ID} />
        </TextField>
      );
      expect(screen.getByTestId(TEXT_FIELD_INPUT_TEST_ID)).not.toHaveAttribute('data-invalid');
    });

    it('should have data-invalid attribute when invalid property provided on Root element', () => {
      render(
        <TextField invalid={true}>
          <TextField.Input data-testid={TEXT_FIELD_INPUT_TEST_ID} />
        </TextField>
      );
      expect(screen.getByTestId(TEXT_FIELD_INPUT_TEST_ID)).toHaveAttribute('data-invalid');
    });

    it('should be not required when required property not provided on Root element', () => {
      render(
        <TextField required={false}>
          <TextField.Input data-testid={TEXT_FIELD_INPUT_TEST_ID} />
        </TextField>
      );
      expect(screen.getByTestId(TEXT_FIELD_INPUT_TEST_ID)).not.toBeRequired();
    });

    it('should be required when required property provided on Root element', () => {
      render(
        <TextField required={true}>
          <TextField.Input data-testid={TEXT_FIELD_INPUT_TEST_ID} />
        </TextField>
      );
      expect(screen.getByTestId(TEXT_FIELD_INPUT_TEST_ID)).toBeRequired();
    });

    it('should have not focus when user click button inside Slot element', async () => {
      const user = userEvent.setup();

      render(
        <TextField>
          <TextField.Slot>
            <button type="button">Test</button>
          </TextField.Slot>
          <TextField.Input data-testid={TEXT_FIELD_INPUT_TEST_ID} />
        </TextField>
      );

      await user.click(screen.getByRole('button'));
      await waitFor(() => expect(screen.getByTestId(TEXT_FIELD_INPUT_TEST_ID)).not.toHaveFocus());
    });

    it('should have not focus when user click anchor inside Slot element', async () => {
      const user = userEvent.setup();

      render(
        <TextField>
          <TextField.Slot>
            <a href="#">Test</a>
          </TextField.Slot>
          <TextField.Input data-testid={TEXT_FIELD_INPUT_TEST_ID} />
        </TextField>
      );

      await user.click(screen.getByRole('link'));
      await waitFor(() => expect(screen.getByTestId(TEXT_FIELD_INPUT_TEST_ID)).not.toHaveFocus());
    });

    it('should have focus when user click Root element', async () => {
      const user = userEvent.setup();

      render(
        <TextField data-testid={TEXT_FIELD_ROOT_TEST_ID}>
          <TextField.Input data-testid={TEXT_FIELD_INPUT_TEST_ID} />
        </TextField>
      );

      await user.click(screen.getByTestId(TEXT_FIELD_ROOT_TEST_ID));
      await waitFor(() => expect(screen.getByTestId(TEXT_FIELD_INPUT_TEST_ID)).toHaveFocus());
    });

    it('should have focus when user click Slot element', async () => {
      const user = userEvent.setup();

      render(
        <TextField>
          <TextField.Slot data-testid={TEXT_FIELD_SLOT_TEST_ID}>{TEXT_FIELD_SLOT_CONTENT}</TextField.Slot>
          <TextField.Input data-testid={TEXT_FIELD_INPUT_TEST_ID} />
        </TextField>
      );

      await user.click(screen.getByTestId(TEXT_FIELD_SLOT_TEST_ID));
      await waitFor(() => expect(screen.getByTestId(TEXT_FIELD_INPUT_TEST_ID)).toHaveFocus());
    });

    it('should have class name handed over by className property', () => {
      const className = 'test';

      render(
        <TextField>
          <TextField.Input className={className} data-testid={TEXT_FIELD_INPUT_TEST_ID} />
        </TextField>
      );
      expect(screen.getByTestId(TEXT_FIELD_INPUT_TEST_ID)).toHaveClass(className);
    });
  });
});
