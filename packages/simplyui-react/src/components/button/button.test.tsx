import { createRef } from 'react';
import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import * as Button from '.';

const BUTTON_ROOT_TEST_ID = 'button-root-test-id';
const BUTTON_CONTENT_TEST_ID = 'button-content-test-id';
const BUTTON_LOADER_TEST_ID = 'button-loader-test-id';

const BUTTON_ROOT_CONTENT = 'button-root';
const BUTTON_CONTENT_CONTENT = 'button-content';
const BUTTON_LOADER_CONTENT = 'button-loader';

describe('Button', () => {
  describe('Root', () => {
    it('should support ref', () => {
      const ref = createRef<HTMLButtonElement>();

      render(<Button.Root ref={ref}>{BUTTON_ROOT_CONTENT}</Button.Root>);
      expect(ref.current).toBeInstanceOf(HTMLButtonElement);
    });

    it('should be button element when asChild property not provided', () => {
      const { container } = render(<Button.Root data-testid={BUTTON_ROOT_TEST_ID}>{BUTTON_ROOT_CONTENT}</Button.Root>);

      expect(screen.getByTestId(BUTTON_ROOT_TEST_ID)).toBeInstanceOf(HTMLButtonElement);
      // eslint-disable-next-line testing-library/no-container, testing-library/no-node-access
      expect(container.querySelector(`button[data-testid="${BUTTON_ROOT_TEST_ID}"]`)).toBeInTheDocument();
    });

    it('should be Slot element when asChild property provided', () => {
      const { container } = render(
        <Button.Root asChild data-testid={BUTTON_ROOT_TEST_ID}>
          <div>{BUTTON_ROOT_CONTENT}</div>
        </Button.Root>
      );

      expect(screen.getByTestId(BUTTON_ROOT_TEST_ID)).toBeInstanceOf(HTMLDivElement);
      // eslint-disable-next-line testing-library/no-container, testing-library/no-node-access
      expect(container.querySelector(`button[data-testid="${BUTTON_ROOT_TEST_ID}"]`)).not.toBeInTheDocument();
    });

    it('should be not disabled when disabled property not provided', () => {
      render(<Button.Root disabled={false}>{BUTTON_ROOT_CONTENT}</Button.Root>);
      expect(screen.getByRole('button')).toBeEnabled();
    });

    it('should be disabled when disabled property provided', () => {
      render(<Button.Root disabled={true}>{BUTTON_ROOT_CONTENT}</Button.Root>);
      expect(screen.getByRole('button')).toBeDisabled();
    });

    it('should be not disabled when loading property not provided', () => {
      render(<Button.Root loading={false}>{BUTTON_ROOT_CONTENT}</Button.Root>);
      expect(screen.getByRole('button')).toBeEnabled();
    });

    it('should be disabled when loading property provided', () => {
      render(<Button.Root loading={true}>{BUTTON_ROOT_CONTENT}</Button.Root>);
      expect(screen.getByRole('button')).toBeDisabled();
    });

    it('should have not data-disabled attribute when disabled property not provided', () => {
      render(<Button.Root disabled={false}>{BUTTON_ROOT_CONTENT}</Button.Root>);
      expect(screen.getByRole('button')).not.toHaveAttribute('data-disabled');
    });

    it('should have data-disabled attribute when disabled property provided', () => {
      render(<Button.Root disabled={true}>{BUTTON_ROOT_CONTENT}</Button.Root>);
      expect(screen.getByRole('button')).toHaveAttribute('data-disabled');
    });

    it('should have not data-loading attribute when loading property not provided', () => {
      render(<Button.Root loading={false}>{BUTTON_ROOT_CONTENT}</Button.Root>);
      expect(screen.getByRole('button')).not.toHaveAttribute('data-loading');
    });

    it('should have data-loading attribute when loading property provided', () => {
      render(<Button.Root loading={true}>{BUTTON_ROOT_CONTENT}</Button.Root>);
      expect(screen.getByRole('button')).toHaveAttribute('data-loading');
    });

    it('should have class name handed over by className property', () => {
      const className = 'test';

      render(<Button.Root className={className}>{BUTTON_ROOT_CONTENT}</Button.Root>);
      expect(screen.getByRole('button')).toHaveClass(className);
    });
  });

  describe('Content', () => {
    it('should support ref', () => {
      const ref = createRef<HTMLSpanElement>();

      render(
        <Button.Root>
          <Button.Content ref={ref}>{BUTTON_CONTENT_CONTENT}</Button.Content>
        </Button.Root>
      );
      expect(ref.current).toBeInstanceOf(HTMLSpanElement);
    });

    it('should be span element when asChild property not provided', () => {
      const { container } = render(
        <Button.Root>
          <Button.Content data-testid={BUTTON_CONTENT_TEST_ID}>{BUTTON_CONTENT_CONTENT}</Button.Content>
        </Button.Root>
      );

      expect(screen.getByTestId(BUTTON_CONTENT_TEST_ID)).toBeInstanceOf(HTMLSpanElement);
      // eslint-disable-next-line testing-library/no-container, testing-library/no-node-access
      expect(container.querySelector(`span[data-testid="${BUTTON_CONTENT_TEST_ID}"]`)).toBeInTheDocument();
    });

    it('should be Slot element when asChild property provided', () => {
      const { container } = render(
        <Button.Root>
          <Button.Content asChild data-testid={BUTTON_CONTENT_TEST_ID}>
            <div>{BUTTON_CONTENT_CONTENT}</div>
          </Button.Content>
        </Button.Root>
      );

      expect(screen.getByTestId(BUTTON_CONTENT_TEST_ID)).toBeInstanceOf(HTMLDivElement);
      // eslint-disable-next-line testing-library/no-container, testing-library/no-node-access
      expect(container.querySelector(`span[data-testid="${BUTTON_CONTENT_TEST_ID}"]`)).not.toBeInTheDocument();
    });

    it('should have not data-disabled attribute when disabled property not provided on Root element', () => {
      render(
        <Button.Root disabled={false}>
          <Button.Content data-testid={BUTTON_CONTENT_TEST_ID}>{BUTTON_CONTENT_CONTENT}</Button.Content>
        </Button.Root>
      );
      expect(screen.getByTestId(BUTTON_CONTENT_TEST_ID)).not.toHaveAttribute('data-disabled');
    });

    it('should have data-disabled attribute when disabled property provided on Root element', () => {
      render(
        <Button.Root disabled={true}>
          <Button.Content data-testid={BUTTON_CONTENT_TEST_ID}>{BUTTON_CONTENT_CONTENT}</Button.Content>
        </Button.Root>
      );
      expect(screen.getByTestId(BUTTON_CONTENT_TEST_ID)).toHaveAttribute('data-disabled');
    });

    it('should have not data-loading attribute when loading property not provided on Root element', () => {
      render(
        <Button.Root loading={false}>
          <Button.Content data-testid={BUTTON_CONTENT_TEST_ID}>{BUTTON_CONTENT_CONTENT}</Button.Content>
        </Button.Root>
      );
      expect(screen.getByTestId(BUTTON_CONTENT_TEST_ID)).not.toHaveAttribute('data-loading');
    });

    it('should have data-loading attribute when loading property provided on Root element', () => {
      render(
        <Button.Root loading={true}>
          <Button.Content data-testid={BUTTON_CONTENT_TEST_ID}>{BUTTON_CONTENT_CONTENT}</Button.Content>
        </Button.Root>
      );
      expect(screen.getByTestId(BUTTON_CONTENT_TEST_ID)).toHaveAttribute('data-loading');
    });

    it('should have class name handed over by className property', () => {
      const className = 'test';

      render(
        <Button.Root disabled={false}>
          <Button.Content data-testid={BUTTON_CONTENT_TEST_ID} className={className}>
            {BUTTON_CONTENT_CONTENT}
          </Button.Content>
        </Button.Root>
      );
      expect(screen.getByTestId(BUTTON_CONTENT_TEST_ID)).toHaveClass(className);
    });
  });

  describe('Loader', () => {
    it('should support ref', () => {
      const ref = createRef<HTMLSpanElement>();

      render(
        <Button.Root loading={true}>
          <Button.Loader ref={ref}>{BUTTON_LOADER_CONTENT}</Button.Loader>
        </Button.Root>
      );
      expect(ref.current).toBeInstanceOf(HTMLSpanElement);
    });

    it('should be div element when asChild property not provided', () => {
      const { container } = render(
        <Button.Root loading={true}>
          <Button.Loader data-testid={BUTTON_LOADER_TEST_ID}>{BUTTON_LOADER_CONTENT}</Button.Loader>
        </Button.Root>
      );

      expect(screen.getByTestId(BUTTON_LOADER_TEST_ID)).toBeInstanceOf(HTMLSpanElement);
      // eslint-disable-next-line testing-library/no-container, testing-library/no-node-access
      expect(container.querySelector(`span[data-testid="${BUTTON_LOADER_TEST_ID}"]`)).toBeInTheDocument();
    });

    it('should be Slot element when asChild property provided', () => {
      const { container } = render(
        <Button.Root loading={true}>
          <Button.Loader asChild data-testid={BUTTON_LOADER_TEST_ID}>
            <div>{BUTTON_LOADER_CONTENT}</div>
          </Button.Loader>
        </Button.Root>
      );

      expect(screen.getByTestId(BUTTON_LOADER_TEST_ID)).toBeInstanceOf(HTMLDivElement);
      // eslint-disable-next-line testing-library/no-container, testing-library/no-node-access
      expect(container.querySelector(`span[data-testid="${BUTTON_LOADER_TEST_ID}"]`)).not.toBeInTheDocument();
    });

    it('should be not render when loading property not provided on Root element', () => {
      render(
        <Button.Root loading={false}>
          <Button.Loader data-testid={BUTTON_LOADER_TEST_ID}>{BUTTON_LOADER_CONTENT}</Button.Loader>
        </Button.Root>
      );
      expect(screen.queryByTestId(BUTTON_LOADER_TEST_ID)).not.toBeInTheDocument();
    });

    it('should have not data-disabled attribute when disabled property not provided on Root element', () => {
      render(
        <Button.Root loading={true} disabled={false}>
          <Button.Loader data-testid={BUTTON_LOADER_TEST_ID}>{BUTTON_LOADER_CONTENT}</Button.Loader>
        </Button.Root>
      );
      expect(screen.getByTestId(BUTTON_LOADER_TEST_ID)).not.toHaveAttribute('data-disabled');
    });

    it('should have data-disabled attribute when disabled property provided on Root element', () => {
      render(
        <Button.Root loading={true} disabled={true}>
          <Button.Loader data-testid={BUTTON_LOADER_TEST_ID}>{BUTTON_LOADER_CONTENT}</Button.Loader>
        </Button.Root>
      );
      expect(screen.getByTestId(BUTTON_LOADER_TEST_ID)).toHaveAttribute('data-disabled');
    });

    it('should have class name handed over by className property', () => {
      const className = 'test';

      render(
        <Button.Root loading={true}>
          <Button.Loader className={className} data-testid={BUTTON_LOADER_TEST_ID}>
            {BUTTON_LOADER_CONTENT}
          </Button.Loader>
        </Button.Root>
      );
      expect(screen.getByTestId(BUTTON_LOADER_TEST_ID)).toHaveClass(className);
    });
  });
});
