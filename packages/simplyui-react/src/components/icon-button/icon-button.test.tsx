import { createRef } from 'react';
import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import * as IconButton from '.';

const ICON_BUTTON_ROOT_TEST_ID = 'icon-button-root-test-id';
const ICON_BUTTON_CONTENT_TEST_ID = 'icon-button-content-test-id';
const ICON_BUTTON_LOADER_TEST_ID = 'icon-button-loader-test-id';

const ICON_BUTTON_ROOT_CONTENT = 'icon-button-root';
const ICON_BUTTON_CONTENT_CONTENT = 'icon-button-content';
const ICON_BUTTON_LOADER_CONTENT = 'icon-button-loader';

describe('IconButton', () => {
  describe('Root', () => {
    it('should support ref', () => {
      const ref = createRef<HTMLButtonElement>();

      render(<IconButton.Root ref={ref}>{ICON_BUTTON_ROOT_CONTENT}</IconButton.Root>);
      expect(ref.current).toBeInstanceOf(HTMLButtonElement);
    });

    it('should be button element when asChild property not provided', () => {
      const { container } = render(
        <IconButton.Root data-testid={ICON_BUTTON_ROOT_TEST_ID}>{ICON_BUTTON_ROOT_CONTENT}</IconButton.Root>
      );

      expect(screen.getByTestId(ICON_BUTTON_ROOT_TEST_ID)).toBeInstanceOf(HTMLButtonElement);
      // eslint-disable-next-line testing-library/no-container, testing-library/no-node-access
      expect(container.querySelector(`button[data-testid="${ICON_BUTTON_ROOT_TEST_ID}"]`)).toBeInTheDocument();
    });

    it('should be Slot element when asChild property provided', () => {
      const { container } = render(
        <IconButton.Root asChild data-testid={ICON_BUTTON_ROOT_TEST_ID}>
          <div>{ICON_BUTTON_ROOT_CONTENT}</div>
        </IconButton.Root>
      );

      expect(screen.getByTestId(ICON_BUTTON_ROOT_TEST_ID)).toBeInstanceOf(HTMLDivElement);
      // eslint-disable-next-line testing-library/no-container, testing-library/no-node-access
      expect(container.querySelector(`button[data-testid="${ICON_BUTTON_ROOT_TEST_ID}"]`)).not.toBeInTheDocument();
    });

    it('should be not disabled when disabled property not provided', () => {
      render(<IconButton.Root disabled={false}>{ICON_BUTTON_ROOT_CONTENT}</IconButton.Root>);
      expect(screen.getByRole('button')).toBeEnabled();
    });

    it('should be disabled when disabled property provided', () => {
      render(<IconButton.Root disabled={true}>{ICON_BUTTON_ROOT_CONTENT}</IconButton.Root>);
      expect(screen.getByRole('button')).toBeDisabled();
    });

    it('should be not disabled when loading property not provided', () => {
      render(<IconButton.Root loading={false}>{ICON_BUTTON_ROOT_CONTENT}</IconButton.Root>);
      expect(screen.getByRole('button')).toBeEnabled();
    });

    it('should be disabled when loading property provided', () => {
      render(<IconButton.Root loading={true}>{ICON_BUTTON_ROOT_CONTENT}</IconButton.Root>);
      expect(screen.getByRole('button')).toBeDisabled();
    });

    it('should have not data-disabled attribute when disabled property not provided', () => {
      render(<IconButton.Root disabled={false}>{ICON_BUTTON_ROOT_CONTENT}</IconButton.Root>);
      expect(screen.getByRole('button')).not.toHaveAttribute('data-disabled');
    });

    it('should have data-disabled attribute when disabled property provided', () => {
      render(<IconButton.Root disabled={true}>{ICON_BUTTON_ROOT_CONTENT}</IconButton.Root>);
      expect(screen.getByRole('button')).toHaveAttribute('data-disabled');
    });

    it('should have not data-loading attribute when loading property not provided', () => {
      render(<IconButton.Root loading={false}>{ICON_BUTTON_ROOT_CONTENT}</IconButton.Root>);
      expect(screen.getByRole('button')).not.toHaveAttribute('data-loading');
    });

    it('should have data-loading attribute when loading property provided', () => {
      render(<IconButton.Root loading={true}>{ICON_BUTTON_ROOT_CONTENT}</IconButton.Root>);
      expect(screen.getByRole('button')).toHaveAttribute('data-loading');
    });

    it('should have class name handed over by className property', () => {
      const className = 'test';

      render(<IconButton.Root className={className}>{ICON_BUTTON_ROOT_CONTENT}</IconButton.Root>);
      expect(screen.getByRole('button')).toHaveClass(className);
    });
  });

  describe('Content', () => {
    it('should support ref', () => {
      const ref = createRef<HTMLSpanElement>();

      render(
        <IconButton.Root>
          <IconButton.Content ref={ref}>{ICON_BUTTON_CONTENT_CONTENT}</IconButton.Content>
        </IconButton.Root>
      );
      expect(ref.current).toBeInstanceOf(HTMLSpanElement);
    });

    it('should be span element when asChild property not provided', () => {
      const { container } = render(
        <IconButton.Root>
          <IconButton.Content data-testid={ICON_BUTTON_CONTENT_TEST_ID}>
            {ICON_BUTTON_CONTENT_CONTENT}
          </IconButton.Content>
        </IconButton.Root>
      );

      expect(screen.getByTestId(ICON_BUTTON_CONTENT_TEST_ID)).toBeInstanceOf(HTMLSpanElement);
      // eslint-disable-next-line testing-library/no-container, testing-library/no-node-access
      expect(container.querySelector(`span[data-testid="${ICON_BUTTON_CONTENT_TEST_ID}"]`)).toBeInTheDocument();
    });

    it('should be Slot element when asChild property provided', () => {
      const { container } = render(
        <IconButton.Root>
          <IconButton.Content asChild data-testid={ICON_BUTTON_CONTENT_TEST_ID}>
            <div>{ICON_BUTTON_CONTENT_CONTENT}</div>
          </IconButton.Content>
        </IconButton.Root>
      );

      expect(screen.getByTestId(ICON_BUTTON_CONTENT_TEST_ID)).toBeInstanceOf(HTMLDivElement);
      // eslint-disable-next-line testing-library/no-container, testing-library/no-node-access
      expect(container.querySelector(`span[data-testid="${ICON_BUTTON_CONTENT_TEST_ID}"]`)).not.toBeInTheDocument();
    });

    it('should have not data-disabled attribute when disabled property not provided on Root element', () => {
      render(
        <IconButton.Root disabled={false}>
          <IconButton.Content data-testid={ICON_BUTTON_CONTENT_TEST_ID}>
            {ICON_BUTTON_CONTENT_CONTENT}
          </IconButton.Content>
        </IconButton.Root>
      );
      expect(screen.getByTestId(ICON_BUTTON_CONTENT_TEST_ID)).not.toHaveAttribute('data-disabled');
    });

    it('should have data-disabled attribute when disabled property provided on Root element', () => {
      render(
        <IconButton.Root disabled={true}>
          <IconButton.Content data-testid={ICON_BUTTON_CONTENT_TEST_ID}>
            {ICON_BUTTON_CONTENT_CONTENT}
          </IconButton.Content>
        </IconButton.Root>
      );
      expect(screen.getByTestId(ICON_BUTTON_CONTENT_TEST_ID)).toHaveAttribute('data-disabled');
    });

    it('should have not data-loading attribute when loading property not provided on Root element', () => {
      render(
        <IconButton.Root loading={false}>
          <IconButton.Content data-testid={ICON_BUTTON_CONTENT_TEST_ID}>
            {ICON_BUTTON_CONTENT_CONTENT}
          </IconButton.Content>
        </IconButton.Root>
      );
      expect(screen.getByTestId(ICON_BUTTON_CONTENT_TEST_ID)).not.toHaveAttribute('data-loading');
    });

    it('should have data-loading attribute when loading property provided on Root element', () => {
      render(
        <IconButton.Root loading={true}>
          <IconButton.Content data-testid={ICON_BUTTON_CONTENT_TEST_ID}>
            {ICON_BUTTON_CONTENT_CONTENT}
          </IconButton.Content>
        </IconButton.Root>
      );
      expect(screen.getByTestId(ICON_BUTTON_CONTENT_TEST_ID)).toHaveAttribute('data-loading');
    });

    it('should have class name handed over by className property', () => {
      const className = 'test';

      render(
        <IconButton.Root disabled={false}>
          <IconButton.Content data-testid={ICON_BUTTON_CONTENT_TEST_ID} className={className}>
            {ICON_BUTTON_CONTENT_CONTENT}
          </IconButton.Content>
        </IconButton.Root>
      );
      expect(screen.getByTestId(ICON_BUTTON_CONTENT_TEST_ID)).toHaveClass(className);
    });
  });

  describe('Loader', () => {
    it('should support ref', () => {
      const ref = createRef<HTMLSpanElement>();

      render(
        <IconButton.Root loading={true}>
          <IconButton.Loader ref={ref}>{ICON_BUTTON_LOADER_CONTENT}</IconButton.Loader>
        </IconButton.Root>
      );
      expect(ref.current).toBeInstanceOf(HTMLSpanElement);
    });

    it('should be div element when asChild property not provided', () => {
      const { container } = render(
        <IconButton.Root loading={true}>
          <IconButton.Loader data-testid={ICON_BUTTON_LOADER_TEST_ID}>{ICON_BUTTON_LOADER_CONTENT}</IconButton.Loader>
        </IconButton.Root>
      );

      expect(screen.getByTestId(ICON_BUTTON_LOADER_TEST_ID)).toBeInstanceOf(HTMLSpanElement);
      // eslint-disable-next-line testing-library/no-container, testing-library/no-node-access
      expect(container.querySelector(`span[data-testid="${ICON_BUTTON_LOADER_TEST_ID}"]`)).toBeInTheDocument();
    });

    it('should be Slot element when asChild property provided', () => {
      const { container } = render(
        <IconButton.Root loading={true}>
          <IconButton.Loader asChild data-testid={ICON_BUTTON_LOADER_TEST_ID}>
            <div>{ICON_BUTTON_LOADER_CONTENT}</div>
          </IconButton.Loader>
        </IconButton.Root>
      );

      expect(screen.getByTestId(ICON_BUTTON_LOADER_TEST_ID)).toBeInstanceOf(HTMLDivElement);
      // eslint-disable-next-line testing-library/no-container, testing-library/no-node-access
      expect(container.querySelector(`span[data-testid="${ICON_BUTTON_LOADER_TEST_ID}"]`)).not.toBeInTheDocument();
    });

    it('should be not render when loading property not provided on Root element', () => {
      render(
        <IconButton.Root loading={false}>
          <IconButton.Loader data-testid={ICON_BUTTON_LOADER_TEST_ID}>{ICON_BUTTON_LOADER_CONTENT}</IconButton.Loader>
        </IconButton.Root>
      );
      expect(screen.queryByTestId(ICON_BUTTON_LOADER_TEST_ID)).not.toBeInTheDocument();
    });

    it('should have not data-disabled attribute when disabled property not provided on Root element', () => {
      render(
        <IconButton.Root loading={true} disabled={false}>
          <IconButton.Loader data-testid={ICON_BUTTON_LOADER_TEST_ID}>{ICON_BUTTON_LOADER_CONTENT}</IconButton.Loader>
        </IconButton.Root>
      );
      expect(screen.getByTestId(ICON_BUTTON_LOADER_TEST_ID)).not.toHaveAttribute('data-disabled');
    });

    it('should have data-disabled attribute when disabled property provided on Root element', () => {
      render(
        <IconButton.Root loading={true} disabled={true}>
          <IconButton.Loader data-testid={ICON_BUTTON_LOADER_TEST_ID}>{ICON_BUTTON_LOADER_CONTENT}</IconButton.Loader>
        </IconButton.Root>
      );
      expect(screen.getByTestId(ICON_BUTTON_LOADER_TEST_ID)).toHaveAttribute('data-disabled');
    });

    it('should have class name handed over by className property', () => {
      const className = 'test';

      render(
        <IconButton.Root loading={true}>
          <IconButton.Loader className={className} data-testid={ICON_BUTTON_LOADER_TEST_ID}>
            {ICON_BUTTON_LOADER_CONTENT}
          </IconButton.Loader>
        </IconButton.Root>
      );
      expect(screen.getByTestId(ICON_BUTTON_LOADER_TEST_ID)).toHaveClass(className);
    });
  });
});
