import { createRef } from 'react';
import { describe, it, expect } from 'vitest';
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import * as TextField from '.';

const TEXT_FIELD_ROOT_TEST_ID = 'text-field-root-test-id';
const TEXT_FIELD_SLOT_TEST_ID = 'text-field-slot-test-id';
const TEXT_FIELD_BUTTON_TEST_ID = 'text-field-button-test-id';
const TEXT_FIELD_INPUT_TEST_ID = 'text-field-input-test-id';

const TEXT_FIELD_ROOT_CONTENT = 'text-field-root';
const TEXT_FIELD_SLOT_CONTENT = 'text-field-slot';
const TEXT_FIELD_BUTTON_CONTENT = 'text-field-button';

describe('TextField', () => {
  describe('Root', () => {
    it('should support ref', () => {
      const ref = createRef<HTMLDivElement>();

      render(<TextField.Root ref={ref}>{TEXT_FIELD_ROOT_CONTENT}</TextField.Root>);
      expect(ref.current).toBeInstanceOf(HTMLDivElement);
    });

    it('should be div element when asChild property not provided', () => {
      const { container } = render(
        <TextField.Root data-testid={TEXT_FIELD_ROOT_TEST_ID}>{TEXT_FIELD_ROOT_CONTENT}</TextField.Root>
      );

      expect(screen.getByTestId(TEXT_FIELD_ROOT_TEST_ID)).toBeInstanceOf(HTMLDivElement);
      // eslint-disable-next-line testing-library/no-container, testing-library/no-node-access
      expect(container.querySelector(`div[data-testid="${TEXT_FIELD_ROOT_TEST_ID}"]`)).toBeInTheDocument();
    });

    it('should be Slot element when asChild property provided', () => {
      const { container } = render(
        <TextField.Root asChild data-testid={TEXT_FIELD_ROOT_TEST_ID}>
          <span>{TEXT_FIELD_ROOT_CONTENT}</span>
        </TextField.Root>
      );

      expect(screen.getByTestId(TEXT_FIELD_ROOT_TEST_ID)).toBeInstanceOf(HTMLSpanElement);
      // eslint-disable-next-line testing-library/no-container, testing-library/no-node-access
      expect(container.querySelector(`div[data-testid="${TEXT_FIELD_ROOT_TEST_ID}"]`)).not.toBeInTheDocument();
    });

    it('should have not data-disabled attribute when disabled property not provided', () => {
      render(<TextField.Root disabled={false}>{TEXT_FIELD_ROOT_CONTENT}</TextField.Root>);
      expect(screen.getByText(TEXT_FIELD_ROOT_CONTENT)).not.toHaveAttribute('data-disabled');
    });

    it('should have data-disabled attribute when disabled property provided', () => {
      render(<TextField.Root disabled={true}>{TEXT_FIELD_ROOT_CONTENT}</TextField.Root>);
      expect(screen.getByText(TEXT_FIELD_ROOT_CONTENT)).toHaveAttribute('data-disabled');
    });

    it('should have not data-invalid attribute when invalid property not provided', () => {
      render(<TextField.Root invalid={false}>{TEXT_FIELD_ROOT_CONTENT}</TextField.Root>);
      expect(screen.getByText(TEXT_FIELD_ROOT_CONTENT)).not.toHaveAttribute('data-invalid');
    });

    it('should have data-invalid attribute when invalid property provided', () => {
      render(<TextField.Root invalid={true}>{TEXT_FIELD_ROOT_CONTENT}</TextField.Root>);
      expect(screen.getByText(TEXT_FIELD_ROOT_CONTENT)).toHaveAttribute('data-invalid');
    });

    it('should have class name handed over by className property', () => {
      const className = 'test';

      render(<TextField.Root className={className}>{TEXT_FIELD_ROOT_CONTENT}</TextField.Root>);
      expect(screen.getByText(TEXT_FIELD_ROOT_CONTENT)).toHaveClass(className);
    });
  });

  describe('Slot', () => {
    it('should support ref', () => {
      const ref = createRef<HTMLDivElement>();

      render(
        <TextField.Root>
          <TextField.Slot ref={ref}>{TEXT_FIELD_SLOT_CONTENT}</TextField.Slot>
        </TextField.Root>
      );
      expect(ref.current).toBeInstanceOf(HTMLDivElement);
    });

    it('should be div element when asChild property not provided', () => {
      const { container } = render(
        <TextField.Root>
          <TextField.Slot data-testid={TEXT_FIELD_SLOT_TEST_ID}>{TEXT_FIELD_SLOT_CONTENT}</TextField.Slot>
        </TextField.Root>
      );

      expect(screen.getByTestId(TEXT_FIELD_SLOT_TEST_ID)).toBeInstanceOf(HTMLDivElement);
      // eslint-disable-next-line testing-library/no-container, testing-library/no-node-access
      expect(container.querySelector(`div[data-testid="${TEXT_FIELD_SLOT_TEST_ID}"]`)).toBeInTheDocument();
    });

    it('should be Slot element when asChild property provided', () => {
      const { container } = render(
        <TextField.Root>
          <TextField.Slot asChild data-testid={TEXT_FIELD_SLOT_TEST_ID}>
            <span>{TEXT_FIELD_SLOT_CONTENT}</span>
          </TextField.Slot>
        </TextField.Root>
      );

      expect(screen.getByTestId(TEXT_FIELD_SLOT_TEST_ID)).toBeInstanceOf(HTMLSpanElement);
      // eslint-disable-next-line testing-library/no-container, testing-library/no-node-access
      expect(container.querySelector(`div[data-testid="${TEXT_FIELD_SLOT_TEST_ID}"]`)).not.toBeInTheDocument();
    });

    it('should have not data-disabled attribute when disabled property not provided on Root element', () => {
      render(
        <TextField.Root disabled={false}>
          <TextField.Slot>{TEXT_FIELD_SLOT_CONTENT}</TextField.Slot>
        </TextField.Root>
      );
      expect(screen.getByText(TEXT_FIELD_SLOT_CONTENT)).not.toHaveAttribute('data-disabled');
    });

    it('should have data-disabled attribute when disabled property provided on Root element', () => {
      render(
        <TextField.Root disabled={true}>
          <TextField.Slot>{TEXT_FIELD_SLOT_CONTENT}</TextField.Slot>
        </TextField.Root>
      );
      expect(screen.getByText(TEXT_FIELD_SLOT_CONTENT)).toHaveAttribute('data-disabled');
    });

    it('should have not data-invalid attribute when invalid property not provided on Root element', () => {
      render(
        <TextField.Root invalid={false}>
          <TextField.Slot>{TEXT_FIELD_SLOT_CONTENT}</TextField.Slot>
        </TextField.Root>
      );
      expect(screen.getByText(TEXT_FIELD_SLOT_CONTENT)).not.toHaveAttribute('data-invalid');
    });

    it('should have data-invalid attribute when invalid property provided on Root element', () => {
      render(
        <TextField.Root invalid={true}>
          <TextField.Slot>{TEXT_FIELD_SLOT_CONTENT}</TextField.Slot>
        </TextField.Root>
      );
      expect(screen.getByText(TEXT_FIELD_SLOT_CONTENT)).toHaveAttribute('data-invalid');
    });

    it('should have class name handed over by className property', () => {
      const className = 'test';

      render(
        <TextField.Root>
          <TextField.Slot className={className}>{TEXT_FIELD_SLOT_CONTENT}</TextField.Slot>
        </TextField.Root>
      );
      expect(screen.getByText(TEXT_FIELD_SLOT_CONTENT)).toHaveClass(className);
    });
  });

  describe('Button', () => {
    it('should support ref', () => {
      const ref = createRef<HTMLButtonElement>();

      render(
        <TextField.Root>
          <TextField.Button ref={ref}>{TEXT_FIELD_BUTTON_CONTENT}</TextField.Button>
        </TextField.Root>
      );
      expect(ref.current).toBeInstanceOf(HTMLButtonElement);
    });

    it('should be button element when asChild property not provided', () => {
      const { container } = render(
        <TextField.Root>
          <TextField.Button data-testid={TEXT_FIELD_BUTTON_TEST_ID}>{TEXT_FIELD_BUTTON_CONTENT}</TextField.Button>
        </TextField.Root>
      );

      expect(screen.getByTestId(TEXT_FIELD_BUTTON_TEST_ID)).toBeInstanceOf(HTMLButtonElement);
      // eslint-disable-next-line testing-library/no-container, testing-library/no-node-access
      expect(container.querySelector(`button[data-testid="${TEXT_FIELD_BUTTON_TEST_ID}"]`)).toBeInTheDocument();
    });

    it('should be Slot element when asChild property provided', () => {
      const { container } = render(
        <TextField.Root>
          <TextField.Button asChild data-testid={TEXT_FIELD_BUTTON_TEST_ID}>
            <span>{TEXT_FIELD_BUTTON_CONTENT}</span>
          </TextField.Button>
        </TextField.Root>
      );

      expect(screen.getByTestId(TEXT_FIELD_BUTTON_TEST_ID)).toBeInstanceOf(HTMLSpanElement);
      // eslint-disable-next-line testing-library/no-container, testing-library/no-node-access
      expect(container.querySelector(`button[data-testid="${TEXT_FIELD_BUTTON_TEST_ID}"]`)).not.toBeInTheDocument();
    });

    it('should have not data-disabled attribute when disabled property not provided on Root element', () => {
      render(
        <TextField.Root disabled={false}>
          <TextField.Button>{TEXT_FIELD_BUTTON_CONTENT}</TextField.Button>
        </TextField.Root>
      );
      expect(screen.getByText(TEXT_FIELD_BUTTON_CONTENT)).not.toHaveAttribute('data-disabled');
    });

    it('should have data-disabled attribute when disabled property provided on Root element', () => {
      render(
        <TextField.Root disabled={true}>
          <TextField.Button>{TEXT_FIELD_BUTTON_CONTENT}</TextField.Button>
        </TextField.Root>
      );
      expect(screen.getByText(TEXT_FIELD_BUTTON_CONTENT)).toHaveAttribute('data-disabled');
    });

    it('should have not data-invalid attribute when invalid property not provided on Root element', () => {
      render(
        <TextField.Root invalid={false}>
          <TextField.Button>{TEXT_FIELD_BUTTON_CONTENT}</TextField.Button>
        </TextField.Root>
      );
      expect(screen.getByText(TEXT_FIELD_BUTTON_CONTENT)).not.toHaveAttribute('data-invalid');
    });

    it('should have data-invalid attribute when invalid property provided on Root element', () => {
      render(
        <TextField.Root invalid={true}>
          <TextField.Button>{TEXT_FIELD_BUTTON_CONTENT}</TextField.Button>
        </TextField.Root>
      );
      expect(screen.getByText(TEXT_FIELD_BUTTON_CONTENT)).toHaveAttribute('data-invalid');
    });

    it('should have class name handed over by className property', () => {
      const className = 'test';

      render(
        <TextField.Root>
          <TextField.Button className={className}>{TEXT_FIELD_BUTTON_CONTENT}</TextField.Button>
        </TextField.Root>
      );
      expect(screen.getByText(TEXT_FIELD_BUTTON_CONTENT)).toHaveClass(className);
    });
  });

  describe('Input', () => {
    it('should support ref', () => {
      const ref = createRef<HTMLInputElement>();

      render(
        <TextField.Root>
          <TextField.Input ref={ref} />
        </TextField.Root>
      );
      expect(ref.current).toBeInstanceOf(HTMLInputElement);
    });

    it('should be not disabled when disabled property not provided on Root element', () => {
      render(
        <TextField.Root disabled={false}>
          <TextField.Input data-testid={TEXT_FIELD_INPUT_TEST_ID} />
        </TextField.Root>
      );
      expect(screen.getByTestId(TEXT_FIELD_INPUT_TEST_ID)).toBeEnabled();
    });

    it('should be disabled when disabled property provided on Root element', () => {
      render(
        <TextField.Root disabled={true}>
          <TextField.Input data-testid={TEXT_FIELD_INPUT_TEST_ID} />
        </TextField.Root>
      );
      expect(screen.getByTestId(TEXT_FIELD_INPUT_TEST_ID)).toBeDisabled();
    });

    it('should have not data-disabled attribute when disabled property not provided on Root element', () => {
      render(
        <TextField.Root disabled={false}>
          <TextField.Input data-testid={TEXT_FIELD_INPUT_TEST_ID} />
        </TextField.Root>
      );
      expect(screen.getByTestId(TEXT_FIELD_INPUT_TEST_ID)).not.toHaveAttribute('data-disabled');
    });

    it('should have data-disabled attribute when disabled property provided on Root element', () => {
      render(
        <TextField.Root disabled={true}>
          <TextField.Input data-testid={TEXT_FIELD_INPUT_TEST_ID} />
        </TextField.Root>
      );
      expect(screen.getByTestId(TEXT_FIELD_INPUT_TEST_ID)).toHaveAttribute('data-disabled');
    });

    it('should be not invalid when invalid property not provided on Root element', () => {
      render(
        <TextField.Root invalid={false}>
          <TextField.Input data-testid={TEXT_FIELD_INPUT_TEST_ID} />
        </TextField.Root>
      );
      expect(screen.getByTestId(TEXT_FIELD_INPUT_TEST_ID)).toBeValid();
    });

    it('should be invalid when invalid property provided on Root element', () => {
      render(
        <TextField.Root invalid={true}>
          <TextField.Input data-testid={TEXT_FIELD_INPUT_TEST_ID} />
        </TextField.Root>
      );
      expect(screen.getByTestId(TEXT_FIELD_INPUT_TEST_ID)).toBeInvalid();
    });

    it('should have not data-invalid attribute when invalid property not provided on Root element', () => {
      render(
        <TextField.Root invalid={false}>
          <TextField.Input data-testid={TEXT_FIELD_INPUT_TEST_ID} />
        </TextField.Root>
      );
      expect(screen.getByTestId(TEXT_FIELD_INPUT_TEST_ID)).not.toHaveAttribute('data-invalid');
    });

    it('should have data-invalid attribute when invalid property provided on Root element', () => {
      render(
        <TextField.Root invalid={true}>
          <TextField.Input data-testid={TEXT_FIELD_INPUT_TEST_ID} />
        </TextField.Root>
      );
      expect(screen.getByTestId(TEXT_FIELD_INPUT_TEST_ID)).toHaveAttribute('data-invalid');
    });

    it('should be not required when required property not provided on Root element', () => {
      render(
        <TextField.Root required={false}>
          <TextField.Input data-testid={TEXT_FIELD_INPUT_TEST_ID} />
        </TextField.Root>
      );
      expect(screen.getByTestId(TEXT_FIELD_INPUT_TEST_ID)).not.toBeRequired();
    });

    it('should be required when required property provided on Root element', () => {
      render(
        <TextField.Root required={true}>
          <TextField.Input data-testid={TEXT_FIELD_INPUT_TEST_ID} />
        </TextField.Root>
      );
      expect(screen.getByTestId(TEXT_FIELD_INPUT_TEST_ID)).toBeRequired();
    });

    it('should have not focus when user click button inside Slot element', async () => {
      const user = userEvent.setup();

      render(
        <TextField.Root>
          <TextField.Slot>
            <button type="button">Test</button>
          </TextField.Slot>
          <TextField.Input data-testid={TEXT_FIELD_INPUT_TEST_ID} />
        </TextField.Root>
      );

      await user.click(screen.getByRole('button'));
      await waitFor(() => expect(screen.getByTestId(TEXT_FIELD_INPUT_TEST_ID)).not.toHaveFocus());
    });

    it('should have not focus when user click anchor inside Slot element', async () => {
      const user = userEvent.setup();

      render(
        <TextField.Root>
          <TextField.Slot>
            <a href="#">Test</a>
          </TextField.Slot>
          <TextField.Input data-testid={TEXT_FIELD_INPUT_TEST_ID} />
        </TextField.Root>
      );

      await user.click(screen.getByRole('link'));
      await waitFor(() => expect(screen.getByTestId(TEXT_FIELD_INPUT_TEST_ID)).not.toHaveFocus());
    });

    it('should have focus when user click Root element', async () => {
      const user = userEvent.setup();

      render(
        <TextField.Root data-testid={TEXT_FIELD_ROOT_TEST_ID}>
          <TextField.Input data-testid={TEXT_FIELD_INPUT_TEST_ID} />
        </TextField.Root>
      );

      await user.click(screen.getByTestId(TEXT_FIELD_ROOT_TEST_ID));
      await waitFor(() => expect(screen.getByTestId(TEXT_FIELD_INPUT_TEST_ID)).toHaveFocus());
    });

    it('should have focus when user click Slot element', async () => {
      const user = userEvent.setup();

      render(
        <TextField.Root>
          <TextField.Slot data-testid={TEXT_FIELD_SLOT_TEST_ID}>{TEXT_FIELD_SLOT_CONTENT}</TextField.Slot>
          <TextField.Input data-testid={TEXT_FIELD_INPUT_TEST_ID} />
        </TextField.Root>
      );

      await user.click(screen.getByTestId(TEXT_FIELD_SLOT_TEST_ID));
      await waitFor(() => expect(screen.getByTestId(TEXT_FIELD_INPUT_TEST_ID)).toHaveFocus());
    });

    it('should have class name handed over by className property', () => {
      const className = 'test';

      render(
        <TextField.Root>
          <TextField.Input className={className} data-testid={TEXT_FIELD_INPUT_TEST_ID} />
        </TextField.Root>
      );
      expect(screen.getByTestId(TEXT_FIELD_INPUT_TEST_ID)).toHaveClass(className);
    });
  });
});
